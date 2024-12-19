<template>
    <div ref="contact" class="contact-footer">
        <h2> {{ this.contactItems.data.attributes.ContactInfo.title }} </h2>
        <!-- <p> {{ this.contactItems.data.attributes.ContactInfo.content }} </p> -->
        <vue-markdown> {{ this.contactItems.data.attributes.ContactInfo.content }} </vue-markdown>
        <div class="contact-footer__container">
            <!-- <div class='contact-footer__form'>
                <OnqorInput v-modal="name" @send="getValue($event, 'name')" class="input-spacing" inputPlaceHolder="Name" />
                <OnqorInput v-modal="email" @send="getValue($event, 'email')" class="input-spacing" inputPlaceHolder="Email" />
                <OnqorInput v-modal="tel"  @send="getValue($event, 'tel')" class="input-spacing" inputPlaceHolder="Contact Number" />
                <div class="contact-footer__form-row input-spacing">
                    <DropDown placeHolder="Subject" v-modal="subject" @dropdownEvent="getValue($event, 'subject')" :options="this.cats" />
                    <button @click="go()">Send</button>
                </div>
                <DropDown :options="this.cats" />
            </div> -->
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
    <form action="https://mwek.us7.list-manage.com/subscribe/post?u=3e8952cdbfd254ece0219f7f1&amp;id=3ba2eb2185&amp;f_id=00b0f8e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<input placeholder="Email" type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
	<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
</div>
<div class="mc-field-group">
	<input placeholder="Name" type="text" value="" name="FNAME" class="" id="mce-FNAME">
	<span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
</div>
<div class="mc-field-group">
	<input placeholder="Number" type="text" name="PHONE" class="" value="" id="mce-PHONE">
	<span id="mce-PHONE-HELPERTEXT" class="helper_text"></span>
	
</div>
<div class="mc-field-group mail-chimp__select">
    <input name="MMERGE3" class="" id="mce-MMERGE3">
    <DropDown @dropdownEvent="selectedCat($event)" :options="cats" />
	<!-- <select name="MMERGE3" class="" id="mce-MMERGE3">
        <option disabled hidden>Subject</option>
        <option value="Candidate">Candidate</option>
        <option value="Client">Client</option>
        <option value="Work With Us">Work With Us</option>
	</select>
    <span class="chevron"></span> -->
	<span id="mce-MMERGE3-HELPERTEXT" class="helper_text"></span>
</div>
	<!-- <div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    real people should not fill this in and expect good things - do not remove this or risk form bot signups -->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_3e8952cdbfd254ece0219f7f1_3ba2eb2185" tabindex="-1" value=""></div>
            <!-- <div class="clear foot"> -->
                <input type="submit" value="Send" name="subscribe" id="mc-embedded-subscribe" class="button">
                <p class="brandingLogo"><a href="http://eepurl.com/ifahbH" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
            <!-- </div> -->
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='MMERGE7';ftypes[7]='text';fnames[8]='MMERGE8';ftypes[8]='text';fnames[3]='MMERGE3';ftypes[3]='dropdown';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->

            <div class="contact-footer__social">
                <h4>Alternitively contact us through:</h4>
                <div class="contact-footer__social-container">

                    <!-- number -->
                    <div class='social-item'>
                        <!-- :href="'tel:' + this.contactItems.data.attributes.ContactInfo.phoneNumber" -->
                        <a >
                        <div class="social-item__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                            <path d="M23.9998 26H23.8298C4.17976 24.87 1.38976 8.29 0.999759 3.23C0.968334 2.83658 1.01485 2.44082 1.13663 2.06541C1.25842 1.69 1.45309 1.3423 1.70948 1.04225C1.96587 0.7422 2.27894 0.495688 2.63077 0.316839C2.98259 0.137991 3.36625 0.0303218 3.75976 9.37591e-07H9.26976C9.67032 -0.000386826 10.0618 0.119511 10.3934 0.344163C10.725 0.568815 10.9816 0.88787 11.1298 1.26L12.6498 5C12.7961 5.36355 12.8324 5.76208 12.7542 6.14609C12.676 6.5301 12.4867 6.88267 12.2098 7.16L10.0798 9.31C10.4125 11.2007 11.3179 12.9437 12.6737 14.303C14.0294 15.6622 15.7699 16.5723 17.6598 16.91L19.8298 14.76C20.1113 14.4862 20.4671 14.3013 20.853 14.2283C21.2389 14.1554 21.6378 14.1977 21.9998 14.35L25.7698 15.86C26.1363 16.0129 26.449 16.2714 26.668 16.6027C26.8871 16.9339 27.0026 17.3229 26.9998 17.72V23C26.9998 23.7956 26.6837 24.5587 26.1211 25.1213C25.5585 25.6839 24.7954 26 23.9998 26ZM3.99976 2C3.73454 2 3.48019 2.10536 3.29265 2.29289C3.10512 2.48043 2.99976 2.73478 2.99976 3V3.08C3.45976 9 6.40976 23 23.9398 24C24.0711 24.0081 24.2028 23.9902 24.3273 23.9473C24.4517 23.9045 24.5665 23.8374 24.6649 23.7501C24.7634 23.6628 24.8437 23.5568 24.9011 23.4384C24.9586 23.32 24.9921 23.1914 24.9998 23.06V17.72L21.2298 16.21L18.3598 19.06L17.8798 19C9.17976 17.91 7.99976 9.21 7.99976 9.12L7.93976 8.64L10.7798 5.77L9.27976 2H3.99976Z" fill="url(#paint0_linear_592_1593)"/>
                            <defs>
                            <linearGradient id="paint0_linear_592_1593" x1="0.990234" y1="26" x2="32.1115" y2="16.1494" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00CCD6"/>
                            <stop offset="1" stop-color="#9E00FC"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        <p>{{ this.contactItems.data.attributes.ContactInfo.phoneNumber }}</p>
                        </a>
                    </div>

                    <!-- email -->
                    <div class='social-item'>
                        <a :href="'mailto:' + this.contactItems.data.attributes.ContactInfo.email">
                        <div class="social-item__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
                            <path d="M30 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H30C30.5304 24 31.0391 23.7893 31.4142 23.4142C31.7893 23.0391 32 22.5304 32 22V2C32 1.46957 31.7893 0.960859 31.4142 0.585786C31.0391 0.210714 30.5304 0 30 0ZM28.46 22H3.66L10.66 14.76L9.22 13.37L2 20.84V3.52L14.43 15.89C14.8047 16.2625 15.3116 16.4716 15.84 16.4716C16.3684 16.4716 16.8753 16.2625 17.25 15.89L30 3.21V20.71L22.64 13.35L21.23 14.76L28.46 22ZM3.31 2H28.38L15.84 14.47L3.31 2Z" fill="url(#paint0_linear_592_1598)"/>
                            <defs>
                            <linearGradient id="paint0_linear_592_1598" x1="0" y1="24" x2="35.7604" y2="8.91357" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00CCD6"/>
                            <stop offset="1" stop-color="#9E00FC"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        <p>{{ this.contactItems.data.attributes.ContactInfo.email }}</p>
                        </a>
                    </div>

                    <!-- linkedin -->
                        <div class='social-item'>
                            <a target="_blank" :href="this.contactItems.data.attributes.ContactInfo.Linkedin"> 
                            <div class="social-item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 2.5475C0.25 1.93817 0.492058 1.35379 0.922923 0.922925C1.35379 0.49206 1.93817 0.250003 2.5475 0.250003H25.45C25.752 0.24951 26.0511 0.308582 26.3302 0.423836C26.6093 0.539091 26.8629 0.708265 27.0766 0.921673C27.2902 1.13508 27.4597 1.38853 27.5752 1.66752C27.6908 1.9465 27.7502 2.24553 27.75 2.5475V25.45C27.7503 25.752 27.6911 26.0512 27.5757 26.3303C27.4603 26.6094 27.291 26.863 27.0775 27.0766C26.864 27.2903 26.6105 27.4597 26.3314 27.5752C26.0524 27.6908 25.7533 27.7502 25.4513 27.75H2.5475C2.24568 27.75 1.94682 27.6905 1.668 27.575C1.38917 27.4595 1.13584 27.2901 0.92248 27.0766C0.709121 26.8632 0.539915 26.6097 0.424528 26.3309C0.309142 26.052 0.249836 25.7531 0.25 25.4513V2.5475ZM11.135 10.735H14.8588V12.605C15.3963 11.53 16.7713 10.5625 18.8375 10.5625C22.7988 10.5625 23.7375 12.7038 23.7375 16.6325V23.91H19.7288V17.5275C19.7288 15.29 19.1913 14.0275 17.8263 14.0275C15.9325 14.0275 15.145 15.3888 15.145 17.5275V23.91H11.135V10.735ZM4.26 23.7388H8.27V10.5625H4.26V23.7375V23.7388ZM8.84375 6.265C8.85131 6.60834 8.79022 6.94974 8.66405 7.26915C8.53788 7.58856 8.34919 7.87955 8.10904 8.12504C7.86889 8.37054 7.58212 8.56559 7.26557 8.69876C6.94902 8.83193 6.60905 8.90053 6.26563 8.90053C5.9222 8.90053 5.58224 8.83193 5.26568 8.69876C4.94913 8.56559 4.66236 8.37054 4.42221 8.12504C4.18206 7.87955 3.99337 7.58856 3.8672 7.26915C3.74104 6.94974 3.67994 6.60834 3.6875 6.265C3.70234 5.59107 3.98048 4.94974 4.46236 4.47836C4.94423 4.00698 5.59153 3.74303 6.26563 3.74303C6.93972 3.74303 7.58702 4.00698 8.06889 4.47836C8.55077 4.94974 8.82891 5.59107 8.84375 6.265Z" fill="url(#paint0_linear_592_1580)"/>
                                <defs>
                                <linearGradient id="paint0_linear_592_1580" x1="0.25" y1="27.75" x2="33.1568" y2="17.3381" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00CCD6"/>
                                <stop offset="1" stop-color="#9E00FC"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </div>
                            <p>Linkedin</p>
                            </a>
                        </div>

                    <!-- instagram -->
                    <div class='social-item'>
                            <a target="_blank" :href="this.contactItems.data.attributes.ContactInfo.Instagram"> 
 
                        <div class="social-item__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 0C11.651 0 11.109 0.021 9.40695 0.093C7.69795 0.177 6.54195 0.442 5.52195 0.838C4.45442 1.24102 3.48762 1.87202 2.68895 2.687C1.8717 3.4838 1.24035 4.45113 0.839953 5.52C0.443953 6.54 0.178953 7.696 0.0949531 9.405C0.0179531 11.108 0.00195312 11.649 0.00195312 15.998C0.00195312 20.347 0.0229531 20.889 0.0949531 22.591C0.178953 24.295 0.443953 25.456 0.839953 26.476C1.24297 27.5435 1.87397 28.5103 2.68895 29.309C3.48575 30.1263 4.45309 30.7576 5.52195 31.158C6.54195 31.549 7.70295 31.819 9.40695 31.903C11.11 31.98 11.651 31.996 16 31.996C20.349 31.996 20.891 31.975 22.593 31.903C24.297 31.819 25.458 31.548 26.478 31.158C27.5455 30.755 28.5123 30.124 29.311 29.309C30.1293 28.5131 30.7608 27.5455 31.16 26.476C31.551 25.456 31.821 24.295 31.905 22.591C31.982 20.888 31.998 20.347 31.998 15.998C31.998 11.649 31.977 11.107 31.905 9.405C31.821 7.701 31.55 6.534 31.16 5.52C30.7569 4.45246 30.1259 3.48566 29.311 2.687C28.515 1.86869 27.5474 1.23718 26.478 0.838C25.458 0.442 24.297 0.177 22.593 0.093C20.89 0.016 20.349 0 16 0ZM16 2.88C20.271 2.88 20.781 2.901 22.469 2.973C24.026 3.046 24.874 3.306 25.437 3.526C26.133 3.78292 26.7629 4.19185 27.281 4.723C27.8112 5.23883 28.2186 5.86735 28.473 6.562C28.693 7.125 28.953 7.973 29.026 9.53C29.098 11.218 29.119 11.729 29.119 15.999C29.119 20.269 29.098 20.78 29.02 22.468C28.936 24.025 28.676 24.873 28.457 25.436C28.154 26.187 27.816 26.712 27.258 27.28C26.7382 27.8078 26.1086 28.2148 25.414 28.472C24.858 28.692 23.998 28.952 22.435 29.025C20.738 29.097 20.238 29.118 15.956 29.118C11.674 29.118 11.175 29.097 9.47595 29.019C7.91895 28.935 7.05995 28.675 6.49695 28.456C5.73695 28.153 5.21595 27.815 4.65795 27.257C4.09495 26.694 3.73695 26.158 3.46095 25.413C3.23695 24.857 2.98095 23.997 2.89795 22.434C2.84095 20.757 2.81395 20.237 2.81395 15.975C2.81395 11.715 2.84095 11.194 2.89795 9.496C2.98095 7.933 3.23695 7.075 3.46095 6.517C3.73695 5.756 4.09595 5.236 4.65795 4.673C5.21495 4.116 5.73695 3.756 6.49695 3.474C7.05995 3.255 7.89795 2.995 9.46095 2.917C11.158 2.856 11.658 2.834 15.934 2.834L16 2.88ZM16 7.787C14.9213 7.78661 13.8531 7.99877 12.8565 8.41137C11.8599 8.82398 10.9543 9.42893 10.1916 10.1917C9.42888 10.9544 8.82393 11.8599 8.41133 12.8566C7.99872 13.8532 7.78656 14.9213 7.78695 16C7.78656 17.0787 7.99872 18.1468 8.41133 19.1434C8.82393 20.1401 9.42888 21.0456 10.1916 21.8083C10.9543 22.5711 11.8599 23.176 12.8565 23.5886C13.8531 24.0012 14.9213 24.2134 16 24.213C17.0786 24.2134 18.1468 24.0012 19.1434 23.5886C20.14 23.176 21.0456 22.5711 21.8083 21.8083C22.571 21.0456 23.176 20.1401 23.5886 19.1434C24.0012 18.1468 24.2133 17.0787 24.213 16C24.2133 14.9213 24.0012 13.8532 23.5886 12.8566C23.176 11.8599 22.571 10.9544 21.8083 10.1917C21.0456 9.42893 20.14 8.82398 19.1434 8.41137C18.1468 7.99877 17.0786 7.78661 16 7.787ZM16 21.333C13.052 21.333 10.667 18.948 10.667 16C10.667 13.052 13.052 10.667 16 10.667C18.948 10.667 21.333 13.052 21.333 16C21.333 18.948 18.948 21.333 16 21.333ZM26.464 7.459C26.4634 7.96866 26.2606 8.45727 25.9 8.81747C25.5394 9.17767 25.0506 9.38 24.541 9.38C24.2889 9.38 24.0394 9.33036 23.8066 9.23392C23.5738 9.13749 23.3622 8.99613 23.184 8.81794C23.0058 8.63974 22.8645 8.42819 22.768 8.19537C22.6716 7.96255 22.622 7.71301 22.622 7.461C22.622 7.20899 22.6716 6.95945 22.768 6.72663C22.8645 6.49381 23.0058 6.28226 23.184 6.10406C23.3622 5.92587 23.5738 5.78451 23.8066 5.68808C24.0394 5.59164 24.2889 5.542 24.541 5.542C25.598 5.542 26.464 6.402 26.464 7.459Z" fill="url(#paint0_linear_592_1586)"/>
                            <defs>
                            <linearGradient id="paint0_linear_592_1586" x1="0.00195312" y1="31.996" x2="38.2887" y2="19.8818" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00CCD6"/>
                            <stop offset="1" stop-color="#9E00FC"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        <p>Instagram</p>
                        </a>
                    </div>

                    <div class='social-item'>
                            <a target="_blank" :href="this.contactItems.data.attributes.ContactInfo.Facebook"> 
 
                        <div class="social-item__icon">
                            <svg style="width: 35px;"  id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><defs><style>.cls-1{fill:url(#linear-gradient);}</style><linearGradient id="linear-gradient" x1="5.54" y1="23.32" x2="25.71" y2="11.59" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00ccd6"/><stop offset="1" stop-color="#b800ff"/></linearGradient></defs><path class="cls-1" d="m23.15,17.92l.85-5.56h-5.33v-3.61c0-1.52.75-3,3.13-3h2.43V1.02s-2.2-.38-4.31-.38c-4.39,0-7.26,2.66-7.26,7.48v4.24h-4.88v5.56h4.88v13.44h6.01v-13.44h4.48Z"/></svg>
                        </div>
                        <p>Facebook</p>
                        </a>
                    </div>

                    <div class='social-item'>
                            <a target="_blank" :href="this.contactItems.data.attributes.ContactInfo.Twitter"> 
 
                        <div class="social-item__icon">
                            <svg style="width: 35px;" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><defs><style>.cls-1{fill:url(#linear-gradient);}</style><linearGradient id="linear-gradient" x1="-.89" y1="24.44" x2="28.79" y2="2.47" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00ccd6"/><stop offset="1" stop-color="#b800ff"/></linearGradient></defs><path class="cls-1" d="m31.62,6.15c-1,.45-2.11.73-3.18.91.51-.09,1.26-1.01,1.57-1.39.46-.57.84-1.22,1.06-1.93.03-.05.05-.12,0-.17-.07-.03-.11-.01-.17.01-1.2.65-2.45,1.11-3.78,1.44-.11.03-.19,0-.26-.07-.11-.12-.21-.24-.33-.34-.56-.47-1.15-.85-1.83-1.12-.89-.36-1.85-.51-2.81-.45-.93.06-1.84.32-2.66.75-.82.43-1.56,1.03-2.15,1.75-.61.75-1.05,1.63-1.28,2.57-.22.9-.2,1.8-.07,2.71.02.15,0,.17-.13.15-5.19-.77-9.48-2.63-12.97-6.6-.15-.17-.23-.17-.36.01-1.53,2.29-.79,5.97,1.12,7.77.25.24.52.48.8.7-.1.02-1.37-.12-2.5-.7-.15-.1-.23-.04-.24.13-.01.25,0,.47.04.74.29,2.32,1.9,4.47,4.1,5.3.26.11.55.21.83.25-.5.11-1.02.19-2.46.08-.18-.03-.25.06-.18.23,1.08,2.94,3.41,3.82,5.16,4.32.23.04.47.04.7.1-.01.02-.03.02-.04.04-.58.88-2.59,1.54-3.52,1.87-1.7.59-3.55.86-5.35.69-.29-.04-.35-.04-.43,0-.08.05-.01.12.08.19.36.24.74.45,1.11.66,1.14.61,2.33,1.09,3.58,1.43,6.43,1.78,13.67.47,18.5-4.32,3.79-3.77,5.12-8.96,5.12-14.16,0-.2.24-.32.38-.42.99-.74,1.78-1.63,2.52-2.62.16-.22.17-.42.17-.5v-.03c0-.08,0-.06-.13,0Z"/></svg>

                        </div>
                        <p>Twitter</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from "gsap"
    import ScrollTrigger from "gsap/ScrollTrigger";
    import VueMarkdown from 'vue-markdown'
    export default {
        name: 'ContactFooter',
        components: {
            VueMarkdown
        },
        props: {
            contactItems: Array,
            value: "hello"
        },
        data(){
            return {
                contactItems: '',
                cats: [  
                    { option: 'Candidate' , value: 'candidate' },
                    { option: 'Client' , value: 'client' },
                    { option: 'Work with Us' , value: 'work-with-us' }
                ],
                formData: { name: 'def', email: 'def2', tel: '09', subject: 'def3', type: 'def3' }
            }
        },
        mounted(){
            
            const pageModal = document.getElementById("page-modal");
            
            gsap.set(this.$refs.contact, {opacity:0, y: 50})
            gsap.to(this.$refs.contact, {
                scrollTrigger: {
                    trigger: this.$refs.contact,
                    start: "top-=200px 50%",
                    scroller: "#page-modal",
                    onEnter: () => { gsap.to(this.$refs.contact, {opacity: 1, y: 0}) },
                    onLeave: () => { gsap.to(this.$refs.contact, {opacity: 0, y: -50}) },
                    onEnterBack: () => { gsap.to(this.$refs.contact, {opacity: 1, y: 0}) },
                }
            });
            
            // window.onscroll = function() {
            //     if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
            //         this.$store.commit('apiroute/bottomScroll', true)
            //     }
            // };

            // ScrollTrigger.create({
            //     trigger: this.$refs.contact,
            //     scroller: "#page-modal",
            //     start: '320px center',
            //     end: 'top-=50px 200px',
            //     onEnter: () => {
            //         document.body.style.overflow = "initial";
            //         document.documentElement.style.overflow = "initial";
            //     },
            //     onLeaveBack: () => {
            //             if (this.$store.state.apiroute.bottomScroll) {
            //                 pageModal.classList.add('stop-scrolling');
            //                 window.scrollTo({top: 0, behavior: 'smooth'});
            //                 pageModal.scrollTo({top: 0, behavior: 'smooth'});
            //                 setTimeout(function () {
            //                     pageModal.classList.remove('stop-scrolling');
            //                 }, 1000);
            //                 this.$store.commit('apiroute/bottomScroll', false);
            //                 document.body.style.overflow = "hidden";
            //                 document.documentElement.style.overflow = "hidden";
            //             }
            //     },
            // });
        },
        methods: {
            go() {
                
                this.$mail.send({
                    from: this.formData.email,
                    subject: this.formData.subject,
                    text: ' email: ' + this.formData.email + '  name: ' + this.formData.name + ' tel: ' +  this.formData.tel 
                })
            },
            selectedCat(cat) {
                document.getElementById("mce-MMERGE3").value = cat;
            },
            getValue(event, type){
                
                switch(type) {
                    case 'name':
                            this.formData.name = event
                        break;
                    case 'email':
                            this.formData.email = event
                        break;
                    case 'tel':
                            this.formData.tel = event
                        break;
                    case 'subject':
                            this.formData.subject = event
                        break;
                    default:
                    // code block
                }
            }
        }
    }
</script>
