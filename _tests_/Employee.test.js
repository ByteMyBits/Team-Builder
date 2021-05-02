const Employee = require("../lib/Employee");

let employee = new Employee("Jack", 123, "jack@internet.com");

describe("Employee class", () => {

    it("Returns name of Jack", () => {
        expect(employee.getName()).toBe("Jack");
    });

    it("Returns ID of 123", () => {
        expect(employee.getID()).toBe(123);
    });

    it("Returns e-mail of jack@internet.com", () => {
        expect(employee.getEmail()).toBe("jack@internet.com");
    });

    it("Returns role of Employee", () => {
        expect(employee.getRole()).toBe("Employee");
    });

});