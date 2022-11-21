import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import {HomePage} from "./home.page";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { appStore } from "../../infrastructure/store/store";
export default HomePage;

describe("Given Home component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(
                <Router>
                    <Provider store={appStore}>
                        <HomePage />
                    </Provider>
                </Router>
            );
        });
        test("Then it should display the title", () => {
            const element = screen.getByText(/Inicio/i);
            expect(element).toBeInTheDocument();
        });
    });
});
