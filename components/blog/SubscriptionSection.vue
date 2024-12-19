<template>
    <div ref="subscription" class="subscription">
        <p class="subscription__sub">Keep up to date with what is going on in Crypto, FinTech and Emerging Technology by subscribing to The MWek Blog below.</p>
        <div class="subscription__row">
            <!-- <OnqorInput inputPlaceHolder="Email"/>  <OnqorButton text="Subscribe" /> -->
                        <!-- Begin Mailchimp Signup Form -->
            <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
            <div id="mc_embed_signup">
                <form action="https://mwek.us7.list-manage.com/subscribe/post?u=3e8952cdbfd254ece0219f7f1&amp;id=3ba2eb2185&amp;f_id=00b0f8e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <!-- <div id="mc_embed_signup_scroll"></div> -->
                    <!-- <div class="indicates-required"><span class="asterisk">*</span> indicates required</div> -->
                    <div class="mc-field-group">
                        <!-- <label for="mce-EMAIL">Email Address  <span class="asterisk"></span></label> -->
                        <input type="email" value="" placeholder="Email" name="EMAIL" class="required email" id="mce-EMAIL" required>
                        <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                    </div>

                    <div id="mce-responses" class="clear foot">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_3e8952cdbfd254ece0219f7f1_3ba2eb2185" tabindex="-1" value=""></div>
                    
                    <div class="optionalParent">
                        <div class="clear foot">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                            <!-- <p class="brandingLogo"><a href="http://eepurl.com/ifahbH" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p> -->
                        </div>
                    </div>
                 
                </form>
            </div>
            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='MMERGE7';ftypes[7]='text';fnames[8]='MMERGE8';ftypes[8]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
        </div>
    </div>
</template>

<script>
    import gsap from "gsap"
    import ScrollTrigger from "gsap/ScrollTrigger";
    export default {
        name: 'SubscriptionSection',
        
        data(){
            return {

            }
        },
        mounted() {
            // const pageModal = document.getElementById("page-modal");

            // ScrollTrigger.create({
            //     trigger: this.$refs.subscription,
            //     scroller: "#page-modal",
            //     start: '4200px center',
            //     end: '4200px center',
            //     onEnter: () => {
            //         document.body.style.overflow = "initial";
            //         document.documentElement.style.overflow = "initial";
            //     },
            //     onLeaveBack: () => {
            //             pageModal.classList.add('stop-scrolling');
            //             window.scrollTo({top: 0, behavior: 'smooth'});
            //             pageModal.scrollTo({top: 0, behavior: 'smooth'});
            //             setTimeout(function () {
            //                 pageModal.classList.remove('stop-scrolling');
            //             }, 1000);
            //             this.$store.commit('apiroute/bottomScroll', false);
            //             document.body.style.overflow = "hidden";
            //             document.documentElement.style.overflow = "hidden";
            //     },
            // });
        },
        beforeMount(){
            require('@/assets/scss/global/subscription-section.scss');
        }
  
    }
</script>
