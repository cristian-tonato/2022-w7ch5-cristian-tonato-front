import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../infrastructure/store/store";
import { useRobot } from "../../hooks/userobot";

jest.mock("../../../hooks/userobot");

describe("Given RobotItem component", () => {
    describe("When we render the component", () => {
        test("Then it should display", async () => {
            const mockRobot = {
                id: "as12df3",
                name: "Linguo",
                img: "url.img",
                speed: 5,
                strength: 4,
                creationDate: "06/78",
            };

            (useRobot as jest.Mock).mockReturnValue({
                products: [mockRobot],
            });

            render(
                <Router>
                    <Provider store={appStore} children={undefined}></Provider>
                </Router>
            );
            const element = await screen.findByText(/Linguo/i);
            expect(element).toBeInTheDocument();
        });
    });
});
