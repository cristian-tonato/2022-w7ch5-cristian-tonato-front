import { Robot } from "..//..//models/robot";
import style from "./robot.item.module.css";

export function RobotItem({ item }: { item: Robot }) {
    return (
        <>
            <p className={style.text}>{item.name}</p>
            <img src={item.img} alt={"Image of" + item.name} height="200" />
            <div className={style.text}>
            <p>Speed: {item.speed}</p>
            <p>Strength: {item.strength}</p>
            <p>Creation Date: {item.creationDate}</p>
            </div>
        </>
    );
}
