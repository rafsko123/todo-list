import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Select from '../components/select';

test('render select with default value all', () => {
    render(<Select value="all" handleSelect={() => { }} />);

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

    const option = screen.getByRole('option', { name: 'Wszystkie' }) as HTMLOptionElement;
    expect(option.selected).toBe(true);

});

test('calls handleSelect on change', async () => {
    const handleSelectMock = jest.fn();
    render(<Select value="all" handleSelect={handleSelectMock} />);
    const select = screen.getByRole('combobox');

    await user.click(select);
    await user.selectOptions(select, 'completed');

    expect(handleSelectMock).toHaveBeenLastCalledWith('completed');
});

test('renders all filter options', () => {
    render(<Select value="all" handleSelect={() => { }} />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options.map(opt => opt.textContent)).toEqual([
        'Wszystkie',
        'Zakończone',
        'W trakcie',
    ]);
});