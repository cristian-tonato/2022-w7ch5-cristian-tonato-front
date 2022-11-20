import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../infrastructure/store/store";
import { ProtoRobot, Robot } from "..//models/robot";
import * as ac from "../reducer/action.creator";
import { RobotRepository } from "../services/robot.repository";

export const useRobot = () => {
    const robots = useSelector((state: rootState) => state.robots);
    const dispatcher = useDispatch();
    const apiRobot = useMemo(() => new RobotRepository(), []);

    useEffect(() => {
        apiRobot
            .getAll()
            .then((robots) => dispatcher(ac.loadActionCreator(robots)));
    }, [apiRobot, dispatcher]);

    const handleAdd = (newRobot: ProtoRobot) => {
        apiRobot
            .create(newRobot)
            .then((robot: Robot) => dispatcher(ac.addActionCreator(robot)));
    };

    const handleUpdate = (updateRobot: Partial<Robot>) => {
        apiRobot
            .update(updateRobot)
            .then((robot: Robot) => dispatcher(ac.updateActionCreator(robot)));
    };

    const handleDelete = (robot: Robot) => {
        apiRobot
            .delete(robot.id)
            .then(() => dispatcher(ac.deleteActionCreator(robot)));
    };

    return {
        robots,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
