// Generated by Haxe 3.4.7
(function ($global) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Promise = function() { };
Promise.__name__ = true;
var ReadonlyArray = function() { };
ReadonlyArray.__name__ = true;
var Partial = function() { };
Partial.__name__ = true;
var PromiseLike = function() { };
PromiseLike.__name__ = true;
var ArrayLike = function() { };
ArrayLike.__name__ = true;
var GamepadButton = function() { };
GamepadButton.__name__ = true;
var BABYLON_Window = function() { };
BABYLON_Window.__name__ = true;
BABYLON_Window.prototype = {
	__class__: BABYLON_Window
};
var BABYLON_WebGLRenderingContext = function() { };
BABYLON_WebGLRenderingContext.__name__ = true;
BABYLON_WebGLRenderingContext.prototype = {
	__class__: BABYLON_WebGLRenderingContext
};
var BABYLON_Document = function() { };
BABYLON_Document.__name__ = true;
BABYLON_Document.prototype = {
	__class__: BABYLON_Document
};
var BABYLON_HTMLCanvasElement = function() { };
BABYLON_HTMLCanvasElement.__name__ = true;
BABYLON_HTMLCanvasElement.prototype = {
	__class__: BABYLON_HTMLCanvasElement
};
var BABYLON_CanvasRenderingContext2D = function() { };
BABYLON_CanvasRenderingContext2D.__name__ = true;
BABYLON_CanvasRenderingContext2D.prototype = {
	__class__: BABYLON_CanvasRenderingContext2D
};
var BABYLON_WebGLBuffer = function() { };
BABYLON_WebGLBuffer.__name__ = true;
BABYLON_WebGLBuffer.prototype = {
	__class__: BABYLON_WebGLBuffer
};
var BABYLON_WebGLProgram = function() { };
BABYLON_WebGLProgram.__name__ = true;
BABYLON_WebGLProgram.prototype = {
	__class__: BABYLON_WebGLProgram
};
var BABYLON_MouseEvent = function() { };
BABYLON_MouseEvent.__name__ = true;
BABYLON_MouseEvent.prototype = {
	__class__: BABYLON_MouseEvent
};
var BABYLON_Navigator = function() { };
BABYLON_Navigator.__name__ = true;
BABYLON_Navigator.prototype = {
	__class__: BABYLON_Navigator
};
var BABYLON_HTMLVideoElement = function() { };
BABYLON_HTMLVideoElement.__name__ = true;
BABYLON_HTMLVideoElement.prototype = {
	__class__: BABYLON_HTMLVideoElement
};
var BABYLON_Screen = function() { };
BABYLON_Screen.__name__ = true;
BABYLON_Screen.prototype = {
	__class__: BABYLON_Screen
};
var BABYLON_EXT_$disjoint_$timer_$query = function() { };
BABYLON_EXT_$disjoint_$timer_$query.__name__ = true;
BABYLON_EXT_$disjoint_$timer_$query.prototype = {
	__class__: BABYLON_EXT_$disjoint_$timer_$query
};
var BABYLON_WebGLUniformLocation = function() { };
BABYLON_WebGLUniformLocation.__name__ = true;
BABYLON_WebGLUniformLocation.prototype = {
	__class__: BABYLON_WebGLUniformLocation
};
var BABYLON_IDisposable = function() { };
BABYLON_IDisposable.__name__ = true;
BABYLON_IDisposable.prototype = {
	__class__: BABYLON_IDisposable
};
var BABYLON_IActiveMeshCandidateProvider = function() { };
BABYLON_IActiveMeshCandidateProvider.__name__ = true;
BABYLON_IActiveMeshCandidateProvider.prototype = {
	__class__: BABYLON_IActiveMeshCandidateProvider
};
var BABYLON_IAnimatable = function() { };
BABYLON_IAnimatable.__name__ = true;
BABYLON_IAnimatable.prototype = {
	__class__: BABYLON_IAnimatable
};
var BABYLON_IAnimationKey = function() { };
BABYLON_IAnimationKey.__name__ = true;
BABYLON_IAnimationKey.prototype = {
	__class__: BABYLON_IAnimationKey
};
var BABYLON_IEasingFunction = function() { };
BABYLON_IEasingFunction.__name__ = true;
BABYLON_IEasingFunction.prototype = {
	__class__: BABYLON_IEasingFunction
};
var BABYLON_Behavior = function() { };
BABYLON_Behavior.__name__ = true;
BABYLON_Behavior.prototype = {
	__class__: BABYLON_Behavior
};
var BABYLON_ICollisionCoordinator = function() { };
BABYLON_ICollisionCoordinator.__name__ = true;
BABYLON_ICollisionCoordinator.prototype = {
	__class__: BABYLON_ICollisionCoordinator
};
var BABYLON_SerializedMesh = function() { };
BABYLON_SerializedMesh.__name__ = true;
BABYLON_SerializedMesh.prototype = {
	__class__: BABYLON_SerializedMesh
};
var BABYLON_SerializedSubMesh = function() { };
BABYLON_SerializedSubMesh.__name__ = true;
BABYLON_SerializedSubMesh.prototype = {
	__class__: BABYLON_SerializedSubMesh
};
var BABYLON_SerializedGeometry = function() { };
BABYLON_SerializedGeometry.__name__ = true;
BABYLON_SerializedGeometry.prototype = {
	__class__: BABYLON_SerializedGeometry
};
var BABYLON_BabylonMessage = function() { };
BABYLON_BabylonMessage.__name__ = true;
BABYLON_BabylonMessage.prototype = {
	__class__: BABYLON_BabylonMessage
};
var BABYLON_SerializedColliderToWorker = function() { };
BABYLON_SerializedColliderToWorker.__name__ = true;
BABYLON_SerializedColliderToWorker.prototype = {
	__class__: BABYLON_SerializedColliderToWorker
};
var BABYLON_WorkerReply = function() { };
BABYLON_WorkerReply.__name__ = true;
BABYLON_WorkerReply.prototype = {
	__class__: BABYLON_WorkerReply
};
var BABYLON_CollisionReplyPayload = function() { };
BABYLON_CollisionReplyPayload.__name__ = true;
BABYLON_CollisionReplyPayload.prototype = {
	__class__: BABYLON_CollisionReplyPayload
};
var BABYLON_InitPayload = function() { };
BABYLON_InitPayload.__name__ = true;
var BABYLON_CollidePayload = function() { };
BABYLON_CollidePayload.__name__ = true;
BABYLON_CollidePayload.prototype = {
	__class__: BABYLON_CollidePayload
};
var BABYLON_UpdatePayload = function() { };
BABYLON_UpdatePayload.__name__ = true;
BABYLON_UpdatePayload.prototype = {
	__class__: BABYLON_UpdatePayload
};
var BABYLON_ICollisionDetector = function() { };
BABYLON_ICollisionDetector.__name__ = true;
BABYLON_ICollisionDetector.prototype = {
	__class__: BABYLON_ICollisionDetector
};
var BABYLON_ICameraInput = function() { };
BABYLON_ICameraInput.__name__ = true;
BABYLON_ICameraInput.prototype = {
	__class__: BABYLON_ICameraInput
};
var BABYLON_CameraInputsMap = function() { };
BABYLON_CameraInputsMap.__name__ = true;
var BABYLON_VRDisplay = function() { };
BABYLON_VRDisplay.__name__ = true;
BABYLON_VRDisplay.prototype = {
	__class__: BABYLON_VRDisplay
};
var BABYLON_VRLayer = function() { };
BABYLON_VRLayer.__name__ = true;
BABYLON_VRLayer.prototype = {
	__class__: BABYLON_VRLayer
};
var BABYLON_VRDisplayCapabilities = function() { };
BABYLON_VRDisplayCapabilities.__name__ = true;
BABYLON_VRDisplayCapabilities.prototype = {
	__class__: BABYLON_VRDisplayCapabilities
};
var BABYLON_VREyeParameters = function() { };
BABYLON_VREyeParameters.__name__ = true;
BABYLON_VREyeParameters.prototype = {
	__class__: BABYLON_VREyeParameters
};
var BABYLON_VRFieldOfView = function() { };
BABYLON_VRFieldOfView.__name__ = true;
BABYLON_VRFieldOfView.prototype = {
	__class__: BABYLON_VRFieldOfView
};
var BABYLON_VRFrameData = function() { };
BABYLON_VRFrameData.__name__ = true;
BABYLON_VRFrameData.prototype = {
	__class__: BABYLON_VRFrameData
};
var BABYLON_VRPose = function() { };
BABYLON_VRPose.__name__ = true;
BABYLON_VRPose.prototype = {
	__class__: BABYLON_VRPose
};
var BABYLON_VRStageParameters = function() { };
BABYLON_VRStageParameters.__name__ = true;
BABYLON_VRStageParameters.prototype = {
	__class__: BABYLON_VRStageParameters
};
var BABYLON_EngineOptions = function() { };
BABYLON_EngineOptions.__name__ = true;
BABYLON_EngineOptions.prototype = {
	__class__: BABYLON_EngineOptions
};
var BABYLON_IDisplayChangedEventArgs = function() { };
BABYLON_IDisplayChangedEventArgs.__name__ = true;
BABYLON_IDisplayChangedEventArgs.prototype = {
	__class__: BABYLON_IDisplayChangedEventArgs
};
var BABYLON_ImageBitmap = function() { };
BABYLON_ImageBitmap.__name__ = true;
BABYLON_ImageBitmap.prototype = {
	__class__: BABYLON_ImageBitmap
};
var BABYLON_WebGLQuery = function() { };
BABYLON_WebGLQuery.__name__ = true;
var BABYLON_WebGLSampler = function() { };
BABYLON_WebGLSampler.__name__ = true;
var BABYLON_WebGLSync = function() { };
BABYLON_WebGLSync.__name__ = true;
var BABYLON_WebGLTransformFeedback = function() { };
BABYLON_WebGLTransformFeedback.__name__ = true;
var BABYLON_WebGLVertexArrayObject = function() { };
BABYLON_WebGLVertexArrayObject.__name__ = true;
var BABYLON_ICullable = function() { };
BABYLON_ICullable.__name__ = true;
BABYLON_ICullable.prototype = {
	__class__: BABYLON_ICullable
};
var BABYLON_GamepadButtonChanges = function() { };
BABYLON_GamepadButtonChanges.__name__ = true;
BABYLON_GamepadButtonChanges.prototype = {
	__class__: BABYLON_GamepadButtonChanges
};
var BABYLON_IEnvironmentHelperOptions = function() { };
BABYLON_IEnvironmentHelperOptions.__name__ = true;
BABYLON_IEnvironmentHelperOptions.prototype = {
	__class__: BABYLON_IEnvironmentHelperOptions
};
var BABYLON_IEffectLayerOptions = function() { };
BABYLON_IEffectLayerOptions.__name__ = true;
BABYLON_IEffectLayerOptions.prototype = {
	__class__: BABYLON_IEffectLayerOptions
};
var BABYLON_IGlowLayerOptions = function() { };
BABYLON_IGlowLayerOptions.__name__ = true;
BABYLON_IGlowLayerOptions.prototype = {
	__class__: BABYLON_IGlowLayerOptions
};
var BABYLON_IHighlightLayerOptions = function() { };
BABYLON_IHighlightLayerOptions.__name__ = true;
BABYLON_IHighlightLayerOptions.prototype = {
	__class__: BABYLON_IHighlightLayerOptions
};
var BABYLON_IShadowLight = function() { };
BABYLON_IShadowLight.__name__ = true;
BABYLON_IShadowLight.prototype = {
	__class__: BABYLON_IShadowLight
};
var BABYLON_ILoadingScreen = function() { };
BABYLON_ILoadingScreen.__name__ = true;
BABYLON_ILoadingScreen.prototype = {
	__class__: BABYLON_ILoadingScreen
};
var BABYLON_ISceneLoaderPluginExtensions = function() { };
BABYLON_ISceneLoaderPluginExtensions.__name__ = true;
var BABYLON_ISceneLoaderPluginFactory = function() { };
BABYLON_ISceneLoaderPluginFactory.__name__ = true;
BABYLON_ISceneLoaderPluginFactory.prototype = {
	__class__: BABYLON_ISceneLoaderPluginFactory
};
var BABYLON_ISceneLoaderPlugin = function() { };
BABYLON_ISceneLoaderPlugin.__name__ = true;
BABYLON_ISceneLoaderPlugin.prototype = {
	__class__: BABYLON_ISceneLoaderPlugin
};
var BABYLON_ISceneLoaderPluginAsync = function() { };
BABYLON_ISceneLoaderPluginAsync.__name__ = true;
BABYLON_ISceneLoaderPluginAsync.prototype = {
	__class__: BABYLON_ISceneLoaderPluginAsync
};
var BABYLON_IImageProcessingConfigurationDefines = function() { };
BABYLON_IImageProcessingConfigurationDefines.__name__ = true;
BABYLON_IImageProcessingConfigurationDefines.prototype = {
	__class__: BABYLON_IImageProcessingConfigurationDefines
};
var BABYLON_ISize = function() { };
BABYLON_ISize.__name__ = true;
BABYLON_ISize.prototype = {
	__class__: BABYLON_ISize
};
var BABYLON_IGetSetVerticesData = function() { };
BABYLON_IGetSetVerticesData.__name__ = true;
BABYLON_IGetSetVerticesData.prototype = {
	__class__: BABYLON_IGetSetVerticesData
};
var BABYLON_ISimplifier = function() { };
BABYLON_ISimplifier.__name__ = true;
BABYLON_ISimplifier.prototype = {
	__class__: BABYLON_ISimplifier
};
var BABYLON_ISimplificationSettings = function() { };
BABYLON_ISimplificationSettings.__name__ = true;
BABYLON_ISimplificationSettings.prototype = {
	__class__: BABYLON_ISimplificationSettings
};
var BABYLON_ISimplificationTask = function() { };
BABYLON_ISimplificationTask.__name__ = true;
BABYLON_ISimplificationTask.prototype = {
	__class__: BABYLON_ISimplificationTask
};
var BABYLON_IParticleSystem = function() { };
BABYLON_IParticleSystem.__name__ = true;
BABYLON_IParticleSystem.prototype = {
	__class__: BABYLON_IParticleSystem
};
var BABYLON_PhysicsImpostorJoint = function() { };
BABYLON_PhysicsImpostorJoint.__name__ = true;
BABYLON_PhysicsImpostorJoint.prototype = {
	__class__: BABYLON_PhysicsImpostorJoint
};
var BABYLON_IPhysicsEnginePlugin = function() { };
BABYLON_IPhysicsEnginePlugin.__name__ = true;
BABYLON_IPhysicsEnginePlugin.prototype = {
	__class__: BABYLON_IPhysicsEnginePlugin
};
var BABYLON_PhysicsForceAndContactPoint = function() { };
BABYLON_PhysicsForceAndContactPoint.__name__ = true;
BABYLON_PhysicsForceAndContactPoint.prototype = {
	__class__: BABYLON_PhysicsForceAndContactPoint
};
var BABYLON_PhysicsRadialExplosionEventData = function() { };
BABYLON_PhysicsRadialExplosionEventData.__name__ = true;
BABYLON_PhysicsRadialExplosionEventData.prototype = {
	__class__: BABYLON_PhysicsRadialExplosionEventData
};
var BABYLON_PhysicsGravitationalFieldEventData = function() { };
BABYLON_PhysicsGravitationalFieldEventData.__name__ = true;
BABYLON_PhysicsGravitationalFieldEventData.prototype = {
	__class__: BABYLON_PhysicsGravitationalFieldEventData
};
var BABYLON_PhysicsUpdraftEventData = function() { };
BABYLON_PhysicsUpdraftEventData.__name__ = true;
BABYLON_PhysicsUpdraftEventData.prototype = {
	__class__: BABYLON_PhysicsUpdraftEventData
};
var BABYLON_PhysicsVortexEventData = function() { };
BABYLON_PhysicsVortexEventData.__name__ = true;
BABYLON_PhysicsVortexEventData.prototype = {
	__class__: BABYLON_PhysicsVortexEventData
};
var BABYLON_PhysicsImpostorParameters = function() { };
BABYLON_PhysicsImpostorParameters.__name__ = true;
BABYLON_PhysicsImpostorParameters.prototype = {
	__class__: BABYLON_PhysicsImpostorParameters
};
var BABYLON_IPhysicsEnabledObject = function() { };
BABYLON_IPhysicsEnabledObject.__name__ = true;
BABYLON_IPhysicsEnabledObject.prototype = {
	__class__: BABYLON_IPhysicsEnabledObject
};
var BABYLON_PhysicsJointData = function() { };
BABYLON_PhysicsJointData.__name__ = true;
BABYLON_PhysicsJointData.prototype = {
	__class__: BABYLON_PhysicsJointData
};
var BABYLON_IMotorEnabledJoint = function() { };
BABYLON_IMotorEnabledJoint.__name__ = true;
BABYLON_IMotorEnabledJoint.prototype = {
	__class__: BABYLON_IMotorEnabledJoint
};
var BABYLON_DistanceJointData = function() { };
BABYLON_DistanceJointData.__name__ = true;
BABYLON_DistanceJointData.__interfaces__ = [BABYLON_PhysicsJointData];
BABYLON_DistanceJointData.prototype = {
	__class__: BABYLON_DistanceJointData
};
var BABYLON_SpringJointData = function() { };
BABYLON_SpringJointData.__name__ = true;
BABYLON_SpringJointData.__interfaces__ = [BABYLON_PhysicsJointData];
BABYLON_SpringJointData.prototype = {
	__class__: BABYLON_SpringJointData
};
var BABYLON_IAssetsProgressEvent = function() { };
BABYLON_IAssetsProgressEvent.__name__ = true;
BABYLON_IAssetsProgressEvent.prototype = {
	__class__: BABYLON_IAssetsProgressEvent
};
var BABYLON_ITextureAssetTask = function() { };
BABYLON_ITextureAssetTask.__name__ = true;
BABYLON_ITextureAssetTask.prototype = {
	__class__: BABYLON_ITextureAssetTask
};
var BABYLON_DDSInfo = function() { };
BABYLON_DDSInfo.__name__ = true;
BABYLON_DDSInfo.prototype = {
	__class__: BABYLON_DDSInfo
};
var BABYLON_IFileRequest = function() { };
BABYLON_IFileRequest.__name__ = true;
BABYLON_IFileRequest.prototype = {
	__class__: BABYLON_IFileRequest
};
var BABYLON_VRTeleportationOptions = function() { };
BABYLON_VRTeleportationOptions.__name__ = true;
BABYLON_VRTeleportationOptions.prototype = {
	__class__: BABYLON_VRTeleportationOptions
};
var BABYLON_WebVROptions = function() { };
BABYLON_WebVROptions.__name__ = true;
BABYLON_WebVROptions.prototype = {
	__class__: BABYLON_WebVROptions
};
var BABYLON_VRExperienceHelperOptions = function() { };
BABYLON_VRExperienceHelperOptions.__name__ = true;
BABYLON_VRExperienceHelperOptions.__interfaces__ = [BABYLON_WebVROptions];
BABYLON_VRExperienceHelperOptions.prototype = {
	__class__: BABYLON_VRExperienceHelperOptions
};
var BABYLON_DevicePose = function() { };
BABYLON_DevicePose.__name__ = true;
BABYLON_DevicePose.prototype = {
	__class__: BABYLON_DevicePose
};
var BABYLON_PoseControlled = function() { };
BABYLON_PoseControlled.__name__ = true;
BABYLON_PoseControlled.prototype = {
	__class__: BABYLON_PoseControlled
};
var BABYLON_IOctreeContainer = function() { };
BABYLON_IOctreeContainer.__name__ = true;
BABYLON_IOctreeContainer.prototype = {
	__class__: BABYLON_IOctreeContainer
};
var BABYLON_MutableGamepadButton = function() { };
BABYLON_MutableGamepadButton.__name__ = true;
BABYLON_MutableGamepadButton.prototype = {
	__class__: BABYLON_MutableGamepadButton
};
var BABYLON_ExtendedGamepadButton = function() { };
BABYLON_ExtendedGamepadButton.__name__ = true;
BABYLON_ExtendedGamepadButton.prototype = {
	__class__: BABYLON_ExtendedGamepadButton
};
var BABYLON_IShadowGenerator = function() { };
BABYLON_IShadowGenerator.__name__ = true;
BABYLON_IShadowGenerator.prototype = {
	__class__: BABYLON_IShadowGenerator
};
var BABYLON_IInternalTextureTracker = function() { };
BABYLON_IInternalTextureTracker.__name__ = true;
BABYLON_IInternalTextureTracker.prototype = {
	__class__: BABYLON_IInternalTextureTracker
};
var BABYLON_IMultiRenderTargetOptions = function() { };
BABYLON_IMultiRenderTargetOptions.__name__ = true;
BABYLON_IMultiRenderTargetOptions.prototype = {
	__class__: BABYLON_IMultiRenderTargetOptions
};
var BABYLON_VideoTextureSettings = function() { };
BABYLON_VideoTextureSettings.__name__ = true;
BABYLON_VideoTextureSettings.prototype = {
	__class__: BABYLON_VideoTextureSettings
};
var BABYLON_IDracoCompressionConfiguration = function() { };
BABYLON_IDracoCompressionConfiguration.__name__ = true;
BABYLON_IDracoCompressionConfiguration.prototype = {
	__class__: BABYLON_IDracoCompressionConfiguration
};
var BABYLON_IParticleEmitterType = function() { };
BABYLON_IParticleEmitterType.__name__ = true;
BABYLON_IParticleEmitterType.prototype = {
	__class__: BABYLON_IParticleEmitterType
};
var BABYLON_HDRInfo = function() { };
BABYLON_HDRInfo.__name__ = true;
BABYLON_HDRInfo.prototype = {
	__class__: BABYLON_HDRInfo
};
var BABYLON_CubeMapInfo = function() { };
BABYLON_CubeMapInfo.__name__ = true;
BABYLON_CubeMapInfo.prototype = {
	__class__: BABYLON_CubeMapInfo
};
var Launcher = function(width,height) {
	if(height == null) {
		height = 600;
	}
	if(width == null) {
		width = 800;
	}
	this.sceneChecked = false;
	this.scene = null;
	var _gthis = this;
	this.canvas = window.document.getElementById("renderCanvas");
	this.engine = new BABYLON.Engine(this.canvas,true);
	this.divFps = window.document.getElementById("fps");
	this.status = window.document.getElementById("status");
	this.engine.runRenderLoop($bind(this,this.update));
	BABYLON.SceneLoader.ShowLoadingScreen = false;
	this.engine.displayLoadingUI();
	window.setTimeout(function() {
		_gthis.scene = _gthis.createScene();
		if(_gthis.scene.activeCamera != null) {
			_gthis.scene.activeCamera.attachControl(_gthis.canvas,false);
		}
		_gthis.scene.executeWhenReady(function() {
			_gthis.canvas.style.opacity = "1";
			_gthis.engine.hideLoadingUI();
			BABYLON.SceneLoader.ShowLoadingScreen = true;
		});
	},15);
};
Launcher.__name__ = true;
Launcher.prototype = {
	createScene: function() {
		return null;
	}
	,update: function() {
		if(this.scene != null) {
			this.scene.render();
		}
		if(this.divFps != null) {
			var tmp = this.engine.getFps();
			this.divFps.innerHTML = tmp + " fps";
		}
		if(this.scene != null) {
			if(!this.sceneChecked) {
				var remaining = this.scene.getWaitingItemsCount();
				this.engine.loadingUIText = "Streaming items..." + (remaining > 0 ? remaining + " remaining" : "");
				if(remaining == 0) {
					this.sceneChecked = true;
				}
			}
			if(this.scene.activeCamera != null) {
				this.scene.render();
			}
			if(this.scene.useDelayedTextureLoading) {
				var waiting = this.scene.getWaitingItemsCount();
				if(waiting > 0) {
					this.status.innerHTML = "Streaming items..." + waiting + " remaining";
				} else {
					this.status.innerHTML = "";
				}
			}
		}
	}
	,__class__: Launcher
};
var Bones101 = function(width,height) {
	Launcher.call(this,width,height);
};
Bones101.__name__ = true;
Bones101.main = function() {
	new Bones101();
};
Bones101.__super__ = Launcher;
Bones101.prototype = $extend(Launcher.prototype,{
	createScene: function() {
		var scene = new BABYLON.Scene(this.engine);
		var light = new BABYLON.DirectionalLight("dir01",new BABYLON.Vector3(0,-0.5,-1.0),scene);
		var camera = new BABYLON.ArcRotateCamera("Camera",0,0,10,new BABYLON.Vector3(0,30,0),scene);
		camera.setPosition(new BABYLON.Vector3(20,70,120));
		light.position = new BABYLON.Vector3(20,150,70);
		camera.minZ = 10.0;
		camera.attachControl(this.canvas,true);
		scene.ambientColor = new BABYLON.Color3(0.3,0.3,0.3);
		var ground = BABYLON.Mesh.CreateGround("ground",1000,1000,1,scene,false);
		var groundMaterial = new BABYLON.StandardMaterial("ground",scene);
		groundMaterial.diffuseColor = new BABYLON.Color3(0.2,0.2,0.2);
		groundMaterial.specularColor = new BABYLON.Color3(0,0,0);
		ground.material = groundMaterial;
		ground.receiveShadows = true;
		var shadowGenerator = new BABYLON.ShadowGenerator(1024,light);
		BABYLON.SceneLoader.ImportMesh("Rabbit","/scenes/","Rabbit.babylon",scene,function(newMeshes,particleSystems,skeletons,_) {
			var rabbit = newMeshes[1];
			rabbit.scaling = new BABYLON.Vector3(0.4,0.4,0.4);
			shadowGenerator.getShadowMap().renderList.push(rabbit);
			var rabbit2 = rabbit.clone("rabbit2",null);
			var rabbit3 = rabbit.clone("rabbit2",null);
			shadowGenerator.getShadowMap().renderList.push(rabbit2);
			shadowGenerator.getShadowMap().renderList.push(rabbit3);
			rabbit2.position = new BABYLON.Vector3(-50,0,-20);
			rabbit2.skeleton = rabbit.skeleton.clone("clonedSkeleton","");
			rabbit3.position = new BABYLON.Vector3(50,0,-20);
			rabbit3.skeleton = rabbit.skeleton.clone("clonedSkeleton2","");
			scene.beginAnimation(skeletons[0],0,100,true,0.8);
			scene.beginAnimation(rabbit2.skeleton,73,100,true,0.8);
			scene.beginAnimation(rabbit3.skeleton,0,72,true,0.8);
			BABYLON.SceneLoader.ImportMesh("him","/scenes/Dude/","Dude.babylon",scene,function(newMeshes2,particleSystems2,skeletons2,_1) {
				var dude = newMeshes2[0];
				var _g1 = 0;
				var _g = newMeshes2.length;
				while(_g1 < _g) {
					var index = _g1++;
					shadowGenerator.getShadowMap().renderList.push(newMeshes2[index]);
				}
				dude.rotation.y = Math.PI;
				dude.position = new BABYLON.Vector3(0,0,-80);
				scene.beginAnimation(skeletons2[0],0,100,true,1.0);
			});
		});
		return scene;
	}
	,__class__: Bones101
});
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var haxe_ds_Either = { __ename__ : true, __constructs__ : ["Left","Right"] };
haxe_ds_Either.Left = function(v) { var $x = ["Left",0,v]; $x.__enum__ = haxe_ds_Either; return $x; };
haxe_ds_Either.Right = function(v) { var $x = ["Right",1,v]; $x.__enum__ = haxe_ds_Either; return $x; };
var haxe_io_FPHelper = function() { };
haxe_io_FPHelper.__name__ = true;
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) {
		return 0.0;
	}
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) {
		return 0;
	}
	var af = f < 0 ? -f : f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) {
		exp = -127;
	} else if(exp > 128) {
		exp = 128;
	}
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608);
	if(sig == 8388608 && exp < 128) {
		sig = 0;
		++exp;
	}
	return (f < 0 ? -2147483648 : 0) | exp + 127 << 23 | sig;
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new js__$Boot_HaxeError(val);
	}
};
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		if((o instanceof Array)) {
			return o.__enum__ == null;
		} else {
			return false;
		}
		break;
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return true;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return (o|0) === o;
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					return true;
				}
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ == cl;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g1 = 0;
		var _g = len;
		while(_g1 < _g) {
			var i = _g1++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
js_html_compat_ArrayBuffer.__name__ = true;
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null ? null : end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_Float32Array = function() { };
js_html_compat_Float32Array.__name__ = true;
js_html_compat_Float32Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g1 = 0;
		var _g = arg1;
		while(_g1 < _g) {
			var i = _g1++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = 0;
		var _g2 = [];
		var _g21 = 0;
		var _g11 = arr.length << 2;
		while(_g21 < _g11) {
			var i1 = _g21++;
			_g2.push(0);
		}
		arr.buffer = new js_html_compat_ArrayBuffer(_g2);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) {
			offset = 0;
		}
		if(length == null) {
			length = buffer.byteLength - offset >> 2;
		}
		arr = [];
		var _g12 = 0;
		var _g3 = length;
		while(_g12 < _g3) {
			var i2 = _g12++;
			var val = buffer.a[offset++] | buffer.a[offset++] << 8 | buffer.a[offset++] << 16 | buffer.a[offset++] << 24;
			arr.push(haxe_io_FPHelper.i32ToFloat(val));
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		var buffer1 = [];
		var _g4 = 0;
		while(_g4 < arr.length) {
			var f = arr[_g4];
			++_g4;
			var i3 = haxe_io_FPHelper.floatToI32(f);
			buffer1.push(i3 & 255);
			buffer1.push(i3 >> 8 & 255);
			buffer1.push(i3 >> 16 & 255);
			buffer1.push(i3 >>> 24);
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(buffer1);
	} else {
		throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	}
	arr.subarray = js_html_compat_Float32Array._subarray;
	arr.set = js_html_compat_Float32Array._set;
	return arr;
};
js_html_compat_Float32Array._set = function(arg,offset) {
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			this[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this[i1 + offset] = a1[i1];
		}
	} else {
		throw new js__$Boot_HaxeError("TODO");
	}
};
js_html_compat_Float32Array._subarray = function(start,end) {
	var a = js_html_compat_Float32Array._new(this.slice(start,end));
	a.byteOffset = start * 4;
	return a;
};
var js_html_compat_Uint8Array = function() { };
js_html_compat_Uint8Array.__name__ = true;
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g1 = 0;
		var _g = arg1;
		while(_g1 < _g) {
			var i = _g1++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) {
			offset = 0;
		}
		if(length == null) {
			length = buffer.byteLength - offset;
		}
		if(offset == 0) {
			arr = buffer.a;
		} else {
			arr = buffer.a.slice(offset,offset + length);
		}
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else {
		throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	}
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			this[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this[i1 + offset] = a1[i1];
		}
	} else {
		throw new js__$Boot_HaxeError("TODO");
	}
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var a = js_html_compat_Uint8Array._new(this.slice(start,end));
	a.byteOffset = start;
	return a;
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
var ArrayBuffer = $global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) {
	ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
}
var Float32Array = $global.Float32Array || js_html_compat_Float32Array._new;
var Uint8Array = $global.Uint8Array || js_html_compat_Uint8Array._new;
js_Boot.__toStr = ({ }).toString;
js_html_compat_Float32Array.BYTES_PER_ELEMENT = 4;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
Bones101.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
