import Header from '../../Components/Header';
import { render, screen } from '@testing-library/react';

it('renders heading correctly', () => {
    render(<Header />);
    const h1Heading = screen.getByText('Vedant.Dev');
    expect(h1Heading).toBeInTheDocument();
});
