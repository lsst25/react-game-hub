import { render, screen } from '../../utils/test-utils'
import CriticScore from "./CriticScore";

describe('Critic Score', async () => {
    it('should render the appropriate score from the props', () => {
        const score = 90;
        render(
            <CriticScore score={score}/>,
        )

        const badgeElement = screen.getByText(new RegExp(`^${score}$`));
        expect(badgeElement).toBeInTheDocument();
    });
});
