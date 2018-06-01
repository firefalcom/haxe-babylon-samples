class Lines extends Launcher {

    static function main() {
        new Lines();
    }

    private override function createScene() {
        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
        camera.setPosition(new BABYLON.Vector3(20, 200, 400));
        camera.maxZ = 20000;
        camera.lowerRadiusLimit = 150;
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
        // Create a whirlpool
        var points = [];
        var radius = 0.5;
        var angle = 0.0;
        for(index in 0...1000) {
            points.push(new BABYLON.Vector3(radius * Math.cos(angle), 0, radius * Math.sin(angle)));
            radius += 0.3;
            angle += 0.1;
        }
        var whirlpool = BABYLON.Mesh.CreateLines("whirlpool", points, scene, true);
        whirlpool.color = new BABYLON.Color3(1, 1, 1);
        //Wrong type in the binding
        var positionData : js.html.Float32Array = cast whirlpool.getVerticesData(BABYLON.VertexBuffer.PositionKind);
        var heightRange = 10;
        var alpha = 0.0;
        scene.registerBeforeRender(function() {
            for(index in 0...1000) {
                positionData[index * 3 + 1] = heightRange * Math.sin(alpha + index * 0.1);
            }
            whirlpool.updateVerticesData(BABYLON.VertexBuffer.PositionKind, cast positionData);
            alpha += 0.05 * scene.getAnimationRatio();
        });
        return scene;
    }
}
