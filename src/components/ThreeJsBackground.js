import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import flowerTexture from "../assets/images/flower.jpg"; // Replace with your flower texture

const ThreeJsBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Create Plane with Flower Texture
        const textureLoader = new THREE.TextureLoader();
        const geometry = new THREE.PlaneGeometry(10, 10);
        const material = new THREE.MeshBasicMaterial({
            map: textureLoader.load(flowerTexture),
        });
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        // Position Camera
        camera.position.z = 5;

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            plane.rotation.z += 0.001; // Adjust rotation speed for visible effect
            renderer.render(scene, camera);
        };

        animate();

        // Clean up on Component Unmount
        return () => {
            while (mountRef.current.firstChild) {
                mountRef.current.removeChild(mountRef.current.firstChild);
            }
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            className="rotating-flower" 
            style={{ position: "absolute", width: "100%", height: "100%" }} 
        />
    );
    
};

export default ThreeJsBackground;
