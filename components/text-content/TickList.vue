<template>
    <div ref="tick" class="tick-list">
        <div class="tick-list__item" v-for="(item, index) in this.blockData.listItems" :key="index">
            <Icon icon="checkMark" />
            <p>{{ item.TickListItemText }}</p>
        </div>
    </div>
</template>

<script>
    import gsap from "gsap"
    import ScrollTrigger from "gsap/ScrollTrigger";
    export default {
        name: 'TickList',
        data(){
            return {
                stateThing: ''
            }
        },
        props: {
            blockData: Array,
        },
        mounted(){
            
            
            gsap.set(this.$refs.tick, {opacity:0, y: 50})
            gsap.to(this.$refs.tick, {
                scrollTrigger: {
                    trigger: this.$refs.tick,
                    start: "top-=280px 50%",
                    end: "bottom-=-340px 50%",
                    scroller: "#page-modal",
                    onEnter: () => { gsap.to(this.$refs.tick, {opacity: 1, y: 0}) },
                    onLeave: () => { gsap.to(this.$refs.tick, {opacity: 0, y: -50}) },
                    onEnterBack: () => { gsap.to(this.$refs.tick, {opacity: 1, y: 0}) },
                }
            });
        },
        beforeMount(){
            require('@/assets/scss/text-content/tick-list.scss');
        }
    }
</script>