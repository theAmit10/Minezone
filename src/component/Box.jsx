import React, { useEffect } from 'react';
import * as THREE from 'three';

const Box = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const boxCount = 6;
    const boxSize = 1;
    const boxSpacing = 2;
    const boxes = [];

    for (let i = 0; i < boxCount; i++) {
      const boxGeometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
      const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
      boxMesh.position.x = (i - (boxCount - 1) / 2) * boxSpacing;
      boxMesh.userData.id = i; // Add a unique ID to each box
      boxes.push(boxMesh);
      scene.add(boxMesh);
    }

    camera.position.z = 5;

    const handleBoxClick = (event) => {
      const mouse = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(boxes);

      if (intersects.length > 0) {
        const clickedBox = intersects[0].object;
        console.log(`Box ${clickedBox.userData.id + 1} clicked!`);
      }
    };

    renderer.domElement.addEventListener('click', handleBoxClick);

    const animate = () => {
      requestAnimationFrame(animate);

      boxes.forEach((box) => {
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // return () => {
    //   renderer.domElement.removeEventListener('click', handleBoxClick);
    // };
  }, []);

  return <div></div>;
};

export default Box;
