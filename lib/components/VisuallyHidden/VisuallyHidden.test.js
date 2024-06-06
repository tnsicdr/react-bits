"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var VisuallyHidden_1 = require("./VisuallyHidden");
describe("VisuallyHidden", function () {
    it("renders contents", function () {
        (0, react_1.render)(<VisuallyHidden_1.VisuallyHidden>Visually Hidden</VisuallyHidden_1.VisuallyHidden>);
        expect(react_1.screen.getByText("Visually Hidden")).toBeInTheDocument();
    });
    it("renders with the right tag", function () {
        (0, react_1.render)(<VisuallyHidden_1.VisuallyHidden as="p">Visually Hidden</VisuallyHidden_1.VisuallyHidden>);
        expect(react_1.screen.getByText("Visually Hidden").tagName).toEqual("P");
    });
});
