(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Eigenschaften_atlas_", frames: [[0,0,36,304],[0,306,47,47]]}
];


// symbols:



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["Eigenschaften_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CSSKopie = function() {
	this.initialize(ss["Eigenschaften_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
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


(lib.Line1_Ebene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(-8.9,-76.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Line1_Ebene_1, null, null);


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



(lib.Szene_1_script = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// script
	this.myCss = new lib.an_CSS({'id': 'myCss', 'href':'assets/sliderCss.css'});

	this.myCss.setTransform(228.6,532.55,1.59,1.59,0,0,0,50.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.myCss).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_script, null, null);


(lib.Line1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1_obj_
	this.Ebene_1 = new lib.Line1_Ebene_1();
	this.Ebene_1.name = "Ebene_1";
	this.Ebene_1.parent = this;
	this.Ebene_1.setTransform(0.1,-0.1,1,1,0,0,0,0.1,-0.1);
	this.Ebene_1.depth = 0;
	this.Ebene_1.isAttachedToCamera = 0
	this.Ebene_1.isAttachedToMask = 0
	this.Ebene_1.layerDepth = 0
	this.Ebene_1.layerIndex = 0
	this.Ebene_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ebene_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Line1, new cjs.Rectangle(-8.9,-76,18,152), null);


(lib.Szene_1_Line1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Line1
	this.Line1 = new lib.Line1();
	this.Line1.name = "Line1";
	this.Line1.parent = this;
	this.Line1.setTransform(238.6,284.3);

	this.timeline.addTween(cjs.Tween.get(this.Line1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Szene_1_Line1, null, null);


// stage content:
(lib.Eigenschaften = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.myCss = this.script.myCss;
		if(this.Line1.parent == undefined || this.Line1.parent == this)
		this.Line1 = this.Line1.Line1;
		$('body').append('<div class="sliderContainer">')
		$('.sliderContainer').append('<input type="range" class="slider" id="slider" value="1" min="1" max="3">');
		$('.sliderContainer').append('<span id="slider_value">1</span>');
		$('.sliderContainer').css({
		 'position': 'absolute',
		 'margin-top': '-550px',
		 'margin-left': '100px'
		});
		
		$(document).on('input', '#slider', function() {
		    $('#slider_value').html( $(this).val() );
			changePictureSize($(this).val())
		});
		
		var Line1 = this.Line1;
		var pngtest = this.pngtest;
		var scaleX1 = Line1.scaleX;
		var scaleY1 = Line1.scaleY;
		var scaleX2 = pngtest.scaleX;
		var scaleY2 = pngtest.scaleY;
		var positionY1 = Line1.y;
		var positionY2 = pngtest.y;
		
		console.log(imageRoboter);
		
		function changePictureSize(val)
		{
			console.log(jpgtest.scaleX);
			if(val != 1)
			{
				
				Line1.scaleX = scaleX1 * val
				Line1.scaleY = scaleY1 * val;
				Line1.y = positionY1+val;
				pngtest.scaleX = scaleX2 * val;
				pngtest.scaleY = scaleY2 * val;
				pngtest.y = positionY2+val*35;
			
			}
			else
			{
				jpgtest.scaleX = scaleX1;
				jpgtest.scaleY = scaleY1;
				pngtest.scaleX = scaleX2;
				pngtest.scaleY = scaleY2;
				jpgtest.y = positionY1;
				pngtest.y = positionY2;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// script_obj_
	this.script = new lib.Szene_1_script();
	this.script.name = "script";
	this.script.parent = this;
	this.script.setTransform(228.5,532.4,1,1,0,0,0,228.5,532.4);
	this.script.depth = 0;
	this.script.isAttachedToCamera = 0
	this.script.isAttachedToMask = 0
	this.script.layerDepth = 0
	this.script.layerIndex = 0
	this.script.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.script).wait(1));

	// Line1_obj_
	this.Line1 = new lib.Szene_1_Line1();
	this.Line1.name = "Line1";
	this.Line1.parent = this;
	this.Line1.setTransform(238.7,284.3,1,1,0,0,0,238.7,284.3);
	this.Line1.depth = 0;
	this.Line1.isAttachedToCamera = 0
	this.Line1.isAttachedToMask = 0
	this.Line1.layerDepth = 0
	this.Line1.layerIndex = 1
	this.Line1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Line1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(508.2,848.3,-199.39999999999998,-297.5999999999999);
// library properties:
lib.properties = {
	id: '5C3FED3280E03946A0339D4C9A9F4852',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Eigenschaften_atlas_.png?1547066122556", id:"Eigenschaften_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1547066122704", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1547066122704", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1547066122704", id:"an.CSS"}
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
an.compositions['5C3FED3280E03946A0339D4C9A9F4852'] = {
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
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