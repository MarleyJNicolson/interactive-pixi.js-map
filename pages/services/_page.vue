<template>
    <div class="page-content service-page">
      <div class='page-animation'>
        <h1 class="page-content__title">{{ this.pageContent.title }}</h1>
        <BlockBuilder v-for="(item, index) in this.blocks" :key="index" :blockComponent="item" />
        <ContactFooter v-if="this.contactDetails.data" :contactItems="this.contactDetails"/>
        <OnqorSEO v-if="this.pageContent.seo" :seoData="this.pageContent.seo" />
        <div class="page-modal-buttons button-bottom">
          <BackButton />
        </div>
      </div>
    </div>
</template>

<script>
export default {
    
  data(){
    return {
      page: this.$route.params.page,
      pageID:'',
      renderPage: false,
      pageContent: '',
      blocks: '',
      contactDetails: false
    }
  },
  methods: {
    async asyncData() {
        const thePageID = await fetch(
            this.$store.state.apiroute.url + '/api/services?filters[slug]=' + this.page 
            // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
        ).then((res) => {
            // can set up 404 redirection here
        return res.json();
        });
        var pageID = thePageID.data[0].id;
      
        

        const thePageData = await fetch(
          this.$store.state.apiroute.url + '/api/services/' + pageID + '?populate=deep,4'
            ).then((res) => {
            // can set up 404 redirection here
            return res.json();
        });
        this.pageContent = thePageData.data.attributes;
            this.blocks = thePageData.data.attributes.dynamic_content 
        // 

        const contactData = await fetch(
          this.$store.state.apiroute.url + '/api/contact?populate=*'
            ).then((res) => {
            // can set up 404 redirection here
            return res.json();
        });

        

        if(contactData.data){
            // 
            this.contactDetails = contactData
        }
    }
  },

  mounted(){
    this.asyncData();
    document.getElementById('page-modal').scrollTop = 0;
  },

//   updated(){
//     this.asyncData();
//   }
  
}
</script>
