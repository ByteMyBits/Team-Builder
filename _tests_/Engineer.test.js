const Engineer = require("../lib/Engineer");

let engineer = new Engineer("Jack", 123, "jack@internet.com", "ByteMyBits");

describe("Engineer class", () => {

    it("Returns name of Jack", () => {
        expect(engineer.getName()).toBe("Jack");
    });

    it("Returns ID of 123", () => {
        expect(engineer.getID()).toBe(123);
    });

    it("Returns e-mail of jack@internet.com", () => {
        expect(engineer.getEmail()).toBe("jack@internet.com");
    });

    it("Returns GitHub of ByteMyBits", () => {
        expect(engineer.getGithub()).toBe("ByteMyBits");
    });

    it("Returns role of Engineer", () => {
        expect(engineer.getRole()).toBe("Engineer");
    });

});