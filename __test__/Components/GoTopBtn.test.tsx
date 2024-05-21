import GoTopBtn from '@/Components/GoTopBtn';
import { render, screen } from '@testing-library/react';

const handleClick = () => {
return ''
}

it.skip('renders button correctly', ()=>{
    render(<GoTopBtn handleClick={handleClick} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})