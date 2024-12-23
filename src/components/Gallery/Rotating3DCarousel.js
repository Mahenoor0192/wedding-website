// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const Rotating3DCarousel = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Scene
//     const scene = new THREE.Scene();

//     // Camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       mountRef.current.clientWidth / mountRef.current.clientHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 5;

//     // Renderer
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Geometry and Materials for Images
//     const textureLoader = new THREE.TextureLoader();
//     const images = [
//       'DSC03295.JPG', // Replace with your image filenames
//       'DSC03660.JPG',
//       'DSC03892.JPG',
//       'DSC04130.JPG',
//       'DSC04536.JPG',
//       'DSC04764.JPG',
//     ];

//     const radius = 3; // Radius of the carousel
//     const imageMeshes = images.map((image, index) => {
//       const texture = textureLoader.load(require(`../../assets/images/${image}`));
//       const material = new THREE.MeshBasicMaterial({ map: texture });
//       const geometry = new THREE.PlaneGeometry(1, 1.5);
//       const mesh = new THREE.Mesh(geometry, material);

//       const angle = (index / images.length) * Math.PI * 2;
//       mesh.position.set(
//         Math.cos(angle) * radius,
//         0,
//         Math.sin(angle) * radius
//       );
//       scene.add(mesh);
//       return mesh;
//     });

//     // Animation Loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate the carousel
//       imageMeshes.forEach((mesh) => {
//         mesh.rotation.y += 0.01;
//       });

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Cleanup
//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{ width: '100%', height: '100vh', overflow: 'hidden' }}
//     />
//   );
// };

// export default Rotating3DCarousel;
