var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.webdw_gwt;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '37F1838540DAC900DA694BA92D195411';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 3.141592653589793, $intern_1 = {3:1, 6:1}, $intern_2 = {3:1}, $intern_3 = {7:1, 17:1, 3:1, 5:1, 4:1}, $intern_4 = {17:1, 24:1, 3:1, 5:1, 4:1}, $intern_5 = {18:1, 3:1, 5:1, 4:1}, $intern_6 = {40:1, 3:1, 6:1}, $intern_7 = {30:1, 3:1, 6:1}, $intern_8 = 4194303, $intern_9 = 524288, $intern_10 = {11:1, 3:1, 5:1, 4:1}, $intern_11 = {15:1, 12:1, 14:1, 13:1, 16:1, 10:1, 9:1}, $intern_12 = {251:1, 37:1}, $intern_13 = {15:1, 12:1, 14:1, 13:1, 16:1, 48:1, 10:1, 9:1}, $intern_14 = {23:1, 3:1, 5:1, 4:1}, $intern_15 = {19:1}, $intern_16 = {3:1, 25:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 286:1, 5:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, 2147483647), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_1()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_1()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(80, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_1 = function isArray_1(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_16(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 80);
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.wasStarted && $onComplete(this$static);
}

function $run(this$static, startTime){
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = 200;
  this$static.startTime = startTime;
  this$static.element = null;
  ++this$static.runId;
  $execute(this$static.callback, now_1());
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    $onUpdate(this$static, (1 + Math.cos($intern_0 + progress * $intern_0)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.offsetHeight = $getPropertyInt(this$static.curPanel.element, 'offsetHeight');
    this$static.offsetWidth = $getPropertyInt(this$static.curPanel.element, 'offsetWidth');
    $setPropertyImpl(this$static.curPanel.element.style, 'overflow', 'hidden');
    $onUpdate(this$static, (1 + Math.cos($intern_0)) / 2);
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    $onComplete(this$static);
    return false;
  }
  return true;
}

function Animation(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(86, 1, {});
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 86);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(130, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 130);
defineClass(271, 1, {});
var instance_0;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 271);
defineClass(72, 1, {72:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 72);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(219, 271, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 219);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(220, 72, {72:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 220);
function $cancelAnimationFrame(this$static, requestId){
  $remove_7(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {295:1, 3:1}, 78, this$static.animationRequests.array.length, 0, 1);
  curAnimations = dynamicCast($toArray(this$static.animationRequests, curAnimations), 295);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_7(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(221, 271, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_3(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 221);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(71, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 71);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(222, 71, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 222);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(78, 72, {72:1, 78:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 78);
function Duration(){
  this.start_0 = now_1();
}

defineClass(200, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 200);
function $initCause(this$static, cause){
  checkState_0(!this$static.cause);
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $toString(this$static){
  var className, msg;
  className = $getName(this$static.___clazz$);
  msg = this$static.getMessage();
  return msg != null?className + ': ' + msg:className;
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(6, 1, $intern_1);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  return $toString(this);
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 6);
function Exception(message){
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(35, 6, $intern_1);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 35);
function RuntimeException(){
  captureStackTrace(this, this.detailMessage);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(8, 35, $intern_1, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 8);
defineClass(104, 8, $intern_1);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 104);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(21, 104, {21:1, 3:1, 6:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 21);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function escapeChar(c, escapeTable){
  var lookedUp = escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeJsonForEval(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return s;
}

function escapeValue(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function getEscapeTable(){
  !escapeTable_0 && (escapeTable_0 = initEscapeTable());
  return escapeTable_0;
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

var escapeTable_0;
defineClass(253, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 253);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function getModuleBaseURL(){
  var key = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global = $wnd || self;
  return global[key] || $moduleBase;
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].execute_0();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 21)?dynamicCast(e, 21).getThrown():e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

defineClass(197, 253, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 197);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

var collector;
defineClass(264, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 264);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(105, 264, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 105);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

defineClass(265, 264, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 265);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(106, 265, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 106);
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (!reference) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function checkState_0(expression){
  if (!expression) {
    throw new IllegalStateException_0("Can't overwrite cause");
  }
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setPropertyInt(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $createScriptElement(doc, source){
  var elem;
  elem = $createElement(doc, 'script');
  elem.text = source;
  return elem;
}

function $eventGetAltKey(evt){
  return !!evt.altKey;
}

function $eventGetCtrlKey(evt){
  return !!evt.ctrlKey;
}

function $eventGetKeyCode(evt){
  return evt.keyCode | 0;
}

function $eventGetMetaKey(evt){
  return !!evt.metaKey;
}

function $eventGetShiftKey(evt){
  return !!evt.shiftKey;
}

function $eventGetSubPixelClientX(evt){
  return evt.clientX || 0;
}

function $eventGetSubPixelClientY(evt){
  return evt.clientY || 0;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $getSubPixelScrollLeft(elem){
  return elem.scrollLeft || 0;
}

function $createElement(doc, tagName){
  var container, elem;
  if (tagName.indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement('div')) , doc.__gwt_container);
    $setInnerHTML(container, '<' + tagName + '/>');
    elem = $getFirstChildElement(container);
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}

function $eventPreventDefault(evt){
  evt.returnValue = false;
}

function $getBoundingClientRectLeft(elem){
  try {
    return elem.getBoundingClientRect().left;
  }
   catch (e) {
    return 0;
  }
}

function $getBoundingClientRectTop(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function $getTagName(elem){
  var scopeName, tagName;
  tagName = elem.tagName;
  scopeName = elem.scopeName;
  if (scopeName == null || $equalsIgnoreCase('html', scopeName)) {
    return tagName;
  }
  return scopeName + ':' + tagName;
}

function $setInnerText(elem, text_0){
  elem.innerText = text_0 || '';
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

var currentEventTarget;
function $getAbsoluteLeft(elem){
  var doc;
  doc = elem.ownerDocument;
  return $getBoundingClientRectLeft(elem) + $getScrollLeft($equals(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body);
}

function $getAbsoluteTop(elem){
  var doc;
  doc = elem.ownerDocument;
  return $getBoundingClientRectTop(elem) + ((($equals(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).scrollTop || 0) | 0);
}

function $getScrollLeft(elem){
  if (elem.currentStyle.direction == 'rtl') {
    return -($getSubPixelScrollLeft(elem) | 0);
  }
  return $getSubPixelScrollLeft(elem) | 0;
}

function $getBodyOffsetLeft(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientLeft;
}

function $getBodyOffsetTop(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientTop;
}

function $getClientHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $getScrollHeight(this$static){
  return (($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0) | 0;
}

function $getScrollLeft_0(this$static){
  return $getScrollLeft($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body);
}

function $getScrollTop(this$static){
  return (($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollTop || 0) | 0;
}

function $getScrollWidth(this$static){
  return (($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0) | 0;
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(4, 1, {3:1, 5:1, 4:1});
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 4);
function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values(){
  $clinit_Style$Display();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_2, 7, 0, [NONE, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL]);
}

defineClass(7, 4, $intern_3);
var BLOCK, INITIAL, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, NONE, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 7, values);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(167, 7, $intern_3, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 167, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(176, 7, $intern_3, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 176, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(177, 7, $intern_3, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 177, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(178, 7, $intern_3, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 178, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(179, 7, $intern_3, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 179, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(180, 7, $intern_3, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 180, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(181, 7, $intern_3, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 181, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(182, 7, $intern_3, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 182, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(183, 7, $intern_3, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 183, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(168, 7, $intern_3, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 168, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(169, 7, $intern_3, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 169, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(170, 7, $intern_3, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 170, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(171, 7, $intern_3, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 171, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(172, 7, $intern_3, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 172, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(173, 7, $intern_3, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 173, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(174, 7, $intern_3, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 174, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(175, 7, $intern_3, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 175, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Style$TextAlign();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_2, 24, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(24, 4, $intern_4);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 24, values_0);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(184, 24, $intern_4, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 184, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(185, 24, $intern_4, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 185, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(186, 24, $intern_4, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 186, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(187, 24, $intern_4, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 187, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$Unit();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_2, 18, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(18, 4, $intern_5);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 18, values_1);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(158, 18, $intern_5, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 158, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(159, 18, $intern_5, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 159, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(160, 18, $intern_5, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 160, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(161, 18, $intern_5, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 161, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(162, 18, $intern_5, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 162, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(163, 18, $intern_5, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 163, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(164, 18, $intern_5, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 164, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(165, 18, $intern_5, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 165, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(166, 18, $intern_5, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 166, null);
defineClass(272, 1, {});
_.toString$ = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 272);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(273, 272, {});
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 273);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 25);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next(), 29);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(277, 273, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 277);
defineClass(278, 277, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 278);
function $getX(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , ($eventGetSubPixelClientX(e) | 0) - $getAbsoluteLeft(relativeElem) + $getScrollLeft(relativeElem) + $getScrollLeft_0(relativeElem.ownerDocument);
  }
  return $eventGetSubPixelClientX(this$static.nativeEvent) | 0;
}

function $getY(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , ($eventGetSubPixelClientY(e) | 0) - $getAbsoluteTop(relativeElem) + ((relativeElem.scrollTop || 0) | 0) + $getScrollTop(relativeElem.ownerDocument);
  }
  return $eventGetSubPixelClientY(this$static.nativeEvent) | 0;
}

defineClass(279, 278, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 279);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(189, 279, {}, ClickEvent);
_.dispatch = function dispatch(handler){
  dynamicCast(handler, 250).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 189);
defineClass(132, 1, {});
_.hashCode$ = function hashCode_2(){
  return this.index_0;
}
;
_.toString$ = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 132);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(39, 132, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 39);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 25);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_1(this);
  this.name_0 = eventName;
}

defineClass(29, 39, {29:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 29);
defineClass(280, 277, {});
var Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyEvent', 280);
defineClass(281, 280, {});
var Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyCodeEvent', 281);
function $clinit_KeyUpEvent(){
  $clinit_KeyUpEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('keyup', new KeyUpEvent);
}

function $dispatch(this$static, handler){
  $eventGetKeyCode(this$static.nativeEvent) == 13 && $sendNameToServer(handler);
}

function KeyUpEvent(){
}

defineClass(190, 281, {}, KeyUpEvent);
_.dispatch = function dispatch_0(handler){
  $dispatch(this, dynamicCast(handler, 285));
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_KeyUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyUpEvent', 190);
function $clinit_MouseDownEvent(){
  $clinit_MouseDownEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type('mousedown', new MouseDownEvent);
}

function $dispatch_0(this$static, handler){
  $beginDragging(handler.this$01, this$static);
}

function MouseDownEvent(){
}

defineClass(208, 279, {}, MouseDownEvent);
_.dispatch = function dispatch_1(handler){
  $dispatch_0(this, dynamicCast(handler, 289));
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseDownEvent', 208);
function $clinit_MouseMoveEvent(){
  $clinit_MouseMoveEvent = emptyMethod;
  TYPE_2 = new DomEvent$Type('mousemove', new MouseMoveEvent);
}

function $dispatch_1(this$static, handler){
  $continueDragging(handler.this$01, this$static);
}

function MouseMoveEvent(){
}

defineClass(210, 279, {}, MouseMoveEvent);
_.dispatch = function dispatch_2(handler){
  $dispatch_1(this, dynamicCast(handler, 293));
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseMoveEvent', 210);
function $clinit_MouseOutEvent(){
  $clinit_MouseOutEvent = emptyMethod;
  TYPE_3 = new DomEvent$Type('mouseout', new MouseOutEvent);
}

function MouseOutEvent(){
}

defineClass(212, 279, {}, MouseOutEvent);
_.dispatch = function dispatch_3(handler){
  dynamicCast(handler, 291);
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOutEvent', 212);
function $clinit_MouseOverEvent(){
  $clinit_MouseOverEvent = emptyMethod;
  TYPE_4 = new DomEvent$Type('mouseover', new MouseOverEvent);
}

function MouseOverEvent(){
}

defineClass(211, 279, {}, MouseOverEvent);
_.dispatch = function dispatch_4(handler){
  dynamicCast(handler, 292);
}
;
_.getAssociatedType_0 = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOverEvent', 211);
function $clinit_MouseUpEvent(){
  $clinit_MouseUpEvent = emptyMethod;
  TYPE_5 = new DomEvent$Type('mouseup', new MouseUpEvent);
}

function $dispatch_2(this$static, handler){
  $endDragging(handler.this$01, this$static);
}

function MouseUpEvent(){
}

defineClass(209, 279, {}, MouseUpEvent);
_.dispatch = function dispatch_5(handler){
  $dispatch_2(this, dynamicCast(handler, 290));
}
;
_.getAssociatedType_0 = function getAssociatedType_6(){
  return TYPE_5;
}
;
var TYPE_5;
var Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseUpEvent', 209);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(206, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 206);
function CloseEvent_0(){
}

function fire_0(source){
  var event_0;
  if (TYPE_6) {
    event_0 = new CloseEvent_0;
    source.fireEvent_0(event_0);
  }
}

defineClass(205, 273, {}, CloseEvent_0);
_.dispatch = function dispatch_6(handler){
  dynamicCast(handler, 294);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 205);
function ResizeEvent(width_0){
  this.width_0 = width_0;
}

function fire_1(source, width_0){
  var event_0;
  if (TYPE_7) {
    event_0 = new ResizeEvent(width_0);
    $fireEvent(source, event_0);
  }
}

defineClass(217, 273, {}, ResizeEvent);
_.dispatch = function dispatch_7(handler){
  dynamicCast(handler, 251).onResize(this);
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_7;
}
;
_.width_0 = 0;
var TYPE_7;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 217);
function $dispatch_3(handler){
  handler.this$01.autoHideOnHistoryEvents && handler.this$01.hide(false);
}

function ValueChangeEvent(){
}

function fire_2(source){
  var event_0;
  if (TYPE_8) {
    event_0 = new ValueChangeEvent;
    $fireEvent(source.handlers, event_0);
  }
}

defineClass(218, 273, {}, ValueChangeEvent);
_.dispatch = function dispatch_8(handler){
  $dispatch_3(dynamicCast(handler, 288));
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 218);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 40)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(49, 1, {12:1}, HandlerManager, HandlerManager_0);
_.fireEvent_0 = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 49);
defineClass(276, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 276);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_3(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  if (!handler) {
    throw new NullPointerException_0('Cannot add a null handler');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_1(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next();
      try {
        event_0.dispatch(dynamicCast(handler, 37));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 6)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_4(causes, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_1(handler);
  removed && l.isEmpty() && (sourceMap = dynamicCast($get_1(this$static.map_0, type_0), 31) , dynamicCast(sourceMap.remove_2(source), 25) , sourceMap.isEmpty() && $remove_4(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_1(this$static.map_0, type_0), 31);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_0(source), 25);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0, null);
  return directHandlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_1(this$static.map_0, type_0), 31);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get_0(source), 25);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_1(c$iterator.last = c$iterator.i++), 252));
        c.execute_0();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey(this$static.map_0, eventKey);
}

defineClass(153, 276, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 153);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(154, 153, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 154);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(207, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 207);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next(), 6);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next(), 6);
    first?(first = false):(b.string += '; ' , b);
    $append_0(b, t.getMessage());
  }
  return b.string;
}

defineClass(40, 8, $intern_6, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 40);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(89, 40, $intern_6, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 89);
function $cancel_1(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new Request$RequestImplIE8And9$1(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  $onError(this$static.callback, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException;
  }
  if (!callback) {
    throw new NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException;
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(235, 1, {}, Request);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 235);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(238, 71, {}, Request$1);
_.run = function run_0(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 238);
defineClass(283, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 283);
defineClass(236, 283, {});
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 236);
function Request$RequestImplIE8And9$1($anonymous0){
  this.xmlHttpRequest = $anonymous0;
}

defineClass(237, 236, {}, Request$RequestImplIE8And9$1);
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9/1', 237);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  POST = new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 21)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw unwrap($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 21)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    }
     else 
      throw unwrap($e1);
  }
  return request;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers && (this$static.headers = new HashMap);
  $putStringValue(this$static.headers, header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size_0 > 0) {
    for (header$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.headers)).this$01); $hasNext(header$iterator);) {
      header = (checkStructuralChange(header$iterator.this$01, header$iterator) , checkCriticalElement($hasNext(header$iterator)) , header$iterator.last = header$iterator.current , dynamicCast(header$iterator.current.next(), 19));
      try {
        $setRequestHeader(xmlHttpRequest, dynamicCastToString(header.getKey()), dynamicCastToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 21)) {
          e = $e0;
          throw new RequestException(e.getMessage());
        }
         else 
          throw unwrap($e0);
      }
    }
  }
   else {
    $setRequestHeader(xmlHttpRequest, 'Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(97, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 97);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(241, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 241);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(50, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_5(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 50);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(30, 35, $intern_7, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 30);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(243, 30, $intern_7, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 243);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(247, 30, $intern_7, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 247);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_HasDirection$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_2, 45, 0, [RTL, LTR, DEFAULT]);
}

defineClass(45, 4, {45:1, 3:1, 5:1, 4:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 45, values_2);
defineClass(284, 1, {});
_.isArray_0 = function isArray(){
  return null;
}
;
_.isNumber = function isNumber(){
  return null;
}
;
_.isObject = function isObject(){
  return null;
}
;
_.isString = function isString(){
  return null;
}
;
var Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client', 'JSONValue', 284);
function $get(this$static, index_0){
  var v = this$static.jsArray[index_0];
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function JSONArray(arr){
  this.jsArray = arr;
}

defineClass(61, 284, {61:1}, JSONArray);
_.equals$ = function equals_1(other){
  if (!instanceOf(other, 61)) {
    return false;
  }
  return this.jsArray == dynamicCast(other, 61).jsArray;
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode(this.jsArray);
}
;
_.isArray_0 = function isArray_0(){
  return this;
}
;
_.toString$ = function toString_6(){
  var c, i, sb;
  sb = new StringBuilder_0('[');
  for (i = 0 , c = this.jsArray.length; i < c; i++) {
    i > 0 && (sb.string += ',' , sb);
    $append(sb, $get(this, i));
  }
  sb.string += ']';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client', 'JSONArray', 61);
function $clinit_JSONBoolean(){
  $clinit_JSONBoolean = emptyMethod;
  FALSE = new JSONBoolean(false);
  TRUE = new JSONBoolean(true);
}

function JSONBoolean(value_0){
  this.value_0 = value_0;
}

defineClass(98, 284, {}, JSONBoolean);
_.toString$ = function toString_7(){
  return $clinit_Boolean() , '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client', 'JSONBoolean', 98);
function JSONException(message){
  RuntimeException_0.call(this, message);
}

function JSONException_0(cause){
  this.detailMessage = !cause?null:$toString(cause);
  this.cause = cause;
  captureStackTrace(this, this.detailMessage);
}

defineClass(79, 8, $intern_1, JSONException, JSONException_0);
var Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client', 'JSONException', 79);
function $clinit_JSONNull(){
  $clinit_JSONNull = emptyMethod;
  instance_1 = new JSONNull;
}

function JSONNull(){
}

defineClass(244, 284, {}, JSONNull);
_.toString$ = function toString_8(){
  return 'null';
}
;
var instance_1;
var Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNull', 244);
function JSONNumber(value_0){
  this.value_0 = value_0;
}

defineClass(63, 284, {63:1}, JSONNumber);
_.equals$ = function equals_2(other){
  if (!instanceOf(other, 63)) {
    return false;
  }
  return this.value_0 == dynamicCast(other, 63).value_0;
}
;
_.hashCode$ = function hashCode_4(){
  return round_int((new Double(this.value_0)).value_0);
}
;
_.isNumber = function isNumber_0(){
  return this;
}
;
_.toString$ = function toString_9(){
  return this.value_0 + '';
}
;
_.value_0 = 0;
var Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNumber', 63);
function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function $get_0(this$static, key){
  if (key == null) {
    throw new NullPointerException;
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function JSONObject(jsValue){
  this.jsObject = jsValue;
}

defineClass(60, 284, {60:1}, JSONObject);
_.equals$ = function equals_3(other){
  if (!instanceOf(other, 60)) {
    return false;
  }
  return this.jsObject == dynamicCast(other, 60).jsObject;
}
;
_.hashCode$ = function hashCode_5(){
  return getHashCode(this.jsObject);
}
;
_.isObject = function isObject_0(){
  return this;
}
;
_.toString$ = function toString_10(){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new StringBuilder_0('{');
  first = true;
  keys_0 = $computeKeys0(this, initDim(Ljava_lang_String_2_classLit, $intern_2, 2, 0, 4, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.string += ', ' , sb);
    $append_0(sb, escapeValue(key));
    sb.string += ':';
    $append(sb, $get_0(this, key));
  }
  sb.string += '}';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject', 60);
function $clinit_JSONParser(){
  $clinit_JSONParser = emptyMethod;
  typeMap = {'boolean':createBoolean, number:createNumber, string:createString, object:createObject, 'function':createObject, undefined:createUndefined};
}

function createBoolean(v){
  return $clinit_JSONBoolean() , v?TRUE:FALSE;
}

function createNumber(v){
  return new JSONNumber(v);
}

function createObject(o){
  if (!o) {
    return $clinit_JSONNull() , instance_1;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new JSONArray(o);
  }
   else {
    return new JSONObject(o);
  }
}

function createString(v){
  return new JSONString(v);
}

function createUndefined(){
  return null;
}

function evaluate(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
   else {
    json = escapeJsonForEval(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
  var func = typeMap[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function parse_0(jsonString){
  $clinit_JSONParser();
  var ex;
  if (jsonString == null) {
    throw new NullPointerException;
  }
  if (jsonString.length == 0) {
    throw new IllegalArgumentException_0('empty argument');
  }
  try {
    return evaluate(jsonString, true);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 21)) {
      ex = $e0;
      throw new JSONException_0(ex);
    }
     else 
      throw unwrap($e0);
  }
}

function throwJSONException(message){
  throw new JSONException(message);
}

function throwUnknownTypeException(typeString){
  $clinit_JSONParser();
  throw new JSONException("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}

var typeMap;
function JSONString(value_0){
  if (value_0 == null) {
    throw new NullPointerException;
  }
  this.value_0 = value_0;
}

defineClass(62, 284, {62:1}, JSONString);
_.equals$ = function equals_4(other){
  if (!instanceOf(other, 62)) {
    return false;
  }
  return $equals(this.value_0, dynamicCast(other, 62).value_0);
}
;
_.hashCode$ = function hashCode_6(){
  return getHashCode_0(this.value_0);
}
;
_.isString = function isString_0(){
  return this;
}
;
_.toString$ = function toString_11(){
  return escapeValue(this.value_0);
}
;
var Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client', 'JSONString', 62);
function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 21)) {
    jse = dynamicCast(e, 21);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 6)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_8;
  a1 = value_0 >> 22 & $intern_8;
  a2 = value_0 < 0?1048575:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_2, 298, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value_0));
    return result;
  }
  return create(value_0);
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_8, $intern_8, 524287);
  MIN_VALUE = create0(0, 0, $intern_9);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $onModuleLoad_0(new Webdw_gwt);
}

defineClass(282, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 282);
function PassthroughParser(){
}

defineClass(202, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 202);
function PassthroughRenderer(){
}

defineClass(201, 282, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 201);
function dispatchEvent_1(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function previewEvent(evt){
  var ret;
  ret = fire_3(handlers_0, evt);
  if (!ret && !!evt) {
    evt.cancelBubble = true;
    $eventPreventDefault(evt);
  }
  return ret;
}

function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem.releaseCapture();
}

function resolve(maybePotential){
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  elem.setCapture();
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function addNativePreviewHandler(handler){
  $maybeInitializeEventSystem();
  !TYPE_9 && (TYPE_9 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler(handlers_0, TYPE_9, handler);
}

var handlers_0;
function $dispatch_4(this$static, handler){
  $previewNativeEvent(handler.this$01, this$static);
  singleton.isFirstHandler = false;
}

function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire_3(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_9 && !!handlers && $isEventHandled(handlers, TYPE_9)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(131, 273, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_9(handler){
  $dispatch_4(this, dynamicCast(handler, 287));
}
;
_.getAssociatedType = function getAssociatedType_10(){
  return TYPE_9;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_9, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 131);
function $clinit_History(){
  $clinit_History = emptyMethod;
  new History$HistoryImplIE8;
  historyEventSource = new History$HistoryEventSource;
  token_0 = getDecodedHash();
}

function addValueChangeHandler(handler){
  $clinit_History();
  return $addValueChangeHandler(historyEventSource, handler);
}

function getDecodedHash(){
  var hashToken, href_0, hashLoc;
  hashToken = (href_0 = $wnd.location.href , hashLoc = href_0.indexOf('#') , hashLoc > 0?href_0.substring(hashLoc):'');
  if (hashToken == null || !hashToken.length) {
    return '';
  }
  return $decodeHistoryToken(__substr(hashToken, 1, hashToken.length - 1));
}

function onHashChanged(){
  $clinit_History();
  var hashToken;
  hashToken = getDecodedHash();
  if (!$equals(hashToken, token_0)) {
    token_0 = hashToken;
    fire_2(historyEventSource);
  }
}

var historyEventSource, token_0;
function $addValueChangeHandler(this$static, handler){
  return $addHandler(this$static.handlers, (!TYPE_8 && (TYPE_8 = new GwtEvent$Type) , TYPE_8), handler);
}

function History$HistoryEventSource(){
  this.handlers = new HandlerManager(null);
}

defineClass(214, 1, {12:1}, History$HistoryEventSource);
_.fireEvent_0 = function fireEvent_0(event_0){
  $fireEvent(this.handlers, event_0);
}
;
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryEventSource', 214);
function $decodeHistoryToken(historyToken){
  return $wnd.decodeURI(historyToken.replace('%23', '#'));
}

defineClass(215, 1, {});
_.attachListener = function attachListener(){
  var handler = $entry(onHashChanged);
  $wnd.addEventListener('hashchange', handler, false);
}
;
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImpl', 215);
function History$HistoryImplIE8(){
  this.attachListener();
}

defineClass(216, 215, {}, History$HistoryImplIE8);
_.attachListener = function attachListener_0(){
  var handler = $entry(onHashChanged);
  var oldHandler = $wnd.onhashchange;
  $wnd.onhashchange = function(){
    var ex;
    try {
      handler();
    }
     catch (e) {
      ex = e;
    }
    if (oldHandler != null) {
      try {
        oldHandler();
      }
       catch (e) {
        ex = ex || e;
      }
    }
    if (ex != null) {
      throw ex;
    }
  }
  ;
}
;
var Lcom_google_gwt_user_client_History$HistoryImplIE8_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImplIE8', 216);
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_6?TYPE_6:(TYPE_6 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_7 && (TYPE_7 = new GwtEvent$Type) , TYPE_7), handler);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new WindowImplIE$1);
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initHandler("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new WindowImplIE$2);
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), width_0);
    }
  }
}

var closeHandlersInitialized = false, handlers_1, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_10 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(152, 273, {}, Window$ClosingEvent);
_.dispatch = function dispatch_10(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_11(){
  return TYPE_10;
}
;
var TYPE_10;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 152);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(77, 49, {12:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 77);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_9;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return 67108864;
    default:return -1;
  }
}

function $getEventsSunk(elem){
  return elem.__eventBits || 0;
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener_0(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 14)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $initEventSystem(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return previewEvent($wnd.event);
  }
  );
  var dispatchEvent_0 = $entry(function(){
    var oldEventTarget = currentEventTarget;
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEventImpl()) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var getEventListener = getEventListener_0;
    var listener, curElem = this;
    while (curElem && !(listener = getEventListener(curElem))) {
      curElem = curElem.parentElement;
    }
    listener && dispatchEvent_1($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  );
  var dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent_0.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEventImpl();
    }
  }
  );
  var dispatchUnhandledEvent = $entry(function(){
    this.__gwtLastUnhandledEvent = $wnd.event.type;
    dispatchEvent_0.call(this);
  }
  );
  var moduleName = $moduleName.replace(/\./g, '_');
  $wnd['__gwt_dispatchEvent_' + moduleName] = dispatchEvent_0;
  callDispatchEvent = (new Function('w', 'return function() { w.__gwt_dispatchEvent_' + moduleName + '.call(this) }'))($wnd);
  $wnd['__gwt_dispatchDblClickEvent_' + moduleName] = dispatchDblClickEvent;
  callDispatchDblClickEvent = (new Function('w', 'return function() { w.__gwt_dispatchDblClickEvent_' + moduleName + '.call(this)}'))($wnd);
  $wnd['__gwt_dispatchUnhandledEvent_' + moduleName] = dispatchUnhandledEvent;
  callDispatchUnhandledEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(this)}'))($wnd);
  callDispatchOnLoadEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(w.event.srcElement)}'))($wnd);
  var bodyDispatcher = $entry(function(){
    dispatchEvent_0.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?callDispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?callDispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?callDispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?callDispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?callDispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?callDispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?callDispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?callDispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?callDispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?callDispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?callDispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?callDispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?callDispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?callDispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?callDispatchEvent:null);
  chMask & 32768 && (elem.nodeName == 'IFRAME'?bits & 32768?elem.attachEvent('onload', callDispatchOnLoadEvent):elem.detachEvent('onload', callDispatchOnLoadEvent):(elem.onload = bits & 32768?callDispatchUnhandledEvent:null));
  chMask & 65536 && (elem.onerror = bits & 65536?callDispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?callDispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?callDispatchEvent:null);
  chMask & $intern_9 && (elem.onpaste = bits & $intern_9?callDispatchEvent:null);
}

function previewEventImpl(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

var callDispatchDblClickEvent, callDispatchEvent, callDispatchOnLoadEvent, callDispatchUnhandledEvent;
function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $appendChild($doc.body, scriptElem);
  cmd.execute_0();
  $removeChild($doc.body, scriptElem);
}

function WindowImplIE$1(){
}

defineClass(203, 1, {}, WindowImplIE$1);
_.execute_0 = function execute_0(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/1', 203);
function WindowImplIE$2(){
}

defineClass(204, 1, {}, WindowImplIE$2);
_.execute_0 = function execute_1(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/2', 204);
function IncompatibleRemoteServiceException(){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser.');
}

function IncompatibleRemoteServiceException_0(msg){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser. ( ' + msg + ' )');
}

function IncompatibleRemoteServiceException_1(cause){
  RuntimeException_1.call(this, 'The response could not be deserialized', cause);
}

defineClass(58, 8, $intern_1, IncompatibleRemoteServiceException, IncompatibleRemoteServiceException_0, IncompatibleRemoteServiceException_1);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'IncompatibleRemoteServiceException', 58);
function deserialize(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate(streamReader){
  return new IncompatibleRemoteServiceException;
}

function serialize(streamWriter, instance){
  $writeString(streamWriter, instance.detailMessage);
}

function InvocationException(s){
  RuntimeException_1.call(this, s, null);
}

function InvocationException_0(s, cause){
  RuntimeException_1.call(this, s, cause);
}

defineClass(44, 8, $intern_1, InvocationException, InvocationException_0);
var Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'InvocationException', 44);
function $create(this$static, serviceEntryPoint){
  this$static.builder = new RequestBuilder(($clinit_RequestBuilder() , POST), serviceEntryPoint);
  return this$static;
}

function $doFinish(rb){
  $setHeader(rb, 'X-GWT-Permutation', $strongName);
  $setHeader(rb, 'X-GWT-Module-Base', getModuleBaseURL());
}

function $doSetCallback(rb, callback){
  throwIfNull('callback', callback);
  rb.callback = callback;
}

function $doSetRequestData(rb, data_0){
  rb.requestData = data_0;
}

function $finish(this$static){
  try {
    $doFinish(this$static.builder);
    return this$static.builder;
  }
   finally {
    this$static.builder = null;
  }
}

function $setCallback(this$static, callback){
  $doSetCallback(this$static.builder, callback);
  return this$static;
}

function $setContentType(this$static){
  $setHeader(this$static.builder, 'Content-Type', 'text/x-gwt-rpc; charset=utf-8');
  return this$static;
}

function $setRequestData(this$static, data_0){
  $doSetRequestData(this$static.builder, data_0);
  return this$static;
}

function RpcRequestBuilder(){
}

defineClass(242, 1, {}, RpcRequestBuilder);
var Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcRequestBuilder', 242);
function RpcTokenException(){
  RuntimeException_0.call(this, 'Invalid RPC token');
}

defineClass(150, 8, $intern_1, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcTokenException', 150);
function deserialize_0(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_0(streamReader){
  return new RpcTokenException;
}

function SerializationException(msg){
  Exception.call(this, msg);
}

defineClass(59, 35, {59:1, 3:1, 6:1}, SerializationException);
var Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'SerializationException', 59);
function ServiceDefTarget$NoServiceEntryPointSpecifiedException(){
  InvocationException.call(this, 'Service implementation URL not specified');
}

defineClass(113, 44, $intern_1, ServiceDefTarget$NoServiceEntryPointSpecifiedException);
var Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'ServiceDefTarget/NoServiceEntryPointSpecifiedException', 113);
function StatusCodeException(statusCode, statusText, encodedResponse){
  InvocationException.call(this, statusCode + ' ' + statusText + ' ' + encodedResponse);
}

defineClass(246, 44, $intern_1, StatusCodeException);
var Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'StatusCodeException', 246);
function serialize_0(streamWriter, instance){
  $writeString(streamWriter, instance.nullField);
}

function deserialize_1(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_1(streamReader){
  return new IllegalArgumentException;
}

function deserialize_2(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_2(streamReader){
  return new NumberFormatException;
}

function deserialize_3(streamReader, instance){
}

function instantiate_3(streamReader){
  return $getString(streamReader, $readInt(streamReader));
}

function serialize_1(streamWriter, instance){
  $writeInt(streamWriter, $addString(streamWriter, instance));
}

function setDetailMessage(instance, value_0){
  instance.detailMessage = value_0;
}

function $setFlags(this$static, flags){
  this$static.flags = flags;
}

function $setVersion(this$static, version){
  this$static.version = version;
}

defineClass(96, 1, {});
_.flags = 0;
_.version = 7;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStream', 96);
function $readObject(this$static){
  var token, typeSignature, id_0, instance;
  token = $readInt(this$static);
  if (token < 0) {
    return $get_2(this$static.seenArray, -(token + 1));
  }
  typeSignature = $getString(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return id_0 = ($add_3(this$static.seenArray, null) , this$static.seenArray.array.length) , instance = $instantiate(this$static.serializer, this$static, typeSignature) , $set(this$static.seenArray, id_0 - 1, instance) , $deserialize(this$static.serializer, this$static, instance, typeSignature) , instance;
}

defineClass(248, 96, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamReader', 248);
function $addString(this$static, string){
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = dynamicCast($getStringValue(this$static.stringMap, string), 36);
  if (o) {
    return o.value_0;
  }
  $add_3(this$static.stringTable, string);
  index_0 = this$static.stringTable.array.length;
  $putStringValue(this$static.stringMap, string, valueOf(index_0));
  return index_0;
}

function $writeInt(this$static, fieldValue){
  append(this$static.encodeBuffer, '' + fieldValue);
}

function $writeString(this$static, value_0){
  $writeInt(this$static, $addString(this$static, value_0));
}

defineClass(239, 96, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamWriter', 239);
function $getString(this$static, index_0){
  return index_0 > 0?this$static.stringTable[index_0 - 1]:null;
}

function $prepareToRead(this$static, encoded){
  this$static.results = eval(encoded);
  this$static.index_0 = this$static.results.length;
  this$static.seenArray.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
  $setVersion(this$static, $readInt(this$static));
  $setFlags(this$static, $readInt(this$static));
  if (this$static.version != 7) {
    throw new IncompatibleRemoteServiceException_0('Expecting version 7 from server, got ' + this$static.version + '.');
  }
  if (((this$static.flags | 3) ^ 3) != 0) {
    throw new IncompatibleRemoteServiceException_0('Got an unknown flag from server: ' + this$static.flags);
  }
  this$static.stringTable = this$static.results[--this$static.index_0];
}

function $readInt(this$static){
  return this$static.results[--this$static.index_0];
}

function ClientSerializationStreamReader(serializer){
  this.seenArray = new ArrayList;
  this.serializer = serializer;
}

defineClass(249, 248, {}, ClientSerializationStreamReader);
_.index_0 = 0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamReader', 249);
function $clinit_ClientSerializationStreamWriter(){
  $clinit_ClientSerializationStreamWriter = emptyMethod;
  regex_0 = getQuotingRegex();
}

function $toString_0(this$static){
  var buffer;
  buffer = new StringBuilder;
  append(buffer, '' + this$static.version);
  append(buffer, '' + this$static.flags);
  $writeStringTable(this$static, buffer);
  $append_0(buffer, this$static.encodeBuffer.string);
  return buffer.string;
}

function $writeStringTable(this$static, buffer){
  var s, s$iterator, stringTable;
  stringTable = this$static.stringTable;
  append(buffer, '' + stringTable.array.length);
  for (s$iterator = new AbstractList$IteratorImpl(stringTable); s$iterator.i < s$iterator.this$01_0.size_1();) {
    s = (checkCriticalElement(s$iterator.i < s$iterator.this$01_0.size_1()) , dynamicCastToString(s$iterator.this$01_0.get_1(s$iterator.last = s$iterator.i++)));
    append(buffer, quoteString(s));
  }
  return buffer;
}

function ClientSerializationStreamWriter(moduleBaseURL, serializationPolicyStrongName){
  $clinit_ClientSerializationStreamWriter();
  this.objectMap = new IdentityHashMap;
  this.stringMap = new HashMap;
  this.stringTable = new ArrayList;
  this.moduleBaseURL = moduleBaseURL;
  this.serializationPolicyStrongName = serializationPolicyStrongName;
}

function append(sb, token){
  $clinit_ClientSerializationStreamWriter();
  sb.string += token;
  sb.string += '|';
}

function getQuotingRegex(){
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') != -1) {
    return /[\u0000\|\\\u0080-\uFFFF]/g;
  }
   else if (ua.indexOf('chrome/11') != -1) {
    return /[\u0000\|\\\u0300-\uFFFF]/g;
  }
   else if (ua.indexOf('webkit') != -1) {
    return /[\u0000\|\\\u0300-\u03ff\u0590-\u05FF\u0600-\u06ff\u0730-\u074A\u07eb-\u07f3\u0940-\u0963\u0980-\u09ff\u0a00-\u0a7f\u0b00-\u0b7f\u0e00-\u0e7f\u0f00-\u0fff\u1900-\u194f\u1a00-\u1a1f\u1b00-\u1b7f\u1cda-\u1cdc\u1dc0-\u1dff\u1f00-\u1fff\u2000-\u206f\u20d0-\u20ff\u2100-\u214f\u2300-\u23ff\u2a00-\u2aff\u3000-\u303f\uaab2-\uaab4\uD800-\uFFFF]/g;
  }
   else {
    return /[\u0000\|\\\uD800-\uFFFF]/g;
  }
}

function quoteString(str){
  var regex = regex_0;
  var idx = 0;
  var out = '';
  var result;
  while ((result = regex.exec(str)) != null) {
    out += str.substring(idx, result.index);
    idx = result.index + 1;
    var ch_0 = result[0].charCodeAt(0);
    if (ch_0 == 0) {
      out += '\\0';
    }
     else if (ch_0 == 92) {
      out += '\\\\';
    }
     else if (ch_0 == 124) {
      out += '\\!';
    }
     else {
      var hex = ch_0.toString(16);
      out += '\\u0000'.substring(0, 6 - hex.length) + hex;
    }
  }
  return out + str.substring(idx);
}

defineClass(240, 239, {}, ClientSerializationStreamWriter);
_.toString$ = function toString_12(){
  return $toString_0(this);
}
;
var regex_0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamWriter', 240);
function $createStreamReader(this$static, encoded){
  var clientSerializationStreamReader;
  clientSerializationStreamReader = new ClientSerializationStreamReader(this$static.serializer);
  $prepareToRead(clientSerializationStreamReader, getEncodedInstance(encoded));
  return clientSerializationStreamReader;
}

function $doInvoke(this$static, methodName, statsContext, requestData, callback){
  var ex, rb;
  rb = $doPrepareRequestBuilderImpl(this$static, methodName, statsContext, requestData, callback);
  try {
    return throwIfNull('callback', rb.callback) , $doSend(rb, rb.requestData, rb.callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 30)) {
      ex = $e0;
      new InvocationException_0('Unable to initiate the asynchronous service invocation (' + methodName + ') -- check the network connection', ex);
      $onFailure(callback);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    $isStatsAvailable() && $stats_0($bytesStat(statsContext, methodName, requestData.length, 'requestSent'));
  }
  return null;
}

function $doPrepareRequestBuilderImpl(this$static, methodName, statsContext, requestData, callback){
  var responseHandler;
  if (this$static.remoteServiceURL == null) {
    throw new ServiceDefTarget$NoServiceEntryPointSpecifiedException;
  }
  responseHandler = new RequestCallbackAdapter(this$static, methodName, statsContext, callback);
  !this$static.rpcRequestBuilder && (this$static.rpcRequestBuilder = new RpcRequestBuilder);
  $create(this$static.rpcRequestBuilder, this$static.remoteServiceURL);
  $setCallback(this$static.rpcRequestBuilder, responseHandler);
  $setContentType(this$static.rpcRequestBuilder);
  $setRequestData(this$static.rpcRequestBuilder, requestData);
  return $finish(this$static.rpcRequestBuilder);
}

function RemoteServiceProxy(moduleBaseURL, serializer){
  this.moduleBaseURL = moduleBaseURL;
  this.remoteServiceURL = moduleBaseURL + 'greet';
  this.serializer = serializer;
  this.serializationPolicyName = '798747F4F789FDE0EE975B4CE5D83072';
}

function getEncodedInstance(encodedResponse){
  if ($equals(encodedResponse.substr(0, 4), '//OK') || $equals(encodedResponse.substr(0, 4), '//EX')) {
    return __substr(encodedResponse, 4, encodedResponse.length - 4);
  }
  return encodedResponse;
}

defineClass(110, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy', 110);
function $finish_0(this$static, callback){
  var payload;
  payload = $toString_0(this$static.streamWriter);
  $isStatsAvailable() && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'requestSerialized'));
  return $doInvoke(this$static.this$01, this$static.fullServiceName, this$static.statsContext, payload, callback);
}

function RemoteServiceProxy$ServiceHelper(this$0){
  this.this$01 = this$0;
  this.fullServiceName = 'GreetingService_Proxy.greetServer';
  this.methodName = 'greetServer';
  this.statsContext = new RpcStatsContext;
}

defineClass(112, 1, {}, RemoteServiceProxy$ServiceHelper);
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy/ServiceHelper', 112);
function $onError(this$static){
  $onFailure(this$static.callback);
}

function $onResponseReceived(this$static, response){
  var caught, e, encodedResponse, result, statusCode, statusCode_0;
  result = null;
  caught = null;
  try {
    encodedResponse = response.xmlHttpRequest.responseText;
    statusCode = (statusCode_0 = response.xmlHttpRequest.status , statusCode_0 == 1223?204:statusCode_0);
    $isStatsAvailable() && $stats_0($bytesStat(this$static.statsContext, this$static.methodName, encodedResponse.length, 'responseReceived'));
    statusCode != 200?(caught = new StatusCodeException(statusCode, response.xmlHttpRequest.statusText, encodedResponse)):encodedResponse == null?(caught = new InvocationException('No response payload from ' + this$static.methodName)):$equals(encodedResponse.substr(0, 4), '//OK')?(result = $read($createStreamReader(this$static.streamFactory, encodedResponse))):$equals(encodedResponse.substr(0, 4), '//EX')?(caught = dynamicCast($readObject($createStreamReader(this$static.streamFactory, encodedResponse)), 6)):(caught = new InvocationException(encodedResponse + ' from ' + this$static.methodName));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 59)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_1(e);
    }
     else if (instanceOf($e0, 6)) {
      e = $e0;
      caught = e;
    }
     else 
      throw unwrap($e0);
  }
   finally {
    $isStatsAvailable() && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'responseDeserialized'));
  }
  try {
    !caught?$onSuccess(this$static.callback, result):$onFailure(this$static.callback);
  }
   finally {
    $isStatsAvailable() && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'end'));
  }
}

function RequestCallbackAdapter(streamFactory, methodName, statsContext, callback){
  this.streamFactory = streamFactory;
  this.callback = callback;
  this.methodName = methodName;
  this.statsContext = statsContext;
}

defineClass(223, 1, {}, RequestCallbackAdapter);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter', 223);
function $clinit_RequestCallbackAdapter$ResponseReader(){
  $clinit_RequestCallbackAdapter$ResponseReader = emptyMethod;
  BOOLEAN = new RequestCallbackAdapter$ResponseReader$1;
  BYTE = new RequestCallbackAdapter$ResponseReader$2;
  CHAR = new RequestCallbackAdapter$ResponseReader$3;
  DOUBLE = new RequestCallbackAdapter$ResponseReader$4;
  FLOAT = new RequestCallbackAdapter$ResponseReader$5;
  INT = new RequestCallbackAdapter$ResponseReader$6;
  LONG = new RequestCallbackAdapter$ResponseReader$7;
  OBJECT = new RequestCallbackAdapter$ResponseReader$8;
  SHORT = new RequestCallbackAdapter$ResponseReader$9;
  STRING = new RequestCallbackAdapter$ResponseReader$10;
  VOID = new RequestCallbackAdapter$ResponseReader$11;
}

function RequestCallbackAdapter$ResponseReader(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_RequestCallbackAdapter$ResponseReader();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, 1), $intern_2, 11, 0, [BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID]);
}

defineClass(11, 4, $intern_10);
var BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader', 11, values_3);
function RequestCallbackAdapter$ResponseReader$1(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BOOLEAN', 0);
}

defineClass(224, 11, $intern_10, RequestCallbackAdapter$ResponseReader$1);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/1', 224, null);
function $read(streamReader){
  return $getString(streamReader, $readInt(streamReader));
}

function RequestCallbackAdapter$ResponseReader$10(){
  RequestCallbackAdapter$ResponseReader.call(this, 'STRING', 9);
}

defineClass(233, 11, $intern_10, RequestCallbackAdapter$ResponseReader$10);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/10', 233, null);
function RequestCallbackAdapter$ResponseReader$11(){
  RequestCallbackAdapter$ResponseReader.call(this, 'VOID', 10);
}

defineClass(234, 11, $intern_10, RequestCallbackAdapter$ResponseReader$11);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/11', 234, null);
function RequestCallbackAdapter$ResponseReader$2(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BYTE', 1);
}

defineClass(225, 11, $intern_10, RequestCallbackAdapter$ResponseReader$2);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/2', 225, null);
function RequestCallbackAdapter$ResponseReader$3(){
  RequestCallbackAdapter$ResponseReader.call(this, 'CHAR', 2);
}

defineClass(226, 11, $intern_10, RequestCallbackAdapter$ResponseReader$3);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/3', 226, null);
function RequestCallbackAdapter$ResponseReader$4(){
  RequestCallbackAdapter$ResponseReader.call(this, 'DOUBLE', 3);
}

defineClass(227, 11, $intern_10, RequestCallbackAdapter$ResponseReader$4);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/4', 227, null);
function RequestCallbackAdapter$ResponseReader$5(){
  RequestCallbackAdapter$ResponseReader.call(this, 'FLOAT', 4);
}

defineClass(228, 11, $intern_10, RequestCallbackAdapter$ResponseReader$5);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/5', 228, null);
function RequestCallbackAdapter$ResponseReader$6(){
  RequestCallbackAdapter$ResponseReader.call(this, 'INT', 5);
}

defineClass(229, 11, $intern_10, RequestCallbackAdapter$ResponseReader$6);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/6', 229, null);
function RequestCallbackAdapter$ResponseReader$7(){
  RequestCallbackAdapter$ResponseReader.call(this, 'LONG', 6);
}

defineClass(230, 11, $intern_10, RequestCallbackAdapter$ResponseReader$7);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/7', 230, null);
function RequestCallbackAdapter$ResponseReader$8(){
  RequestCallbackAdapter$ResponseReader.call(this, 'OBJECT', 7);
}

defineClass(231, 11, $intern_10, RequestCallbackAdapter$ResponseReader$8);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/8', 231, null);
function RequestCallbackAdapter$ResponseReader$9(){
  RequestCallbackAdapter$ResponseReader.call(this, 'SHORT', 8);
}

defineClass(232, 11, $intern_10, RequestCallbackAdapter$ResponseReader$9);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/9', 232, null);
function $bytesStat(this$static, method, bytes, eventType){
  var stat = this$static.timeStat(method, eventType);
  stat.bytes = bytes;
  return stat;
}

function $isStatsAvailable(){
  return !!$stats;
}

function $stats_0(data_0){
  return $stats(data_0);
}

function $timeStat(this$static, method, eventType){
  return {moduleName:$moduleName, sessionId:$sessionId, subSystem:'rpc', evtGroup:this$static.requestId, method:method, millis:(new Date).getTime(), type:eventType};
}

function RpcStatsContext(){
  RpcStatsContext_0.call(this, requestIdCounter++);
}

function RpcStatsContext_0(requestId){
  this.requestId = requestId;
}

defineClass(94, 1, {}, RpcStatsContext);
_.timeStat = function timeStat(method, eventType){
  return $timeStat(this, method, eventType);
}
;
_.requestId = 0;
var requestIdCounter = 0;
var Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RpcStatsContext', 94);
function $check(this$static, typeSignature){
  if (!this$static.methodMapNative[typeSignature]) {
    throw new SerializationException(typeSignature);
  }
}

function $deserialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $deserialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function $instantiate(this$static, stream, typeSignature){
  $check(this$static, typeSignature);
  return $instantiate_0(this$static.methodMapNative, stream, typeSignature);
}

function SerializerBase(methodMapNative){
  new HashMap;
  this.methodMapNative = methodMapNative;
}

defineClass(148, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'SerializerBase', 148);
function $deserialize_0(this$static, stream, instance, signature){
  this$static[signature][1](stream, instance);
}

function $instantiate_0(this$static, stream, signature){
  return this$static[signature][0](stream);
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setStyleName(this$static, add_0){
  setStyleName(this$static.element, 'serverResponseLabelError', add_0);
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = (elem.className || '').split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

defineClass(10, 1, {13:1, 10:1});
_.setHeight = function setHeight(height){
  $setPropertyImpl(this.element.style, 'height', height);
}
;
_.setWidth = function setWidth(width_0){
  $setPropertyImpl(this.element.style, 'width', width_0);
}
;
_.toString$ = function toString_13(){
  if (!this.element) {
    return '(null handle)';
  }
  return this.element.outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 10);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = $eventGetTypeInt(type_0.name_0);
  typeInt == -1?null:this$static.eventsToSink == -1?$sinkEvents(this$static.element, typeInt | $getEventsSunk(this$static.element)):(this$static.eventsToSink |= typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents(this$static.element, bitsToAdd | $getEventsSunk(this$static.element)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == 'mouseout'?event_0.toElement:event_0.fromElement);
      if (!!related && isOrHasChildImpl(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      setEventListener(this$static.element, null);
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    this$static.parent_0.remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && $onDetach(this$static);
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

defineClass(9, 10, $intern_11);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent_0 = function fireEvent_1(event_0){
  $fireEvent_0(this, event_0);
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 9);
function $adopt(this$static, child){
  $setParent(child, this$static);
}

defineClass(270, 9, $intern_11);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 270);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_2(this$static.children_0, child);
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.element;
    $removeChild($getParentElement(elem), elem);
    $remove_3(this$static.children_0, w);
  }
  return true;
}

function ComplexPanel(){
  this.children_0 = new WidgetCollection(this);
}

defineClass(88, 270, $intern_11);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children_0);
}
;
_.remove = function remove_0(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 88);
function $add_0(this$static, w){
  $add(this$static, w, this$static.element);
}

function $remove_0(this$static, w){
  var removed;
  removed = $remove(this$static, w);
  removed && changeToStaticPositioning(w.element);
  return removed;
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(138, 88, $intern_11);
_.remove = function remove_1(w){
  return $remove_0(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 138);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next(), 9);
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_4(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(135, 89, $intern_6, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 135);
function AttachDetachException$1(){
}

defineClass(136, 1, {}, AttachDetachException$1);
_.execute_1 = function execute_2(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 136);
function AttachDetachException$2(){
}

defineClass(137, 1, {}, AttachDetachException$2);
_.execute_1 = function execute_3(w){
  $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 137);
function $setEnabled(this$static, enabled){
  this$static.element['disabled'] = !enabled;
}

function FocusWidget(elem){
  $setElement_0(this, elem);
}

defineClass(85, 9, $intern_11);
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = this.element.tabIndex;
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 85);
function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(114, 85, $intern_11);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 114);
function Button(html){
  ButtonBase.call(this, $doc.createElement("<BUTTON type='button'><\/BUTTON>"));
  $setClassName(this.element, 'gwt-Button');
  $setInnerHTML(this.element, html);
}

defineClass(67, 114, $intern_11, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 67);
function $setCellVerticalAlignment(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

defineClass(133, 88, $intern_11);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 133);
function $remove_1(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), w.element);
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && this$static.remove(this$static.widget);
  this$static.widget = w;
  if (w) {
    $appendChild(this$static.getContainerElement(), resolve(this$static.widget.element));
    $setParent(w, this$static);
  }
}

function SimplePanel(elem){
  this.element = elem;
}

defineClass(69, 270, $intern_11);
_.getContainerElement = function getContainerElement(){
  return this.element;
}
;
_.iterator = function iterator_1(){
  return new SimplePanel$1(this);
}
;
_.remove = function remove_2(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 69);
function $center(this$static){
  var elem, initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    $setPropertyImpl(this$static.element.style, 'visibility', 'hidden');
    this$static.isAnimationEnabled = false;
    !this$static.resizeHandlerRegistration && (this$static.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(this$static)));
    $show(this$static);
  }
  elem = this$static.element;
  $setPropertyImpl(elem.style, 'left', ($clinit_Style$Unit() , '0.0px'));
  $setPropertyImpl(elem.style, 'top', '0.0px');
  left = $getClientWidth($doc) - $getPropertyInt(this$static.element, 'offsetWidth') >> 1;
  top_0 = $getClientHeight($doc) - $getPropertyInt(this$static.element, 'offsetHeight') >> 1;
  $setPopupPosition(this$static, max_0($getScrollLeft_0($doc) + left, 0), max_0($getScrollTop($doc) + top_0, 0));
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      $setClip(this$static.element, 'rect(0px, 0px, 0px, 0px)');
      $setPropertyImpl(this$static.element.style, 'visibility', 'visible');
      $run(this$static.resizeAnimation, now_1());
    }
     else {
      $setPropertyImpl(this$static.element.style, 'visibility', 'visible');
    }
  }
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = event_0.srcElement;
  if (is_0(target)) {
    return isOrHasChildImpl(this$static.element, target);
  }
  return false;
}

function $hide(this$static){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_0(this$static);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth(this$static.desiredWidth);
  }
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type_0;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  this$static.onPreviewNativeEvent(event_0);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type_0 = $eventGetTypeInt(nativeEvent.type);
  switch (type_0) {
    case 512:
    case 256:
    case 128:
      {
        $eventGetKeyCode(nativeEvent) & 65535;
        ($eventGetShiftKey(nativeEvent)?1:0) | ($eventGetMetaKey(nativeEvent)?8:0) | ($eventGetCtrlKey(nativeEvent)?2:0) | ($eventGetAltKey(nativeEvent)?4:0);
        return;
      }

    case 4:
    case 1048576:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        this$static.hide(true);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
    case 4194304:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.srcElement;
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= $getBodyOffsetLeft($doc);
  top_0 -= $getBodyOffsetTop($doc);
  elem = this$static.element;
  elem.style['left'] = left + ($clinit_Style$Unit() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setWidget_0(this$static, w){
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else 
    this$static.attached && $removeFromParent(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $updateHandlers(this$static){
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (this$static.historyHandlerRegistration) {
    $removeHandler(this$static.historyHandlerRegistration.real);
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new PopupPanel$3(this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler(new PopupPanel$4(this$static));
  }
}

defineClass(70, 69, $intern_11);
_.getContainerElement = function getContainerElement_0(){
  return $getFirstChildElement(this.element);
}
;
_.hide = function hide(autoClosed){
  $hide(this);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
}
;
_.onUnload = function onUnload_0(){
  this.showing && $setState(this.resizeAnimation, false, true);
}
;
_.setHeight = function setHeight_0(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  height.length == 0 && (this.desiredHeight = null);
}
;
_.setWidth = function setWidth_0(width_0){
  this.desiredWidth = width_0;
  $maybeUpdateSize(this);
  width_0.length == 0 && (this.desiredWidth = null);
}
;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = 0;
_.modal = false;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = 0;
var Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel', 70);
defineClass(121, 70, $intern_11);
_.doAttachChildren = function doAttachChildren_1(){
  $onAttach(this.decPanel);
}
;
_.doDetachChildren = function doDetachChildren_1(){
  $onDetach(this.decPanel);
}
;
_.iterator = function iterator_2(){
  return new SimplePanel$1(this.decPanel);
}
;
_.remove = function remove_3(w){
  return $remove_1(this.decPanel, w);
}
;
var Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratedPopupPanel', 121);
function $getCellElement(this$static){
  var td, tr;
  tr = this$static.tbody.children[0];
  td = tr.children[1];
  return $getFirstChildElement(td);
}

function DecoratorPanel(rowStyles){
  var i, row, table, trElem;
  SimplePanel.call(this, $createElement($doc, 'table'));
  table = this.element;
  this.tbody = $createElement($doc, 'tbody');
  $appendChild(table, resolve(this.tbody));
  $setPropertyInt(table, 'cellSpacing', 0);
  $setPropertyInt(table, 'cellPadding', 0);
  for (i = 0; i < rowStyles.length; i++) {
    row = (trElem = $createElement($doc, 'tr') , $setClassName(trElem, rowStyles[i]) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Left'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Center'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Right'))) , trElem);
    $appendChild(this.tbody, resolve(row));
    i == 1 && (this.containerElem = $getFirstChildElement(row.children[1]));
  }
  $setClassName(this.element, 'gwt-DecoratorPanel');
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = $createElement($doc, 'td');
  inner = $createElement($doc, 'div');
  $appendChild(tdElem, resolve(inner));
  $setClassName(tdElem, styleName);
  $setClassName(inner, styleName + 'Inner');
  return tdElem;
}

defineClass(188, 69, $intern_11, DecoratorPanel);
_.getContainerElement = function getContainerElement_1(){
  return this.containerElem;
}
;
var Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratorPanel', 188);
function $beginDragging(this$static, event_0){
  $onMouseDown(this$static, $getX(event_0), $getY(event_0));
}

function $continueDragging(this$static, event_0){
  $onMouseMove(this$static, $getX(event_0), $getY(event_0));
}

function $endDragging(this$static, event_0){
  $onMouseUp(this$static, ($getX(event_0) , $getY(event_0)));
}

function $hide_0(this$static, autoClosed){
  if (this$static.resizeHandlerRegistration) {
    $removeHandler(this$static.resizeHandlerRegistration.real);
    this$static.resizeHandlerRegistration = null;
  }
  $hide(this$static);
}

function $isCaptionEvent(this$static, event_0){
  var target;
  target = event_0.srcElement;
  if (is_0(target)) {
    return isOrHasChildImpl($getParentElement($getCellElement(this$static.decPanel)), target);
  }
  return false;
}

function $onMouseDown(this$static, x_0, y_0){
  if (!sCaptureElem) {
    this$static.dragging = true;
    setCapture(this$static.element);
    this$static.dragStartX = x_0;
    this$static.dragStartY = y_0;
  }
}

function $onMouseMove(this$static, x_0, y_0){
  var absX, absY;
  if (this$static.dragging) {
    absX = x_0 + $getAbsoluteLeft(this$static.element);
    absY = y_0 + $getAbsoluteTop(this$static.element);
    if (absX < this$static.clientLeft_0 || absX >= this$static.windowWidth || absY < this$static.clientTop_0) {
      return;
    }
    $setPopupPosition(this$static, absX - this$static.dragStartX, absY - this$static.dragStartY);
  }
}

function $onMouseUp(this$static){
  this$static.dragging = false;
  releaseCapture(this$static.element);
}

function $setText(this$static, text_0){
  $setText_0(this$static.caption, text_0);
}

function DialogBox(){
  DialogBox_0.call(this, new DialogBox$CaptionImpl);
}

function DialogBox_0(captionWidget){
  var mouseHandler, td, rowStyles;
  SimplePanel.call(this, $createElement($doc, 'div'));
  this.glassResizer = new PopupPanel$1;
  this.isAnimationEnabled = false;
  this.leftPosition = -1;
  this.resizeAnimation = new PopupPanel$ResizeAnimation(this);
  this.topPosition = -1;
  $appendChild(this.element, $createElement($doc, 'div'));
  $setPopupPosition(this, 0, 0);
  $setClassName($getParentElement($getFirstChildElement(this.element)), 'gwt-PopupPanel');
  $setClassName($getFirstChildElement(this.element), 'popupContent');
  this.autoHide = false;
  this.autoHideOnHistoryEvents = false;
  this.modal = true;
  rowStyles = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['dialogTop', 'dialogMiddle', 'dialogBottom']);
  this.decPanel = new DecoratorPanel(rowStyles);
  $setClassName(this.decPanel.element, '');
  setStylePrimaryName($getParentElement($getFirstChildElement(this.element)), 'gwt-DecoratedPopupPanel');
  $setWidget_0(this, this.decPanel);
  setStyleName($getFirstChildElement(this.element), 'popupContent', false);
  setStyleName(this.decPanel.containerElem, 'dialogContent', true);
  $removeFromParent(captionWidget);
  this.caption = captionWidget;
  td = $getCellElement(this.decPanel);
  $appendChild(td, resolve(this.caption.element));
  $adopt(this, this.caption);
  $setClassName($getParentElement($getFirstChildElement(this.element)), 'gwt-DialogBox');
  this.windowWidth = $getClientWidth($doc);
  this.clientLeft_0 = $getBodyOffsetLeft($doc);
  this.clientTop_0 = $getBodyOffsetTop($doc);
  mouseHandler = new DialogBox$MouseHandler(this);
  $addDomHandler(this, mouseHandler, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_1));
  $addDomHandler(this, mouseHandler, ($clinit_MouseUpEvent() , $clinit_MouseUpEvent() , TYPE_5));
  $addDomHandler(this, mouseHandler, ($clinit_MouseMoveEvent() , $clinit_MouseMoveEvent() , TYPE_2));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_4));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_3));
}

defineClass(56, 121, $intern_11, DialogBox);
_.doAttachChildren = function doAttachChildren_2(){
  try {
    $onAttach(this.decPanel);
  }
   finally {
    $onAttach(this.caption);
  }
}
;
_.doDetachChildren = function doDetachChildren_2(){
  try {
    $onDetach(this.decPanel);
  }
   finally {
    $onDetach(this.caption);
  }
}
;
_.hide = function hide_0(autoClosed){
  $hide_0(this, autoClosed);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  switch ($eventGetTypeInt(event_0.type)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.dragging && !$isCaptionEvent(this, event_0)) {
        return;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  var nativeEvent;
  nativeEvent = event_0.nativeEvent;
  !event_0.isCanceled && $eventGetTypeInt(event_0.nativeEvent.type) == 4 && $isCaptionEvent(this, nativeEvent) && $eventPreventDefault(nativeEvent);
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
}
;
_.clientLeft_0 = 0;
_.clientTop_0 = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.windowWidth = 0;
var Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox', 56);
function DialogBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(124, 1, $intern_12, DialogBox$1);
_.onResize = function onResize_0(event_0){
  this.this$01.windowWidth = event_0.width_0;
}
;
var Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/1', 124);
function LabelBase(element){
  $setElement_0(this, element);
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(54, 9, $intern_11);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 54);
function $setText_0(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0, false);
}

function Label(){
  LabelBase.call(this, $createElement($doc, 'div'));
  $setClassName(this.element, 'gwt-Label');
}

function Label_0(element){
  LabelBase.call(this, element, $equalsIgnoreCase('span', $getTagName(element)));
}

function Label_1(text_0){
  Label.call(this);
  $setTextOrHtml(this.directionalTextHelper, text_0, false);
}

defineClass(46, 54, $intern_11, Label, Label_1);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 46);
function $setHTML(this$static, html){
  $setTextOrHtml(this$static.directionalTextHelper, html, true);
}

function HTML(){
  Label_0.call(this, $createElement($doc, 'div'));
  $setClassName(this.element, 'gwt-HTML');
}

function HTML_0(html){
  HTML.call(this);
  $setTextOrHtml(this.directionalTextHelper, html, true);
}

defineClass(47, 46, $intern_11, HTML, HTML_0);
var Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTML', 47);
function DialogBox$CaptionImpl(){
  HTML.call(this);
  $setClassName(this.element, 'Caption');
}

defineClass(122, 47, $intern_11, DialogBox$CaptionImpl);
var Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/CaptionImpl', 122);
function DialogBox$MouseHandler(this$0){
  this.this$01 = this$0;
}

defineClass(123, 1, {289:1, 293:1, 291:1, 292:1, 290:1, 37:1}, DialogBox$MouseHandler);
var Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/MouseHandler', 123);
function $setTextOrHtml(this$static, content_0, isHtml){
  isHtml?$setInnerHTML(this$static.element, content_0):$setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(198, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 198);
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ALIGN_LEFT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START, ALIGN_RIGHT;
defineClass(269, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 269);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

defineClass(55, 269, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 55);
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(73, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 73);
function $onResize(){
  var height, width_0, winHeight, winWidth;
  null.nullMethod();
  winWidth = $getClientWidth($doc);
  winHeight = $getClientHeight($doc);
  null.nullMethod($clinit_Style$Display());
  null.nullMethod($clinit_Style$Unit());
  null.nullMethod($clinit_Style$Unit());
  width_0 = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  null.nullMethod((width_0 > winWidth?width_0:winWidth) + 'px');
  null.nullMethod((height > winHeight?height:winHeight) + 'px');
  null.nullMethod($clinit_Style$Display());
}

function PopupPanel$1(){
}

defineClass(127, 1, $intern_12, PopupPanel$1);
_.onResize = function onResize_1(event_0){
  $onResize();
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/1', 127);
function PopupPanel$3(this$0){
  this.this$01 = this$0;
}

defineClass(128, 1, {37:1, 287:1}, PopupPanel$3);
var Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/3', 128);
function PopupPanel$4(this$0){
  this.this$01 = this$0;
}

defineClass(129, 1, {288:1, 37:1}, PopupPanel$4);
var Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/4', 129);
function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $appendChild($doc.body, this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize();
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $removeChild($doc.body, this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration.real);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading || $remove_0(($clinit_RootPanel() , get_0(null)), this$static.curPanel);
  }
  $setClip(this$static.curPanel.element, 'rect(auto, auto, auto, auto)');
  $setPropertyImpl(this$static.curPanel.element.style, 'overflow', 'visible');
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    $setPropertyImpl(this$static.curPanel.element.style, 'position', 'absolute');
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_0(($clinit_RootPanel() , get_0(null)), this$static.curPanel);
  }
   else {
    this$static.isUnloading || $remove_0(($clinit_RootPanel() , get_0(null)), this$static.curPanel);
  }
  $setPropertyImpl(this$static.curPanel.element.style, 'overflow', 'visible');
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width_0;
  this$static.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = round_int(progress * this$static.offsetHeight);
  width_0 = round_int(progress * this$static.offsetWidth);
  switch (0) {
    case 0:
      top_0 = this$static.offsetHeight - height >> 1;
      left = this$static.offsetWidth - width_0 >> 1;
      right = left + width_0;
      bottom = top_0 + height;
  }
  $setClip(this$static.curPanel.element, 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function $setState(this$static, showing, isUnloading){
  var animate;
  this$static.isUnloading = isUnloading;
  $cancel(this$static);
  if (this$static.showTimer) {
    $cancel_0(this$static.showTimer);
    this$static.showTimer = null;
    $onComplete(this$static);
  }
  this$static.curPanel.showing = showing;
  $updateHandlers(this$static.curPanel);
  animate = !isUnloading && this$static.curPanel.isAnimationEnabled;
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      $setPropertyImpl(this$static.curPanel.element.style, 'position', 'absolute');
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      $setClip(this$static.curPanel.element, 'rect(0px, 0px, 0px, 0px)');
      $add_0(($clinit_RootPanel() , get_0(null)), this$static.curPanel);
      this$static.showTimer = new PopupPanel$ResizeAnimation$1(this$static);
      $schedule(this$static.showTimer, 1);
    }
     else {
      $run(this$static, now_1());
    }
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function PopupPanel$ResizeAnimation(panel){
  Animation.call(this, (!instance_0 && (instance_0 = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance_0));
  this.curPanel = panel;
}

defineClass(125, 86, {}, PopupPanel$ResizeAnimation);
_.curPanel = null;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight = 0;
_.offsetWidth = -1;
_.showing = false;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation', 125);
function PopupPanel$ResizeAnimation$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(126, 71, {}, PopupPanel$ResizeAnimation$1);
_.run = function run_1(){
  this.this$11.showTimer = null;
  $run(this.this$11, now_1());
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation/1', 126);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, elem);
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    $onDetach(widget);
  }
   finally {
    $remove_8(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_0(id_0){
  $clinit_RootPanel();
  var elem, rp;
  rp = dynamicCast($getStringValue(rootPanels, id_0), 48);
  elem = null;
  if (id_0 != null) {
    if (!(elem = $getElementById($doc, id_0))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || rp.element == elem) {
      return rp;
    }
  }
  rootPanels.size_0 == 0 && addCloseHandler(new RootPanel$2);
  !elem?(rp = new RootPanel$DefaultRootPanel):(rp = new RootPanel(elem));
  $putStringValue(rootPanels, id_0, rp);
  $add_4(widgetsToDetach, rp);
  return rp;
}

defineClass(48, 138, $intern_13, RootPanel);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 48);
function RootPanel$1(){
}

defineClass(140, 1, {}, RootPanel$1);
_.execute_1 = function execute_4(w){
  w.attached && $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 140);
function RootPanel$2(){
}

defineClass(141, 1, {294:1, 37:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 141);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(139, 48, $intern_13, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 139);
function $next(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw new NoSuchElementException;
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(87, 1, {}, SimplePanel$1);
_.hasNext = function hasNext(){
  return this.hasElement;
}
;
_.next = function next(){
  return $next(this);
}
;
_.remove_0 = function remove_4(){
  !!this.returned && this.this$01.remove(this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 87);
function $setName(this$static, name_0){
  $setPropertyString(this$static.element, 'name', name_0);
}

function $setSelectionRange(this$static, length_0){
  if (!this$static.attached) {
    return;
  }
  if (length_0 < 0) {
    throw new IndexOutOfBoundsException_0('Length must be a positive integer. Length: ' + length_0);
  }
  if (length_0 > $getPropertyString(this$static.element, 'value').length) {
    throw new IndexOutOfBoundsException_0('From Index: 0  To Index: ' + length_0 + '  Text Length: ' + $getPropertyString(this$static.element, 'value').length);
  }
  $setSelectionRange_0(this$static.element, 0, length_0);
}

function $setText_1(this$static, text_0){
  this$static.element['value'] = text_0 != null?text_0:'';
}

function ValueBoxBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(115, 85, $intern_11);
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  var type_0;
  type_0 = $eventGetTypeInt(event_0.type);
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_0(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 115);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

defineClass(116, 115, $intern_11);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 116);
function TextBox(){
  var e;
  $clinit_TextBoxBase();
  TextBox_0.call(this, (e = $doc.createElement('INPUT') , e.type = 'text' , e));
}

function TextBox_0(element){
  ValueBoxBase.call(this, element, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser)));
  $setClassName(this.element, 'gwt-TextBox');
}

defineClass(68, 116, $intern_11, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 68);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_0 = new ValueBoxBase$TextAlignment$1;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2;
  LEFT_0 = new ValueBoxBase$TextAlignment$3;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_ValueBoxBase$TextAlignment();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_2, 23, 0, [CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(23, 4, $intern_14);
var CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 23, values_4);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(117, 23, $intern_14, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 117, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(118, 23, $intern_14, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 118, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(119, 23, $intern_14, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 119, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(120, 23, $intern_14, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 120, null);
function $add_1(this$static, w){
  var td, tr, td_0;
  tr = $createElement($doc, 'tr');
  td = (td_0 = $createElement($doc, 'td') , $setPropertyString(td_0, 'align', this$static.horzAlign.textAlignString) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function $setHorizontalAlignment(this$static, align_0){
  this$static.horzAlign = align_0;
}

function VerticalPanel(){
  ComplexPanel.call(this);
  this.table = $createElement($doc, 'table');
  this.body_0 = $createElement($doc, 'tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(134, 133, $intern_11, VerticalPanel);
_.remove = function remove_5(w){
  var removed, td;
  td = $getParentElement(w.element);
  removed = $remove(this, w);
  removed && $removeChild(this.body_0, $getParentElement(td));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 134);
function $add_2(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 9, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_2(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_3(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_2(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 9, 4, 0, 1);
}

defineClass(199, 1, {}, WidgetCollection);
_.iterator = function iterator_3(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 199);
function $next_0(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(93, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext_0(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next = function next_0(){
  return $next_0(this);
}
;
_.remove_0 = function remove_6(){
  if (!this.currentWidget) {
    throw new IllegalStateException;
  }
  this.this$01.parent_0.remove(this.currentWidget);
  --this.index_0;
  this.currentWidget = null;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 93);
function $focus(elem){
  try {
    elem.focus();
  }
   catch (e) {
    if (!elem || !elem.focus) {
      throw e;
    }
  }
}

function $setClip(popup, rect){
  $setPropertyImpl(popup.style, 'clip', rect);
}

function $setSelectionRange_0(elem, pos, length_0){
  try {
    var tr = elem.createTextRange();
    var newlinesWithin = elem.value.substr(pos, length_0).match(/(\r\n)/gi);
    newlinesWithin != null && (length_0 -= newlinesWithin.length);
    var newlinesBefore = elem.value.substring(0, pos).match(/(\r\n)/gi);
    newlinesBefore != null && (pos -= newlinesBefore.length);
    tr.collapse(true);
    tr.moveStart('character', pos);
    tr.moveEnd('character', length_0);
    tr.select();
  }
   catch (e) {
  }
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('ie8', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(65, 6, $intern_1);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 65);
defineClass(20, 65, $intern_1);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 20);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 6)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 6):null);
}

defineClass(99, 20, $intern_1, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 99);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(155, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 155);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(156, 1, {252:1}, SimpleEventBus$2);
_.execute_0 = function execute_5(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 156);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(157, 1, {252:1}, SimpleEventBus$3);
_.execute_0 = function execute_6(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 157);
function $CreateUINode(this$static, parent_0){
  var ele, label1, text1, newone, newone_0;
  if ($equalsIgnoreCase(this$static.classname, 'JLabel')) {
    label1 = (newone = new Label_1(this$static.text_0) , $setText_0(newone, this$static.text_0) , newone);
    setStyleName(label1.element, 'webdw-label', true);
    ele = label1.element;
    $setPropertyImpl(ele.style, 'position', 'absolute');
    $setPropertyImpl(ele.style, 'top', this$static.top_0 + 'px');
    $setPropertyImpl(ele.style, 'left', this$static.left_0 + 'px');
    $add(parent_0, label1, parent_0.element);
    return null;
  }
  if ($equalsIgnoreCase(this$static.classname, 'JTextField')) {
    text1 = (newone_0 = new TextBox , $setText_1(newone_0, this$static.text_0) , $setName(newone_0, this$static.name_0) , setVisible(newone_0.element, true) , newone_0);
    ele = text1.element;
    $setPropertyImpl(ele.style, 'position', 'absolute');
    $setPropertyImpl(ele.style, 'top', this$static.top_0 + 'px');
    $setPropertyImpl(ele.style, 'left', this$static.left_0 + 'px');
    $add(parent_0, text1, parent_0.element);
    return null;
  }
  return null;
}

function $fromJson(this$static, obj){
  var childuiobj, i, jsonchild;
  $get_0(obj, 'Id').isString();
  this$static.name_0 = $get_0(obj, 'Name').isString().value_0;
  this$static.classname = $get_0(obj, 'classname').isString().value_0;
  this$static.text_0 = $get_0(obj, 'Text').isString().value_0;
  this$static.left_0 = round_int($get_0(obj, 'Left').isNumber().value_0 * 0.3);
  this$static.top_0 = round_int($get_0(obj, 'Top').isNumber().value_0 * 0.3);
  round_int($get_0(obj, 'Width').isNumber().value_0 * 0.3);
  round_int($get_0(obj, 'Height').isNumber().value_0 * 0.3);
  'value' in obj.jsObject && $get_0(obj, 'value').toString$();
  'values' in obj.jsObject && $get_0(obj, 'values').toString$();
  'selectedIndex' in obj.jsObject && $get_0(obj, 'selectedIndex').toString$();
  $get_0(obj, 'rowid').toString$();
  $get_0(obj, 'colid').toString$();
  'selected' in obj.jsObject && $get_0(obj, 'selected').toString$();
  if ($equalsIgnoreCase(this$static.classname, 'JPanel')) {
    jsonchild = dynamicCast($get_0(obj, 'childElements'), 61);
    for (i = 0; i < jsonchild.jsArray.length; i++) {
      childuiobj = new CWebDWUIComponent2;
      $fromJson(childuiobj, dynamicCast($get(jsonchild, i), 60));
      $add_3(this$static.childElement, childuiobj);
    }
  }
}

function CWebDWUIComponent2(){
  this.childElement = new ArrayList;
}

defineClass(95, 1, {}, CWebDWUIComponent2);
_.classname = '';
_.left_0 = 0;
_.name_0 = '';
_.text_0 = '';
_.top_0 = 0;
var Lcom_webdw_gwt_client_CWebDWUIComponent2_2_classLit = createForClass('com.webdw.gwt.client', 'CWebDWUIComponent2', 95);
function $clinit_GreetingService_Proxy(){
  $clinit_GreetingService_Proxy = emptyMethod;
  SERIALIZER = new GreetingService_TypeSerializer;
}

function $createStreamWriter(this$static){
  var toReturn, clientSerializationStreamWriter;
  toReturn = (clientSerializationStreamWriter = new ClientSerializationStreamWriter(this$static.moduleBaseURL, this$static.serializationPolicyName) , $reset(clientSerializationStreamWriter.objectMap) , $reset(clientSerializationStreamWriter.stringMap) , clientSerializationStreamWriter.stringTable.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1) , clientSerializationStreamWriter.encodeBuffer = new StringBuilder , $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.moduleBaseURL) , $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.serializationPolicyStrongName) , clientSerializationStreamWriter);
  return toReturn;
}

function $greetServer(this$static, input_0, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static);
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.webdw.gwt.client.GreetingService') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 1) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, input_0));
    $finish_0(helper, callback, $clinit_RequestCallbackAdapter$ResponseReader());
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 59)) {
      $onFailure(callback);
    }
     else 
      throw unwrap($e0);
  }
}

function GreetingService_Proxy(){
  $clinit_GreetingService_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), SERIALIZER);
}

defineClass(111, 110, {}, GreetingService_Proxy);
var SERIALIZER;
var Lcom_webdw_gwt_client_GreetingService_1Proxy_2_classLit = createForClass('com.webdw.gwt.client', 'GreetingService_Proxy', 111);
function $clinit_GreetingService_TypeSerializer(){
  var result, result_0;
  $clinit_GreetingService_TypeSerializer = emptyMethod;
  methodMapNative_0 = (result = {} , result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate, deserialize, serialize] , result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_0, deserialize_0] , result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_0] , result['java.lang.IllegalArgumentException/1755012560'] = [instantiate_1, deserialize_1] , result['java.lang.NumberFormatException/3305228476'] = [instantiate_2, deserialize_2] , result['java.lang.String/2004016611'] = [instantiate_3, deserialize_3, serialize_1] , result);
  result_0 = [];
  result_0[getHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533';
  result_0[getHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298';
  result_0[getHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109';
  result_0[getHashCode(Ljava_lang_IllegalArgumentException_2_classLit)] = 'java.lang.IllegalArgumentException/1755012560';
  result_0[getHashCode(Ljava_lang_NumberFormatException_2_classLit)] = 'java.lang.NumberFormatException/3305228476';
  result_0[getHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611';
}

function GreetingService_TypeSerializer(){
  $clinit_GreetingService_TypeSerializer();
  SerializerBase.call(this, methodMapNative_0);
}

defineClass(149, 148, {}, GreetingService_TypeSerializer);
var methodMapNative_0;
var Lcom_webdw_gwt_client_GreetingService_1TypeSerializer_2_classLit = createForClass('com.webdw.gwt.client', 'GreetingService_TypeSerializer', 149);
function $onModuleLoad_0(this$static){
  var closeButton, dialogBox, dialogVPanel, errorLabel, handler, nameField, sendButton, serverResponseLabel, textToServerLabel, length_0;
  sendButton = new Button('SendSend');
  nameField = new TextBox;
  $setPropertyString(nameField.element, 'value', 'GWT User');
  errorLabel = new Label;
  setStyleName(sendButton.element, 'sendButton', true);
  $setInnerText(sendButton.element, 'SendSend');
  $add_0(get_0('nameFieldContainer'), nameField);
  $add_0(get_0('sendButtonContainer'), sendButton);
  $add_0(get_0('errorLabelContainer'), errorLabel);
  $focus(nameField.element);
  length_0 = $getPropertyString(nameField.element, 'value').length;
  length_0 > 0 && $setSelectionRange(nameField, length_0);
  dialogBox = new DialogBox;
  $setText_0(dialogBox.caption, 'Remote Procedure Call');
  dialogBox.isAnimationEnabled = true;
  closeButton = new Button('Close');
  closeButton.element.id = 'closeButton';
  textToServerLabel = new Label;
  serverResponseLabel = new HTML;
  dialogVPanel = new VerticalPanel;
  setStyleName(dialogVPanel.element, 'dialogVPanel', true);
  $add_1(dialogVPanel, new HTML_0('<b>Sending name to the server:<\/b>'));
  $add_1(dialogVPanel, textToServerLabel);
  $add_1(dialogVPanel, new HTML_0('<br><b>Server replies:<\/b>'));
  $add_1(dialogVPanel, serverResponseLabel);
  $setHorizontalAlignment(dialogVPanel, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  $add_1(dialogVPanel, closeButton);
  $setWidget(dialogBox.decPanel, dialogVPanel);
  $maybeUpdateSize(dialogBox);
  $addDomHandler(closeButton, new Webdw_gwt$1(dialogBox, sendButton), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  handler = new Webdw_gwt$1MyHandler(this$static, errorLabel, nameField, sendButton, textToServerLabel, serverResponseLabel, dialogBox, closeButton);
  $addDomHandler(sendButton, handler, (null , TYPE));
  $addDomHandler(nameField, handler, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_0));
}

function Webdw_gwt(){
  this.greetingService = new GreetingService_Proxy;
}

defineClass(100, 1, {}, Webdw_gwt);
var Lcom_webdw_gwt_client_Webdw_1gwt_2_classLit = createForClass('com.webdw.gwt.client', 'Webdw_gwt', 100);
function Webdw_gwt$1(val$dialogBox, val$sendButton){
  this.val$dialogBox2 = val$dialogBox;
  this.val$sendButton3 = val$sendButton;
}

defineClass(101, 1, {250:1, 37:1}, Webdw_gwt$1);
_.onClick = function onClick(event_0){
  $hide_0(this.val$dialogBox2, false);
  $setEnabled(this.val$sendButton3, true);
  $focus(this.val$sendButton3.element);
}
;
var Lcom_webdw_gwt_client_Webdw_1gwt$1_2_classLit = createForClass('com.webdw.gwt.client', 'Webdw_gwt/1', 101);
function $sendNameToServer(this$static){
  var textToServer;
  $setText_0(this$static.val$errorLabel2, '');
  textToServer = $getPropertyString(this$static.val$nameField3.element, 'value');
  if (!isValidName(textToServer)) {
    $setText_0(this$static.val$errorLabel2, 'Please enter at least four characters');
    return;
  }
  $setEnabled(this$static.val$sendButton4, false);
  $setText_0(this$static.val$textToServerLabel5, textToServer);
  $setText_0(this$static.val$serverResponseLabel6, '');
  $greetServer(this$static.this$01.greetingService, textToServer, new Webdw_gwt$1MyHandler$1(this$static.val$dialogBox7, this$static.val$serverResponseLabel6, this$static.val$closeButton8));
}

function Webdw_gwt$1MyHandler(this$0, val$errorLabel, val$nameField, val$sendButton, val$textToServerLabel, val$serverResponseLabel, val$dialogBox, val$closeButton){
  this.this$01 = this$0;
  this.val$errorLabel2 = val$errorLabel;
  this.val$nameField3 = val$nameField;
  this.val$sendButton4 = val$sendButton;
  this.val$textToServerLabel5 = val$textToServerLabel;
  this.val$serverResponseLabel6 = val$serverResponseLabel;
  this.val$dialogBox7 = val$dialogBox;
  this.val$closeButton8 = val$closeButton;
}

defineClass(102, 1, {250:1, 285:1, 37:1}, Webdw_gwt$1MyHandler);
_.onClick = function onClick_0(event_0){
  $sendNameToServer(this);
}
;
var Lcom_webdw_gwt_client_Webdw_1gwt$1MyHandler_2_classLit = createForClass('com.webdw.gwt.client', 'Webdw_gwt/1MyHandler', 102);
function $onFailure(this$static){
  $setText(this$static.val$dialogBox2, 'Remote Procedure Call - Failure');
  $setStyleName(this$static.val$serverResponseLabel3, true);
  $setHTML(this$static.val$serverResponseLabel3, 'An error occurred while attempting to contact the server. Please check your network connection and try again.');
  $center(this$static.val$dialogBox2);
  $focus(this$static.val$closeButton4.element);
}

function $onSuccess(this$static, result){
  var i, jarray, json1, jsonValue, jsonobj, showpanel, sinfo, ui;
  $setText(this$static.val$dialogBox2, 'Remote Procedure Call');
  $setStyleName(this$static.val$serverResponseLabel3, false);
  jsonValue = ($clinit_JSONParser() , parse_0(result));
  jsonobj = jsonValue.isObject();
  sinfo = '';
  if (!jsonobj)
  ;
  else {
    sinfo = $get_0(jsonobj, 'status').toString$();
  }
  jarray = $get_0(jsonobj, 'uiobjList').isArray_0();
  'size:' + jarray.jsArray.length;
  sinfo = sinfo + '<BR>' + 'size:' + jarray.jsArray.length;
  showpanel = get_0('Picture2');
  for (i = 0; i < jarray.jsArray.length; i++) {
    json1 = $get(jarray, i).isObject();
    ui = new CWebDWUIComponent2;
    $fromJson(ui, json1);
    i < 3 && (sinfo = sinfo + '>' + ui.left_0);
    $CreateUINode(ui, showpanel);
  }
  $setHTML(this$static.val$serverResponseLabel3, sinfo);
  $center(this$static.val$dialogBox2);
  $focus(this$static.val$closeButton4.element);
}

function Webdw_gwt$1MyHandler$1(val$dialogBox, val$serverResponseLabel, val$closeButton){
  this.val$dialogBox2 = val$dialogBox;
  this.val$serverResponseLabel3 = val$serverResponseLabel;
  this.val$closeButton4 = val$closeButton;
}

defineClass(103, 1, {}, Webdw_gwt$1MyHandler$1);
var Lcom_webdw_gwt_client_Webdw_1gwt$1MyHandler$1_2_classLit = createForClass('com.webdw.gwt.client', 'Webdw_gwt/1MyHandler/1', 103);
function isValidName(name_0){
  if (name_0 == null) {
    return false;
  }
  return name_0.length > 3;
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(81, 1, {});
_.toString$ = function toString_14(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 81);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(51, 8, $intern_1, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 51);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  new Boolean_0(false);
  new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

defineClass(43, 1, {3:1, 43:1, 5:1}, Boolean_0);
_.equals$ = function equals_5(o){
  return instanceOf(o, 43) && dynamicCast(o, 43).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_7(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_15(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 43);
function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(38, 8, $intern_1, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 38);
defineClass(66, 1, {3:1, 66:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 66);
function Double(value_0){
  this.value_0 = value_0;
}

defineClass(52, 66, {3:1, 5:1, 52:1, 66:1}, Double);
_.equals$ = function equals_6(o){
  return instanceOf(o, 52) && dynamicCast(o, 52).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_8(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_17(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 52);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(27, 8, $intern_1, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 27);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(34, 8, $intern_1, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 34);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(41, 8, $intern_1, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 41);
function Integer(value_0){
  this.value_0 = value_0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(36, 66, {3:1, 5:1, 36:1, 66:1}, Integer);
_.equals$ = function equals_7(o){
  return instanceOf(o, 36) && dynamicCast(o, 36).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_9(){
  return this.value_0;
}
;
_.toString$ = function toString_18(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 36);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_2, 36, 256, 0, 1);
}

var boxedValues_0;
function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(22, 8, $intern_1, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 22);
function NumberFormatException(){
  IllegalArgumentException.call(this);
}

defineClass(151, 27, $intern_1, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 151);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(32, 81, {286:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 32);
function identityHashCode(o){
  return o == null?0:isJavaString(o)?getHashCode_0(o):getHashCode(o);
}

function UnsupportedOperationException(message){
  RuntimeException_0.call(this, message);
}

defineClass(74, 8, $intern_1, UnsupportedOperationException);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 74);
function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_1(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_0('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(267, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove_1 = function remove_7(o){
  return $advanceToFind(this, o, true);
}
;
_.toString$ = function toString_19(){
  return $toString_1(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 267);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_0(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator(this$static.entrySet().this$01); $hasNext(iter);) {
    entry = (checkStructuralChange(iter.this$01, iter) , checkCriticalElement($hasNext(iter)) , iter.last = iter.current , dynamicCast(iter.current.next(), 19));
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        $remove_5(iter);
      }
      return entry;
    }
  }
  return null;
}

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(266, 1, {31:1});
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.equals$ = function equals_8(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 31)) {
    return false;
  }
  otherMap = dynamicCast(obj, 31);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(otherMap.entrySet().this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next(), 19));
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode$ = function hashCode_10(){
  return hashCode_15(this.entrySet());
}
;
_.isEmpty = function isEmpty_0(){
  return this.size_1() == 0;
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException('Put not supported on this map');
}
;
_.remove_2 = function remove_8(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size_1 = function size_1(){
  return this.entrySet().this$01.size_0;
}
;
_.toString$ = function toString_20(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_0('{');
  comma = false;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(this.entrySet().this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next(), 19));
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_0(sb, $toString_2(this, entry.getKey()));
    sb.string += '=';
    $append_0(sb, $toString_2(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 266);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_1(this$static, key){
  return isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_2(key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_2(key) === undefined);
}

function $put(this$static, key, value_0){
  return isJavaString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key, value_0);
}

function $remove_4(this$static, key){
  return isJavaString(key)?key == null?$remove_9(this$static.hashCodeMap, null):this$static.stringMap.remove_4(key):$remove_9(this$static.hashCodeMap, key);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

function AbstractHashMap(){
  $reset(this);
}

defineClass(82, 266, {31:1});
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_2(key){
  return $get_1(this, key);
}
;
_.put = function put_0(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.remove_2 = function remove_9(key){
  return $remove_4(this, key);
}
;
_.size_1 = function size_2(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 82);
defineClass(268, 267, {64:1});
_.equals$ = function equals_9(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 64)) {
    return false;
  }
  other = dynamicCast(o, 64);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_11(){
  return hashCode_15(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 268);
function $contains(this$static, o){
  if (instanceOf(o, 19)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 19));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(53, 268, {64:1}, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_4(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_1 = function remove_10(entry){
  var key;
  if ($contains(this, entry)) {
    key = dynamicCast(entry, 19).getKey();
    $remove_4(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_3(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 53);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_1(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , this$static.last = this$static.current , dynamicCast(this$static.current.next(), 19);
}

function $remove_5(this$static){
  checkState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_0();
  this$static.last = null;
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(33, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_1(){
  return $hasNext(this);
}
;
_.next = function next_1(){
  return $next_1(this);
}
;
_.remove_0 = function remove_11(){
  $remove_5(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 33);
defineClass(274, 267, {25:1});
_.add_0 = function add_1(index_0, element){
  throw new UnsupportedOperationException('Add not supported on this list');
}
;
_.add_1 = function add_2(obj){
  this.add_0(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_10(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 25)) {
    return false;
  }
  other = dynamicCast(o, 25);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next();
    elemOther = iterOther.next();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_12(){
  return hashCode_16(this);
}
;
_.iterator = function iterator_5(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_3 = function remove_12(index_0){
  throw new UnsupportedOperationException('Remove not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 274);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(57, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_2(){
  return this.i < this.this$01_0.size_1();
}
;
_.next = function next_2(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_1(this.last = this.i++);
}
;
_.remove_0 = function remove_13(){
  checkState(this.last != -1);
  this.this$01_0.remove_3(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 57);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(90, 57, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 90);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(84, 268, {64:1}, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_6(){
  return $iterator(this);
}
;
_.remove_1 = function remove_14(key){
  if ($containsKey(this.this$01, key)) {
    $remove_4(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_4(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 84);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(108, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_3(){
  return $hasNext(this.val$outerIter2);
}
;
_.next = function next_3(){
  var entry;
  entry = $next_1(this.val$outerIter2);
  return entry.getKey();
}
;
_.remove_0 = function remove_15(){
  $remove_5(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 108);
defineClass(107, 1, $intern_15);
_.equals$ = function equals_11(other){
  var entry;
  if (!instanceOf(other, 19)) {
    return false;
  }
  entry = dynamicCast(other, 19);
  return equals_16(this.key, entry.getKey()) && equals_16(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_13(){
  return hashCode_18(this.key) ^ hashCode_18(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_21(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 107);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(83, 107, $intern_15, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 83);
defineClass(275, 1, $intern_15);
_.equals$ = function equals_12(other){
  var entry;
  if (!instanceOf(other, 19)) {
    return false;
  }
  entry = dynamicCast(other, 19);
  return equals_16(this.getKey(), entry.getKey()) && equals_16(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_14(){
  return hashCode_18(this.getKey()) ^ hashCode_18(this.getValue());
}
;
_.toString$ = function toString_22(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 275);
function $add_3(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get_2(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_16(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_6(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_7(this$static, o){
  var i;
  i = $indexOf_0(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove_3(i);
  return true;
}

function $set(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  setCheck(this$static.array, index_0, o);
  return previous;
}

function $toArray(this$static, out){
  var i, size_0, result;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = initializeArrayElementsWithDefaults(0, size_0) , initValues(getClass__Ljava_lang_Class___devirtual$(out), out.castableTypeMap$, out.__elementTypeId$, out.__elementTypeCategory$, result) , result));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(28, 274, $intern_16, ArrayList);
_.add_0 = function add_3(index_0, o){
  checkPositionIndex(index_0, this.array.length);
  splice_0(this.array, index_0, 0, o);
}
;
_.add_1 = function add_4(o){
  return $add_3(this, o);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.get_1 = function get_3(index_0){
  return $get_2(this, index_0);
}
;
_.isEmpty = function isEmpty_1(){
  return this.array.length == 0;
}
;
_.remove_3 = function remove_16(index_0){
  return $remove_6(this, index_0);
}
;
_.remove_1 = function remove_17(o){
  return $remove_7(this, o);
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 28);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_15(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_16(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(142, 274, $intern_16, Collections$EmptyList);
_.contains_0 = function contains_3(object){
  return false;
}
;
_.get_1 = function get_4(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_7(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_6(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 142);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(143, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_4(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next = function next_4(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_1(){
  throw new NoSuchElementException;
}
;
_.remove_0 = function remove_18(){
  throw new IllegalStateException;
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 143);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function recordLastKnownStructure(host, iterator){
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(213, 8, $intern_1, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 213);
function HashMap(){
  AbstractHashMap.call(this);
}

defineClass(26, 82, {3:1, 31:1}, HashMap);
_.equals = function equals_13(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode_1(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 26);
function $add_4(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_8(this$static, o){
  return $remove_4(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(76, 268, {3:1, 64:1}, HashSet);
_.contains_0 = function contains_4(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_2(){
  return this.map_0.size_0 == 0;
}
;
_.iterator = function iterator_8(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.remove_1 = function remove_19(o){
  return $remove_8(this, o);
}
;
_.size_1 = function size_7(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_23(){
  return $toString_1(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 76);
function IdentityHashMap(){
  AbstractHashMap.call(this);
}

defineClass(245, 82, {3:1, 31:1}, IdentityHashMap);
_.equals$ = function equals_14(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 31)) {
    return false;
  }
  otherMap = dynamicCast(obj, 31);
  if (this.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(otherMap.entrySet().this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next(), 19));
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(isJavaString(otherKey)?$hasStringValue(this, otherKey):!!$getEntry(this.hashCodeMap, otherKey))) {
      return false;
    }
    if (maskUndefined(otherValue) !== maskUndefined(isJavaString(otherKey)?$getStringValue(this, otherKey):getEntryValueOrNull($getEntry(this.hashCodeMap, otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.equals = function equals_15(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2);
}
;
_.getHashCode = function getHashCode_2(key){
  return getHashCode(key);
}
;
_.hashCode$ = function hashCode_17(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next(), 19));
    hashCode += identityHashCode(entry.getKey());
    hashCode += identityHashCode(entry.getValue());
  }
  return hashCode;
}
;
var Ljava_util_IdentityHashMap_2_classLit = createForClass('java.util', 'IdentityHashMap', 245);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + this$static.host.getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.host.equals(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_0(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + this$static.host.getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host.equals(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_9(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + this$static.host.getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (this$static.host.equals(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(92, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 92);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_2, 19, 0, 0, 1);
}

defineClass(196, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_5(){
  return $hasNext_0(this);
}
;
_.next = function next_5(){
  return checkCriticalElement($hasNext_0(this)) , this.lastChain = this.chain , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.remove_0 = function remove_20(){
  checkState(!!this.lastEntry);
  $remove_9(this.this$01, this.lastEntry.getKey());
  maskUndefined(this.chain) === maskUndefined(this.lastChain) && this.chain.length != 1 && --this.itemIndex;
  this.lastEntry = null;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastChain = null;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 196);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(194, 92, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 194);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(195, 28, $intern_16, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove_3 = function remove_21(index_0){
  var removed;
  return removed = dynamicCast($remove_6(this, index_0), 19) , $remove_9(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 195);
function InternalJsMapFactory(){
}

defineClass(191, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 191);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(193, 191, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 193);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(192, 191, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 192);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_0(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_10(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_0(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(75, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_2 = function get_5(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put_0 = function put_1(key, value_0){
  return $put_1(this, key, value_0);
}
;
_.remove_4 = function remove_22(key){
  return $remove_10(this, key);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 75);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(147, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_6(){
  return this.i < this.val$keys2.length;
}
;
_.next = function next_6(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.last = this.i++]);
}
;
_.remove_0 = function remove_23(){
  checkState(this.last != -1);
  this.this$01.remove_4(this.val$keys2[this.last]);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 147);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(91, 275, $intern_15, InternalJsStringMap$2);
_.getKey = function getKey_0(){
  return this.val$key2;
}
;
_.getValue = function getValue_0(){
  return this.this$01.get_2(this.val$key2);
}
;
_.setValue = function setValue_0(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 91);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(144, 75, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_2 = function get_6(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put_0 = function put_2(key, value_0){
  return $put_1(this, ':' + key, value_0);
}
;
_.remove_4 = function remove_24(key){
  return $remove_10(this, ':' + key);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 144);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(146, 28, $intern_16, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove_3 = function remove_25(index_0){
  var removed;
  return removed = dynamicCast($remove_6(this, index_0), 19) , $remove_10(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 146);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(145, 75, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 145);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(42, 8, $intern_1, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 42);
function equals_16(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_18(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

var Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 255), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 257), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 260), Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'XsrfToken', null), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=webdw_gwt-0.js

