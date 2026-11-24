import {describe, it , expect } from "vitest";
import {highest} from "./index.js"

describe ("highest" , () => {
    it("Find the highest number", () => {
        const resultado = highest ([12, 5, 8, 20, 3, 15, 10, 7, 18, 4]);
        expect(resultado).toBe(20)
    })
})

