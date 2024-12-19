<template>
    <div>
        <div class="footer">
            <div class="footer__container">
                <div v-for="(item, index) in this.footerColumns" :key="index" class="footer__coloumn">
                    <div v-if="item.logoImg" class="footer__image">
                        <img :src="item.logoImg" />
                        <p>
                            {{ item.tagline }}
                        </p>
                    </div>
                    <div v-if="item.id" class="footer__links" >
                        <h5>{{ item.title }}</h5>
                        <div class="footer__links-item" v-for="(links, linkIndex) in item.theFooterLInks" :key="linkIndex" >
                            <div v-if="links.page.data" v-on:click="footerClick(linkIndex)">
                                <NuxtLink  :to="'/' + links.page.data.attributes.slug">
                                    {{ links.linkText }}
                                </NuxtLink> 
                            </div>
                            <a v-else target="_blank" :href="links.customLink">
                            {{ links.linkText }}
                            </a> 

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <p class="footer__reg">The M-Wek Company ® registered as a Company in England. Company Number: 09863183, Vat Number 234592794, <a style="color:#fff" target="blank" href="https://www.google.com/maps/place/30+Great+Guildford+St,+London+SE1+0HS/@51.5045827,-0.0992521,17z/data=!3m1!4b1!4m5!3m4!1s0x487604a881ae5091:0x6c718ceb46fef809!8m2!3d51.5045827!4d-0.0970634" > Registered Address </a></p> -->
        <div class="footer__made-by">
            <p>Designed and built by <a href="https://onqor.com/" target="blank" ><p>ONQOR.</p></a></p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Footer',
    data(){
        return {
            footerColumns: [],
        }
    },
    methods: {
        async asyncData() {

            const footerImage = await fetch(
                this.$store.state.apiroute.url + '/api/footer-option?populate=*'
                // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
            ).then((res) => {
                // can set up 404 redirection here
                
            return res.json();
            }); 
            //

            this.footerColumns.push({ logoImg: this.$store.state.apiroute.url + footerImage.data.attributes.footerLogo.data.attributes.url, tagline: footerImage.data.attributes.footerTagLine })

            const footerLinks = await fetch(
                this.$store.state.apiroute.url + '/api/footer-option?[populate][theFooterColumns][populate][theFooterLInks][populate]=*'
                // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
            ).then((res) => {
                // can set up 404 redirection here
            return res.json();
            });   
            
            footerLinks.data.attributes.theFooterColumns.forEach(element => {
                // 
                this.footerColumns.push(element);
            });
            // 
        },
        footerClick(index){
            // alert('click dsdf');
            this.$emit('footerClick', index);
        }
    },  
    mounted(){
        this.asyncData();
        
    }
}
</script>
