import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Input from '../components/input';
import { useState } from 'react';


function WrapperInput() {
    const [value, setValue] = useState('');
    return <Input value={value} handleGetValue={setValue} />;
}

test('renders search input', () => {
    render(<WrapperInput />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
});

test('calls handleGetValue when user types', async () => {
    const handleGetValueMock = jest.fn();

    function ControlledWrapper() {
        const [value, setValue] = useState('');
        return (
            <Input
                value={value}
                handleGetValue={(val) => {
                    handleGetValueMock(val);
                    setValue(val);
                }}
            />
        );
    }

    render(<ControlledWrapper />);

    const input = screen.getByRole('textbox');

    await user.click(input);
    await user.keyboard('test');

    expect(handleGetValueMock).toHaveBeenCalledTimes(4);
    expect(handleGetValueMock).toHaveBeenLastCalledWith('test');
});

test('input got value', () => {
    render(<Input value="test" handleGetValue={() => { }} />)
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('test');
})