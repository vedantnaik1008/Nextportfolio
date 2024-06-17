import Footer from '@/Components/Footer';
import { socials } from '@/data/Socials';
import { render, screen } from '@testing-library/react';

describe('footer component', () => {
    it('renders footer', () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });

    it('render proper copyright', () => {
        render(<Footer />);
        const copyrightNotice = screen.getByText(/© \d{4}/i);
        expect(copyrightNotice).toBeInTheDocument();

        const ulElement = screen.getByRole('list')
        expect(ulElement).toBeInTheDocument()

        const linkElement = screen.getAllByRole('listitem');
        expect(linkElement.length).toBe(socials.length);
    });


});
