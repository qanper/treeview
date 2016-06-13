
function drawEdge(edge, context, params) {
	// get array of nodes and draw a line
}


function drawNodePoint(node, context, params) {
	// get node.x:node.y and draw a circle
}

function drawNodeText(node, context, params) {
	// get node.value and print to node.x:node.y
}

function drawNode(node, context, params) {
	drawNodeText(node, context, params);
	drawNodePoint(node, context, params);
}

function splitDiapasons(diapason, count, params) {
	var res;
	return res;
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
	
	// value in percentage of context size
	ctx.sp = function(percent) { return (percent/100) * Math.sqrt(this.width*this.width + this.height*this.height); }
	
	function percent2pixel(params) {
		var res = {};
		res.edge.thickness = ctx.sp(params.edge.thickness);
		res.edge.marginRadus = ctx.sp(params.edge.marginRadus);
		res.node.radius = ctx.sp(params.node.radius);
		res.node.text.offset.x = ctx.wp(params.node.text.offset.x);
		res.node.text.offset.y = ctx.hp(params.node.text.offset.y);
		res.node.text.offset.size = ctx.hp(params.node.text.offset.size);
		return res;
	}
	
	// TASK recursive tree traversal
	
	/* test for wp and hp
	console.log("50% of width:", ctx.wp(50));
	console.log("50% of height:", ctx.wp(50));
	test OK */
	
	params = percent2pixel(params);
	
	/* test for draw function */
	var fooNode0 = {value:42, x:ctx.wp(50), y:ctx.hp(50)};
	var fooNode1 = {value:14, x:ctx.wp(80), y:ctx.hp(80)};
	var fooNode2 = {value:88, x:ctx.wp(20), y:ctx.hp(80)};
	drawNode(fooNode0, ctx, params.node);
	drawNode(fooNode1, ctx, params.node);
	drawNode(fooNode2, ctx, params.node);
	drawEdge([fooNode0,fooNode1], ctx, params.edge);
	drawEdge([fooNode0,fooNode2], ctx, params.edge);
	
	/* test for tree function */
	splitDiapasons([0,1], 3, params.tree);
}