import Footer from '@/Components/Footer';
import { render, screen } from '@testing-library/react';

describe('footer component', () => {
    it('renders footer', () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });
})