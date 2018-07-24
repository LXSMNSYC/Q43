# Q43
A Quadtree class for JS/ES
## Install
```bash
npm i q43
```

### API

<a name="Q43"></a>
## Q43(ax, ay, bx, by, cap) ⇒ <code>Q43</code>
Create a Q43 instance

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| ax | <code>Number</code> | minimum X of the Q43 boundary |
| ay | <code>Number</code> | minimum Y of the Q43 boundary |
| bx | <code>Number</code> | maximum X of the Q43 boundary | 
| by | <code>Number</code> | maximum Y of the Q43 boundary |
| cap | <code>Number</code> | The amount of points a Q43 instance can store. |

<a name="containsX"></a>
## containsX(px) ⇒ <code>Boolean</code>
Check if x is within the Q43's x-axis

**Kind**: global function

| Param | Type |
| --- | --- |
| px | <code>Number</code> |

<a name="containsY"></a>

## containsY(py) ⇒ <code>Boolean</code>
Check if y is within the Q43's x-axis

**Kind**: global function

| Param | Type |
| --- | --- |
| py | <code>Number</code> |

<a name="containsPoint"></a>

## containsPoint(px, py) ⇒ <code>Boolean</code>
Check if point is within the Q43's x-axis

**Kind**: global function

| Param | Type |
| --- | --- |
| px | <code>Number</code> |
| py | <code>Number</code> |

<a name="subdivide"></a>

## subdivide()
Subdivide the Q43 into four equal parts.

**Kind**: global function
<a name="insert"></a>

## insert(pt) ⇒ <code>Boolean</code>
Insert a point to the Q43

**Kind**: global function

| Param | Type |
| --- | --- |
| pt | <code>Array</code> |

<a name="remove"></a>

## remove(pt) ⇒ <code>Boolean</code>
Remove a point from the Q43

**Kind**: global function

| Param | Type |
| --- | --- |
| pt | <code>Array</code> |

<a name="query"></a>

## query(cond) ⇒ <code>Array</code>
Get all points from the Q43 given a condition

**Kind**: global function
**Returns**: <code>Array</code> - - array of points

| Param | Type | Description |
| --- | --- | --- |
| cond | <code>function</code> | the filter function |

<a name="all"></a>

## all() ⇒ <code>Array</code>
Get all points from the Q43

**Kind**: global function
**Returns**: <code>Array</code> - - array of points
<a name="queryBounds"></a>

## queryBounds(ax, ay, bx, by, cond) ⇒ <code>Array</code>
Get all points from a Q43 that is within a given boundary and passes the condition

**Kind**: global function
**Returns**: <code>Array</code> - - array of points

| Param | Type | Description |
| --- | --- | --- |
| ax | <code>Number</code> | minimum x of the given boundary |
| ay | <code>Number</code> | minimum y of the given boundary |
| bx | <code>Number</code> | maximum x of the given boundary |
| by | <code>Number</code> | maximum y of the given boundary |
| cond | <code>function</code> | a filter function, optional |

<a name="queryRange"></a>

## queryRange(px, py, radius, cond) ⇒ <code>Array</code>
Gets all points within the radius of another point from the Q43

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| px | <code>Number</code> |  |
| py | <code>Number</code> |  |
| radius | <code>Number</code> |  |
| cond | <code>function</code> | filter function, optional |

<a name="for"></a>

## for(handler)
Iterates all points in the Q43 and passes them to a handler function

**Kind**: global function

| Param | Type |
| --- | --- |
| handler | <code>function</code> |

<a name="forBounds"></a>

## forBounds(ax, ay, bx, by, handler)
Iterates all points in the Q43 that are within the bounds
and passes them to a handler function.
**Kind**: global function

| Param | Type |
| --- | --- |
| ax | <code>Number</code> |
| ay | <code>Number</code> |
| bx | <code>Number</code> |
| by | <code>Number</code> |
| handler | <code>function</code> |

<a name="forRange"></a>

## forRange(px, py, radius, handler)
Iterates all points within the radius of another point in the Q43
and passes them to a handler.

**Kind**: global function

| Param | Type |
| --- | --- |
| px | <code>Number</code> |
| py | <code>Number</code> |
| radius | <code>Number</code> |
| handler | <code>function</code> |

<a name="rebuild"></a>

## rebuild() ⇒ <code>Q43</code>
This is useful for rebuilding a quadtree whose points have updated coordinates.

**Kind**: global function
<a name="update"></a>

## update()
Unlike the rebuild method, the update method does not restore subdivided empty Q43s.

**Kind**: global function
<a name="size"></a>

## size() ⇒ <code>Number</code>
Calculates the amount of points a Q43 has.

**Kind**: global function
<a name="draw"></a>

## draw(ctx, tree, point)
For debugging purposes

**Kind**: global function

| Param | Type |
| --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> |
| tree | <code>Boolean</code> |
| point | <code>Boolean</code> |
