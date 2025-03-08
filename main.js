import * as THREE from 'three';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import getStarfield from "./src/getStarfield.js";

//Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Scene
const scene = new THREE.Scene();

// Create a pivot (an empty Object3D)
const pivot = new THREE.Object3D();
scene.add(pivot);

// Texture Loader
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load('/images/earth.jpg');
const nightLightsTexture = textureLoader.load('/images/eartf.jpg');
const cloudTexture = textureLoader.load('/images/clouds.jpg');

//My locations

//----------------------Texas------------------------------
const texasGeometry = new THREE.ConeGeometry( 0.05, 7, 3 ); 
const texasMaterial = new THREE.MeshBasicMaterial( {
  color: 0x8a2be2,
  transparent: true,
  opacity: 0.7,
} );
const coneTexas = new THREE.Mesh(texasGeometry, texasMaterial ); 
scene.add( coneTexas );

const sphereRadius = 3;
const latitude = Math.PI / 3;
const longitude = Math.PI / 4;

coneTexas.position.set(
  sphereRadius * Math.sin(latitude) * Math.cos(longitude),
  sphereRadius * Math.cos(latitude),
  sphereRadius * Math.sin(latitude) * Math.cos(longitude)
);

pivot.add(coneTexas);
coneTexas.lookAt(0,5,0);
//--------------------Texas End------------------------------------

//----------------------Nepal------------------------------
const nepalGeometry = new THREE.ConeGeometry( 0.05, 7, 3 ); 
const nepalMaterial = new THREE.MeshBasicMaterial( {
  color: 0xFFF01F,
  transparent: true,
  opacity: 0.7,
} );
const coneNepal = new THREE.Mesh(nepalGeometry, nepalMaterial ); 
scene.add( coneNepal );

const latitude1 = - Math.PI / 3.5;
const longitude1 = Math.PI / 3.8;

coneNepal.position.set(
  sphereRadius * Math.sin(latitude1) * Math.cos(longitude1) - 0.65,
  sphereRadius * Math.cos(latitude1) * Math.cos(longitude1) + 0.4,
  sphereRadius * Math.sin(latitude1) 
);

pivot.add(coneNepal);
coneNepal.lookAt(-5,-5,-5);
//--------------------Nepal End------------------------------------

//----------------------Japan------------------------------
const japanGeometry = new THREE.ConeGeometry( 0.03, 7, 3 ); 
const japanMaterial = new THREE.MeshBasicMaterial( {
  color: 0x0FF0FC,
  transparent: true,
  opacity: 0.7,
} );
const coneJapan = new THREE.Mesh(japanGeometry, japanMaterial ); 
scene.add( coneJapan );

const latitude2 = - Math.PI / 3.5;
const longitude2 = Math.PI / 3.8;
const japanXindex = 3.0;
const japanYindex = 1.9;
const japanZindex = 2.75;

coneJapan.position.set(
  sphereRadius * Math.sin(latitude2) * Math.cos(longitude2) - japanXindex,
  sphereRadius * Math.cos(latitude2) * Math.cos(longitude2) + japanYindex,
  sphereRadius * Math.sin(latitude2) + japanZindex,
);

pivot.add(coneJapan);
coneJapan.lookAt(-16,-15,0);
//--------------------Japan End------------------------------------

// Earth geometry & material
const cloudGeometry = new THREE.SphereGeometry(3, 64, 64);
const cloudMaterial = new THREE.MeshStandardMaterial({
  map: cloudTexture,
  transparent: true,
  opacity: 0.4,
});

const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
const earthMaterial = new THREE.MeshStandardMaterial({
  map: earthTexture,
  emissiveMap: nightLightsTexture,
  emissive: new THREE.Color(0xffffff),
  emissiveIntensity: 1.1,
});

const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
clouds.scale.set(1.01, 1.01, 1.01);
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.castShadow = true;
earth.receiveShadow = true;

// Add Earth and Clouds to the Pivot
pivot.add(clouds);
pivot.add(earth);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xfffff0, 10);
directionalLight.position.set(-5, -5, -5);
scene.add(directionalLight);

const directionalLight1 = new THREE.DirectionalLight(0x222222, 3);
directionalLight1.position.set(5, 5, 5);
scene.add(directionalLight1);

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 12;
scene.add(camera);

// Renderer
const canvas = document.querySelector("canvas.webgl");
if (!canvas) {
  console.error("canvas not found.");
}

// Stars
const stars = getStarfield(5000);
scene.add(stars);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.domElement.style.width = "100%";
renderer.domElement.style.height = "100%";

// OrbitControls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
//controls.autoRotate = true; // rotates the CAMERA around the origin
//controls.autoRotateSpeed = 0.5;

// Handle Resize
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Adjust earth rotation to the light and darker parts
//earth.rotation.y = Math.PI / 4;

//Create a raycaster and mouse vector
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Create an object to store our clickable objects
const clickableObjects = {
    coneTexas: {
        object: coneTexas,
        url: '/texas.html' // Create this page for Texas content
    },
    coneNepal: {
        object: coneNepal,
        url: '/nepal.html' // Create this page for Nepal content
    },
    coneJapan: {
        object: coneJapan,
        url: '/japan.html' // Create this page for Japan content
    }
};

// Add all clickable objects to an array for raycaster
const clickableMeshes = Object.values(clickableObjects).map(obj => obj.object);

// Add click event listener to the canvas
canvas.addEventListener('click', onMouseClick);
canvas.addEventListener('mousemove', onMouseMove);

// Handle mouse movement for hover effects
function onMouseMove(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(clickableMeshes);

    // Reset all cones to original state
    clickableMeshes.forEach(mesh => {
        mesh.material.opacity = 0.7;
        document.body.style.cursor = 'default';
    });

    // Highlight intersected cone
    if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        intersectedObject.material.opacity = 1;
        document.body.style.cursor = 'pointer';
    }
}

// Handle click events
function onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(clickableMeshes);

    if (intersects.length > 0) {
        // Find which cone was clicked
        const clickedCone = Object.values(clickableObjects).find(
            obj => obj.object === intersects[0].object
        );

        if (clickedCone) {
            // Navigate to the corresponding page
            window.location.href = clickedCone.url;
        }
    }
}
//Query Selectors
const title = document.querySelector(".title");
const paragraph = document.querySelector(".paragraph");
const columnsContainer = document.querySelector(".columns-container");
const columns = document.querySelectorAll(".column");

pivot.position.x = 0;

gsap.set([title, paragraph], {
  opacity: 0,
  y: 20,
});
gsap.to([title, paragraph], {
  opacity: 0.8,
  y: 0,
  duration: 0.6,
  delay: 0.2,
  ease: "power2.out",
});

//Create the main timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    markers: false,
  }
});


tl.to(
  pivot.position, {
    x: 4,
    duration: 1,
    ease: "none",
  }, 0);

// Add text dispersion effect for title
tl.to(title, {
  opacity: 0,
  scale: 1.5,
  filter: "blur(10px)",
  letterSpacing: "20px",
  duration: 1,
  ease: "power2.out"
}, 0);

// Add text dispersion effect for paragraph
tl.to(paragraph, {
  opacity: 0,
  scale: 1.5,
  filter: "blur(5px)",
  letterSpacing: "8px",
  duration: 1,
  ease: "power2.out"
}, 0.1);

tl.to(columnsContainer, {
  opacity: 1,
  top: "0",
  duration: 1,
  ease: "power2.out",
}, 0.3);

columns.forEach((column, index) => {
  tl.to(column, {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
}, 0.4 + (index * 0.1));
});

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth / 2;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});


// Animation loop
function animate() {
  pivot.rotation.y += 0.0002; // Rotate Earth
  clouds.rotation.y += 0.0003; // Rotate clouds
  earth.rotation.y = Math.PI / 3.5;
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

// Interactive elements for About Me and Hobbies sections
document.addEventListener('DOMContentLoaded', function() {
    // Hide ScrollTrigger markers
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
        markers: false // Disable all markers
    });
    
    // Make columns visible without immediately showing them
    // This will be handled by the scroll timeline
    gsap.set('.columns-container', {
        opacity: 0
    });

    // Keep initial states for animation via scroll
    // Don't animate columns automatically here
    // This will be controlled by the scroll animation

    // Initialize skill levels with animation
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(level => {
        const width = level.getAttribute('data-width');
        level.style.width = '0';
        gsap.to(level, {
            width: width,
            duration: 1.5,
            delay: 1.5,
            ease: 'power2.out'
        });
    });

    // Skills toggle
    const toggleSkillsBtn = document.querySelector('.toggle-skills');
    const skillsContainer = document.querySelector('.skills-container');
    
    // Create particles for skills section
    function createSkillsParticles() {
        const particlesContainer = document.querySelector('.skills-particles');
        if (!particlesContainer) return;
        
        const particleCount = 30;
        const colors = ['', 'purple', 'white']; // Default is blue
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Add color variation
            const colorClass = colors[Math.floor(Math.random() * colors.length)];
            if (colorClass) {
                particle.classList.add(colorClass);
            }
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random float properties
            const floatX = (Math.random() * 10 - 5) + 'px';
            const floatY = (Math.random() * 10 - 5) + 'px';
            const floatDuration = (Math.random() * 3 + 2) + 's';
            
            // Set inline styles
            particle.style.left = posX + '%';
            particle.style.top = posY + '%';
            particle.style.setProperty('--float-x', floatX);
            particle.style.setProperty('--float-y', floatY);
            particle.style.setProperty('--float-duration', floatDuration);
            
            // Add some particles with glow effect
            if (Math.random() > 0.7) {
                particle.style.boxShadow = '0 0 3px ' + (colorClass === 'purple' ? 'rgba(138, 43, 226, 0.7)' : 'rgba(62, 164, 240, 0.7)');
            }
            
            particlesContainer.appendChild(particle);
        }
    }

    if (toggleSkillsBtn && skillsContainer) {
        // Create particles for when skills are shown
        createSkillsParticles();
        
        // Initially hide skills container
        skillsContainer.style.display = 'none';
        
        toggleSkillsBtn.addEventListener('click', function() {
            const isVisible = skillsContainer.style.display === 'block';
            
            if (isVisible) {
                // Hide skills
                gsap.to('.skill-card', {
                    y: 20,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.2,
                    onComplete: () => {
                        gsap.to(skillsContainer, {
                            height: 0,
                            opacity: 0,
                            duration: 0.3,
                            onComplete: () => {
                                skillsContainer.style.display = 'none';
                            }
                        });
                    }
                });
                toggleSkillsBtn.textContent = 'View Skills';
            } else {
                // Show skills
                skillsContainer.style.display = 'block';
                
                // Reset height to auto and animate in
                gsap.set(skillsContainer, { height: 'auto', opacity: 1 });
                gsap.from(skillsContainer, { height: 0, opacity: 0, duration: 0.5 });
                
                // Staggered animation for skill cards
                gsap.from('.skill-card', {
                    y: 30,
                    opacity: 0,
                    stagger: 0.1,
                    delay: 0.2,
                    duration: 0.4,
                    ease: 'back.out(1.2)'
                });
                
                // Animate skill levels
                gsap.from('.cosmic-stars', {
                    width: 0,
                    stagger: 0.1,
                    delay: 0.5,
                    duration: 1,
                    ease: 'power2.out'
                });
                
                toggleSkillsBtn.textContent = 'Hide Skills';
            }
        });
    }

    // Hobby items interaction
    const hobbyItems = document.querySelectorAll('.hobby-item');
    const hobbyDetails = document.querySelectorAll('.hobby-detail');
    
    if (hobbyItems.length && hobbyDetails.length) {
        hobbyItems.forEach(item => {
            item.addEventListener('click', function() {
                const hobbyType = this.getAttribute('data-hobby');
                
                // Hide all details
                hobbyDetails.forEach(detail => {
                    detail.style.display = 'none';
                });
                
                // Show selected detail
                document.getElementById(`${hobbyType}-detail`).style.display = 'block';
                
                // Highlight selected hobby
                hobbyItems.forEach(h => h.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Add cosmic particle effects to columns
    function createParticles(container) {
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('cosmic-particle');
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 3 + 1;
            
            // Random opacity
            const opacity = Math.random() * 0.5 + 0.2;
            
            // Random animation duration
            const duration = Math.random() * 10 + 10;
            
            particle.style.cssText = `
                position: absolute;
                left: ${posX}%;
                top: ${posY}%;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, rgba(255,255,255,0.8), transparent);
                border-radius: 50%;
                opacity: ${opacity};
                pointer-events: none;
                z-index: 0;
                animation: float ${duration}s infinite linear;
            `;
            
            container.appendChild(particle);
        }
    }
    
    // Add particles to columns
    const columns = document.querySelectorAll('.column');
    columns.forEach(createParticles);
    
    // Add floating animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translate(0, 0); }
            25% { transform: translate(10px, 10px); }
            50% { transform: translate(0, 20px); }
            75% { transform: translate(-10px, 10px); }
            100% { transform: translate(0, 0); }
        }
        
        .column.active {
            box-shadow: 0 0 30px rgba(62, 164, 240, 0.5);
        }
        
        .hobby-item.active {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-5px);
        }
    `;
    document.head.appendChild(style);
});
