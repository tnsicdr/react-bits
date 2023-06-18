import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Toggle from "./Toggle";

describe('<Toggle />', () => {
  it('should toggle on click', () => {
    const onToggle = vi.fn();
    render(<Toggle name='test' isToggled={false} onToggle={(v) => onToggle(v)} />);

    expect(screen.getByTestId('test-toggle-input')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('test-toggle-input'));

    expect(onToggle).toHaveBeenCalled();
  })
})