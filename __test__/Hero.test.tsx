import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '@/Components/Hero';

describe('Home', () => {
    test('renders a heading', () => {
        render(<Hero />);

        const heading = screen.getByRole('heading', { level: 1 });

        expect(heading).toBeInTheDocument();
    });
});
