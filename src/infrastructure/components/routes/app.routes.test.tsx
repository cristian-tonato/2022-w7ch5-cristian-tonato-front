import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import "@testing-library/jest-dom";
import { appStore } from "../../store/store";
import { Provider } from "react-redux";

describe("Given AppRoutes component", () => {
    describe("When we render the component And the route is home", () => {
        render(
            <>
                <Router initialEntries={["/", "/home"]} initialIndex={0}>
                    <Provider store={appStore}>
                        <AppRoutes />
                    </Provider>
                </Router>
            </>
        );
        test("Then it should display the HomePage", () => {
            const element = screen.getByText(/Home/i);
            expect(element).toBeInTheDocument();
        });
    });
});
