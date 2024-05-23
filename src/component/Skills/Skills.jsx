import React, { useRef, useEffect, useState } from 'react'
import "./Skills.css";
import * as THREE from "three"; 
import {Typography} from "@mui/material"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import javaImage from "../../assets/java.png"
import androidImage from "../../assets/android.png"
import androidStudioImage from "../../assets/androidstudio.png"
import firebaseImage from "../../assets/firebase.png"
import javaScriptImage from "../../assets/javascript.png"
import pythonImage from "../../assets/python.png"
import reactNativeImage from "../../assets/reactnative.png"


const Skills = () => {

  const canvasRef = useRef();

  const [paragraphContent, setParagraphContent] = useState('Measuring programming progress by lines of code is like measuring aircraft building progress by weight');

  const changeContentOne = () => {
    setParagraphContent('Linux: My Digital Home for Over Two Years and Still Exploring!');
  };

  const changeContentTwo = () => {
    setParagraphContent('Bringing the Best of Both Worlds: Crafting Hybrid Mobile Apps with Flair!');
  };

  const changeContentThree = () => {
    setParagraphContent('Crafting Android Experiences, One Line of Code at a Time, for Over a Year!');
  };

  const changeContentFour = () => {
    setParagraphContent('Java: Powering Android Apps and Dominating Code Challenges in Style!');
  };

  const changeContentFive = () => {
    setParagraphContent('From Campus to Code: Crafting AI-Powered Desktop Magic with Python!');
  };

  const changeContentSix = () => {
    setParagraphContent('Fueled by Firebase: Igniting Success in Five Projects and Counting!');
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

    

    const canvas =  document.querySelector(".skillCanvas");
    renderer = new THREE.WebGLRenderer({canvas});
    
    camera.position.z = 5;

    const pointLight = new THREE.PointLight(0xffffff, 100);
    const ambidentLight = new THREE.AmbientLight(0xffffff, 100);
    const pointLightProjector = new THREE.PointLight(0xffffff, 100);

    
  
    pointLight.position.set(8, 5, 5);
    pointLightProjector.position.set(1, 2, 1);
    scene.add(pointLightProjector);
    // const lightHelper  = new THREE.PointLightHelper(pointLight);
    // creating light control
    const controls = new OrbitControls(camera, renderer.domElement);

    // const backgroundColor = 0x112e42; // Light blue color in hexadecimal format 00abf0
    // scene.background = new THREE.Color(backgroundColor);


    const geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
    // const material = new THREE.MeshBasicMaterial({color:0x00ff00});

    const boxes = [];

    // Create a material for each side with a different texture
    const textures = [
      androidImage,
      androidStudioImage,
      firebaseImage,
      javaImage,
      javaScriptImage,
      pythonImage,
    ];

    const materials = textures.map((texturePath) => {
      const texture = new THREE.TextureLoader().load(texturePath);
      return new THREE.MeshBasicMaterial({ map: texture });
    });



    const mesh = new THREE.Mesh(geometry,materials);

    mesh.position.set(-4,0.1, 1);
    mesh.userData.id = 3;
    boxes.push(mesh);
    // mesh.position.setX(1)

    scene.add(mesh);



    // for scientic_beanch

    let loadedModel;
    const glftLoader = new GLTFLoader();


    glftLoader.load('hologram.glb',(gltf) => {
      console.log("added");
      loadedModel = gltf;
      model = gltf.scene;
      console.log(loadedModel);
      // gltf.scene.position.set(1,-2,1);
      gltf.scene.position.set(6,-3,-1);
      gltf.scene.scale.set(0.005, 0.005, 0.005)
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





    // #####################
    
    // Create a material for each side with a different texture
    // Python Box
    const pythonGeometry = new THREE.BoxGeometry(0.5,0.5,0.5);
    const pythonTextures = [
      pythonImage,
      pythonImage,
      pythonImage,
      pythonImage,
      pythonImage,
      pythonImage,
    ];

    const pythonMaterials = pythonTextures.map((texturePath) => {
      const pythonTextures = new THREE.TextureLoader().load(texturePath);
      return new THREE.MeshBasicMaterial({ map: pythonTextures });
    });

    const pythonMesh = new THREE.Mesh(pythonGeometry,pythonMaterials);

    pythonMesh.position.set(-2,1, 1);
    pythonMesh.userData.id = 1;
    boxes.push(pythonMesh);
    scene.add(pythonMesh);
    


    // Android Box
    const androidGeometry = new THREE.BoxGeometry(0.5,0.5,0.5);
    const androidTextures = [
      androidImage,
      androidImage,
      androidImage,
      androidImage,
      androidImage,
      androidImage,
    ];

    const androidMaterials = androidTextures.map((texturePath) => {
      const androidTextures = new THREE.TextureLoader().load(texturePath);
      return new THREE.MeshBasicMaterial({ map: androidTextures });
    });

    const androidMesh = new THREE.Mesh(androidGeometry,androidMaterials);

    androidMesh.position.set(-3,0.5, 1);
    
    boxes.push(androidMesh);
    androidMesh.userData.id = 2;
    scene.add(androidMesh);


    // Android Studio Box
    const androidStudioGeometry = new THREE.BoxGeometry(0.5,0.5,0.5);
    const androidStudioTextures = [
      androidStudioImage,
      androidStudioImage,
      androidStudioImage,
      androidStudioImage,
      androidStudioImage,
      androidStudioImage,
    ];

    const androidStudioMaterials = androidStudioTextures.map((texturePath) => {
      const androidStudioTextures = new THREE.TextureLoader().load(texturePath);
      return new THREE.MeshBasicMaterial({ map: androidStudioTextures });
    });

    const androidStudioMesh = new THREE.Mesh(androidStudioGeometry,androidStudioMaterials);

    androidStudioMesh.position.set(-5,-0.5, 1);
    androidStudioMesh.userData.id = 4;
    boxes.push(androidStudioMesh);
    scene.add(androidStudioMesh);
    


    // Java Box
    const javaGeometry = new THREE.BoxGeometry(0.5,0.5,0.5);
    const javaTextures = [
      javaImage,
      javaImage,
      javaImage,
      javaImage,
      javaImage,
      javaImage,
    ];

    const javaMaterials = javaTextures.map((texturePath) => {
      const javaTextures = new THREE.TextureLoader().load(texturePath);
      return new THREE.MeshBasicMaterial({ map: javaTextures });
    });

    const javaMesh = new THREE.Mesh(javaGeometry,javaMaterials);

    javaMesh.position.set(-4,-1, 1);
    javaMesh.userData.id = 5;
    boxes.push(javaMesh);
    scene.add(javaMesh);




    // Firebasee Box
    const firebaseGeometry = new THREE.BoxGeometry(0.5,0.5,0.5);
    const firebaseTextures = [
      firebaseImage,
      firebaseImage,
      firebaseImage,
      firebaseImage,
      firebaseImage,
      firebaseImage,
    ];

    const firebaseMaterials = firebaseTextures.map((texturePath) => {
      const firebaseTextures = new THREE.TextureLoader().load(texturePath);
      return new THREE.MeshBasicMaterial({ map: firebaseTextures });
    });

    const firebaseMesh = new THREE.Mesh(firebaseGeometry,firebaseMaterials);

    firebaseMesh.position.set(-2,-2, 1);
    firebaseMesh.userData.id = 7;
    boxes.push(firebaseMesh);
    scene.add(firebaseMesh);




    // Linux Box
    const linuxGeometry = new THREE.BoxGeometry(0.5,0.5,0.5);
    const linuxTextures = [
      reactNativeImage,
      reactNativeImage,
      reactNativeImage,
      reactNativeImage,
      reactNativeImage,
      reactNativeImage,
    ];

    const linuxMaterials = linuxTextures.map((texturePath) => {
      const linuxTextures = new THREE.TextureLoader().load(texturePath);
      return new THREE.MeshBasicMaterial({ map: linuxTextures });
    });

    const linuxMesh = new THREE.Mesh(linuxGeometry,linuxMaterials);

    linuxMesh.position.set(-3,-1.6, 1);
    linuxMesh.userData.id = 6;
    boxes.push(linuxMesh);
    scene.add(linuxMesh);





    scene.add(pointLight);
    // scene.add(boxObject);
    // scene.add(lightHelper)
    



    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        mesh.rotation.x -= constSpeed;
        mesh.rotation.y += constSpeed;

        javaMesh.rotation.y -= constSpeed;
        javaMesh.rotation.x += constSpeed;

        pythonMesh.rotation.y -= constSpeed;
        pythonMesh.rotation.x += constSpeed;

        androidMesh.rotation.x -= constSpeed;
        androidMesh.rotation.y += constSpeed;

        androidStudioMesh.rotation.y -= constSpeed;
        androidStudioMesh.rotation.x += constSpeed;

        linuxMesh.rotation.x -= constSpeed;
        linuxMesh.rotation.y += constSpeed;

        firebaseMesh.rotation.y -= constSpeed;
        firebaseMesh.rotation.x += constSpeed;
       
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


   

     // Handle clicks
     const handleBoxClick = (event) => {
      const mouse = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(boxes);

      if (intersects.length > 0) {
        const clickedBox = intersects[0].object;
        if(clickedBox.userData.id === 1){
          changeContentOne();
          console.log(`Box ${clickedBox.userData.id + 1} Python  clicked!`);
        }
        else if(clickedBox.userData.id === 2){
          changeContentOne();
          console.log(`Box ${clickedBox.userData.id } Android  clicked!`);
        }else if(clickedBox.userData.id === 3){
          changeContentTwo();
          console.log(`Box ${clickedBox.userData.id } All  clicked!`);
        }else if(clickedBox.userData.id === 4){
          changeContentThree();
          console.log(`Box ${clickedBox.userData.id } Android Studio  clicked!`);
        }else if(clickedBox.userData.id === 5){
          changeContentFour();
          console.log(`Box ${clickedBox.userData.id } Java  clicked!`);
        }else if(clickedBox.userData.id === 6){
          changeContentFive();
          console.log(`Box ${clickedBox.userData.id } React Native  clicked!`);
        }else if(clickedBox.userData.id === 7){
          changeContentSix();
          console.log(`Box ${clickedBox.userData.id } Firebase  clicked!`);
        }
        
      }
    };



    // Add click event listener to the renderer's canvas
    renderer.domElement.addEventListener('click', handleBoxClick);

    window.addEventListener('click',handleBoxClick);

    


    


  

    const animate = () => {
      requestAnimationFrame(animate);

      // Update the animation mixer
      if (mixer) {
        mixer.update(0.016); // Time delta, use a fixed value or a more accurate time delta calculation
      }
      mesh.rotation.y += 0.01;
      pythonMesh.rotation.y += 0.01;
      javaMesh.rotation.y += 0.01;
      androidMesh.rotation.y += 0.01;
      androidStudioMesh.rotation.y += 0.01;
      linuxMesh.rotation.y += 0.01;
      firebaseMesh.rotation.y += 0.01;

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene,camera);
      document.body.appendChild(renderer.domElement);
      // const controls = new OrbitControls(camera, renderer.domElement);
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

    

    // return window.addEventListener("click", (e) => {

      



  },[])


  return (
    <div className="homeSkill">
    
    <canvas className="skillCanvas">
      
    </canvas>
    <div className="overlay">
      <div className="overlay-content"> 
      <div className="homeSkillsContainer">
      <Typography variant="h3">SKILLS</Typography>
      <div className="homeCubeSkills">
        <div className="homeCubeSkillsFaces homeCubeSkillsFace1 " onClick={changeContentOne}>
           <img src='https://logos-world.net/wp-content/uploads/2020/09/Linux-Logo-1996-present.png' alt="Face1" />
        </div>

        <div className="homeCubeSkillsFaces homeCubeSkillsFace2" onClick={changeContentTwo}>
           <img src='https://4.bp.blogspot.com/-XMtM6Lgur4s/Uopf_rBASnI/AAAAAAAACA8/z5AsSLXTm6Q/s1600/android+image+effects.png' alt="Face2" />
        </div>

        <div className="homeCubeSkillsFaces homeCubeSkillsFace3" onClick={changeContentThree}>
          <img src='https://1.bp.blogspot.com/-LgTa-xDiknI/X4EflN56boI/AAAAAAAAPuk/24YyKnqiGkwRS9-_9suPKkfsAwO4wHYEgCLcBGAsYHQ/s0/image9.png' alt="Face3" />
        </div>

        <div className="homeCubeSkillsFaces homeCubeSkillsFace4" onClick={changeContentFour}>
           <img src='https://pluspng.com/img-png/java-png-java-png-png-image-512.png' alt="Face4"/>
        </div>

        <div className="homeCubeSkillsFaces homeCubeSkillsFace5" onClick={changeContentFive}>
           <img src='https://www.freepngimg.com/thumb/android/72537-icons-python-programming-computer-social-tutorial.png'alt="Face5" /> 
        </div>

        <div className="homeCubeSkillsFaces homeCubeSkillsFace6" onClick={changeContentSix}>
          <img src='https://4.bp.blogspot.com/-Fxo_qnGJBj0/WRoDPNdlEII/AAAAAAAABF0/1mSHmv5gleQaCsHKEDgTB3DbNghjCXvZACLcB/s1600/logo_firebase_1920px_clr.png' alt="Face6" /> 
        </div>
      </div>

      <div className="cubeShadow"></div>

      <div className="homeCubeSkillsDetails">
        <div className="homeCubeSkillsFaces homeCubeSkillsFace1Details">
        <p className='projectDetailsContainer'>
        {paragraphContent}
            <span className="animate"></span>
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

export default Skills