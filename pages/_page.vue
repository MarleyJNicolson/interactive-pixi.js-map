<template>
  <div class="page-content" v-if="this.renderPage">
    <div class='page-animation'>
      <!-- <div class="scroll-toos">
        <div class="scroll-toos__button">
          <p v-on:click='scrollTo("team")'>Our team</p>
        </div>
      </div> -->
      <h1 class="page-content__title">{{ this.pageContent.title }}</h1>
      <BlockBuilder v-for="(item, index) in this.blocks" :key="index" :blockComponent="item" />
      <ContactFooter :contactItems="this.contactDetails"/>
      <OnqorSEO :seoData="this.pageContent.seo" />
      <div class="page-modal-buttons button-bottom">
        <BackButton />
      </div>
    </div>
  </div>
</template>

<script>

import gsap from 'gsap';

export default {
  data(){
    return {
      page: this.$route.params.page,
      pageID:'',
      blocks: '',
      pageContent: '',
      renderPage: false,
      contactDetails: null,
      teamRef: null,
    }
  },
  async asyncData({ error, params, app: { store } }) {

    const { apiroute } = store.state
    const { page } = params

  try{
    const thePageID = await fetch(
      apiroute.url + '/api/pages?filters[slug]=' + page
        // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
    ).then((res) => {
      // can set up 404 redirection here
    return res.json();
    });

    console.log(thePageID, 'the page idddddddddd')
    
    var pageID = thePageID.data[0].id;

    const thePageData = await fetch(
        apiroute.url + '/api/pages/' + pageID + '?populate=deep,4'
      ).then((res) => {
      // can set up 404 redirection here
      return res.json();
    });

    
    // if(thePageData.data.attributes.dynamic_content){
    //   this.blocks = thePageData.data.attributes.dynamic_content
    // }

    // 
    const contactData = await fetch(
        apiroute.url + '/api/contact?populate=*'
        ).then((res) => {
        // can set up 404 redirection here
        return res.json();
    });

    // if(contactData.data.attributes.ContactInfo){
    //   // 
    //   this.contactDetails = contactData
    // }
    return {
      pageContent: thePageData.data.attributes,
      blocks: thePageData.data.attributes.dynamic_content,
      contactDetails: contactData
    }
    }catch(e){
       error({ statusCode: 404, message: "Page not found" });
    }
  },
  methods: {
    scrollTo(scrollClass) {
      // const pageModal = this.$refs.pageModal;
      // const teamElements = pageModal.getElementsByClassName(scrollClass);


      console.log('teamElements', this.teamRef);

      // const teamElement = teamElements[0];
      // teamElement.scrollIntoView({ behavior: 'smooth' });
      // var myElement = document.getElementById('element_within_div');
      // var topPos = myElement.offsetTop
    },
    handleChildRef(ref) {
      console.log('ref ref ref ref', ref );
      this.teamRef = ref;
    }
  },

  mounted(){
   
    

    // Scrollbar.init(document.querySelector('body'), 
    //   {
    //     damping: 0,
    //     thumbMinSize: 0,
    //   }
    // );

    if(this.page.length > 1){
      setTimeout(function () {  
        this.renderPage = true;
      }.bind(this), 1000)
    }
    this.renderPage = true;

    document.getElementById('page-modal').scrollTop = 0;
    // this.smoother = ScrollSmoother.create({ 
    //   wrapper: 'body', 
    //   content: '.page-content' 
    // })

    
  },

}
</script>


