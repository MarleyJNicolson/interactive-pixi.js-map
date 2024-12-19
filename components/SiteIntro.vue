<template>
    <div class="intro" :class="this.animationStep">
        <div class="step-one">
            <div class="intro__panel">
                <div class="intro__logo">
                    <div class="intro__logo-bg"></div>
                    <div class="intro__white"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="275" height="326" viewBox="0 0 275 326" fill="none">
                    <path d="M194.537 260.13L155.138 164.449L194.298 64.8965L233.458 160.577H274.619L209.266 0H179.591L137.429 103.251L95.0278 0H65.3534L0 160.577H40.9003L80.0601 64.8965L119.481 164.449L80.3211 260.13L41.1613 164.449H0L65.3534 325.027H95.0278L137.19 221.775L179.591 325.027H209.266L274.619 164.449H233.697L194.537 260.13Z" fill="white"/>
                    </svg>
                    
                    <div class="intro__logo-content">
                        <p class="loading">
                            <TypeText v-if="this.loadComplete" text="Complete" />
                            <TypeText v-if="this.loadInProcess && this.loadComplete != true" text="Loading..." />
                        </p>
                        <!-- <p> <TypeText v-if="this.loadInProcess" text="please fasten your seat belt and prepare for landing" /></p> -->
                    </div>
                    
                    <div class="loading-bar">
                        <v-progress-circular 
                            :rotate="270"
                            :size="500"
                            :width="4"
                            :value="this.loadValue"
                            color="#fff"
                        >
                        </v-progress-circular>
                    </div>

                </div>
                <div class="intro__side-panal">
                    <div class="intro__side-panel-content" :class="{ 'active' : textStep === 1  }">
                        <h2 v-if="firstTitle">
                            <TypeText text="Hello!" />
                        </h2>
                        <p v-if="this.firstText">
                            <TypeText text="Welcome to MWEK, let’s start off by asking you a quick question" />
                        </p>
                    </div>
                    <div class="intro__side-panel-content" :class="{ 'active' : textStep === 2  }">
                        <p v-if="this.textStep === 2">
                            <TypeText text="Are you a client or candidate?" />
                        </p>
                        <div class="buttons">
                            <OnqorButton v-on:btnClick="welcome()" text="Client" />
                            <OnqorButton text="Candidate" />
                        </div>
                    </div>
                    <div class="intro__side-panel-content" :class="{ 'active' : textStep === 3  }">
                        <p v-if="this.textStep === 3">
                            <TypeText text="Thank you for your response" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div alt="clouds" class="clouds">
            <div alt="single cloud"></div>
        </div>
    </div>
</template>

<script>
   

    export default {
        name: 'SiteIntro',
        data(){
            return {
                animationStep: '',
                firstTitle: false,
                firstText: false,
                textStep: 1,
                textStepClass: 1,
                loadValue: 0,
                loadComplete: false,
                loadInProcess: false,
                loaded: false 
            }
        },
        methods: {
            welcome(){
                this.textStep = 3

                const clouds = setTimeout(function () { 
                    this.animationStep = 'step-2' 
                }.bind(this), 500, clearTimeout(clouds))
                this.animationStep = 'step-2' 
                const loader = setTimeout(function () { 
                    this.loadInProcess = true
                    this.loader();
                }.bind(this), 1000, clearTimeout(loader))
            },

            async loader(){

                var counter = 0;
                // window.addEventListener('load', function () {
                //     loaded = true;
                // })

                document.onreadystatechange = () => { 
                    if (document.readyState == "complete") { 
                        // run code here
                        this.loaded = true;
                    } 
                }


                if(this.loaded){
                    var loadMe = setInterval(function () { 
                        counter = counter + 0.1
                        this.loadValue = counter
                        if(this.loadValue >= 100){
                            clearInterval(loadMe);
                          //  this.loadComplete = true;
                            this.clouds();
                        }

                    }.bind(this), 30)
                }else{
                    var loadMe = setInterval(function () { 
                        counter = counter + 0.9;
                        this.loadValue = counter
                        if(this.loadValue >= 100){
                            clearInterval(loadMe);
                            this.loadComplete = true;
                            this.clouds();
                        }

                    }.bind(this))
                }
                

            },
            clouds(){
             
                 const goClouds = setTimeout(function () { 
                    // this.clouds = 'step-clourd' 
                    this.animationStep = 'step-2 step-clouds'
                }.bind(this), 1000, clearTimeout(goClouds))
            }
        },

        mounted(){
            setTimeout(function () { 
                this.animationStep = 'step-1'
            }.bind(this), 50)
            setTimeout(function () { 
                this.textStep = 2
                this.welcome();
            }.bind(this), 300)
        }
    }
</script>
