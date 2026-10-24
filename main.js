import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometría compartida por los tres cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Cubo verde (izquierda)
const cubeGreen = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: 0x00ff00 })
);
cubeGreen.position.x = -1.6;

// Cubo azul (centro)
const cubeBlue = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: 0x0000ff })
);
cubeBlue.position.x = 0;

// Cubo rojo (derecha)
const cubeRed = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
cubeRed.position.x = 1.6;

scene.add(cubeGreen, cubeBlue, cubeRed);

// Luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Velocidades de rotación
const speedGreen = 0.01; // lenta
const speedBlue  = 0.05;  // media
const speedRed   = 0.1;  // rápida

// Función de animación
function animate() {
    cubeGreen.rotation.x += speedGreen;
    cubeGreen.rotation.y += speedGreen;

    cubeBlue.rotation.x += speedBlue;
    cubeBlue.rotation.y += speedBlue;

    cubeRed.rotation.x += speedRed;
    cubeRed.rotation.y += speedRed;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);

// Ajustar al redimensionar la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});