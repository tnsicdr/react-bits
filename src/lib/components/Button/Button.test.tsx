import { render, screen } from "@testing-library/react"
import Button from "./Button"

describe('<Button />', () => {
  it('should render children', () => {
    render(<Button>Test Text</Button>);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  })
})