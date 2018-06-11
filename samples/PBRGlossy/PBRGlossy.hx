class PBRGlossy extends Launcher {

    static function main() {
        new PBRGlossy();
    }

    private override function createScene() {
        var scene = new BABYLON.Scene(engine);
        scene.createDefaultCameraOrLight(true, true, true);
        scene.clearColor = new BABYLON.Color4(0.02, 0.02, 0.02, 1.0);
        scene.imageProcessingConfiguration.contrast = 1.6;
        scene.imageProcessingConfiguration.exposure = 0.6;
        scene.imageProcessingConfiguration.toneMappingEnabled = true;
        engine.setHardwareScalingLevel(0.5);
        var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("../../assets/environment.dds", scene);
        hdrTexture.gammaSpace = false;
        BABYLON.SceneLoader.Append("../../assets/DamagedHelmet/glTF/", "DamagedHelmet.gltf", scene, function(scene) {
            scene.createDefaultSkybox(hdrTexture, true, 100, 0.3);
            var camera:BABYLON.ArcRotateCamera = cast scene.activeCamera;
            camera.lowerRadiusLimit = 2;
            camera.upperRadiusLimit = 20;
            var options = new BABYLON.SceneOptimizerOptions(50, 2000);
            options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1));
            // Optimizer
            var optimizer = new BABYLON.SceneOptimizer(scene, options);
            optimizer.start();
            optimizer.onNewOptimizationAppliedObservable.add(function(optim, state) {
                trace(optim.getDescription());
            });
            optimizer.onSuccessObservable.add(function(optimizer, state) {
                trace("Optimization done");
            });
        });
        return scene;
    }
}
