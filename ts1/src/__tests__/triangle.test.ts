import { isTriangle } from "../is_triangle";


describe('triangle',() => {
    test('tri001',() => {
        expect(isTriangle(1,1,1)).toBe(true);
        expect(isTriangle(1,1,3)).toBe(false);
    });
});
