import React, { useEffect } from 'react'
import "./Home.css";
import * as THREE from "three"; 
import {Button, Typography} from "@mui/material"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Skills from '../Skills/Skills';
import Project from '../project/Project';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
// import { YOUR_VANTA_BACKGROUND_EFFECT } from 'vanta';
// import { Link } from "react-router-dom";
// import { MouseOutlined } from "@mui/icons-material";
// import sceneBackground from "../../../src/images/bacl_t.jpg"
// import venusImage from "../../images/venus.jpg"
// import spaceImage from "../../images/space.jpg"



const Home = () => {

  const handleClick = (value) => {
    console.log('Button clicked! : '+value);
  };

  
 

  useEffect(() => {
    let scene, camera, renderer, model, mixer,handModel,handMixer,handModelHomeBackground,handMixerHomeBackground;
    scene =  new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    

    const canvas =  document.querySelector(".homeCanvas");
    renderer = new THREE.WebGLRenderer({canvas});
    

    // const geometry = new THREE.BoxGeometry(1,1,1);
    // const material = new THREE.MeshBasicMaterial({color:0x00ff00});
    // const mesh = new THREE.Mesh(geometry,material);
    // scene.add(mesh);
   
    camera.position.z = 5;

    // const pointLight = new THREE.PointLight(0xffffff, 100);
    const pointLight = new THREE.AmbientLight(0xffffff, 6)
    const pointLight2 = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, 5, 5);
    const lightHelper  = new THREE.PointLightHelper(pointLight);
    // creating light control
    // const controls = new OrbitControls(camera, renderer.domElement);
   
   

    // const backgroundColor = 0x100f0f; // Light blue color in hexadecimal format 00abf0 100f0f
    // scene.background = new THREE.Color(backgroundColor);



    console.log("started");

    // for bird

    let loadedModel;
    const glftLoader = new GLTFLoader();


    glftLoader.load('bird.glb',(gltf) => {
      console.log("added");
      loadedModel = gltf;
      model = gltf.scene;
      console.log(loadedModel);
      gltf.scene.position.set(1,-2,1);



      // Set up animation mixer
      mixer = new THREE.AnimationMixer(model);

      // Find all animations in the model and play the first one
      gltf.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
      });


      scene.add(gltf.scene);


    },undefined,(error) => {
      console.log("error happen")
      console.log("error boy "+error)
      console.log("error boy two "+error.message)
    });


    scene.add(pointLight);
    scene.add(lightHelper);
    scene.add(pointLight2);



     // Variables to store the mouse position
  let mouseX = 0;
  let mouseY = 0;

  const handleMouseMove = (event) => {
    // Calculate mouse position in normalized device coordinates
    const canvasRect = canvas.getBoundingClientRect();
    mouseX = ((event.clientX - canvasRect.left) / canvasRect.width) * 2 - 1;
    mouseY = -((event.clientY - canvasRect.top) / canvasRect.height) * 2 + 1;
  };


   


    
  

  
    // const textureLoader = new THREE.TextureLoader();
    // const bg = textureLoader.load(sceneBackground);
    // scene.background = bg;


    // for wonderful_world home background

    const glftLoaderForHand = new GLTFLoader();


    glftLoaderForHand.load('gaming_setup.glb',(gltf) => {
      console.log("scifi_background loaded");

      
      
      handModelHomeBackground = gltf.scene;
      console.log(handModelHomeBackground);
      // gltf.scene.position.set(-2,-1,1);
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(-8,-5,-10);

      // Set up animation mixer
      handMixerHomeBackground = new THREE.AnimationMixer(handModelHomeBackground);

      // Find all animations in the model and play the first one
      gltf.animations.forEach((clip) => {
        const action = handMixerHomeBackground.clipAction(clip);
        action.play();
      });


      scene.add(gltf.scene);


    },undefined,(error) => {
      console.log("error happen")
      console.log("error HomeBackground "+error)
      console.log("error HomeBackground two "+error.message)
    });


  
    const glftLoaderBackground = new GLTFLoader();


    glftLoaderBackground.load('smoke.glb',(gltf) => {
      console.log("Added somke");

      handModel = gltf.scene;
      // console.log(loadedModel);
      // gltf.scene.position.set(1,-200,1);
      gltf.scene.position.set(-1,1,0);
      gltf.scene.scale.set(0.005, 0.005, -0.005)



      // Set up animation mixer
      mixer = new THREE.AnimationMixer(handModel);

      // Find all animations in the model and play the first one
      gltf.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
      });


      scene.add(gltf.scene);


    },undefined,(error) => {
      console.log("error happen")
      console.log("error boy "+error)
      console.log("error boy two "+error.message)
    });


    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      // handModel.position.set(e.clientX,e.clientY,undefined)
      // if (e.clientX <= window.innerWidth / 2) {
      //   // model.rotation.x -= constSpeed;
      //   // model.rotation.y += constSpeed;
      //   handModel.position.set(e.clientX,e.clientY,undefined)
       
      // }

      // if (e.clientX > window.innerWidth / 2) {
      //   // model.rotation.x -= constSpeed;
      //   // model.rotation.y -= constSpeed;
      
      // }

      // if (e.clientY > window.innerHeight / 2) {
      //   // model.rotation.x -= constSpeed;
      //   // model.rotation.y += constSpeed;
        
      // }

      // if (e.clientY <= window.innerHeight / 2) {
      //   // model.rotation.x -= constSpeed;
      //   // model.rotation.y -= constSpeed;
        
      // }


    });


    
    


  

    const animate = () => {
      requestAnimationFrame(animate);

      // Update the animation mixer
      if (mixer) {
        mixer.update(0.016); // Time delta, use a fixed value or a more accurate time delta calculation
      }

      // if (handMixer) {
      //   handMixer.update(0.016); // Time delta, use a fixed value or a more accurate time delta calculation
      // }

      // model.scene.rotation.y += 0.01;

      // Rotate the model based on the mouse position
      if (model) {
        model.rotation.y = mouseX * 4; // Adjust the rotation sensitivity as needed
        
       
        // model.rotation.x = mouseY * 2;
      }

      if(handModelHomeBackground){
          handModelHomeBackground.rotation.y= mouseX *0.5;
        }

      if(handModel){
        // handModel.rotation.y = mouseX * 2;
        handModel.rotation.x = mouseX * 2;
        // handModel.position.set(mouseX,mouseY,2);
        
      }
      
      

      

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene,camera);
    }


    
  


    // Add event listeners for mouse movement
    canvas.addEventListener('mousemove', handleMouseMove);


    animate();

    console.log("done");



  },[])


  

  return (
    <div className="home">
      <canvas className="homeCanvas">
      </canvas>
      <div className="overlay-element">
          
          <div class="home-content">
            <h1>Codethenic <span></span><span className="animate" ></span></h1>
            <div class="text-animate">
                <h3>Namasta World!</h3>
                <span className="animate" ></span>
            </div>
            <p>
            Coding: Where bugs are just unexpected opportunities for innovation.
                <span className="animate"></span>
            </p>


            <div className="btn-box">
                <Button href="#" className="btn">Scroll Now</Button>
                <span className="animate"></span>
            </div>
        </div>
      </div>
      

      <Skills />
      




      {/* Project  */}

      <Project />


      {/* ABOUT ME  */}

      

      <AboutMe/>
     
      <ContactMe/>

     

      
    
    </div>
  )
}

export default Home

