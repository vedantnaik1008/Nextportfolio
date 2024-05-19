import Hero from '@/Components/Hero';
import { render, screen } from '@testing-library/react';

it('renders heading correctly', () => {
    render(<Hero />);
    const h1Heading = screen.getByText(/hi there, welcome/i);
    expect(h1Heading).toBeInTheDocument();
});
