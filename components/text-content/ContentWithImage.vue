<template>
    <div class="content-image">
        <div class="content-image__content">
            <vue-markdown :source="this.blockData.content" />
        </div>
        <div class="content-image__image">
            <img :src="this.$store.state.apiroute.url +  this.blockData.image.data.attributes.url" />
        </div>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown';
    export default {
        name: 'ContentWithImage',
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
            
        },
        beforeMount(){
            require('@/assets/scss/text-content/content-with-image.scss');
        }
    }
</script>
