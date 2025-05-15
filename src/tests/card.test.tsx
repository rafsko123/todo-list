import { render, screen } from '@testing-library/react';
import user from "@testing-library/user-event";

import Card from '../components/card';
import type { TODO_Element } from '@/types/todo';

const mockTodo: TODO_Element = {
  id: 1,
  userId: 1,
  title: 'Testowy tytuł',
  completed: false,
};

describe('Card', () => {

  it('render card title', () => {
    render(<Card element={mockTodo} handleChangeStatus={() => { }} />);
    expect(screen.getByText(/Testowy tytuł/i)).toBeInTheDocument();
  });

  it('check checkbox status change', async () => {
    const handleChangeMock = jest.fn();
    render(<Card element={mockTodo} handleChangeStatus={handleChangeMock} />);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(handleChangeMock).toHaveBeenCalledWith(mockTodo.id);
  });

  it('check checkbox status if task completed', () => {
    render(<Card element={{ ...mockTodo, completed: true }} handleChangeStatus={() => { }} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
});