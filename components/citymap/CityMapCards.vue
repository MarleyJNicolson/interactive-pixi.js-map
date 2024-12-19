<template>
    <div class="city-map-cards" :style="{left: this.cardData.positionLeft + '%', top: this.cardData.positionTop + '%'}">
        <div class='city-map-cards__float'>
            <div class="city-map-cards__background" :style="{ backgroundColor: '#' + this.cardData.backgroundColour, width: this.cardData.buttonImage.data.attributes.formats.thumbnail.width + 'px', height: this.cardData.buttonImage.data.attributes.formats.thumbnail.height + 'px' }" ></div>
            <img class="city-map-cards__image" :src="this.$store.state.apiroute.url + this.cardData.buttonImage.data.attributes.formats.thumbnail.url" />
            <div class="city-map-cards__dot-border" :style="{ width: this.cardData.buttonImage.data.attributes.formats.thumbnail.width + 'px', height: this.cardData.buttonImage.data.attributes.formats.thumbnail.height + 'px' }" ></div>
        </div>
            <div class="city-map-cards__drop-shadow" :style="{ width: this.cardData.buttonImage.data.attributes.formats.thumbnail.width + 'px', top: this.cardData.buttonImage.data.attributes.formats.thumbnail.height + 'px' }"  ></div>

    </div>
</template>

<script>

export default {
    name: 'BlockBuilder',
    props: {
        ID: Number,
        blockComponent: Object,
        cardData: Array
    },
    data(){
        return {

        }
    },
    methods: {

    },  
    mounted(){
        
    }
}
</script>


