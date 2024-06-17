import Header from '@/Components/Header';
import { render, screen } from '@testing-library/react';

describe('header component', ()=> {
    it('renders the header with the logo and navigation', () => {
        render(<Header />);
        const headerElement = screen.getByRole('banner');
        expect(headerElement).toBeInTheDocument();

        const heading = screen.getByRole('heading', { name: 'Vedant.Dev' });
        expect(heading).toBeInTheDocument();

        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
    });
})