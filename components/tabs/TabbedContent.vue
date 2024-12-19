<template>
    <div ref="tabbed" class="tabbed-content">
        <h2>{{ this.blockData.title }}</h2>
        <p class='tabbed-content__sub-title'>{{ this.blockData.subTitle }}</p>
        <div v-if="this.isDeskTop" class="tabbed-content__container">
            <div class="tabbed-content__button-row">
                <div class="tabbed-content__button" v-for="(item, index) in this.blockData.tabbedContent" :key="index" :class="{ active: activeTab[index], closed: activeTab[index] === false  }" >
                    <div class="button" :style="{backgroundColor: item.tabHexColour }" v-on:click="changeTab(index)">
                        <p :style="{color: item.tabHexColour }">{{ item.tabTitle }}</p>
                    </div>
                    
                        <div class="right" v-if="index < blockData.tabbedContent.length - 1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.0258789V15H14.1116C6.24088 14.5403 0 8.01191 0 0.0258789Z" fill="#FFF"/>
                            </svg>
                            <svg  xmlns="http://www.w3.org/2000/svg" style="opacity: 0.08;" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.0258789V15H14.1116C6.24088 14.5403 0 8.01191 0 0.0258789Z" :fill="item.tabHexColour"/>
                            </svg>
                        </div>
                        <div class="left" v-if="index >= 1"> 
                            <svg  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.0258789V15H14.1116C6.24088 14.5403 0 8.01191 0 0.0258789Z" fill="#FFF"/>
                            </svg>
                            <svg  xmlns="http://www.w3.org/2000/svg" style="opacity: 0.08;" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.0258789V15H14.1116C6.24088 14.5403 0 8.01191 0 0.0258789Z" :fill="item.tabHexColour"/>
                            </svg>
                        </div>
                  
                    <div class='tabbed-content__button-colour' :style="{backgroundColor: item.tabHexColour }"></div>
                </div>
            </div>
            <div class="tabbed-content__content-container">
                <div class="tabbed-content__content" v-for="(item, index) in this.blockData.tabbedContent" :class="{ active: activeTab[index], closed: activeTab[index] === false  }" :key="index">
                    <div class="tabbed-content__icons">

                        <div v-if="item.iconOne.data" class="tabbed-content__icons-items">
                            <img :src="$store.state.apiroute.url + item.iconOne.data.attributes.url" />
                            <p>{{ item.iconTextOne }}</p>
                        </div>

                        <div v-if="item.iconTwo.data" class="tabbed-content__icons-items">
                            <img :src="$store.state.apiroute.url + item.iconTwo.data.attributes.url" />
                            <p>{{ item.iconTextTwo }}</p>
                        </div>

                        <div v-if="item.iconThree.data" class="tabbed-content__icons-items">
                            <img :src="$store.state.apiroute.url + item.iconThree.data.attributes.url" />
                            <p>{{ item.iconTextThree }}</p>
                        </div>

                        <div v-if="item.iconFour.data" class="tabbed-content__icons-items">
                            <img :src="$store.state.apiroute.url + item.iconFour.data.attributes.url" />
                            <p>{{ item.iconTextFour }}</p>
                        </div>

                        <div v-if="item.iconFive.data" class="tabbed-content__icons-items">
                            <img :src="$store.state.apiroute.url + item.iconFive.data.attributes.url" />
                            <p>{{ item.iconTextFive }}</p>
                        </div>

                        <div v-if="item.iconSix.data" class="tabbed-content__icons-items">
                            <img :src="$store.state.apiroute.url + item.iconSix.data.attributes.url" />
                            <p>{{ item.iconTextSix }}</p>
                        </div>

                    </div>
                    <div class='tabbed-content__content-colour' :style="{backgroundColor: item.tabHexColour }"></div>
                </div>
            </div>
        </div>

        <div v-if="this.isDeskTop === false" class="tabbed-content-mobile">
            <VueSlickCarousel @beforeChange="currentSlide" :infinite="true" :speed="1000" :arrows="false" :dots="true" :centerMode="true" centerPadding="0px" :slidesToShow="1" :slidesToScroll="1" :focusOnSelect="true" ref="carousel">
                <div class="tabbed-content-mobile__content" v-for="(item, index) in this.blockData.tabbedContent" :key="index">
                    <div class="tabbed-content-mobile__content-container">
                        <h3 :style="{color: item.tabHexColour }">{{ item.tabTitle }}</h3>
                        <div class="tabbed-content-mobile__icons">
                            <div v-if="item.iconOne.data" class="tabbed-content-mobile__icons-items">
                                <img :src="$store.state.apiroute.url + item.iconOne.data.attributes.url" />
                                <p>{{ item.iconTextOne }}</p>
                            </div>

                            <div v-if="item.iconTwo.data" class="tabbed-content-mobile__icons-items">
                                <img :src="$store.state.apiroute.url + item.iconTwo.data.attributes.url" />
                                <p>{{ item.iconTextTwo }}</p>
                            </div>

                            <div v-if="item.iconThree.data" class="tabbed-content-mobile__icons-items">
                                <img :src="$store.state.apiroute.url + item.iconThree.data.attributes.url" />
                                <p>{{ item.iconTextThree }}</p>
                            </div>

                            <div v-if="item.iconFour.data" class="tabbed-content-mobile__icons-items">
                                <img :src="$store.state.apiroute.url + item.iconFour.data.attributes.url" />
                                <p>{{ item.iconTextFour }}</p>
                            </div>

                            <div v-if="item.iconFive.data" class="tabbed-content-mobile__icons-items">
                                <img :src="$store.state.apiroute.url + item.iconFive.data.attributes.url" />
                                <p>{{ item.iconTextFive }}</p>
                            </div>

                            <div v-if="item.iconSix.data" class="tabbed-content-mobile__icons-items">
                                <img :src="$store.state.apiroute.url + item.iconSix.data.attributes.url" />
                                <p>{{ item.iconTextSix }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </VueSlickCarousel>
        </div>

    </div>
</template>

<script>
    import gsap from "gsap"
    import ScrollTrigger from "gsap/ScrollTrigger";
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: 'TabbedContent',
        components: { VueSlickCarousel },
        props: {
            blockData: Object,
        },
        data(){
            return {
                activeTab: [],
                isDeskTop: true 
            }
        },
        beforeMount(){
            require('@/assets/scss/tabs/tabbed-content.scss');
        },
        methods: {
            changeTab(index){
                this.activeTab = [];
                for (let x = 0; x < this.blockData.tabbedContent.length; x++) {
                    if(x === index){
                        this.activeTab.push(true);
                    }else{
                        this.activeTab.push(false);
                    }            
                }
            }
        },
        mounted(){
            
            for (let index = 0; index < this.blockData.tabbedContent.length; index++) {
                if(index === 0){
                    this.activeTab.push(true);
                }else{
                    this.activeTab.push(false);
                }            
            }
            var w = window.innerWidth;
            if(w < 800){
                this.isDeskTop = false
            }

            gsap.set(this.$refs.tabbed, {opacity:0, y: 50})
            gsap.to(this.$refs.tabbed, {
                scrollTrigger: {
                    trigger: this.$refs.tabbed,
                    start: "top-=250px 50%",
                    end: "bottom-=-320px 50%",
                    scroller: "#page-modal",
                    onEnter: () => { gsap.to(this.$refs.tabbed, {opacity: 1, y: 0}) },
                    onLeave: () => { gsap.to(this.$refs.tabbed, {opacity: 0, y: -50}) },
                    onEnterBack: () => { gsap.to(this.$refs.tabbed, {opacity: 1, y: 0}) },
                }
            });

        }

    }
</script>
