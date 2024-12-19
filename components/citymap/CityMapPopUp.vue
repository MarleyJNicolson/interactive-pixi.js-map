<template>
    <div :class="this.mapPrompt" class="city-map-pop-up">
        <div class="city-map-pop-up__container">
            <div :class="this.mapPrompt" class="city-map-pop-up__prompt">
                <img src="/images/mapPrompt.png" />
                <p>
                    Welcome to MWEK city, use your mouse to take a look around. Many of our buildings and scenery are interactive. Enjoy!
                </p>
                <div class="city-map-pop-up__prompt-close" v-on:click="closePrompt()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="15.6521" width="3.32033" height="22.1355" rx="1.66016" transform="rotate(45 15.6521 0)" fill="#07134D"/>
                    <rect y="2.34766" width="3.32033" height="22.1355" rx="1.66016" transform="rotate(-45 0 2.34766)" fill="#07134D"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import { Sprite } from 'three';
    // import * as PIXI from 'pixi.js'
    export default {
        name: 'CityMapPopUp',

        data(){ 
            return {
                clickPosition: '',
                mapPrompt: 'open'
            }
        },  
        methods: {
            closePrompt(){
                this.mapPrompt = 'closed';
            }
        },
        
    }
</script>