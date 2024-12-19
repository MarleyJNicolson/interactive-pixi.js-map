<template>
    <div ref="contentColumn">
        <h2 v-if="this.blockData.title" class="content-columns__title">{{ this.blockData.title }}</h2>
        <div class="content-columns__tag-line" :class="this.blockData.tagLineWidth" >
            <h3 v-if="this.blockData.contentTagLine" :class="this.blockData.tagLineWidth"> {{ this.blockData.contentTagLine }} </h3>
        </div>
        <div class="content-columns" >
            <div class="content-columns__block" 
                 v-for="(item, index) in this.blockData.content_and_columns" :key="index" :class="[{ contentImage: item.image.data }, item.columnWidth, item.centerImg ? 'center-img' : '', item.animation3D ? 'animation' : null]" >   
                <vue-markdown v-if="item.image.data === null" :source="item.content" />
                <img :class="[
                item.animate ? 'anim-spin' : '',
                item.imageWidth ? 'image-bleed' : '']"
                v-if="item.image.data && !item.animation3D" :src="$store.state.apiroute.url + item.image.data.attributes.url" :style="{width: item.imageWidth + '%'}" />
                <!-- {{ item.content }} -->
                <Earth v-if="item.animation3D"/>
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from "gsap"
    import ScrollTrigger from "gsap/ScrollTrigger";
    import VueMarkdown from 'vue-markdown';
    export default {
        name: 'ContentColumns',
        props: {
            blockData: Object,
        },
        methods: {

        },
        components: {
            VueMarkdown
        },
        data(){
            return {
                colours: []
            }
        },
        mounted(){
            // this.blockData.approachSectionsRepeater.forEach((element, index) => {
            //     if(index < this.blockData.approachSectionsRepeater.length - 1){
            //         this.colours.push(this.blockData.approachSectionsRepeater[index + 1].colour);
            //     }
            // });
            

            gsap.set(this.$refs.contentColumn, {opacity:0, y: 50})
            gsap.to(this.$refs.contentColumn, {
                scrollTrigger: {
                    trigger: this.$refs.contentColumn,
                    start: "top-=200px 50%",
                    end: "bottom-=-0px 50%",
                    scroller: "#page-modal",
                    onEnter: () => { gsap.to(this.$refs.contentColumn, {opacity: 1, y: 0}) },
                    onLeave: () => { gsap.to(this.$refs.contentColumn, {opacity: 0, y: -50}) },
                    onEnterBack: () => { gsap.to(this.$refs.contentColumn, {opacity: 1, y: 0}) },
                }
            });

        },
        beforeMount(){
            require('@/assets/scss/text-content/content-columns.scss');
        }
    }
</script>
