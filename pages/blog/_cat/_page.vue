<template>
    <div class="page-content blog-post" v-if="this.renderPage">
      <div class='page-animation'>
        <div class="post-hero">
          <h1>{{ this.post.Title }}</h1>
          <!-- <p>{{ this.post.subTitle }}</p> -->
          <div class="post-hero__featured-img">
            <img :alt="this.post.featured_image.data.attributes.alternativeText" :src="this.$store.state.apiroute.url + this.post.featured_image.data.attributes.url " />
          </div>
        </div>
        <OnqorSEO v-if="seo" :seoData="seo" />
        <BlockBuilder v-for="(item, index) in this.blocks" :key="index" :blockComponent="item" />
        <!-- <ContactFooter :contactItems="this.contactDetails"/> -->
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
        blocks: '',
        contactDetails: '',
        post:'',
        seo: null
      }
    },
    async asyncData({ error, params, app: { store } }) {

      const { apiroute } = store.state
      const { page } = params

      try{ 
        const thePageID = await fetch(
          apiroute.url + '/api/blogs?filters[slug]=' + page 
            // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
        ).then((res) => {
          // can set up 404 redirection here
        return res.json();
        });
        var pageID = thePageID.data[0].id;

        
        

        const thePageData = await fetch(
            apiroute.url + '/api/blogs/' + pageID + '?populate=deep,5'
          ).then((res) => {
          // can set up 404 redirection here
          return res.json();
        });


        // 
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
          contactDetails: contactData,
          blocks: thePageData.data.attributes.dynamic_content,
          post: thePageData.data.attributes,
          seo: thePageData.data.attributes.seo
        }

      }catch(e){
        error({ statusCode: 404, message: "Page not found" });
      }
    },
    methods: {
      // async asyncData() {
      //   const thePageID = await fetch(
      //       this.$store.state.apiroute.url + '/api/blogs?filters[slug]=' + this.page 
      //       // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
      //   ).then((res) => {
      //     // can set up 404 redirection here
      //   return res.json();
      //   });
      //   var pageID = thePageID.data[0].id;

        
      //   

      //   const thePageData = await fetch(
      //       this.$store.state.apiroute.url + '/api/blogs/' + pageID + '?populate=deep,5'
      //     ).then((res) => {
      //     // can set up 404 redirection here
      //     return res.json();
      //   });

      //   

      //   this.blocks = thePageData.data.attributes.dynamic_content
      //   this.post = thePageData.data.attributes

      //   // if(thePageData.data.attributes.dynamic_content){
      //   //   this.blocks = thePageData.data.attributes.dynamic_content
      //   // }
      //   // 
      //   const contactData = await fetch(
      //       this.$store.state.apiroute.url + '/api/contact?populate=*'
      //       ).then((res) => {
      //       // can set up 404 redirection here
      //       return res.json();
      //   });

      //   if(contactData.data.attributes.ContactInfo){
      //     // 
      //     this.contactDetails = contactData
      //   }
      //   this.renderPage = true;
      // }
    },
  mounted(){
    // this.asyncData();
     this.renderPage = true;
  }, 
}
</script>
