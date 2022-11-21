import { RobotList } from "..//components/robot.list/robot.list";
import { useRobot } from "../hooks/userobot";

export function HomePage() {
    const { robots } = useRobot();

    return (
        <main>
            <h2>Home</h2>
            <RobotList item={robots}></RobotList>
        </main>
    );
}
