import Skills from "@/Components/Skills";
import { render, screen } from "@testing-library/react";

describe('skills component', ()=> {
    it('renders section title correctly', () => {
        render(<Skills />);
        const sectionTitle = screen.getByRole('heading', { level: 2 });
        expect(sectionTitle).toBeInTheDocument();
    });

    it('renders sub heading Languages correctly', () => {
        render(<Skills />);
        const h3Element = screen.getByRole('heading', { name: 'Languages' });
        expect(h3Element).toBeInTheDocument();
    });

    it('renders sub heading Hoisting Platforms correctly', () => {
        render(<Skills />);
        const h3Element = screen.getByRole('heading', {
            name: 'Hoisting Platforms'
        });
        expect(h3Element).toBeInTheDocument();
    });

    it('renders sub heading Tools correctly', () => {
        render(<Skills />);
        const h3Element = screen.getByRole('heading', { name: 'Tools' });
        expect(h3Element).toBeInTheDocument();
    });
})