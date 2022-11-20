import { Robot } from "../models/robot";
import { actionTypes } from "./action.types";
import { robotReducer } from "./reducer";

describe("Given the function robotReducer", () => {
    const mockRobot = {
        id: "as12df3",
        name: "Linguo",
        img: "url.img",
        speed: 5,
        strength: 4,
        creationDate: "05/85",
    };

    let action: { type: string; payload: unknown };
    let state: Array<Robot>;

    describe("When the action is load", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [mockRobot],
            };
        });
        test("Then the returned state should be the action payload", () => {
            const result = robotReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe("When the action is add", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: mockRobot,
            };
        });
        test("Then the returned state should be the action payload", () => {
            const result = robotReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe("When the action is update and the id is valid", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...mockRobot, title: "Update product" },
            };
            state = [mockRobot];
        });
        test("Then the returned state should include the action payload", () => {
            const result = robotReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe("When the action is update and the id is not valid", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...mockRobot, id: "2", title: "Update product" },
            };
            state = [mockRobot];
        });
        test("Then the returned state should be the action payload", () => {
            const result = robotReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe("When the action is delete", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: mockRobot,
            };
            state = [mockRobot];
        });
        test("Then the returned state should not include the action payload", () => {
            const result = robotReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe("When the action is delete and the id is not valid", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: { ...mockRobot, id: "2" },
            };
            state = [mockRobot];
        });
        test("Then the returned state should not include the action payload", () => {
            const result = robotReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe("When the action is any other", () => {
        beforeEach(() => {
            action = {
                type: "",
                payload: null,
            };
            state = [mockRobot];
        });
        test("Then the returned state should not include the action payload", () => {
            const result = robotReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
