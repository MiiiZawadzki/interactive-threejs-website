import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


export function useThreeJS() {

    const init = async () => {
        const container = document.getElementById('threejs-container');

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        camera.position.set(0, 2, 7);
        camera.lookAt(0, 0, 0);
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        const loader = new GLTFLoader();

        initLight();

        const model = await initModel();

        const boundingBox = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        boundingBox.getCenter(center);
        model.position.sub(center);

        const modelGroup = new THREE.Group();
        scene.add(modelGroup);
        modelGroup.add(model);

        let carRotationSpeed = Math.PI / 2;

        let clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);

            const delta = clock.getDelta();

            modelGroup.rotation.y += carRotationSpeed * delta;
            renderer.render(scene, camera);
        }

        animate();

        window.addEventListener('resize', () => {
            const width = container.offsetWidth;
            const height = container.offsetHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);

        });

        let canRotate = false;

        window.addEventListener('mousedown', () => {
            canRotate = true;
        });

        window.addEventListener('mousemove', (event) => {
            if (canRotate) {
                const yRotation = (event.clientX / container.offsetWidth) * Math.PI * 2;

                modelGroup.rotation.y = yRotation;
                carRotationSpeed = 0;
            }
        });

        window.addEventListener('mouseup', () => {
            carRotationSpeed = Math.PI / 2;
            canRotate = false;
        });

        async function initModel() {
            /*
                Car model from: https://sketchfab.com/3d-models/ac-mclaren-p1-free-747cedadc302451db61deafc85941395
                Model Author: D3DARTM
                License: Free Standard
            */
            const modelPath = new URL('@/assets/models/car.glb', import.meta.url).href;

            const loadedData = await loader.loadAsync(modelPath);
            const model = loadedData.scene;
            model.position.set(0, 0);
            return model;
        }

        function initLight() {
            const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
            spotLight.position.set(0, 15, 0);
            scene.add(spotLight);

            const ambientLight = new THREE.AmbientLight(0xffffff, 1);
            scene.add(ambientLight);
        }
    };

    return {
        init
    };
}