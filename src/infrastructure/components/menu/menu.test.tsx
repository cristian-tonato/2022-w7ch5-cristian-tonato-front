import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Menu } from "./menu";

describe("Given Menu component", () => {
    describe("When we render the component", () => {
        test('Then it should display "Favs"', () => {
            render(
                <>
                    <Router>
                        <Menu />
                    </Router>
                </>
            );
            const element = screen.getByText(/Favs/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display "Inicio"', () => {
            render(
                <>
                    <Router>
                        <Menu />
                    </Router>
                </>
            );
            const element = screen.getByText(/Home/i);
            expect(element).toBeInTheDocument();
        });
    });
});
