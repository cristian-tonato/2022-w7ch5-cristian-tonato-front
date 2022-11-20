import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Given Footer component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(<Footer />);
        });
        test("Then it should display the creator's surname", () => {
            const element = screen.getByText(/Tonato/i);
            expect(element).toBeInTheDocument();
        });
    });
});
