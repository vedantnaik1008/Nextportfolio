import { modalProps } from '@/Components/Modal';
import Work from '@/Components/Work';
import { projectData } from '@/data/ProjectData';
import { fireEvent, render, screen } from '@testing-library/react';

// Mock the dynamic import for Modal
jest.mock('../../Components/Modal', () => ({
    __esModule: true,
    default: ({ isClicked, setIsClicked }: modalProps) =>
        isClicked &&
        projectData.map(
            (item) =>
                item.id === isClicked && (
                    <div data-testid='modal' key={item.id}>
                        <button
                            data-testid='close'
                            onClick={() => setIsClicked('')}>
                            Close
                        </button>
                    </div>
                )
        )
}));

describe('work component', () => {
    it('renders section title correctly', () => {
        render(<Work />);
        const sectionTitle = screen.getByRole('heading', {
            name: /my latest projects/i
        });
        expect(sectionTitle).toBeInTheDocument();
    });

    it('renders all projectData items', () => {
        render(<Work />);
        const projectDataLength = screen.getAllByAltText('project-img');
        expect(projectDataLength.length).toBe(projectData.length);
    });

    it('clicking on project image to set isClicked state ', () => {
        render(<Work />);
        const projectImages = screen.getAllByAltText('project-img');
        fireEvent.click(projectImages[0]);
        const modal = screen.getByTestId('modal');
        expect(modal).toBeInTheDocument();
    });

    it('modal closed when close button is clicked', () => {
        render(<Work />);
        const projectImages = screen.getAllByAltText('project-img');
        fireEvent.click(projectImages[0]);
        const close = screen.getByTestId('close');
        fireEvent.click(close);
        const modal = screen.queryByTestId('modal');
        expect(modal).not.toBeInTheDocument();
    });
});
