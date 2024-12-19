<template>
    <div class="meet-the-team">
        <div class="meet-the-team__container">
            <h2>MEET THE TEAM</h2>
            <VueSlickCarousel @afterChange="changeSlide" @beforeChange="currentSlide" :waitForAnimate="true" :infinite="true" :speed="1000" :initialSlide="this.blockData.TeamCubesSlider.length / 2" :arrows="false" :dots="this.doWeHaveDots" :centerMode="true" centerPadding="0px" :slidesToShow="this.slideNumber" :slidesToScroll="1" :focusOnSelect="true" ref="carousel">
                <div v-for="(item, index) in this.blockData.TeamCubesSlider" :key="index" class="meet-the-team__slide">
                    <TeamCube :teamInfo="item" :activeCube="currentIndex" :teamIndex="index" :totalTeam="blockData.TeamCubesSlider.length"/>
                </div>
            </VueSlickCarousel>
            <div class="meet-the-team__buttons">
                <div class="button button--prev" v-on:click="prevItem()">
                    <Icon icon="chevronLeft"/>
                </div>
                <div class="button" v-on:click="nextItem()">
                    <Icon icon="chevronRight"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: 'MeetTheTeam',

        props: {
            blockData: Object,
        },
        components: { VueSlickCarousel },
        data(){
            return {
                currentIndex: this.blockData.TeamCubesSlider.length / 2,
                doWeHaveDots: false,
                slideNumber: 5,
                canClick: true
            }
        },
        methods: {
            nextItem(){
                // if(this.currentIndex < this.blockData.TeamCubesSlider.length - 1){
                    
                //     if(this.canClick == true ){
                //         this.$refs.carousel.next();
                //     }
                //     this.canClick = false;
                // }
                // var thisContext = this;
                // setTimeout(function(){
                //     //code goes here
                //     thisContext.canClick = true;
                // }, 2000);//Time before execution
                this.$refs.carousel.next();
            },
            prevItem(){
                // if(this.currentIndex > 0 ){
                //     if(this.canClick == true ){
                //         this.$refs.carousel.prev();
                //     }
                //     this.canClick = false;
                // }

                // var thisContext = this;
                
                // setTimeout(function(){
                //     //code goes here
                //     thisContext.canClick = true;
                // }, 2000); //Time before execution
                this.$refs.carousel.prev();
            },
            currentSlide(slideIndex, nextIndex){
                
                
                this.currentIndex = nextIndex;
                //     if (slideIndex !== nextIndex) {
                //         document.querySelectorAll('.slick-current + .slick-cloned').forEach((next) => {
                //             setTimeout(() => next.classList.add('slick-center', 'slick-current'));
                //         });
                //     }
                let nextIndex2 = slideIndex + 1; // assume moving right
                if(slideIndex-1 == nextIndex || (slideIndex == 0 && nextIndex == (this.blockData.TeamCubesSlider.length - 1) && slideIndex < nextIndex)) {
                    nextIndex2 = slideIndex - 1; // nope, moving left
                }
                
                document.querySelectorAll(`[data-index="${nextIndex2}"]`).forEach((data) => {
                    setTimeout(() => data.classList.add('slick-target'))
                });
            },
            changeSlide() {
                document.getElementsByClassName('slick-slide').forEach((data) => {
                   setTimeout(() => data.classList.remove('slick-target'))
                });
            }

        },
        beforeMount(){
            require('@/assets/scss/explore/meet-the-team.scss');
        },
        mounted(){
            
            this.$refs.carousel.next();
            if(window.innerWidth < 900){
                this.slideNumber = 3;
                this.doWeHaveDots = true;
              
                setTimeout(function(){
                    this.prevItem();
                    this.nextItem();
                }.bind(this), 1000);
            }
        }
    }
</script>
