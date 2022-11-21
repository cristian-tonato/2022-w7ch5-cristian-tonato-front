import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { RobotList } from "./robot.list";

describe("Given the RobotList component", () => {
    describe("When we render the component", () => {
        test("then it should display the Robot's list", () => {
            const mockRobot = [
                {
                    id: "as12df3",
                    name: "Pepe",
                    img: "url.img",
                    speed: 5,
                    strength: 4,
                    creationDate: "05/85",
                },
            ];
            render(
                <>
                    <Router>
                        <RobotList item={mockRobot}></RobotList>
                    </Router>
                </>
            );
            const element = screen.getByText(/Linguo/i);
            expect(element).toBeInTheDocument();
        });
    });
});
