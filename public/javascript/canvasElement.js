var Canvas = window.Canvas || {};
var DEFAULT_LAYER = 0;


(function () {
	
	AppContext = function(){};
	AppContext.prototype._APP_PATH = null;
	AppContext.prototype._PUBLIC_PATH = null;
	AppContext.prototype._MOUSEDOWN = false;
	AppContext.prototype._MOUSEDOWN_X = null;
	AppContext.prototype._LEFTMENU_ORIGINAL_WIDTH = null;
	AppContext.prototype._LEFTMENU_CURRENT_WIDTH = null;
	AppContext.prototype._MODE = null;
	AppContext.prototype.switchArray = [];
	AppContext.prototype.cabinetArray = [];
	AppContext.prototype.portArray = [];
	AppContext.prototype.couplePortArray = [];
	AppContext.prototype.basArray = [];
	AppContext.prototype.deviceBlankMap = [];
	AppContext.prototype.ajaxObj = {};
	AppContext.prototype.getLeftMenuCurrentWidth= function(){
		return this._LEFTMENU_CURRENT_WIDTH;
	};
	AppContext.prototype.setLeftMenuCurrentWidth = function(ow){
		this._LEFTMENU_CURRENT_WIDTH = ow;
	};
	
	
	
	AppContext.prototype.getLeftMenuOriginalWidth= function(){
		return this._LEFTMENU_ORIGINAL_WIDTH;
	};
	AppContext.prototype.setLeftMenuOriginalWidth = function(ow){
		this._LEFTMENU_ORIGINAL_WIDTH = ow;
	};
	
	
	AppContext.prototype.getMouseDown = function(){
		return this._MOUSEDOWN;
	};
	AppContext.prototype.setMouseDown = function(flag){
		this._MOUSEDOWN = flag;
	};
	
	AppContext.prototype.setMouseDownX = function(downX){
		this._MOUSEDOWN_X = downX;
	};
	
	AppContext.prototype.getMouseDownX = function(){
		return this._MOUSEDOWN_X;
	};
	
	AppContext.prototype.getAppPath = function(){
		return this._APP_PATH;
	};
	AppContext.prototype.setAppPath = function(path){
		this._APP_PATH = path;
	};
	
	AppContext.prototype.getPublicPath = function(){
		return this._PUBLIC_PATH;
	};
	AppContext.prototype.setPublicPath = function(path){
		this._PUBLIC_PATH = path;
	};
	
	AppContext.prototype.setCurrentMode =function(mode){
		this._MODE =  mode;
	};
	AppContext.prototype.getCurrentMode = function(){
		return this._MODE;
	};
	appContext = new AppContext();
	appContext.setAppPath('./');
	appContext.setPublicPath(appContext.getAppPath()+"public/");
	
	//canvas 上下文类
    CanvasContext = function() {};
    CanvasContext.prototype._DEFAULT_LAYER = null;
    
	//记录当前层次
	CanvasContext.prototype._currentLayer = null;
	
	//记录上一层
	CanvasContext.prototype._lastLayer = null;
	
	CanvasContext.prototype._originalWidth = null;
	CanvasContext.prototype._originalHeight = null;
	
	
	CanvasContext.prototype._width = null;
	CanvasContext.prototype._height = null;
	
	
	CanvasContext.prototype._magnificationWidth = null;
	CanvasContext.prototype._magnificationHeight = null;
	
	
	CanvasContext.prototype._top = null;
	CanvasContext.prototype._left = null;
	
	
	CanvasContext.prototype._original_top = null;
	CanvasContext.prototype._original_left = null;
	
	
	CanvasContext.prototype.getOriginalLeft = function(){
		return this._original_left;
	};
	
	
	CanvasContext.prototype.getOriginalTop = function(){
		return this._original_top;
	};
	
	
	CanvasContext.prototype.getCurrentLeft = function(){
		return this._left;
	};
	
	
	CanvasContext.prototype.getCurrentTop = function(){
		return this._top;
	};
	
	
	
	
	CanvasContext.prototype.setCurrentPosition = function(left,top){
		
		this._left = left;
		this._top = top;
	};
	
	CanvasContext.prototype.setOriginalPosition = function(left,top){
		this._original_left = left;
		this._original_top = top;
	};
	
	CanvasContext.prototype.setMagnificationSize = function(width,height){
		this._magnificationWidth = width;
		this._magnificationHeight = height;
	};
	CanvasContext.prototype.getOriginalWidth = function(){
		return this._originalWidth;
	};
	
	
	CanvasContext.prototype.setOriginalWidth = function(width){
		this._originalWidth = width;
	};
	
	
	CanvasContext.prototype.getOriginalHeight = function(){
		return this._originalHeight;
	};
	
	CanvasContext.prototype.setOriginalHeight = function(height){
		this._originalHeight = height;
	};
	
	
	CanvasContext.prototype.getCurrentWidth = function(){
		return this._width;
	};
	
	CanvasContext.prototype.setCurrentWidth = function(width){
		this._width = width;
	};
	
	
	CanvasContext.prototype.getCurrentHeight = function(){
		return this._height;
	};
	
	CanvasContext.prototype.setCurrentHeight = function(height){
		this._height = height;
	};
	
	
	
	
	CanvasContext.prototype.getMagnificationWidth = function(){
		return this._magnificationWidth;
	};
	
	
	CanvasContext.prototype.setMagnificationWidth  = function(width){
		this._magnificationWidth = width;
	};
	
	
	CanvasContext.prototype.getMagnificationHeight = function(){
		return this._magnificationHeight;
	};
	
	
	CanvasContext.prototype.setMagnificationHeight = function(height){
		this._magnificationHeight = height;
	};
	
	
	
	
	//获取当前层次
	CanvasContext.prototype.getCurrentLayer = function(){
		return this._currentLayer;
	};
	
	//设置默认打开层
	CanvasContext.prototype.setCurrentLayer = function(currentLayer){
		 this._currentLayer = currentLayer;
	};
	
	
	//获取默认层
	CanvasContext.prototype.getDefaultLayer = function(){
		return this._DEFAULT_LAYER;
	};
	
	//

	CanvasContext.prototype.setDefaultLayer = function(defaultLayer){
		 this._DEFAULT_LAYER = defaultLayer;
	};
	
	
	CanvasContext.prototype.getLastLayer = function(){
		return this._lastLayer;
	};
	
	//

	CanvasContext.prototype.setLastLayer = function(currentLayer){
		 this._lastLayer = currentLayer;
	};
	
	
	//全局变量
	canvasContext = new CanvasContext();
	canvasContext.setDefaultLayer(DEFAULT_LAYER);
	canvasContext.setCurrentLayer(canvasContext.getDefaultLayer());  //默认为第一层
	
	
	
	
	/**
	 * Canvas Element Class
	 *
	 * @namespace Canvas.Element
	 * @class Element
	 * @constructor
	 */
	Canvas.Element = function() {};
	
	/**
	 * Constant for the default CSS class name that represents a Canvas
	 * @property Canvas.Element.CSS_CANVAS
	 * @static
	 * @final
	 * @type String
	 */
	/// Canvas.Element.CSS_CANVAS = "canvas-module";	
	Canvas.Element.prototype.fillBackground = true;
	Canvas.Element.prototype.showcorners = false;
	Canvas.Element.prototype.photoborder = true;
	Canvas.Element.prototype.polaroid = false;
	Canvas.Element.prototype._backgroundImg = null;
	
	/**
	 * The object literal containing mouse position if clicked in an empty area (no image)
	 * @property _groupSelector
	 * @type object
	 */
	Canvas.Element.prototype._groupSelector = null;
	
	/**
	 * The array element that contains all the images of the canvas
	 * @property _aImages
	 * @type object
	 */
	Canvas.Element.prototype._aImages = null;
	
	/**
	 * The element that references the canvas interface implementation
	 * @property _oContext
	 * @type object
	 */
	Canvas.Element.prototype._oContext = null;
	
	/**
	 * The main element that contains the canvas
	 * @property _oElement
	 * @type object
	 */
	Canvas.Element.prototype._oElement = null;

	/**
	 * The object literal containing config parameters
	 * @property _oConfig
	 * @type object
	 */
	Canvas.Element.prototype._oConfig = null;
	
	/**
	 * The object literal containing the current x,y params of the transformation
	 * @property _currentTransform
	 * @type object
	 */
	Canvas.Element.prototype._currentTransform = null;
	
	/**
	 * Init method
	 * @method init
	 * @param el {HTMLElement | String} Container element for the canvas.
	 * @param oConfig {Object} userConfig The configuration Object literal 
	 */
	Canvas.Element.prototype.init = function(el, oConfig) {
		if (el == '') {
			return;
		}
		this._initElement(el);
		this._initConfig(oConfig);
		this._createCanvasBackground();
		this._createContainer();
		this._createHelperCanvas();
		this._createInfoCanvas();
		this._initEvents();
		this._initCustomEvents();
	};
	
	Canvas.Element.prototype.reset = function(el, oConfig) {
		if (el == '') {
			return;
		}
		$("#"+this._oElement.id).remove();
		this._initElement(el);
		this._initConfig(oConfig);
		this._initEvents();
	};
	/**
	 * The Canvas class's initialization method. This method is automatically 
	 * called by the constructor, and sets up all DOM references for 
	 * pre-existing markup, and creates required markup if it is not 
	 * already present.
	 * @method _initElement
	 * @param el {HTMLElement | String} el The element representing the Canvas
	 */
	Canvas.Element.prototype._initElement = function(el) {
		var canvasEl = null;
		if(YAHOO.util.Dom.inDocument(el)) {
			if(YAHOO.lang.isString(el)) {
				this._oElement = document.getElementById(el);
			} else {
				this._oElement = el;
			}
			/// YAHOO.util.Dom.addClass(this._oElement, Canvas.Element.CSS_CANVAS);
		}
		else {
			if (YAHOO.env.ua.ie) {
				 canvasEl = excanvas(document.createElement('canvas'));	
			}
			else {
				 canvasEl = document.createElement('canvas');
			}
			canvasEl.id = el + '';
			//var oCanvas = document.body.insertBefore(canvasEl, document.body.firstChild);
			document.getElementById('canvasContainer').insertBefore(canvasEl, document.getElementById('canvasContainer').firstChild);
			this._oElement = document.getElementById(el + '');
		}
	
		// it contains the active image and the listeners
		this._oContextTop = this._oElement.getContext('2d');
	};

	/**
	 * The custom events initialization method. 
	 * @method _initCustomEvents
	 */
	Canvas.Element.prototype._initCustomEvents = function() {
		this.onRotateStart = new Canvas.CustomEvent('onRotateStart');
		this.onRotateMove = new Canvas.CustomEvent('onRotateMove');		
		this.onRotateComplete = new Canvas.CustomEvent('onRotateComplete');
		this.onDragStart = new Canvas.CustomEvent('onDragStart');	
		this.onDragMove = new Canvas.CustomEvent('onDragMove');
		this.onDragComplete = new Canvas.CustomEvent('onDragComplete');
	};
	
	/**
	 * For now we use an object literal without methods to store the config params
	 * @method _initConfig
	 * @param oConfig {Object} userConfig The configuration Object literal 
	 * containing the configuration that should be set for this module. 
	 * See configuration documentation for more details.
	 */
	Canvas.Element.prototype._initConfig = function(oConfig) {
		this._oConfig = oConfig;
		this._oElement.width = this._oConfig.width;
		this._oElement.height = this._oConfig.height;
		this._oElement.style.width = this._oConfig.width + 'px';
		this._oElement.style.height = this._oConfig.height + 'px';
		//this._oElement.style.left = this._oConfig.left + 'px';
		//this._oElement.style.top = this._oConfig.top + 'px';
	};

	/**
	 * Adds main mouse listeners to the whole canvas
	 * @method _initEvents
	 * See configuration documentation for more details.
	 */
	Canvas.Element.prototype._initEvents = function() {
		//变形或旋转
	//	YAHOO.util.Event.on(canvas._oElement, 'mousedown', this.onMouseDown, this, true);
		
		//YAHOO.util.Event.on(canvas._oElement, 'mouseup',this.onMouseUp, this, true);
		
		//拖拽
		//YAHOO.util.Event.on(canvas._oElement, 'mousemove', this.onMouseMove, this, true);
		//显示信息
		YAHOO.util.Event.on(this._oElement, 'mousemove', this.getInfo, this, true);
		YAHOO.util.Event.on(this._oElement, 'click', this.onClick, this, true);
		YAHOO.util.Event.on(this._oElement, 'mousedown',this.drawStartPort, this, true);
		YAHOO.util.Event.on(this._oElement, 'mousemove', this.mouseoverSwitchPort, this, true);
		YAHOO.util.Event.on(this._oElement, 'mousemove', this.drawLine, this, true);
		YAHOO.util.Event.on(this._oElement, 'mouseup', this.drawEndPort, this, true);
		YAHOO.util.Event.on(this._oElement, 'contextmenu', this.popMenu, this, true); 
		//取消菜单点击
		YAHOO.util.Event.on(this._oElement, 'click', this.hidePopMenu, this, true);
		//myEvent
	//	YAHOO.util.Event.on(this._oElement, 'dblclick', this.onDblClick, this, true);
	//	YAHOO.util.Event.on(this._oElement, 'click', this.onClick, this, true);
		//YAHOO.util.Event.on(window,'oncontextmenu',this.onClick,this,true);
		
		// Canvas.Element.addEventListener("mousedown", function(evt) { startTransform(evt); }, false);
	};
	
	/**
	 * It creates a secondary canvas to contain all the images are not being translated/rotated/scaled
	 * @method _createContainer
	 */
	Canvas.Element.prototype._createContainer = function() {
		var canvasEl = null;
		if (YAHOO.env.ua.ie) {
			canvasEl = excanvas(document.createElement('canvas'));	
		}
		else {
			 canvasEl = document.createElement('canvas');
		}
		canvasEl.id = this._oElement.id + '-canvas-container';
		var oContainer = this._oElement.parentNode.insertBefore(canvasEl, this._oElement);
		oContainer.width = this._oConfig.width;
		oContainer.height = this._oConfig.height;
		oContainer.style.width = this._oConfig.width + 'px';
		oContainer.style.height = this._oConfig.height + 'px';
		// this will contain all images that are not on the top
		this._oContextContainer = oContainer.getContext('2d'); 
	};
	
	//取消菜单点击
	Canvas.Element.prototype.hidePopMenu = function(e){
		e = e || window.event;
		var eSrc = e.target || e.srcElement;
		//未点击菜单
		if(eSrc.id.substr(0,7) != 'popMenu')
			{
			 $("#popMenu").remove();
			}
	};
	
	/**
	 * 此画布用来绘制相关的信息
	 * */
	Canvas.Element.prototype._createInfoCanvas = function(){
		var canvasEl = null;
		if (YAHOO.env.ua.ie) {
			canvasEl = excanvas(document.createElement('canvas'));	
		}
		else {
			 canvasEl = document.createElement('canvas');
		}
		canvasEl.id =  this._oElement.id+'infoCanvas';
		var oInfoCanvas= this._oElement.parentNode.insertBefore(canvasEl, this._oElement);
		oInfoCanvas.width = this._oConfig.width;
		oInfoCanvas.height = this._oConfig.height;
		oInfoCanvas.style.width = this._oConfig.width + 'px';
		oInfoCanvas.style.height = this._oConfig.height + 'px';
	//	// this will contain all images that are not on the top
		this._oContextInfo = oInfoCanvas.getContext('2d'); 
		//$("#"+canvasEl.id).css("top","-1000px").css("left","-1000px");
	};
	
	
	
	/**
	 * 帮助画布，用来绘制覆盖层等
	 * */
	Canvas.Element.prototype._createHelperCanvas = function(){
		var canvasEl = null;
		if (YAHOO.env.ua.ie) {
			canvasEl = excanvas(document.createElement('canvas'));	
		}
		else {
			 canvasEl = document.createElement('canvas');
		}
		canvasEl.id =  this._oElement.id+'helperCanvas';
		var oHelperCanvas= this._oElement.parentNode.insertBefore(canvasEl, this._oElement);
		oHelperCanvas.width = this._oConfig.width;
		oHelperCanvas.height = this._oConfig.height;
		oHelperCanvas.style.width = this._oConfig.width + 'px';
		oHelperCanvas.style.height = this._oConfig.height + 'px';
	//	// this will contain all images that are not on the top
		this._oContextHelper = oHelperCanvas.getContext('2d'); 
		//$("#"+canvasEl.id).css("top","-1000px").css("left","-1000px");
	};
	
	
	Canvas.Element.prototype._createCanvasBackground = function() {
		var canvasEl = null;
		if (YAHOO.env.ua.ie) {
			 canvasEl = excanvas(document.createElement('canvas'));	
		}
		else {
			 canvasEl = document.createElement('canvas');
		}
		canvasEl.id = this._oElement.id + '-canvas-background';
		var oBackground = this._oElement.parentNode.insertBefore(canvasEl, this._oElement);
		oBackground.width = this._oConfig.width;
		oBackground.height = this._oConfig.height;
		oBackground.style.width = this._oConfig.width + 'px';
		oBackground.style.height = this._oConfig.height + 'px';
		// this will contain the background
		this._oContextBackground = oBackground.getContext('2d'); 
	};
	
	//锁屏
	Canvas.Element.prototype._createLockLayer = function() {
		var canvasEl = null;
		if (YAHOO.env.ua.ie) {
			 canvasEl = excanvas(document.createElement('canvas'));	
		}
		else {
			 canvasEl = document.createElement('canvas');
		}
		canvasEl.id = this._oElement.id + '-canvas-lockLayer';
	
		//var oLockLayer  = this._oElement.parentNode.insertBefore(canvasEl, this._oElement);
		document.body.appendChild(canvasEl);
		//oBackground.width = this._oConfig.width;
	//	oBackground.height = this._oConfig.height;
		canvasEl.style.width = 2000+ 'px';
		canvasEl.style.height =1000 + 'px';
		canvasEl.style.top = 0 ;
		canvasEl.style.left = 0 ;
		// this will contain the background
		this._oContextLockLayer = canvasEl.getContext('2d'); 
		this._oContextLockLayer.fillStyle = "rgba(0,0,0,.5)";
		//alert(screen.width+','+screen.height);
		this._oContextLockLayer.fillRect(0,0, 2000,1000);
	};
	

	
	//draw background here
	Canvas.Element.prototype.setCanvasBackground = function(oImg) {
		
		this._backgroundImg = oImg;
		//var originalImgSize = oImg.getOriginalSize();
	
			//this._oContextBackground.drawImage(oImg._oElement, 0, 0, originalImgSize.width, originalImgSize.height);
	//	alert(this._oConfig.width);
		this._oContextBackground.clearRect( 0, 0, this._oConfig.width, this._oConfig.height);
	
		this._oContextBackground.drawImage(oImg._oElement, 0, 0, this._oConfig.width, this._oConfig.height);
	
	};
	
	
	//清楚之前图片
	Canvas.Element.prototype.clearImages = function(){
		this._aImages = null;
	};
	/**
	 * Method that defines the actions when mouse is released on canvas.
	 * The method resets the currentTransform parameters, store the image corner
	 * position in the image object and render the canvas on top.
	 * @method onMouseUp
	 * @param e {Event} Event object fired on mouseup
	 */
	Canvas.Element.prototype.onMouseUp = function(e) {
		e = e || window.event;
	
		appContext.draging = false;
	//	alert(appContext.draging);
		if (this._aImages == null) {
			return;
		}
		if (this._currentTransform) {
			// determine the new coords everytime the image changes its position
			this._currentTransform.target.setImageCoords();
			
		}
		if (this._currentTransform != null && this._currentTransform.action == "rotate") {
			// fire custom rotate event handler
			this.onRotateComplete.fire(e);
		} else if (this._currentTransform != null && this._currentTransform.action == "drag") {
			// fire custom drag event handler
			this.onDragComplete.fire(e);
		}
		this._currentTransform = null;
		this._groupSelector = null;
		
		// this is to clear the selector box
		
		//找到想要放入的机柜槽
		//alert(e.offsetX);fdg
		//alert(this._aImages[this._aImages.length-1].deviceId);
		//只有在管理机柜设别是需要
		if(appContext.topMoved && appContext.getCurrentMode() == 'projectMode' && appContext.operateState == 'manageDevice'){
			var x,y;
			
			if(e.offsetX == undefined){
			
				x = e.pageX - parseInt($("#topCanvas").css("left"));
				y = e.pageY - parseInt($("#topCanvas").css("top")) ;
				
				 x = Math.floor(x / 400) ;
				 y = Math.floor(y / 30 );
				// alert(x+','+y);
			}
			else{
			 x = Math.floor(e.offsetX / 400) ;
			 y = Math.floor(e.offsetY / 30 );
			}
			//机柜槽分为40个槽，所以槽占用图为长度为40的数组来表示
			//如果对应机柜槽没有占用，则允许放入
			if(appContext.deviceBlankMap[x*20 + y] == null || appContext.deviceBlankMap[x*20 + y] == undefined)
			{
				this._aImages[this._aImages.length-1].left = x * 400 + 200;
			this._aImages[this._aImages.length-1].top =  y * 30+ 15;
		//	alert(this._aImages[this._aImages.length-1].left+','+this._aImages[this._aImages.length-1].top);
			appContext.deviceBlankMap[x*20 + y] = this._aImages[this._aImages.length-1].deviceId;
		
			}
			appContext.topMoved = false;
			//调整位置的设备编号
			var oImg = this._aImages[this._aImages.length-1];
			var dId =  oImg.deviceId;
		
			var left = oImg.left ;
			var top =	oImg.top ;
			$.ajax({
				url:"device/device",
				type:"post",
				//controller:'test',
				//action:'test',
				//调整设备位置,0号请求为调整位置
				data : {requestType : 0, deviceId : dId,x : left,y : top },
				dataType:"json",
				success:function(){
					
				}
		});
		
		}
		//对楼宇,楼层，信息点做移动
		else if(appContext.topMoved && appContext.getCurrentMode() == 'projectMode' && appContext.operateState == 'manage'){
			//alert('manageBuilding');
			//释放拖动标志
			appContext.topMoved = false;
			var x,y;
			
			if(e.offsetX == undefined){
			
				x = e.pageX - parseInt($("#topCanvas").css("left"));
				y = e.pageY - parseInt($("#topCanvas").css("top")) ;
				
				
				// alert(x+','+y);
			}
			else{
			 x =e.offsetX  ;
			 y = e.offsetY ;
			}	
			//ajax 修改移动图元位置
			this._aImages[this._aImages.length-1].left = x ;
			this._aImages[this._aImages.length-1].top =  y ;
		 //   alert(this._aImages[this._aImages.length-1].Id+','+this._aImages[this._aImages.length-1].left);
			//控制器选择
			var postController = null;
			var odata = null;
			if(this._aImages[this._aImages.length-1].type == 'building'){
				postController = 'building';
				odata = {buildingId : this._aImages[this._aImages.length-1].buildingId, building_x : x,building_y : y };
			}
			else if(this._aImages[this._aImages.length-1].type == 'floor'){
				postController = 'floor';
				odata ={floorId :  this._aImages[this._aImages.length-1].floorId, floor_x : x,floor_y : y};
			}
			else if(this._aImages[this._aImages.length-1].type == 'point'){
				postController = 'point';
				odata ={pointId :  this._aImages[this._aImages.length-1].Id, point_x : x,point_y : y};
				
				var oConfig = {};
				 oConfig.type = 'point';
			     oConfig.Id =   this._aImages[this._aImages.length-1].Id;
			     oConfig.Ip =   this._aImages[this._aImages.length-1].Ip;
			     oConfig.Person =  this._aImages[this._aImages.length-1].Person;
			     oConfig.left = x;
			     oConfig.top = y;
			     oConfig.Phone =   this._aImages[this._aImages.length-1].Phone;
			     oConfig.comment = this._aImages[this._aImages.length-1].comment;
			    // alert(oConfig.left+','+oConfig.top);
			     this._aImages.splice(this._aImages.length-1,1);
			     
			     oConfig.randomposition = false;
			   
				this.addImage((new Canvas.Img(appContext.pointInRoom,oConfig)));
				
			}
			
		//	alert(this._aImages[this._aImages.length-1].buildingId);
			$.ajax({
				url: postController+"/changeposition",
				type:"post",
				//controller:'test',
				//action:'test',
				//调整设备位置,0号请求为调整位置
				data : odata,
				dataType:"json",
				success:function(){

				}
				});
		}
	
		//调整移动设备的位置
		

		
	//	this.renderTop();
		
		this.renderAll(false);
		
	};
	
	/**
	 * Method that defines the actions when mouse is clicked on canvas.
	 * The method inits the currentTransform parameters and renders all the
	 * canvas so the current image can be placed on the top canvas and the rest
	 * in on the container one.
	 * @method onMouseDown
	 * @param e {Event} Event object fired on mousedown
	 */
	Canvas.Element.prototype.onMouseDown = function(e) {
		
		//有可能开始拖动
			appContext.draging = true;
		//	alert(appContext.draging);
		//alert('down');
		var mp = this.findMousePosition(e);
	
		//alert(mp.ex+','+mp.ey);
		// ignore if something else is already going on
		if (this._currentTransform != null || this._aImages == null) {
			return;
		}
		
		// determine whether we clicked the image
		var oImg = this.findTargetImage(mp, false);
		//alert(mp.ex+','+mp.ey);
		//alert(oImg._oElement.id);
		if (!oImg) {
			this._groupSelector = { ex: mp.ex, ey: mp.ey,
				 					top: 0, left: 0 };
		}
		else { 
			
			// determine if it's a drag or rotate case
			// rotate and scale will happen at the same time
			var action = (!this.findTargetCorner(mp, oImg)) ? 'drag' : 'rotate';
			if (action == "rotate") {
				// fire custom rotate event handler
			//	this.onRotateMove.fire(e);
			} else if (action == "drag") {
				// fire custom drag event handler
			this.onDragMove.fire(e);
			}
			
			this._currentTransform = { 
				target: oImg,
				action: action,
				scalex: oImg.scalex,
				offsetX: mp.ex - oImg.left,
				offsetY: mp.ey - oImg.top,
				ex: mp.ex, ey: mp.ey,
				left: oImg.left, top: oImg.top,
				theta: oImg.theta 
			};
									
			// we must render all so the active image is placed in the canvastop
			//在管理机柜时，需要对机柜槽做记录
			if(appContext.getCurrentMode() == 'projectMode' && appContext.operateState == 'manageDevice'){
				//释放机柜槽
				var x,y;
				
				if(e.offsetX == undefined){
				
					x = e.pageX - parseInt($("#topCanvas").css("left"));
					y = e.pageY - parseInt($("#topCanvas").css("top")) ;
					
					 x = Math.floor(x / 400) ;
					 y = Math.floor(y / 30 );
					// alert(x+','+y);
				}
				else{
				 x = Math.floor(e.offsetX / 400) ;
				 y = Math.floor(e.offsetY / 30 );
				}

				if(appContext.deviceBlankMap[x*20 + y] == this._aImages[this._aImages.length-1].deviceId){
					appContext.deviceBlankMap[x*20 + y] = null;
				}
			}
		
			
			this.renderAll(false);
		}
	};
	
	/**
	 * Method that defines the actions when mouse is hovering the canvas.
	 * The currentTransform parameter will definde whether the user is rotating/scaling/translating
	 * an image or neither of them (only hovering). A group selection is also possible and would cancel
	 * all any other type of action.
	 * In case of an image transformation only the top canvas will be rendered.
	 * @method onMouseMove
	 * @param e {Event} Event object fired on mousemove
	 */
	Canvas.Element.prototype.onMouseMove = function(e) {
		var mp = this.findMousePosition(e);
		if (this._aImages == null) {
			return;
		}
		if (this._groupSelector != null) {
			// We initially clicked in an empty area, so we draw a box for multiple selection.
			//this._groupSelector.left = mp.ex - this._groupSelector.ex;
		//	this._groupSelector.top = mp.ey - this._groupSelector.ey;
		//	this.renderTop();
		}
		else if (this._currentTransform == null) {
			// Here we are hovering the canvas then we will determine
			// what part of the pictures we are hovering to change the caret symbol.
			// We won't do that while dragging or rotating in order to improve the
			// performance.
			var targetImg = this.findTargetImage(mp, true);

			// set mouse image
			this.setCursor(mp, targetImg);
		}
		else {
			if (this._currentTransform.action == 'rotate') {
				//this.rotateImage(mp);
			//	this.scaleImage(mp);
			//	this.onRotateMove.fire(e);
			}		
			else {
				this.translateImage(mp);
				this.onDragMove.fire(e);
			}
			// only commit here. when we are actually moving the pictures
			//alert('move');
			this.renderTop();
			appContext.topMoved = true; //图片移动了
		}		
	};
	

	/**
	 * Translate image
	 * @method translateImage
	 * @param e {Event} the mouse event
	 */	
	Canvas.Element.prototype.translateImage = function(mp) {
		this._currentTransform.target.left = mp.ex - this._currentTransform.offsetX;
		this._currentTransform.target.top = mp.ey - this._currentTransform.offsetY;
	};
	
	/**
	 * Scale image
	 * @method scaleImage
	 * @param e {Event} the mouse event
	 */	
	Canvas.Element.prototype.scaleImage = function(mp) {
		var lastLen = 
			Math.sqrt(Math.pow(this._currentTransform.ey - this._currentTransform.top, 2) +
			Math.pow(this._currentTransform.ex - this._currentTransform.left, 2));
		var curLen = 
			Math.sqrt(Math.pow(mp.ey - this._currentTransform.top, 2) +
			Math.pow(mp.ex - this._currentTransform.left, 2));

		this._currentTransform.target.scalex = this._currentTransform.scalex * (curLen / lastLen);
		this._currentTransform.target.scaley = this._currentTransform.target.scalex;
	};

	/**
	 * Rotate image
	 * @method rotateImage
	 * @param e {Event} the mouse event
	 */	
	Canvas.Element.prototype.rotateImage = function(mp) {
		var lastAngle = Math.atan2(
				this._currentTransform.ey - this._currentTransform.top,
				this._currentTransform.ex - this._currentTransform.left
		);
		
		var curAngle = Math.atan2(
			mp.ey - this._currentTransform.top,
			mp.ex - this._currentTransform.left
		);
				
		this._currentTransform.target.theta = (curAngle - lastAngle) + this._currentTransform.theta;
	};
	
	/**
	 * Method to set the cursor image depending on where the user is hovering.
 	 * Note: very buggy in Opera
	 * @method setCursor
	 * @param e {Event} the mouse event
	 * @param targetImg {Object} image that the mouse is hovering, if so.
	 */
	Canvas.Element.prototype.setCursor = function(mp, targetImg) {
		if (!targetImg) {
			this._oElement.style.cursor = 'default';
		}
		else { 
			var corner = this.findTargetCorner(mp, targetImg);
		//	alert(targetImg._oElement.id);
			if (!corner) {
				this._oElement.style.cursor = 'move';
			}
			else {
				if(corner == 'tr') {
					this._oElement.style.cursor = 'ne-resize';
				}
				else if(corner == 'br') {
					this._oElement.style.cursor = 'se-resize';
				}
				else if(corner == 'bl') {
					this._oElement.style.cursor = 'sw-resize';
				}
				else if(corner == 'tl') {
					this._oElement.style.cursor = 'nw-resize';
				}									
				else {
					this._oElement.style.cursor = 'default';
				}
			}
		}
	};
	
	/**
	 * Method to add an image to the canvas.
 	 * It actually only pushes the images in an array that will be rendered later in the canvas.
	 * @method addImage
	 * @param oImg {Object} Image elment to attach
	 */
	Canvas.Element.prototype.addImage = function(oImg) {
		// this._aImages[this._aImages.length] = oImg;
		if(YAHOO.lang.isNull(this._aImages)) {
		
			this._aImages = [];
		}
		this._aImages.push(oImg);
		this.renderAll(false);

	};

	/**
	 * Method to render both the top canvas and the secondary container canvas.
	 * @method renderAll
	 * @param allOnTop {Boolean} Whether we want to force all images to be rendered on the top canvas
	 */	
	Canvas.Element.prototype.renderAll = function(allOnTop) {
		// when allOnTop equals true all images will be rendered in the top canvas.
		// This is used for actions like toDataUrl that needs to take some actions on a unique canvas.
		var containerCanvas = (allOnTop) ? this._oContextTop : this._oContextContainer;
	
		this._oContextTop.clearRect(0,0,parseInt(this._oConfig.width), parseInt(this._oConfig.height));
		containerCanvas.clearRect(0,0,parseInt(this._oConfig.width), parseInt(this._oConfig.height));
		
		if(this._aImages && this._aImages.length > 0){
			if (allOnTop) {
				var originalImgSize = this._backgroundImg.getOriginalSize();
				this._oContextTop.drawImage(this._backgroundImg._oElement, 0, 0, originalImgSize.width, originalImgSize.height);
			}
			
			//第二层直接全部在容器内和第0层
			
		//	if(canvasContext.getCurrentLayer() == 2 || canvasContext.getCurrentLayer() == 0 ||  canvasContext.getCurrentLayer() == 1){
				for (var i = 0, l = this._aImages.length; i < l; i += 1) {
					this.drawImageElement(containerCanvas, this._aImages[i]);			
				}
				
		//	}
		/*	else{
				// we render the rest of images
				//前length-1张图画在container中
				for (var i = 0, l = this._aImages.length-1; i < l; i += 1) {
					this.drawImageElement(containerCanvas, this._aImages[i]);			
				}
				// we render the top context
				//最后一张画在topCanvas中
				this.drawImageElement(this._oContextTop, this._aImages[this._aImages.length-1]);
			}
			*/
		}
	
		
	};
	
	
	Canvas.Element.prototype.reDrawAll = function(imgArray) {
		// when allOnTop equals true all images will be rendered in the top canvas.
		// This is used for actions like toDataUrl that needs to take some actions on a unique canvas.
		var containerCanvas =  this._oContextContainer;
	
		this._oContextTop.clearRect(0,0,parseInt(this._oConfig.width), parseInt(this._oConfig.height));
		containerCanvas.clearRect(0,0,parseInt(this._oConfig.width), parseInt(this._oConfig.height));
	
		
		// we render the rest of images
		//前length-1张图画在container中

		for (var i = 0, l = imgArray.length; i < l; i += 1) {
			this.drawImageElement(containerCanvas, imgArray[i]);	
		
		}
	
		
	};
	
	/**
	 * Method to render only the top canvas.
	 * Also used to render the group selection box.
	 * @method renderTop
	 */
	Canvas.Element.prototype.renderTop = function() {
		// this.beforeRenderEvent.fire();  // placeholder
	
		this._oContextTop.clearRect(0,0,parseInt(this._oConfig.width), parseInt(this._oConfig.height));
		
		// we render the top context

			this.drawImageElement(this._oContextTop, this._aImages[this._aImages.length-1]);
			
			if (this._groupSelector != null) {
				this._oContextTop.fillStyle = "rgba(0, 0, 200, 0.5)";
				//画选择框背景
				this._oContextTop.fillRect(
					this._groupSelector.ex - ((this._groupSelector.left > 0) ?
						0 : - this._groupSelector.left), 
					this._groupSelector.ey - ((this._groupSelector.top > 0) ? 
						0 : - this._groupSelector.top), 
					Math.abs(this._groupSelector.left), 
					Math.abs(this._groupSelector.top)
				);
				//画选择框
				this._oContextTop.strokeRect(
					this._groupSelector.ex - ((this._groupSelector.left > 0) ? 
						0 : Math.abs(this._groupSelector.left)), 
					this._groupSelector.ey - ((this._groupSelector.top > 0) ? 
						0 : Math.abs(this._groupSelector.top)), 
					Math.abs(this._groupSelector.left), 
					Math.abs(this._groupSelector.top)
				);
			}
		
		
	};
	
	/**
	 * Method that finally uses the canvas function to render the image
	 * @method drawImageElement
	 * @param context {Object} canvas context where the image must be rendered
	 * @param oImg {Object} the image object
	 */
	Canvas.Element.prototype.drawImageElement = function(context, oImg) {
		if(!oImg || oImg == undefined) return;
		var offsetY = oImg.height / 2;
		var offsetX = oImg.width / 2;

		context.save();
		context.translate(oImg.left, oImg.top);
		context.rotate(oImg.theta);
		context.scale(oImg.scalex, oImg.scaley);
		
		if(oImg.type != 'point')
		this.drawBorder(context, oImg, offsetX, offsetY);
		
		var originalImgSize = oImg.getOriginalSize();
		
		// drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
		// A = oImg.width - oImg._oElement.width = oImg.borderwidth (if any)
		// B = oImg.height - oImg._oElement.height = oImg.borderwidth + oImg.polaroidheight
		// B - A = oImg.polaroidheight
		var polaroidHeight = ((oImg.height - originalImgSize.height) - (oImg.width - originalImgSize.width))/2;
		
		context.drawImage(
			oImg._oElement, 
			- originalImgSize.width/2,  
			(- originalImgSize.height)/2 - polaroidHeight, 
			originalImgSize.width, 
			originalImgSize.height
		);
					
		if (oImg.cornervisibility) {
			this.drawCorners(context, oImg, offsetX, offsetY);
		}
		context.restore();
	};
		
	/**
	 * Method that returns an object with the image lines in it given the coordinates of the corners
	 * @method _getImageLines
	 * @param oCoords {Object} coordinates of the image corners
	 */
	Canvas.Element.prototype._getImageLines = function(oCoords) {
		return {
			topline: { 
				o: oCoords.tl,
				d: oCoords.tr 
			},
			rightline: { 
				o: oCoords.tr,
				d: oCoords.br 
			},
			bottomline: { 
				o: oCoords.br,
				d: oCoords.bl 
			},
			leftline: { 
				o: oCoords.bl,
				d: oCoords.tl 
			}
		};
	};

	/**
	 * Method that determines what picture are we clicking on
	 * Applied one implementation of 'point inside polygon' algorithm
	 * @method findTargetImage
	 * @param e {Event} the mouse event
	 * @param hovering {Boolean} whether or not we have the mouse button pressed
	 */	
	Canvas.Element.prototype.findTargetImage = function(mp, hovering) {
		// http://www.geog.ubc.ca/courses/klink/gis.notes/ncgia/u32.html
		// http://idav.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html
		if(!this._aImages )return;
		for (var i = this._aImages.length-1; i >= 0; i -= 1) {
			// we iterate through each image. If target found then return target
			var iLines = this._getImageLines(this._aImages[i].oCoords);
			var xpoints = this._findCrossPoints(mp, iLines);
			
			// if xcount is odd then we clicked inside the image
			// For the specific case of square images xcount == 1 in all true cases
			if (xpoints % 2 == 1 && xpoints != 0) {
				var target = this._aImages[i];
				//reorder array
				if (!hovering) {
					this._aImages.splice(i, 1);
					this._aImages.push(target);
				}
				return target;
			}
		}
		return false;
	};

	
	Canvas.Element.prototype.findTargetPort = function(mp) {
		
		
		// http://www.geog.ubc.ca/courses/klink/gis.notes/ncgia/u32.html
		// http://idav.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html
		if(!appContext.portArray )return;
		for (var i = appContext.portArray.length-1; i >= 0; i -= 1) {
			// we iterate through each image. If target found then return target
			var iLines = this._getImageLines(appContext.portArray[i].oCoords);
			var xpoints = this._findCrossPoints(mp, iLines);
			
			// if xcount is odd then we clicked inside the image
			// For the specific case of square images xcount == 1 in all true cases
			if (xpoints % 2 == 1 && xpoints != 0) {
				var target = appContext.portArray [i];
				//reorder array
				return target;
			}
		}
		return false;
	};

	
	/**
	 * Helper method to determine how many cross points are between the 4 image edges
	 * and the horizontal line determined by the position of our mouse when clicked on canvas
	 * @method _findCrossPoints
	 * @param ex {Number} x coordinate of the mouse
	 * @param ey {Number} y coordinate of the mouse
	 * @param oCoords {Object} Coordinates of the image being evaluated
	 */		
	Canvas.Element.prototype._findCrossPoints = function(mp, oCoords) {
		var b1, b2, a1, a2, xi, yi;
		var xcount = 0;
		var iLine = null;
		for (lineKey in oCoords) {
			iLine = oCoords[lineKey];
			// optimisation 1: line below dot. no cross
			if ((iLine.o.y < mp.ey) && (iLine.d.y < mp.ey)) {
				continue;
			}
			// optimisation 2: line above dot. no cross
			if ((iLine.o.y >= mp.ey) && (iLine.d.y >= mp.ey)) {
				continue;
			}
			// optimisation 3: vertical line case
			if ((iLine.o.x == iLine.d.x) && (iLine.o.x >= mp.ex)) { 
				xi = iLine.o.x;
				yi = mp.ey;
			}
			// calculate the intersection point
			else {
				b1 = 0; //(y2-mp.ey)/(x2-mp.ex); 
				b2 = (iLine.d.y-iLine.o.y)/(iLine.d.x-iLine.o.x); 
				a1 = mp.ey-b1*mp.ex;
				a2 = iLine.o.y-b2*iLine.o.x;

				xi = - (a1-a2)/(b1-b2); 
				yi = a1+b1*xi; 
			}
		
			// dont count xi < mp.ex cases
			if (xi >= mp.ex) { 
				xcount += 1;
			}
			// optimisation 4: specific for square images
			if (xcount == 2) {
				break;
			}
		}
		return xcount;
	};
	
	/**
	 * Determine which one of the four corners has been clicked
	 * @method findTargetCorner
	 * @param e {Event} the mouse event
	 * @param oImg {Object} the image object
	 */
	Canvas.Element.prototype.findTargetCorner = function(mp, oImg) {
		var xpoints = null;
		
		var corners = ['tl','tr','br','bl'];
		for (var i in oImg.oCoords) {
			xpoints = this._findCrossPoints(mp, this._getImageLines(oImg.oCoords[i].corner));
			if (xpoints % 2 == 1 && xpoints != 0) {
				return i;
			}		
		}
		return false;
	};

	/**
	 * Determine which one of the four corners has been clicked
	 * @method findTargetCorner
	 * @param e {Event} the mouse event
	 * @param oImg {Object} the image object
	 */
	Canvas.Element.prototype.findMousePosition = function(e) {
		// srcElement = IE
		var parentNode = (e.srcElement) ? e.srcElement.parentNode : e.target.parentNode;
		var isSafari2 = (YAHOO.env.ua.webkit != 0 && YAHOO.env.ua.webkit < 420);
		var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var safariOffsetLeft = (isSafari2) ? e.target.ownerDocument.body.offsetLeft + scrollLeft : 0;
		var safariOffsetTop = (isSafari2) ? e.target.ownerDocument.body.offsetTop + scrollTop : 0;
		return {
			ex: e.clientX + scrollLeft - parentNode.offsetLeft - safariOffsetLeft,
			ey: e.clientY + scrollTop - parentNode.offsetTop - safariOffsetTop,
			screenX: e.screenX,
			screenY: e.screenY
		};
	};

	/**
	 * Draw image border, if any. That includes both normal border and polaroid border
	 * @method drawBorder
	 * @param context {Object} context (layer) where the border will be drawn
	 * @param oImg {Object} the Image object
	 * @param offsetX {Number} The horizontal offset applied from the (0,0) of the canvas axis
	 * @param offsetY {Number} The vertical offset applied from the (0,0) of the canvas axis
	 */	
	Canvas.Element.prototype.drawBorder = function(context, oImg, offsetX, offsetY) {
		var outlinewidth = 2;
		context.fillStyle = 'rgba(0, 0, 0, .3)';
		context.fillRect(-2 - offsetX, -2 - offsetY, oImg.width + (2 * outlinewidth), oImg.height + (2 * outlinewidth));
		context.fillStyle = '#fff';
		context.fillRect(-offsetX, -offsetY, oImg.width, oImg.height);
	};
	
	/**
	 * 鼠标悬停时，改变显示
	 * @param context {Object} context是canvasContainer的绘画上下文
	 * @param oImg {Object} 需要绘制边框的图片对象**/
	Canvas.Element.prototype.drawHoverImage = function(context, oImg) {
	//	var outlinewidth = 2;
	//	context.strokeStyle = 'rgba(255, 0, 0,1)';
	///	var x = oImg.left - 2- oImg.width/2;
	//	var y = oImg.top - 2 - oImg.height/2;
	//	context.strokeRect(x,y, oImg.width + (2 * outlinewidth), oImg.height + (2 * outlinewidth));
		var x = oImg.left - oImg.width/2-5;
		var y = oImg.top -oImg.height/2-5;
		context.drawImage(oImg._oElement,x,y, oImg.width+5 , oImg.height+5);
		
		
	};
	
	Canvas.Element.prototype.drawDefaultBorder = function(context, oImg) {
		var outlinewidth = 2;
		context.strokeStyle = 'rgba(0, 0, 0)';
		var x = oImg.left - 2- oImg.width/2;
		var y = oImg.top - 2 - oImg.height/2;
		context.strokeRect(x,y, oImg.width + (2 * outlinewidth), oImg.height + (2 * outlinewidth));
		
		
	};
	
	/**
	 * 绘制覆盖层
	 * @param context {Object} context是canvasContainer的绘画上下文
	 * @param oImg {Object} 需要绘制覆盖的图片对象**/
	Canvas.Element.prototype.drawFront = function(context, oImg) {
		//alert(123);
		//var outlinewidth = 2;
		context.fillStyle = 'blue';
		var x = oImg.left - oImg.width/2-5;
		var y = oImg.top -oImg.height/2-5;
		context.fillRect(x,y, oImg.width+5,oImg.height+5);
		
		
	};
	
	
	Canvas.Element.prototype.showInfo = function(oImg){
		//创建给出图片信息的画布
	
	// $("#infoCanvas").css("width","50px").css("height","60px").css("top",oImg.top+'px').css("left",oImg.left+'px');

		//.getContext('2d');
		this._oContextHelper.fillStyle = "rgba(0,200,255,.5)";
		var text = null ;
		switch(oImg.type){
		//交换机
		case '0':
			text = "类型 ： 交换机   机柜编号"+oImg.cabinetsId+" \n设备编号 ："+oImg.code+"  设备名："+oImg.name+" 设备描述 ："+oImg.comment;
			break;
		//交换机端口
	//	case '20' :
	//		text = "类型 ： 端口 \n设备编号 ："+oImg.deviceId+" \n端口号 ： "+oImg.portId;
	//		break;
		case 'building':
			text = '楼宇 ： '+ oImg.buildingId +' 楼宇名 ：'+ oImg.buildingName+' 描述 ： '+oImg.comment;
		break;
		//bas机A
		case '10' :
		//bas机B
		case '11':
			var type =null;
			if(oImg.type == '10') type = 'A类';
			else if(oImg.type = '11') type = 'B类';
			text = "类型 ： BAS机   机柜编号"+oImg.cabinetsId+" 类型："+type+" \n设备编号 ："+oImg.code+"  设备名："+oImg.name+" 设备描述 ："+oImg.comment;
			break;
		case 'point':
			  text = "类型 ： "+oImg.type+" ID : "+oImg.Id+" IP:"+oImg.Ip+" 人员： "+oImg.Person+" Tel: "+oImg.Phone+' 描述 ： '+oImg.comment;
			  break;
		case 'floor':
			text = "类型 ： "+oImg.type+"  ID :  "+oImg.floorId+"  楼层名 ："+oImg.floorName+' 描述 ： '+oImg.comment;
			break;
		};
		
	
		var width = this._oContextInfo.measureText(text);
		//alert(width.width);
		var borderWidth = 2;
		var left = oImg.left;
		var top = oImg.top + oImg.height/2+borderWidth;
	
		//alert(top);
		//交换机在底部，信息无法显示
		if(top > 500)
			top = oImg.top - 100- oImg.height/2 - borderWidth;
		//擦出上次痕迹
		this._oContextHelper.clearRect(0,0,this._oConfig.width,this._oConfig.height);
		this._oContextInfo.clearRect(0,0,this._oConfig.width,this._oConfig.height);
		this._oContextHelper.fillRect(left,top,width.width,100);
		
		
		this._oContextInfo.fillStyle = "red";
		this._oContextInfo.font = "bold 10px sans-serif";
		this._oContextInfo.textBaseline = "top";
		this._oContextInfo.textAlign = "left";
		//this._oContextInfo.fillRect(oImg.left,oImg.top,50,60);
	
		//alert(text);
		if(text)
			this._oContextInfo.fillText(text,left,top);
		$("#topCanvas").attr("title","");
	};
	
	Canvas.Element.prototype.showPortOnSwitchInfo = function(oImg){
		//创建给出图片信息的画布

	// $("#infoCanvas").css("width","50px").css("height","60px").css("top",oImg.top+'px').css("left",oImg.left+'px');

		//.getContext('2d');
		//信息背景
		this._oContextHelper.fillStyle = "rgba(0,200,255,.5)";
		//var text = oImg._oElement.id;
		var text = null;
		//交换机端口
		if(oImg.type == '20'){
				text = '类型 ： 交换机端口 '+'设别号 ： ' + oImg.deviceId + " 端口号 ： " +oImg.portId;
		}
		else if(oImg.type == '21'){
				text = '类型 ： A类BAS机端口 '+'设别号 ： ' + oImg.deviceId + " 端口号 ： " +oImg.portId;
		}
		else if(oImg.type == '22'){
			text = '类型 ： B类BAS机端口 '+'设别号 ： ' + oImg.deviceId + " 端口号 ： " +oImg.portId;
	}
		//文本
		var width = this._oContextInfo.measureText(text);
		//alert(width.width);
		var imgBorderWidth = 2;
		var top = oImg.top - oImg.height/2 - imgBorderWidth - 100;
		var left = oImg.left;
		
		if(top < 100){
			top =  oImg.top + oImg.height/2 + imgBorderWidth;
		}
		this._oContextHelper.clearRect(left,top,width.width,100);
		this._oContextHelper.fillRect(left,top,width.width,100);
		
		
		this._oContextInfo.fillStyle = "red";
		this._oContextInfo.font = "bold 10px sans-serif";
		this._oContextInfo.textBaseline = "top";
		this._oContextInfo.textAlign = "left";
		//this._oContextInfo.fillRect(oImg.left,oImg.top,50,60);
	
		
	
		this._oContextInfo.fillText(text,left,top);
		$("#topCanvas").attr("title","");
	};
	/**
	 * Draw image corners to help visual understanding of the UI (if required)
	 * @method drawCorners
	 * @param context {Object} context (layer) where the corners will be drawn
	 * @param oImg {Object} the Image object
	 * @param offsetX {Number} The horizontal offset applied from the (0,0) of the canvas axis
	 * @param offsetY {Number} The vertical offset applied from the (0,0) of the canvas axis
	 */	
	Canvas.Element.prototype.drawCorners = function(context, oImg, offsetX, offsetY) {
		context.fillStyle = "rgba(0, 200, 50, 0.5)";
		context.fillRect(-offsetX, -offsetY, oImg.cornersize, oImg.cornersize);
		context.fillRect(oImg.width - offsetX - oImg.cornersize, -offsetY, oImg.cornersize, oImg.cornersize);
		context.fillRect(-offsetX, oImg.height - offsetY - oImg.cornersize, oImg.cornersize, oImg.cornersize);
		context.fillRect(oImg.width - offsetX - oImg.cornersize, oImg.height - offsetY - oImg.cornersize, oImg.cornersize, oImg.cornersize);
	};

	/**
	 * Export the specific canvas element to an Image. Created and rendered on the browser.
	 * Beware of crossbrowser support.
	 * @method canvasTo
	 * @param format {String} the format of the output image. Either jpeg or png.
	 */	
	Canvas.Element.prototype.canvasTo = function(format) {
		this.renderAll(true);
		if (format == 'jpeg' || format == 'png') {
			return this._oElement.toDataURL('image/'+format);
		}
	};
	
	/**
	 * Hook onto "interesting moments" in the lifecycle of Canvas Element
	 * @method subscribe
	 * @param type {String} The type of event.
	 * @param fn {Function} The handler function
	 * @param scope {Object} An object to become the execution scope of the handler.
	 */
	Canvas.Element.prototype.subscribe = function(type, fn, scope) {
		if(typeof this[type] == "undefined") {
			throw new Error("Invalid custom event name: " + type);
		}
		if(typeof fn != "function") {
			throw new Error("Invalid handler function.");
		}
		this[type].scope = scope || window;
		this[type].handler = fn;
	};
	
	Canvas.CustomEvent = function(type) {
		this.type = type;
		this.scope = null;
		this.handler = null;
		var self = this;
		this.fire = function(e) {
			if(this.handler != null) {
				self.handler.call(self.scope, e);
			}
		};
	};
	
	/**
	 * 鼠标悬停在图片上，显示状态信息
	
	
	Canvas.Element.prototype.onMouseOver = function(e) {
		alert('down');
		var mp = this.findMousePosition(e);
		//alert(mp.ex+','+mp.ey);
		// ignore if something else is already going on
		//if (this._currentTransform != null || this._aImages == null) {
	//		return;
	//	}
		
		//查看是否悬停在某个图片上
		var oImg = this.findTargetImage(mp, false);
		//alert(mp.ex+','+mp.ey);
	
		if (!oImg) {
			
		}
		else { 
			alert(oImg);
									
			// we must render all so the active image is placed in the canvastop
			//this.renderAll(false);
		}
	};
	
	 * **/
	/**
	 * luxiaoqing
	 * 添加此方法来增加图片层次映射
	 * 双击进入下一层
	 * **/
	Canvas.Element.prototype.onDblClick = function(e) {
		alert(e.offsetX+','+e.offsetY);
			
	};
	
	//绘制机柜
	Canvas.Element.prototype.drawMachineCabinet = function(){
		var self = this;
		var context = this._oContextBackground;
		var img = new Image();
		
		img.onload = function(){
			//绘制机柜房间背景
			context.drawImage(this,0,0,self._oConfig.width,self._oConfig.height);
			context.strokeStyle = "black";	
			context.beginPath();
			context.strokeRect(0,0,360,self._oConfig.height);
			context.strokeRect(400,0,360,self._oConfig.height);
			context.stroke();
		//	context.strokeRect(550,0,200,this._oConfig.height);
		   //开始绘制机柜
			//机柜宽 360，高600，一个机柜放20台机器
			//机槽 高30 宽360
		
			for(var i = 0 ; i < 20; i++ ){
				
			//	context.moveTo(20,i*30);
			//	context.lineTo(20+360,i*30);
				//绘制机柜槽
				context.drawImage(appContext.deviceBlank,0,i*30);
				context.strokeText(i+1,5,i*30+15);
			//	context.moveTo(420,i*30);
			//	context.lineTo(420+360,i*30);
				//绘制机柜槽
				context.drawImage(appContext.deviceBlank,400,i*30);
				context.strokeText(i+21,400+5,i*30+15);
				//context.moveTo(550,i*30);
			//	context.lineTo(550+200,i*30);
			}
			
			//
			
				
				//非工程模式下，绘制机器端口
				//绘制交换机
			
				if(appContext.getCurrentMode() != 'projectMode' ){
					appContext.portArray = [];
					for(var i=0; i < appContext.switchArray.length;i++){	
						
						self.drawImageElement(self._oContextBackground, appContext.switchArray[i]);	
						if(appContext.getCurrentMode() == 'scanMode'){
							addPortOnSwitch(appContext.switchArray[i],i);
						}
					}
					
					for(var i=0; i < appContext.basArray.length;i++){		
						self.drawImageElement(self._oContextBackground, appContext.basArray[i]);
						//为A,B类绘制标记
						
						if(appContext.basArray[i].type == '10'){
							self._oContextBackground.fillStyle = 'red';
							self._oContextBackground.fillRect(appContext.basArray[i].left,appContext.basArray[i].top,10,10);
						}
						else if(appContext.basArray[i].type == '11'){
							self._oContextBackground.fillStyle = 'green';
							self._oContextBackground.fillRect(appContext.basArray[i].left,appContext.basArray[i].top,10,10);
						}
						addPortOnBas(appContext.basArray[i],i);
					}
					//alert(appContext.getCurrentMode());
					//为交换机绘制端口
				//	for(var i = 0;i<  appContext.switchArray.length;i++){
					
				//		addPortOnSwitch(appContext.switchArray[i],i);
				//	}
					//端口连接关系未加载
					//修改端口状态并构建 appContext.couplePortArray
					
					if( appContext.couplePortArray.length == 0){
					
						//ajax here 加载端口连接状态
						//构造appContext.couplePortArray

						$.ajax({
							url:"port/port",
							type:"get",
							//controller:'test',
							//action:'test',
							//获取此机柜中设备端口的连接信息
							data : {cabinetsId : appContext.currentCabinetsId },
							dataType:"json",
							success:function(coupleArray){
								if(coupleArray == undefined){
									alert("error");
								}
								else{
									//用每条连接记录初始化链接状态数组	
									
									for(index in coupleArray){
										
											var aLinkItem = null;
											//查询模式下都要加载，指令模式仅仅加载BAS机的
											if('scanMode' == appContext.getCurrentMode())
												aLinkItem = coupleArray[index];
											else if('maintainMode' == appContext.getCurrentMode() && coupleArray[index].LINK_TYPE == '1')
												aLinkItem = coupleArray[index];
											else 
												continue;
												
											for(var i = 0;i < appContext.portArray.length;i++){
												//找到有连接状态的端口
												if(appContext.portArray[i].deviceId == aLinkItem['DEVICE_A_ID'] && appContext.portArray[i].portId ==  aLinkItem['PORT_A_CODE']){
													//修改端口状态
													appContext.portArray[i]._oElement = appContext.portUsing;
													//把自己加入连接状态数组
													appContext.couplePortArray[aLinkItem['DEVICE_B_ID']+'|'+aLinkItem['PORT_B_CODE']] = appContext.portArray[i];
												}
												else if(appContext.portArray[i].deviceId == aLinkItem['DEVICE_B_ID'] && appContext.portArray[i].portId ==  aLinkItem['PORT_B_CODE']){
												
													appContext.portArray[i]._oElement = appContext.portUsing; 
													//把自己加入连接状态数组
													appContext.couplePortArray[aLinkItem['DEVICE_A_ID']+'|'+aLinkItem['PORT_A_CODE']] = appContext.portArray[i];
												}
											}
											
										}
									self.reDrawAll(appContext.portArray);
								}
								
								//绘制端口
								
							
							}
					});
					}
					//绘制端口		
				//	self.reDrawAll(appContext.portArray);
				}
			
				//工程模式下，端口设置操作是显示交换机端口以及BAS机端口
				 if(appContext.getCurrentMode() == 'projectMode' && appContext.operateState == 'managePort'){
					 $("#"+canvas._oElement.id+'-canvas-container').hide();
						appContext.portArray = [];
					//绘制交换机并为其绘制端口
					for(var i=0; i < appContext.switchArray.length;i++){		
						self.drawImageElement(self._oContextBackground, appContext.switchArray[i]);	
						addPortOnSwitch(appContext.switchArray[i],i);
					}
					//alert(appContext.getCurrentMode());
					//绘制BAS机
					for(var i=0; i < appContext.basArray.length;i++){		
						self.drawImageElement(self._oContextBackground, appContext.basArray[i]);	
						if(appContext.basArray[i].type == '10'){
							self._oContextBackground.fillStyle = 'red';
							self._oContextBackground.fillRect(appContext.basArray[i].left,appContext.basArray[i].top,10,10);
						}
						else if(appContext.basArray[i].type == '11'){
							self._oContextBackground.fillStyle = 'green';
							self._oContextBackground.fillRect(appContext.basArray[i].left,appContext.basArray[i].top,10,10);
						}
						addPortOnBas(appContext.basArray[i],i);
					}
					
					//端口连接关系未加载
					//修改端口状态并构建 appContext.couplePortArray
					if( appContext.couplePortArray.length == 0){
					
						//ajax here 加载端口连接状态
						//构造appContext.couplePortArray

						$.ajax({
							url:"port/port",
							type:"get",
							//controller:'test',
							//action:'test',
							//获取此机柜中设备端口的连接信息
							data : {cabinetsId : appContext.currentCabinetsId },
							dataType:"json",
							success:function(coupleArray){
								if(coupleArray == undefined){
									alert("error");
								}
								else{
									//用每条连接记录初始化链接状态数组	
									
									for(index in coupleArray){
									
										var aLinkItem = null;
											if(coupleArray[index].LINK_TYPE == '1')
												continue;
											else{
												 aLinkItem = coupleArray[index];
											}
											for(var i = 0;i < appContext.portArray.length;i++){
										//	alert(appContext.portArray[i].deviceId+','+appContext.portArray[i].portId );
												//找到有连接状态的端口
												if(appContext.portArray[i].deviceId == aLinkItem['DEVICE_A_ID'] && appContext.portArray[i].portId ==  aLinkItem['PORT_A_CODE']){
													
													//修改端口状态
													appContext.portArray[i]._oElement = appContext.portUsing;
													//把自己加入连接状态数组
													appContext.couplePortArray[aLinkItem['DEVICE_B_ID']+'|'+aLinkItem['PORT_B_CODE']] = appContext.portArray[i];
												}
												else if(appContext.portArray[i].deviceId == aLinkItem['DEVICE_B_ID'] && appContext.portArray[i].portId ==  aLinkItem['PORT_B_CODE']){
												
													appContext.portArray[i]._oElement = appContext.portUsing; 
													//把自己加入连接状态数组
													appContext.couplePortArray[aLinkItem['DEVICE_A_ID']+'|'+aLinkItem['PORT_A_CODE']] = appContext.portArray[i];
												}
											}
											
										}
									//绘制端口
									
									self.reDrawAll(appContext.portArray);
								}
								
								
							}
					});
					}
					 $("#"+canvas._oElement.id+'-canvas-container').effect('puff',{mode:'show',percent:50},500,function(){});
				}
				
		};
		img.src = appContext.getPublicPath() + 'img/machineCabinet.jpg';
	};
	

	Canvas.Element.prototype.onClick  = function(e){
		
		//如果当前画布区放大时，缩小画布
		//alert(e.offsetX+","+e.offsetY);
		var oLeftMenu = document.getElementById('leftMenu');
		

		var config = {};
		//now left is hidden,show it
		if('none' == oLeftMenu.style.display ){	
			//允许调整大小
			YAHOO.util.Event.on(window, 'mousedown',adjustCanvasStart, null, true);
			YAHOO.util.Event.on(window, 'mousemove',adjustCanvas, null, true);
			YAHOO.util.Event.on(window, 'mouseup',adjustCanvasOver, null, true);
			$("#leftMenu").css("display",'inline-block');
			
			$("#leftMenu").css("width",appContext.getLeftMenuOriginalWidth()+'px').css("height",canvasContext.getOriginalHeight()-parseInt($("#leftMenu").css("padding")) *2+'px');
			
	
			//document.getElementById('hide').style.display = 'inline-block';
			//document.getElementById('show').style.display = 'none';
			$("#hide").css("display","inline-block");
			$("#show").css("display","none");
		
			
			//缩小

			config.width =canvasContext.getOriginalWidth();	
		
			canvasContext.setCurrentWidth(config.width);
			config.height =canvasContext.getOriginalHeight();	
			
		//恢复默认参数
		canvasContext.setCurrentPosition(canvasContext.getOriginalLeft(),canvasContext.getOriginalTop());
		
		appContext.setLeftMenuCurrentWidth(appContext.getLeftMenuOriginalWidth());
		
			
				canvas._oConfig = config; 
 
			//	canvas._oElement.width = config.width ;
			//	canvas._oElement.height = config.height ;
			
				canvas.reset("topCanvas",config);
			//	 $("canvas[id*="+canvas._oElement.id+"]").css("width",config.width +'px').css("height",config.height +'px');
		
			//	 $("canvas[id*="+canvas._oElement.id+"]").css("left",canvasContext.getOriginalLeft() +'px');
			
				 resetAllCanvas();
			
				 if(3 == canvasContext.getCurrentLayer() ){
					 canvas.drawMachineCabinet();
				 }
				 canvas.setCanvasBackground(canvas._backgroundImg);
				 canvas.renderAll();
		
		}
		
	
		var mp = this.findMousePosition(e);
		var currentLayer = canvasContext.getCurrentLayer();
		
		//查看是否悬停在某个图片上
		var oImg = this.findTargetImage(mp, false);
	
		if(oImg){
	
		//aaa
			switch(oImg.type){
			case 'building' :
			//	$("canvas").effect('puff',{mode:'hide',percent: 50 },10,function(){});
			//	$("canvas").hide();
				 $("#"+canvas._oElement.id+'-canvas-container').hide();
				 $("#"+canvas._oElement.id+'-canvas-background').hide();
				//添加元素菜单该为楼层
				//修噶拖拽添加图元菜单
				if(appContext.getCurrentMode() == 'projectMode'){
				
					$("#addElementBlock").find("ul").children().remove();
					var addElement = $("<li><img id='addElement_floor' src='"+appContext.getPublicPath()+"img/floor.png'/></li>");
					$("#addElementBlock").find("ul").append(addElement);
					$("#addElementBlock").effect('pulsate',{mode:'show',},500,function(){});
				
					var imgHeight = $("#addElement_floor").outerHeight();
					var imgWidth = $("#addElement_floor").outerWidth();
					var x1 = canvasContext.getCurrentLeft();
					var y1 = canvasContext.getCurrentTop();
					var x2 = canvasContext.getCurrentLeft()+canvasContext.getCurrentWidth();
					var y2 = canvasContext.getCurrentTop()+canvasContext.getCurrentHeight()-imgHeight;

					$("#addElement_floor").draggable(
							{
								cursor:"move",
								helper:"clone",
								containment:[x1,y1,x2,y2],

								opacity:0.5,
								stop: function(e,ui){
									//alert(this.id);
									//添加楼宇
									var x,y;
									
									if(e.offsetX == undefined){
									
										x = e.pageX - parseInt($("#topCanvas").css("left"));
										y = e.pageY - parseInt($("#topCanvas").css("top")) ;
										
										
										// alert(x+','+y);
									}
									else{
									 x =e.offsetX  ;
									 y = e.offsetY ;
									}	
									//防止添加出界
									if(x < 0) x = 0;
									if(y < 0) y = 0;
									if(x > canvasContext.getCurrentWidth()) x = canvasContext.getCurrentWidth()- imgWidth;
									if(y > canvasContext.getCurrentHeight()) y = canvasContext.getCurrentHeight() - imgHeight;

								lockScreen();
								faddFloor(x,y);
								}
							}
							);
				}
				appContext.currentBuildingId = oImg.buildingId;
				var oConfig ={};
				//oConfig.id = oImg.buildingId;
				oConfig.buildingId = oImg.buildingId;
				oConfig.type = oImg.type;
				stepIn(currentLayer,oConfig,this);
				//记录返回楼ID
				appContext.lastBuildingId = oImg.buildingId;
				//点击图层联动左侧菜单
				$("details").has("summary[id='"+oImg.type+"_"+oImg.buildingId+"']").attr("open",true);
				break;
			case 'floor' :
				//$("canvas").effect('puff',{mode:'hide',percent: 50 },500,function(){});
				 $("#"+canvas._oElement.id+'-canvas-container').hide();
				 $("#"+canvas._oElement.id+'-canvas-background').hide();
				//拖拉信息点
				if(appContext.getCurrentMode() == 'projectMode'){
					//添加元素菜单该为楼层
						$("#addElementBlock").find("ul").children().remove();
						var addElement = $("<li><img id='addElement_point' src='"+appContext.getPublicPath()+"img/portState/pointAvalible.png'/></li>");
						$("#addElementBlock").find("ul").append(addElement);
						addElement = $("<li><img id='addElement_point' src='"+appContext.getPublicPath()+"img/portState/pointUnavalible.png'/></li>");
						$("#addElementBlock").find("ul").append(addElement);
						addElement = $("<li><img id='addElement_point' src='"+appContext.getPublicPath()+"img/portState/pointUsing.png'/></li>");
						$("#addElementBlock").find("ul").append(addElement);
						$("#addElementBlock").effect('pulsate',{mode:'show',},500,function(){});
					
						var imgHeight = $("#addElement_point").outerHeight();
						var imgWidth = $("#addElement_point").outerWidth();
						var x1 = canvasContext.getCurrentLeft();
						var y1 = canvasContext.getCurrentTop();
						var x2 = canvasContext.getCurrentLeft()+canvasContext.getCurrentWidth();
						var y2 = canvasContext.getCurrentTop()+canvasContext.getCurrentHeight()-imgHeight;

						$("#addElement_point").draggable(
								{
									cursor:"move",
									helper:"clone",
									containment:[x1,y1,x2,y2],

									opacity:0.5,
									stop: function(e,ui){
										//alert(this.id);
										//添加楼宇
										var x,y;
										
										if(e.offsetX == undefined){
										
											x = e.pageX - parseInt($("#topCanvas").css("left"));
											y = e.pageY - parseInt($("#topCanvas").css("top")) ;
											
											
											// alert(x+','+y);
										}
										else{
										 x =e.offsetX  ;
										 y = e.offsetY ;
										}	
										
										if(x < 0) x = 0;
										if(y < 0) y = 0;
										if(x > canvasContext.getCurrentWidth()) x = canvasContext.getCurrentWidth()- imgWidth;
										if(y > canvasContext.getCurrentHeight()) y = canvasContext.getCurrentHeight() - imgHeight;

									lockScreen();
									faddPoint(x,y);
									}
								}
								);
					}
				//楼层还没做，默认一层
			
				var oConfig ={};
				 oConfig.type = 'floor';
				 //先写一
		    	 oConfig.floorId = oImg.floorId;
		    	 oConfig.floorName = oImg.floorName;
		    	 //记录返回层的ID
		    	 appContext.lastFloorId =  oImg.floorId;
		    	 
    		     stepIn(2,oConfig,this);
    		     $("details").has("summary[id='"+oImg.type+"_"+oImg.floorId+"']").attr("open",true);
				break;
			case '3': 
				break;
			}
		}
		//没有悬停在图片上，显示楼层信息
		else if (!oImg || undefined == oImg  ) {
		
			//记录是否进入下一层
			appContext.clickIn = false;
			//oImg._oElement.id;
		
			//楼宇和平面图信息
		
			//alert('不在图片上');
			//选择楼宇
			if(0 == currentLayer){
				return;
			}
			//alert(currentLayer);
	//	   if(1 == currentLayer){
			   //楼层1
		//	   appContext.currentFloor = 1;
		//	   return;
		//   }
			canvasContext.setLastLayer(currentLayer);
			currentLayer++; //进入下一层
			canvasContext.setCurrentLayer(currentLayer);
			/*
			if(currentLayer == 1){
				//alert(currentLayer);
			
				appContext.clickIn = true;
				//楼层平面图,需要绘制所有端口
				//alert(123);
				this.clearImages();
				this._oContextContainer.clearRect(0,0,this._oConfig.width,this._oConfig.height);
				
				
				
				//绘制背景
				this.setCanvasBackground(new Canvas.Img(document.getElementById(currentLayer+"_layer_bg"),{}));
				//show information about this layer
			
				$("#topCanvas").attr("title",$("#"+canvasContext.getCurrentLayer()+"_layer_bg").attr("alt"));
			}
			*/
			//首先检测是否还有下一层
			//此处绘制下一层所有信息
			//2 表示进入楼层平面图
			if(currentLayer == 2){
			//	appContext.clickIn = true;
				/*
				$.ajax({
						url:"test/test",
						type:"get",
						//controller:'test',
						//action:'test',
						//data : "userName=admin",
						dataType:"json",
						success:function(person){
							alert('123');
							if(person=='undefined'){
							alert("error");
							}
							else{
								alert(person.name+','+person.password);
							}
						}
				});
				*/
				//联动左侧菜单
			//	$("details").has("summary[id='floor_1']").attr("open",true);
			//	stepIn(currentLayer,null,this);
				
		
		
			}
			//选择房间使用菜单
			else if(3 == currentLayer ){
				//控制仅在有效进入下一层才播放多媒体
			
			//	appContext.clickIn = true;
			//	stepIn(currentLayer,null,this);
				canvasContext.setCurrentLayer(--currentLayer);  //restore the layer
				canvasContext.setLastLayer(--currentLayer);
				
				
			}
			//没有下层，恢复层数
			else if(currentLayer == 4){
				canvasContext.setCurrentLayer(--currentLayer);  //restore the layer
				canvasContext.setLastLayer(--currentLayer);
			
			}
			
			if(appContext.clickIn && appContext.mediaOn){
				
				//播放点入声效
				
				appContext.mediaMouseClickIn.load();
				appContext.mediaMouseClickIn.play();
				
			
			}
		}
	
	
	
};

	Canvas.Element.prototype.getInfo  = function(e){
	
	if(!appContext.draging){
		var mp = this.findMousePosition(e);

		
		//查看是否悬停在某个图片上
		var oImg = this.findTargetImage(mp, false);
		
		
		//没有悬停在图片上，显示楼层信息
		if (!oImg || undefined == oImg  ) {
		
		
			appContext.played = false;
			//擦出边框
			this._oContextHelper.clearRect(0,0,this._oConfig.width,this._oConfig.height);
			//擦出信息
			this._oContextInfo.clearRect(0,0,this._oConfig.width,this._oConfig.height);
			//oImg._oElement.id;
			
		
		
			//alert('不在图片上');
		}
		else if(oImg){ 
			
		
			if(!appContext.played && appContext.mediaOn){
			appContext.mediaMouseoverOnLayerPort.load();
			appContext.mediaMouseoverOnLayerPort.play();
			appContext.played = true;
			}
			//显示悬停图片信息
			this.showInfo(oImg);
			//为悬停图片添加边框
			this.drawHoverImage(this._oContextHelper, oImg );
		//	alert(oImg._oElement.id);
									
			// we must render all so the active image is placed in the canvastop
			//this.renderAll(false);
			}
	}
	
	};
	
	
	
	Canvas.Element.prototype.mouseoverSwitchPort  = function(e){
	
		if((appContext.operateState == 'managePort'||appContext.getCurrentMode() == 'maintainMode' || 'scanMode' == appContext.getCurrentMode()) && canvasContext.getCurrentLayer() == 3)
			{
			
			
			var mp = this.findMousePosition(e);
		
			//查看是否悬停在某个图片上
			var oImg = this.findTargetPort(mp);

			//alert(oImg);
			//没有悬停在图片上，显示楼层信息
			if (!oImg || undefined == oImg  ) {
				
				//控制音效只播放一次
				appContext.switchplayed = false;
				//擦出边框
				
				this._oContextHelper.clearRect(0,0,this._oConfig.width,this._oConfig.height);
				//擦出信息
				this._oContextInfo.clearRect(0,0,this._oConfig.width,this._oConfig.height);
				
				//擦出边框
				//this.renderAll(false);
			//	this._oContextInfo.clearRect(0,0,this._oConfig.width,this._oConfig.height);
				//oImg._oElement.id;
				

				//alert('不在图片上');
			}
			else if(oImg){ 
				//alert(mp.ex);
				//为悬停图片添加边框
				
				if(!appContext.switchplayed && appContext.mediaOn){
			
					appContext.mediaMouseOverSwitchPort.load();
					appContext.mediaMouseOverSwitchPort.play();
					appContext.switchplayed = true;
				}
				this.drawHoverImage(this._oContextHelper, oImg );
				//显示悬停图片信息
				this.showPortOnSwitchInfo(oImg);
				//如果有对应连接端口，那么得显示
				if(appContext.couplePortArray[oImg.deviceId+'|'+oImg.portId]){
					this.drawHoverImage(this._oContextHelper, oImg);
					this.drawHoverImage(this._oContextHelper, appContext.couplePortArray[oImg.deviceId+'|'+oImg.portId]);
					
					this.showPortOnSwitchInfo(appContext.couplePortArray[oImg.deviceId+'|'+oImg.portId]); 
					this._oContextHelper.beginPath();
					this._oContextHelper.moveTo(oImg.left,oImg.top);
					this._oContextHelper.lineTo(appContext.couplePortArray[oImg.deviceId+'|'+oImg.portId].left,appContext.couplePortArray[oImg.deviceId+'|'+oImg.portId].top);
					this._oContextHelper.stroke();
				
					
				}
			//	alert(oImg._oElement.id);
										
				// we must render all so the active image is placed in the canvastop
				//this.renderAll(false);
			}
			}
		if(appContext.startPort)
			this.drawFront(this._oContextHelper, appContext.startPort);
		
		};
		
		
		

	Canvas.Element.prototype.drawStartPort = function(e){
		//维护模式下并且在弱电间
		
		//	alert(appContext.getCurrentMode()+","+this.getCurrentLayer());
		if(('managePort' ==  appContext.operateState ||"maintainMode" == appContext.getCurrentMode() )&&  3 == canvasContext.getCurrentLayer() ){
			//alert(123);	
			appContext.mouseup = false;
			var mp = this.findMousePosition(e);
			//鼠标按下
		
			
			//查看是否悬停在某个图片上
			var oImg = this.findTargetPort(mp);

			
			//没有悬停在图片上，显示楼层信息
			if (!oImg || undefined == oImg  ) {
			
			}
			else if(oImg){
				//未连接
				if(!appContext.couplePortArray[oImg.deviceId+'|'+oImg.portId]){
				this.drawFront(this._oContextHelper, oImg);
				//记录选择起点
				appContext.startPort = oImg;
				}
				//已经连接
				else{
					var ans = confirm("断开连接？");
					if(ans){
						//断开连接
						var couple = appContext.couplePortArray[oImg.deviceId+'|'+oImg.portId];
						appContext.couplePortArray[oImg.deviceId+'|'+oImg.portId] = null;
						appContext.couplePortArray[couple.deviceId+'|'+couple.portId] = null;
						
						//恢复可用端口图
						for(var i = 0,j=0;i < appContext.portArray.length && j < 2 ;i++ ){
							if((appContext.portArray[i].deviceId+'|'+appContext.portArray[i].portId == oImg.deviceId+'|'+oImg.portId) || (appContext.portArray[i].deviceId+'|'+appContext.portArray[i].portId == couple.deviceId+'|'+couple.portId)){
								j++;
								//var id = appContext.portArray[i]._oElement.id;
								//修改为可使用端口
								appContext.portArray[i]._oElement = appContext.port;
							//	appContext.portArray[i]._oElement.id = id;
							}
						}
						//从数据库中删除此条连接记录
						//ajax here
						$.ajax({
							url:"port/port",
							type:"post",
							//controller:'test',
							//action:'test',
							//记录端口连接情况
							data : { requestType:'1',deviceId : oImg.deviceId,portId : oImg.portId },
							dataType:"json",
							success:function(){
								
							}
					});
					}
					this.reDrawAll(appContext.portArray);
				}
			}
		} 
	};
	
	
	Canvas.Element.prototype.drawLine = function(e){
		//维护模式下并且在弱电间
		//选择了起始端口，并且按着鼠标
		if(('managePort' ==  appContext.operateState ||"maintainMode" == appContext.getCurrentMode() &&  3 == canvasContext.getCurrentLayer()) && !appContext.mouseup && appContext.startPort){
			//擦出边框
			
			this._oContextHelper.clearRect(0,0,this._oConfig.width,this._oConfig.height);
			//擦出信息
			this._oContextInfo.clearRect(0,0,this._oConfig.width,this._oConfig.height);
			//绘制起点
			if(appContext.startPort)
				this.drawFront(this._oContextHelper, appContext.startPort);
			
			//绘悬停端口
			var mp = this.findMousePosition(e);
			//鼠标按下
			//查看是否悬停在某个图片上
			var oImg = this.findTargetPort(mp);

			
			//没有悬停在图片上，显示楼层信息
			if (!oImg || undefined == oImg  ) {
			
			}
			else if(oImg){
				
				this.drawFront(this._oContextHelper, oImg);
				
			}
			
			//绘制直线
			this._oContextHelper.save();
			this._oContextHelper.beginPath();
			this._oContextHelper.strokeStyle = "black";
			this._oContextHelper.moveTo(appContext.startPort.left,appContext.startPort.top);
			this._oContextHelper.lineTo(e.offsetX,e.offsetY);
			this._oContextHelper.stroke();
			this._oContextHelper.restore();
			
		
			
		
		} 
		
		
	};
	

	Canvas.Element.prototype.drawEndPort = function(e){
		
		
		//维护模式下并且在弱电间
		if(('managePort' ==  appContext.operateState || "maintainMode" == appContext.getCurrentMode()) &&  3 == canvasContext.getCurrentLayer() && !appContext.mouseup){
			//鼠标松开
			appContext.mouseup = true;
		
			//鼠标松开位置
			var mp = this.findMousePosition(e);		
			//查看是否悬停在某个图片上
			var oImg = this.findTargetPort(mp);

			var self = this;
			//没有悬停在图片上，没有连接两个端口
			if (!oImg || undefined == oImg  ) {
				//释放起始端口
				appContext.startPort = null;
			}
			//指令模式下连接A类BAS机和B类BAS机
			
			else if(oImg && oImg._oElement != appContext.portUsing && ((appContext.startPort.type == '21' && oImg.type == '22') ||(appContext.startPort.type == '22' && oImg.type == '21')) && "maintainMode" == appContext.getCurrentMode()){
				//改变端口状态
				//保存修改d
		
				//
			//	oImg._oElement.src = appContext.getPublicPath()+'img/portState/using.jpg';
				oImg._oElement = appContext.portUsing;
			//	appContext.startPort._oElement.src= appContext.getPublicPath()+'img/portState/using.jpg';
				appContext.startPort._oElement = appContext.portUsing;
				
					//记录起点到终点路径
					appContext.couplePortArray[appContext.startPort.deviceId+'|'+appContext.startPort.portId]=oImg;
					
					//路径双向，记录终点到起点路劲
					appContext.couplePortArray[oImg.deviceId+'|'+oImg.portId ] = appContext.startPort;
					//ajax here
					//插入连接端口对
					$.ajax({
						url:"port/port",
						type:"post",
						//controller:'test',
						//action:'test',
						//记录端口连接情况
						data : {requestType:'0', deviceId_A : appContext.startPort.deviceId,portId_A : appContext.startPort.portId,deviceId_B : oImg.deviceId,portId_B : oImg.portId ,linkType :1 },
						dataType:"json",
						success:function(){
							
						}
				});
					
					
				//appContext.couplePortArray[appContext.startPort._oElement.id]=oImg;
			//	appContext.couplePortArray[oImg._oElement.id ]=appContext.startPort;
				//这里保存成对端口			
					var tips1 = '',tips2 = '';
			        if(appContext.startPort.type =='21'){
					 tips1 = 'A类  BAS机 '+ appContext.startPort.code + '的端口 ' + appContext.startPort.portId;
					 tips2= ' B类  BAS机 '+ oImg.code + '的端口 ' + oImg.portId;
			        }
			        else if(appContext.startPort.type =='22'){
			        	 tips2 = 'B类 BAS机 '+ appContext.startPort.code + '的端口 ' + appContext.startPort.portId;
						 tips1= ' A类 BAS机 '+ oImg.code + '的端口 ' + oImg.portId;
			        }
					alert("将"+tips1+' 与 '+tips2+" 相连接！");
					
					this.reDrawAll(appContext.portArray);
				
				
				appContext.startPort = null;
			}
			//被连接端口不能是自己，不能是同一台机器或者是已经连接的端口
			else if(oImg && oImg._oElement != appContext.portUsing && ((appContext.startPort.type == '21' && oImg.type == '20') ||(appContext.startPort.type == '20' && oImg.type == '21')) && "projectMode" == appContext.getCurrentMode()){
			
				
				//工程模式下配置，可以连接交换机和A类BAS机端口
				//交换机连A类BAS
				
				
				//改变端口状态
				//保存修改d
				//
			//	oImg._oElement.src = appContext.getPublicPath()+'img/portState/using.jpg';
				oImg._oElement = appContext.portUsing;
			//	appContext.startPort._oElement.src= appContext.getPublicPath()+'img/portState/using.jpg';
				appContext.startPort._oElement = appContext.portUsing;
				
					//记录起点到终点路径
					appContext.couplePortArray[appContext.startPort.deviceId+'|'+appContext.startPort.portId]=oImg;
					
					//路径双向，记录终点到起点路劲
					appContext.couplePortArray[oImg.deviceId+'|'+oImg.portId ] = appContext.startPort;
					//ajax here
					//插入连接端口对
					$.ajax({
						url:"port/port",
						type:"post",
						//controller:'test',
						//action:'test',
						//记录端口连接情况
						data : {requestType:'0', deviceId_A : appContext.startPort.deviceId,portId_A : appContext.startPort.portId,deviceId_B : oImg.deviceId,portId_B : oImg.portId,linkType : 0 },
						dataType:"json",
						success:function(){
							
						}
				});
					
					
				//appContext.couplePortArray[appContext.startPort._oElement.id]=oImg;
			//	appContext.couplePortArray[oImg._oElement.id ]=appContext.startPort;
				//这里保存成对端口			
					var tips1 = '',tips2 = '';
			        if(appContext.startPort.type =='20'){
					 tips1 = '交换机 '+ appContext.startPort.code + '的端口 ' + appContext.startPort.portId;
					 tips2= 'BAS机 '+ oImg.code + '的端口 ' + oImg.portId;
			        }
			        else if(appContext.startPort.type =='21'){
			        	 tips2 = '交换机 '+ appContext.startPort.code + '的端口 ' + appContext.startPort.portId;
						 tips1= 'BAS机 '+ oImg.code + '的端口 ' + oImg.portId;
			        }
					alert("将"+tips1+' 与 '+tips2+" 相连接！");
					
					this.reDrawAll(appContext.portArray);
				
				
				appContext.startPort = null;
			}
		}
	};
	

	Canvas.Element.prototype.popMenu  = function(e){
		if(appContext.getCurrentMode() != 'projectMode' ) return;
		
		var self = this;
		//鼠标松开位置
		var mp = this.findMousePosition(e);		
		//查看是否悬停在某个图片上
		//alert(mp.ex);
	
		var oImg = this.findTargetImage(mp, false);
		
		//alert(oImg);
		
		//没有悬停在图片上，没有连接两个端口
		if (!oImg || undefined == oImg  ) {
			//alert(123);
				var menuItem = null;
				$("#popMenu").remove();
				//前三层
				if(canvasContext.getCurrentLayer() < 3 || appContext.operateState != 'manage'){
				switch(canvasContext.getCurrentLayer()){
					case 0:
						//添加楼宇
					 menuItem = $("<div id='addBuilding_nav'>添加楼宇</div>");
						break;
					case 1:
						//添加楼层
						 menuItem = $("<div id='addFloor_nav'>添加楼层</div>");
						break;
					case 2:
						//添加信息点
						 menuItem = $("<div id='addPoint_nav'>向已有房间添加信息点</div><div><hr></div><div id='addPoint_nav2'>新建房间并添加信息点</div>");
						break;
					
					
					}	
				if(!menuItem)return;
					var popMenu = $("<div id='popMenu'></div>");
			
					popMenu.append(menuItem);
					popMenu.draggable({cursor:"move"});
				$("body").append(popMenu);
					//css
					$("#popMenu").css("position","absolute").css("left",e.pageX+"px").css("top",e.pageY+"px").css("border","1px solid");
					$("#popMenu").css(	"background" ,"black").css("color","white");
					
					//event
					$("div[id='popMenu'] > div ").mouseover(
							function(){
								$(this).css("background","white").css("color","black");;
								if(appContext.mediaOn){
									appContext.mediaMouseover.load();
									appContext.mediaMouseover.play();
								}
						
								
							}
							)
							.mouseout(
									function(){$(this).css("background","black").css("color","white");
							}
							);
					if(menuItem)
					menuItem.click(function(){
						//alert(this.id);
						$("#popMenu").remove();
						lockScreen();
						var x,y;
						
						if(e.offsetX == undefined){
						
							x = e.pageX - parseInt($("#topCanvas").css("left"));
							y = e.pageY - parseInt($("#topCanvas").css("top")) ;
							
							
							// alert(x+','+y);
						}
						else{
						 x =e.offsetX  ;
						 y = e.offsetY ;
						}	
						switch(this.id){
					
						case 'addBuilding_nav':
						   faddBuilding(x,y);
							break;
						case 'addFloor_nav':
						//	alert(appContext.currentBuildingId);
							//
						   faddFloor(x,y);
							//
							break;
						case 'addPoint_nav':
							//
							//	alert(appContext.currentBuildingId);
							//
							//向现有房间添加，首先要获取该层上所有房间
							//ajax
							var roomSelect = null;
							$.ajax({
								url:"room/getroombyfloorid",
								type:"get",
								//controller:'test',
								//action:'test',
								//调整设备位置,0号请求为调整位置
								data : {floorId: appContext.currentFloorId},
								dataType:"json",
								success:function(roomset){
									if(undefined == roomset ){
										alert("room/get in addPoint_nav");
									}
									else{
									 roomSelect = $("<select id='roomlist'></select>");
										for(index in roomset){
											var room = roomset[index];
											var option = $("<option id='"+room.ROOM_ID+"'>"+room.ROOM_CODE+"&nbsp;"+room.ROOM_NAME+"</option>");
											roomSelect.append(option);
										}
										
									}
									
									var pointInfoBlock = $("<form id='pointForm'><table></table></form>") ;
									var tableItem = [];
									var selectItem = $("<tr><td>房间</td><td></td></tr>");
									selectItem.find("td").eq(1).append(roomSelect);
									tableItem[tableItem.length] = selectItem;
								
									tableItem[tableItem.length] = $("<tr><td>信息点编号</td><td><input id='pointCode' type='text' required/></td><td id='checkInfo'>&nbsp;</td></tr>");
									tableItem[tableItem.length] = $("<tr><td>信息点IP</td><td><input id='pointIp' type='text' required/></td><td>&nbsp;</td></tr>");
									tableItem[tableItem.length] = $("<tr><td>信息点人员</td><td><input id='pointPerson' type='text' required/></td><td>&nbsp;</td></tr>");
									tableItem[tableItem.length] = $("<tr><td>人员电话</td><td><input id='pointPhone' type='text' required/></td><td>&nbsp;</td></tr>");
									tableItem[tableItem.length] = $("<tr><td>信息点描述</td><td><textarea id='pointComment' line='5' type='textarea' required/></td><td>&nbsp;</td></tr>");
									tableItem[tableItem.length] = $("<tfoot><th><input type='submit' id='add' value='添加' disabled></th><th><button id='cancle'>取消</button></th><th>&nbsp;</th></tfoot>");
									for(var i = 0;i < tableItem.length; i++){
										pointInfoBlock.find("table").append(tableItem[i]);
									}
									$("body").append(pointInfoBlock);
									pointInfoBlock.draggable({cursor:"move"});
									//css
									pointInfoBlock.css("position","absolute")
									.css("left",screen.width/2+'px')
									.css("top",screen.height/2+'px')
									.css("background","white")	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'");
									
									pointInfoBlock.find("th").css("text-align","center");
									//event
									pointInfoBlock.find("input[id='pointCode']").blur(
											function(){
												var pointCode = $(this).val();
												 var roomId = pointInfoBlock.find("select[id='roomlist'] option:selected").attr("id");
												//ajax
												$.ajax({
													url:"point/checkexist",
													type:"get",
													//controller:'test',
													//action:'test',
													//调整设备位置,0号请求为调整位置
													data : { roomId : roomId,pointCode : pointCode},
													dataType:"json",
													success:function(checkFlag){
														if(undefined == checkFlag || null == checkFlag){
															alert("point/checkexist error");
														}
														else{
															//可用
															if(!checkFlag){
																pointInfoBlock.find("td[id='checkInfo']").html("可用").css("color","green");
																  pointInfoBlock.find("input[id='add']").removeAttr("disabled");
															//	appContext.ajaxObj.submit = true;
															}
															else{
																pointInfoBlock.find("td[id='checkInfo']").html("已经存在").css("color","red");
																pointInfoBlock.find("input[id='pointCode']")[0].focus();
																pointInfoBlock.find("input[id='pointCode']")[0].select();
																  pointInfoBlock.find("input[id='add']").attr("disabled","disabled");
															//	appContext.ajaxObj.submit = false;
															}
														}

													}
													});
												
												
											}
											);
									pointInfoBlock.find("button").click(
											function(){
												switch(this.id){
															
												case 'cancle':
													break;
												}
												unlockScreen(); 
												pointInfoBlock.remove();
												
											});
									$("form[id='pointForm']").submit(
											function(){
											
												//var addpointRoomCode = pointInfoBlock.find("input[id='pointRoomCode']").val();			
											
												var addpointRoomId = pointInfoBlock.find("select[id='roomlist'] option:selected").attr("id");
												var addpointCode = pointInfoBlock.find("input[id='pointCode']").val();
												var addpointComment = pointInfoBlock.find("textarea[id='pointComment']").val();
												var addpointPerson = pointInfoBlock.find("input[id='pointPerson']").val();
												var addpointPhone = pointInfoBlock.find("input[id='pointPhone']").val();
												var addpointIp = pointInfoBlock.find("input[id='pointIp']").val();
		      								///	if(addpointRoomId && addpointCode && addpointComment && addpointPerson && addpointPhone &&  addpointIp && appContext.ajaxObj.submit){
		      										//	alert(appContext.currentFloorId);
		      											//写入数据库
		      										$.ajax({
		      											url:"point/add",
		      											type:"post",
		      											//controller:'test',
		      											//action:'test',
		      											//调整设备位置,0号请求为调整位置
		      										
		      											data : {addType:0,floorId :appContext.currentFloorId,roomId :addpointRoomId,pointCode : addpointCode, pointPerson: addpointPerson,pointPhone : addpointPhone,pointIp:addpointIp ,pointComment:addpointComment,point_x : x,point_y : y },
		      											dataType:"json",
		      											success:function(pointId){
		      												if(undefined == pointId ){
		      													alert('point/add error');
		      												}
		      												else{
		      												
		      		      										//添加楼宇 
		      		      									
		      		      										var oConfig = {};
		      		      										//alert(person.name+','+person.password);
		      		      									
		      		      											//alert(build[i].BUILDING_NAME);
		      		      											
		      		      									
		      		      										 oConfig.type = 'point';
		      		      								     oConfig.Id = pointId;
		      		      								     oConfig.Ip = addpointIp;
		      		      								     oConfig.Person = addpointPerson;
		      		      								     oConfig.left = x;
		      		      								     oConfig.top = y;
		      		      								     oConfig.Phone = addpointPhone;
		      		      								    // alert(oConfig.left+','+oConfig.top);
		      		      							         oConfig.comment = addpointComment;
		      		      							         oConfig.code = addpointCode;
		      		      								     oConfig.randomposition = false;
		      		      											//一行放四个
		      		      										//	var row = i % 4;
		      		      										//	var col =Math.floor(i/4); 
		      		      										//	oConfig.left = 150 * (row+1);
		      		      										//	oConfig.top = 100 + 150*col;
		      		      											oConfig.left = x;
		      		      											oConfig.top =	y;
		      		      											oConfig.randomposition = false;
		      		      									
		      		      										var	img = new Canvas.Img(appContext.pointInRoom, oConfig);
		      		      											
		      		      										//绘制楼
		      		      											canvas.addImage(img);
		      		      											pointInfoBlock.remove();
		      		      											unlockScreen(); 
		      		      										
		      												}
		      											}
		      											});
		      									
		      										
		      									//}	
											
												
		      										return false;
										
											});
									//
									///
								
									}
								});
							//
					
							
							
							break;
						case 'addPoint_nav2':
							//新建房间并添加信息点
							//	alert(appContext.currentBuildingId);
							//
						faddPoint(x,y);
							
						
							break;
						}
					});
				
				}
		}
		else if(oImg){
			if(appContext.mediaOn){
				appContext.mediaWarning.load();
				
			}
			appContext.oImg = oImg;
			appContext.mp = mp;
	
		
			//弹出交换机操作菜单
		
			$("#popMenu").remove();
			var popMenu = $("<div id='popMenu'></div>");
			var items = $("<div id='edit'>&nbsp;编辑&nbsp;</div><div><hr></div><div id='delete'>&nbsp;删除&nbsp;</div><div><hr></div><div id='property'>&nbsp;属性&nbsp;</div>");
			popMenu.append(items);
			$("#canvasContainer").append(popMenu);
			//css
			
			$("#popMenu").css("position","absolute").css("left",e.pageX+"px").css("top",e.pageY+"px").css("border","1px solid");
			
			$("#popMenu").css("background" ,"black").css("color","white");;
		
			//event
			$("div[id='popMenu'] > div ").mouseover(
					function(){
						$(this).css("background","white").css("color","black");
						if(appContext.mediaOn){
							appContext.mediaMouseover.load();
							appContext.mediaMouseover.play();
						}
				
						
					}
					)
					.mouseout(
							function(){$(this).css("background","black").css("color","white");
					}
					)
					
					.click(
							function(){
							
							   
								
								switch(this.id){
								case 'edit':
									$("#popMenu").remove();
									//lockScreen();
									switch(oImg.type){
									case '0':
									case '10':
									case '11':
										lockScreen();
									    var deviceBlock = $("<form id='addDeviceForm'><table></table></form>");
									    
									    var thead = $("<thead><tr><th colspan='3'>修改设备</th></tr></thead>");
									    
									    deviceBlock.append(thead);

									    
									    
									    var tbody = $("<tbody></tbody>");
									    deviceBlock.append(tbody);
									    var itemArray = []; 
									    itemArray[itemArray.length] = $("<tr><td>设备编号</td><td><input id='deviceCode' type='text' value='"+oImg.code+"'readonly/></td><td>&nbsp;</td></tr>");
										itemArray[itemArray.length] = $("<tr><td>设备名称</td><td><input id='deviceName' type='text' value='"+oImg.name+"' required/></td><td>&nbsp;</td></tr>");
										itemArray[itemArray.length] = $("<tr><td>设备描述</td><td><textarea line='5' id='deviceComment' required>"+oImg.comment+"</textarea></td><td>&nbsp;</td></tr>");
										
										for(var i=0;i < itemArray.length;i++)
											tbody.append(itemArray[i]);
										
										var tfoot = $("<tfoot><tr><th colspan='3'><input id='add' type='submit' value='修改'/>&nbsp;<button id='cancle' >取消</button></th></tr></tfoot>");
										 deviceBlock.append(tfoot);
									    
										 
										 $("body").append(deviceBlock);
										 deviceBlock.draggable({cursor:"move"});
										 
										 //css
										 deviceBlock.css("background","white").css("position","absolute").css("top",screen.height/2).css("left",screen.width/2)	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'");
										 //event
										 deviceBlock.find("button[id='cancle']").click(
												 function(){
													 unlockScreen();
													 deviceBlock.remove();
												 }
										 );
										
										 $("#addDeviceForm").submit(function(){
											 //提交更新设备
												var oConfig = {};
												oConfig.deviceName = 	deviceBlock.find("input[id='deviceName']").val();
												oConfig.deviceComment = deviceBlock.find("textarea[id='deviceComment']").val();
												oConfig.deviceId = oImg.deviceId;
											
												//ajax update
												$.ajax({
													url:"device/update",
													type:"post",
													//controller:'test',
													//action:'test',
													//调整设备位置,0号请求为调整位置
													data : oConfig,
													dataType:"json",
													success:function(updateFlag){
														if(!updateFlag){
															alert("device/update error");
														}
														else if(updateFlag){
															//修改前段设别信息
														
															///
															if(oImg.name == 'switch'){
																for(var i=0;appContext.switchArray.length;i++){
																	if(appContext.switchArray[i].deviceId == oImg.deviceId){
																		oImg.name = 	oConfig.deviceName;
																		oImg.comment = oConfig.deviceComment;	
																		break;
																		}
																	}
																}
															
															else if(oImg.name == 'bas'){
																for(var i=0;appContext.basArray.length;i++){
																	if(appContext.basArray[i].deviceId == oImg.deviceId){
																		oImg.name = 	oConfig.deviceName;
																		oImg.comment = oConfig.deviceComment;	
																		break;
																		}
																	}
															}
															//
														}
													}
													});
											unlockScreen();
											deviceBlock.remove();
											return false;
										 });
								
										break;
									//修改楼宇
									case 'building':
										//构造楼层信息框
									
										//弹出填写修改楼宇信息框
										var buildingInfoBlock = $("<form id='buildingForm'><table></table></form>") ;
										var tableItem = [];
										tableItem[tableItem.length] = $("<tr><td>楼宇编号</td><td><input id='buildingCode' type='text' value='"+oImg.code+"' readonly/></td><td id='checkInfo'>&nbsp;</td></tr>");
										tableItem[tableItem.length] = $("<tr><td>楼宇名称</td><td><input id='buildingName' type='text' value='"+oImg.buildingName+"' required /></td><td>&nbsp;</td></tr>");
										tableItem[tableItem.length] = $("<tr><td>楼宇描述</td><td><textarea id='buildingComment' line='5' type='textarea' required>"+oImg.comment+"</textarea></td><td>&nbsp;</td></tr>");
										tableItem[tableItem.length] = $("<tfoot><th><input type='submit' id='edit' value='修改'></th><th><button id='cancle'>取消</button></th><th>&nbsp;</th></tfoot>");
									
										for(var i = 0;i < tableItem.length; i++){
											buildingInfoBlock.find("table").append(tableItem[i]);
										}
										//加入DOM
										$("body").append(buildingInfoBlock);
										buildingInfoBlock.draggable({cursor:"move"});
										//css
										buildingInfoBlock.css("position","absolute")
										.css("left",screen.width/2+'px')
										.css("top",screen.height/2+'px')
										.css("background","white")	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'");
										
									buildingInfoBlock.find("th").css("text-align","center");
									
									buildingInfoBlock.find("button[id='cancle']").click(
											function(){
												buildingInfoBlock.remove();
												unlockScreen(); 							
												return false;
											});
							
									$("form[id='buildingForm']").submit(
											function(){
												//	alert('123');
											
												var editbuildingName = buildingInfoBlock.find("input[id='buildingName']").val();
										
												var editbuildingComment = buildingInfoBlock.find("textarea[id='buildingComment']").val();
											
										
												
		      								//	if(addbuildingName && addbuildingCode && addbuildingComment && appContext.ajaxObj.submit ){
		      										//写入数据库
		      										$.ajax({
		      											url:"building/update",
		      											type:"post",
		      											//controller:'test',
		      											//action:'test',
		      											//调整设备位置,0号请求为调整位置
		      											
		      											data : {buildingName : editbuildingName, buildingId : oImg.buildingId,buildingComment : editbuildingComment  },
		      											dataType:"json",
		      											success:function(editFlag){
		      												if(undefined == editFlag ){
		      													alert('building/update error');
		      												}
		      												else{
		      													if(null == editFlag ){
		      														alert("更新失败！");
		      													}
		      													else if (editFlag){
		      														
		      														for(var i=0;i < canvas._aImages.length;i++){
		      															if(canvas._aImages[i].code == oImg.code){
		      																canvas._aImages[i].buildingName = editbuildingName;
		      																canvas._aImages[i].comment = editbuildingComment;
		      																break;
		      															}
		      														}
		      															/*	
		      														var oConfig = {};
			      		      										//alert(person.name+','+person.password);
		      															//修改
			      		      											//alert(build[i].BUILDING_NAME);
			      		      									
			      		      											oConfig.type = 'building';
			      		      											oConfig.buildingId = buildingId;
			      		      											oConfig.buildingName = addbuildingName;
			      		      											oConfig.comment = addbuildingComment;
			      		      											oConfig.code = oImg.code;
			      		      											//一行放四个
			      		      										//	var row = i % 4;
			      		      										//	var col =Math.floor(i/4); 
			      		      										//	oConfig.left = 150 * (row+1);
			      		      										//	oConfig.top = 100 + 150*col;
			      		      											oConfig.left = x;
			      		      											oConfig.top =	y;
			      		      											oConfig.randomposition = false;
			      		      										var	img = new Canvas.Img(appContext.building, oConfig);
			      		      										
			      		      										//绘制楼
			      		      											canvas.addImage(img);
			      		      											*/
		      													}
		      		      										
		      		      									
		      		      									
		      		      											buildingInfoBlock.remove();
		      		      											unlockScreen(); 
		      		      											
		      												}
		      											}
		      											});
		      									
		      										
		      								//	}	
											
												
		      									return false;
										
											}
											);
										break;
									//修改楼层
									case 'floor':
									
										var floorInfoBlock = $("<form id='floorForm'><table></table></form>") ;
										var tableItem = [];
										tableItem[tableItem.length] = $("<tr><td>楼层编号</td><td><input id='floorCode' type='text' value='"+oImg.code+"'readonly/></td><td id='checkInfo'>&nbsp;</td></tr>");
										tableItem[tableItem.length] = $("<tr><td>楼层名称</td><td><input id='floorName' type='text' value='"+oImg.floorName+"'required/></td><td>&nbsp;</td></tr>");
										tableItem[tableItem.length] = $("<tr><td>楼宇描述</td><td><textarea id='floorComment' line='5' type='textarea' required>"+oImg.comment+"</textarea></td><td>&nbsp;</td></tr>");
										tableItem[tableItem.length] = $("<tfoot><th><input type='submit' id='edit' value='修改'></th><th><button id='cancle'>取消</button></th><th>&nbsp;</th></tfoot>");
										for(var i = 0;i < tableItem.length; i++){
											floorInfoBlock.find("table").append(tableItem[i]);
										}
										$("body").append(floorInfoBlock);
										floorInfoBlock.draggable({cursor:"move"});
										//css
										floorInfoBlock.css("position","absolute")
										.css("left",screen.width/2+'px')
										.css("top",screen.height/2+'px')
										.css("background","white")	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'");
										
										floorInfoBlock.find("th").css("text-align","center");
										
										floorInfoBlock.find("button[id='cancle']").click(
												function(){
												
								
													floorInfoBlock.remove();
													unlockScreen(); 
													return false;
											
													}
												
											
													
												);
										
										$("form[id='floorForm']").submit(
												function(){
													var addfloorName = floorInfoBlock.find("input[id='floorName']").val();
											
													var addfloorComment = floorInfoBlock.find("textarea[id='floorComment']").val();
												
												
													
			      								//	if(addfloorName && addfloorCode && addfloorComment && appContext.ajaxObj.submit ){
			      										//写入数据库
			      										$.ajax({
			      											url:"floor/update",
			      											type:"post",
			      											//controller:'test',
			      											//action:'test',
			      											//调整设备位置,0号请求为调整位置
			      											
			      											data : {buildingId :appContext.currentBuildingId,floorName : addfloorName, floorCode : oImg.code,floorComment : addfloorComment },
			      											dataType:"json",
			      											success:function(updateFlag){
			      												if(undefined == updateFlag ){
			      													alert('floor/update error');
			      												}
			      												else{
			      												
			      													if(updateFlag){
			      														for(var i=0;i < canvas._aImages.length;i++){
			      															if(canvas._aImages[i].code == oImg.code){
			      																canvas._aImages[i].floorName = addfloorName;
			      																canvas._aImages[i].comment = addfloorComment;
			      																break;
			      															}
			      														}
			      													}
			      													else if(null == updateFlag){
			      														alert("楼层信息更新失败！");
			      													}
			      		      										//修改楼层 
			      		      									/*
			      		      										var oConfig = {};
			      		      										//alert(person.name+','+person.password);
			      		      									
			      		      											//alert(build[i].BUILDING_NAME);
			      		      											
			      		      											oConfig.type = 'floor';
			      		      											oConfig.floorId = floorId;
			      		      											oConfig.floorName = addfloorName;
			      		      											oConfig.Code = addfloorCode;
			      		      							
			      		      								     oConfig.comment = addfloorComment;
			      		      											//一行放四个
			      		      										//	var row = i % 4;
			      		      										//	var col =Math.floor(i/4); 
			      		      										//	oConfig.left = 150 * (row+1);
			      		      										//	oConfig.top = 100 + 150*col;
			      		      											oConfig.left = x;
			      		      											oConfig.top =	y;
			      		      											oConfig.randomposition = false;
			      		      										var	img = new Canvas.Img(appContext.floor, oConfig);
			      		      										
			      		      										//绘制楼
			      		      											canvas.addImage(img);
			      		      											*/
			      		      											unlockScreen(); 
			      		      										floorInfoBlock.remove();
			      												}
			      											}
			      											});
			      									
			      										
			      								//	}	
												
													
			      									return false;
											
												});
										break;
									//修改信息点
									case 'point':
										var pointInfoBlock = $("<form id='pointForm'><table></table></form>") ;
										var tableItem = [];
									//	tableItem[tableItem.length] = $("<tr><td>房间编号</td><td><input id='pointRoomCode' type='text' required/></td><td id='checkInfo'>&nbsp;</td></tr>");
									//	tableItem[tableItem.length] = $("<tr><td>房间名</td><td><input id='pointRoomName' type='text' required/></td><td>&nbsp;</td></tr>");
									//	tableItem[tableItem.length] = $("<tr><td>房间描述</td><td><textarea id='pointRoomComment' line='5' type='textarea' required/></td><td>&nbsp;</td></tr>");
										tableItem[tableItem.length] = $("<tr><td>信息点编号</td><td><input id='pointCode' type='text' value='"+oImg.code+"'readonly/></td><td>&nbsp;</td></tr>");
										tableItem[tableItem.length] = $("<tr><td>信息点IP</td><td><input id='pointIp' type='text' value='"+oImg.Ip+"' required/></td><td>&nbsp;</td></tr>");
										tableItem[tableItem.length] = $("<tr><td>信息点人员</td><td><input id='pointPerson' type='text' value='"+oImg.Person+"' required/></td><td>&nbsp;</td></tr>");
										tableItem[tableItem.length] = $("<tr><td>人员电话</td><td><input id='pointPhone' type='text' value='"+oImg.Phone+"' required/></td><td>&nbsp;</td></tr>");
										tableItem[tableItem.length] = $("<tr><td>信息点描述</td><td><textarea id='pointComment' line='5' type='textarea' required>"+oImg.comment+"</textarea></td><td>&nbsp;</td></tr>");
										tableItem[tableItem.length] = $("<tfoot><th><input type='submit' id='edit' value='修改'></th><th><button id='cancle'>取消</button></th><th>&nbsp;</th></tfoot>");
										for(var i = 0;i < tableItem.length; i++){
											pointInfoBlock.find("table").append(tableItem[i]);
										}
										$("body").append(pointInfoBlock);
										pointInfoBlock.draggable({cursor:"move"});
										//css
										pointInfoBlock.css("position","absolute")
										.css("left",screen.width/2+'px')
										.css("top",screen.height/2+'px')
										.css("background","white")	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'");
										
										pointInfoBlock.find("th").css("text-align","center");
										
										pointInfoBlock.find("button[id='cancle']").click(
												function(){
											
																
												
													pointInfoBlock.remove();
													unlockScreen(); 
													return false;
													
												
													
												});
										$("form[id='pointForm']").submit(
												function(){
										
												//	var addpointRoomCode = pointInfoBlock.find("input[id='pointRoomCode']").val();	
												//	var addpointRoomName = pointInfoBlock.find("input[id='pointRoomName']").val();
												//	var addpointRoomComment = pointInfoBlock.find("textarea[id='pointRoomComment']").val();
												//	var addpointCode = pointInfoBlock.find("input[id='pointCode']").val();
													var editpointComment = pointInfoBlock.find("textarea[id='pointComment']").val();
													var editpointPerson = pointInfoBlock.find("input[id='pointPerson']").val();
													var editpointPhone = pointInfoBlock.find("input[id='pointPhone']").val();
													var editpointIp = pointInfoBlock.find("input[id='pointIp']").val();
													//使用html标签检验 
			      								//	if(addpointRoomCode && addpointCode && addpointComment && addpointPerson && addpointPhone &&  addpointIp && appContext.ajaxObj.submit){
			      										//	alert(appContext.currentFloorId);
			      											//写入数据库
			      										$.ajax({
			      											url:"point/update",
			      											type:"post",
			      											//controller:'test',
			      											//action:'test',
			      											//调整设备位置,0号请求为调整位置
			      										
			      											data : {pointId:oImg.Id, pointPerson: editpointPerson,pointPhone : editpointPhone,pointIp:editpointIp ,pointComment:editpointComment},
			      											dataType:"json",
			      											success:function(updateFlag){
			      												if(undefined == updateFlag ){
			      													alert('point/update error');
			      												}
			      												else{
			      												
			      		      										//修改信息点
			      		      									if(updateFlag){
			      		      									for(var i=0;i < canvas._aImages.length;i++){
	      															if(canvas._aImages[i].code == oImg.code){
	      																canvas._aImages[i].Ip = editpointIp;
	      																canvas._aImages[i].Person = editpointPerson;
	      																canvas._aImages[i].Phone = editpointPhone;
	      																canvas._aImages[i].comment = editpointComment;
	      																break;
	      															}
	      														}
			      		      									}
			      		      									else if(null == updateFlag){
			      		      										alert("信息点信息修改失败！");
			      		      									}
			      		      								
			      		      										
			      		      											
			      		      									
			      		      								
			      		      											unlockScreen(); 
			      		      										pointInfoBlock.remove();
			      												}
			      												
			      											}
			      											});
			      									
			      										
			      									//}	
												
													
			      									return false;
											
												});
										break;
									}
									break;
								case 'delete':
									if(appContext.mediaOn){
									appContext.mediaWarning.play();
									}
									//删除指定目标
									if(confirm("确定删除？")){
									//确认是否可以删除
										//确认删除图元
										//alert(oImg.type);
									
										switch(oImg.type){
										//删除楼宇图元
										case 'building':
											appContext.ajaxObj.geturl = 'building/delete';
											appContext.ajaxObj.odata = {buildingId : oImg.buildingId};
											appContext.ajaxObj.succeedTips ="成功删除楼宇";
											appContext.ajaxObj.failedTips = "只有空楼宇才能被删除";
											appContext.ajaxObj.property = "类型 ："+oImg.type+"  楼宇号 ： "+oImg.buildingId;
											break;
											//删除楼层图元
										case 'floor':
											appContext.ajaxObj.geturl = 'floor/delete';
											appContext.ajaxObj.odata ={ floorId :  oImg.floorId};
											appContext.ajaxObj.succeedTips ="成功删除楼层";
											appContext.ajaxObj.failedTips = "只有空楼层才能被删除";
											appContext.ajaxObj.property = "类型 ："+oImg.type+"  楼层号 ： "+ oImg.floorId;
											break;
										//删除房间内信息点
										case 'point':
											appContext.ajaxObj.geturl = 'point/delete';
											appContext.ajaxObj.odata ={ pointId :  oImg.Id};
											appContext.ajaxObj.succeedTips ="成功删除信息点";
											appContext.ajaxObj.failedTips = "删除失败";
											appContext.ajaxObj.property = "类型 ："+oImg.type+"  楼层号 ： "+ oImg.Id;
											break;
										//删除设备
										case '0':
										case	'10':
										case '11':
											appContext.ajaxObj.geturl = "device/delete";
											appContext.ajaxObj.odata = {deviceId :  oImg.deviceId};
											var type = null;
											if(oImg.type == '0'){
												type = 'switch';
											}
											else if(oImg.type == '10'){
												type = 'A类   BAS';
											}
											else if(oImg.type== '11'){
												type = 'B类   BAS';
											}
											appContext.ajaxObj.property = "类型 ："+type+" \n 设备号 ： "+ oImg.deviceId +" \n设备名："+oImg.name+" \n设备描述"+oImg.comment;
											
											
											appContext.ajaxObj.succeedTips ="成功删除设备";
											appContext.ajaxObj.failedTips = "该设备某端口正在被使用，删除失败！";
											break;
										}
										
									//查看该设备上端口是否有连接或链路,无则删除	
										$.ajax({
											url:appContext.ajaxObj.geturl,
											type:"get",
											//controller:'test',
											//action:'test',
											//调整设备位置,0号请求为调整位置
											data : appContext.ajaxObj.odata ,
											dataType:"json",
											success:function(response){
												//true 可删
												if(response){
													self.removeTargetImg(mp);
													self.clearInfoCanvas();
													self.clearHelperCanvas();
													//重绘
													//重新加载交换机								
														self.renderAll(false);
														alert(appContext.ajaxObj.succeedTips);
												}
												//不可删
												else{
													alert(appContext.ajaxObj.failedTips);
												}
											}
									});
										
								
									}
									//菜单消失
							
									$("#popMenu").remove();
									//给出提示
									break;
								case 'property':
									//菜单消失
							
									$("#popMenu").remove();
									
									switch(oImg.type){
									//删除楼宇图元
									case 'building':
									
										appContext.ajaxObj.property = "类型 ："+oImg.type+"  楼宇号 ： "+oImg.buildingId;
										break;
										//删除楼层图元
									case 'floor':
									
										appContext.ajaxObj.property = "类型 ："+oImg.type+"  楼层号 ： "+ oImg.floorId;
										break;
									//删除房间内信息点
									case 'point':
									
										appContext.ajaxObj.property = "类型 ："+oImg.type+"  楼层号 ： "+ oImg.Id;
										break;
									//删除设备
									case 'switch':
									case	'bas':
									
										appContext.ajaxObj.property = "类型 ："+oImg.type+"  设备号 ： "+ oImg.deviceId;
									ailedTips = "该设备某端口正在被使用，删除失败！";
										break;
									}
									alert(appContext.ajaxObj.property);
									break;
								
								}
								
							
								
							});
					
			
		//	this.reDrawAll(appContext.portArray);
		}
	};
	
	
	
	//从数组中删除指定图片
	Canvas.Element.prototype.removeTargetImg  = function(mp){
		if(!this._aImages )return;
		for (var i = this._aImages.length-1; i >= 0; i -= 1) {
			// we iterate through each image. If target found then return target
			var iLines = this._getImageLines(this._aImages[i].oCoords);
			var xpoints = this._findCrossPoints(mp, iLines);
			
			// if xcount is odd then we clicked inside the image
			// For the specific case of square images xcount == 1 in all true cases
			if (xpoints % 2 == 1 && xpoints != 0) {	
				//删除
					this._aImages.splice(i, 1);
		
				
			}
		}
		
		appContext.switchArray = this._aImages;
		
	
		
	};
	
	
	Canvas.Element.prototype.clearInfoCanvas = function(){
		this._oContextInfo.clearRect(0,0,this._oConfig.width,this._oConfig.height);
	};
	Canvas.Element.prototype.clearHelperCanvas = function(){
		this._oContextHelper.clearRect(0,0,this._oConfig.width,this._oConfig.height);
	};
	Canvas.Element.prototype.clearContainerCanvas = function(){
		this._oContextContainer.clearRect(0,0,this._oConfig.width,this._oConfig.height);
	};
	
	Canvas.Element.prototype.clearBackgroundCanvas = function(){
		this._oContextBackground.clearRect(0,0,this._oConfig.width,this._oConfig.height);
	};
	Canvas.Element.prototype.clearTopCanvas = function(){
		this._oContextTop.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
	};
}());

var clearAllCanvas = function(){
	
};
//var showInfo = function(layerId){

//	var oLayer = document.getElementById(layerId+"_layer_bg");
//	alert(oLayer.alt);
	
//};
var stepIn = function(currentLayer,oConfig,canvas){
	

	switch(currentLayer){
	case 0 : 
		//进入某栋楼楼
		canvasContext.setLastLayer(currentLayer);
		currentLayer++; //进入下一层
		canvasContext.setCurrentLayer(currentLayer);
		
	//	alert(currentLayer);
			//alert(currentLayer);
			
			appContext.clickIn = true;
			//楼层平面图,需要绘制所有端口
			//alert(123);
			canvas.clearImages();
			canvas._oContextContainer.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
			canvas._oContextTop.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
			canvas.clearHelperCanvas();
			canvas.clearInfoCanvas();
			//绘制背景
			canvas.setCanvasBackground(new Canvas.Img(appContext.wholeBuilding,{}));
			//show information about this layer
			//这里要为这栋楼绘制楼层，即获取有多少层
			//ajax here
			$.ajax({
				url:"building/getfloor",
				type:"get",
				//controller:'test',
				//action:'test',
				//调整设备位置,0号请求为调整位置
				data : {buildingId : oConfig.buildingId},
				dataType:"json",
				success:function(floors){
					if(floors == undefined){
						alert('error');
					}
					else{
						var img = [];
						for(index in floors){
							var floor = floors[index];
							var oConfig = {};
								oConfig.left = floor["FLOOR_X"];
							     oConfig.top = floor['FLOOR_Y'];
							     oConfig.type = 'floor';
							     oConfig.floorName =floor['FLOOR_NAME'];
							     oConfig.floorId = floor['FLOOR_ID'];
							     oConfig.code = floor['FLOOR_CODE'];
							     oConfig.comment = floor['COMMENT'];
							     //记录栋楼
							     appContext.currentBuildingId = floor['BUILDING_ID'];
							    // alert(oConfig.left+','+oConfig.top);
							     oConfig.randomposition = false;
							     img[img.length] = new Canvas.Img(appContext.floor, oConfig);
						}
						for(var i = 0 ; i < img.length;i++)
							canvas.addImage(img[i]);
					}
				}
		});

			
	
		break;
	case 2:
		//楼层平面图,需要绘制所有端口
		//alert(123);
	//	alert(oConfig.floorId+','+oConfig.floorName);
		canvasContext.setLastLayer(1);
	
		canvasContext.setCurrentLayer(2);
		canvas.clearImages();
		canvas._oContextContainer.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
		canvas._oContextTop.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
		
		canvas.clearHelperCanvas();
		canvas.clearInfoCanvas();
		//清空容器图片
			
			//首先获取该平面图相关的端口数，及端口状态
			//ajax here
		//drawPortInRoom(oConfig);
	//绘制平面背景
		canvas.setCanvasBackground(new Canvas.Img(appContext.layerRoom,{}));
	//	drawLayerRoom();
	//show information about this layer
		
		//记录所在楼层Id
	
		appContext.currentFloorId = oConfig.floorId;
		
	
		//ajax 
		$.ajax({
			url:"floor/floor",
			type:"get",
			//controller:'test',
			//action:'test',
			data :oConfig,
			dataType:"json",
			success:function(floorInfo){
			
				if(floorInfo == 'undefined'){
				alert("未取到任何数据");
				}
				else{
				
					var img = [];
					var oConfig = {};
					//绘制信息点
				  
					for(var roomIndex in floorInfo){
						//获取一个房间
						var pointset = floorInfo[roomIndex];
						for(var pointIndex in pointset){
							//获取某个房间的信息点
							var point = pointset[pointIndex];
							 oConfig.type = 'point';
						     oConfig.Id = point["POINT_ID"];
						     oConfig.Ip = point["POINT_IP"];
						     oConfig.Person = point["POINT_PERSON"];
						     oConfig.left = point['POINT_X'];
						     oConfig.top = point["POINT_Y"];
						     oConfig.Phone = point["POINT_PHONE"];
						     oConfig.comment = point['COMMENT'];
						     oConfig.code = point['POINT_CODE'];
						    // alert(oConfig.left+','+oConfig.top);
						   
						     oConfig.randomposition = false;
						     img[img.length] = new Canvas.Img(appContext.pointInRoom, oConfig);
						   
						}
					    
					   
					}
					/*
				
					//alert(person.name+','+person.password);
					for(var i = 0;i < build.length;i++){
						//alert(build[i].BUILDING_NAME);
						
						oConfig.type = 'building';
						oConfig.buildingId = build[i].BUILDING_ID;
						//一行放四个
						var row = i % 4;
						var col =Math.floor(i/4); 
						oConfig.left = 150 * (row+1);
						oConfig.top = 100 + 150*col;
						oConfig.randomposition = false;
						img[img.length] = new Canvas.Img(appContext.building, oConfig);
					}*/
					//绘制楼
					for(var i = 0 ; i < img.length;i++)
						canvas.addImage(img[i]);
						
				}
			}
	});
		break;
	case 3:
		//清除
		canvasContext.setLastLayer(2);
	
		canvasContext.setCurrentLayer(3);
		canvas.clearImages();
		canvas._oContextTop.clearRect(0,0,canvas._oConfig.width, canvas._oConfig.height);
		canvas._oContextContainer.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
		canvas._oContextBackground.clearRect( 0, 0, canvas._oConfig.width, canvas._oConfig.height);
		canvas.clearHelperCanvas();
		canvas.clearInfoCanvas();
		//进入配线间画机柜
		if(oConfig.type == 'wiringRoom')
			canvas.drawMachineCabinet();
		
		//加载交换机
	//	for(var i=0;i<appContext.switchArray.length;i++)
	//	this.addImage(appContext.switchArray[i]);
		
		switch(appContext.getCurrentMode()){
		case "scanMode":
			
			dealScanMode(oConfig);
		
		
		
			break;
		case  "maintainMode":
		//	alert(appContext.getCurrentMode());
			dealMaintainMode(oConfig);
			
			
			break;
		case  "projectMode":
		//	alert(appContext.getCurrentMode());
			//加载交换机,默认加载1号机柜的交换机
		//	for(var i=0;i<appContext.switchArray.length;i++)
			//	canvas.addImage(appContext.switchArray[i]);
			//加载设备
			//addDevice();
			dealProjectMode(oConfig);
			break;
		}
		
	
	}
	 $("#"+canvas._oElement.id+'-canvas-background').effect('puff',{mode:'show',percent:50},500,function(){
		 
		 $("#"+canvas._oElement.id+'-canvas-container').effect('puff',{mode:'show',percent:50},600,function(){});

	 });
	
};

var drawAll = function(layer){
	
	
			canvas.clearImages();
			
		//	var bg = document.getElementById(layer+'_layer_bg');
			//if( null == bg ||  undefined == bg)
		//	 bg = document.getElementById('x_default_bg');		
			
			//img[img.length] = new Canvas.Img(bg, {});      //加载背景
			
			//第0层，即显示多少幢楼
		
			if( 0 == layer ){
				//设置背景
				canvas.setCanvasBackground(new Canvas.Img(appContext.indexImg, {}));
				
				//获取多少栋楼
				//ajax 
				$.ajax({
					url:"building/building",
					type:"get",
					//controller:'test',
					//action:'test',
					//data : "userName=admin",
					dataType:"json",
					success:function(build){
						//alert('123');
						if(build == 'undefined'){
						alert("error");
						}
						else{
							var img = [];
							var oConfig = {};
							//alert(person.name+','+person.password);
							for(var i = 0;i < build.length;i++){
								//alert(build[i].BUILDING_NAME);
								
								oConfig.type = 'building';
								oConfig.buildingId = build[i].BUILDING_ID;
								//一行放四个
							//	var row = i % 4;
							//	var col =Math.floor(i/4); 
							//	oConfig.left = 150 * (row+1);
							//	oConfig.top = 100 + 150*col;
								oConfig.left = build[i].BUILDING_X;
								oConfig.top = build[i].BUILDING_Y;
								oConfig.buildingName = build[i].BUILDING_NAME;
								oConfig.comment = build[i].COMMENT;
								oConfig.code = build[i].BUILDING_CODE;
								oConfig.randomposition = false;
								img[img.length] = new Canvas.Img(appContext.building, oConfig);
							}
							//绘制楼
							for(var i = 0 ; i < img.length;i++)
								canvas.addImage(img[i]);
						}
					}
			});
				/*
				var building1 = appContext.building;
				oConfig.type = 'building';
				oConfig.buildingId = '1';
				oConfig.left = 400;
				oConfig.top = 100;
				oConfig.randomposition = false;
				img[img.length] = new Canvas.Img(building1, oConfig);
				
				
				var building2 = appContext.building;
				oConfig.type = 'building';
				oConfig.buildingId = '2';
				oConfig.left = 200;
				oConfig.top = 300;
		
				img[img.length] = new Canvas.Img(building2, oConfig);
				
			
				var building3 = appContext.building;
				oConfig.type = 'building';
				oConfig.buildingId = '3';
				oConfig.left = 600;
				oConfig.top = 300;
			
				img[img.length] = new Canvas.Img(building3, oConfig);
				
				*/
			
				
				
			}
			/*	
		    do{
			 layer_img =  document.getElementById(layer+'_layer_'+iCount);
			iCount++;
			if(null != layer_img   && undefined != layer_img ){
				var config = {};
				config.top = canvasContext.getOriginalHeight()/2;
				config.left = canvasContext.getOriginalWidth()/2;
				config.randomposition = false;
				img[img.length] = new Canvas.Img(layer_img, config);    //加载入canvas
				flag = true;
			}
			else
				{flag = false;}				//加载结束
		    }while(flag);					
		//	alert();
			*/
			
			// @param array of images ToDo: individual images
			
		  
		
			
		
			
};
var adjustPortPosition = function(){

	//切换模式时候调整端口相对于交换机坐标
	//var couple = null;
		appContext.portArray = [];
	
	if( !appContext.switchArray || appContext.switchArray == undefined) return;
	
	var switchCount = appContext.switchArray.length;
	var basCount = appContext.basArray.length;

	//依次改每一台
	//先调整交换机端口
	for(var sID = 0 ;sID < switchCount; sID++){
		
	    var oImg = appContext.switchArray[sID];
		//绘制第几台交换机
		var sOffset = sID * 48;
		if(oImg){
			//初始化端口
		
				//一共两行
				for(var j=0;j<2;j++){
					//绘制一行端口
					for(var i = 0 ;i < 24;i++){
				//	var portImg = new Image();
				
				//	var portID = '交换机'+(sID+1)+'的'+(i+j*24)+'号口';
				
				
					
					
					var config = {};
					
					config.type = '20';
					//config.deviceId = "s"+(sID + 1);
					config.deviceId = oImg.deviceId;
					config.portId = i+j*24 + 1;
					config.top = oImg.top - 4 + j*12;
				
					//	alert(i);
					//第一个口
					if(0 == i)
						config.left =  oImg.left - oImg.width/2 + 25+ i*12 ;
					//其他
					else{
						if(i%6 == 0)
							config.left = appContext.portArray[i-1 + sOffset].left + 14 ;
						else
							config.left = appContext.portArray[i-1 + sOffset].left + 12 ;
					}
					
					config.randomposition = false;
					
					 var portImg = null;
					 var couple = null;
					
					//如果端口已经连接过
					if(appContext.couplePortArray[config.deviceId +'|'+	config.portId]){
						//端口使用
					//	portImg.src = "public/img/portState/using.jpg";
						//设置使用
						portImg = appContext.portUsing;
						couple = appContext.couplePortArray[config.deviceId +'|'+	config.portId];
						//获取连接对象
					//	couple = appContext.couplePortArray[portImg.id];
						
						
			//			
				}
						else{
						//	portImg.src = "public/img/portState/port.jpg";
							portImg = appContext.port;
							
						}
						
					//portImg.id = portID;
					appContext.portArray[appContext.portArray.length] = new Canvas.Img(portImg, config);    //加载入canvas
					//修改同伴接口对自己的引用
					if(couple){
						 appContext.couplePortArray[couple.deviceId +'|'+couple.portId] = appContext.portArray[appContext.portArray.length-1];
					}
					
					
					
					
					}
				}
			
		}
	}
	

	//调整BAS机端口
	//先调整交换机端口
	for(var sID = 0 ;sID < basCount; sID++){
		
	    var oImg = appContext.basArray[sID];
		//绘制第几台交换机
		var sOffset = switchCount * 48 + sID * 24;
		if(oImg){
			//初始化端口
		
		
				
					for(var i = 0 ;i < 24;i++){
				//	var portImg = new Image();
				
				//	var portID = '交换机'+(sID+1)+'的'+(i+j*24)+'号口';
				
				
					
					
					var config = {};
					//A类端口
					if(oImg.type == '10')
						config.type = '21';
					//B类端口
					else if(oImg.type == '11')
						config.type = '22';
					config.deviceId = oImg.deviceId;
					config.portId = i + 1;
					config.top = oImg.top + 4 ;
				
					//	alert(i);
					//第一个口
					if(0 == i)
						config.left =  oImg.left - oImg.width/2 + 36 ;
					//其他
					else{
						if(i == 12)
							config.left = appContext.portArray[i-1 + sOffset].left + 46;
						else
							config.left = appContext.portArray[i-1 + sOffset].left + 11 ;
					}
					
					config.randomposition = false;
					
					 var portImg = null;
					 var couple = null;
					
					//如果端口已经连接过
					if(appContext.couplePortArray[config.deviceId +'|'+	config.portId]){
						//端口使用
					//	portImg.src = "public/img/portState/using.jpg";
						//设置使用
						portImg = appContext.portUsing;
						couple = appContext.couplePortArray[config.deviceId +'|'+	config.portId];
						//获取连接对象
					//	couple = appContext.couplePortArray[portImg.id];
						
						
			//			
				}
						else{
						//	portImg.src = "public/img/portState/port.jpg";
							portImg = appContext.port;
							
						}
						
					//portImg.id = portID;
					appContext.portArray[appContext.portArray.length] = new Canvas.Img(portImg, config);    //加载入canvas
					//修改同伴接口对自己的引用
					if(couple){
						 appContext.couplePortArray[couple.deviceId +'|'+couple.portId] = appContext.portArray[appContext.portArray.length-1];
					}
					
					
					
					
					}
				
			
		}
	}
	
	

	/*
	//调整连接对端口
	for(var i = 0;i < appContext.basArray.length;i++){
		var port = appContext.basArray[i];
		var couple = appContext.couplePortArray[port._oElement.id];
		if(couple)
		appContext.couplePortArray[couple._oElement.id] = port;
	}
	*/
	
	

		//根据appContext.portArray调整连接对端口
		for(var i = 0;i < appContext.portArray.length;i++){
			var port = appContext.portArray[i];
			var couple = appContext.couplePortArray[port.deviceId+'|'+port.portId];
			if(couple)
			appContext.couplePortArray[couple.deviceId+'|'+couple.portId] = port;
		
	}
};

var drawLayerRoom = function(){
	
	canvas.addImage(new Canvas.Img(appContext.layerRoom,{}));
	var imgArray = [];
	var oConfig = {};
	//var pCount = 11;
	var img1 = new Image();
	img1.src = 'public/img/portState/avaliablePort.png';
	//img1.id = '一号楼的第一层的第一个号端口\n目前状态 ： 可用';
	img1.onload = function(){
		oConfig.type = 'port';
		oConfig.deviceId = '1';
		oConfig.portId = '1';
		oConfig.top = 46;
		oConfig.left = 141;
		oConfig.randomposition = false;
		imgArray[imgArray.length] = new Canvas.Img(img1, oConfig);
		canvas.addImage(imgArray[imgArray.length-1]);
	};
	
	
	var img2 = new Image();
	img2.src = 'public/img/portState/avaliablePort.png';
	//img2.id = '一号楼的第一层的第二个号端口\n目前状态 ： 可用';
	img2.onload = function(){
		oConfig.type = 'port';
		oConfig.deviceId = '1';
		oConfig.portId = '2';
		oConfig.top = 45;
		oConfig.left = 256;
		oConfig.randomposition = false;
		imgArray[imgArray.length] = new Canvas.Img(img2, oConfig);
		canvas.addImage(imgArray[imgArray.length-1]);
	};

	
	var img3 = new Image();
	img3.src = 'public/img/portState/avaliablePort.png';
	//img3.id = '一号楼的第一层的第三个号端口\n目前状态 ： 可用';
	
	img3.onload = function(){
		oConfig.type = 'port';
		oConfig.deviceId = '1';
		oConfig.portId = '3';
		oConfig.top = 43;
		oConfig.left = 362;
		oConfig.randomposition = false;
		imgArray[imgArray.length] = new Canvas.Img(img3, oConfig);
		canvas.addImage(imgArray[imgArray.length-1]);
	};
};

var drawPortInRoom = function(oConfig){
	var imgArray = [];
	var oConfig = {};
	//var pCount = 11;
	var img1 = new Image();
	img1.src = 'public/img/portState/avaliablePort.png';
	//img1.id = '一号楼的第一层的第一个号端口\n目前状态 ： 可用';
	img1.onload = function(){
		oConfig.type = 'port';
		oConfig.deviceId = '1';
		oConfig.portId = '1';
		oConfig.top = 46;
		oConfig.left = 141;
		oConfig.randomposition = false;
		imgArray[imgArray.length] = new Canvas.Img(img1, oConfig);
		canvas.addImage(imgArray[imgArray.length-1]);
	};
	
	
	var img2 = new Image();
	img2.src = 'public/img/portState/avaliablePort.png';
	//img2.id = '一号楼的第一层的第二个号端口\n目前状态 ： 可用';
	img2.onload = function(){
		oConfig.type = 'port';
		oConfig.deviceId = '1';
		oConfig.portId = '2';
		oConfig.top = 45;
		oConfig.left = 256;
		oConfig.randomposition = false;
		imgArray[imgArray.length] = new Canvas.Img(img2, oConfig);
		canvas.addImage(imgArray[imgArray.length-1]);
	};

	
	var img3 = new Image();
	img3.src = 'public/img/portState/avaliablePort.png';
	//img3.id = '一号楼的第一层的第三个号端口\n目前状态 ： 可用';
	
	img3.onload = function(){
		oConfig.type = 'port';
		oConfig.deviceId = '1';
		oConfig.portId = '3';
		oConfig.top = 43;
		oConfig.left = 362;
		oConfig.randomposition = false;
		imgArray[imgArray.length] = new Canvas.Img(img3, oConfig);
		canvas.addImage(imgArray[imgArray.length-1]);
	};
};

var choseCabinet = function(cabinet){
	//alert(oli.id);
	switch(cabinet.id){
	case 1 :
		//选择1号机柜
		appContext.chosedCabinet = 1;
		
		break;
		//选择2号机柜
	case 2: 
		appContext.chosedCabinet = 1;
		break;
	}
};

var pageCabinets = function(currentPage,dataset,tbody,tfoot){
	//每页显示10条
	var itemPerPage = 10;
	var itemCount = dataset.length;
	tfoot.find("li[id='currentPage']").html("&nbsp;第&nbsp;"+(currentPage+1)+"&nbsp;页");
	
	for(var index = currentPage*itemPerPage;((index < (currentPage+1) * itemPerPage)&& (index < itemCount));index++){
		//一条机柜信息
		var item = dataset[index];
	//	alert('123');
		var row = $("<tr id='"+item['CABINETS_ID']+"'><td>"+(index+1)+"</td><td>"+item['CABINETS_CODE']+"</td><td>"+item['CABINETS_NAME']+"</td><td>"+item['0']+"</td><td>"+item['1']+"</td></tr>");
		
		tbody.append(row);
	}
	
	//CSS
	tbody.find("tr:odd").css("background","lightgreen");
	tbody.find("tr:even").css("background","lightblue");
	tbody.find("td").css("text-align","center");
	tbody.find("tr").hover(
			function(){
				$(this).css("color","red");
			},
			function(){
				$(this).css("color","black");
			}
	)
	.click(
			function(){
				$("#popMenu").remove();
			//	alert(this.id);
		
	})
	.contextmenu(
			function(e){
				//alert(this.id);
				//删除上次显示的弹出菜单
			
			self = this;
			//alert(self.id);
			$('#popMenu').remove();
				var popMenu = $("<ul id='popMenu'><li id='edit'>&nbsp;修改&nbsp;&nbsp;</li><li><hr></li><li id='delete'>&nbsp;删除&nbsp;&nbsp;</li></ul>");
				popMenu.css("position","absolute").css("left",e.pageX).css("top",e.pageY).css("background","black").css("display","block").css("color","white");
				popMenu.find("li").css("display","block");
				popMenu.find("li").hover(
						function(){
							$(this).css("background","white").css("color","black");
						},
						function(){
							$(this).css("background","black").css("color","white");;
						})
						.click(
						function(e){
						//	alert(this.id);
							$('#popMenu').remove();
							switch(this.id){
							
							case 'edit':
							
								//显示修改信息的框
								$('#editBlock').remove();
								var cabinetsCode= $(self).children().eq(1).html();
								var cabinetsName = $(self).children().eq(2).html();
								var deviceCount = $(self).children().eq(3).html();
								var roomName = $(self).children().eq(4).html();
								var $editBlock = $("<div id='editBlock'><ul></ul></div>");
								var item = [];
								item[item.length]=$("<li>机柜编号：<input type='text' id='cabinetsCode' value='"+cabinetsCode+"' required/></li>");
								item[item.length]=$("<li>机柜名：<input type='text' id='cabinetsName' value='"+cabinetsName+"' required/></li>");
								item[item.length]=$("<li>设别数：<input type='text' value='"+deviceCount+"' readonly='readonly' required/></li>");
								item[item.length]=$("<li>房间名：<input type='text' value='"+roomName+"' readonly='readonly' required/></li>");
								item[item.length]=$("<li><button id='save'>保存</button><button id='close'>关闭</button>");
								for(var i = 0;i <item.length;i++)
									$editBlock.find("ul").append(item[i]);
								
								$editBlock.find('button').click(
										function(){
											switch(this.id){
											case 'save':
												$('#editBlock').remove();
												//修改前端数据集
												//修改显示项
												for(var i = 0,flag=false;(i < dataset.length)&& !flag;i++){
													if(dataset[i].CABINETS_ID == self.id){
														
														dataset[i].CABINETS_NAME = $editBlock.find("input[id='cabinetsName']").val();
														 $(self).children().eq(2).html($editBlock.find("input[id='cabinetsName']").val()) ;
														dataset[i].CABINETS_CODE = $editBlock.find("input[id='cabinetsCode']").val();
														$(self).children().eq(1).html($editBlock.find("input[id='cabinetsCode']").val());
														flag = true;
													
														//修改数据库
														//ajax here
														$.ajax({
															url:"cabinets/update",
															type:"post",
															//controller:'test',
															//action:'test',
															//调整设备位置,0号请求为调整位置
															data : {cabinetsId : self.id,cabinetsCode:	dataset[i].CABINETS_CODE ,cabinetsName : dataset[i].CABINETS_NAME },
															dataType:"json",
															success:function(){

															}
															});
													}
												}
											
												
											
												break;
											case 'close':
												$('#editBlock').remove();
												
												break;
											}
											
										}
								);
								
						
								$editBlock.css("position","absolute").css("left",e.pageX).css("top",e.pageY).css("background","brown");
								$editBlock.css('border',"dashed 5px blue").css("border-radius",'20px');
								//	alert(cabinetsId);
								$("body").append($editBlock);
								
								$editBlock.draggable({cursor:"move"});
								break;
							case 'delete':
								if(confirm("确认要删除？")){
									//从数据库中删除此机柜
									$.ajax({
										url:"cabinets/deletecabinets",
										type:"post",
										//controller:'test',
										//action:'test',
										//调整设备位置,0号请求为调整位置
										data : {cabinetsId : self.id },
										dataType:"json",
										success:function(result){
											if(result == undefined){
												alert("error");
											}
											else{
												if(result){
													alert("机柜删除成功！");
													$("#"+self.id).remove();
													for(var i=0;i<dataset.length;i++)
														if(dataset[i].CABINETS_ID == self.id)
															dataset.splice(i,1);
												
													//pageCabinets(currentPage,itemPerPage,itemCount,dataset,tbody,tfoot);
												}
												else{
													alert("只有空机柜才能被删除！");
												}
												tbody.find("tr:odd").css("background","lightgreen");
												tbody.find("tr:even").css("background","lightblue");
												tbody.find('tr').css("height","50px");
												tbody.find('th').css("height","40px");
											}
										}
										});
								}
							
								break;
							}
						}		
						);
				
				$("body").append(popMenu);
		
					
				
	
			
 			});
	
	
};
var addCabinetsList = function(currentRoomId){
	var cabinet;
	if(!$("#leftMenu").children("#cabinetsList").is("details")){
		//添加机柜菜单
		cabinet = $("<details id='cabinetsList'>"
	   		 +"<summary>机柜</summary>"
			 +"<ul>"
			// +"<li id='1' ><img src='public/img/cabinet_icon_small.png' title='机柜1'/></li>"
			 +"</ul>"
			 +"</details>");	
		
	//ajax 读取房间有多少个机柜
		$.ajax({
			url:"cabinets/cabinets",
			type:"get",
			//controller:'test',
			//action:'test',
			data : {roomId : currentRoomId},
			dataType:"json",
			success:function(cabinetsArray){
				//alert('123');
				if(cabinetsArray == 'undefined'){
				alert("error");
				}
				else{
					/*
					var img = [];
					var oConfig = {};
					//alert(person.name+','+person.password);
					for(var i = 0;i < build.length;i++){
						//alert(build[i].BUILDING_NAME);
						
						oConfig.type = 'building';
						oConfig.buildingId = build[i].BUILDING_ID;
						//一行放四个
						//一行放四个
						var row = i % 4;
						var col =Math.floor(i/4); 
						oConfig.left = 150 * (row+1);
						oConfig.top = 100 + 150*col;
						oConfig.randomposition = false;
						img[img.length] = new Canvas.Img(appContext.building, oConfig);
					}
					//绘制楼
					for(var i = 0 ; i < img.length;i++)
						canvas.addImage(img[i]);
						*/
					for(index in cabinetsArray){
						//取一个机柜
						var  cabinets = cabinetsArray[index];
						var item = $("<li id='"+cabinets.CABINETS_ID+"' ><img src='public/img/cabinet_icon_small.png' title='"+cabinets.CABINETS_NAME+"'/></li>");
					
						item.click(function(){
							//取消选中机柜高亮
							if(appContext.currentCabinetsId)
								$("li[id="+appContext.currentCabinetsId+"]").removeClass("highlightChosedCabinets");
							//高亮选中机柜
							$(this).addClass("highlightChosedCabinets");
							
							//记录当前选择的机柜
							appContext.currentCabinetsId = this.id;
							//默认显示设备	
						
							if(!appContext.operateState && appContext.getCurrentMode() != 'projectMode'){
								//加载设备但不绘制在容器中
								//加载设备
							
								appContext.switchArray = [];

								 appContext.basArray = [];
							
								//重载设备
								canvas.clearImages();
								canvas.clearContainerCanvas();
								canvas.clearTopCanvas();
									var img ;
									var oConfig = {};
								//ajax here 读取指定机柜设备								
									$.ajax({
										url:"device/device",
										type:"get",
										//controller:'test',
										//action:'test',
										data : {requestType:'0',cabinetsId : this.id},
										
										dataType:"json",
										success:function(deviceArray){
											if(deviceArray == undefined){
												alert("error");
											}
											else{
									
											
										
										 for(index in deviceArray){
											 var device = deviceArray[index];
											 if(device['DEVICE_TYPE'] == '0'){
												
											
													img = appContext.switcher;
													//img.id = 'switch'+(appContext.switchArray.length+1);
													//设置当前交换机数
													
													
														oConfig.type = "switch";
														//机柜Id
													
														oConfig.cabinetsId = device["CABINETS_ID"];
														//设备ID
													//	oConfig.deviceId = "s"+(appContext.switchArray.length+1);
														//默认位置
														oConfig.top = device['DEVICE_Y'];
														oConfig.left = device['DEVICE_X'];
														oConfig.deviceId = device['DEVICE_ID'];
														oConfig.randomposition = false;
														appContext.switchArray[appContext.switchArray.length] = new Canvas.Img(img, oConfig);
											 }
											 else if(device['DEVICE_TYPE'] == '10' || device['DEVICE_TYPE'] == '11'){
												
													img = appContext.BasMachine;
													//img.id = 'switch'+(appContext.switchArray.length+1);
													//设置当前交换机数
													
													
														oConfig.type = device['DEVICE_TYPE'];
														//机柜Id
													
														oConfig.cabinetsId = device["CABINETS_ID"];
														//设备ID
													//	oConfig.deviceId = "s"+(appContext.switchArray.length+1);
														//默认位置
														oConfig.top = device['DEVICE_Y'];
														oConfig.left = device['DEVICE_X'];
														oConfig.deviceId = device['DEVICE_ID'];
														oConfig.code = device['DEVICE_CODE'];
														oConfig.randomposition = false;
														appContext.basArray[appContext.basArray.length] = new Canvas.Img(img, oConfig);
											 }
										 }
												
										
										//同时加载端口
											canvas.drawMachineCabinet();
											
											}
											
										}
								});
								
								//同时加载端口
								//canvas.drawMachineCabinet();
							
				
							}
							if(!appContext.operateState && appContext.getCurrentMode() == 'projectMode'){
								//加载并在容器内绘制
								addDevice(this.id);
								//canvas.drawMachineCabinet();
							
				
							}
							//管理设备时切换机柜
							else if( appContext.operateState== 'manageDevice'){
								//重新加载并绘制在容器
								addDevice(this.id);
							}
							//管理端口时切换机柜
							else if(appContext.operateState== 'managePort'){
								appContext.operateState	= 'manageDevice';
								//机柜要重绘
								canvas.drawMachineCabinet();
								addDevice(this.id);
							}
							
							//alert(this.id);
							//显示机柜内的所有设备
						});
						
						
						cabinet.find("ul").append(item);
					}
					
					$("#leftMenu").append(cabinet);
					
					
				}
			}
	});

		


	/*
	cabinet.find("li").click(
			function(){
				alert(123);
			}
	);
	*/

	}
};

var dealScanMode = function(oConfig){
	//重新加载机柜菜单
	$("#leftMenu").children("#cabinetsList").remove();
		addCabinetsList(appContext.currentRoomId );
	//

	


};

var dealMaintainMode = function(oConfig){
	//重新加载机柜菜单
	$("#leftMenu").children("#cabinetsList").remove();
		addCabinetsList(appContext.currentRoomId );
};
//在工程模式下弱电间处理
var dealProjectMode = function(oConfig){
	//重新加载机柜菜单
	$("#leftMenu").children("#cabinetsList").remove();
		addCabinetsList(appContext.currentRoomId );
//添加操作菜单
	if(!$("#leftMenu").children("#operationList").is("details")){
		
		     var functionMenu =  $("<details id='operationList'>"
    		 +"<summary>功能操作</summary>"
    		 +"<ul>"
    		 +"<li id='manageCabinet'>机柜管理</li>"
    		 +"<li id='manageDevice'>机柜设备管理</li>"
    		 +"<li id='managePort'>设备端口管理</li>"
    		 +"</ul>"
    		 +"</details>");
 

	$("#leftMenu").append(functionMenu);
	
	functionMenu.find("li").click(
			function(){
				if(this.id == 'manageCabinet'){
					lockScreen();
					appContext.currentPage = 0;
					//临时传递前端数据集
					var tempdataSet = null;
				//	canvas.clearImages();
				//	canvas._oContextTop.clearRect(0,0,canvas._oConfig.width, canvas._oConfig.height);
				//	canvas._oContextContainer.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
				//	canvas._oContextBackground.clearRect( 0, 0, canvas._oConfig.width, canvas._oConfig.height);
					appContext.operateState = 'manageCabinet';
					//管理机柜
					//add code here
					if($("#leftMenu").children("#deviceList").is("details"))
						$("#deviceList").remove();
				
				
					//ajax here 读取所有机柜信息
					
					$.ajax({
						url:"cabinets/getcabinets",
						type:"get",
						//controller:'test',
						//action:'test',
						//调整设备位置,0号请求为调整位置
						//data : {requestType : 0, deviceId : dId,x : left,y : top },
						dataType:"json",
						success:function(dataset){
							if(dataset == undefined){
								alert("error");
							}
							else{
								tempdataSet = dataset;
								//记录数
								var itemCount = dataset.length;
								var itemPerPage = 10;
								//页数
								var pageCount = Math.ceil(itemCount / itemPerPage);
								
								if(itemCount > 0 )
									appContext.currentPage = 0;
								//显示机柜管理模块
								var table = $("<table id='cabinetsTable'></table>");
								var thead = $("<thead><tr><th>序号</th><th>机柜号</th><th>机柜名</th><th>设备数</th><th>房间名</th></tr></thead>");
								thead.css("background","brown");
								table.append(thead);
								var tbody = $("<tbody></tbody>");
								table.append(tbody);
								table.hide();
						
								var tfoot = $("<tfoot><tr><th colspan='5'><ul><li>共&nbsp;"+pageCount+"&nbsp;页</li><li id='currentPage'>&nbsp;第&nbsp;"+(appContext.currentPage+1)+"&nbsp;页</li><li id='o_back'>&nbsp;上一页</li><li id='o_next'>&nbsp;下一页</li><li><button id='close'>关闭</button><button id='addCabinets'>添加机柜</button></li></ul></th></tr></tfoot>");
								tfoot.find('li').css("display","inline-block");
								tfoot.find("li[id*='o_']").hover(
										function(){
											$(this).css("color","red");
										},
										function(){
											$(this).css("color","black");
										});
								
						        tfoot.find('li').click(
						        		function(){
						        			switch(this.id){
						        			case 'o_next':
						        				//有下一页
						        				if(appContext.currentPage < pageCount-1){
						        					table.hide();
						        					tbody.children().remove();
						        					pageCabinets(appContext.currentPage+1,tempdataSet,tbody,tfoot);
						        					
						        					appContext.currentPage++;
						        					table.effect('puff',{mode:'show',percent: 50 },500,function(){});
						        				}
						        				break;
						        			case 'o_back':
						        				//有上一页
						        					if(appContext.currentPage > 0){
						        						table.hide();
						        					tbody.children().remove();
						        					pageCabinets(appContext.currentPage-1,tempdataSet,tbody,tfoot);
						        					appContext.currentPage--;
						        					table.effect('puff',{mode:'show',percent: 50 },500,function(){});

						        				}
						        				break;
						        		
						        			}
						        			
						        			table.find('tr').css("height","50px");
						        			table.find('th').css("height","40px");
						        		}
						        );
						        tfoot.find('button').click(
						        		function(){
						        			switch(this.id){
						        			case 'close':
					        					table.effect('puff',{mode:'hide',percent: 50 },500,function(){	
					        						table.remove();
						        				unlockScreen();
						        				});

						        			
						        				break;
						        			case 'addCabinets':
						        				//lockScreen();
						        				//给出添加机柜面板
						        				$.ajax({
						        					url:"room/get",
						        					type:"get",
						        					//controller:'test',
						        					//action:'test',
						        					//调整设备位置,0号请求为调整位置
						        					//data : {requestType : 0, deviceId : dId,x : left,y : top },
						        					dataType:"json",
						        					success:function(roomArray){
						        						if(undefined == roomArray){
						        							alert('error');
						        						}
						        						else{
						        							//构建房间下拉选择列表
							        						var addCabinetsBlock = $("<form id='addCabinetsForm'><table></table></form>");
							        						
							        						var thead = $("<thead><th colspan='2'>添加机柜</th><thead>");
							        						addCabinetsBlock.append(thead);
							        						//机柜编号输入框
							        						cabinetsCode = $("<tr><td>机柜编号：</td><td><input id='cabinetsCode' type='text' required/></td><tr>");
							        						addCabinetsBlock.append(cabinetsCode);
							        						//机柜名输入框
							        						cabinetsName = $("<tr><td>机柜名：</td><td><input id='cabinetsName' type='text' required/></td></tr>");
							        						addCabinetsBlock.append(cabinetsName);
							        						
							        						
							        						var roomlist = $("<tr><td>房间名：</td><td><select></select></td></tr>");
							        					
							        					addCabinetsBlock.append(roomlist);
							        					addCabinetsBlock.hide();
							        						$("body").append(addCabinetsBlock);
							        						addCabinetsBlock.draggable({cursor:"move"});
							        						
							        						var button = $("<tfoot><tr><th></th>&nbsp;<th><input type='submit' id='save' value='保存'/><button id='close'>关闭</button></th></tr><tfoot>");
							        							addCabinetsBlock.append(button);
							        						//css
							        						addCabinetsBlock.css("position","absolute")	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'");
							        						//构建房间下拉列表
							        						for(index in roomArray){
							        							var item = roomArray[index];
							        							var option = $("<option id='"+item.ROOM_ID+"'>"+item.ROOM_NAME+"</option>");
							        						
							        							roomlist.find("select").append(option);
							        						}
							        						
							        						
							        					
							        						//css
							        						addCabinetsBlock.css("position","absolute")
							        										.css("left",(screen.width-400)/2)
							        										.css("top",(screen.height-500)/2)
							        										.css("background","brown")
							        										.css("border","10px solid blue")
							        										.css("border-radius","20px");
							        						
							        						addCabinetsBlock.effect('puff',{mode:'show',percent: 50 },500,function(){});

							        					
						        						//event
							        						addCabinetsBlock.find("button[id='close']").click(
							        								function(){
							        									
											        						addCabinetsBlock.effect('puff',{mode:'hide',percent: 50 },500,function(){
											        							addCabinetsBlock.remove();
											        					

							        							
											        						});
							        								});
							        						
							        						$("#addCabinetsForm").submit(function(){
							        							var cName = addCabinetsBlock.find("input[id='cabinetsName']").val();
							        							var cCode = addCabinetsBlock.find("input[id='cabinetsCode']").val();
							        							var rId =  addCabinetsBlock.find("select").find("option").attr("SELECTED","SELECTED").attr("id");
							        							var rName = addCabinetsBlock.find("select").find("option").attr("SELECTED","SELECTED").val();
							        				
							        							//上传到服务器存入数据库
				        										$.ajax({
				        											url:"cabinets/save",
				        											type:"post",
				        											//controller:'test',
				        											//action:'test',
				        										
				        											data : {cabinetsName : cName,cabinetsCode: cCode,roomId : rId},
				        											dataType:"json",
				        											success:function(cabinetsId){
				        												if(cabinetsId == undefined || cabinetsId == null ){
				        													alert("cabinets/save error");
				        												}
				        												else{
				        												
				        													//加入机柜列表
					        												var item = {"CABINETS_ID": 1000,"CABINETS_CODE":cCode,"CABINETS_NAME":cName,'0':rId,'1':rName};
					        												tempdataSet[tempdataSet.length] = item;
					        												tbody.children().remove();
					        												pageCabinets(appContext.currentPage,tempdataSet,$("#cabinetsTable").find("tbody"),$("#cabinetsTable").find("tfoot"));
					        												
					        												$("#cabinetsTable").find('tr').css("height","50px");
					        												$("#cabinetsTable").find('th').css("height","40px");
				        												}
				        											
				        												
				        											}
				        											}); 
				        										addCabinetsBlock.remove(); 
							        						
						        						return false;
						        						});
							        						
						        						}
						        					
						        						
						        						
						        					}	
						        					});
						        				break;
						        				
						        			}
						        		}
						        );
								pageCabinets(appContext.currentPage,tempdataSet,tbody,tfoot);
								/*
								for(var index = appContext.currentPage*itemPerPage;((index < (appContext.currentPage+1) * itemPerPage)&& (index < itemCount));index++){
									//一条机柜信息
									var item = dataset[index];
								//	alert('123');
									var row = $("<tr id='"+item['CABINETS_ID']+"'><td>"+(index+1)+"</td><td>"+item['CABINETS_CODE']+"</td><td>"+item['CABINETS_NAME']+"</td><td>"+item['0']+"</td><td>"+item['1']+"</td></tr>");
									tbody.append(row);
								}
								*/
							
								table.append(tfoot);
								$("body").append(table);
								
								table.draggable({cursor:"move"});
								
								table.find('tr').css("height","50px");
			        			table.find('th').css("height","40px");
			        			table.children().css("border","0px");
								table.css("position","absolute").css("width","800px").css("background","white").css('left',(screen.width-800)/2).css("top",(screen.height-600)/2);
								
								table.effect('puff',{mode:'show',percent: 50 },500,function(){});
								//$('#cabinetsTable').Scrollable(600, 400);
								
							}
							
							
							
						}
						});
					
			
					
				}
				else if(this.id=='manageDevice'){
					
				
					
					
					if(!$("#leftMenu").children("#cabinetsList").is("details"))
					addCabinetsList(appContext.currentRoomId );
					if(appContext.operateState != 'manageDevice' && (appContext.currentCabinetsId == null || appContext.currentCabinetsId == undefined)){
						alert("请先选择要管理的机柜！");
						
						$("#cabinetsList").attr("open",true);
						return ;
					}
					
					canvas.clearImages();
					canvas._oContextTop.clearRect(0,0,canvas._oConfig.width, canvas._oConfig.height);
					canvas._oContextContainer.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
					canvas._oContextBackground.clearRect( 0, 0, canvas._oConfig.width, canvas._oConfig.height);
	
				
					//设置工程模式下的设备管理状态
					appContext.operateState = 'manageDevice';
					
					//设备添加时才添加事件
					//防止多次添加事件
					YAHOO.util.Event.removeListener(canvas._oElement, 'mousedown', canvas.onMouseDown);
					YAHOO.util.Event.removeListener(canvas._oElement, 'mouseup', canvas.onMouseUp);
					YAHOO.util.Event.removeListener(canvas._oElement, 'mousemove', canvas.onMouseMove);
					
					YAHOO.util.Event.on(canvas._oElement, 'mousedown', canvas.onMouseDown, canvas, true);
					YAHOO.util.Event.on(canvas._oElement, 'mouseup', canvas.onMouseUp, canvas, true);
					YAHOO.util.Event.on(canvas._oElement, 'mousemove', canvas.onMouseMove, canvas, true);
					
					
					//绘制机柜
					canvas.drawMachineCabinet();
				
					addDevice(appContext.currentCabinetsId);
					
					//可选设备
					//添加设备菜单,用来操作设别,防止多次生成菜单
					if(!$("#leftMenu").children("#deviceList").is("details")){
						   var device = $("<details id='deviceList'>"
						    		 +"<summary>设备</summary>"
						    		 +"<ul>"
						    		// +"<li id='switch'><img  src='public/img/switch_nav.jpg' title='交换机'/></li>"
						    		 //+"<li id='bas'><img  src='public/img/bas_nav.png' title='BAS机'/></li>"
						    		 +"</ul>"
						    		 +"</details>");
						   
							//	if(!$("#leftMenu").find("details[id='deviceList']"))
						$("#leftMenu").append(device);
					
						//ajax here 获取可用设备
						$.ajax({
							url:"backupdevice/backupdevice",
							type:"get",
							//controller:'test',
							//action:'test',
							//调整设备位置,0号请求为调整位置
						//	data : {requestType : 0, deviceId : dId,x : left,y : top },
							dataType:"json",
							success:function(backupdeviceArray){
								if(appContext.getCurrentMode() == 'projectMode'){
								
									//添加元素菜单为设备
										$("#addElementBlock").find("ul").children().remove();
										$("#addElementBlock").css("left",canvasContext.getCurrentLeft()+canvas._oConfig.width+'px')
										 .css("top",canvasContext.getCurrentTop()+200+'px').css("display","none");
										for(index in backupdeviceArray){
											var backupdevice = backupdeviceArray[index];
										
											var item = $("<li><img id='"+backupdevice["BK_DEVICE_TYPE"]+"'title='"+backupdevice["BK_DEVICE_NAME"]+"' src='public/img/"+backupdevice['BK_DEVICE_PIC']+"'/>"+"</li>");
											$("#addElementBlock").find("ul").append(item);
										}
										var imgHeight = $("#addElementBlock").find("img").outerHeight();
										var imgWidth =  $("#addElementBlock").find("img").outerWidth();
										var x1 = canvasContext.getCurrentLeft();
										var y1 = canvasContext.getCurrentTop();
										var x2 = canvasContext.getCurrentLeft()+canvasContext.getCurrentWidth();
										var y2 = canvasContext.getCurrentTop()+canvasContext.getCurrentHeight()-imgHeight;

										$("#addElementBlock").effect('pulsate',{mode:'show',},500,function(){});
										$("#addElementBlock").find("img").draggable(
												{
													cursor:"move",
													helper:"clone",
													containment:[x1,y1,x2,y2],

													opacity:0.5,
													stop: function(e,ui){
														//alert(this.id);
														//添加楼宇
														var x,y;
														
														if(e.offsetX == undefined){
														
															x = e.pageX - parseInt($("#topCanvas").css("left"));
															y = e.pageY - parseInt($("#topCanvas").css("top")) ;
															
															
															// alert(x+','+y);
														}
														else{
														 x =e.offsetX  ;
														 y = e.offsetY ;
														}	
													//lockScreen();
														var option ={};
														
														if(x < 0) x = 0;
														if(y < 0) y = 0;
														if(x > canvasContext.getCurrentWidth()) x = canvasContext.getCurrentWidth()- imgWidth;
														if(y > canvasContext.getCurrentHeight()) y = canvasContext.getCurrentHeight() - imgHeight;
														option.x = x;
														option.y = y;
														option.drag = true;
													//	alert(this.id);
														if(this.id == '0')
															//oConfig.id为房间Id
															addSwitch(this.id,oConfig.id,option);
														else if(this.id == '1')
															addBas(this.id,oConfig.id,option);
													
													}
												}
												);
									}
								
								for(index in backupdeviceArray){
									var backupdevice = backupdeviceArray[index];
								
									var item = $("<li id='"+backupdevice["BK_DEVICE_TYPE"]+"'>"+"<img title='"+backupdevice["BK_DEVICE_NAME"]+"' src='public/img/"+backupdevice['BK_DEVICE_PIC']+"'/>"+"</li>");
									device.append(item);
									item.click(
											
											function(){
												//0点击了交换机
												if(this.id == 0)
													//oConfig.id为房间Id
													addSwitch(this.id,oConfig.id,null);
												//1点击了BAS机
												else if(this.id == 1)
													addBas(this.id,oConfig.id,null);
											//	alert(index.target.id);
											}
									);
								}
							}
							}); 
						/*
							device.find("li").click(
									
									function(){
										if(this.id == 'switcher')
											//oConfig.id为房间Id
										addSwitch(this.id,oConfig.id);
										else if(this.id == 'bas')
										addBas(this.id,oConfig.id);
									//	alert(index.target.id);
									}
							);*/
					}
				  
				}
				else if(this.id == 'managePort'){
					
					if(!$("#leftMenu").children("#cabinetsList").is("details"))
						addCabinetsList(appContext.currentRoomId );
				
					if(appContext.operateState != 'manageDevice' && (appContext.currentCabinetsId == null || appContext.currentCabinetsId == undefined)){
						alert("请先选择要管理的机柜！");
						$("#cabinetsList").attr("open",true);
						return ;
					}
					//设备移动后，调整端口位置
					adjustPortPosition();
					if($("#leftMenu").children("#deviceList").is("details"))
						$("#deviceList").remove();
				
					
					//显示端口
					canvas.clearImages();
					canvas._oContextTop.clearRect(0,0,canvas._oConfig.width, canvas._oConfig.height);
					canvas._oContextContainer.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
					canvas._oContextBackground.clearRect( 0, 0, canvas._oConfig.width, canvas._oConfig.height);
					//画机柜
					
					appContext.operateState = 'managePort';
					canvas.drawMachineCabinet();
					
				}
			
			}
	);
	}


	

	
	
};
//清除某些状态
var clearState = function(){
	appContext.operateState = null;
	
};

var appContextElementClear = function(){
	appContext.couplePortArray = [];
};

var addDevice = function(cId){

	//加载设备
	appContext.switchArray = [];

	 appContext.basArray = [];
	//重载设备
	canvas.clearImages();
	canvas.clearContainerCanvas();
	canvas.clearTopCanvas();
		var img ;
		var oConfig = {};
	//ajax here 读取指定机柜设备
	if(cId != null || cId != undefined){
	
		$.ajax({
			url:"device/device",
			type:"get",
			//controller:'test',
			//action:'test',
			data : {requestType:'0',cabinetsId : cId},
			
			dataType:"json",
			success:function(deviceArray){
				if(deviceArray == undefined){
					alert("error");
				}
				else{
		
				
					
			//初始化机柜槽占用数组
			 appContext.deviceBlankMap=[];
			 for(index in deviceArray){
				 var device = deviceArray[index];
				 //switch type 为 0
				 if(device['DEVICE_TYPE'] == 0){
					
				
						img = appContext.switcher;
						//img.id = 'switch'+(appContext.switchArray.length+1);
						//设置当前交换机数
							
							oConfig.name = device['DEVICE_NAME'] ;
							oConfig.code = device['DEVICE_CODE'];
							oConfig.comment = device['COMMENT'];
							
							oConfig.type = device['DEVICE_TYPE'];
							//机柜Id
						
							oConfig.cabinetsId = device["CABINETS_ID"];
							//设备ID
						//	oConfig.deviceId = "s"+(appContext.switchArray.length+1);
							//默认位置
							oConfig.top = device['DEVICE_Y'];
							oConfig.left = device['DEVICE_X'];
							
							//构造机柜槽占用数组
							
							 x = Math.floor(oConfig.left/ 400) ;
							 y = Math.floor(oConfig.top  / 30 );
							 appContext.deviceBlankMap[x*20 + y] =  device['DEVICE_ID'];
							oConfig.deviceId = device['DEVICE_ID'];
							oConfig.randomposition = false;
							appContext.switchArray[appContext.switchArray.length] = new Canvas.Img(img, oConfig);
				 }
				 //BAS TYPE 为 10 ，11  ，其中10与交换机连，11为可分配信息点端口
				 else if(device['DEVICE_TYPE'] == 10 || device['DEVICE_TYPE'] == 11){
					
						img = appContext.BasMachine;
						//img.id = 'switch'+(appContext.switchArray.length+1);
						//设置当前交换机数
						
						
						oConfig.name = device['DEVICE_NAME'] ;
						oConfig.code = device['DEVICE_CODE'];
						oConfig.comment = device['COMMENT'];
							oConfig.type = device['DEVICE_TYPE'];
							//机柜Id
						
							oConfig.cabinetsId = device["CABINETS_ID"];
							//设备ID
						//	oConfig.deviceId = "s"+(appContext.switchArray.length+1);
							//默认位置
							oConfig.top = device['DEVICE_Y'];
							oConfig.left = device['DEVICE_X'];
							oConfig.deviceId = device['DEVICE_ID'];
							
							 x = Math.floor(oConfig.left/ 400) ;
							 y = Math.floor(oConfig.top  / 30 );
							 appContext.deviceBlankMap[x*20 + y] = oConfig.deviceId;
							oConfig.randomposition = false;
							appContext.basArray[appContext.basArray.length] = new Canvas.Img(img, oConfig);
				 }
			 }
					
			
			 
				
			 if(appContext.getCurrentMode() == 'projectMode'){
				 $("#"+canvas._oElement.id+'-canvas-container').hide();
					//加载交换机
					for(var i=0;i<appContext.switchArray.length;i++)
						canvas.addImage(appContext.switchArray[i]);
					
					//加载BAS机
					for(var i=0;i<appContext.basArray.length;i++)
						canvas.addImage(appContext.basArray[i]);
					
					 $("#"+canvas._oElement.id+'-canvas-container').show(500);
			 }
				
				}
				
			}
	});
	}
	
	else{
		alert("请先选择要管理的机柜！");
	}
	

};
var addPortOnBas = function(oImg,sID){
	
	var len = appContext.portArray.length;

	var sOffset = 0;
	if('maintainMode' == appContext.getCurrentMode()){
		sOffset =  sID * 24;
	}
	else {
		sOffset = 	appContext.switchArray.length * 48 + sID * 24;
	}
	if(oImg){
		//BAS及端口初始化
		if( (len - appContext.switchArray.length * 48) < (sID+1) * 24 ){
			//绘制24个端口
		
			for(var i = 0;i < 24 ;i++){
				//	var portImg  = new Image();
				   var portImg ;
				//	portImgID = '交换机'+(sID+1)+'的'+(i+j*24)+'号口';
					var config = {};
				   if(oImg.type == '10')
				   config.type = '21';
				   else if(oImg.type =='11')
					  config.type = '22';
				   config.deviceId = oImg.deviceId;
				   config.code = oImg.code;
				   config.portId = i+1;
					config.top = oImg.top +4;
				
					//	alert(i);
					//第一个口
					if(0 == i)
						config.left =  oImg.left - oImg.width/2 + 36 ;
					//其他
					else{
						if(i == 12)
							config.left = appContext.portArray[i-1 + sOffset].left + 46 ;
						else
							config.left = appContext.portArray[i-1 + sOffset].left + 11 ;
					}
					
					config.randomposition = false;
					//端口还未添加
					
				//	portImg.src = appContext.getPublicPath() + "img/portState/port.jpg";
				//	portImg.id = portImgID;
					portImg = appContext.port;
						appContext.portArray[appContext.portArray.length] = new Canvas.Img(portImg, config);    //加载入canvas
						
			
			}
		}
		
	}
	
};
var addPortOnSwitch = function(oImg,sID){

	//绘制端口
//	var oImg = appContext.switchArray[0];
	var len = appContext.portArray.length;
	//alert(len);
	//绘制第几台交换机
	var sOffset = sID * 48;
	if(oImg){
		//初始化端口
		if(len < (sID+1) * 48 ){
			//一共两行
			for(var j=0;j<2;j++){
				//绘制一行端口
				for(var i = 0 ;i < 24;i++){
			//	var portImg  = new Image();
			   var portImg ;
			//	portImgID = '交换机'+(sID+1)+'的'+(i+j*24)+'号口';
				var config = {};
				
			   config.type = '20';
			   config.deviceId = oImg.deviceId;
			   config.code = oImg.code;
			   config.portId = i+j*24+1;
				config.top = oImg.top - 4 + j*12;
			
				//	alert(i);
				//第一个口
				if(0 == i)
					config.left =  oImg.left - oImg.width/2 + 25+ i*12 ;
				//其他
				else{
					if(i%6 == 0)
						config.left = appContext.portArray[i-1 + sOffset].left + 14 ;
					else
						config.left = appContext.portArray[i-1 + sOffset].left + 12 ;
				}
				
				config.randomposition = false;
				//端口还未添加
				
			//	portImg.src = appContext.getPublicPath() + "img/portState/port.jpg";
			//	portImg.id = portImgID;
				portImg = appContext.port;
					appContext.portArray[appContext.portArray.length] = new Canvas.Img(portImg, config);    //加载入canvas
					
			
				
				}
			}
			
		}

		
		
	}
	
};

var addSwitch = function(type,roomId,option){
	lockScreen();
    var deviceBlock = $("<form id='addDeviceForm'><table></table></form>");
    
    var thead = $("<thead><tr><th colspan='3'>添加设备</th></tr></thead>");
    
    deviceBlock.append(thead);

    
    
    var tbody = $("<tbody></tbody>");
    deviceBlock.append(tbody);
    var itemArray = []; 
    itemArray[itemArray.length] = $("<tr><td>设备编号</td><td><input id='deviceCode' type='text' required/></td><td id='deviceCodeTips'>&nbsp;</td></tr>");
	itemArray[itemArray.length] = $("<tr><td>设备名称</td><td><input id='deviceName' type='text' required/></td><td>&nbsp;</td></tr>");
	itemArray[itemArray.length] = $("<tr><td>设备描述</td><td><textarea line='5' id='deviceComment' required/></textarea></td><td>&nbsp;</td></tr>");
	
	for(var i=0;i < itemArray.length;i++)
		tbody.append(itemArray[i]);
	
	var tfoot = $("<tfoot><tr><th colspan='3'><input id='add' type='submit' value='添加' disabled/>&nbsp;<button id='cancle' >取消</button></th></tr></tfoot>");
	 deviceBlock.append(tfoot);
    
	 
	 $("body").append(deviceBlock);
	 deviceBlock.draggable({cursor:"move"});
	 
	 //css
	 deviceBlock.css("background","white").css("position","absolute").css("top",screen.height/2).css("left",screen.width/2)	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'")
	 	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'");
	 //event
	 
	 //检测此编号是否可用
	 deviceBlock.find("input[id='deviceCode']").blur(	 
			 function(){
		
			 //ajax checkexist
				  var odata = {};
				  odata.deviceCode = deviceCode = deviceBlock.find("input[id='deviceCode']").val();
				  odata.cabinetsId =  appContext.currentCabinetsId;
			
				  //
				  $.ajax({
					  url:"device/checkexist",
					  type:"post",
					  //controller:'test',
					  //action:'test',
					  //调整设备位置,0号请求为调整位置
					  data : odata,
					  dataType:"json",
					  success:function(checkFlag){
						  if( checkFlag == undefined){
							  alert("device/checkexist error");
						  }
						  //可以
						  else if(checkFlag){
							  deviceBlock.find("td[id='deviceCodeTips']").html("可以");
							  deviceBlock.find("td[id='deviceCodeTips']").css("color","green");
							  deviceBlock.find("input[id='add']").removeAttr("disabled");
							
						  }
						  else if(checkFlag == false){
							  deviceBlock.find("td[id='deviceCodeTips']").html("已经存在");
							  deviceBlock.find("td[id='deviceCodeTips']").css("color","red");
							  deviceBlock.find("input[id='deviceCode']")[0].focus();
							  deviceBlock.find("input[id='deviceCode']")[0].select();
							  deviceBlock.find("input[id='add']").attr("disabled","disabled");
							  
						  }
					  }
					  });
				  
				  //
			 });
	 
	 
	 deviceBlock.find("button[id='cancle']").click(
			 function(){
				 unlockScreen();
				 deviceBlock.remove();
			 }
	 );
	 
	 $("#addDeviceForm").submit(function(){
		 
		 var img ;
			var oConfig = {};

			
			 var deviceCode = deviceBlock.find("input[id='deviceCode']").val();
			 var deviceName = deviceBlock.find("input[id='deviceName']").val();
			 var deviceComment = deviceBlock.find("textarea[id='deviceComment']").val();
				oConfig.deviceName = deviceName;
				oConfig.deviceCode = deviceCode;
				oConfig.deviceComment = deviceComment;
				
				
			// 交换机数加1
			img = appContext.switcher;
			//img.id = 'switch'+(appContext.switchArray.length+1);
			//设置当前交换机数
			
				//房间ID
				oConfig.roomId = roomId;
				oConfig.type = type;
				//机柜Id
			
				oConfig.cabinetsId = appContext.currentCabinetsId;
				//交换机类型编号 0
				oConfig.deviceType = 0;
				//设备ID
			//	oConfig.deviceId = "s"+(appContext.switchArray.length+1);
				//默认位置
				if(option == null || option == undefined){
				oConfig.top = 400;
				oConfig.left = 300;
				}
				else{
					oConfig.top =option.y;
					oConfig.left = option.x;
				}
				oConfig.randomposition = false;
				
				//ajax 写入数据库
				$.ajax({
					url:"cabinets/cabinets",
					type:"post",
					//controller:'test',
					//action:'test',
					data : oConfig,
					dataType:"json",
					success:function(device){
						if(device == undefined){
							alert("error");
						}
						else{
							
							oConfig.deviceId =device["id"];
							appContext.switchArray[appContext.switchArray.length] = new Canvas.Img(img, oConfig);
						
						//添加刚刚加入的那台设备
						canvas.addImage(appContext.switchArray[appContext.switchArray.length-1]);
					
						
						unlockScreen();
						deviceBlock.remove();
						
							if(appContext.mediaOn){	
							appContext.mediaAddSwitch.load();
							appContext.mediaAddSwitch.play();
							}
							alert("设备添加成功");
						
						}
						
					}
			});
				
				
				
		 
		 return false;
	 });
	 
	 
	 
	 

	
		
			


};

var addBas = function(type,roomId,option){
	lockScreen();
    var deviceBlock = $("<form id='addDeviceForm'><table></table></form>");
    
    var thead = $("<thead><tr><th colspan='3'>添加设备</th></tr></thead>");
    
    deviceBlock.append(thead);

    
    
    var tbody = $("<tbody></tbody>");
    deviceBlock.append(tbody);
    var itemArray = []; 
    itemArray[itemArray.length] = $("<tr><td>设备编号</td><td><input id='deviceCode' type='text' required/></td><td id='deviceCodeTips'>&nbsp;</td></tr>");
    itemArray[itemArray.length] = $("<tr><td>设备类型</td><td><select id='deviceType' required><option id='10'>A类</option><option id='11'>B类</option></select></td><td>&nbsp;</td></tr>");
    itemArray[itemArray.length] = $("<tr><td>设备名称</td><td><input id='deviceName' type='text' required/></td><td>&nbsp;</td></tr>");
	itemArray[itemArray.length] = $("<tr><td>设备描述</td><td><textarea line='5' id='deviceComment' required/></textarea></td><td>&nbsp;</td></tr>");
	
	for(var i=0;i < itemArray.length;i++)
		tbody.append(itemArray[i]);
	
	var tfoot = $("<tfoot><tr><th colspan='3'><input id='add' type='submit' value='添加' disabled />&nbsp;<button id='cancle' >取消</button></th></tr></tfoot>");
	 deviceBlock.append(tfoot);
    
	 
	 $("body").append(deviceBlock);
	 deviceBlock.draggable({cursor:"move"});
	 
	 //css
	 deviceBlock.css("background","white").css("position","absolute").css("top",screen.height/2).css("left",screen.width/2)	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'")
	 	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'");
	 //event
	 //检测此编号是否可用
	 deviceBlock.find("input[id='deviceCode']").blur(	 
			 function(){
		
			 //ajax checkexist
				  var odata = {};
				  odata.deviceCode =  deviceBlock.find("input[id='deviceCode']").val();
				  odata.cabinetsId =  appContext.currentCabinetsId;
				
					  
				  //df
				  $.ajax({
					  url:"device/checkexist",
					  type:"post",
					  //controller:'test',
					  //action:'test',
					  //调整设备位置,0号请求为调整位置
					  data : odata,
					  dataType:"json",
					  success:function(checkFlag){
						  if( checkFlag == undefined){
							  alert("device/checkexist error");
						  }
						  //可以
						  else if(checkFlag){
							  deviceBlock.find("td[id='deviceCodeTips']").html("可以");
							  deviceBlock.find("td[id='deviceCodeTips']").css("color","green");
							  deviceBlock.find("input[id='add']").removeAttr("disabled");
						  }
						  else if(checkFlag == false){
							  deviceBlock.find("td[id='deviceCodeTips']").html("已经存在");
							  deviceBlock.find("td[id='deviceCodeTips']").css("color","red");
							  deviceBlock.find("input[id='deviceCode']")[0].focus();
							  deviceBlock.find("input[id='deviceCode']")[0].select();
							  deviceBlock.find("input[id='add']").attr("disabled","disabled");
						  }
					  }
					  });
				  
				  //
			 });
	 
	 deviceBlock.find("button[id='cancle']").click(
			 function(){
				 unlockScreen();
				 deviceBlock.remove();
			 }
	 );
	 $("#addDeviceForm").submit(
			 function(){
				 
				 
				 var deviceCode = deviceBlock.find("input[id='deviceCode']").val();
				 var deviceName = deviceBlock.find("input[id='deviceName']").val();
				 var deviceComment = deviceBlock.find("textarea[id='deviceComment']").val();
				 
				 var img ;
				var oConfig = {};
				oConfig.name = deviceName;
				oConfig.code = deviceCode;
				oConfig.comment = deviceComment;
				// 交换机数加1
				img = appContext.BasMachine;
				//img.id = 'switch'+(appContext.switchArray.length+1);
				//设置当前交换机数
					
				//房间ID
					oConfig.roomId = roomId;
					oConfig.type =  deviceBlock.find("select[id='deviceType'] option:selected").attr("id");
				//	oConfig.deviceId = "b"+(appContext.basArray.length+1);
					if(option == null || option == undefined){
					oConfig.top = 400;
					oConfig.left = 300;
					}
					else{
						oConfig.top = option.y;
						oConfig.left = option.x;
					}
					oConfig.randomposition = false;
					oConfig.cabinetsId = appContext.currentCabinetsId;
					//添加一个交换机
					//ajax 写入数据库
					$.ajax({
						url:"cabinets/cabinets",
						type:"post",
						//controller:'test',
						//action:'test',
						data : oConfig,
						dataType:"json",
						success:function(device){
							if(device == undefined){
								alert("error");
							}
							else{
								
								oConfig.deviceId = device["id"];
								
								appContext.basArray[appContext.basArray.length] = new Canvas.Img(img, oConfig);
							
							//添加刚刚加入的那台设备
								canvas.addImage(appContext.basArray[appContext.basArray.length-1]);
						
								
								unlockScreen();
								deviceBlock.remove();
							if(appContext.mediaOn){	
								appContext.mediaAddSwitch.load();
							appContext.mediaAddSwitch.play();
							}
								alert("设备添加成功");
							}
							
						}
				});
					
				 return false;
			 }
	 );
	 
	
		
		
			if(appContext.mediaOn){	
				appContext.mediaAddSwitch.load();
			appContext.mediaAddSwitch.play();
			}
		
			


};
//返回上一级图层
var backClick = function(){
	appContext.backOut = false;
//	$("canvas").effect('puff',{mode:'hide',percent: 50 },500,function(){});
	 $("#"+canvas._oElement.id+'-canvas-container').hide();
	 $("#"+canvas._oElement.id+'-canvas-background').hide();
	//如果非工程且管理模式下取消移动图元事件
	if(appContext.getCurrentMode() !='projectMode' && appContext.operateState != 'manage' ){
		clearState();
		clearMoveEvent();
	}	
	//清楚上次绘画
	canvas.clearImages();
	canvas._oContextContainer.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
	canvas._oContextTop.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
	canvas._oContextHelper.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
	//清除设备列表
	$("#deviceList").remove();
	$("#cabinetsList").remove();
	$("#operationList").remove();
	//最大化时
	if('none' == $("#leftMenu").css("display") ){	
		//允许调整大小
		YAHOO.util.Event.on(window, 'mousedown',adjustCanvasStart, null, true);
		YAHOO.util.Event.on(window, 'mousemove',adjustCanvas, null, true);
		YAHOO.util.Event.on(window, 'mouseup',adjustCanvasOver, null, true);
		$("#leftMenu").css("display",'-webkit-box');
	
		$("#hide").css("display","inline-block");
		$("#show").css("display","none");
		

		//缩小
		var config = {};
		$("#leftMenu").css("width",appContext.getLeftMenuOriginalWidth());
		config.width =canvasContext.getOriginalWidth();	

		canvasContext.setCurrentWidth(config.width);
		config.height =canvasContext.getOriginalHeight();	
		
	//恢复默认参数
	canvasContext.setCurrentPosition(canvasContext.getOriginalLeft(),canvasContext.getOriginalTop());

	appContext.setLeftMenuCurrentWidth(appContext.getLeftMenuOriginalWidth());

		
			canvas._oConfig = config; 

			canvas._oElement.width = config.width ;
			canvas._oElement.height = config.height ;
		
		
			 $("canvas[id*="+canvas._oElement.id+"]").css("width",config.width +'px').css("height",config.height +'px');

			 $("canvas[id*="+canvas._oElement.id+"]").css("left",canvasContext.getOriginalLeft() +'px');
	}
	
	
		 
		 
	var currentLayer = canvasContext.getCurrentLayer();
	//不是最上层
	if(currentLayer > 0){
		appContext.backOut = true;
		//返回上一层
			currentLayer--;
			//记录当前层
			canvasContext.setCurrentLayer(currentLayer);
			//canvasContext.setLastLayer(currentLayer);
		
			
			
			//drawAll(currentLayer);
		//	canvas.setCanvasBackground(new Canvas.Img(document.getElementById(currentLayer+"_layer_bg"),{}));
			//整个楼宇层
			if(1 == currentLayer){
		
		
				if(appContext.getCurrentMode() == 'projectMode'){
					//添加元素菜单该为楼层
						$("#addElementBlock").find("ul").children().remove();
						var addElement = $("<li><img id='addElement_floor' src='"+appContext.getPublicPath()+"img/floor.png'/></li>");
						$("#addElementBlock").find("ul").append(addElement);
				
						$("#addElement_floor").draggable(
								{
									cursor:"move",
									helper:"clone",
									opacity:0.5,
									stop: function(e,ui){
										//alert(this.id);
										//添加楼宇
										var x,y;
										
										if(e.offsetX == undefined){
										
											x = e.pageX - parseInt($("#topCanvas").css("left"));
											y = e.pageY - parseInt($("#topCanvas").css("top")) ;
											
											
											// alert(x+','+y);
										}
										else{
										 x =e.offsetX  ;
										 y = e.offsetY ;
										}	
									lockScreen();
									faddFloor(x,y);
									}
								}
								);
					}
			//要返回上次打开的某个楼宇
				canvas.clearImages();
				canvas._oContextContainer.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
				
				canvas.setCanvasBackground(new Canvas.Img(appContext.wholeBuilding,{}));
				
				//ajax here
				$.ajax({
					url:"building/getfloor",
					type:"get",
					//controller:'test',
					//action:'test',
					//调整设备位置,0号请求为调整位置
					data : {buildingId : appContext.lastBuildingId},
					dataType:"json",
					success:function(floors){
						if(floors == undefined){
							alert('error');
						}
						else{
							var img = [];
							for(index in floors){
								var floor = floors[index];
								var oConfig = {};
									oConfig.left = floor['FLOOR_X'];
								     oConfig.top = floor['FLOOR_Y'];
								     oConfig.type = 'floor';
								     oConfig.floorName = floor['FLOOR_NAME'];
								     oConfig.floorId = floor['FLOOR_ID'];
								     oConfig.code = floor['FLOOR_CODE'];
								     oConfig.comment = floor['COMMENT'];
								    // alert(oConfig.left+','+oConfig.top);
								     oConfig.randomposition = false;
								     img[img.length] = new Canvas.Img(appContext.floor, oConfig);
							}
							for(var i = 0 ; i < img.length;i++)
								canvas.addImage(img[i]);
						
						}
					}
			});
			
				 $("#"+canvas._oElement.id+'-canvas-background').effect('puff',{mode:'show',percent:50},500,function(){
					 
					 $("#"+canvas._oElement.id+'-canvas-container').effect('puff',{mode:'show',percent:50},600,function(){});

				 });
			}
			//楼层平面
			if(2 == currentLayer ){
			
			
				if(appContext.getCurrentMode() == 'projectMode'){
					//添加元素菜单该为楼层
						showProjectRightMenu();
						$("#addElementBlock").find("ul").children().remove();
						var addElement = $("<li><img id='addElement_point' src='"+appContext.getPublicPath()+"img/portState/avaliable1.png'/></li>");
						$("#addElementBlock").find("ul").append(addElement);
					//	
						$("#addElement_point").draggable(
								{
									cursor:"move",
									helper:"clone",
									opacity:0.5,
									stop: function(e,ui){
										//alert(this.id);
										//添加楼宇
										var x,y;
										
										if(e.offsetX == undefined){
										
											x = e.pageX - parseInt($("#topCanvas").css("left"));
											y = e.pageY - parseInt($("#topCanvas").css("top")) ;
											
											
											// alert(x+','+y);
										}
										else{
										 x =e.offsetX  ;
										 y = e.offsetY ;
										}	
									lockScreen();
									faddPoint(x,y);
									}
								}
								);
					}
				//返回上次的楼层平面
				//楼层平面图,需要绘制所有端口
				canvas.clearImages();
				canvas._oContextContainer.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
				//alert();
					//清空容器图片
					
					//首先获取该平面图相关的端口数，及端口状态
					//ajax here
					//drawPortInRoom();
				//绘制平面背景
				canvas.setCanvasBackground(new Canvas.Img(appContext.layerRoom,{}));
			//	drawLayerRoom();
			//show information about this layer
			
				//ajax 
				$.ajax({
					url:"floor/floor",
					type:"get",
					//controller:'test',
					//action:'test',
					data :{floorId : appContext.lastFloorId},
					dataType:"json",
					success:function(floorInfo){
					
						if(floorInfo == 'undefined'){
						alert("未取到任何数据");
						}
						else{
						
							var img = [];
							var oConfig = {};
							//绘制信息点
						
							for(var roomIndex in floorInfo){
								//获取一个房间
								var pointset = floorInfo[roomIndex];
								for(var pointIndex in pointset){
									//获取某个房间的信息点
									var point = pointset[pointIndex];
									 oConfig.type = 'point';
								     oConfig.Id = point["POINT_ID"];
								     oConfig.Ip = point["POINT_IP"];
								     oConfig.Person = point["POINT_PERSON"];
								     oConfig.left = point['POINT_X'];
								     oConfig.top = point["POINT_Y"];
								     oConfig.Phone = point["POINT_PHONE"];
								     oConfig.comment = point['COMMENT'];
    							         oConfig.code = point['POINT_CODE'];
								    // alert(oConfig.left+','+oConfig.top);
								     oConfig.randomposition = false;
								     img[img.length] = new Canvas.Img(appContext.pointInRoom, oConfig);
								   
								}
							    
							   
							}
					
							for(var i = 0 ; i < img.length;i++)
								canvas.addImage(img[i]);
						
						}
					}
			});
				
					
			

			//绘制背景
					canvas.setCanvasBackground(new Canvas.Img(appContext.layerRoom,{}));
					 $("#"+canvas._oElement.id+'-canvas-background').effect('puff',{mode:'show',percent:50},500,function(){
						 
						 $("#"+canvas._oElement.id+'-canvas-container').effect('puff',{mode:'show',percent:50},600,function(){});

					 });
			//show information about this layer

		//	$("#topCanvas").attr("title",$("#"+canvasContext.getCurrentLayer()+"_layer_bg").attr("alt"));
			}
			}
	if(0 == currentLayer){
	
		appContext.backClick = true;
		$("#addElementBlock").remove();
		var addElementBlock = $("<div id='addElementBlock'><ul></ul></div>");
		var addElement = $("<li><img id='addElement_building' src='"+appContext.getPublicPath()+"img/building.jpg' /></li>");

			addElementBlock.find("ul").append(addElement);
			addElement.hide();
			$("body").append(addElementBlock);
			addElementBlock.css("left",canvasContext.getCurrentLeft()+canvas._oConfig.width+'px')
			 .css("top",canvasContext.getCurrentTop()+200+'px').css("position","absolute");
		//	addElementBlock.effect('pulsate',{mode:'show',},500,function(){});
			$("#addElement_building").draggable(
					{
						cursor:"move",
						helper:"clone",
						opacity:0.5,
						stop: function(e,ui){
							//alert(this.id);
							//添加楼宇
							var x,y;
							
							if(e.offsetX == undefined){
							
								x = e.pageX - parseInt($("#topCanvas").css("left"));
								y = e.pageY - parseInt($("#topCanvas").css("top")) ;
								
								
								// alert(x+','+y);
							}
							else{
							 x =e.offsetX  ;
							 y = e.offsetY ;
							}	
						lockScreen();
						faddBuilding(x,y);
						}
					}
					);
			addElement.effect('pulsate',{mode:'show',percent:50},500,function(){});
		backToIndex();
	}
	

	
	
	if(appContext.backOut && appContext.mediaOn){
		//播放返回声效
		appContext.mediaMouseClickIn.load();
		appContext.mediaMouseClickIn.play();
	
	}
	
	
};

var backToIndex = function(){	

	//清除设备列表
	$("#deviceList").remove();
	$("#cabinetsList").remove();
	$("#operationList").remove();	
	var oLeftMenu = document.getElementById('leftMenu');

	//使用返回键返回至首页
	if(appContext.backClick){
		appContext.backClick = false;
	}	
	//在首页时无需刷新
	else{
		
		if(canvasContext.getCurrentLayer() == DEFAULT_LAYER && 'none' != oLeftMenu.style.display) 
			return;
		
	}
	$("#"+ canvas._oElement.id + '-canvas-background').hide();
	$("#"+ canvas._oElement.id + '-canvas-container').hide();
	//恢复树形菜单默认
	//$("details").attr("open",false);
	//清楚上次绘画
	canvas.clearImages();
	canvas._oContextContainer.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);
	canvas._oContextTop.clearRect(0,0,canvas._oConfig.width,canvas._oConfig.height);

	//最大化时

	

	var config = {};
	//now left is hidden,show it
	if('none' == oLeftMenu.style.display ){	
		//允许调整大小
		YAHOO.util.Event.on(window, 'mousedown',adjustCanvasStart, null, true);
		YAHOO.util.Event.on(window, 'mousemove',adjustCanvas, null, true);
		YAHOO.util.Event.on(window, 'mouseup',adjustCanvasOver, null, true);
		$("#leftMenu").css("display",'inline-block');
		
		$("#leftMenu").css("width",appContext.getLeftMenuOriginalWidth()+'px').css("height",canvasContext.getOriginalHeight()-parseInt($("#leftMenu").css("padding")) *2+'px');
		

		//document.getElementById('hide').style.display = 'inline-block';
		//document.getElementById('show').style.display = 'none';
		$("#hide").css("display","inline-block");
		$("#show").css("display","none");
	
		
		//缩小

		config.width =canvasContext.getOriginalWidth();	
	
		canvasContext.setCurrentWidth(config.width);
		config.height =canvasContext.getOriginalHeight();	
		
	//恢复默认参数
	canvasContext.setCurrentPosition(canvasContext.getOriginalLeft(),canvasContext.getOriginalTop());
	
	appContext.setLeftMenuCurrentWidth(appContext.getLeftMenuOriginalWidth());
	
		
			canvas._oConfig = config; 

			canvas._oElement.width = config.width ;
			canvas._oElement.height = config.height ;
		
		
			 $("canvas[id*="+canvas._oElement.id+"]").css("width",config.width +'px').css("height",config.height +'px');
	
			 $("canvas[id*="+canvas._oElement.id+"]").css("left",canvasContext.getOriginalLeft() +'px');
			 $("#canvasContainer").css("width",config.width +'px').css("height",config.height +'px');
			 resetAllCanvas();
		
		
			 //canvas.renderAll();
	
	}

	
	canvasContext.setCurrentLayer(DEFAULT_LAYER);
	//drawAll(currentLayer);
	canvas.setCanvasBackground(new Canvas.Img(appContext.indexImg,{}));
	/*
	var oConfig = {};
	var img = [];
	var building1 = appContext.building;
	
	oConfig.type = 'building';
	oConfig.buildingId = '1';
	oConfig.left = 400;
	oConfig.top = 100;
	oConfig.randomposition = false;
	img[img.length] = new Canvas.Img(building1, oConfig);
	
	
	var building2 = appContext.building;
	oConfig.type = 'building';
	oConfig.buildingId = '2';
	oConfig.left = 200;
	oConfig.top = 300;

	img[img.length] = new Canvas.Img(building2, oConfig);
	

	var building3 = appContext.building;
	oConfig.type = 'building';
	oConfig.buildingId = '3';
	oConfig.left = 600;
	oConfig.top = 300;

	img[img.length] = new Canvas.Img(building3, oConfig);
	
	
	for(var i = 0 ; i < img.length;i++)
	canvas.addImage(img[i]);
	*/
	//获取多少栋楼
	//ajax 
	$.ajax({
		url:"building/building",
		type:"get",
		//controller:'test',
		//action:'test',
		//data : "userName=admin",
		dataType:"json",
		success:function(build){
			//alert('123');
			if(build == 'undefined'){
			alert("error");
			}
			else{
				var img = [];
				var oConfig = {};
				//alert(person.name+','+person.password);
				for(var i = 0;i < build.length;i++){
					//alert(build[i].BUILDING_NAME);
					
					oConfig.type = 'building';
					oConfig.buildingId = build[i].BUILDING_ID;
					//一行放四个
					//一行放四个
				//	var row = i % 4;
				//	var col =Math.floor(i/4); 
				//	oConfig.left = 150 * (row+1);
			//		oConfig.top = 100 + 150*col;
					oConfig.left = build[i].BUILDING_X;
					oConfig.top = build[i].BUILDING_Y;
					oConfig.buildingName = build[i].BUILDING_NAME;
					oConfig.comment = build[i].COMMENT;
					oConfig.code = build[i].BUILDING_CODE;
					oConfig.randomposition = false;
					img[img.length] = new Canvas.Img(appContext.building, oConfig);
				}
				//绘制楼
				for(var i = 0 ; i < img.length;i++)
					canvas.addImage(img[i]);
			}
		}
});
	//$("#topCanvas").attr("title",$("#"+canvasContext.getCurrentLayer()+"_layer_bg").attr("alt"));
	$("#"+ canvas._oElement.id + '-canvas-background').effect('puff',{mode:'show',percent: 50 },300,function(){
		
		$("#"+ canvas._oElement.id + '-canvas-container').effect('puff',{mode:'show',percent: 50 },600,function(){});
	});
};
//只能浏览
var onScanMode = function(){
	clearState();
	clearMoveEvent();
	
	//清楚一些模式下的全局变量
	appContextElementClear();
	
	HideProjectRightMenu();
	//选中模式，播放声效
	if(appContext.mediaOn){
		appContext.mediaChoseMode.load();
		appContext.mediaChoseMode.play();
	}

	
	//高亮选中模式
	$("#"+appContext.getCurrentMode()).removeClass("topNavUrlChosed");
	appContext.setCurrentMode("scanMode");
	$("#"+appContext.getCurrentMode()).addClass("topNavUrlChosed");
	
	//切换模式调整交换机端口
	adjustPortPosition();
	
	//YAHOO.util.Event.on(canvas._oElement, 'dblclick', canvas.onDblClick, canvas, true);
	
	//YAHOO.util.Event.on(canvas._oElement, 'mouseover', canvas.onMouseover, canvas, true);
	//YAHOO.util.Event.removeListener(canvas._oElement, 'mousedown', canvas.onMouseDown, canvas, true);
	//YAHOO.util.Event.removeListener(canvas._oElement, 'mouseup', canvas.onMouseUp, canvas, true);
	//YAHOO.util.Event.removeListener(canvas._oElement, 'mousemove', canvas.onMouseMove, canvas, true);
	
	//回到主界面
	addModeMenu(appContext.getCurrentMode());

	backToIndex();
};

//端口的分配
var onMaintainMode = function(){
	clearState();
	//移动图片事件
	clearMoveEvent();
	//清楚一些模式下的全局变量
	appContextElementClear();
	
	HideProjectRightMenu();
	if(appContext.mediaOn){
		appContext.mediaChoseMode.load();
		appContext.mediaChoseMode.play();
	}
	

	
	
	//高亮选中模式
	$("#"+appContext.getCurrentMode()).removeClass("topNavUrlChosed");
	appContext.setCurrentMode("maintainMode");
	$("#"+appContext.getCurrentMode()).addClass("topNavUrlChosed");
	
	adjustPortPosition();
	//YAHOO.util.Event.on(canvas._oElement, 'dblclick', canvas.onDblClick, canvas, true);
	//YAHOO.util.Event.on(canvas._oElement, 'click', canvas.onClick, canvas, true);
	//YAHOO.util.Event.on(canvas._oElement, 'mousedown', canvas.onMouseDown, canvas, true);
	//YAHOO.util.Event.on(canvas._oElement, 'mouseup', canvas.onMouseUp, canvas, true);
//	YAHOO.util.Event.on(canvas._oElement, 'mousemove', canvas.onMouseMove, canvas, true);
//	YAHOO.util.Event.removeListener ( canvas._oElement , canvas.onMouseDown); 
//	YAHOO.util.Event.removeListener ( canvas._oElement , canvas.onMouseUp); 
//	YAHOO.util.Event.removeListener ( canvas._oElement , canvas.onMouseMove); 
	
	//YAHOO.util.Event.removeListener(canvas._oElement, 'mousedown', canvas.onMouseDown);
	//YAHOO.util.Event.removeListener(canvas._oElement, 'mouseup', canvas.onMouseUp);
	//YAHOO.util.Event.removeListener(canvas._oElement, 'mousemove', canvas.onMouseMove);
	addModeMenu(appContext.getCurrentMode());
	backToIndex();
};

//机柜管理
var onProjectMode = function(){
	//清楚一些标志位
	clearState();
	//清楚一些事件
	clearMoveEvent();
	//清楚一些模式下的全局变量
	appContextElementClear();
	//显示查看与管理，仅在工程模式下
	showProjectRightMenu();
	

	if(appContext.mediaOn){
	appContext.mediaChoseMode.load();
	appContext.mediaChoseMode.play();
	}

	//高亮选中模式
	$("#"+appContext.getCurrentMode()).removeClass("topNavUrlChosed");
	appContext.setCurrentMode("projectMode");
	$("#"+appContext.getCurrentMode()).addClass("topNavUrlChosed");
	//添加模式菜单
	addModeMenu(appContext.getCurrentMode());
	backToIndex();
};

//显示能够管理画布内图元的菜单
var showProjectRightMenu = function(){
	clearMoveEvent();
	
	//选择管理模式，查看和调整
	$("#managebutton").css("left",canvasContext.getCurrentLeft()+canvas._oConfig.width+'px')
	 .css("top",canvasContext.getCurrentTop()+'px');
	$("#managebutton").effect('pulsate',{mode:'show',},500,function(){});
	//var rightMenu = $("<div id='rightMenu'><div id='rightMenu_browse'>查看</div><div id='rightMenu_manage'>调整</div></div>");

	//alert(canvasContext.getCurrentLeft());
	//css
	
	//alert(canvasContext.getCurrentTop());
	/*rightMenu.css("position","absolute")
			 .css("left",canvasContext.getCurrentLeft()+canvas._oConfig.width+'px')
			 .css("top",canvasContext.getCurrentTop()+'px')
			 .css("background","black")
			 .css("color","white");
	rightMenu.find("div[id='rightMenu_browse']").css("border","2px red solid");
	
	$("body").append(rightMenu);
	*/
	//event
	/*
	rightMenu.find("div[id*='rightMenu_']").hover(
			function(){
				$(this).css("background","white").css("color","black");
			},
			function(){
				$(this).css("background","black").css("color","white");
			}
	)*/
	$("#managebutton").find("li").click(
			
			function(){	
				//清楚上次选中操作边框
				$("#managebutton").find("li[id*='rightMenu_']").removeClass("selected");
				
				//alert(this.id);
				//为选中模式添加边框
				$(this).addClass("selected");
				//$(this).css("border","2px red solid");
				switch(this.id){
				//查看模式无法添加移动图元
				case 'rightMenu_browse':
					//设置管理楼宇状态
				
					appContext.operateState = 'browse';
					//防止多次添加事件
					YAHOO.util.Event.removeListener(canvas._oElement, 'mousedown', canvas.onMouseDown);
					YAHOO.util.Event.removeListener(canvas._oElement, 'mouseup', canvas.onMouseUp);
					YAHOO.util.Event.removeListener(canvas._oElement, 'mousemove', canvas.onMouseMove);
					
					//允许点入事件
					YAHOO.util.Event.on(canvas._oElement, 'click', canvas.onClick,canvas,true);
					break;
				//管理模式可以添加，移动图元
				case 'rightMenu_manage':
				
					//设置管理楼宇状态
					appContext.operateState = 'manage';
					//防止多次添加事件
					YAHOO.util.Event.removeListener(canvas._oElement, 'mousedown', canvas.onMouseDown);
					YAHOO.util.Event.removeListener(canvas._oElement, 'mouseup', canvas.onMouseUp);
					YAHOO.util.Event.removeListener(canvas._oElement, 'mousemove', canvas.onMouseMove);
					//可以移动图元
					YAHOO.util.Event.on(canvas._oElement, 'mousedown', canvas.onMouseDown, canvas, true);
					YAHOO.util.Event.on(canvas._oElement, 'mouseup', canvas.onMouseUp, canvas, true);
					YAHOO.util.Event.on(canvas._oElement, 'mousemove', canvas.onMouseMove, canvas, true);
					
					
				
					//禁止点入事件
				
					YAHOO.util.Event.removeListener(canvas._oElement, 'click', canvas.onClick);
					break;
				}
				
			}
	);
	//初始化添加图元模块
$("#addElementBlock").remove();
	var addElementBlock = $("<div id='addElementBlock'><ul></ul></div>");
	var addElement = $("<li><img id='addElement_building' src='"+appContext.getPublicPath()+"img/building.jpg' /></li>");

		addElementBlock.find("ul").append(addElement);
		$("body").append(addElementBlock);
		addElementBlock.css("left",canvasContext.getCurrentLeft()+canvas._oConfig.width+'px')
		 .css("top",canvasContext.getCurrentTop()+200+'px').css("display","none").css("position","absolute");
		addElementBlock.effect('pulsate',{mode:'show',},500,function(){});
		//alert(	$("#addElement_building").outerWidth());
		//alert(canvasContext.getCurrentTop()+canvasContext.getCurrentHeight());
		var imgHeight = $("#addElement_building").outerHeight();
		var imgWidth = $("#addElement_building").outerWidth();
		var x1 = canvasContext.getCurrentLeft();
		var y1 = canvasContext.getCurrentTop();
		var x2 = canvasContext.getCurrentLeft()+canvasContext.getCurrentWidth();
		var y2 = canvasContext.getCurrentTop()+canvasContext.getCurrentHeight()-imgHeight;
		$("#addElement_building").draggable(
				{
					start:function(){
						//alert($(this).outerWidth());
					},
					containment:[x1,y1,x2,y2],
					cursor:"move",
					helper:"clone",
					opacity:0.5,
					stop: function(e,ui){
						//alert(this.id);
					
						//添加楼宇
						var x,y;
					//	alert($(this).outerHeight());
						if(e.offsetX == undefined){
						
							x = e.pageX - parseInt($("#topCanvas").css("left"));
							y = e.pageY - parseInt($("#topCanvas").css("top")) ;
							
							
							// alert(x+','+y);
						}
						else{
						 x =e.offsetX  ;
						 y = e.offsetY ;
						}
					
						//防止图元出界
					if(x < 0) x = 0;
					if(y < 0) y = 0;
					if(x > canvasContext.getCurrentWidth()) x = canvasContext.getCurrentWidth()- imgWidth;
					if(y > canvasContext.getCurrentHeight()) y = canvasContext.getCurrentHeight() - imgHeight;
					lockScreen();
					faddBuilding(x,y);
					}
				}
				);
		
};
//隐藏工程模式下的管理菜单
var HideProjectRightMenu = function(){
	clearMoveEvent();
	//$("#rightMenu").remove();
	//取消移动图元事件
	
	$("#managebutton").effect('clip',{mode:'hide',direction:'level'},500,function(){
		$("#managebutton").css('top','-100px').css('left','-1000px').css("display","none");
	});
	$("#addElementBlock").effect('clip',{mode:'hide',direction:'level'},500,function(){
		$("#addElementBlock").css('top','-100px').css('left','-1000px');
	});
};


var addModeMenu = function(mode){
	$("#modeMenu").remove();
	var modeMenu = $("<details id='modeMenu'><summary></summary><ul></ul></details>");
	$("#leftMenuNav").append(modeMenu);
	var modeMenuItems = null;
	switch(mode){
	case 'scanMode':
		modeMenu.find("summary").html("查看设置");
		break;
	case 'maintainMode':
		modeMenu.find("summary").html("指令设置");
		modeMenuItems = $("<li id='linkInquery'>链路查询</li><li id='passwordEdit'>密码修改</li>");
		break;
	case 'projectMode':
		modeMenu.find("summary").html("工程设置");
		modeMenuItems = $("<li id='manageBuilding'>大厦管理</li><li id='managePoint'>信息点管理</li><li id='manageUser'>用户管理</li><li id='passwordEdit'>密码修改</li>");
		break;
	}
	modeMenu.find("ul").append(modeMenuItems);
	
	//css
	
	//event
	modeMenu.find("li").click(
			function(){
				switch(this.id){
				case 'linkInquery':
					
					break;
				case 'manageBuilding':
					break;
				case 'managePoint':
					break;
				case 'manageUser':
					break;
				case 'passwordEdit':
					fEditPassword();
				
					break;
				}
			}
	);
	

};
var fEditPassword = function(){
	lockScreen();
	var editPasswordBlock = $("<form id='updatePasswordForm'><table></table></form>");
	$("body").append(editPasswordBlock);
	editPasswordBlock.draggable({cursor:"move"});
	var thead = $("<thead><tr><th colspan='3'>密码修改</th></tr></thead>");
	editPasswordBlock.find("table").append(thead);
	
	var tbody = $("<tbody>" +
			"<tr><td>&nbsp;原始密码&nbsp;</td><td><input id='original' type='password' required/></td><td id='originalTips'>&nbsp;</td></tr>" +
			"<tr><td>&nbsp;新密码&nbsp;</td><td><input id='new' type='password' required/></td></td><td id='newTips'>&nbsp;</td></tr>"+
			"<tr><td>&nbsp;确认密码&nbsp;</td><td><input id='confirm' type='password' required/></td></td><td id='confirmTips'>&nbsp;</td></tr>"+
		"</tbody>");
	editPasswordBlock.find("table").append(tbody);
	
	var tfoot = $("<tfoot>" +
			"<tr ><th colspan='3'><input type='submit' id='edit' value='修改'/>&nbsp;<input id='reset' type='reset'/>&nbsp;<input id='cancle' type='button' value='关闭'/>&nbsp;</th></tr>" +
			"</tfoot>");
	editPasswordBlock.find("table").append(tfoot);
	//css
	editPasswordBlock.css("position","absolute")
	.css("left",screen.width/2)
	.css("top",screen.height/2)
	.css("border","1px solid")
	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'");
	

	
	//event
	editPasswordBlock.find("input").click(
		function(){
			switch(this.id){
				case "edit":			
					break;
				case "reset": break;
				case "cancle":
					unlockScreen();
					editPasswordBlock.remove();
					break;
			}
		}
		
	);
	editPasswordBlock.find("input").blur(
			function(){
				switch(this.id){
				case "new":			
				case "confirm": 
					//验证密码
					var newPassword = editPasswordBlock.find("input[id='new']").val();
					var confirmPassword =  editPasswordBlock.find("input[id='confirm']").val();
					
					if(newPassword != confirmPassword){
						editPasswordBlock.find("td[id='newTips']").html("error");
						editPasswordBlock.find("td[id='confirmTips']").html("两次密码输入不一样");
						//css
						editPasswordBlock.find("td[id='newTips']").css("color","red");
						editPasswordBlock.find("td[id='confirmTips']").css("color","red");
					}
					else{
						editPasswordBlock.find("td[id='newTips']").html("ok");
						editPasswordBlock.find("td[id='confirmTips']").html("ok");
						//css
						editPasswordBlock.find("td[id='newTips']").css("color","green");
						editPasswordBlock.find("td[id='confirmTips']").css("color","green");
					}
					break;
			
			}
			}
			);
	
	
	$("form[id='updatePasswordForm']").submit(
			function(){
			//	alert('submit');
			
				return false;
			}
			);
};
var resizeCanvas = function(e){
	var eSrc;
	//alert(123);
	eSrc = e.target  ;
//	alert(eSrc.id);
	
	if('hide' == eSrc.id  || 'show' == eSrc.id  ){
		var oLeftMenu = document.getElementById('leftMenu');
	

		var config = {};
		//now left is hidden,show it
		if('none' == oLeftMenu.style.display ){	
			//允许调整大小
			YAHOO.util.Event.on(window, 'mousedown',adjustCanvasStart, null, true);
			YAHOO.util.Event.on(window, 'mousemove',adjustCanvas, null, true);
			YAHOO.util.Event.on(window, 'mouseup',adjustCanvasOver, null, true);
			//$("#leftMenu").css("display",'inline-block');
			 $("canvas").effect('puff',{mode:'hide'},200,function(){});
			 $("#leftHide").effect('puff',{mode:'hide'},200,function(){
				 
				 $("#leftMenu").css("width",appContext.getLeftMenuOriginalWidth()+'px').css("height",canvasContext.getOriginalHeight()-parseInt($("#leftMenu").css("padding")) *2+'px');
				
		
				//document.getElementById('hide').style.display = 'inline-block';
				//document.getElementById('show').style.display = 'none';
				$("#hide").css("display","inline-block");
				$("#show").css("display","none");
			
				
				//缩小

				config.width =canvasContext.getOriginalWidth();	
			
				canvasContext.setCurrentWidth(config.width);
				config.height =canvasContext.getOriginalHeight();	
				
			//恢复默认参数
			canvasContext.setCurrentPosition(canvasContext.getOriginalLeft(),canvasContext.getOriginalTop());
			
			appContext.setLeftMenuCurrentWidth(appContext.getLeftMenuOriginalWidth());
			
				
					canvas._oConfig = config; 
	 
				//	canvas._oElement.width = config.width ;
				//	canvas._oElement.height = config.height ;
				
					canvas.reset("topCanvas",config);
					// $("canvas[id*="+canvas._oElement.id+"]").css("width",config.width +'px').css("height",config.height +'px');
					// alert(canvasContext.getOriginalLeft());
				//	 $("canvas[id*="+canvas._oElement.id+"]").css("left",canvasContext.getOriginalLeft() +'px');
				//	alert( $("canvas[id*="+canvas._oElement.id+"]").css("left"));
					 $("#canvasContainer").css("width",config.width +'px').css("height",config.height +'px');
					
					 resetAllCanvas();
				
					 if(3 != canvasContext.getCurrentLayer()){	
						 canvas.setCanvasBackground(canvas._backgroundImg);
						 }
					 else{
						 //在弱电间，显示机柜层
						canvas.drawMachineCabinet();
					 }
					 canvas.renderAll();
					 
					 
				 $("#leftMenu").effect('bounce',{mode:'show',direction:'left',distance:20,times:2},500,function(){}); 
				 $("canvas").effect('puff',{mode:'show',percent:50},500,function(){});
				 $("#leftHide").effect('pulsate',{mode:'show',percent:50},500,function(){});
			 });
			 
		
			
	
		}
		else{   
			                             //hide the left menu
			//最大化后取消调整窗口功能

			YAHOO.util.Event.removeListener(window, 'mousedown',adjustCanvasStart);
			YAHOO.util.Event.removeListener(window, 'mousemove',adjustCanvas);
			YAHOO.util.Event.removeListener(window, 'mouseup',adjustCanvasOver);
			//隐藏左边栏
		 var other = $("#leftMenu").innerWidth() -  $("#leftMenu").width();
	
			//$("#leftMenu").css("display",'none');
		 $("canvas").effect('puff',{mode:'hide'},200,function(){});
		 $("#leftHide").effect('puff',{mode:'hide'},200,function(){});
		 
		 $("#leftMenu").effect('explode',{mode:'hide',pieces:20},200,function(){
		
		
				//$("#leftMenu").removeClass("leftMenu");
				$("#hide").css("display","none");
				$("#show").css("display","inline-block");
		
				//放大
		
				
				config.width = canvasContext.getOriginalWidth() + appContext.getLeftMenuOriginalWidth() + other; 
			
				//alert(config.width);
				config.height = canvas._oConfig.height;
			
				
				 canvas._oConfig = config; 
		
					
					
				//canvas._oElement.width = config.width ;
				//canvas._oElement.height = config.height;

				 
				// $("canvas[id*="+canvas._oElement.id+"]").css("width",config.width +'px').css("height",config.height +'px');

				 //重绘画布大小
		
				
				//设置放大后位置

				// $("canvas[id*="+canvas._oElement.id+"]").css("left",canvasContext.getOriginalLeft()-appContext.getLeftMenuOriginalWidth()-parseInt($("#leftMenu").css("padding"))*2+'px');
				 $("#canvasContainer").css("width",config.width +'px').css("height",config.height +'px');
				 //	canvas._oElement.style.left = 60 +'px';
				//alert(	canvas._oElement.style.left);
			
				
				
				//drawAll(canvasContext.getCurrentLayer());
				 
				 
				 //背景重绘
				// canvas.clearContainerCanvas();
				// canvas.clearBackgroundCanvas();
				// canvas.clearImages();
			
			canvas.reset("topCanvas",config);
			
				 resetAllCanvas();
		
				 if(3 != canvasContext.getCurrentLayer()){	
					 canvas.setCanvasBackground(canvas._backgroundImg);
					 }
				 else{
					 //在弱电间，显示机柜层
					canvas.drawMachineCabinet();
				 }
			
				 canvas.renderAll();
				 
				 $("canvas").effect('puff',{mode:'show',percent:50},500,function(){});
				 $("#leftHide").effect('pulsate',{mode:'show',percent:50},500,function(){});
				
			});
		
			

		}
	}
	
	
};

/**
 * 根据当前Canvas区域大小重新设置画布层
 * 重置Container、Helper、Info画布**/
var resetAllCanvas =function(){
	 $("#"+canvas._oElement.id+'-canvas-container').remove();
	 $("#"+canvas._oElement.id+'helperCanvas').remove();
	 $("#"+canvas._oElement.id+'infoCanvas').remove();
	 $("#"+canvas._oElement.id+'-canvas-background').remove();
	 
	 canvas._createCanvasBackground();
	 canvas._createContainer();
	 canvas._createHelperCanvas();
	 canvas._createInfoCanvas();
};
var adjustCanvasStart = function(e){
	var eSrc;
	eSrc = e.target  ;
	//alert(eSrc.id);
	if("leftHide" == eSrc.id ){
	//设置拖动标志
		appContext.setMouseDown(true);
		//记录正在调整大小
		appContext.adjustCanvasOn = true;
	//appContext.mousePosition = e.PageX;
	//alert(e.pageX);
	//记录鼠标按下位置
		appContext.setMouseDownX(e.pageX);
	
	
	
	//记录变化时位置
	//alert(parseInt(document.getElementById('leftMenu').style.width));

	
	//alert(appContext.getMouseDownX());
	}
};
var adjustCanvasOver = function(e){
		if(appContext.adjustCanvasOn){
		
			//调整大小，工程模式下恢复调整状态
			
			if('projectMode' == appContext.getCurrentMode() && 'manage' == appContext.operateState)
				{
				//设置管理楼宇状态
				appContext.operateState = 'manage';
				//防止多次添加事件
				YAHOO.util.Event.removeListener(canvas._oElement, 'mousedown', canvas.onMouseDown);
				YAHOO.util.Event.removeListener(canvas._oElement, 'mouseup', canvas.onMouseUp);
				YAHOO.util.Event.removeListener(canvas._oElement, 'mousemove', canvas.onMouseMove);
				//可以移动图元
				YAHOO.util.Event.on(canvas._oElement, 'mousedown', canvas.onMouseDown, canvas, true);
				YAHOO.util.Event.on(canvas._oElement, 'mouseup', canvas.onMouseUp, canvas, true);
				YAHOO.util.Event.on(canvas._oElement, 'mousemove', canvas.onMouseMove, canvas, true);
				
				
			
				//禁止点入事件
			
				YAHOO.util.Event.removeListener(canvas._oElement, 'click', canvas.onClick);
				}
		//alert(parseInt(canvas._oElement.style.left));
		appContext.setMouseDown(false);
	//	alert(document.getElementById('leftMenu').style.width);
		var currentLeft =10+appContext.marginLeft+$('#leftMenu').outerWidth()+$('#leftHide').outerWidth();
		//alert(currentLeft);
		canvasContext.setCurrentPosition(currentLeft,220);
	
		canvasContext.setCurrentWidth(canvas._oElement.width);
	

		appContext.setLeftMenuCurrentWidth($('#leftMenu').width());
		resetAllCanvas();
		 if(3 == canvasContext.getCurrentLayer() ){
			 canvas.drawMachineCabinet();
		 }
		 canvas.setCanvasBackground(canvas._backgroundImg);
		canvas.renderAll();
		appContext.adjustCanvasOn = false;
		}

};





var adjustCanvas = function(e){
	var eSrc;
	eSrc = e.target  ;
	if(null == eSrc.id  ||undefined == eSrc.id  ){
		appContext.setMouseDown(false);
	}
	var oLeftMenu = document.getElementById('leftMenu');
	
	var config = {};
	if(true == appContext.getMouseDown()   && e.pageX <  1000+appContext.marginLeft && e.pageX >  appContext.marginLeft + parseInt($("#leftHide").outerWidth())+ parseInt($("#leftHide").css("margin") ) * 2){

		
		//记录鼠标移动距离
		var dragDist = appContext.getMouseDownX() - e.pageX;
	
		if(dragDist < 0 )//右移
		{
			
			//擦除之前的背景
			//canvas._oContextBackground.clearRect( 0, 0, canvas._oConfig.width, canvas._oConfig.height);
			
			
			oLeftMenu.style.width =appContext.getLeftMenuCurrentWidth()- dragDist +'px';
			config.width = canvasContext.getCurrentWidth() + dragDist; 
			config.height = canvasContext.getCurrentHeight();
		
			
			 canvas._oConfig = config; 
		
	
			 
			canvas._oElement.width = config.width ;
			canvas._oElement.height = config.height;
		
			 
		//	 $("canvas[id*="+canvas._oElement.id+"]").css("width",config.width +'px').css("height",config.height +'px');
	
		
			// $("canvas[id*="+canvas._oElement.id+"]").css("left", canvasContext.getCurrentLeft() -dragDist +'px');
			
			 $("#canvasContainer").css("width",config.width +'px').css("height",config.height +'px');
			 
			 canvas.reset("topCanvas",config);
			}
		else{//左移
			//canvas._oContextBackground.clearRect( 0, 0, canvas._oConfig.width, canvas._oConfig.height);
			oLeftMenu.style.width =appContext.getLeftMenuCurrentWidth()- dragDist +'px';
			config.width = canvasContext.getCurrentWidth() + dragDist; 
			config.height =canvasContext.getCurrentHeight();
		
			
			 canvas._oConfig = config; 
		
	
			 
			canvas._oElement.width = config.width ;
			canvas._oElement.height = config.height;

			 
			 
			// $("canvas[id*="+canvas._oElement.id+"]").css("width",config.width +'px').css("height",config.height +'px');
	
			// $("canvas[id*="+canvas._oElement.id+"]").css("left",canvasContext.getCurrentLeft()  -dragDist +'px');
			
		 $("#canvasContainer").css("width",config.width +'px').css("height",config.height +'px');
			
		 canvas.reset("topCanvas",config);
			
		}
	
		
	}
		//alert(appContext.getMouseDown());
};

var lockScreen = function(){
	canvas._createLockLayer();
};
	
var unlockScreen = function(){
	$("#"+canvas._oElement.id+"-canvas-lockLayer").remove();
};

var clearMoveEvent = function(){
	//允许点入事件
	
	YAHOO.util.Event.removeListener(canvas._oElement, 'click', canvas.onClick);
	YAHOO.util.Event.on(canvas._oElement, 'click', canvas.onClick,canvas,true);
	YAHOO.util.Event.removeListener(canvas._oElement, 'mousedown', canvas.onMouseDown);
	YAHOO.util.Event.removeListener(canvas._oElement, 'mouseup', canvas.onMouseUp);
	YAHOO.util.Event.removeListener(canvas._oElement, 'mousemove', canvas.onMouseMove);
};
var initCanvas = function(){
	 

	var marginLeft = (screen.width-1020)/2;
	canvas = new Canvas.Element();
	var config = {width:800,height:600};
	
	//config.width = parseInt($('canvid1').style.width);
//	config.height = parseInt($('canvid1').style.height);
	canvasContext.setOriginalWidth(config.width);
	canvasContext.setOriginalHeight(config.height);
	
	canvasContext.setCurrentWidth(config.width);
	canvasContext.setCurrentHeight(config.height);
	
	canvas.init('topCanvas',  config);

	//记录画布位置
	var canvasLeft = marginLeft+$("#leftMenu").outerWidth()+$("#leftHide").outerWidth();
	
	//alert($("#leftMenu").outerWidth());
	canvasContext.setCurrentPosition(canvasLeft,220);
	canvasContext.setOriginalPosition(canvasLeft,220);

	appContext.building = new Image();
	
	appContext.building.onload = function(){
		
		drawAll(canvasContext.getCurrentLayer());	
	};
	appContext.building.src = appContext.getPublicPath() + 'img/building.jpg';
	
	appContext.wholeBuilding = new Image();
	appContext.wholeBuilding.src =  appContext.getPublicPath() + 'img/wholeBuilding.jpg';
	
	appContext.layerRoom = new Image();
	appContext.layerRoom.src =  appContext.getPublicPath() + 'img/layerRoom.jpg';
	
	appContext.indexImg = new Image();
	appContext.indexImg.src =  appContext.getPublicPath() + 'img/indexImg.jpg';
	
	//drawAll(canvasContext.getCurrentLayer());		


};

var initApp = function(){
	//如果屏幕分辨率较低
	if(screen.width < 1020)
		appContext.marginLeft = 10;
	else
	appContext.marginLeft = (screen.width-1020)/2;
		//注册基本事件

	$("#mainFrame").css("margin-left",appContext.marginLeft + 'px' );
	$("footer").css("margin-left",appContext.marginLeft +'px');
	$("header#webTitle").css("margin-left",appContext.marginLeft+'px' );
	
	YAHOO.util.Event.on(window, 'click',resizeCanvas, null, true);
	YAHOO.util.Event.on(window, 'mousedown',adjustCanvasStart, null, true);
	YAHOO.util.Event.on(window, 'mousemove',adjustCanvas, null, true);
	YAHOO.util.Event.on(window, 'mouseup',adjustCanvasOver, null, true);
	//标志当前鼠标状态
	appContext.mouseup = true;
	
		//onScanMode();
	 //记录左侧菜单原始宽度，用于变换窗口大小
		appContext.setLeftMenuOriginalWidth($('#leftMenu').width());
		appContext.setLeftMenuCurrentWidth($('#leftMenu').width());
		//默认为浏览模式
		appContext.setCurrentMode("scanMode");
		$("#"+appContext.getCurrentMode()).addClass("topNavUrlChosed");
		//alert($('#leftMenu').width());
	//	$("#leftMenuUrl li:odd").css("background","pink");
		//$("canvas").css("border"," 1px solid red");
		
	//	$("canvas[id='topCanvas']").css("border"," 1px solid black");
		
		//根据楼宇数构建导航菜单
		//从数据获取楼宇、楼层、房间等信息构建导航菜单
		var menuNavNode = $("#leftMenuNav");
		
		//var cabinet1 = $(" <li><details><summary id='layerRoom1'>楼层1</summary><ul><li id='cabinet1'>弱电间1</li><li>弱电间2</li></ul></details></li>");
	
		//var wholeBuilding1 = $("<li><details><summary id='wholeBuilding1'>楼宇1</summary><ul></ul></details></li>");
	//	wholeBuilding1.find("ul").append(cabinet1);
		
		//var wholeBuilding2 = $("<li><details><summary>楼宇2</summary><ul></ul></details></li>");
		
		//var wholeBuilding3 = $("<li><details><summary>楼宇3</summary><ul></ul></details></li>");
		//var menu = $("<details><summary id='index'>导航</summary><ul><li></li></ul></details>");
	   
	//	 menuNavNode.append(menu);
		// menu.find("ul").eq(0).append(wholeBuilding1);
	   //  menu.find("ul").eq(0).append(wholeBuilding2);
	   //  menu.find("ul").eq(0).append(wholeBuilding3);
 
	  
		menuNavNode.find("li").css("display","block");
	     
		menuNavNode.find("li").mouseover(
	    		 function(){
	    			 $(this).css("color","silver");
	
	    		 }
	     )
	     				.mouseout(
	     						 function(){
	     			    			 $(this).css("color","black");
	     			    		 });
	     		
	     
	     
		menuNavNode.find("summary").click(
	    		 function(){
	    	
	    		 var val = this.id.split('_');
	    		 var oConfig = {};
	    		 switch(val[0]){
	    		 case 'index':
	    		
	    			    	//回到首页
	    		    	 	backToIndex();
	    			    	 
	    			 
	    			 break;
	    		 case 'building':
	    	
	    			    	//进入楼宇1
	    		    //ttt
	    		    	 oConfig.type = 'building';
	    		    	 oConfig.buildingId = val[1];
	    		    	 oConfig.buildingName = this.innerHTML;
	    		    	// alert(this.innerHTML);
	    		    	 stepIn(0,oConfig,canvas);
	    		 
	    			 break;
	    		 case 'floor':
	    		    	//进入楼宇1		 
    		    	 oConfig.type = 'floor';
    		    	 oConfig.floorId = val[1];
    		    	 oConfig.floorName = this.innerHTML;
	    		     stepIn(2,oConfig,canvas);
	    			 break;
	    		 
	    		 }
	    		 
	    		 
	    		 }
	     );
	     //进入机柜房间
		menuNavNode.find("li").click(function(){
			HideProjectRightMenu();
		
			 var oConfig = {};
			 var val = this.id.split('_');
			
	    	 switch(val[0]){
	    	 case 'room':
	    		 //房间类型2， 为配线间
	    		if(val[2] == 2){
	    			//类型为机柜
	    			oConfig.type = 'wiringRoom';
	    			//房间ID
	    			oConfig.roomId = val[1];
	    			appContext.currentRoomId = val[1];
	    			//清空信息
	    			appContext.switchArray = [];
	    			appContext.basArray = [];
	    			
	    			stepIn(3,oConfig,canvas);
	    		}
	    		 break;
	    	 }
	    	
	     });
		
		  $('img.menu_class').click(function () {
				$('ul.the_menu').slideToggle('medium');
			    }
		  );
	  //  $("header").find("").button({
	//    	icons : {primary : "ui-icon-triangle-1-s"} 
	 //   });
};

var initMultimedia = function(){

	//默认打开声效
	appContext.mediaOn = true;
	appContext.mediaMouseover = new Audio(appContext.getPublicPath()+'sound/mouseMoveIn.ogg');

	appContext.mediaMouseClickIn = new Audio(appContext.getPublicPath()+'sound/mouseClickIn.ogg');

	appContext.mediaMouseoverOnLayerPort = new Audio(appContext.getPublicPath()+'sound/mouseOverLayerPort.ogg');

	appContext.mediaChoseMode = new Audio(appContext.getPublicPath()+'sound/choseMode.ogg');

	appContext.mediaMouseOverSwitchPort = new Audio(appContext.getPublicPath()+'sound/mouseOverSwitchPort.ogg');
	
	appContext.mediaAddSwitch =  new Audio(appContext.getPublicPath()+'sound/addSwitch.ogg');
	
	appContext.mediaWarning =  new Audio(appContext.getPublicPath()+'sound/warning.ogg');
	
	appContext.port = new Image();
	appContext.port.src = appContext.getPublicPath() + 'img/portState/port1.png';
	
	appContext.portUsing = new Image();
	appContext.portUsing.src = appContext.getPublicPath() + 'img/portState/port2.png';
	
	appContext.switcher = new Image();
	appContext.switcher.src = appContext.getPublicPath() + 'img/switch1.jpg';
	
	appContext.BasMachine = new Image();
	appContext.BasMachine.src = appContext.getPublicPath() + 'img/BAS.png';


	appContext.deviceBlank = new Image();
	appContext.deviceBlank.src = appContext.getPublicPath() + 'img/deviceBlank.png';
	
	appContext.pointInRoom = new Image();
	appContext.pointInRoom.src = appContext.getPublicPath() + 'img/portState/pointAvalible.png';
	
	appContext.floor = new Image();
	
	appContext.floor.src = appContext.getPublicPath() + 'img/floor.png';
	$("ul[id='topNavUrl'] > li").hover(
			function(){
				appContext.mediaMouseover.load();
				appContext.mediaMouseover.play();
			},
			function(){}
	);
	
	/*
	$("aside[id='leftMenu'] > details").children().hover(
			function(){
				appContext.mediaMouseover.load();
				appContext.mediaMouseover.play();
			},
			function(){}
	);
	*/
	
};



var show = function(){
		$("#webTitle").show(1000);
	//	$("#mainFrame").show(1500,function(){
		//$("#mainFrame").addClass("completemainFrame");
				
		//});
		$("#leftMenu").show(1000);
		$("#footerUrl").show(1000);	
		
};
var faddPoint = function(x,y){
	var pointInfoBlock = $("<form id='pointForm'><table></table></form>") ;
	var tableItem = [];
	tableItem[tableItem.length] = $("<tr><td>房间编号</td><td><input id='pointRoomCode' type='text' required/></td><td id='checkInfo'>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tr><td>房间名</td><td><input id='pointRoomName' type='text' required/></td><td>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tr><td>房间描述</td><td><textarea id='pointRoomComment' line='5' type='textarea' required/></td><td>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tr><td>信息点编号</td><td><input id='pointCode' type='text' required/></td><td>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tr><td>信息点IP</td><td><input id='pointIp' type='text' required/></td><td>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tr><td>信息点人员</td><td><input id='pointPerson' type='text' required/></td><td>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tr><td>人员电话</td><td><input id='pointPhone' type='text' required/></td><td>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tr><td>信息点描述</td><td><textarea id='pointComment' line='5' type='textarea' required/></td><td>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tfoot><th><input type='submit' id='add' value='添加' disabled/></th><th><button id='cancle'>取消</button></th><th>&nbsp;</th></tfoot>");
	for(var i = 0;i < tableItem.length; i++){
		pointInfoBlock.find("table").append(tableItem[i]);
	}
	$("body").append(pointInfoBlock);
	
	pointInfoBlock.draggable({
		cursor:"move",
			});
	//css
	pointInfoBlock.css("position","absolute")
	.css("left",screen.width/2+'px')
	.css("top",screen.height/2+'px')
	.css("background","white")	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'");
	
	pointInfoBlock.find("th").css("text-align","center");

	//event
	pointInfoBlock.find("input[id='pointRoomCode']").blur(
			function(){
				var roomCode = pointInfoBlock.find("input[id='pointRoomCode']").val();
				$.ajax({
					url:"room/checkexist",
					type:"get",
					//controller:'test',
					//action:'test',
					//调整设备位置,0号请求为调整位置
					data : {floorId : appContext.currentFloorId, roomCode : roomCode },
					dataType:"json",
					success:function(existFlag){
						if(undefined == existFlag || null == existFlag){
							alert("room/checkexist error");
						}
						else{
							//可用
							if(!existFlag){
								pointInfoBlock.find("td[id='checkInfo']").html("可用").css("color","green");
								  pointInfoBlock.find("input[id='add']").removeAttr("disabled");
								//	appContext.ajaxObj.submit = true;
							}
							else if(existFlag == true){
								pointInfoBlock.find("td[id='checkInfo']").html("已存在").css("color","red");
								//appContext.ajaxObj.submit = false;
								pointInfoBlock.find("input[id='pointRoomCode']")[0].focus();
								pointInfoBlock.find("input[id='pointRoomCode']")[0].select();
								  pointInfoBlock.find("input[id='add']").attr("disabled","disabled");
							}
							
						}
					}
					});
			}
	);
	
	pointInfoBlock.find("button").click(
			function(){
				switch(this.id){
							
				case 'cancle':
					break;
				}	
				pointInfoBlock.remove();
				unlockScreen(); 
			
				
			});
	$("form[id='pointForm']").submit(
			function(){
				var addpointRoomCode = pointInfoBlock.find("input[id='pointRoomCode']").val();	
				var addpointRoomName = pointInfoBlock.find("input[id='pointRoomName']").val();
				var addpointRoomComment = pointInfoBlock.find("textarea[id='pointRoomComment']").val();
				var addpointCode = pointInfoBlock.find("input[id='pointCode']").val();
				var addpointComment = pointInfoBlock.find("textarea[id='pointComment']").val();
				var addpointPerson = pointInfoBlock.find("input[id='pointPerson']").val();
				var addpointPhone = pointInfoBlock.find("input[id='pointPhone']").val();
				var addpointIp = pointInfoBlock.find("input[id='pointIp']").val();
				//使用html标签检验 
				//	if(addpointRoomCode && addpointCode && addpointComment && addpointPerson && addpointPhone &&  addpointIp && appContext.ajaxObj.submit){
						//	alert(appContext.currentFloorId);
							//写入数据库
						$.ajax({
							url:"point/add",
							type:"post",
							//controller:'test',
							//action:'test',
							//调整设备位置,0号请求为调整位置
						
							data : {addType:1,floorId :appContext.currentFloorId,roomCode :addpointRoomCode,roomName:addpointRoomName,roomComment:addpointRoomComment,pointCode : addpointCode, pointPerson: addpointPerson,pointPhone : addpointPhone,pointIp:addpointIp ,pointComment:addpointComment,point_x : x,point_y : y },
							dataType:"json",
							success:function(pointId){
								if(undefined == pointId ){
									alert('point/add error');
								}
								else{
								
									//添加楼宇 
								
									var oConfig = {};
									//alert(person.name+','+person.password);
								
										//alert(build[i].BUILDING_NAME);
										
								
								oConfig.type = 'point';
							     oConfig.Id = pointId;
							     oConfig.Ip = addpointIp;
							     oConfig.Person = addpointPerson;
							     oConfig.left = x;
							     oConfig.top = y;
							     oConfig.Phone = addpointPhone;
							    // alert(oConfig.left+','+oConfig.top);
							   oConfig.comment = addpointComment;
						         oConfig.code = addpointCode;
							     oConfig.randomposition = false;
										//一行放四个
									//	var row = i % 4;
									//	var col =Math.floor(i/4); 
									//	oConfig.left = 150 * (row+1);
									//	oConfig.top = 100 + 150*col;
										oConfig.left = x;
										oConfig.top =	y;
										oConfig.randomposition = false;
									var	img = new Canvas.Img(appContext.pointInRoom, oConfig);
									
									//绘制楼
										canvas.addImage(img);
										unlockScreen(); 
									pointInfoBlock.remove();
								}
								
							}
							});
					
						
					//}	
			
				
					return false;
		
			});
	//
	///
};
var faddFloor = function(x,y){
	var floorInfoBlock = $("<form id='floorForm'><table></table></form>") ;
	var tableItem = [];
	tableItem[tableItem.length] = $("<tr><td>楼层编号</td><td><input id='floorCode' type='text' required/></td><td id='checkInfo'>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tr><td>楼层名称</td><td><input id='floorName' type='text' required/></td><td>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tr><td>楼宇描述</td><td><textarea id='floorComment' line='5' type='textarea' required/></td><td>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tfoot><th><input type='submit' id='add' value='添加' disabled/></th><th><button id='cancle'>取消</button></th><th>&nbsp;</th></tfoot>");
	for(var i = 0;i < tableItem.length; i++){
		floorInfoBlock.find("table").append(tableItem[i]);
	}
	$("body").append(floorInfoBlock);
	floorInfoBlock.draggable({cursor:"move"});
	//css
	floorInfoBlock.css("position","absolute")
	.css("left",screen.width/2+'px')
	.css("top",screen.height/2+'px')
	.css("background","white")	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'");
	
	floorInfoBlock.find("th").css("text-align","center");
	//event

	floorInfoBlock.find("input[id='floorCode']").blur(
			function(){
				//检查本楼宇内该楼层编号是否存在
				var floorCode = $(this).val();
			//	appContext.ajaxObj.submit = false;
				if(floorCode){
					//ajax
					$.ajax({
						url:"floor/checkexist",
						type:"get",
						//controller:'test',
						//action:'test',
						//调整设备位置,0号请求为调整位置
						data : {buildingId : appContext.currentBuildingId,floorCode : floorCode },
						dataType:"json",
						success:function(existFlag){
							if( undefined == existFlag || null == existFlag){
								alert("floor/checkexist error");
							}
							else{
								//可用
								if(!existFlag){
									//appContext.ajaxObj.submit = true;
									floorInfoBlock.find("td[id='checkInfo']").html("可用").css("color","green");
									  floorInfoBlock.find("input[id='add']").removeAttr("disabled");
								}
								else{
								//	appContext.ajaxObj.submit = false;
									floorInfoBlock.find("td[id='checkInfo']").html("已经存在").css("color","red");
									floorInfoBlock.find("input[id='floorCode']")[0].focus();
									floorInfoBlock.find("input[id='floorCode']")[0].select();
									 floorInfoBlock.find("input[id='add']").attr("disabled","disabled");
								}
							}
						}
						});
				}
			}
	);
	floorInfoBlock.find("button").click(
			function(){
				switch(this.id){
							
				case 'cancle':
					break;
				}
				floorInfoBlock.remove();
				unlockScreen(); 
		
				
			});
	$("form[id='floorForm']").submit(
			function(){
				var addfloorName = floorInfoBlock.find("input[id='floorName']").val();
				var addfloorCode = floorInfoBlock.find("input[id='floorCode']").val();
				var addfloorComment = floorInfoBlock.find("textarea[id='floorComment']").val();
			
			
				
				//	if(addfloorName && addfloorCode && addfloorComment && appContext.ajaxObj.submit ){
						//写入数据库
						$.ajax({
							url:"floor/add",
							type:"post",
							//controller:'test',
							//action:'test',
							//调整设备位置,0号请求为调整位置
							
							data : {buildingId :appContext.currentBuildingId,floorName : addfloorName, floorCode : addfloorCode,floorComment : addfloorComment ,floor_x : x,floor_y : y },
							dataType:"json",
							success:function(floorId){
								if(undefined == floorId ){
									alert('floor/add error');
								}
								else{
								
									//添加楼宇 
								
									var oConfig = {};
									//alert(person.name+','+person.password);
								
										//alert(build[i].BUILDING_NAME);
										
										oConfig.type = 'floor';
										oConfig.floorId = floorId;
										oConfig.floorName = addfloorName;
										oConfig.Code = addfloorCode;
						
							     oConfig.comment = addfloorComment;
										//一行放四个
									//	var row = i % 4;
									//	var col =Math.floor(i/4); 
									//	oConfig.left = 150 * (row+1);
									//	oConfig.top = 100 + 150*col;
										oConfig.left = x;
										oConfig.top =	y;
										oConfig.randomposition = false;
									var	img = new Canvas.Img(appContext.floor, oConfig);
									
									//绘制楼
										canvas.addImage(img);
										unlockScreen(); 
									floorInfoBlock.remove();
								}
							}
							});
					
						
				//	}	
			
				
					return false;
		
			});
};
var faddBuilding = function(x,y){
	//弹出填写添加楼宇信息框
	var buildingInfoBlock = $("<form id='buildingForm'><table></table></form>") ;

	var tableItem = [];
	tableItem[tableItem.length] = $("<tr><td>楼宇编号</td><td><input id='buildingCode' type='text' required/></td><td id='checkInfo'>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tr><td>楼宇名称</td><td><input id='buildingName' type='text' required/></td><td>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tr><td>楼宇描述</td><td><textarea id='buildingComment' line='5' type='textarea' required/></td><td>&nbsp;</td></tr>");
	tableItem[tableItem.length] = $("<tfoot><th><input type='submit' id='add' value='添加' disabled/></th><th><button id='cancle'>取消</button></th><th>&nbsp;</th></tfoot>");
	for(var i = 0;i < tableItem.length; i++){
		buildingInfoBlock.find("table").append(tableItem[i]);
	}
	//加入DOM
	$("body").append(buildingInfoBlock);
	//使表格能拖动
		$("#buildingForm").draggable({cursor:"move"});
	//css
	buildingInfoBlock.css("position","absolute")
.css("left",screen.width/2+'px')
.css("top",screen.height/2+'px')
.css("background","white")	.css("background-image","url('"+appContext.getPublicPath()+"img/formbg.jpg'");
	
buildingInfoBlock.find("th").css("text-align","center");
	//event
buildingInfoBlock.find("input[id='buildingCode']").blur(
		function(){
			//alert('123');
			//检测该编号是否已经存在
			//ajax
			//alert($(this).val());
			var buildingCode = $(this).val();
		//	appContext.ajaxObj.submit = false;
			if( undefined != buildingCode && buildingCode){
				$.ajax({
					url:"building/checkexist",
					type:"get",
					//controller:'test',
					//action:'test',
					//调整设备位置,0号请求为调整位置
					data : {buildingCode : buildingCode},
					dataType:"json",
					success:function(existFlag){
							if( undefined == existFlag){
								alert("building/checkexist error");
							}
							else{
							
								//不存在，可以添加
								if(!existFlag){
									buildingInfoBlock.find("td[id='checkInfo']").html("可以");
									buildingInfoBlock.find("td[id='checkInfo']").css("color","green");
									 buildingInfoBlock.find("input[id='add']").removeAttr("disabled");
								//	appContext.ajaxObj.submit = true;
								}
								//不可使用
								else if(existFlag){
									buildingInfoBlock.find("td[id='checkInfo']").html("已经存在");
									buildingInfoBlock.find("td[id='checkInfo']").css("color","red");
									buildingInfoBlock.find("input[id='buildingCode']")[0].focus();
									buildingInfoBlock.find("input[id='buildingCode']")[0].select();
									buildingInfoBlock.find("input[id='add']").attr("disabled","disabled");
									//$(this).val().select();
									//appContext.ajaxObj.submit = false;
									
								
								}
							}
					}
					});
			}
		
			
		}
		);
	buildingInfoBlock.find("button").click(
			function(){
				switch(this.id){
							
				case 'cancle':
					break;
				}
				buildingInfoBlock.remove();
				unlockScreen(); 
				
				
			});
	$("form[id='buildingForm']").submit(
			function(){
				//	alert('123');
				var addbuildingName = buildingInfoBlock.find("input[id='buildingName']").val();
				var addbuildingCode = buildingInfoBlock.find("input[id='buildingCode']").val();
				var addbuildingComment = buildingInfoBlock.find("textarea[id='buildingComment']").val();
			
		
				
				//	if(addbuildingName && addbuildingCode && addbuildingComment && appContext.ajaxObj.submit ){
						//写入数据库
						$.ajax({
							url:"building/add",
							type:"post",
							//controller:'test',
							//action:'test',
							//调整设备位置,0号请求为调整位置
							
							data : {buildingName : addbuildingName, budildingCode : addbuildingCode,buildingComment : addbuildingComment ,building_x : x,building_y : y },
							dataType:"json",
							success:function(buildingId){
								if(undefined == buildingId ){
									alert('building/add error');
								}
								else{
								
									//添加楼宇 
								
									var oConfig = {};
									//alert(person.name+','+person.password);
								
										//alert(build[i].BUILDING_NAME);
										
										oConfig.type = 'building';
										oConfig.buildingId = buildingId;
										//一行放四个
									//	var row = i % 4;
									//	var col =Math.floor(i/4); 
									//	oConfig.left = 150 * (row+1);
									//	oConfig.top = 100 + 150*col;
										oConfig.buildingName = addbuildingName;
										oConfig.comment = addbuildingComment;
										oConfig.code = addbuildingCode;
										oConfig.left = x;
										oConfig.top =	y;
										oConfig.randomposition = false;
									var	img = new Canvas.Img(appContext.building, oConfig);
									
									//绘制楼
										canvas.addImage(img);
										buildingInfoBlock.remove();
										unlockScreen(); 
										
								}
							}
							});
					
						
				//	}	
			
					
					return false;
		
			}
			);
};

YAHOO.util.Event.on(window,'load',initCanvas,null,false);
YAHOO.util.Event.on(window,'load',initApp,null,false);
YAHOO.util.Event.on(window,'load',initMultimedia ,null,false);
YAHOO.util.Event.on(window,'load',show ,null,false);


window.oncontextmenu = function(){return false;};

