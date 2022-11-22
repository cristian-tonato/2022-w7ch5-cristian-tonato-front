import { Robot } from "../..//models/robot";
import { RobotItem } from "../robot.item/robot.item";
import style from "./robot.list.module.css";

export function RobotList({ item }: { item: Robot[] }) {
    return (
        <>
            <div>
                <ul>
                    {item.map((item: Robot) => (
                        <div className={style.container}>
                            <li className={style.list} key={item.id}>
                                <RobotItem item={item}></RobotItem>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
}
