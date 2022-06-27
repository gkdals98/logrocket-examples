
import { Scene, Engine, FreeCamera, HemisphericLight, MeshBuilder, Vector3 } from "@babylonjs/core"

export class BabylonScene {
    scene: Scene;
    engine: Engine;
    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true);
        this.scene = this.CreateScene()
        this.engine.runRenderLoop(() => {
            this.scene.render()
        })
    }
    CreateScene(): Scene {
        const scene = new Scene(this.engine)

        const Camera = new FreeCamera("camera", new Vector3(0, 1, -5), this.scene)
        Camera.attachControl()
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene)
        light.intensity = 0.5

        const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, this.scene)
        const sphereball = MeshBuilder.CreateSphere("sphereball", { diameter: 1 }, this.scene)
        sphereball.position = new Vector3(0, 1, 0)
        return scene
    }

}