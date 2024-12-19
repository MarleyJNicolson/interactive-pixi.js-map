<template>
    <div class="city-map-svg" ref="cityMap">
    </div>
</template>

<script>
    import gsap from 'gsap';
    import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

    gsap.registerPlugin(MotionPathPlugin);
    // import { Sprite } from 'three';
    // import * as PIXI from 'pixi.js'
    export default {
        name: 'CityMapSVG',

        data(){ 
            return {
                clickPosition: ''
            }
        },  
        methods: {
        },
        async mounted(){
            var thisContext = this;
            const PIXI = await import('pixi.js');
            const app = new PIXI.Application({transparent: true, resizeTo: window, width: window.innerWidth, height: window.innerHeight });
            this.$refs.cityMap.appendChild(app.view);
            
            var mapCont = new PIXI.Container();
            var map = new PIXI.Sprite.from('/images/LightCityFinal.png');
            var drone = new PIXI.Sprite.from('/images/travel/drone.png');
            var blimp = new PIXI.Sprite.from('/images/travel/Blimp.png');
            var carOne = new PIXI.Sprite.from('/images/travel/Car.png');
            var carTwo = new PIXI.Sprite.from('/images/travel/CarRight.png');
            var carThree = new PIXI.Sprite.from('/images/travel/CarRight.png');

            

            var grid = new PIXI.Sprite.from('/images/grid-extended.png');
            var road = new PIXI.Sprite.from('/images/Road.png');


            var carOnePath = new PIXI.Graphics()
            // .lineStyle(2, 0xaaaaaa, 1)
            .moveTo(1030.6671447753906, -590.2612762451172)
            .lineTo(-1460.6444091796875, 852.155029296875)

            var values = [{x: 1030.6671447753906, y: -590.2612762451172}, {x: -1460.6444091796875, y: 852.155029296875}]

            carOne.x = 1030.6671447753906;
            carOne.y = -590.2612762451172;
            carOne.width = 50;
            carOne.height = 50;
            carOne.anchor.set(0.5);
            carOne.pivot.set(0.5);
            carOne.scale.set(0.5);

            const tween = gsap.timeline();

            tween.to(carOne, 30, {
                motionPath: { 
                    path: values,
                    curviness: 0
                },
                ease: 'none',
                repeat: -1,
                yoyo: false
            });

            var carTwoPath = new PIXI.Graphics()
            // .lineStyle(2, 0xaaaaaa, 1)
            .moveTo(-1453.7776641845703, 255.0702209472656)
            .lineTo(-214.26077270507812, 976.0693359375)

            var valuesCarTwo = [{x: -1453.7776641845703, y: 255.0702209472656}, {x: -214.26077270507812, y: 976.0693359375}]

            carTwo.x = -1453.7776641845703;
            carTwo.y = 259.0702209472656;
            carTwo.anchor.set(0.5);
            carTwo.pivot.set(0.5);
            carTwo.scale.set(0.5);
            carTwo.width = 50;
            carTwo.height = 50;

            tween.to(carTwo, 20, {
                motionPath: { 
                    path: valuesCarTwo,
                    curviness: 0
                },
                ease: 'none',
                repeat: -1,
                yoyo: false
            }, 0);

            var carThreePath = new PIXI.Graphics()
            // .lineStyle(2, 0xaaaaaa, 1)
            .moveTo(-190.26077270507812, -1025.0693359375)
            .lineTo(1500.7776641845703, -47.0702209472656)

            var valuesCarThree = [{x: -190.26077270507812, y: -1025.0693359375}, {x: 1500.7776641845703, y: -47.0702209472656}]

            carThree.x = -190.26077270507812;
            carThree.y = -1025.0693359375;
            carThree.anchor.set(0.5);
            carThree.pivot.set(0.5);
            carThree.scale.set(0.5);
            carThree.width = 50;
            carThree.height = 50;

            tween.to(carThree, 20, {
                motionPath: { 
                    path: valuesCarThree,
                    curviness: 0
                },
                ease: 'none',
                repeat: -1,
                yoyo: false
            }, 0);

            var dronePath = new PIXI.Graphics()
            // .lineStyle(2, 0xaaaaaa, 1)
            .moveTo(1505.7776641845703, -415.0693359375)
            .lineTo(1480.7776641845703, -385.0702209472656)
            .lineTo(1445.7776641845703, -350.0702209472656)
            .lineTo(1420.7776641845703, -330.0702209472656)
            .lineTo(1368.7776641845703, -295.0702209472656)
            .lineTo(1320.7776641845703, -270.0702209472656)
            .lineTo(1280.7776641845703, -256.0702209472656)
            .lineTo(1200.7776641845703, -240.0702209472656)
            .lineTo(1100.7776641845703, -230.0702209472656)
            .lineTo(950.7776641845703, -230.0702209472656)
            .lineTo(850.7776641845703, -235.0702209472656)
            .lineTo(750.7776641845703, -242.0702209472656)
            .lineTo(600.7776641845703, -245.0702209472656)
            .lineTo(500.7776641845703, -242.0702209472656)
            .lineTo(450.7776641845703, -240.0702209472656)
            .lineTo(350.7776641845703, -227.0702209472656)
            .lineTo(250.7776641845703, -206.0702209472656)
            .lineTo(150.7776641845703, -178.0702209472656)
            .lineTo(80.7776641845703, -148.0702209472656)
            .lineTo(0.7776641845703, -110.0702209472656)
            .lineTo(-50.7776641845703, -80.0702209472656)
            .lineTo(-100.7776641845703, -45.0702209472656)
            .lineTo(-150.7776641845703, 6.0702209472656)
            .lineTo(-183.7776641845703, 50.0702209472656)
            .lineTo(-215.7776641845703, 112.0702209472656)
            .lineTo(-233.7776641845703, 170.0702209472656)
            .lineTo(-242.7776641845703, 220.0702209472656)
            .lineTo(-246.7776641845703, 280.0702209472656)
            .lineTo(-242.7776641845703, 350.0702209472656)
            .lineTo(-235.7776641845703, 400.0702209472656)
            .lineTo(-225.7776641845703, 450.0702209472656)
            .lineTo(-207.7776641845703, 520.0702209472656)
            .lineTo(-181.7776641845703, 590.0702209472656)
            .lineTo(-158.7776641845703, 650.0702209472656)
            .lineTo(-140.7776641845703, 690.0702209472656)
            .lineTo(-110.7776641845703, 750.0702209472656)
            .lineTo(-84.7776641845703, 800.0702209472656)
            .lineTo(-32.7776641845703, 890.0702209472656)
            .lineTo(12.7776641845703, 960.0702209472656)
            .lineTo(58.7776641845703, 1030.0702209472656)

            var valuesDrone = [{x: 58.7776641845703, y: 1030.0702209472656}, 
                               {x: 12.7776641845703, y: 960.0702209472656},
                               {x: -32.7776641845703, y: 890.0702209472656},
                               {x: -84.7776641845703, y: 800.0702209472656},
                               {x: -110.7776641845703, y: 750.0702209472656},
                               {x: -140.7776641845703, y: 690.0702209472656},
                               {x: -158.7776641845703, y: 650.0702209472656},
                               {x: -181.7776641845703, y: 590.0702209472656},
                               {x: -207.7776641845703, y: 520.0702209472656},
                               {x: -225.7776641845703, y: 450.0702209472656},
                               {x: -235.7776641845703, y: 400.0702209472656},
                               {x: -242.7776641845703, y: 350.0702209472656},
                               {x: -246.7776641845703, y: 280.0702209472656},
                               {x: -242.7776641845703, y: 220.0702209472656},
                               {x: -233.7776641845703, y: 170.0702209472656},
                               {x: -215.7776641845703, y: 112.0702209472656},
                               {x: -183.7776641845703, y: 50.0702209472656},
                               {x: -150.7776641845703, y: 6.0702209472656},
                               {x: -100.7776641845703, y: -45.0702209472656},
                               {x: -50.7776641845703, y: -80.0702209472656},
                               {x: 0.7776641845703, y: -110.0702209472656},
                               {x: 80.7776641845703, y: -148.0702209472656},
                               {x: 150.7776641845703, y: -178.0702209472656},
                               {x: 250.7776641845703, y: -206.0702209472656},
                               {x: 350.7776641845703, y: -227.0702209472656},
                               {x: 450.7776641845703, y: -240.0702209472656},
                               {x: 500.7776641845703, y: -242.0702209472656},
                               {x: 600.7776641845703, y: -245.0702209472656},
                               {x: 750.7776641845703, y: -242.0702209472656},
                               {x: 850.7776641845703, y: -235.0702209472656},
                               {x: 950.7776641845703, y: -230.0702209472656},
                               {x: 1100.7776641845703, y: -230.0702209472656},
                               {x: 1200.7776641845703, y: -240.0702209472656},
                               {x: 1320.7776641845703, y: -270.0702209472656},
                               {x: 1368.7776641845703, y: -295.0702209472656},
                               {x: 1420.7776641845703, y: -330.0702209472656},
                               {x: 1445.7776641845703, y: -350.0702209472656},
                               {x: 1480.7776641845703, y: -385.0702209472656},
                               {x: 1505.7776641845703, y: -415.0693359375},
                              ]

            drone.x = 58.7776641845703;
            drone.y = 1030.0702209472656;
            // drone.width = 50;
            // drone.height = 50;
            drone.anchor.set(0.5);
            drone.pivot.set(0.5);
            drone.scale.set(0.5);

            tween.to(drone, 30, {
                motionPath: { 
                    path: valuesDrone,
                    curviness: 0
                },
                ease: 'none',
                repeat: -1,
                yoyo: false
            }, 0);


            var blimpPath = new PIXI.Graphics()
            // .lineStyle(2, 0xaaaaaa, 1)
            .moveTo(-1510.7776641845703, -270.0693359375)
            .bezierCurveTo(-1510.7776641845703, -270.0693359375, -500.7776641845703, -1000.0702209472656, 230.7776641845703, 0.0702209472656, 1420.7776641845703, -1045.0702209472656)
            // .moveTo(-1510.7776641845703, -270.0693359375)
            // .lineTo(-500.7776641845703, -1000.0702209472656)
            // .lineTo(230.7776641845703, 0.0702209472656)
            // .lineTo(1420.7776641845703, -1045.0702209472656)
            
            // .moveTo(-1510.7776641845703, -270.0693359375)
            // .lineTo(-1000.7776641845703, -555.0702209472656)
            // .lineTo(-880.7776641845703, -620.0702209472656)
            // .lineTo(-840.7776641845703, -644.0702209472656)
            // .lineTo(-750.7776641845703, -679.0702209472656)
            // .lineTo(-700.7776641845703, -689.0702209472656)
            // .lineTo(-650.7776641845703, -695.0702209472656)
            // .lineTo(-600.7776641845703, -694.0702209472656)
            // .lineTo(-550.7776641845703, -690.0702209472656)
            // .lineTo(-500.7776641845703, -680.0702209472656)
            // .lineTo(-400.7776641845703, -652.0702209472656)
            // .lineTo(-300.7776641845703, -622.0702209472656)
            // .lineTo(-100.7776641845703, -532.0702209472656)
            // .lineTo(30.7776641845703, -460.0702209472656)
            // .lineTo(100.7776641845703, -435.0702209472656)
            // .lineTo(170.7776641845703, -425.0702209472656)
            // .lineTo(240.7776641845703, -423.0702209472656)
            // .lineTo(310.7776641845703, -430.0702209472656)
            // .lineTo(390.7776641845703, -445.0702209472656)
            // .lineTo(500.7776641845703, -475.0702209472656)
            // .lineTo(600.7776641845703, -515.0702209472656)
            // .lineTo(750.7776641845703, -586.0702209472656)
            // .lineTo(950.7776641845703, -700.0702209472656)
            // .lineTo(1100.7776641845703, -800.0702209472656)
            // .lineTo(1300.7776641845703, -947.0702209472656)
            // .lineTo(1420.7776641845703, -1045.0702209472656)

            var valuesBlimp = [{x: -1510.7776641845703, y: -270.0693359375}, 
                               {x: -500.7776641845703, y: -1000.0702209472656},
                               {x: 230.7776641845703, y: 0.0702209472656},
                               {x: 1420.7776641845703, y: -1045.0702209472656},
                            //    {x: -750.7776641845703, y: -679.0702209472656},
                            //    {x: -700.7776641845703, y: -689.0702209472656},
                            //    {x: -650.7776641845703, y: -695.0702209472656},
                            //    {x: -600.7776641845703, y: -694.0702209472656},
                            //    {x: -550.7776641845703, y: -690.0702209472656},
                            //    {x: -500.7776641845703, y: -680.0702209472656},
                            //    {x: -400.7776641845703, y: -652.0702209472656},
                            //    {x: -300.7776641845703, y: -622.0702209472656},
                            //    {x: -100.7776641845703, y: -532.0702209472656},
                            //    {x: 30.7776641845703, y: -460.0702209472656},
                            //    {x: 100.7776641845703, y: -435.0702209472656},
                            //    {x: 170.7776641845703, y: -425.0702209472656},
                            //    {x: 240.7776641845703, y: -423.0702209472656},
                            //    {x: 310.7776641845703, y: -430.0702209472656},
                            //    {x: 390.7776641845703, y: -445.0702209472656},
                            //    {x: 500.7776641845703, y: -475.0702209472656},
                            //    {x: 600.7776641845703, y: -515.0702209472656},
                            //    {x: 750.7776641845703, y: -586.0702209472656},
                            //    {x: 950.7776641845703, y: -700.0702209472656},
                            //    {x: 1100.7776641845703, y: -800.0702209472656},
                            //    {x: 1300.7776641845703, y: -947.0702209472656},
                            //    {x: 1420.7776641845703, y: -1045.0702209472656},
                              ]
            
            blimp.x = -1510.7776641845703;
            blimp.y = -270.0693359375;
            // blimp.width = 50;
            // blimp.height = 50;
            blimp.anchor.set(0.5);
            blimp.pivot.set(0.5);
            blimp.scale.set(0.5);

            
            tween.to(blimp, 28, {
                motionPath: { 
                    path: valuesBlimp,
                    align: valuesBlimp,
                    curviness: 0,
                    autoRotate: 120,
                    type: "cubic",
                    useRadians: true,
                },
                ease: 'none',
                repeat: -1,
                yoyo: false,
            }, 0);
            

            mapCont.addChild(grid);
            mapCont.addChild(road);
            mapCont.addChild(carOnePath, carOne);
            mapCont.addChild(carTwoPath, carTwo);
            mapCont.addChild(carThreePath, carThree);
            mapCont.addChild(map);
            mapCont.addChild(dronePath, drone);
            mapCont.addChild(blimpPath, blimp);


            var ServiceButtonHover = new PIXI.Sprite.from('/images/light/hover.png');

            mapCont.addChild(ServiceButtonHover);

            var trainHover = new PIXI.Sprite.from('/images/light/hover.png'); 
            mapCont.addChild(trainHover);
           

            grid.anchor.set(0.5,0.5);
            road.anchor.set(0.5,0.5);

            mapCont.interactive = true;
            mapCont.buttonMode = true;
            map.anchor.set(0.5,0.5);
            mapCont.x = app.screen.width / 2;
            mapCont.y = app.screen.height / 2;

            var xStore = []
            var xCount = 0; 


            function createGradTexture() {
                // adjust it if somehow you need better quality for very very big images
                const quality = 256;
                const canvas = document.createElement('canvas');
                canvas.width = quality;
                canvas.height = 1;

                const ctx = canvas.getContext('2d');

                // use canvas2d API to create gradient
                const grd = ctx.createLinearGradient(100, 100, quality, 100);
                grd.addColorStop(0, 'rgba(255, 255, 255, 0.0)');
                grd.addColorStop(0.3, '#F0F0F330');
                grd.addColorStop(0.7, '#00CCD669');
                grd.addColorStop(1, '#9E00FC');

                ctx.fillStyle = grd;
                ctx.fillRect(0, 0, quality, 1);

                return PIXI.Texture.from(canvas);
            }

            const gradTexture = createGradTexture();

            const graphics = new PIXI.Graphics();
            // graphics.beginFill(0xDE3249);
            // // graphics.beginTextureFill(gradTexture);
            // graphics.drawRect(50, 50, 100, 100, 30);
            // graphics.endFill();


            // just a little scriipt to find X Y while positioning things
            // var pixiCanva = app;

            // // app.addEventListener("click", onClick);

            // function onClick () {
            //     var target = this;
            //     alert(target.x);
            //     alert(target.y);
            // }



            // graphics.lineStyle(2, 0xFF00FF, 1);
            // graphics.beginFill(0x650A5A, 0.2);
            // graphics.drawRoundedRect(-652, 57, 20, 20, 1);
            // graphics.endFill();

            graphics.alpha = 1;
            graphics.lineStyle(1, 0xffd900, 1);

            // the three towers mask

            graphics.beginFill(0xFF3300);
            graphics.moveTo(-899.0654907226562, 17.634735107421875);
            // graphics.lineTo(-901.0654907226562, 16.634735107421875);
            // graphics.lineTo(-886.7482299804688, 24.636749267578125);
            graphics.lineTo(-887.5482299804688, 24.636749267578125);
            graphics.lineTo(-878.9482299804688, 24.636749267578125);
            graphics.lineTo(-865.5794982910156, 17.238006591796875);
            graphics.lineTo(-864.6791381835938, -90.5133056640625);
            graphics.lineTo(-960.2760314941406, -80.58369445800781);
            graphics.closePath();
            graphics.endFill();


            graphics.beginFill(0xFF3300);
            graphics.moveTo(-818.852294921875,-12.5272119140625);
            // graphics.lineTo(-818.6513586425781, -11.9172119140625);
            // graphics.lineTo(-795.6513586425781, -1.99004921875);
            graphics.lineTo(-802.6113586425781, -3.99004921875);
            graphics.lineTo(-792.6113586425781, -3.99004921875);
            // -708.7968139648438/91.99664306640625
            graphics.lineTo(-778.0056762695312,-11.525464111328125);
            // -673.2498779296875/-47.036376953125
            graphics.lineTo(-735.6103515625, -83.43841552734375);
            // -739.8705444335938/-39.6455078125
            graphics.lineTo(-832.3991546630859, -82.42477416992188);
            graphics.closePath();
            graphics.endFill();


            graphics.beginFill(0xFF3300);
            graphics.moveTo(-859.4706420898438, 95.49444580078125);
            graphics.lineTo(-864.4706420898438, 95.49444580078125);
            graphics.lineTo(-845.9519543457031, 105.9293720703125);
            graphics.lineTo(-837.9519543457031, 105.9293720703125);
            graphics.lineTo(-821.0023803710938, 95.49444580078125);
            // graphics.lineTo(-829.491455078125, -130.9113006591797);

            graphics.lineTo(-827.9432983398438, -62.67083740234375);
            graphics.lineTo(-742.4766235351562, -144.693359375);

            graphics.lineTo(-951.465087890625, -150.07177734375);
            
            graphics.lineTo(-858.4744415283203, -56.679443359375);

            graphics.lineTo(-863.1481018066406, -129.455078125);

            graphics.closePath();
            graphics.endFill();

            // end of three tower masks

            // Mwek building mask

            graphics.beginFill(0xFF3300);
            graphics.moveTo(-198.42529296875, -280.08184814453125);
            // -198.42529296875/-280.08184814453125
            graphics.lineTo(-198.42529296875, -280.08184814453125);
            // -149.56100463867188/-157.09686279296875
            graphics.lineTo(-121.98626708984375, -238.74819946289062);
            // -89.15414428710938/-123.04501342773438
            // // -708.7968139648438/91.99664306640625
            graphics.lineTo(-81.17926025390625, -264.27484130859375);
            // -55.0130615234375/-144.388671875
            // // -673.2498779296875/-47.036376953125
            graphics.lineTo(-50.717041015625, -418.14398193359375);
            // // -739.8705444335938/-39.6455078125
            graphics.lineTo(-225.43182373046875,-415.35113525390625);
            // -151.88214111328125/-243.8634033203125
            // -43.7164306640625/-237.19659423828125
            graphics.closePath();
            graphics.endFill();

            // tall building    
            graphics.beginFill(0xFF3300);
            graphics.moveTo(240.510009765625, -25.5338134765625);
            graphics.lineTo(240.510009765625, -25.5338134765625);
            graphics.lineTo(288.7976379394531, 3.424713134765625);
            graphics.lineTo(339.2602844238281, -26.407440185546875);
            graphics.lineTo(373.34613037109375, -219.58816528320312);
            graphics.lineTo(217.60488891601562, -191.28219604492188)
            graphics.closePath();
            graphics.endFill();


            // train tower

            graphics.beginFill(0xFF3300);
            graphics.moveTo(911.36083984375, 63.25616455078125);
            graphics.lineTo(911.36083984375, 63.25616455078125);
            graphics.lineTo(945.3286743164062, 83.95205688476562);
            graphics.lineTo(977.8931274414062, 66.36502075195312);
            graphics.lineTo(1017.8069458007812,-83.65408325195312);
            graphics.lineTo(886.3629760742188,-87.04708862304688)

            graphics.closePath();
            graphics.endFill();

            // ############ mwek building light sprites  #############

            // var HQcentre = new PIXI.Sprite.from('/images/light/HQ-centre.png');

        
            var HQDotscont = new PIXI.Container();

            var d1 = new PIXI.Sprite.from('/images/light/d1.png');
            var d2 = new PIXI.Sprite.from('/images/light/d2.png');
            var d3 = new PIXI.Sprite.from('/images/light/d3.png');
            var d4 = new PIXI.Sprite.from('/images/light/d4.png');
            var d5 = new PIXI.Sprite.from('/images/light/d5.png');

            d1.y = 0;
            d2.y = 10;
            d3.y = 20;
            d4.y = 30;
            d5.y = 40;

            HQDotscont.addChild(d1,d2,d3,d4,d5);

            var d1Count = 0;
            var d1up = true;
            var d2Count = 0;
            var d2up = true;
            var d3Count = 0;
            var d3up = true;
            var d4Count = 0;
            var d4up = true;
            var d5Count = 0;
            var d5up = true;


            var HQDotspeed = 0.2;
            var HQDotSpread = [-5,5]

            app.HQdotAnimation = function(delta){

                if (d1up){
                    d1Count = d1Count + HQDotspeed;
                    if (d1Count >= HQDotSpread[1]){
                        d1up = false;
                    }
                    d1.y = d1Count;
                }
                else{
                    d1Count = d1Count - HQDotspeed;
                    if (d1Count <= HQDotSpread[0]){
                        d1up = true;
                    }
                    d1.y = d1Count;
                }
               
                setTimeout(() => {

                    if (d2up){
                        d2Count = d2Count + HQDotspeed;
                        if (d2Count >= HQDotSpread[1]){
                            d2up = false;
                        }
                        d2.y = d2.y + HQDotspeed;
                    }
                    else{
                        d2Count = d2Count - HQDotspeed;
                        if (d2Count <= HQDotSpread[0]){
                            d2up = true;
                        }
                        d2.y = d2.y - HQDotspeed;
                    }

                }, 120);


                setTimeout(() => {

                    if (d3up){
                        d3Count = d3Count + HQDotspeed;
                        if (d3Count >= HQDotSpread[1]){
                            d3up = false;
                        }
                        d3.y = d3.y + HQDotspeed;
                    }
                    else{
                        d3Count = d3Count - HQDotspeed;
                        if (d3Count <= HQDotSpread[0]){
                            d3up = true;
                        }
                        d3.y = d3.y - HQDotspeed;
                    }

                }, 140);

                setTimeout(() => {

                    if (d4up){
                        d4Count = d4Count + HQDotspeed;
                        if (d4Count >= HQDotSpread[1]){
                            d4up = false;
                        }
                        d4.y = d4.y + HQDotspeed;
                    }
                    else{
                        d4Count = d4Count - HQDotspeed;
                        if (d4Count <= HQDotSpread[0]){
                            d4up = true;
                        }
                        d4.y = d4.y - HQDotspeed;
                    }

                }, 200);

                setTimeout(() => {

                    if (d5up){
                        d5Count = d5Count + HQDotspeed;
                        if (d5Count >= HQDotSpread[1]){
                            d5up = false;
                        }
                        d5.y = d5.y + HQDotspeed;
                    }
                    else{
                        d5Count = d5Count - HQDotspeed;
                        if (d5Count <= HQDotSpread[0]){
                            d5up = true;
                        }
                        d5.y = d5.y - HQDotspeed;
                    }

                }, 240);
                

            }
            app.ticker.add(app.HQdotAnimation);



            var HQcont = new PIXI.Container();
            var HQmiddle = new PIXI.Sprite.from('/images/light/HQ-middle.png');
            var HQouter = new PIXI.Sprite.from('/images/light/HQ-outer.png');
            var HQhover = new PIXI.Sprite.from('/images/light/hover.png');

            app.ticker.add(app.HQdotAnimation);

            HQDotscont.x = 60;
            HQDotscont.y = 40;

            const upDots = new PIXI.Graphics();
            HQcont.addChild(HQmiddle,HQouter, HQDotscont);
            mapCont.addChild(HQhover)
            
            HQhover.anchor.set(0.5,0.5);

            HQhover.x = -141.1739501953125
            HQhover.y = -122.635498046875

            // upDots.beginFill(0xFFFFFF);
            // upDots.moveTo(0, 0);
            // upDots.drawRect(10, 15, 10, 10);
            // upDots.endFill();


            // #### masks ####

            HQhover.mask = graphics
            HQcont.mask = graphics

            //  mapCont
            // -148.49615478515625/-158.59686279296875

            HQmiddle.y = 10;
            HQmiddle.x = 16;
            HQDotscont.x = 50;

            HQouter.y = 10;

            HQcont.x = -197;
            HQcont.y = -400.6499938964844;
            
            // HQcont.width = 105;
            
            // const outlineFilterBlue = new PIXI.filters.OutlineFilter(2, 0x99ff99);
            // const outlineFilterRed = new PIXI.filters.GlowFilter(15, 2, 1, 0xff9999, 0.5);
            // HQouter.filters = [outlineFilterBlue];


            mapCont.addChild(HQcont);


            HQmiddle.shadowColor = "red";
            HQmiddle.shadowBlur = 15;
            
            // HQouter.y = 5;

            var HQspeed = 0.3;
            
            var frameCount = 0;
            let counttx = 0, 
            countup = true;
            
            let HQouterCount = 0,
            HQouterUp = true

            app.HQcontAnimation = function(delta) {

                if (countup){
                    HQmiddle.y = HQmiddle.y + HQspeed;
                    if (HQmiddle.y >= 10){
                        countup = false;
                    }
                }
                else{
                    HQmiddle.y = HQmiddle.y - HQspeed;
                    if (HQmiddle.y <= -10){
                        countup = true;
                    }
                    // HQmiddle.y = counttx;
                }

                setTimeout(() => {
                    if (HQouterUp){
                        HQouter.y = HQouter.y + HQspeed;
                        if (HQouter.y >= 10){
                            HQouterUp = false;
                        }
                        // HQouter.y = HQouterCount;
                    }
                    else{
                        HQouter.y = HQouter.y - HQspeed;
                        if (HQouter.y <= -10){
                            HQouterUp = true;
                        }
                        // HQouter.y = HQouterCount;
                    }   
                }, 240);
                
                
                // 
            }




            



            const HQhoverZone = new PIXI.Graphics();
            HQhoverZone.interactive = true;
            HQhoverZone.cursor = 'pointer';

            HQhoverZone.beginFill(0xFF3300);
            HQhoverZone.moveTo(-244.0823211669922,-75.0487060546875);
            HQhoverZone.lineTo(-244.0823211669922,-75.0487060546875);
            HQhoverZone.lineTo(-50.7080078125,-76.31976318359375);
            HQhoverZone.lineTo(-34.20086669921875, -451.389404296875);
            HQhoverZone.lineTo(-244.2462158203125, -452.06732177734375);
            HQhoverZone.closePath();
            HQhoverZone.endFill();
            HQhoverZone.alpha = 0;

            

            mapCont.addChild(HQhoverZone);

            
            HQhoverZone.on('pointerover', HqHover)
            .on('pointerout', HqLeave);

            var hoverSpeed = 5;

            app.HQhoverAnimation = function(delta) {                
                // if(HQcont.y < -300){
                //     HQcont.y = HQcont.y + hoverSpeed
                // }
                // if( HQhover.y > -360.635498046875){
                //      HQhover.y = HQhover.y - hoverSpeed;
                // }
                // if(HQhover.y <= -310.635498046875){
                    if(HQExploreButton.alpha < 1.1){
                        HQExploreButton.alpha = HQExploreButton.alpha + 0.03;
                    }
                //}
            }

            app.HQhoverAnimationLeave = function(delta) {                
                // if(HQcont.y > -400){
                //     HQcont.y = HQcont.y - hoverSpeed
                // }
                // if( HQhover.y < -100.635498046875){
                //      HQhover.y =  HQhover.y + hoverSpeed;
                // }
                if(HQExploreButton.alpha > 0){
                    HQExploreButton.alpha = HQExploreButton.alpha - 0.03;
                }
            }

            function HqHover(state){
               // 
                app.ticker.remove(app.HQhoverAnimationLeave);
                app.ticker.add(app.HQhoverAnimation);
            }

            function HqLeave(state){
                // 
                app.ticker.remove(app.HQhoverAnimation);
                app.ticker.add(app.HQhoverAnimationLeave);
            }

            var HQExploreButton = new PIXI.Sprite.from('/images/buttons/Explore-Defualt.png');
            mapCont.addChild(HQExploreButton);
            HQExploreButton.alpha = 0;
            HQExploreButton.x = -141.10516357421875;
            HQExploreButton.y = -426.4768981933594;
            HQExploreButton.anchor.set(0.5,0.5);
            var HQExploreButtonUp = true;

            HQhoverZone.on('pointerover', HqHover)
            .on('pointerout', HqLeave);

            app.HQbuttonBounce = function(){
                // HQExploreButton.y = HQExploreButton.y + 1;
                if (HQExploreButtonUp){
                    HQExploreButton.y = HQExploreButton.y + 0.15;
                    if (HQExploreButton.y >= -400.4768981933594){
                        HQExploreButtonUp = false;
                    }
                    // HQouter.y = HQouterCount;
                }
                else{
                    HQExploreButton.y = HQExploreButton.y - 0.15;
                    if (HQExploreButton.y <= -406.4768981933594){
                        HQExploreButtonUp = true;
                    }
                    // HQouter.y = HQouterCount;
                }  
            }


            app.ticker.add(app.HQcontAnimation);
            app.ticker.add(app.HQbuttonBounce);


            // #### three tower sprites and animations ####

            var ThreeTowersCont = new PIXI.Container();
            
            var ThreeTowerOne = new PIXI.Sprite.from('/images/light/Triple-left.png');
            var ThreeTowerTwo = new PIXI.Sprite.from('/images/light/Triple-middle.png');
            var ThreeTowerThree = new PIXI.Sprite.from('/images/light/Triple-right.png');

            ThreeTowersCont.addChild(ThreeTowerOne,ThreeTowerTwo,ThreeTowerThree);
            mapCont.addChild(ThreeTowersCont);

            ThreeTowerOne.anchor.set(0.5, 0.5);
            ThreeTowerTwo.anchor.set(0.5, 0.5);
            ThreeTowerThree.anchor.set(0.5, 0.5);

            ThreeTowerOne.x = -882.4754333496094;
            ThreeTowerOne.y = 25.12579345703125;

            ThreeTowerTwo.x = -841.8823669433594;
            ThreeTowerTwo.y = 106.00119018554688;

            ThreeTowerThree.x = -796.8314208984375;
            ThreeTowerThree.y = -3.14556884765625;
    
            var threeTowersUp = [ true, true, true ];
            var threeTowersSpeed = 0.45;
            
            app.ThreeTowerAnimations = function(){
                if(threeTowersUp[0]){
                    if(ThreeTowerOne.y < -5){
                        threeTowersUp[0] = false;
                    }
                    ThreeTowerOne.y = ThreeTowerOne.y - threeTowersSpeed;
                }else{
                    if(ThreeTowerOne.y > 20){
                        threeTowersUp[0] = true;
                    }
                    ThreeTowerOne.y = ThreeTowerOne.y + threeTowersSpeed;
                }

                if(threeTowersUp[1]){
                    if(ThreeTowerTwo.y < 90){
                        threeTowersUp[1] = false;
                    }
                    ThreeTowerTwo.y = ThreeTowerTwo.y - threeTowersSpeed;
                }else{
                    if(ThreeTowerTwo.y > 120){
                        threeTowersUp[1] = true;
                    }
                    ThreeTowerTwo.y = ThreeTowerTwo.y + threeTowersSpeed;
                }

                if(threeTowersUp[2]){
                    if(ThreeTowerThree.y < -15){
                        threeTowersUp[2] = false;
                    }
                    ThreeTowerThree.y = ThreeTowerThree.y - threeTowersSpeed;
                }else{
                    if(ThreeTowerThree.y > 10){
                        threeTowersUp[2] = true;
                    }
                    ThreeTowerThree.y = ThreeTowerThree.y + threeTowersSpeed;
                }
            }


            app.ticker.add(app.ThreeTowerAnimations);


            const threeTowerHoverZone = new PIXI.Graphics();

            threeTowerHoverZone.interactive = true;
            // threeTowerHoverZone.cursor = 'pointer';


            var ServiceButton = new PIXI.Sprite.from('/images/buttons/OurServices-Hover.png');
            mapCont.addChild(ServiceButton); 
            // ServiceButton.alpha = 0;
            ServiceButton.x = -846.4503479003906;
            ServiceButton.y = -121.50445556640625;
            ServiceButton.anchor.set(0.5,0.5);
            ServiceButton.zOrder = -10;
            var ServiceButtonUp = true;

            app.ServicebuttonBounce = function(){
                // HQExploreButton.y = HQExploreButton.y + 1;
                if (ServiceButtonUp){
                    ServiceButton.y = ServiceButton.y + 0.15;
                    if (ServiceButton.y >= -121.4768981933594){
                        ServiceButtonUp = false;
                    }
                    // HQouter.y = HQouterCount;
                }
                else{
                    ServiceButton.y = ServiceButton.y - 0.15;
                    if (ServiceButton.y <= -130.4768981933594){
                        ServiceButtonUp = true;
                    }
                    // HQouter.y = HQouterCount;
                }  
            }


        
            app.ticker.add(app.ServicebuttonBounce);


            threeTowerHoverZone.beginFill(0xFF3300);
            threeTowerHoverZone.moveTo(-920.7710571289062, 316.0430908203125);
            threeTowerHoverZone.lineTo(-920.7710571289062, 316.0430908203125);
            threeTowerHoverZone.lineTo(-748.5176391601562, 316.0595703125);
            threeTowerHoverZone.lineTo(-743.8262939453125, -10.00506591796875);
            threeTowerHoverZone.lineTo(-703.9773559570312, -58.11492919921875);
            threeTowerHoverZone.lineTo(-715.6692504882812, -205.08328247070312);
            threeTowerHoverZone.lineTo(-969.3775024414062, -204.85272216796875);
            threeTowerHoverZone.lineTo(-968.5872192382812, -52.297607421875);
            threeTowerHoverZone.lineTo(-924.619384765625, 19.45867919921875);
            threeTowerHoverZone.closePath();
            threeTowerHoverZone.endFill();
            threeTowerHoverZone.alpha = 0;


            mapCont.addChild(threeTowerHoverZone);



            ServiceButtonHover.anchor.set(0.5,0.5);
            ServiceButtonHover.x = -842.4466857910156;
            ServiceButtonHover.y = 235.40478515625;
            ServiceButton.alpha = 0;

            ThreeTowersCont.mask = graphics;
            ServiceButtonHover.mask = graphics;


            threeTowerHoverZone.on('pointerover', ServiceHover)
            .on('pointerout', ServiceLeave);

            var serviceHoverSpeed = 5;

            app.ServiceHoverAnimation = function(delta) {                
                // if(ThreeTowersCont.y < 100){
                //     ThreeTowersCont.y = ThreeTowersCont.y + serviceHoverSpeed;
                // }
                // if(ServiceButtonHover.y > 0){
                //     ServiceButtonHover.y = ServiceButtonHover.y - serviceHoverSpeed;
                // }
                
                // setTimeout(() => {
                    if(ServiceButton.alpha < 1){
                        ServiceButton.alpha = ServiceButton.alpha + 0.05;
                    }
                // }, 500)
            }

            app.ServiceHoverAnimationLeave = function(delta) {                
                // if(ThreeTowersCont.y > -10){
                //     ThreeTowersCont.y = ThreeTowersCont.y - serviceHoverSpeed;
                // }
                // if(ServiceButtonHover.y < 235){
                //     ServiceButtonHover.y = ServiceButtonHover.y + serviceHoverSpeed;
                // }
                if(ServiceButton.alpha > 0){
                    ServiceButton.alpha = ServiceButton.alpha - 0.05;
                }
                // 
            }

            function ServiceHover(state){
                app.ticker.remove(app.ServiceHoverAnimationLeave);
                app.ticker.add(app.ServiceHoverAnimation);
            }

            function ServiceLeave(state){
                app.ticker.add(app.ServiceHoverAnimationLeave);
                app.ticker.remove(app.ServiceHoverAnimation);
            }


            // ####### end of service antimiaons




            // ##### start of blog / single tower animations


            var singleTower = new PIXI.Container();
            
            var singleTowerCenter = new PIXI.Sprite.from('/images/light/city_Single-middle.png');
            var singleTowerOuter = new PIXI.Sprite.from('/images/light/city_Single-outer.png');
            singleTowerCenter.anchor.set(0.5, 0.5);
            singleTowerOuter.anchor.set(0.5, 0.5);
            // serviceDotscont.x 
            // serviceDotscont.y 

            singleTower.x = 288.0107421875;
            singleTower.y = -40.917449951171875;

            var serviceDotscont = new PIXI.Container();

            var e1 = new PIXI.Sprite.from('/images/light/d1.png');
            var e2 = new PIXI.Sprite.from('/images/light/d2.png');
            var e3 = new PIXI.Sprite.from('/images/light/d3.png');
            var e4 = new PIXI.Sprite.from('/images/light/d4.png');
            var e5 = new PIXI.Sprite.from('/images/light/d5.png');

            e1.y = 0;
            e2.y = 10;
            e3.y = 20;
            e4.y = 30;
            e5.y = 40;

            serviceDotscont.addChild(e1,e2,e3,e4,e5);

            serviceDotscont.x = -5;
            serviceDotscont.y = -40;

            var e1Count = 0;
            var e1up = true;
            var e2Count = 0;
            var e2up = true;
            var e3Count = 0;
            var e3up = true;
            var e4Count = 0;
            var e4up = true;
            var e5Count = 0;
            var e5up = true;


            var HQDotspeed = 0.2;
            var HQDotSpread = [-5,5]

            app.ServicedotAnimation = function(delta){

                if (e1up){
                    e1Count = e1Count + HQDotspeed;
                    if (e1Count >= HQDotSpread[1]){
                        e1up = false;
                    }
                    e1.y = e1Count;
                }
                else{
                    e1Count = e1Count - HQDotspeed;
                    if (e1Count <= HQDotSpread[0]){
                        e1up = true;
                    }
                    e1.y = e1Count;
                }
               
                setTimeout(() => {

                    if (e2up){
                        e2Count = e2Count + HQDotspeed;
                        if (e2Count >= HQDotSpread[1]){
                            e2up = false;
                        }
                        e2.y = e2.y + HQDotspeed;
                    }
                    else{
                        e2Count = e2Count - HQDotspeed;
                        if (e2Count <= HQDotSpread[0]){
                            e2up = true;
                        }
                        e2.y = e2.y - HQDotspeed;
                    }

                }, 120);


                setTimeout(() => {

                    if (e3up){
                        e3Count = e3Count + HQDotspeed;
                        if (e3Count >= HQDotSpread[1]){
                            e3up = false;
                        }
                        e3.y = e3.y + HQDotspeed;
                    }
                    else{
                        e3Count = e3Count - HQDotspeed;
                        if (e3Count <= HQDotSpread[0]){
                            e3up = true;
                        }
                        e3.y = e3.y - HQDotspeed;
                    }

                }, 140);

                setTimeout(() => {

                    if (e4up){
                        e4Count = e4Count + HQDotspeed;
                        if (e4Count >= HQDotSpread[1]){
                            e4up = false;
                        }
                        e4.y = e4.y + HQDotspeed;
                    }
                    else{
                        e4Count = e4Count - HQDotspeed;
                        if (e4Count <= HQDotSpread[0]){
                            e4up = true;
                        }
                        e4.y = e4.y - HQDotspeed;
                    }

                }, 200);

                setTimeout(() => {

                    if (e5up){
                        e5Count = e5Count + HQDotspeed;
                        if (e5Count >= HQDotSpread[1]){
                            e5up = false;
                        }
                        e5.y = e5.y + HQDotspeed;
                    }
                    else{
                        e5Count = e5Count - HQDotspeed;
                        if (e5Count <= HQDotSpread[0]){
                            e5up = true;
                        }
                        e5.y = e5.y - HQDotspeed;
                    }

                }, 240);
                

            }
            
            app.ticker.add(app.ServicedotAnimation);


            singleTower.addChild(singleTowerCenter,singleTowerOuter, serviceDotscont);
            mapCont.addChild(singleTower);
            singleTower.mask = graphics;
            var singleTowerUp = [true, true]

            var singleTowerLightSpeed = 0.5;

            app.singleTowerLightAnimate = function(){
                
                if(singleTowerUp[0]){
                    singleTowerCenter.y = singleTowerCenter.y - singleTowerLightSpeed;
                    if(singleTowerCenter.y < -30){
                        singleTowerUp[0] = false;
                    }
                }else{
                    singleTowerCenter.y = singleTowerCenter.y + singleTowerLightSpeed;
                    if(singleTowerCenter.y > 0){
                         singleTowerUp[0] = true;
                    }   
                }

                setTimeout(() => {
                    if(singleTowerUp[1]){
                        singleTowerOuter.y = singleTowerOuter.y - singleTowerLightSpeed;
                        if(singleTowerOuter.y < -30){
                            singleTowerUp[1] = false;
                        }
                    }else{
                        singleTowerOuter.y = singleTowerOuter.y + singleTowerLightSpeed;
                        if(singleTowerOuter.y > 0){
                            singleTowerUp[1] = true;
                        }   
                    }
                }, "1000")

                // 
            }
            var singleHover = new PIXI.Sprite.from('/images/light/hover.png');
            mapCont.addChild(singleHover);
            singleHover.anchor.set(0.5,0.5);
            singleHover.x = 289.40130615234375;
            singleHover.y = 150.8531494140625;

            var singleButton = new PIXI.Sprite.from('/images/buttons/Blog-Defualt.png')
            mapCont.addChild(singleButton);
            singleButton.anchor.set(0.5,0.5);
            singleButton.alpha = 0;

            singleButton.x = 286.7672119140625;
            singleButton.y = -181.85617065429688;

            var singleButtonUp = true;

            
            app.singleButtonBounce = function(){
                if(singleButtonUp){
                    if(singleButton.y < -191){
                        singleButtonUp = false;
                    }
                    singleButton.y = singleButton.y - 0.3
                }else{
                    if(singleButton.y > -181){
                        singleButtonUp = true;
                    }
                    singleButton.y = singleButton.y + 0.3
                }
                // 
            }

            
            const singleHoverZone = new PIXI.Graphics();  
            //const HQhoverZone = new PIXI.Graphics();

            singleHoverZone.beginFill(0xFF3300);
            singleHoverZone.moveTo(212.02577209472656, 295.3148193359375);
            singleHoverZone.lineTo(212.02577209472656, 295.3148193359375);
            singleHoverZone.lineTo(288.91249084472656, 337.62994384765625);
            singleHoverZone.lineTo(367.18592834472656, 293.7650146484375);
            singleHoverZone.lineTo(389.3240966796875, -145.05490112304688);
            singleHoverZone.lineTo(395.88494873046875, -154.4964599609375);
            singleHoverZone.lineTo(392.7216796875, -226.95614624023438);
            singleHoverZone.lineTo(184.932861328125, -224.72042846679688);
            singleHoverZone.lineTo(186.8106689453125, -145.65829467773438);
            singleHoverZone.lineTo(212.09690856933594, -28.52362060546875)
            singleHoverZone.closePath();
            singleHoverZone.endFill();

            mapCont.addChild(singleHoverZone);
            singleHoverZone.alpha = 0;


            singleHoverZone.interactive = true;
            singleHoverZone.cursor = 'pointer';
            singleHoverZone.on('pointerover', signleHover)
            .on('pointerout', singleLeave);


            singleHover.mask = graphics;

            app.singleHoverAnim = function(){
                // if(singleTower.y < 40 ){
                //     singleTower.y = singleTower.y + 5;
                // }
                // if(singleHover.y > -100){
                //     singleHover.y = singleHover.y - 5;
                // }
                // setTimeout(() => {
                    if(singleButton.alpha < 1){
                        singleButton.alpha = singleButton.alpha + 0.3;
                    }
                // }, 700);
                // singleTower.y = singleTower.y + 1;
            }

            app.singleLeaveAnim = function(){
                
                    // if(singleTower.y > -20 ){
                    //     singleTower.y = singleTower.y - 5;
                    // }
                    // if(singleHover.y < 150){
                    //     singleHover.y = singleHover.y + 5;
                    // }
                // setTimeout(() => {
                    if(singleButton.alpha > 0){
                        singleButton.alpha = singleButton.alpha - 0.3;
                    }
                // }, 500 );
            }

            function singleLeave(){
                app.ticker.add(app.singleLeaveAnim);
                app.ticker.remove(app.singleHoverAnim);
                
            }
            function signleHover(){
                app.ticker.add(app.singleHoverAnim);
                app.ticker.remove(app.singleLeaveAnim);
            }
   
            app.ticker.add(app.singleButtonBounce);

            app.ticker.add(app.singleTowerLightAnimate);

             

            // singlhoverZone.beginFill(0xFF3300);
            // singlhoverZone.moveTo(-244.0823211669922,-75.0487060546875);
            // singlhoverZone.lineTo(-244.0823211669922,-75.0487060546875);

            // // HQhoverZone.lineTo(217.60488891601562, -191.28219604492188)
            // singlhoverZone.closePath();
            // singlhoverZone.endFill();


            // -883.4754333496094/25.12579345703125
            // HQcont.height = 80;


            // 204.36065673828125/50.336517333984375

            var buttonOneCont = new PIXI.Container()
   


            // train building animations 

            var trainTower = new PIXI.Container();

            trainTower.mask = graphics;
            
            var trainTowerCenter = new PIXI.Sprite.from('/images/light/Trainlight-middle.png');
            var trainTowerOuter = new PIXI.Sprite.from('/images/light/Trainlight-outside.png');
            trainTowerCenter.anchor.set(0.5, 0.5);
            trainTowerOuter.anchor.set(0.5, 0.5);

            trainTower.addChild(trainTowerCenter, trainTowerOuter);

            

            mapCont.addChild(trainTower);

            trainTower.x = 942.7185668945312;
            trainTower.y = 50.19964599609375;

            var trainTowerUp = [true, true];

            var trainTowerLightSpeed = 0.2;

            app.trainTowerLightAnimate = function(){
                
                if(trainTowerUp[0]){
                    trainTowerCenter.y = trainTowerCenter.y - trainTowerLightSpeed;
                    if(trainTowerCenter.y < -30){
                        trainTowerUp[0] = false;
                    }
                }else{
                    trainTowerCenter.y = trainTowerCenter.y + trainTowerLightSpeed;
                    if(singleTowerCenter.y > 0){
                        trainTowerUp[0] = true;
                    }   
                }

                setTimeout(() => {
                    if(trainTowerUp[1]){
                        trainTowerOuter.y = trainTowerOuter.y - trainTowerLightSpeed;
                        if(trainTowerOuter.y < -30){
                            trainTowerUp[1] = false;
                        }
                    }else{
                        trainTowerOuter.y = trainTowerOuter.y + trainTowerLightSpeed;
                        if(trainTowerOuter.y > 0){
                            trainTowerUp[1] = true;
                        }   
                    }
                }, "1000");
                // 
            }


            app.ticker.add(app.trainTowerLightAnimate);

            var trainDotscont = new PIXI.Container();

            trainTower.addChild(trainDotscont);

            var f1 = new PIXI.Sprite.from('/images/light/d1.png');
            var f2 = new PIXI.Sprite.from('/images/light/d2.png');
            var f3 = new PIXI.Sprite.from('/images/light/d3.png');
            var f4 = new PIXI.Sprite.from('/images/light/d4.png');
            var f5 = new PIXI.Sprite.from('/images/light/d5.png');

            f1.y = 0;
            f2.y = 10;
            f3.y = 20;
            f4.y = 30;
            f5.y = 40;

            trainDotscont.addChild(f1,f2,f3,f4,f5);

            trainDotscont.x = -5;
            trainDotscont.y = -40;

            var f1Count = 0;
            var f1up = true;
            var f2Count = 0;
            var f2up = true;
            var f3Count = 0;
            var f3up = true;
            var f4Count = 0;
            var f4up = true;
            var f5Count = 0;
            var f5up = true;

            app.trainDotAnimation = function(delta){

                if (f1up){
                    f1Count = f1Count + HQDotspeed;
                    if (f1Count >= HQDotSpread[1]){
                        f1up = false;
                    }
                    f1.y = f1Count;
                }
                else{
                    f1Count = f1Count - HQDotspeed;
                    if (f1Count <= HQDotSpread[0]){
                        f1up = true;
                    }
                    f1.y = f1Count;
                }
               
                setTimeout(() => {

                    if (f2up){
                        f2Count = f2Count + HQDotspeed;
                        if (f2Count >= HQDotSpread[1]){
                            f2up = false;
                        }
                        f2.y = f2.y + HQDotspeed;
                    }
                    else{
                        f2Count = f2Count - HQDotspeed;
                        if (f2Count <= HQDotSpread[0]){
                            f2up = true;
                        }
                        f2.y = f2.y - HQDotspeed;
                    }

                }, 120);


                setTimeout(() => {

                    if (f3up){
                        f3Count = f3Count + HQDotspeed;
                        if (f3Count >= HQDotSpread[1]){
                            f3up = false;
                        }
                        f3.y = f3.y + HQDotspeed;
                    }
                    else{
                        f3Count = f3Count - HQDotspeed;
                        if (f3Count <= HQDotSpread[0]){
                            f3up = true;
                        }
                        f3.y = f3.y - HQDotspeed;
                    }

                }, 140);

                setTimeout(() => {

                    if (f4up){
                        f4Count = f4Count + HQDotspeed;
                        if (f4Count >= HQDotSpread[1]){
                            f4up = false;
                        }
                        f4.y = f4.y + HQDotspeed;
                    }
                    else{
                        f4Count = f4Count - HQDotspeed;
                        if (f4Count <= HQDotSpread[0]){
                            f4up = true;
                        }
                        f4.y = f4.y - HQDotspeed;
                    }

                }, 200);

                setTimeout(() => {

                    if (f5up){
                        f5Count = f5Count + HQDotspeed;
                        if (f5Count >= HQDotSpread[1]){
                            f5up = false;
                        }
                        f5.y = f5.y + HQDotspeed;
                    }
                    else{
                        f5Count = f5Count - HQDotspeed;
                        if (f5Count <= HQDotSpread[0]){
                            f5up = true;
                        }
                        f5.y = f5.y - HQDotspeed;
                    }

                }, 240);
                

            }

            var trainButton = new PIXI.Sprite.from('/images/buttons/Contact-Defualt.png');
            mapCont.addChild(trainButton);

            trainButton.anchor.set(0.5,0.5);

            trainButton.x = 942.2290649414062;
            trainButton.y = -83.26358032226562;

  

            var trainButtonUp = true;
            app.trainBounce = function(){
                // HQExploreButton.y = HQExploreButton.y + 1;
                if (trainButtonUp){
                    trainButton.y = trainButton.y + 0.15;
                    if (trainButton.y >= -80.4768981933594){
                        trainButtonUp = false;
                    }
                    // HQouter.y = HQouterCount;
                }
                else{
                    trainButton.y = trainButton.y - 0.15;
                    if (trainButton.y < -90.263580322265624){
                        trainButtonUp = true;
                    }
                    // HQouter.y = HQouterCount;
                }  
            }

            app.ticker.add(app.trainBounce);
            app.ticker.add(app.HQcontAnimation);

            app.ticker.add(app.trainDotAnimation);

            const trainHoverZone = new PIXI.Graphics(); 

            trainHoverZone.beginFill(0xFF3300);
            trainHoverZone.moveTo(894.1466064453125, 319.28851318359375);
            trainHoverZone.lineTo(894.3207397460938, 317.66571044921875);
            trainHoverZone.lineTo(943.9647216796875, 346.8712158203125);
            trainHoverZone.lineTo(994.672607421875, 312.52545166015625);
            trainHoverZone.lineTo(994.0299072265625, 59.062744140625);
            trainHoverZone.lineTo(1048.1794738769531, -44.58514404296875);
            trainHoverZone.lineTo(1045.38818359375, -123.99935913085938);
            trainHoverZone.lineTo(843.4215393066406, -122.94973754882812);
            trainHoverZone.lineTo(843.9025268554688, -44.1617431640625);
            trainHoverZone.closePath();
            trainHoverZone.endFill();
            trainHoverZone.alpha = 0.0;

            trainHoverZone.interactive = true;
            trainHoverZone.cursor = 'pointer';
  
            mapCont.addChild(trainHoverZone);

            trainButton.alpha = 0;

            trainHover.mask = graphics;

            trainHoverZone.on('pointerover', addTrainHover)
            .on('pointerout', removeTrainHover);

            app.trainHover = function(){
                //

                // if(trainTower.y < 150){
                //     trainTower.y = trainTower.y + 5;
                // }
                // if(trainHover.y > -50){
                //     trainHover.y = trainHover.y - 5;
                // }

                // setTimeout(function(){
                    //code goes here
                    if(trainButton.alpha < 1){
                        trainButton.alpha = trainButton.alpha + 0.09;
                    }
                // }, 800); //Time before execution

            }
            
            app.trainLeave = function(){
                // setTimeout(function(){
                    if(trainTower.y > 50){
                        trainTower.y = trainTower.y - 5;
                    }
                    if(trainHover.y < 225){
                        trainHover.y = trainHover.y + 5;
                    }
                // }, 800); //Time before execution

                if(trainButton.alpha > 0){
                    trainButton.alpha = trainButton.alpha - 0.09;
                }

            }

            function addTrainHover(){
                app.ticker.remove(app.trainLeave);
                app.ticker.add(app.trainHover);

            }

            function removeTrainHover(){
                app.ticker.remove(app.trainHover);
                app.ticker.add(app.trainLeave);
            }


            trainHover.mask = graphics;

            trainHover.x = 942.3785400390625;
            trainHover.y = 225.63531494140625;

            trainHover.anchor.set(0.5,0.5);

            

            // buttonOneCont.addChild(graphics);
            app.stage.addChild(mapCont);
            mapCont.addChild(graphics);

            

            // my shity map drag boundry check
            var xCanMoveRight = true;
            var xCanMoveLeft = true;
            var yCanMoveTop = true;
            var yCanMoveDown = true;


            // this.app.stage.addChild(mapCont);

    //         map.interactive = true;

    // // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
    //         map.buttonMode = true;

            app.animationUpdateXright = function(delta) {
                // 
                var checkCords = mapCont.getBounds();
                if(checkCords.x > 0){
                     mapCont.x = mapCont.x - 15;
                }
               
                // 
            }


            app.animationUpdateXleft = function(delta) {
                // 
                var checkCords = mapCont.getBounds();
                var rightCheck = 0 - (mapCont._boundsRect.width - window.innerWidth )
                if(checkCords.x < rightCheck){
                    mapCont.x = mapCont.x + 15;
                }
                // for(i = 0; i < )
            }


            app.animationUpdateYtop = function(delta) {
                // 
                var checkCords = mapCont.getBounds();
                if(checkCords.y > 0){
                    mapCont.y = mapCont.y - 15;
                }
                
            }

            
            app.animationUpdateYbottom = function(delta) {
                // 
                // mapCont.y += 0.1 * 10;
                var checkCords = mapCont.getBounds();
                var bottomCheck = 0 - ( mapCont._boundsRect.height - window.innerHeight);
                if(checkCords.y < bottomCheck){
                    mapCont.y = mapCont.y + 15;
                }
            }
            
            
            
            // var checkCordsStart = mapCont.getBounds();
            // 

            mapCont.on('pointerdown', onDragStart)
                .on('pointerup', onDragEnd)
                .on('pointerupoutside', onDragEnd)
                .on('pointermove', onDragMove);

            function onDragStart(event) {
                // store a reference to the data
                // the reason for this is because of multitouch
                // we want to track the movement of this particular touch
                this.data = event.data;
                

                //store this variable for convenience           
                let position = this.data.getLocalPosition(this);
                
                // Set the pivot point to the new position
                thisContext.clickPosition = position
                this.pivot.set(position.x, position.y)
                // update the new position of the sprite to the position obtained through 
                // the global data. This ensures the position lines up with the location of 
                // the mouse on the screen. I'm not certain why, but this is necessary. 
                this.position.set(this.data.global.x, this.data.global.y)
                this.dragging = true;


                // explore click
                if(thisContext.clickPosition.y < -361.56805419921875 && thisContext.clickPosition.y > -448.3217468261719 && thisContext.clickPosition.x > -239.74478149414062 && thisContext.clickPosition.x < -40.293060302734375 ){
                    thisContext.$emit('explore');
                    thisContext.clickPosition = 0;
                }


                // service click
                if(thisContext.clickPosition.y < -51.0474853515625 && thisContext.clickPosition.y > -114.27386474609375 && thisContext.clickPosition.x > -965.5708618164062 && thisContext.clickPosition.x < -851.8754272460938 ){
                    thisContext.$emit('clientService');
                    thisContext.clickPosition = 0;
                }else if(thisContext.clickPosition.y < -51.0474853515625 && thisContext.clickPosition.y > -114.27386474609375 && thisContext.clickPosition.x > -840.2058715820312 && thisContext.clickPosition.x < -723.2125244140625){
                    thisContext.$emit('candidateService');
                    thisContext.clickPosition = 0;
                }

                // blog click
                if(thisContext.clickPosition.y > -286.0414733886719 && thisContext.clickPosition.y < -145.14675903320312 && thisContext.clickPosition.x > 186.5819091796875 && thisContext.clickPosition.x < 389.105712890625){
                  thisContext.$emit('blog');
                  thisContext.clickPosition = 0;
                }

                // contact click
                if(thisContext.clickPosition.y < -44.99481201171875 && thisContext.clickPosition.y > -122.63543701171875 && thisContext.clickPosition.x > 843.1767578125 && thisContext.clickPosition.x < 1042.0689697265625){
                    thisContext.$emit('contact');
                    thisContext.clickPosition = 0;
                }


            }

            function onDragEnd() {
                this.alpha = 1;
                this.dragging = false;
                // set the interaction data to null
                this.data = null;


                var checkCords = mapCont.getBounds();


                // left
                if(checkCords.x > 0){
                    app.ticker.add(app.animationUpdateXright);
                }

                // right
                var rightCheck = 0 - (mapCont._boundsRect.width - window.innerWidth );
                
                if(checkCords.x < rightCheck){
                    app.ticker.add(app.animationUpdateXleft);
                    //alert('hello');
                    // app.ticker.remove(app.animationUpdateXleft);
                }

                // top
                if(checkCords.y > 0){
                    app.ticker.add(app.animationUpdateYtop);
                }
                // bottom
                var bottomCheck = 0 - ( mapCont._boundsRect.height - window.innerHeight);
                if(checkCords.y < bottomCheck){
                    app.ticker.add(app.animationUpdateYbottom);
                    
                    // app.ticker.remove(app.animationUpdateXleft);
                }
            }

            function onDragMove() {


                // var checkCords = mapCont.getBounds();
   



                // check if you are hitting the container edge of the browser

                // if(checkCords.x > 0){
                //     xCanMoveRight = false;
                // }

                // if(checkCords.x <= 0 - mapCont._boundsRect.width / 2){
                //     // xCanMoveLeft = false;
                //     // app.ticker.add(app.animationUpdateXleft);
                   
                //     // app.ticker.remove(app.animationUpdateXleft);
                //         // mapCont.interactive = true;
                //         // mapCont.buttonMode = true;
                //         // 
                 
                // }


                


                if (this.dragging) {
                    var newPosition = this.data.getLocalPosition(this.parent);

                    // if(xCanMoveRight){
                    //     this.x = newPosition.x;
                    //     this.dragging = true
                    //     // 
                    //     // 
                    //     mapCont.interactive = true;
                    //     mapCont.buttonMode = true;

                    // }else{
                        
                    //     app.ticker.add(app.animationUpdateXright);
                    //     setTimeout (function(){
                    //         app.ticker.remove(app.animationUpdateXright);
                    //         xCanMoveRight = true;
                    //         // mapCont.interactive = true;
                    //         // mapCont.buttonMode = true;
                    //         // 
                    //     }, 400);
                    // }
                    this.x = newPosition.x;

                    // if(xCanMoveLeft){
                    //     this.x = newPosition.x;
                    //     this.dragging = true
                    //     // 
                    //     // 
                    //     mapCont.interactive = true;
                    //     mapCont.buttonMode = true;

                    // }else{
                        
                    //     app.ticker.add(app.animationUpdateXleft);
                    //     setTimeout (function(){
                    //         app.ticker.remove(app.animationUpdateXleft);
                    //         xCanMoveLeft = true;
                    //         // mapCont.interactive = true;
                    //         // mapCont.buttonMode = true;
                    //         // 
                    //     }, 400);
                    // }
                    
                    this.y = newPosition.y;
                }
            }

           // let app = new PIXI.Application({ width: 640, height: 360 });
            // document.body.appendChild(app.view);
            /// button click space
            // HQhoverZone.hitArea = new PIXI.Polygon([])

            // threeTowerHoverZone.on('mousedown', goToClientService);
            // threeTowerHoverZone.on('touchstart', goToClientService);

            // function goToClientService(){

            //     if(thisContext.clickPosition.y < -51.0474853515625 && thisContext.clickPosition.y > -114.27386474609375 && thisContext.clickPosition.x > -965.5708618164062 && thisContext.clickPosition.x < -851.8754272460938 ){
            //         thisContext.$emit('clientService');
            //     }else if(thisContext.clickPosition.y < -51.0474853515625 && thisContext.clickPosition.y > -114.27386474609375 && thisContext.clickPosition.x > -840.2058715820312 && thisContext.clickPosition.x < -80.27774047851562){
            //         thisContext.$emit('candidateService')
            //     }
            // }

            // HQhoverZone.on('mousedown', goToPage);
            // HQhoverZone.on('touchstart', goToPage);

            // function goToPage(whichOne){
            //     
            //     // this.$router.push({path: '/explore' });
            //     // router.push('/users/eduardo')
            //     // let clickPosition = mapCont.data.getLocalPosition(this);
            //     
            //     if(thisContext.clickPosition.y < -361.56805419921875 && thisContext.clickPosition.y > -448.3217468261719 && thisContext.clickPosition.x > -239.74478149414062 && thisContext.clickPosition.x < -40.293060302734375 ){
            //         thisContext.$emit('explore');
            //     }
            // }

            // singleHoverZone.on('mousedown', goToBlog);
            // singleHoverZone.on('mousedown', goToBlog);

            // function goToBlog(){
            //     // if(thisContext.clickPosition.y < 286.0414733886719 && thisContext.clickPosition.y > -145.14675903320312 && thisContext.clickPosition.x > 187.8106689453125 && thisContext.clickPosition.x < 389.60595703125){
            //     //     thisContext.$emit('blog');
            //     // }
            //     if(thisContext.clickPosition.y < 286.0414733886719 && thisContext.clickPosition.y > -145.14675903320312 && thisContext.clickPosition.x > 187.8106689453125 && thisContext.clickPosition.x < 389.60595703125){
            //         thisContext.$emit('blog');
            //     }
            // }


            // moving objects

            const trainMask = new PIXI.Graphics();

            trainMask.beginFill(0xFF3300);
            trainMask.moveTo(1040.7266540527344, 156.1871337890625);
            trainMask.lineTo(1040.7266540527344, 380.1871337890625);
            trainMask.lineTo(1424.3871337890625, 126.1871337890625);
            trainMask.lineTo(1424.3871337890625, 78.1871337890625);
            trainMask.lineTo(1420.0827331542969, 65.5439453125);
            trainMask.lineTo(1415.0827331542969, 58.0439453125);
            trainMask.lineTo(1410.0827331542969, 53.0439453125);
            trainMask.lineTo(1400.0827331542969, 50.0439453125);
            trainMask.closePath();
            trainMask.endFill();
            trainMask.alpha = 0.5;

            trainMask.beginFill(0xFF3300);
            trainMask.moveTo(83.5160827636719, 776.6109008789062);
            trainMask.lineTo(122.5160827636719, 780.6109008789062);
            trainMask.lineTo(138.20233154296875, 802.6501159667969);
            trainMask.lineTo(141.301494140625, 830.6501159667969);
            trainMask.lineTo(141.301494140625, 890.6501159667969);
            trainMask.lineTo(997.68017578125, 463.7853088378906);
            trainMask.lineTo(992.8050689697266, 375.1382598876953);
            trainMask.lineTo(990.1568756103516, 343.4243927001953);
            trainMask.lineTo(986.4432830810547, 320.0071716308594);
            trainMask.lineTo(979.4887084960938, 303.15948486328125);
            trainMask.lineTo(973.2255859375, 294.0299377441406);
            trainMask.lineTo(963.3096313476562, 285.29217529296875);
            trainMask.lineTo(945.2364349365234, 283.92271423339844);
            trainMask.lineTo(896.7702026367188, 152.20428466796875);
            trainMask.closePath();
            trainMask.endFill();

            var trainSprite = new PIXI.Sprite.from('/images/travel/TrainNew.png'); 
            mapCont.addChild(trainMask);
            mapCont.addChild(trainSprite);

            trainSprite.anchor.set(0.5,0.5);
            trainSprite.x = 1866.4095458984375;
            trainSprite.y = -140.7301025390625;
            trainSprite.mask = trainMask;


            app.trainMove = function(){

                if(trainSprite.x > -500){
                    trainSprite.x = trainSprite.x - (1 * 6);
                    trainSprite.alpha = 1;
                }
                if(trainSprite.y < 1200){
                    trainSprite.y = trainSprite.y + (0.57 * 6);
                }

                if(trainSprite.y > 1200 & trainSprite.x < -500){
                    trainSprite.alpha = 0;

                    setTimeout(function(){
                        //code goes here
                        trainSprite.x = 1866.4095458984375;
                        trainSprite.y = -140.7301025390625;
                    }, 1000); 
                }
            }

            app.ticker.add(app.trainMove);


            /// long road middle 

            const longRoadMiddle = new PIXI.Graphics();

            longRoadMiddle.beginFill(0xFF3300);
            longRoadMiddle.moveTo(-1360.8398742675781, 816.4187927246094);
            longRoadMiddle.lineTo(-1360.8398742675781, 816.4187927246094);
            longRoadMiddle.lineTo(-1344.4174041748047, 839.9462280273438);
            longRoadMiddle.lineTo(869.0733642578125, -451.9035120010376)
            longRoadMiddle.lineTo(876.2344970703125, -485.40118408203125);
            longRoadMiddle.lineTo(853.3160095214844, -498.83363342285156);
            longRoadMiddle.lineTo(820.48095703125, -501.2552490234375);
            longRoadMiddle.lineTo(789.2232055664062, -517.4708938598633);
            longRoadMiddle.lineTo(-1393.6335525512695, 752.6460266113281);
            longRoadMiddle.lineTo(-1384.745834350586, 774.7689208984375);
            longRoadMiddle.lineTo(-1382.6831512451172, 775.3613891601562);
            longRoadMiddle.lineTo(-1370.2870635986328, 792.6642303466797)
            longRoadMiddle.closePath();
            longRoadMiddle.endFill(); 
            longRoadMiddle.beginFill(0xDE3249);
            longRoadMiddle.drawEllipse(857.2140808105469, -512.9751434326172, 37, 40);
            longRoadMiddle.endFill();

            longRoadMiddle.alpha = 0.5;

            mapCont.addChild(longRoadMiddle);

            carOne.mask = longRoadMiddle;

            // carOne.x = 948.6671447753906;
            // carOne.y = -574.2612762451172
            
            // app.carOneMove = function(){
            //     if(carOne.x > -1479.6444091796875){
            //         carOne.x = carOne.x - (1 * 3);
            //         carOne.alpha = 1;
            //     }

            //     if(carOne.y < 865.155029296875){
            //         carOne.y = carOne.y + (0.57 * 3);
            //     }

            //     if(carOne.y > 865.155029296875 & carOne.x < -1479.6444091796875){
            //         // carOne.alpha = 0;

            //         setTimeout(function(){
            //             //code goes here
            //             carOne.x = 948.6671447753906;
            //             carOne.y = -534.2612762451172
            //         }, 1000); 
            //     }
            // }

            // app.ticker.add(app.carOneMove);


            // road short bottom

            const shortRoadBottom = new PIXI.Graphics();

            shortRoadBottom.beginFill(0xFF3300);
            shortRoadBottom.moveTo(-1376.8577270507812, 317.3817596435547);
            shortRoadBottom.lineTo(-1376.8577270507812, 317.3817596435547);
            shortRoadBottom.lineTo(-1394.302635192871, 359.9481964111328);
            shortRoadBottom.lineTo(-1045.843635559082, 579.9631500244141);
            shortRoadBottom.lineTo(-358.0672607421875, 961.3894653320312);
            shortRoadBottom.lineTo(-326.32061767578125, 933.7210693359375);
            shortRoadBottom.lineTo(-324.15240478515625, 922.892578125);
            shortRoadBottom.lineTo(-321.99981689453125, 916.7632141113281);
            shortRoadBottom.lineTo(-318.84393310546875, 908.7159423828125);
            shortRoadBottom.lineTo(-312.822265625, 897.5801391601562);
            shortRoadBottom.lineTo(-310.0225830078125, 893.5647277832031);
            shortRoadBottom.lineTo(-280.1514892578125, 868.9535369873047);
            shortRoadBottom.lineTo(-1272.419906616211, 273.8785095214844)
            shortRoadBottom.closePath();
            shortRoadBottom.endFill();

            shortRoadBottom.alpha = 0.7;

            shortRoadBottom.beginFill(0xDE3249);
            shortRoadBottom.drawEllipse(-1360, 296.82464599609375, 37, 40);
            shortRoadBottom.endFill();

            mapCont.addChild(shortRoadBottom);

            carTwo.mask = shortRoadBottom;

            
            // road short top

            const shortRoadTop = new PIXI.Graphics();

            shortRoadTop.beginFill(0xFF3300);
            shortRoadTop.moveTo(-95.26077270507812, -1005.0693359375);
            shortRoadTop.lineTo(-113.8577270507812, -955.3817596435547);
            shortRoadTop.lineTo(1362.7776641845703, -102.0702209472656);
            shortRoadTop.lineTo(1365.7776641845703, -110.0702209472656);
            shortRoadTop.lineTo(1375.7776641845703, -126.0702209472656);
            shortRoadTop.lineTo(1385.7776641845703, -135.0702209472656);
            shortRoadTop.lineTo(1395.7776641845703, -140.0702209472656);
            shortRoadTop.closePath();
            shortRoadTop.endFill();

            shortRoadTop.alpha = 0.7;

            shortRoadTop.beginFill(0xDE3249);
            shortRoadTop.drawEllipse(-77.86077270507812, -970.0693359375, 37, 40);
            shortRoadTop.endFill();

            mapCont.addChild(shortRoadTop);

            carThree.mask = shortRoadTop;


            // app.carTwoMove = function(){

            //     if(carTwo.x < -214.26077270507812){
            //         carTwo.x = carTwo.x + (1 * 3);
            //         carTwo.alpha = 1;
            //     }

            //     if(carTwo.y < 989.0693359375){
            //         carTwo.y = carTwo.y + (0.57 * 3);
            //     }
            //     // -214.26077270507812/989.0693359375
            //     if(carTwo.y > 989.0693359375 & carTwo.x > -214.26077270507812){
            //         // carOne.alpha = 0;

            //         setTimeout(function(){
            //             //code goes here
            //             carTwo.x = -1453.7776641845703;
            //             carTwo.y = 259.0702209472656
            //         }, 1000); 
            //     }
            // }

            // app.ticker.add(app.carTwoMove);
            // carTwo.x = -1453.7776641845703;
            // carTwo.y = 259.0702209472656

            function resize() {
                if (window.innerWidth / window.innerHeight >= ratio) {
                    var w = window.innerHeight * ratio;
                    var h = window.innerHeight;
                } else {
                    var w = window.innerWidth;
                    var h = window.innerWidth / ratio;
                }
                app.width = w + 'px';
                app.view.style.height = h + 'px';
            }


            window.addEventListener('resize', function(event) {
                // alert('hello');
                // resize()

                // app.renderer.width = window.view.innerWidth;
                // app.renderer.height = window.view.innerHeight;

                // const app = new PIXI.Application({transparent: true,  width: window.innerWidth, height: window.innerHeight });

            }, true);

            
            if(window.innerWidth < 845){
                HQExploreButton.alpha = 1;
                trainButton.alpha = 1;
                ServiceButton.alpha = 1;
                singleButton.alpha = 1;
            }

    
        }
    }
</script>