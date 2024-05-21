import About from "@/Components/About"
import { render, screen } from "@testing-library/react"

describe('about component', ()=> {
    it('renders section title correctly', ()=> {
        render(<About />);
        const sectionTitle = screen.getByRole('heading', {level: 2});
        expect(sectionTitle).toBeInTheDocument()
    })
})