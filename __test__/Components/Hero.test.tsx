import Hero from '@/Components/Hero';
import { render, screen } from '@testing-library/react';

describe('hero component', () => {
    it('renders section without crashing', ()=> {
        render(<Hero/>)
        const section = screen.getByTestId('home')
        expect(section).toBeInTheDocument()
    })

    it('renders heading correctly', () => {
        render(<Hero />);
        const h1Heading = screen.getByRole('heading', {level: 1});
        expect(h1Heading).toBeInTheDocument();
    })

    it('renders project button', () => {
        render(<Hero />);
        const button = screen.getByRole('button', {name: /Projects/});
        expect(button).toBeInTheDocument();
    })

    it('renders resume link', ()=> {
        render(<Hero />)
        const link = screen.getByRole('link', {name: 'Resume'})
        expect(link).toBeInTheDocument();
    })
});