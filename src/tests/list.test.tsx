import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import List from '../components/list';
import '@testing-library/jest-dom';

const mockInitialData = [
    { id: 1, userId: 1, title: 'Task 1', completed: true },
    { id: 2, userId: 2, title: 'Task 2', completed: false },
    { id: 3, userId: 3, title: 'Task 3', completed: true }
]

test('render tasks list', () => {
    render(<List initialData={mockInitialData} />);

    const task = screen.getByText('Task 1');
    expect(task).toBeInTheDocument();

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(3);
});

test('render tasks list with completed status', async () => {
    render(<List initialData={mockInitialData} />);

    const select = screen.getByRole('combobox');
    await user.selectOptions(select, 'completed');

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(2);
});

test('render tasks list with pending status', async () => {
    render(<List initialData={mockInitialData} />);

    const select = screen.getByRole('combobox');
    await user.selectOptions(select, 'pending');

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(1);
});

test('render search result tasks', async () => {
    render(<List initialData={mockInitialData} />);

    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.keyboard('Task 1');

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(1);
});


test('render search no result tasks', async () => {
    render(<List initialData={mockInitialData} />);

    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.keyboard('Task 4');

    expect(screen.getByText(/brak wyników dla/i)).toBeInTheDocument();
});

test('toggles task completed status when checkbox is clicked', async () => {
    render(<List initialData={mockInitialData} />);
    const checkbox = screen.getAllByRole('checkbox')[1];
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
});