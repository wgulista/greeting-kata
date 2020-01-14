const greet = require("./greet");

describe("The Greeting Kata", () => {

	test("Requirement 1, name equals Bob and return 'Hello, Bob.'", () => {	
		expect(greet("Bob")).toBe("Hello, Bob.");
	});

	test("Requirement 2, name is null and return 'Hello, my friend.'", () => {
		expect(greet()).toBe("Hello, my friend.");
	});

	test("Requirement 3, name is uppercase so all return is in uppercase", () => {
		expect(greet("JERRY")).toBe("HELLO JERRY!");
	});

	test("Requirement 4, name is an array so return all with 'and' separator", () => {
		expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
	});

	test("Requirement 5, name contains 3 names", () => {
		expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
	});

	test("Requirement 6, name contains 3 names and one uppercase name", () => {
		expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
	});

	test("Requirement 7, name is an array and a string contains comma", () => {
		expect(greet(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
	});

	test('Requirement 8, name is an array and a string have intentional commas', () => {
		expect(greet(["Bob", "\"Charlie, Dianne\""])).toBe("Hello, Bob and Charlie, Dianne.");
	});

});
