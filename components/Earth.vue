<template>
    <div id="container" class="earth" style="width: 100%; height: 600px; position: relative"></div>
</template>

<script>
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import * as Three from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  name: 'Earth',
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
      var model, camera, pos, controls, scene, renderer, geometry, geometry1, material;
      let vm = this;

      function init() {
        let container = document.getElementById('container');

        camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
        camera.position.z = 2;

        scene = new Three.Scene();
        scene.background = new Three.Color( 0xffffff );

        var ambientLight = new Three.AmbientLight(0xffffff, 0.5)
        scene.add(ambientLight)

        var directionalLight = new Three.DirectionalLight( 0xffffff, 1 );
        // directionalLight.color.setRGB( 0, 0, 0 );
        directionalLight.position.set( 1, 1, 1 );
        scene.add( directionalLight );

        // var light = new Three.PointLight( 0xffffff, 1, 100000 );
        // light.position.set( 0, 0, 200);
        // scene.add( light );
        
        const loader = new GLTFLoader();

        loader.load( 'images/3D/Earth.gltf', function ( gltf ) {
            model = gltf.scene
            model.position.x =  0.3;
            model.rotation.set(0, -5, 0)
            gsap.to(model.rotation, {
                y: -4.79,
                scrollTrigger: {
                trigger: "#container",
                scroller: '#page-modal',
                start: "-390px 50%",
                end: "bottom top",
                scrub: true,
                toggleActions: "restart pause resume pause"
            },
                y: Math.PI
            });

            scene.add( gltf.scene );

        }, undefined, function ( error ) {

            console.error( error );

        } );

        renderer = new Three.WebGLRenderer({antialias: true});
        renderer.outputEncoding = Three.sRGBEncoding;
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

    }

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }


    init();
    animate();

    // Full Height
  }
}
</script>