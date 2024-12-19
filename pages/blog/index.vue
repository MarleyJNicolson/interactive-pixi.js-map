<template>
  <div class="page-content">
     <div class='page-animation'>
      <!-- <div class="blog" :class="this.blogClass"> 
        <div class="blog__filter-container">
          <DropDown :options="this.cats" v-on:dropdownEvent="changeCat($event)"/>
        </div>
        <div class="blog__container">
          <BlogCard v-for="(item, index) in this.blogData.data" :key="index" :countIndex="index" :cardData="item" />
        </div>
      </div> -->
      <BlogPage />
      <OnqorSEO v-if="seoData" :seoData="seoData" />
      <!-- <Subscription /> -->
      <SubscriptionSection />
      <div class="page-modal-buttons button-bottom">
        <BackButton />
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
// import gsap from 'gsap';
export default {
  name: 'blog',

  data(){
    return {
      page: this.$route.name,
      seoData: null
    }
  },

  methods: {
    async asyncData() {
      const thePageID = await fetch(
          this.$store.state.apiroute.url + '/api/pages?filters[slug]=' + 'blog'
          // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
      ).then((res) => {
        // can set up 404 redirection here
      return res.json();
      });
      
      const pageID = thePageID.data[0].id
      
      const thePageData = await fetch(
          this.$store.state.apiroute.url + '/api/pages/' + pageID + '?populate=deep,4'
      ).then((res) => {
        // can set up 404 redirection here
        return res.json();
      });

      this.seoData = thePageData.data.attributes.seo
    }


  },

  // data(){
  //   return {
  //     blogData: '',
  //     cats: [],
  //     blogClass: 'dormant',
  //   }
  // },

  // methods: {
  //   async asyncData() {
  //     const theBlogs = await fetch(
  //         this.$store.state.apiroute.url + '/api/blogs?populate=deep'

  //     ).then((res) => {
  //       // can set up 404 redirection here
  //       return res.json();
  //     });

  //     this.blogData = theBlogs

  //     

  //     const theCats = await fetch(
  //         this.$store.state.apiroute.url + '/api/categories'

  //     ).then((res) => {
  //       // can set up 404 redirection here
  //       return res.json();
  //     });

  //     
  //     theCats.data.forEach(element => {
  //       this.cats.push( { option: element.attributes.name , value: element.attributes.slug } );

  //       
  //     });;

  //   },

  //   changeCatDelay(){
  //     this.$router.push('/blog/' + value);
  //   },

  //   changeCat(value){
  //     this.blogClass = '';
  //     setTimeout(function () {    this.$router.push('/blog/' + value) }.bind(this), 1000)
  //   },

  //   animateIn(){
  //      this.blogClass = 'active'
  //   }

  // },

  mounted(){
    this.asyncData();
    // document.getElementById('page-modal').scrollTop = 0;
    // console.log(this.$route.name)
  },
}
</script>
