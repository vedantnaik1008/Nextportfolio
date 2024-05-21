import About from '@/Components/About';
import { render, screen } from '@testing-library/react';

describe('about component', () => {
    it('renders section title correctly', () => {
        render(<About />);
        const sectionTitle = screen.getByRole('heading', { level: 2 });
        expect(sectionTitle).toBeInTheDocument();
    });

    it('renders role of the person correctly', () => {
        render(<About />);
        const roleOfThePerson = screen.getByRole('heading', { level: 3 });
        expect(roleOfThePerson).toBeInTheDocument();
    });

    it('renders correct name', () => {
        render(<About />);
        const name = screen.getByText('My name is vedant naik');
        expect(name).toBeInTheDocument();
    });

    it('renders correct age', () => {
        render(<About />);
        const age = screen.getByText('I am 22 years old');
        expect(age).toBeInTheDocument();
    });

    it('renders correct education', () => {
        render(<About />);
        const education = screen.getByText(
            'I have only completed my higher secondary education'
        );
        expect(education).toBeInTheDocument();
    });

    it('renders correct location', () => {
        render(<About />);
        const age = screen.getByText('I am from Goa, India');
        expect(age).toBeInTheDocument();
    });

    it('renders correct email', () => {
        render(<About />);
        const age = screen.getByText('Email: vedunaik777@gmail.com');
        expect(age).toBeInTheDocument();
    });
});
