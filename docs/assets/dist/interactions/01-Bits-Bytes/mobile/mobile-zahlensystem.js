(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.backgroundNumber = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AmyPeQjIAAAAjIIAA4rQAAiKBfgrQApgSA5gBIN0AAQBIACAtAcQBLAvAAB7IAAYrQAADIjIAAg");
	this.shape.setTransform(63.525,98.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundNumber, new cjs.Rectangle(0,0,127.1,198), null);


(lib.backgroundNumber_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AmyPeQjIAAAAjIIAA4rQAAiKBfgrQApgSA5gBIN0AAQBIACAtAcQBLAvAAB7IAAYrQAADIjIAAg");
	this.shape_1.setTransform(63.525,98.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundNumber_1, new cjs.Rectangle(0,0,127.1,198), null);


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.hexa16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// numbers
	this.text = new cjs.Text("0", "150px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 224;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.9335,59.65,1.1767,0.8747);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlhIYIAAhkIFrmlIAjgmQA9hJAdgyQAcgwAAhEQAAhMghgpQgigohMAAQiogBAADEIAAAjIi9AAIAAglQAAiUBThQQBThRC3AAQCoAABYBIQBWBHAACDQAABBgUAyQgVAygcAlIhYBoIlIF1IHDAAIAAB2g");
	this.shape.setTransform(54.325,104.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkFHXQhZhIAAiCIAAgjIC7AAIAAAXQADBSAjArQAiArBaAAQBfAAAigxQAjgxAAhhQAAhZgsgzQgtgyhhgGIgbgBIAAiLIAZAAQBjgDAtglQAsgkAAhWQAAhOgkgpQgjgohcAAQhbAAgiAsQgjArgDBUIAAAWIi7AAIAAgjQAAiCBZhHQBZhHCsAAQCtAABaBIQBYBHAACCQAABdg2A7Qg3A8hgAUQBiAXA2BDQA1BEAABsQAACUhVBSQhWBSi1AAQirAAhZhHg");
	this.shape_1.setTransform(53.975,105.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlITIAAkcImdAAIAAiUIF0p2IDdAAIAAKNIChAAIAAB9IihAAIAAEcgAjDB6IDoAAIAAnig");
	this.shape_2.setTransform(56.1,105.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkNHLQhRhOABiZIC9AAQAABZAgA2QAhA2BfAAQBIAAAkgfQAjggAJg0QAKg0AAhWQgBhQgKgwQgLgvgjgZQgjgahFAAQg2AAgpAZQgqAZgVAlIihAAIAAo5IJoAAIAACNIm8AAIgNEmQBMg7CCAAQCkAABGBTQBFBSABCUQgBC2hPBlQhPBljDAAQi5AAhRhOg");
	this.shape_3.setTransform(55.2,105.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkJG+QhXhhAAicIAAllQAAisBRhmQBRhnC9AAQClAABaBDQBaBDADB9IADAQIi/AAQAAhSgkgnQgigmhaAAQiiAAAADjIAAChQAcgiA2gUQA2gTBIAAQCmAABHBPQBHBOAACVQAACchXBfQhXBfi0AAQiwAAhYhggAhhAQQgpAVgZAeIAACfQAABaAmA3QAlA2BXAAQBYAAAmg2QAlg1ABhYQAAhQgJgwQgJgugkgfQgjgdhLAAQg3AAgpAUg");
	this.shape_4.setTransform(55.1,105.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AigITIEAu3Il9AAIAAhvII7AAIAABFIkJPhg");
	this.shape_5.setTransform(52.3,105.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkMHOQhUhQABiXQAAhlAtg8QAtg9BWgmQifhOABifQgBiCBThJQBThICpAAQCoAABSBIQBSBJAACCQAABVgpA5QgoA5hOAmQBWAoAuA8QAvA8gBBkQABCWhUBQQhTBRi5AAQi6AAhThQgAiDBfQgoA1AABWQgBBdAmAzQAmA0BhAAQBgAAAlg0QAlgzAAhdQAAhWgog1Qgpg2hZgBQhbABgpA2gAhwmFQgkAsAABHQAABOAhAzQAiAyBSACQCSgCAAizQABhHgjgsQgjgrhNAAQhNAAgkArg");
	this.shape_6.setTransform(53.95,105.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aj+HaQhbhFgEh/IAAgMIC9AAQABBSAjAnQAlAmBbAAQCfAAgBjjIAAihQgcAig0AUQg1AUhKAAQioAAhFhQQhGhOAAiVQAAicBWheQBXhfC1AAQCxAABXBhQBXBgAACbIAAFkQAACshRBoQhRBni9AAQinAAhZhEgAh8lzQgmA3ABBWQAABQAJAwQAIAvAkAeQAjAdBLAAQBpAAA3hIIAAieQABjHihAAQhYAAgmA2g");
	this.shape_7.setTransform(52.7,105.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADUITIhBkLIkjAAIhFELIi7AAIEwwmIC/AAIEyQmgAB4CeIh4neIh1HeIDtAAg");
	this.shape_8.setTransform(53.875,105.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Al1ITIAAwmIFIAAQDCABBdBAQBeBBAACJQAADLjNAWQB/AWA7BBQA5BCAABzQAACPhaBPQhcBQi5AAgAitGpICGAAQBXAAAwgVQAxgTAUgrQATgpAAhIQAAhng4gyQg5g0h+AAIh2AAgAithXIB2AAQB6AAAwgoQAwgoAAhhQAAhHgdgiQgeggg6gKQg5gJhzAAIgvAAg");
	this.shape_9.setTransform(56.15,105.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkdHAQhXhdAAimIAAl2QAAivBWhaQBUhbDWAAQDBAABTBOQBVBOAACWIAABUIi+AAIAAhLQAAhJgJgoQgIgngkgYQglgXhPAAQhQAAgnAZQgpAagMAuQgMAsAABNIAAGjQAABSARAuQASAuAoATQAnAUBGAAQBMAAAlgZQAlgZAKgrQAJgrAAhLIAAhOIC+AAIAABOQAACfhRBUQhQBVjIAAQjTAAhWheg");
	this.shape_10.setTransform(54.175,105.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AluITIAAwmIE2AAQDnAABgBPQBgBPAACnIAAGGQAACwhfBWQheBVjZAAgAinGpIByAAQBmAAAwgeQAugeALg0QAMg0AAhpIAAlYQAAhagPgwQgPgwgwgXQgvgXhkAAIhsAAg");
	this.shape_11.setTransform(55.225,105.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AkWITIAAwmIIpAAIAABvIliAAIAAFgIEfAAIAABnIkfAAIAAGGIFmAAIAABqg");
	this.shape_12.setTransform(57,105.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkTITIAAwmIInAAIAABrIlgAAIAAFiIERAAIAABoIkRAAIAAHxg");
	this.shape_13.setTransform(58.125,105.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{text:"0"}}]}).to({state:[{t:this.text,p:{text:"1"}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// number_id
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWADgPQAEgOAKgKIAFgEIAgAhQgLAGgIAIQgHAHgCAJQgCAJADAOIB2B3IgeAeg");
	this.shape_14.setTransform(82.25,-67.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_15.setTransform(73.2727,-56.4189);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA2CMQgjgHghghIhNhOQglgkgJgjQgJgjAegeQAbgbAcABQAdAAAbAaIAEADIgeAeQgSgRgOgDQgOgCgOAOQgaAaAwAxIAjAiQgDgMAFgMQAFgNALgLQAagbAcAFQAdAGAgAgQAhAhAHAiQAHAigeAeQgWAWgbAAIgNgBgAgBABQgIAIgCALQgDAMADAKIAhAjQAUATASAFQASAGANgNQAPgPgGgRQgGgSgTgTQgRgRgMgIQgLgJgMgBIgCAAQgLAAgLALg");
	this.shape_16.setTransform(57.0633,-46.8642);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_17.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(16));

	// background
	this.instance = new lib.backgroundNumber();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,390.4);


(lib.hexa1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// numbers
	this.text = new cjs.Text("0", "150px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 224;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(54.0835,53.8,1.1767,0.8747);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlhIYIAAhkIFrmlIAjgmQA+hKAcgwQAcgxAAhEQAAhMghgpQgigohMAAQioAAAADDIAAAjIi9AAIAAgkQAAiWBThQQBThQC3AAQCpAABXBHQBWBIAACDQAABAgUAzQgVAzgcAkIhYBoIlHF1IHCAAIAAB2g");
	this.shape.setTransform(54.275,104.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkFHXQhahJABiCIAAgjIC7AAIAAAYQADBSAjArQAiArBaAAQBeAAAjgyQAigwAAhhQAAhagsgyQgtgyhhgGIgbgBIAAiLIAZAAQBjgDAtglQAsglAAhUQAAhPgjgpQgjgohcAAQhbABgiArQgjArgDBUIAAAWIi7AAIAAgjQgBiCBahHQBZhHCsAAQCtAABZBHQBaBJgBCCQAABcg2A7Qg3A7hgAVQBiAXA2BDQA2BEgBBsQAACThVBTQhWBSi1AAQirAAhZhHg");
	this.shape_1.setTransform(53.95,105.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlITIAAkcImeAAIAAiTIF1p2IDdAAIAAKMIChAAIAAB9IihAAIAAEcgAjDB6IDoAAIAAnig");
	this.shape_2.setTransform(56.075,105.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkNHLQhQhOAAiZIC8AAQAABZAhA2QAhA2BfAAQBIAAAjgfQAkggAJg0QAKgzAAhXQAAhQgMgwQgLgugigaQgjgahFAAQg2AAgpAZQgqAZgVAlIihAAIAAo4IJoAAIAACMIm8AAIgNEmQBMg7CCAAQCkAABGBTQBFBTAACTQAAC2hPBlQhPBkjDAAQi5AAhRhNg");
	this.shape_3.setTransform(55.175,105.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkJG9QhXhgAAicIAAllQAAisBRhmQBRhmC9gBQCmAABZBDQBbBEADB7IABARIi+AAQAAhRgjgoQgjgmhaAAQiiAAAADiIAACiQAcgiA2gUQA2gTBIAAQCnAABHBPQBGBOAACUQAACdhWBeQhXBgi1AAQiwAAhYhhgAhgAPQgqAWgZAeIAACfQAABaAmA3QAlA2BXAAQBYAAAlg2QAng1AAhYQAAhQgJgwQgJgugkgfQgjgdhLAAQg2AAgpATg");
	this.shape_4.setTransform(55,105.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AigITIEBu3Il+AAIAAhuII7AAIAABEIkKPhg");
	this.shape_5.setTransform(52.25,105.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkMHOQhThQgBiXQAAhlAug9QAtg7BWgnQiehOgBifQAAiDBThIQBThICpAAQCoAABSBIQBSBIAACDQAABVgoA5QgpA5hOAmQBXAnAtA9QAuA8ABBkQAACWhUBQQhTBRi5AAQi6AAhThQgAiDBfQgpA1AABVQABBeAlAzQAnA0BgAAQBfAAAlg0QAlgzAAheQAAhVgng1Qgog3haAAQhcAAgoA3gAhwmFQgkAsAABHQAABOAiAyQAhAzBSABQCTgBAAizQAAhHgjgsQgigrhOAAQhNAAgkArg");
	this.shape_6.setTransform(53.9,105.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aj/HZQhahEgDh/IAAgMIC9AAQAABSAkAmQAkAnBbAAQCfAAAAjjIAAihQgdAigzAUQg1AThLABQiogBhFhPQhGhOAAiVQAAibBXhfQBWhfC2AAQCwAABXBgQBXBhAACbIAAFkQAACshRBnQhRBoi8AAQioAAhahFgAh7lzQgnA3AABWQAABQAKAvQAJAwAjAeQAkAdBLAAQBnAAA5hIIAAieQAAjHigAAQhZAAglA2g");
	this.shape_7.setTransform(52.65,105.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADUITIhCkLIkiAAIhFELIi7AAIEvwlIDAAAIEyQlgAB4CdIh4ndIh1HdIDtAAg");
	this.shape_8.setTransform(53.85,105.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Al1ITIAAwlIFIAAQDBAABeBAQBdBCAACIQAADLjMAVQB/AXA6BBQA6BCAAByQAACPhaBQQhcBQi5AAgAiuGpICHAAQBXAAAxgVQAwgTAUgrQATgpAAhJQAAhmg4gzQg5gyh+AAIh3AAgAiuhXIB3AAQB6AAAwgoQAwgoAAhhQAAhHgdghQgegig6gJQg5gJhzAAIgwAAg");
	this.shape_9.setTransform(56.125,105.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkdHAQhXhdAAilIAAl3QAAivBWhaQBUhbDXAAQDAABBTBNQBVBOAACWIAABUIi+AAIAAhLQAAhJgIgoQgJgngkgXQgkgYhQAAQhQAAgnAZQgpAagMAuQgMAtAABLIAAGkQAABRARAvQASAuAoATQAoAUBFAAQBMAAAlgZQAlgZAKgrQAJgrAAhMIAAhNIC+AAIAABNQAACghRBUQhQBVjHAAQjTAAhXheg");
	this.shape_10.setTransform(54.125,105.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AluITIAAwlIE2AAQDnAABgBOQBgBPAACnIAAGFQAACxheBVQheBWjaAAgAinGpIByAAQBmAAAwgeQAugeAMg0QAMg0AAhpIAAlYQAAhagQgwQgPgwgwgXQgvgXhkAAIhsAAg");
	this.shape_11.setTransform(55.175,105.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AkWITIAAwmIIpAAIAABvIliAAIAAFgIEfAAIAABnIkfAAIAAGGIFmAAIAABqg");
	this.shape_12.setTransform(57,105.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkUITIAAwlIIpAAIAABqIlhAAIAAFiIERAAIAABoIkRAAIAAHxg");
	this.shape_13.setTransform(58.1,105.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{scaleX:1.1767,scaleY:0.8747,x:54.0835,y:53.8,text:"0"}}]}).to({state:[{t:this.text,p:{scaleX:1,scaleY:1,x:53.9,y:45.6,text:"1"}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// number_id
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWAEgPQACgOAKgKIAGgEIAgAhQgLAGgIAIQgHAHgDAJQgBAJACAOIB3B3IgfAeg");
	this.shape_14.setTransform(68.05,-53.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_15.setTransform(59.0227,-42.1689);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_16.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(16));

	// background
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_17.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(3).to({_off:true},1).wait(12));

	// Layer_2
	this.instance = new lib.backgroundNumber();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,404.4);


(lib.binary128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 224;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.9335,50.75,1.1767,0.8747);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1,scaleY:1,x:53.9,y:42.2,text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAfgfIAWAXQgEgWACgPQADgOALgKIAFgEIAgAhQgLAGgIAIQgHAHgCAJQgCAJADAOIB2B3IgeAeg");
	this.shape.setTransform(95.65,-80.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(86.6727,-69.8189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA4COQgfgEgfggQgWgWgGgVQgGgUAGgWQgqAJgjgiQgcgcgCgcQgCgdAbgbQAbgbAdACQAcACAcAcQASATAFASQAGATgEAVQAXgFAUAGQAUAFAWAWQAgAfAEAfQAEAegeAeQgaAbgbAAIgHgBgAAIAIQgNAPAFASQAEASASASQAUAUASAGQARAFAPgQQAQgPgFgRQgGgSgUgUQgSgSgSgEIgJgCQgNAAgLAKgAhdhdQgMAMADAPQAEAQAPAPQARARAQAFQARAGANgNQAWgYglgmQgQgQgPgEIgGgBQgLAAgKAKg");
	this.shape_2.setTransform(70.4225,-59.9584);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYCIIggiUIgCgOQgGgagGgPQgGgPgPgOQgQgRgPgDQgOgDgMAMQgbAbAqAqIAIAHIgfAfIgIgIQgggggEgfQgEgeAegeQAbgbAdACQAeABAcAcQANAOAIAOQAHAOADANIAJAkIAbCFIBJhJIAZAaIhsBsg");
	this.shape_3.setTransform(57.8261,-44.9039);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_4.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_5.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,401);


(lib.binary64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 224;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.9335,50.75,1.1767,0.8747);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1,scaleY:1,x:53.9,y:42.2,text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAfgfIAWAXQgEgWACgPQADgOALgKIAFgEIAhAhQgMAGgIAIQgHAHgCAJQgDAJAEAOIB2B3IgeAeg");
	this.shape.setTransform(84.75,-70.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(75.7227,-58.8689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BkIhMjDIAjgjICMCMIAagZIAbAZIgaAaIA9A+IgcAcIg+g9IhBBCgAgVBMIAlgmIhohng");
	this.shape_2.setTransform(61.675,-51.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA2CMQgjgHghghIhNhOQglgkgJgjQgJgjAegeQAbgbAcABQAdAAAbAaIAEADIgeAeQgSgRgOgDQgOgCgOAOQgaAaAwAxIAjAiQgDgMAFgMQAFgNALgLQAagbAcAFQAdAGAgAgQAhAhAHAiQAHAigeAeQgWAWgbAAIgNgBgAgBABQgIAIgCALQgDAMADAKIAhAjQAUATASAFQASAGANgNQAPgPgGgRQgGgSgTgTQgRgRgMgIQgLgJgMgBIgCAAQgLAAgLALg");
	this.shape_3.setTransform(45.9133,-35.7142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_4.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,401);


(lib.binary32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 224;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.9335,50.75,1.1767,0.8747);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1,scaleY:1,x:53.9,y:42.2,text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAfgfIAWAXQgEgWACgPQADgOALgKIAFgEIAhAhQgMAGgIAIQgHAHgCAJQgDAJAEAOIB2B3IgeAeg");
	this.shape.setTransform(83.85,-69.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(74.8727,-58.0189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYCIIggiUIgCgOQgGgagGgPQgGgPgPgOQgQgRgPgDQgOgDgMAMQgbAbAqAqIAIAHIgfAfIgIgIQgggggEgfQgEgeAegeQAbgbAdACQAeABAcAcQANAOAIAOQAHAOADANIAJAkIAbCFIBJhJIAZAaIhsBsg");
	this.shape_2.setTransform(60.1261,-47.2039);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA8CPQgdgBgcgcIgHgIIAdgeIAFAFQASARAPAEQAPAEAPgOQAPgPgGgRQgFgQgVgVQgTgTgSgEQgSgDgRAOIgEAEIgdgdIAEgEQAPgRgBgPQgBgPgSgSQgRgRgOgDQgOgDgPAPQgPAOAEAPQAEAPASATIAEAEIgeAdIgHgGQgcgcgCgeQAAgdAbgcQAcgcAeACQAeABAbAcQAUAUADAVQAFAWgLAUQAUgLAYAGQAXAGAXAXQAgAfAEAgQAEAfgdAdQgbAagdAAIgCAAg");
	this.shape_3.setTransform(45.2988,-35.0271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_4.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,401);


(lib.binary16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 224;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(54.0835,50.75,1.1767,0.8748);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1,scaleY:1,x:54.05,y:42.2,text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWADgPQAEgOAKgKIAFgEIAgAhQgLAGgIAIQgHAHgCAJQgCAJADAOIB2B3IgeAeg");
	this.shape.setTransform(82.25,-67.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(73.2727,-56.4189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA2CMQgjgHghghIhNhOQglgkgJgjQgJgjAegeQAbgbAcABQAdAAAbAaIAEADIgeAeQgSgRgOgDQgOgCgOAOQgaAaAwAxIAjAiQgDgMAFgMQAFgNALgLQAagbAcAFQAdAGAgAgQAhAhAHAiQAHAigeAeQgWAWgbAAIgNgBgAgBABQgIAIgCALQgDAMADAKIAhAjQAUATASAFQASAGANgNQAPgPgGgRQgGgSgTgTQgRgRgMgIQgLgJgMgBIgCAAQgLAAgLALg");
	this.shape_2.setTransform(57.0633,-46.8642);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_3.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_4.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,401);


(lib.binary8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 224;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.9335,50.75,1.1767,0.8747);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1,scaleY:1,x:53.9,y:42.2,text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWADgPQAEgOAKgKIAFgEIAgAhQgLAGgIAIQgHAHgCAJQgCAJADAOIB2B3IgeAeg");
	this.shape.setTransform(71,-56.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(61.9727,-45.1189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA4COQgfgEgfggQgWgWgGgVQgGgUAGgWQgqAJgjgiQgcgcgCgcQgCgdAbgbQAbgbAdACQAcACAcAcQASATAFASQAGATgEAVQAXgFAUAGQAUAFAWAWQAgAfAEAfQAEAegeAeQgaAbgbAAIgHgBgAAIAIQgNAPAFASQAEASASASQAUAUASAGQARAFAPgQQAQgPgFgRQgGgSgUgUQgSgSgSgEIgJgCQgNAAgLAKgAhdhdQgMAMADAPQAEAQAPAPQARARAQAFQARAGANgNQAWgYglgmQgQgQgPgEIgGgBQgLAAgKAKg");
	this.shape_2.setTransform(45.7225,-35.2584);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_3.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,401);


(lib.binary4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 224;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.9335,50.75,1.1767,0.8747);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1,scaleY:1,x:53.9,y:42.2,text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAfgfIAXAXQgGgWADgPQAEgOAKgKIAFgEIAgAhQgLAGgIAIQgHAHgCAJQgCAJADAOIB2B3IgeAeg");
	this.shape.setTransform(70.55,-55.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(61.5227,-44.6689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BkIhMjDIAjgjICMCMIAagZIAbAZIgaAaIA9A+IgcAcIg+g9IhBBCgAgVBMIAlgmIhohng");
	this.shape_2.setTransform(47.475,-37.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_3.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,401);


(lib.binary2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// numbers
	this.text = new cjs.Text("0", "150px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 224;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.9747,50.8,1.177,0.8747);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1,scaleY:1,x:53.95,y:42.25,text:"1"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWAEgPQACgOAKgKIAGgEIAgAhQgLAGgIAIQgHAHgDAJQgBAJACAOIB3B3IgfAeg");
	this.shape.setTransform(70.4,-55.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(61.3727,-44.5189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYCIIggiUIgCgOQgGgagGgPQgGgPgPgOQgQgRgPgDQgOgDgMAMQgbAbAqAqIAIAHIgfAfIgIgIQgggggEgfQgEgeAegeQAbgbAdACQAeABAcAcQANAOAIAOQAHAOADANIAJAkIAbCFIBJhJIAZAaIhsBsg");
	this.shape_2.setTransform(46.6761,-33.7539);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_3.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,401.1);


(lib.binary1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// numbers
	this.text = new cjs.Text("0", "150px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 224;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.9457,50.8,1.1762,0.8749);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81D0FC").s().p("Aj1IVQhUhfAAieIAAomQAAimBShfQBUhfCjgBQClABBTBfQBTBfgBCmIAAImQAACdhVBfQhXBgieAAQifAAhWhfgAg9ltQgNAnAAA+IAAIZQABCEBJAAQAvAAAOgoQAPgnAAg1IAAoZQAAg8gOgoQgMgogyAAQgvAAgOAng");
	this.shape.setTransform(53.9,152.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#81D0FC").s().p("AgpJgIAAvHIhWAnIgnAPIgpATIAAi6QC0hdAngpIDEAAIAAS+g");
	this.shape_1.setTransform(48.925,151.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{scaleX:1.1762,scaleY:0.8749,x:53.9457,y:50.8,text:"0"}}]}).to({state:[{t:this.text,p:{scaleX:1.177,scaleY:0.8745,x:53.8747,y:50.9,text:"1"}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// number_id
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWAEgPQACgOAKgKIAGgEIAgAhQgLAGgIAIQgHAHgDAJQgBAJACAOIB3B3IgfAeg");
	this.shape_2.setTransform(68.05,-53.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_3.setTransform(59.0227,-42.1689);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_4.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},2).wait(2));

	// background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_5.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(4));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,392.4);


(lib._100er = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// numbers
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkIHJQhZhWAAiPIAAnJQAAiRBXhTQBYhUCzAAQCyAABYBUQBXBTAACRIAAHJQAACRhYBUQhZBViwAAQiwAAhZhVgAh/l1QgkA1AABaIAAHMQAADECkAAQCjAAAAjEIAAnMQAAhagjg1Qgig2heAAQhdAAgjA2g");
	this.shape.setTransform(54,105.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeITIAAttIhqASIiOAUIAAhrQDYgmBOhOICPAAIAAQmg");
	this.shape_1.setTransform(46.1,105.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlhIYIAAhkIFrmlIAjgmQA9hJAdgyQAcgwAAhEQAAhMghgpQgigohMAAQiogBAADEIAAAjIi9AAIAAglQAAiUBThQQBThRC3AAQCoAABYBIQBWBHAACDQAABBgUAyQgVAygcAlIhYBoIlIF1IHDAAIAAB2g");
	this.shape_2.setTransform(54.325,104.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkFHXQhZhIAAiCIAAgjIC7AAIAAAXQADBSAjArQAiArBaAAQBfAAAigxQAjgxAAhhQAAhZgsgzQgtgyhhgGIgbgBIAAiLIAZAAQBjgDAtglQAsgkAAhWQAAhOgkgpQgjgohcAAQhbAAgiAsQgjArgDBUIAAAWIi7AAIAAgjQAAiCBZhHQBZhHCsAAQCtAABaBIQBYBHAACCQAABdg2A7Qg3A8hgAUQBiAXA2BDQA1BEAABsQAACUhVBSQhWBSi1AAQirAAhZhHg");
	this.shape_3.setTransform(53.975,105.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlITIAAkcImdAAIAAiUIF0p2IDdAAIAAKNIChAAIAAB9IihAAIAAEcgAjDB6IDoAAIAAnig");
	this.shape_4.setTransform(56.1,105.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkNHLQhRhOABiZIC9AAQAABZAgA2QAhA2BfAAQBIAAAkgfQAjggAJg0QAKg0AAhWQgBhQgKgwQgLgvgjgZQgjgahFAAQg2AAgpAZQgqAZgVAlIihAAIAAo5IJoAAIAACNIm8AAIgNEmQBMg7CCAAQCkAABGBTQBFBSABCUQgBC2hPBlQhPBljDAAQi5AAhRhOg");
	this.shape_5.setTransform(55.2,105.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkJG+QhXhhAAicIAAllQAAisBRhmQBRhnC9AAQClAABaBDQBaBDADB9IADAQIi/AAQAAhSgkgnQgigmhaAAQiiAAAADjIAAChQAcgiA2gUQA2gTBIAAQCmAABHBPQBHBOAACVQAACchXBfQhXBfi0AAQiwAAhYhggAhhAQQgpAVgZAeIAACfQAABaAmA3QAlA2BXAAQBYAAAmg2QAlg1ABhYQAAhQgJgwQgJgugkgfQgjgdhLAAQg3AAgpAUg");
	this.shape_6.setTransform(55.1,105.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AigITIEAu3Il9AAIAAhvII7AAIAABFIkJPhg");
	this.shape_7.setTransform(52.3,105.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AkMHOQhUhQABiXQAAhlAtg8QAtg9BWgmQifhOABifQgBiCBThJQBThICpAAQCoAABSBIQBSBJAACCQAABVgpA5QgoA5hOAmQBWAoAuA8QAvA8gBBkQABCWhUBQQhTBRi5AAQi6AAhThQgAiDBfQgoA1AABWQgBBdAmAzQAmA0BhAAQBgAAAlg0QAlgzAAhdQAAhWgog1Qgpg2hZgBQhbABgpA2gAhwmFQgkAsAABHQAABOAhAzQAiAyBSACQCSgCAAizQABhHgjgsQgjgrhNAAQhNAAgkArg");
	this.shape_8.setTransform(53.95,105.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Aj+HaQhbhFgEh/IAAgMIC9AAQABBSAjAnQAlAmBbAAQCfAAgBjjIAAihQgcAig0AUQg1AUhKAAQioAAhFhQQhGhOAAiVQAAicBWheQBXhfC1AAQCxAABXBhQBXBgAACbIAAFkQAACshRBoQhRBni9AAQinAAhZhEgAh8lzQgmA3ABBWQAABQAJAwQAIAvAkAeQAjAdBLAAQBpAAA3hIIAAieQABjHihAAQhYAAgmA2g");
	this.shape_9.setTransform(52.7,105.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// number_id
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhggsIAfgfIAWAXQgEgWACgPQAEgOAJgKIAGgEIAhAhQgMAGgIAIQgHAHgDAJQgCAJAEAOIB2B3IgfAeg");
	this.shape_10.setTransform(97.25,-82.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_11.setTransform(88.2227,-71.3689);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA4CNQgggEgegfIhjhjQgfgegEggQgEggAcgcQAdgdAgAEQAgAEAeAfIBjBjQAfAeAEAhQAEAggcAcQgZAZgcAAIgIgBgAhbhbQgPAPAGARQAGARATAUIBiBiQArAqAagaQAagagqgrIhihiQgUgTgRgGIgJgCQgMAAgLALg");
	this.shape_12.setTransform(71.675,-61.3742);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA4CNQgggEgegfIhjhjQgfgegEggQgEggAcgcQAdgdAgAEQAgAEAeAfIBjBjQAfAeAEAhQAEAggcAcQgZAZgcAAIgIgBgAhbhbQgPAPAGARQAGARATAUIBiBiQArAqAagaQAagagqgrIhihiQgUgTgRgGIgJgCQgMAAgLALg");
	this.shape_13.setTransform(57.075,-46.7742);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_14.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(10));

	// background
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_15.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(10));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,343.5);


(lib._10er = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// numbers
	this.text = new cjs.Text("0", "150px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 224;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.9335,48.05,1.1767,0.8747);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:42.3,text:"1"},0).wait(1).to({y:48.05,text:"2"},0).wait(1).to({text:"3"},0).wait(1).to({text:"4"},0).wait(1).to({scaleY:0.8749,y:48.15,text:"5"},0).wait(1).to({scaleY:0.8747,y:48.05,text:"6"},0).wait(1).to({text:"7"},0).wait(1).to({y:48.1,text:"8"},0).wait(1).to({y:48.05,text:"9"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAegfIAXAXQgEgWADgPQACgOAKgKIAGgEIAhAhQgMAGgIAIQgHAHgDAJQgCAJADAOIB3B3IgfAeg");
	this.shape.setTransform(82.65,-67.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(73.6227,-56.7689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA4CNQgggEgegfIhjhjQgfgegEggQgEggAcgcQAdgdAgAEQAgAEAeAfIBjBjQAfAeAEAhQAEAggcAcQgZAZgcAAIgIgBgAhbhbQgPAPAGARQAGARATAUIBiBiQArAqAagaQAagagqgrIhihiQgUgTgRgGIgJgCQgMAAgLALg");
	this.shape_2.setTransform(57.075,-46.7742);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_3.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_4.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(10));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,378.9);


(lib._1er = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// numbers
	this.text = new cjs.Text("0", "150px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 224;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(53.9335,48.3,1.1767,0.8747);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:48.2,text:"1"},0).wait(1).to({text:"2"},0).wait(1).to({text:"3"},0).wait(1).to({text:"4"},0).wait(1).to({text:"5"},0).wait(1).to({text:"6"},0).wait(1).to({text:"7"},0).wait(1).to({text:"8"},0).wait(1).to({text:"9"},0).wait(1));

	// number_id
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhggsIAegfIAYAXQgGgWAEgPQACgOAKgKIAGgEIAgAhQgLAGgIAIQgHAHgDAJQgBAJACAOIB3B3IgfAeg");
	this.shape.setTransform(68.05,-53.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMBjQgSgKgWgWIgmgmQgighgEgaQgFgaAbgbQAUgUASgCQASgCASAMQARALAZAZIAOAOIhAA/IAgAhQAPAPALACQALADAKgKQAJgKgDgKQgEgKgNgNIgKgKIAdgdIAHAHQAZAYADAZQACAYgYAYQgTATgRAEIgJABQgNAAgOgIgAg9g9QgHAHAAAIQAAAHAGAJQAGAJAPAPIAJAIIAhgiIgOgPQgQgQgKgEIgGgBQgIAAgIAHg");
	this.shape_1.setTransform(59.0227,-42.1689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhSg7IgNAVIgSAbIgXgWQAagsgEgcIAXgYIDkDlIgeAeg");
	this.shape_2.setTransform(44.2,-34.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AGxgOIB1AAIAAAdQgtgbhIgCgAolgOIBiAAQg5ABgpARg");
	this.shape_3.setTransform(54.975,1.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(10));

	// Layer_2
	this.instance = new lib.backgroundNumber_1();
	this.instance.parent = this;
	this.instance.setTransform(53.95,99,1,1,0,0,0,63.5,99);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-134.5,157.7,379);


// stage content:
(lib.mobilezahlensystem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var valueDez100 = this.valueDez100;
			valueDez10 = this.valueDez10;
			valueDez1 = this.valueDez1;
			valueBin1 = this.valueBin1;
			valueBin2 = this.valueBin2;
			valueBin4 = this.valueBin4;
			valueBin8 = this.valueBin8;
			valueBin16 = this.valueBin16;
			valueBin32 = this.valueBin32;
			valueBin64 = this.valueBin64;
			valueBin128 = this.valueBin128;
			valueHex1 = this.valueHex1;
			valueHex16 = this.valueHex16;
			
		var input;
			hundreds = 0,
			tens = 0,
			ones = 0,
			resHundreds = 0,
			res = 0;
		
		
		var stringHash = {
			0: "0",
			1: "1",
		    2: "2",
		    3: "3",
		    4: "4",
		    5: "5",
		    6: "6",
		    7: "7",
		    8: "8",
		    9: "9",
		    a: "10",
			b: "11",
			c: "12",
			d: "13",
			e: "14",
			f: "15",
		};
		
		$('body').append('<div class="sliderContainer">')
		$('.sliderContainer').append('<input type="range" class="slider" id="slider" value="0" min="0" max="255">');
		$('.sliderContainer').append('<span id="slider_value">0</span>');
		
		
		$(document).on('input', '#slider', function() {
		    input = $('#slider_value').html( $(this).val() );
			calculateDez($(this).val());
			binarFunction($(this).val());
			setHexa();
		});
		
		
		function calculateDez(inputValue){
			
			resInput = inputValue.split("");
			if(resInput.length == 3)
			{
				setHundreds(resInput[0]);
				setTens(resInput[1]);
				setOnes(resInput[2]);
			}
			else if(resInput.length == 2)
			{
				setHundreds(0);
				setTens(resInput[0]);
				setOnes(resInput[1]);
			}
			else if(resInput.length == 1)
			{
				console.log("test");
				setHundreds(0);
				setTens(0);
				setOnes(resInput[0]);
			}
		}
		
		function binarFunction(getValue){
			
			binarValue = getValue;
			var resetValue = [0, 0, 0, 0, 0, 0, 0, 0];
			var inputValue = [];
			while (binarValue > 0)
			{
				inputValue.push(binarValue % 2);
				var divisionValue = Math.floor(binarValue / 2);
				binarValue = divisionValue;
			}
			
			for(var j = 0; j<resetValue.length; j++)
			{
					setBinar(j, resetValue[j]);
			}
			
			for(var i = 0; i < inputValue.length; i++)
			{
				setBinar(i, inputValue[i])
			}
		}
		
		
		//function setHundreds(inputHundreds)
		function setHundreds(getHundreds)
		{
			valueDez100.gotoAndStop(getHundreds);
		}
		
		function setTens(getTens)
		{
			valueDez10.gotoAndStop(getTens);
		}
		
		function setOnes(getOnes)
		{
			valueDez1.gotoAndStop(getOnes);
		}
		
		
		// function setBinar
		function setBinar(getValueBin, getValue)
		{
			if(getValueBin == 0 )
				valueBin1.gotoAndStop(getValue);
			else if(getValueBin == 1)
				valueBin2.gotoAndStop(getValue);
			else if(getValueBin == 2)
				valueBin4.gotoAndStop(getValue);
			else if(getValueBin == 3)
				valueBin8.gotoAndStop(getValue);
			else if(getValueBin == 4)
				valueBin16.gotoAndStop(getValue);
			else if(getValueBin == 5)
				valueBin32.gotoAndStop(getValue);
			else if(getValueBin == 6)
				valueBin64.gotoAndStop(getValue);
			else if(getValueBin == 7)
				valueBin128.gotoAndStop(getValue);
		}
		
		function setHexa()
		{
			var myNumber = Number(document.getElementById("slider").value).toString(16);
			resHexa = myNumber.split("");
			if(resHexa.length == 1)
			{
				valueHex1.gotoAndStop(stringHash[resHexa[0]]);
				valueHex16.gotoAndStop(0);
			}
			if(resHexa.length == 2)
			{
				valueHex1.gotoAndStop(stringHash[resHexa[1]]);
				valueHex16.gotoAndStop(stringHash[resHexa[0]]);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// binaryOne
	this.valueBin1 = new lib.binary1();
	this.valueBin1.name = "valueBin1";
	this.valueBin1.parent = this;
	this.valueBin1.setTransform(816.8,655.8,0.6232,0.6232,0,0,0,71.2,19.1);

	this.timeline.addTween(cjs.Tween.get(this.valueBin1).wait(1));

	// binaryTwo
	this.valueBin2 = new lib.binary2();
	this.valueBin2.name = "valueBin2";
	this.valueBin2.parent = this;
	this.valueBin2.setTransform(719.45,664.1,0.6232,0.6232,0,0,0,66.8,32.2);

	this.timeline.addTween(cjs.Tween.get(this.valueBin2).wait(1));

	// binaryFour
	this.valueBin4 = new lib.binary4();
	this.valueBin4.name = "valueBin4";
	this.valueBin4.parent = this;
	this.valueBin4.setTransform(625,664.1,0.6232,0.6232,0,0,0,66.8,32.2);

	this.timeline.addTween(cjs.Tween.get(this.valueBin4).wait(1));

	// binaryEight
	this.valueBin8 = new lib.binary8();
	this.valueBin8.name = "valueBin8";
	this.valueBin8.parent = this;
	this.valueBin8.setTransform(530.6,664.1,0.6232,0.6232,0,0,0,66.6,32.4);

	this.timeline.addTween(cjs.Tween.get(this.valueBin8).wait(1));

	// binarySixteen
	this.valueBin16 = new lib.binary16();
	this.valueBin16.name = "valueBin16";
	this.valueBin16.parent = this;
	this.valueBin16.setTransform(436.2,664.1,0.6232,0.6232,0,0,0,66.5,32.4);

	this.timeline.addTween(cjs.Tween.get(this.valueBin16).wait(1));

	// binaryThirtyThree
	this.valueBin32 = new lib.binary32();
	this.valueBin32.name = "valueBin32";
	this.valueBin32.parent = this;
	this.valueBin32.setTransform(341.95,664.1,0.6232,0.6232,0,0,0,66.8,32.4);

	this.timeline.addTween(cjs.Tween.get(this.valueBin32).wait(1));

	// binarySixteenfour
	this.valueBin64 = new lib.binary64();
	this.valueBin64.name = "valueBin64";
	this.valueBin64.parent = this;
	this.valueBin64.setTransform(247.55,664.1,0.6232,0.6232,0,0,0,66.8,32.4);

	this.timeline.addTween(cjs.Tween.get(this.valueBin64).wait(1));

	// binaryHndretTwentyEight
	this.valueBin128 = new lib.binary128();
	this.valueBin128.name = "valueBin128";
	this.valueBin128.parent = this;
	this.valueBin128.setTransform(153.35,664.1,0.6232,0.6232,0,0,0,66.8,32.4);

	this.timeline.addTween(cjs.Tween.get(this.valueBin128).wait(1));

	// 100er
	this.valueDez100 = new lib._100er();
	this.valueDez100.name = "valueDez100";
	this.valueDez100.parent = this;
	this.valueDez100.setTransform(379.1,269.9,0.8105,0.8111,0,0,0,70.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.valueDez100).wait(1));

	// 10er
	this.valueDez10 = new lib._10er();
	this.valueDez10.name = "valueDez10";
	this.valueDez10.parent = this;
	this.valueDez10.setTransform(502.15,269.9,0.8105,0.8111,0,0,0,69.8,35.5);

	this.timeline.addTween(cjs.Tween.get(this.valueDez10).wait(1));

	// 1er
	this.valueDez1 = new lib._1er();
	this.valueDez1.name = "valueDez1";
	this.valueDez1.parent = this;
	this.valueDez1.setTransform(629.95,258.8,0.8105,0.8111,0,0,0,74.9,21.8);

	this.timeline.addTween(cjs.Tween.get(this.valueDez1).wait(1));

	// hexa1
	this.valueHex1 = new lib.hexa1();
	this.valueHex1.name = "valueHex1";
	this.valueHex1.parent = this;
	this.valueHex1.setTransform(542.95,1100.65,0.811,0.8112,0,0,0,66.8,32.1);

	this.timeline.addTween(cjs.Tween.get(this.valueHex1).wait(1));

	// hexa16
	this.valueHex16 = new lib.hexa16();
	this.valueHex16.name = "valueHex16";
	this.valueHex16.parent = this;
	this.valueHex16.setTransform(418.6,1100.65,0.811,0.8112,0,0,0,66.9,32.1);

	this.timeline.addTween(cjs.Tween.get(this.valueHex16).wait(1));

	// TextInput
	this.input_value = new lib.an_TextInput({'id': 'input_value', 'value':'', 'disabled':false, 'visible':false, 'class':'ui-textinput'});

	this.input_value.setTransform(188.05,788.25,2.8113,2.8113,0,0,0,50.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.input_value).wait(1));

	// Hexadezimal- system
	this.text = new cjs.Text("Hexadezimalsystem", "50px 'Oswald'");
	this.text.textAlign = "center";
	this.text.lineHeight = 76;
	this.text.lineWidth = 716;
	this.text.parent = this;
	this.text.setTransform(489.3875,868.05,1.2991,1.2991);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Binär
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/sliderCss.css'});

	this.instance.setTransform(317.15,514.25,0.4686,0.4686,0,0,0,50.1,11.1);

	this.text_1 = new cjs.Text("Binärsystem", "50px 'Oswald'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 76;
	this.text_1.lineWidth = 714;
	this.text_1.parent = this;
	this.text_1.setTransform(493.4342,445.85,1.2991,1.2991);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instance}]}).wait(1));

	// Dezimalsystem
	this.text_2 = new cjs.Text("Dezimalsystem", "50px 'Oswald'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 76;
	this.text_2.lineWidth = 716;
	this.text_2.parent = this;
	this.text_2.setTransform(492.0773,2.6,1.2991,1.2991);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(501.9,640,457.80000000000007,642.2);
// library properties:
lib.properties = {
	id: '566019D5866C490E8B41A4649C244AD4',
	width: 960,
	height: 1280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/css.js", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['566019D5866C490E8B41A4649C244AD4'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;