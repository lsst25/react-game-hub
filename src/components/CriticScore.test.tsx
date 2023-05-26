import { render, screen } from '../utils/test-utils'
import CriticScore from "./CriticScore";

describe('Input', async () => {
    it('should render the input', () => {
        const score = 90;
        render(
            <CriticScore score={score}/>,
        )

        const badgeElement = screen.getByText(new RegExp(`^${score}$`));
        expect(badgeElement).toBeInTheDocument();
    });
});
