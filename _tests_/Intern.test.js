const Intern = require("../lib/Intern");

let intern = new Intern("Jack", 123, "jack@internet.com", "ByteMyBits");

describe("Intern class", () => {

    it("Returns name of Jack", () => {
        expect(intern.getName()).toBe("Jack");
    });

    it("Returns ID of 123", () => {
        expect(intern.getID()).toBe(123);
    });

    it("Returns e-mail of jack@internet.com", () => {
        expect(intern.getEmail()).toBe("jack@internet.com");
    });

    it("Returns school of Manchester University", () => {
        expect(intern.getSchool()).toBe("ByteMyBits");
    });

    it("Returns role of Intern", () => {
        expect(intern.getRole()).toBe("Intern");
    });

});