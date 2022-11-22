import { Robot } from "..//..//models/robot";

export function RobotItem({ item }: { item: Robot }) {
    return (
        <>
            <p>{item.name}</p>
            <img src={item.img} alt={"Image of" + item.name} height="200" />
            <p>Speed: {item.speed}</p>
            <p>Strength: {item.strength}</p>
            <p>Creation Date: {item.creationDate}</p>
        </>
    );
}
