const Q43 = require("../bundle.js").default;

describe("Q43", () => {
    let quadtree;
    let point = [64, 64];

    beforeEach(() =>{
        quadtree = new Q43(0, 0, 128, 128);
    });

    describe("containsX", () => {
        it("should return true on minX < x < maxX", () => {
            quadtree.containsX(64);
        });
    });
    describe("containsY", () => {
        it("should return true on minX < x < maxX", () => {
            quadtree.containsY(64);
        });
    });
    describe("containsPoint", () =>{
        it("should return true on min < (x, y) < max", () =>{
            quadtree.containsPoint(64, 64);
        });
    });
    describe("subdivide", () => {
        it("should subdivide the quadtree", () =>{
            quadtree.subdivide();
        });
    });
    describe("insert", () =>{
        it("should insert an array representation of point", () => {
            quadtree.insert(point);
        });
    });
    describe("remove", () =>{
        it("should remove an inserted point", () => {
            quadtree.remove(point);
        });
    });
    describe("query", () =>{
        it("should return a filtered array of points", () =>{
            quadtree.insert([0, 1]);
            quadtree.insert([1, 2]);
            quadtree.insert([2, 3]);
            quadtree.insert([3, 4]);

            quadtree.query(p => {
                return true;
            });
        });
    });
    describe("all", () =>{
        it("should return an array of all points", () =>{
            quadtree.all();
        });
    });
    describe("queryBounds", () =>{
        it("should return an array of all points", () =>{
            quadtree.queryBounds(0, 0, 4, 4);
        });
    });
    describe("queryBounds", () =>{
        it("should return an array of points within bounds", () =>{
            quadtree.queryBounds(0, 0, 4, 4);
        });
    });
    describe("queryRange", () => {
        it("should return an array of points within range", () =>{
            quadtree.queryRange(0, 0, 4);
        });
    });
    describe("for", () => {
        it("should iterate all points", () =>{
            quadtree.for(p => {
                p;
            });
        });
    });
    describe("forBounds", () => {
        it("should iterate all points within bounds", () =>{
            quadtree.forBounds(0, 0, 4, 4, p => {
                p;
            });
        });
    });
    describe("forRange", () => {
        it("should iterate all points within bounds", () =>{
            quadtree.forRange(0, 0, 4, p => {
                p;
            });
        });
    });
    describe("rebuild", () => {
        it("should rebuild the quadtree", () =>{
            quadtree = quadtree.rebuild();
        });
    });
    describe("update", () => {
        it("should update the quadtree", () =>{
            quadtree.update();
        });
    });
    describe("size", () => {
        it("should return the size of the quadtree (by points)", () =>{
            quadtree.size();
        });
    });
});