import { Robot } from "../..//models/robot";
import { RobotItem } from "../robot.item/robot.item";

export function RobotList({ item }: { item: Robot[] }) {
    return (
        <div>
            <ul>
                {item[0].id &&
                    item.map((item: Robot) => (
                        <li key={item.id}>
                            <RobotItem item={item}></RobotItem>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
