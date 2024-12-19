<template>
    <div ref="service" class="service-page-links">
        <h2>{{ this.blockData.serviceSectionTitle }}</h2>
        <div class="service-page-links__row">
            <div class="service-page-links__links" v-for="(item, index) in this.blockData.theServiceLinkRepeater" :key='index'>
                <div class="service-page-links__circle">
                    <img :src="$store.state.apiroute.url + item.serviceIcon.data.attributes.url" />
                    <NuxtLink :to="'/services/' + item.serviceLink.data.attributes.slug" ></NuxtLink
    >
                </div>
                <p v-if="item.serviceTitle">{{ item.serviceTitle }}</p>
                <p v-if="item.serviceTitle === null">{{ item.serviceLink.data.attributes.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from "gsap"
    import ScrollTrigger from "gsap/ScrollTrigger";
    export default {
        name: 'ServicePageLinks',
        props: {
            blockData: Array,
        },
        mounted(){
            

                gsap.set(this.$refs.service, {opacity:0, y: 50})
                gsap.to(this.$refs.service, {
                    scrollTrigger: {
                        trigger: this.$refs.service,
                        start: "top-=200px 50%",
                        end: "bottom-=-200px 50%",
                        scroller: "#page-modal",
                        onEnter: () => { gsap.to(this.$refs.service, {opacity: 1, y: 0}) },
                        onLeave: () => { gsap.to(this.$refs.service, {opacity: 0, y: -50}) },
                        onEnterBack: () => { gsap.to(this.$refs.service, {opacity: 1, y: 0}) },
                    }
                });
        },
        beforeMount(){
            require('@/assets/scss/services/service-page-links.scss');
        }
    }
</script>