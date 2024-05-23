import React, { useRef, useEffect, useState } from 'react'
import "./AboutMe.css";
import * as THREE from "three"; 
import {Typography} from "@mui/material"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import javaImage from "../../assets/java.png"
import abc from "../../assets/android.png"
import androidStudioImage from "../../assets/androidstudio.png"
import firebaseImage from "../../assets/firebase.png"
import javaScriptImage from "../../assets/javascript.png"
import pythonImage from "../../assets/python.png"
import reactNativeImage from "../../assets/reactnative.png"
// import abc from "../../assets/abcd.jpg"

const AboutMe = () => {


  const canvasRef = useRef();
  const [paragraphContent, setParagraphContent] = useState('Measuring programming progress by lines of code is like measuring aircraft building progress by weight');

  const changeContentOne = () => {
    setParagraphContent('Awesome Life!! one');
  };

  const changeContentTwo = () => {
    setParagraphContent('Awesome Life!! two');
  };

  const changeContentThree = () => {
    setParagraphContent('Awesome Life!! three');
  };

  const changeContentFour = () => {
    setParagraphContent('Awesome Life!! four');
  };

  const changeContentFive = () => {
    setParagraphContent('Awesome Life!! five');
  };

  const changeContentSix = () => {
    setParagraphContent('Awesome Life!! six');
  };

  useEffect(() => {
    let scene, camera, renderer, model, mixer,handModel,handMixer;
    scene =  new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    

    const canvas =  document.querySelector(".aboutmeCanvas");
    renderer = new THREE.WebGLRenderer({canvas});
    
    camera.position.z = 5;

    const pointLight = new THREE.PointLight(0x00abf0, 100);
  
    pointLight.position.set(-4.5,-0.8, 1);
    // const lightHelper  = new THREE.PointLightHelper(pointLight);
    // creating light control
    // const controls = new OrbitControls(camera, renderer.domElement);

    // const backgroundColor = 0x112e42; // Light blue color in hexadecimal format 00abf0
    // scene.background = new THREE.Color(backgroundColor);

    


    const geometry = new THREE.BoxGeometry(0.7,0.7,0.7);
    // const material = new THREE.MeshBasicMaterial({color:0x00ff00});

    // Create a material for each side with a different texture
    const textures = [
      abc,
      abc,
      abc,
      abc,
      abc,
      abc,
    ];

    const materials = textures.map((texturePath) => {
      const texture = new THREE.TextureLoader().load(texturePath);
      return new THREE.MeshBasicMaterial({ map: texture });
    });

    const mesh = new THREE.Mesh(geometry,materials);

    // mesh.position.set(-4.5,-0.8, 1);
    mesh.position.set(3.5,1, 2);

    scene.add(mesh);
    scene.add(pointLight);
    // scene.add(boxObject);
    // scene.add(lightHelper)

   // skills boxes

   
    // const material = new THREE.MeshBasicMaterial({color:0x00ff00});

  
    scene.add(pointLight);


    // adding scientific desk


    let loadedModel;
    const glftLoader = new GLTFLoader();
    const ambidentLight = new THREE.PointLight(0xffffff, 100);

    glftLoader.load('sci_fi_panels_low.glb',(gltf) => {
      console.log("added");
      loadedModel = gltf;
      model = gltf.scene;
      console.log(loadedModel);
      // gltf.scene.position.set(1,-2,1);
      gltf.scene.position.set(0,-3,-1);
      gltf.scene.scale.set(0.04, 0.04, 0.03)
      ambidentLight.position.set(1,1,1)



      // Set up animation mixer
      mixer = new THREE.AnimationMixer(model);

      // Find all animations in the model and play the first one
      gltf.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
      });


      scene.add(gltf.scene);
      scene.add(ambidentLight);


    },undefined,(error) => {
      console.log("error happen")
      console.log("error boy "+error)
      console.log("error boy two "+error.message)
    });





    



    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        mesh.rotation.x -= constSpeed;
        mesh.rotation.y += constSpeed;
       
      }

      if (e.clientX > window.innerWidth / 2) {
        mesh.rotation.x -= constSpeed;
        mesh.rotation.y -= constSpeed;
      
      }

      if (e.clientY > window.innerHeight / 2) {
        mesh.rotation.x -= constSpeed;
        mesh.rotation.y += constSpeed;
        
      }

      if (e.clientY <= window.innerHeight / 2) {
        mesh.rotation.x -= constSpeed;
        mesh.rotation.y -= constSpeed;
        
      }
    });



    // handle click on each side of the cube

    // Handle clicks on different faces of the box
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleBoxClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(mesh);

      if (intersects.length > 0) {
        const faceIndex = intersects[0].faceIndex;
        handleFaceClick(faceIndex);
      }
    };

    const handleFaceClick = (faceIndex) => {
      switch (faceIndex) {
        case 0:
          changeContentOne();
          console.log("Clicked on front face");
          break;
        case 1:
          changeContentTwo();
          console.log("Clicked on back face");
          break;
        case 2:
          changeContentThree();
          console.log("Clicked on top face");
          break;
        case 3:
          changeContentFour();
          console.log("Clicked on bottom face");
          break;
        case 4:
          changeContentFive();
          console.log("Clicked on right face");
          break;
        case 5:
          changeContentSix();
          console.log("Clicked on left face");
          break;
        default:
          break;
      }
    };

    window.addEventListener('click', handleBoxClick);



    


  

    const animate = () => {
      requestAnimationFrame(animate);

      // Update the animation mixer
      if (mixer) {
        mixer.update(0.016); // Time delta, use a fixed value or a more accurate time delta calculation
      }
      mesh.rotation.y += 0.01;
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene,camera);
    }


    animate();   



  },[])



  return (
    <div className="homeSkills">
      <Typography variant="h3">WHO AM I</Typography>
      <canvas className="aboutmeCanvas"></canvas>
      <div className="overlay-element">
      

        <div class="home-content-about">
          
          <div class="text-animate">
            <h3>Mobile App Developer</h3>
            <h3>Coding Enthusiastic </h3>
            <h3>Android Developer</h3>
            <span className="animate"></span>
          </div>
          <p>
          I'm a dedicated mobile app developer and coding enthusiast, driven by a strong passion for crafting impactful digital experiences. While I may not boast years of experience in terms of time, I've immersed myself in the world of real-world projects, gaining hands-on insights and practical skills that are equally invaluable.
            <span className="animate">Codethenic</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
