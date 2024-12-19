<template>
    <div class="meet-the-team__cube-holder" 
    :class="{ active: onTheEdge , goingLeft: goingLeft, goingRight: goingRight }" >
        <div class="meet-the-team__cube" >
            <div class="cube" >
                <div class="face top"></div>
                <div class="face bottom"></div>
                <div class="face right"></div>
                <div class="face left"></div>
                    <img 
                    :src="$store.state.apiroute.url + teamInfo.teamAvatar.data.attributes.formats.thumbnail.url" />
                <div class="cube-bottom-shaddow"></div>
            </div>
            <div class="meet-the-team__info">  
                <span>
                    <p >{{ teamInfo.name }}</p>
                    <a v-if="teamInfo.linkedIn" target="_blank" :href="teamInfo.linkedIn"> <Icon icon="linkedIn" /> </a>
                </span>
                <p>{{ teamInfo.jobTitle }}</p>
            </div>
        </div>
           
    </div>
</template>

<script>
    export default {
        name: 'TeamCube',
        props: {
            teamInfo: Object,
            teamIndex: Number,
            activeCube: Number,
            direction: String,
            ticker: Number,
            totalTeam: Number
        },

        data(){
            return {
                scale: 0.5,
                y: -10,
                onTheEdge: false,
                goingLeft: false,
                goingRight: false,
                // hover animation for heads
                // width: 0,
                // height: 0,
                // mouseX: 0,
                // mouseY: 0,
                // mouseLeaveDelay: null
            }
        },

        mounted(){
            if(this.teamIndex === this.activeCube + 1 || this.teamIndex === this.activeCube - 1 ||
               this.activeCube === this.totalTeam - 1 && this.teamIndex === this.activeCube - this.activeCube ) {   
                this.onTheEdge = true;
            }

            if(this.teamIndex === this.activeCube + 1){
                this.goingRight = true
            }else{
                this.goingRight = false
            }

            if(this.teamIndex === this.activeCube - 1){
                this.goingLeft = true
            }else{
                this.goingLeft = false
            }

            if(this.activeCube === this.totalTeam - 1 && this.teamIndex === this.activeCube - this.activeCube) {
                this.goingRight = true
            }else{
                this.goingRight = false
            }

            // hover animation for heads
            // this.width = this.$refs.card.offsetWidth;
            // this.height = this.$refs.card.offsetHeight;
        },
        watch: {
            activeCube: function (val) {
 
                if(this.teamIndex === this.activeCube + 1 || 
                   this.teamIndex === this.activeCube - 1 ||
                   this.activeCube === this.totalTeam - 1 && this.teamIndex === 0 ||
                   this.activeCube === this.totalTeam - this.totalTeam && this.teamIndex === this.totalTeam - 1 ) {   
                     
                    this.onTheEdge = true;

                }else{
                    this.onTheEdge = false;
                }
                
                if(this.teamIndex === this.activeCube + 1 || 
                   this.activeCube === this.totalTeam - 1 && this.teamIndex === 0){
                    this.goingRight = true
                }else{
                    this.goingRight = false
                }

                if(this.teamIndex === this.activeCube - 1 ||
                   this.activeCube === this.totalTeam - this.totalTeam && this.teamIndex === this.totalTeam - 1){
                    this.goingLeft = true
                }else{
                    this.goingLeft = false
                }

                
                
                
                

                if(this.activeCube === 0 && this.teamIndex === this.totalTeam - 1){
                    this.onTheEdge = true;
                }
        
            },
        },
        // methods: {
        //     // hover animation for heads
        //     // handleMouseMove(e) {
        //     //     this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
        //     //     this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height/2;
        //     //     
        //     // },
        //     // handleMouseEnter() {
        //     //     clearTimeout(this.mouseLeaveDelay);
        //     //     
        //     // },
        //     // handleMouseLeave() {
        //     //     this.mouseLeaveDelay = setTimeout(()=>{
        //     //         this.mouseX = 0;
        //     //         this.mouseY = 0;
        //     //     }, 1000);
        //     //     
        //     // }
        // },
        // hover animation for heads
        // computed: {
        //     mousePX() {
        //         return this.mouseX / this.width;
        //     },
        //     mousePY() {
        //         return this.mouseY / this.height;
        //     },
        //     cardStyle() {
        //         const rX = this.mousePX * 50;
        //         const rY = this.mousePY * -50;
        //         return {
        //             transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
        //         };
        //     },
        //     cardBgTransform() {
        //         const tX = this.mousePX * -40;
        //         const tY = this.mousePY * -40;
        //         return {
        //             transform: `translateX(${tX}px) translateY(${tY}px)`
        //         }
        //     },
        //     cardBgImage() {
        //         return {
        //             backgroundImage: `url(${this.dataImage})`
        //         }
        //     }
        // },
    }
</script>