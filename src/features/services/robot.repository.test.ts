import { RobotRepository } from "./robot.repository";

describe("Given RobotRepository Service", () => {
    let service: RobotRepository;
    beforeEach(() => {
        service = new RobotRepository();
    });

    test("Then if i use service.error(), it should return an error", () => {
        const error = service.createError(
            new Response("Error", {
                status: 400,
                statusText: "error",
            })
        );
        const result = new Error("Error 400: error");
        result.name = "HTTPError";
        expect(error).toEqual(result);
    });

    describe("When we instantiate getAll(),", () => {
        test("It should return a Promise of an Array of Robots", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({ robots: [] }),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });

        test("If an error happens, it should throw an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.getAll();
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
    });

    describe("When we instantiate create(),", () => {
        test("it should return a Promise to create a Robot", async () => {
            const mockRobot = {
                name: "Pepe",
                img: "url.img",
                speed: 5,
                strength: 4,
                creationDate: "05/85",
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockRobot),
            });
            const result = await service.create(mockRobot);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockRobot);
        });

        test("If an error happens, it should throw an error", async () => {
            const mockRobot = {
                name: "Pepe",
                img: "url.img",
                speed: 5,
                strength: 4,
                creationDate: "05/85",
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.create(mockRobot);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
    });

    describe("When we instantiate update(),", () => {
        test("it should return a Promise of a new Robot", async () => {
            const mockRobot = {
                name: "Pepe",
                img: "url.img",
                speed: 5,
                strength: 4,
                creationDate: "05/85",
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mockRobot]),
            });
            const result = await service.update({
                name: "Pepe",
            });
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([mockRobot]);
        });

        test("If an error happens, it should throw an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.update({});
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
    });

    describe("When we instantiate delete(),", () => {
        test("it should delete a Robot", async () => {
            const mockRobot = {
                id: "as12df3",
                name: "Pepe",
                img: "url.img",
                speed: 5,
                strength: 4,
                creationDate: "05/85",
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await service.delete(mockRobot.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });

        test("If an error happens, it should throw an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.delete("a5s4d");
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
    });
});
