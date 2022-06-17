const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer({antialias:true});
let cube;

const init= () => {

renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

// const material = new THREE.MeshBasicMaterial( {color: 0x0FFFF} ); //for texture/skin

const texture = new THREE.TextureLoader().load("D:\Threejs Basics\yuga\textures\rotating box.gif");
const material = new THREE.MeshBasicMaterial( {map: texture} ); //for texture/skin

cube = new THREE.Mesh( geometry, material );
scene.add( cube );//draws a cuboid

camera.position.z = 5;
}

function animate(){ //draw on the screen everytime screen refreshed
    requestAnimationFrame(animate);

    cube.rotation.x += 0.1; //rotates on x-axis
    cube.rotation.y += 0.01; //rotates on y-axis

    renderer.render(scene,camera);
}

function onWindowResize(){ //changes the camera's view after screen resize
    camera.resize = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix(); //changes the camera's aspect
    renderer.setSize(window.innerWidth,window.innerHeight);
    //renders the size again on window resize
}

window.addEventListener("resize",onWindowResize,false);

init();
animate();