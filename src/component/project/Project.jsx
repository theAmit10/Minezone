import React, { useRef, useEffect, useState } from 'react'
import "./Project.css";
import * as THREE from "three"; 
import {Typography} from "@mui/material"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import javaImage from "../../assets/java.png"

import androidStudioImage from "../../assets/androidstudio.png"
import firebaseImage from "../../assets/firebase.png"
import javaScriptImage from "../../assets/javascript.png"
import pythonImage from "../../assets/python.png"

import codethenic from "../../assets/img_one.png"
import codethenic_two from "../../assets/img_two.png"
import sacred from "../../assets/img_five.png"
import foodnic from "../../assets/foodnic_one.png"
import tacoding from "../../assets/tacoding.png"
import gestureBird from "../../assets/gesture_bird.jpg"
import androidImage from "../../assets/android.png"




const Project = () => {

  const canvasRef = useRef();
  const [paragraphContent, setParagraphContent] = useState('Measuring programming progress by lines of code is like measuring aircraft building progress by weight');

  const changeContentOne = () => {
    setParagraphContent("Codethenic: React native Application in which ChatGPT's words, DALLE's canvas- Limitless possiblilities Shown. ");
  };

  const changeContentTwo = () => {
    setParagraphContent("Codethenic: React native Application in which ChatGPT's words, DALLE's canvas- Limitless possiblilities Shown. ");
  };

  const changeContentThree = () => {
    setParagraphContent('Tacoding: Android Application in which user can get information about various coding contest running worldwide.');
  };

  const changeContentFour = () => {
    setParagraphContent('Foodnic: Developed a Application using React Native in which user can get search for vaious recipies.');
  };

  const changeContentFive = () => {
    setParagraphContent('Sacred: Created Android Application named sacred from scratch and wrote more than 12,000 lines of code.');
  };

  const changeContentSix = () => {
    setParagraphContent('Gesture Bird: Developed a python based PC game in which character is controlled by using fingure Gesture.');
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

    

    const canvas =  document.querySelector(".projectCanvas");
    renderer = new THREE.WebGLRenderer({canvas});
    
    camera.position.z = 5;

    const pointLight = new THREE.PointLight(0x00abf0, 100);
  
    pointLight.position.set(-4.5,-0.8, 1);
    // const lightHelper  = new THREE.PointLightHelper(pointLight);
    // creating light control
    // const controls = new OrbitControls(camera, renderer.domElement);

    // const backgroundColor = 0x00abf0; // Light blue color in hexadecimal format 00abf0
    // scene.background = new THREE.Color(backgroundColor);

    


    const geometry = new THREE.BoxGeometry(1,1,1);
    // const material = new THREE.MeshBasicMaterial({color:0x00ff00});

    // Create a material for each side with a different texture
    const textures = [
      androidImage,
      androidImage,
      androidImage,
      androidImage,
      androidImage,
      androidImage,
    ];

    const materials = textures.map((texturePath) => {
      const texture = new THREE.TextureLoader().load(texturePath);
      return new THREE.MeshBasicMaterial({ map: texture });
    });

    const mesh = new THREE.Mesh(geometry,materials);

    mesh.position.set(-4.5,-0.8, 1);

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
      gltf.scene.scale.set(0.03, 0.03, 0.03)
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

    // return window.addEventListener("scroll", () => {
    //   camera.rotation.z = window.scrollY * 0.001;
    //   camera.rotation.y = window.scrollY * 0.003;

    //   const skillsBox = document.getElementById("homeskillsBox");

    //   if (window.scrollY > 1500) {
    //     skillsBox.style.animationName = "homeskillsBoxAnimationOn";
    //   } else {
    //     skillsBox.style.animationName = "homeskillsBoxAnimationOff";
    //   }
    // });


    // return window.addEventListener("click", () => {

    //     const face1 = document.getElementById("homeCubeProjectFaces homeCubeProjectFace1");
    //     const projectDetailsContainer = document.getElementById("projectDetailsContainer");
    //     console.log("done");
        

    //     // changeContentOne();
        


    // });

    



  },[])


  return (
    <div className="home">
    
    <canvas className="projectCanvas"></canvas>
    <div class="overlay">
      <div class="overlay-content"> 
      <div className="homeProjectContainer">
      <Typography variant="h3">PROJECT</Typography>
      <div className="homeCubeProject">
        <div className="homeCubeProjectFaces homeCubeProjectFace1" onClick={changeContentOne}>
           <img src={codethenic} alt="Face1" />
        </div>

        <div className="homeCubeProjectFaces homeCubeProjectFace2" onClick={changeContentTwo}>
           <img src={codethenic_two} alt="Face2" />
        </div>

        <div className="homeCubeProjectFaces homeCubeProjectFace3" onClick={changeContentThree}>
          <img src={tacoding} alt="Face3" />
        </div>

        <div className="homeCubeProjectFaces homeCubeProjectFace4" onClick={changeContentFour}>
           <img src={foodnic} alt="Face4"/>
        </div>

        <div className="homeCubeProjectFaces homeCubeProjectFace5" onClick={changeContentFive}>
           <img src={sacred}alt="Face5" /> 
        </div>

        <div className="homeCubeProjectFaces homeCubeProjectFace6" onClick={changeContentSix}>
          <img src={gestureBird} alt="Face6" /> 
        </div>
      </div>

      <div className="cubeShadow"></div>

      <div className="homeCubeProjectDetails">
        <div className="homeCubeProjectFaces homeCubeSkillsProjectDetails">
            <p className='projectDetailsContainer'>
            {paragraphContent}
                <span class="animate"></span>
            </p>
        </div>
      </div>
    </div>
      </div>
    </div>

      {/* SKILLS  */}

      
     

    
    </div>
  )
}

export default Project