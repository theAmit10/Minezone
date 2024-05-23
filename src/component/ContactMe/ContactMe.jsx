import React, { useEffect } from 'react'
import "./ContactMe.css";
import * as THREE from "three"; 
import {Button, Typography} from "@mui/material"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Project from '../project/Project';
import AboutMe from '../AboutMe/AboutMe';


const ContactMe = () => {

  const handleClick = (value) => {
    console.log('Button clicked! : '+value);
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

    

    const canvas =  document.querySelector(".contactMeCanvas");
    renderer = new THREE.WebGLRenderer({canvas});
    

    // const geometry = new THREE.BoxGeometry(1,1,1);
    // const material = new THREE.MeshBasicMaterial({color:0x00ff00});
    // const mesh = new THREE.Mesh(geometry,material);
    // scene.add(mesh);
   
    camera.position.z = 5;

    const pointLight = new THREE.PointLight(0xffffff, 100);
    const pointLight2 = new THREE.PointLight(0xffffff, 100);
    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, 5, 5);
    const lightHelper  = new THREE.PointLightHelper(pointLight);
    // creating light control
    // const controls = new OrbitControls(camera, renderer.domElement);

    // const backgroundColor = 0x282c34; // Light blue color in hexadecimal format 00abf0
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


    // for Hand

    // const glftLoaderForHand = new GLTFLoader();


    // glftLoaderForHand.load('smoke.glb',(gltf) => {
    //   console.log("Smoke loaded");
      
    //   handModel = gltf.scene;
    //   console.log(handModel);
    //   gltf.scene.position.set(-1,-2,1);

    //   // Set up animation mixer
    //   handMixer = new THREE.AnimationMixer(handModel);

    //   // Find all animations in the model and play the first one
    //   gltf.animations.forEach((clip) => {
    //     const action = handMixer.clipAction(clip);
    //     action.play();
    //   });


    //   scene.add(gltf.scene);


    // },undefined,(error) => {
    //   console.log("error happen")
    //   console.log("error hand "+error)
    //   console.log("error hand two "+error.message)
    // });


  
    const glftLoaderBackground = new GLTFLoader();


    glftLoaderBackground.load('smoke.glb',(gltf) => {
      console.log("Added somke");

      handModel = gltf.scene;
      // console.log(loadedModel);
      // gltf.scene.position.set(1,-200,1);
      gltf.scene.position.set(1,1,1);
      gltf.scene.scale.set(0.005, 0.005, -0.005)



      // // Set up animation mixer
      // mixer = new THREE.AnimationMixer(handModel);

      // // Find all animations in the model and play the first one
      // gltf.animations.forEach((clip) => {
      //   const action = mixer.clipAction(clip);
      //   action.play();
      // });


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
        model.rotation.y = mouseX * 2; // Adjust the rotation sensitivity as needed
       
        // model.rotation.x = mouseY * 2;
      }

      if(handModel){
        handModel.rotation.y = mouseX * 2;
        handModel.rotation.x = mouseY * 2;
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
    <div className="contactMe">
      <canvas className="contactMeCanvas">
      </canvas>
      <div className="overlay-element-contactMe">


      <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me!</span><span class="animate scroll"></span></h2>

        <form action="#">
            <div class="input-box">
                <div class="input-field">
                    <input type="text" placeholder="Full Name" required/>
                    <span class="focus"></span>
                </div>

                <div class="input-field">
                    <input type="text" placeholder="Email Address" required/>
                    <span class="focus"></span>
                </div>

                <span class="animate scroll"></span>

            </div>


            <div class="input-box">
                <div class="input-field">
                    <input type="number" placeholder="Mobile Number" required/>
                    <span class="focus"></span>
                </div>

                <div class="input-field">
                    <input type="text" placeholder="Email Subject" required/>
                    <span class="focus"></span>
                </div>

                <span class="animate scroll"></span>
            </div>

            <div class="textarea-field">
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <span class="focus"></span>
                <span class="animate scroll"></span>

            </div>

            {/** 
            <div class="btn-box btns">
                <button type="submit" class="btn">Submit</button>
                <span class="animate scroll" ></span>
            </div>
            */}

            

        </form>
    </section>
          
      </div>
    
    </div>
  )
}

export default ContactMe

