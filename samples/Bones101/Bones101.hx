class Bones101 extends Launcher {

    static function main() {
        new Bones101();
    }

    private override function createScene() {
        var scene = new BABYLON.Scene(engine);
        var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, -1.0), scene);
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 30, 0), scene);
        camera.setPosition(new BABYLON.Vector3(20, 70, 120));
        light.position = new BABYLON.Vector3(20, 150, 70);
        camera.minZ = 10.0;
        camera.attachControl(canvas, true);
        scene.ambientColor = new BABYLON.Color3(0.3, 0.3, 0.3);
        // Ground
        var ground = BABYLON.Mesh.CreateGround("ground", 1000, 1000, 1, scene, false);
        var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
        groundMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);
        groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        ground.material = groundMaterial;
        ground.receiveShadows = true;
        // Shadows
        var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        // Meshes
        BABYLON.SceneLoader.ImportMesh("Rabbit", "../../assets/Rabbit/", "Rabbit.babylon", scene, function(newMeshes, particleSystems, skeletons, _) {
            var rabbit:BABYLON.Mesh = cast newMeshes[1];
            rabbit.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4);
            shadowGenerator.getShadowMap().renderList.push(rabbit);
            var rabbit2:BABYLON.Mesh = cast rabbit.clone("rabbit2", null);
            var rabbit3:BABYLON.Mesh = cast rabbit.clone("rabbit2", null);
            shadowGenerator.getShadowMap().renderList.push(rabbit2);
            shadowGenerator.getShadowMap().renderList.push(rabbit3);
            rabbit2.position = new BABYLON.Vector3(-50, 0, -20);
            rabbit2.skeleton = rabbit.skeleton.clone("clonedSkeleton", "");
            rabbit3.position = new BABYLON.Vector3(50, 0, -20);
            rabbit3.skeleton = rabbit.skeleton.clone("clonedSkeleton2", "");
            scene.beginAnimation(skeletons[0], 0, 100, true, 0.8);
            scene.beginAnimation(rabbit2.skeleton, 73, 100, true, 0.8);
            scene.beginAnimation(rabbit3.skeleton, 0, 72, true, 0.8);
            // Dude
            BABYLON.SceneLoader.ImportMesh("him", "../../assets/Dude/", "dude.babylon", scene, function(newMeshes2, particleSystems2, skeletons2, _) {
                var dude:BABYLON.Mesh = cast newMeshes2[0];
                for(index in 0...newMeshes2.length) {
                    shadowGenerator.getShadowMap().renderList.push(newMeshes2[index]);
                }
                dude.rotation.y = Math.PI;
                dude.position = new BABYLON.Vector3(0, 0, -80);
                scene.beginAnimation(skeletons2[0], 0, 100, true, 1.0);
            });
        });
        return scene;
    }
}
