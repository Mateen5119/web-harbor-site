import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('hero-canvas');
  if (!container) return;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 5);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // PixelRatio clamping
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.0;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0x38bdf8, 2); // Cyan accent
  dirLight.position.set(5, 5, 5);
  scene.add(dirLight);

  const fillLight = new THREE.DirectionalLight(0x6366f1, 2); // Indigo accent
  fillLight.position.set(-5, -5, -5);
  scene.add(fillLight);

  // Load Model
  const loader = new GLTFLoader();
  loader.load('./assets/3d/DamagedHelmet.glb', (gltf) => {
    const model = gltf.scene;
    // Center and scale the model
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.x += (model.position.x - center.x);
    model.position.y += (model.position.y - center.y);
    model.position.z += (model.position.z - center.z);

    // Scale down a bit to fit nicely
    model.scale.set(1.5, 1.5, 1.5);

    scene.add(model);
  }, undefined, (error) => {
    console.error('An error occurred loading the 3D model:', error);
  });

  function animate() {
    controls.update();
    renderer.render(scene, camera);
  }

  // IntersectionObserver to pause rendering when out of view (Optimization Checklist)
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      renderer.setAnimationLoop(animate);
    } else {
      renderer.setAnimationLoop(null);
    }
  }, { threshold: 0.1 });

  observer.observe(container);

  window.addEventListener('resize', () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
});
