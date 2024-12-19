<template>
    <div class="blog-card" :class="this.isActive" ref="blogCard">
        <div class="blog-card__content">
            <NuxtLink :to='this.cardUrl'>
                <div class="blog-card__image" v-if="this.cardData.attributes" >
                    <!-- <img :src="this.$store.state.apiroute.url + this.cardData.attributes.featured_image.data.attributes.url" /> -->
                    <div class="blog-card__image-bg" :style="{ backgroundImage: `url(${this.$store.state.apiroute.url + this.cardData.attributes.featured_image.data.attributes.url})`}"></div>
                </div>
                <div v-if="this.cardData.attributes" class="blog-card__info">
                    <h4 v-if="this.load">{{ this.cardData.attributes.Title }}</h4>
                    <p v-if="this.cardData.attributes.content && this.load">{{ this.cardData.attributes.content.substring(0, 50) }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
    
</template>

<script>

import gsap from "gsap"

export default {
    name: 'BlogCard',
    props: {
        cardData: Object,
        countIndex: Number,
        activeCategory: String,
    },
    
    data(){
        return {
            formattedArray: [],
            isActive: '',
            cardUrl: '',
            load: false,
        }
    },
    mounted(){  
        // 
        if(this.countIndex < 3){
            this.isActive = 'active'
        }
        var thisContext = this;
        // var enterFunction = funciton({
        //     thisContext.load = true;
        // });

        function enterFunction(){
            thisContext.load = true;
        }

        setTimeout(function () { 
            let tl = gsap.to(this.$refs.blogCard,{
                scrollTrigger: {
                    trigger: this.$refs.blogCard,
                    start: "top bottom",
                    end: "bottom top",
                    scroller: '#page-modal',
                    scrub: true,
                    onEnter: enterFunction,
                    toggleClass: "active",
                    // addName: 'active',
                },
            });
        }.bind(this), 2000);


        

        

        if(this.cardData.attributes){
            if(this.activeCategory){
                this.cardUrl = "/blog/" + this.activeCategory + "/" + this.cardData.attributes.slug
            }else{
                this.cardUrl = "/blog/" + this.cardData.attributes.PrimaryCategory.category.data.attributes.slug + '/' + this.cardData.attributes.slug
            }
        }
        
    }
}
</script>


