<template>
    <div>
        <h1>{{ blockData.title }}</h1>
        <img style="width: 200px" :src="this.$store.state.apiroute.url + blockData.hero_image.data.attributes.url" />
    </div>
</template>

<script>

export default {
    name: 'HeroSection',
    props: {
        blockData: Array,
    },
}
</script>


