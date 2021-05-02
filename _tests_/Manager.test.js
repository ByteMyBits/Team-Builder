const Manager = require("../lib/Manager");

let manager = new Manager("Jack", 123, "jack@internet.com", 404);

describe("Manager class", () => {

    it("Returns name of Jack", () => {
        expect(manager.getName()).toBe("Jack");
    });

    it("Returns ID of 123", () => {
        expect(manager.getID()).toBe(123);
    });

    it("Returns e-mail of jack@internet.com", () => {
        expect(manager.getEmail()).toBe("jack@internet.com");
    });

    it("Returns office number 404", () => {
        expect(manager.getOfficeNumber()).toBe(404);
    });

    it("Returns role of Manager", () => {
        expect(manager.getRole()).toBe("Manager");
    });

});