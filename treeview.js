
function drawEdge(edge, context, params) {
	// get array of points and draw a line
}


function drawNodePoint(point, context, params) {
	// get point.x:point.y and draw a circle
}

function drawNodeText(point, context, params) {
	// get point.value and print to point.x:point.y
}

function drawNode(point, context, params) {
	drawNodeText(point, context, params);
	drawNodePoint(point, context, params);
}

function Treeview(tree, canvas, params) {
	// get context
	var ctx = canvas.getContext("2d");
	
	// apply width and height of canvas
	ctx.width = canvas.width;
	ctx.height = canvas.height;
	
	// value in percentage of context height
	ctx.hp = function(percent) { return (percent/100) * this.height; }
	
	// value in percentage of context width
	ctx.wp = function(percent) { return (percent/100) * this.width; }
	
	// TASK recursive tree traversal
	
	/* test for wp and hp
	console.log("50% of width:", ctx.wp(50));
	console.log("50% of height:", ctx.wp(50));
	test OK */
	
	/* test for draw function */
	var fooNode0 = {value:42, x:ctx.wp(50), y:ctx.hp(50)};
	var fooNode1 = {value:14, x:ctx.wp(80), y:ctx.hp(80)};
	var fooNode2 = {value:88, x:ctx.wp(20), y:ctx.hp(80)};
	drawNode(fooNode0, ctx, params);
	drawNode(fooNode1, ctx, params);
	drawNode(fooNode2, ctx, params);
	drawEdge([fooNode0,fooNode1], ctx, params);
	drawEdge([fooNode0,fooNode2], ctx, params);
}