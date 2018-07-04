
class SPS extends BABYLON.SolidParticleSystem{

    public var boom = false;
    public var ground : BABYLON.GroundMesh;
    //  Particle parameters
    var size:Float;
    var gravity:Float;
    var restitution:Float;
    var friction:Float;
    var speed : Float;
    var widthNb : Int;
    var heightNb : Int;

    public function new( name:String, scene, options, ground, widthNb, heightNb, size, gravity, restitution, friction, speed ){
        this.size = size;
        this.gravity = gravity;
        this.restitution = restitution;
        this.friction = friction;
        this.speed = speed;
        this.widthNb = widthNb;
        this.heightNb = heightNb;
        this.ground = ground;
        super("sps", scene, { isPickable: true });
    }


    // SPS initializer: just set the particle along a vertical wall
    public override function initParticles() {
        var p = 0;
        for (j in 0...heightNb) {
            for (i in 0...widthNb) {

                // let's position the quads on a grid
                particles[p].position.x = i * size + vars.shiftx;
                particles[p].position.y = j * size + vars.shifty;
                particles[p].position.z = 0;

                // let's set the texture per quad
                particles[p].uvs.x = i * size / vars.totalWidth;
                particles[p].uvs.y = j * size / vars.totalHeight;
                particles[p].uvs.z = (i + 1) * size / vars.totalWidth;
                particles[p].uvs.w = (j + 1) * size / vars.totalHeight;

                // set a custom random value per particle
                Reflect.setField(particles[p], 'rand', 1 / (1 + Math.random()) / 10);

                // increment the particle index
                p++;
            }
        }
    }

    // SPS behavior : this function is called by setParticles() for each particle
    public override function updateParticle(p:BABYLON.SolidParticle):BABYLON.SolidParticle {

        // just after the click, set once the initial velocity
        if (vars.justClicked) {
            // let's give them an initial velocity according to their distance from the explosion center
            p.position.subtractToRef(vars.target, vars.tmp);
            var len = vars.tmp.length();
            var scl = (len < 0.001) ? 1.0 : vars.radius / len;
            vars.tmp.normalize();
            p.velocity.x += vars.tmp.x * scl * speed * (1 + Math.random() * .3);
            p.velocity.y += vars.tmp.y * scl * speed * (1 + Math.random() * .3);
            p.velocity.z += vars.tmp.z * scl * speed * (1 + Math.random() * .3);
            if (p.idx == nbParticles - 1) {
                vars.justClicked = false;  // last particle initialized
            }
        }

        // move the particle
        if (boom && !vars.justClicked) {

            vars.minY = ground.getHeightAtCoordinates(p.position.x, p.position.z) + size;  // get the current ground altitude beneath the particle
            vars.loss = -restitution * Reflect.field(p, 'rand') * 10;             // negate and attenuation

            if (p.position.y < vars.minY) {
                // we compute the vector V2 symetric to the velocity vector V1 by the ground normal axis N : V2 = (2 * (N.V1) / ||N||²) * N - V1
                ground.getNormalAtCoordinatesToRef(p.position.x, p.position.z, vars.norm);      // get the ground normal
                vars.sym = 2 * (vars.norm.x * p.velocity.x + vars.norm.y * p.velocity.y + vars.norm.z * p.velocity.z) / vars.norm.lengthSquared();    // 2 * (N.V1) / ||N||²

                p.velocity.x = vars.sym * vars.norm.x - p.velocity.x;
                p.velocity.z = vars.sym * vars.norm.z - p.velocity.z;
                p.velocity.y = vars.sym * vars.norm.y - p.velocity.y;
                p.velocity.x *= vars.loss;
                p.velocity.y *= vars.loss;
                p.velocity.z *= vars.loss;
            }

            // move
            p.velocity.y += gravity;
            p.position.x += p.velocity.x;
            p.position.y += p.velocity.y;
            p.position.z += p.velocity.z;

            // rotate
            var rand = Reflect.field(p, 'rand');
            p.rotation.x += (p.velocity.z) * rand;
            p.rotation.y += (p.velocity.x) * rand;
            p.rotation.z += (p.velocity.y) * rand;

            // don't fall forever : beneath a certain y velocity limit, prevent the particle from bouncing or falling and apply the ground friction
            if (p.position.y < vars.minY && Math.abs(p.velocity.y) < 0.1 - gravity) {
                p.velocity.x *= friction;
                p.velocity.z *= friction;
                p.position.y = vars.minY;
                p.velocity.y = 0;
            }
        }

        return p;
    }

    // If we want the shadows to fit the bounding box, we need to update it once per frame
	public override function afterUpdateParticles(?start:Float, ?stop:Float, ?update:Bool):Void{
        this.refreshVisibleSize();
    }

}



class Boom extends Launcher {

    static function main() {
        new Boom();
    }

    private override function createScene() {

    //  Particle parameters
    var size = 10;                      // particle size
    var gravity = -0.07;                // gravity
    var restitution = 0.9;              // energy restitution on ground collision ex : 0.6 => 60 %
    var friction = 0.995;               // ground friction once the particle has landed
    var widthNb = 30;                   // width particle number
    var heightNb = 20;                  // height particle number
    var radius = size * heightNb / 12;  // explosion radius
    var speed = radius * 1.2;           // particle max speed

    // Ground parameters
    var subdivisions = 50;
    var width = 1000;
    var height = 1000;
    var groungHeight = width / 6;

    // Scene and camera
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(.4, .6, .8).toColor4(1);
    var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, -0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 0, -800));
    camera.attachControl(canvas, true);

    // Lights
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.groundColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    light.intensity = 0.2;

    var dir = new BABYLON.Vector3(0, -1, 1);
    var dirLight = new BABYLON.DirectionalLight("dl", dir, scene);
    dirLight.position = new BABYLON.Vector3(0, 200, -1000);
    dirLight.diffuse = BABYLON.Color3.White();
    dirLight.intensity = 0.8;
    dirLight.specular = new BABYLON.Color3(0.5, 0.5, 0.2);

    var pl = new BABYLON.PointLight("pl", new BABYLON.Vector3(0, 0, 0), scene);
    pl.diffuse = new BABYLON.Color3(1, 1, 1);
    pl.specular = BABYLON.Color3.Black();
    pl.intensity = 0.4;

    // Text
    var text = "BabylonJS Roxxx";
    var font = "bold 56px Arial";
    var tx = new BABYLON.DynamicTexture("dt", { width: 500, height: 65 }, scene, null, null, null);
    tx.hasAlpha = true;
    //var clearColor = "transparent";
    var clearColor = "red";
    tx.drawText(text, null, 45, font, "blue", clearColor, true, false);
    tx.drawText("CLICK = BOOM", null, 60, "bold 20px Arial", "yellow", null, true, true);

    var mat = new BABYLON.StandardMaterial("mat1", scene);
    mat.diffuseTexture = tx;
    mat.freeze();

    // Landscape
    // =========

    // Ground
    var quadsReady = false;
    // callback function to call when the ground is ready
    var setQuads = function (mesh) {
        quadsReady = true;
        mesh.getHeightAtCoordinates(mesh.position.x, mesh.position.z);                // forces the underlying altitude array initialization
    };
    var options = { width: width, height: height, subdivisions: subdivisions, minHeight: 0, maxHeight: groungHeight, onReady: setQuads };
    var ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", "../../assets/heightMap.png", cast options, scene);
    var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    var diffuseTexture : BABYLON.Texture;
    groundMaterial.diffuseTexture = diffuseTexture = new BABYLON.Texture("../../assets/ground.jpg", scene);
    diffuseTexture.uScale = 6;
    diffuseTexture.vScale = 6;
    groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    ground.material = groundMaterial;
    ground.isPickable = false;
    ground.position.y = -heightNb * size;
    ground.position.z = heightNb * size;
    groundMaterial.freeze();
    ground.freezeWorldMatrix();

    // Disc
    var disc = BABYLON.MeshBuilder.CreateDisc("d", { radius: width * 4 }, scene);
    disc.position = ground.position;
    disc.position.y -= 0.1;

    disc.rotation.x = Math.PI / 2;
    var groundMaterial2 = new BABYLON.StandardMaterial("ground", scene);
    var diffuseTexture : BABYLON.Texture;
    groundMaterial2.diffuseTexture = diffuseTexture = new BABYLON.Texture("../../assets/ground.jpg", scene);
    diffuseTexture.uScale = 50;
    diffuseTexture.vScale = 50;
    groundMaterial2.specularColor = new BABYLON.Color3(0, 0, 0);
    groundMaterial2.zOffset = 1;
    groundMaterial2.freeze();
    disc.material = groundMaterial2;
    disc.isPickable = false;
    disc.freezeWorldMatrix();

    // SPS : the particles !
    var model = BABYLON.MeshBuilder.CreateBox("m", { size: size }, scene);
    var sps = new SPS("sps", scene, { isPickable: true }, ground, widthNb, heightNb, size, gravity, restitution, friction, speed);
    var nb = widthNb * heightNb;
    sps.addShape(model, nb);
    model.dispose();
    var s = sps.buildMesh();
    s.material = mat;
    s.freezeWorldMatrix();

    // SPS tmp internal vars to avoid memory re-allocations
    sps.vars.target = BABYLON.Vector3.Zero();                                               // the target point where to set the explosion center
    sps.vars.tmp = BABYLON.Vector3.Zero();                                                  // tmp vector3
    sps.vars.totalWidth = size * widthNb;                                                   // wall width
    sps.vars.totalHeight = size * heightNb;                                                 // wall height
    sps.vars.shiftx = -sps.vars.totalWidth / 2;                                             // shift value to center the wall on X
    sps.vars.shifty = -sps.vars.totalHeight / 2;                                            // shift value to center the wall on Y
    sps.vars.radius = radius;                                                               // explosion radius
    sps.vars.minY = 0.0;                                                                     // current ground altitude
    sps.vars.norm = BABYLON.Vector3.Zero();                                                 // current ground normal
    sps.vars.sym = 0.0;                                                                     // tmp for symetry computation around the normal
    sps.vars.loss = 0.0;                                                                    // tmp float for energy loss
    sps.vars.justClicked = false;                                                           // flag to compute or not the initial velocities

    // Shadows : cast to the ground and to the disc
    var shadowGenerator = new BABYLON.ShadowGenerator(1024, dirLight);
    shadowGenerator.getShadowMap().renderList.push(s);
    shadowGenerator.setDarkness(0.2);
    shadowGenerator.usePoissonSampling = true;
    ground.receiveShadows = true;
    disc.receiveShadows = true;

    // Init sps
    sps.initParticles();     // compute initial particle positions
    sps.setParticles();                             // set them
    sps.computeParticleColor = false;               // the colors won't change
    sps.computeParticleTexture = false;             // nor the texture now

    // Boom trigger
    scene.onPointerDown = function (evt : js.html.PointerEvent, pickResult:BABYLON.PickingInfo, e:BABYLON.PointerEventTypes) {
        var faceId = pickResult.faceId;
        if (faceId == -1) { return; }
        var idx = sps.pickedParticles[Std.int(faceId)].idx;
        var p = sps.particles[Std.int(idx)];
        sps.boom = true;
        // set the target (explosion center) at the distance "radius" from the picked particle on the camera-particle axis
        camera.position.subtractToRef(p.position, sps.vars.target);
        sps.vars.target.normalize();
        sps.vars.target.scaleInPlace(radius);
        sps.vars.target.addInPlace(p.position);
        sps.vars.justClicked = true;
    }

    // Animation
    // scene.debugLayer.show();
    scene.registerBeforeRender(function () {
        sps.setParticles();
        pl.position = camera.position;
    });

    return scene;

    }
}