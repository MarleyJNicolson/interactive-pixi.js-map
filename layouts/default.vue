<template>
  <v-app dark>
    <SiteIntro />
    <v-main>
      <v-container>
        <Header v-on:page-open="headerAction()" :theActiveHeader="this.activeHeader" v-on:goMap="backToMap()" v-on:customLink="customRoute($event)" />
        <div :class="[this.pageState, this.thePageClass]">
          <CityMapPopUp />
          <div class="drag-map" > 
            <div class="drag-map__background">
            </div>
            <CityMapSVG v-on:explore="mapRouts('explore')" v-on:clientService="mapRouts('clientService')" v-on:candidateService="mapRouts('candidateService')" v-on:blog="mapRouts('blog')" v-on:contact="mapRouts('contact')" /> 
          </div>
          <div class="page-modal__container" >
            <div class="page-modal-buttons button-top">
              <div class="page-modal-buttons__back-to-map" v-on:click="backToMap()">
                <div class="inside">
                  <Icon icon="arrowLeft" /> <p>MWEK City</p>
                </div>
              </div>
              <div class="page-modal-buttons__back-to-map page-modal-buttons__back-to-map--blog">
                <NuxtLink to='/blog'>
                  <div class="inside">
                    <Icon icon="arrowLeft" /> <p>Blog</p>
                  </div>
                </NuxtLink>
              </div>
              <div class="page-modal-buttons__back-to-map page-modal-buttons__back-to-map--services">
                <NuxtLink to='/our-services'>
                  <div class="inside">
                    <Icon icon="arrowLeft" /> <p>Services</p>
                  </div>
                </NuxtLink>
              </div>
              <!-- <div v-if="this.scrolltos" class="scroll-toos">
                <div v-for="(item, index) in this.scrolltos" class="scroll-toos__button" :key="index">
                  <p v-on:click='scrollTo("team")'>Our team</p>
                </div>
              </div> -->
            </div>
            <div class="page-modal__backdrop" ></div>
            <div id="page-modal" ref="pageModal" class="page-modal">
              <div id="page-scroller" ref="pageScroller" class="page_scroller"  >
                <Nuxt />
              </div>
              <Footer v-on:footerClick="headerAction($event)" />
            </div>
          </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

// import gsap from 'gsap';
// import { ScrollToPlugin } from 'gsap/all';
// gsap.registerPlugin(ScrollToPlugin);
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default {
  name: 'DefaultLayout',
  data () {
    return {
      mapButton: '',
      //pageState: 'map-open',
      pageState: 'page-open',
      // renderMap: true ,
      renderMap: false ,
      pinMe: '',
      thePageClass: '',
      transitionClass: '',
      pageReady: false,
      scrolltos: '',
      activeHeader: 5,
      previousPosition: null

    }
  },
  methods: {

    async getMapButtons() {
      const mapButton = await fetch(
          this.$store.state.apiroute.url + '/api/city-map?[populate][theCityMapButtons][populate]=*'
          // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
      ).then((res) => {
        // can set up 404 redirection here
      return res.json();
      });

      this.mapButton = mapButton.data.attributes.theCityMapButtons;

    },

    async scrollButton(){
      const thePageID = await fetch(
          this.$store.state.apiroute.url + '/api/pages?filters[slug]=' + this.$route.params.page
          // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
      ).then((res) => {
        // can set up 404 redirection here
      return res.json();
      });
      

      if(thePageID.data[0]){
        var pageID = thePageID.data[0].id;

        const theScrollTo = await fetch(
            this.$store.state.apiroute.url + '/api/pages/' + pageID + '?populate=sectionSrollTo'
          ).then((res) => {
          // can set up 404 redirection here
          return res.json();
        });
       // 
        this.scrolltos = theScrollTo.data.attributes.sectionSrollTo;
      }else{
        this.scrolltos = false;
      }
    },
    scrollTo(scrollClass) {
      const pageModal = this.$refs.pageModal;
      const teamElements = pageModal.getElementsByClassName(scrollClass);


      console.log('teamElements',pageModal);

      // const teamElement = teamElements[0];
      // teamElement.scrollIntoView({ behavior: 'smooth' });
      // var myElement = document.getElementById('element_within_div');
      // var topPos = myElement.offsetTop


    },
    headerAction(index){
      this.pageState = 'page-open';
      //  alert('hello');
    //  
      // alert(index);
      if(index){
        this.activeHeader = index;
      }else if(index === 0){
        this.activeHeader = index;
      }
      setTimeout(function () {
        this.renderMap = false;
      }.bind(this), 2100)
    },

    backToMap(){
      this.pageState = 'map-open';
      this.$router.push('/'); 
      this.renderMap = true;
      this.activeHeader = 5
      this.$store.commit('apiroute/underlineHeader', 5)
      // var headerItems = document.getElementsByClassName("header__item")
      // headerItems.forEach(function(item) {
      //     item.classList.remove("active");
      // });
    },

    pageClass(){
        const firstPath = location.pathname.split('/')[1];
        
        this.thePageClass = firstPath + '-page-' + location.pathname.replace(/[^/]/g, "").length;
    },

    mapRouts(theRoute){
      this.headerAction();
      //this.$router.push('/explore');

      switch (theRoute) {

        case 'explore':
          this.$router.push('/explore');
          this.activeHeader = 1;
          break;

        case 'clientService':
          this.$router.push('/client-services');
          this.activeHeader = 0;
          break;

        case 'candidateService':
          this.$router.push('/our-services');
          this.activeHeader = 0;
          break;

        case 'blog':
         // this.$router.push('/our-services')
          this.$router.push('/blog');
          this.activeHeader = 2;
          break;

        case 'contact':
         // this.$router.push('/our-services')
          this.$router.push('/contact');
          this.activeHeader = 3
          break;
      
        default:
          break;
      }
    },
    customRoute(event){
      this.transitionClass = 'page-change'
      var thisContext = this;
      setTimeout(function(){
        thisContext.$router.push(event);
      }, 1000); //Time before execution
    },
    firstActive(){

      

      switch (this.$route.path) {

        case '/explore':
          this.activeHeader = 1;
          break;

        case '/our-services':
          this.activeHeader = 0;
          break;

        case '/client-services':
          this.activeHeader = 0;
          break;

        case '/blog':
          this.activeHeader = 2;
          break;

        case '/contact':
          this.activeHeader = 3;
          
          // alert('contact');

          break;
      
        default:
          break;
      }
    },
    // onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
    //   if (scrollTop + clientHeight >= scrollHeight) {
    //     this.$store.commit('apiroute/bottomScroll', true)
    //   }
    // }

  },

  mounted(){
    this.getMapButtons();
    this.scrollButton();
    this.firstActive();

    // this.scroll();

    if(this.$route.params.page){
      // alert('hello ofkrh');
      
      setTimeout(function () {
        this.headerAction();
      }.bind(this), 2100)
    }

    setTimeout(function(){
      this.pageReady = true;
    }.bind(this), 1000); 
  

    this.pageClass();

    if(this.$route.params.page || this.thePageClass == 'blog-page-1'){
      this.pageState = 'page-open';
      this.renderMap = false;
    }else{
      this.renderMap = true;
      this.pageState = 'map-open';
    }

    // if(this.renderMap){
    //   this.draggableMapFunction()
    // }
        // Fetch the div
    // const myDiv = this.$refs.myDiv;
    // this.handleScroll = function(e) {
    //   const delta = Math.sign(e.deltaY);
    //   gsap.to(myDiv, {
    //     duration: 0.5, // adjust duration as needed
    //     scrollTo: { y: myDiv.scrollTop + delta * 30 },
    //     ease: "power1.inOut"
    //   });
    // };
    // window.addEventListener('wheel', this.handleScroll);

  },
  watch: {
    $route (to, from){
        this.pageClass();
        this.scrollButton();
     //   
        var thisContext = this;
      setTimeout(function(){
        thisContext.transitionClass = '';
      }, 1000); //Time before execution
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/variables.scss"; 
</style>

