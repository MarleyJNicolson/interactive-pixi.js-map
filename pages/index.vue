<template>
  <div class="home-page page-modle">
    <BlockBuilder v-for="(item, index) in this.blocks" :key="index" :blockComponent="item" />
  </div>
</template>

<script>
// import axios from 'axios';
// import gsap from 'gsap';

export default {
  name: 'HomePage', 
  data(){
    return {
      page: this.$route.params.page,
      pageID:'',
      blocks: ''
    }
  },
  head() {
    return {
      title: 'HomePage',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'MWek Homepage city map'
        },
        { hid: 'og-title', property: 'og:title', content: 'MWekCity' }
      ]
    }
  },
  methods: {
    async asyncData() {
      const thePageID = await fetch(
          this.$store.state.apiroute.url + '/api/pages?filters[isHome]=true'
          // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
      ).then((res) => {
        // can set up 404 redirection here
      return res.json();
      });
      var pageID = thePageID.data[0].id;

      const thePageData = await fetch(
          this.$store.state.apiroute.url + '/api/pages/' + pageID + '?populate[dynamic_content][populate]=*'
        ).then((res) => {
        // can set up 404 redirection here
        return res.json();
      });

      // 
      if(thePageData.data.attributes.dynamic_content){
        this.blocks = thePageData.data.attributes.dynamic_content
      }
      // 
    },

    async getMapButtons() {
      const mapButton = await fetch(
          this.$store.state.apiroute.url + '/api/city-map?populate=*'
          // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
      ).then((res) => {
        // can set up 404 redirection here
      return res.json();
      });
      
    },
    
    // dragFunc(){
    //       const {
    //     dragMap__container
    //   } = this.$refs
    //   this.$Draggable.create(this.$refs.dragMap__container, {type:"x,y", edgeResistance:0.65, inertia:true});

    // }
  },

  mounted(){
    // 

    // window.addEventListener('load', () => {
    //    this.dragFunc();
    // })

    this.asyncData();
    document.getElementById('page-modal').scrollTop = 0;
    // 

    // this.$gsap.to(this.$refs.dragMap__container, {
    //   Draggable: {}
    // })

   // this.$gsap.Draggable.create(this.$refs.dragMap__container, {type:"x,y", edgeResistance:0.65, bounds:"#container", inertia:true});
    
  }
  
}
</script>

