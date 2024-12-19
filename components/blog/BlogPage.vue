<template>
  <div @scroll="onScroll" class="blog" :class="this.blogClass"> 
    <h1>Blog</h1>
    <div class="blog__filter-container">
      <DropDown v-if="this.theBlogsName" :options="this.cats" :placeHolder="this.theBlogsName" v-on:dropdownEvent="changeCat($event)" />
      <DropDown v-else :options="this.cats" placeHolder="All Posts" v-on:dropdownEvent="changeCat($event)" />
      
    </div>
    <div class="blog__container" ref="blogContainer">
      <BlogCard v-for="(item, index) in this.filterdBlogs" :activeCategory="blogCategory" :key="index" :countIndex="index" :cardData="item" />
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: 'BlogPage', 

  props: {
      theBlogsName: Object,
      categoryBlogs: Array
  },    

  data(){
    return {
      blogData: '',
      blogIDs: [],
      cats: [],
      blogClass: '',
      filterdBlogs: [],
      pagination: { bottom: 0, top: 6 },
      amountToPaginate: 6,
      blogCategory: false,
    }
  },
  methods: {
    async getCategories(){
      const theCats = await fetch(
          this.$store.state.apiroute.url + '/api/categories'

      ).then((res) => {
          // can set up 404 redirection here
          return res.json();
      });

      

      this.cats.push({ option: 'All posts', value: 'all' });

      theCats.data.forEach(element => {
          this.cats.push( { option: element.attributes.name , value: element.attributes.slug } ) 
      });
    },
    
    onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
        if (scrollTop + clientHeight >= scrollHeight) {
            alert('scroll')
            this.$store.commit('apiroute/bottomScroll', true)
        }
    },

    // async firstTimePosts(id){
    //   const thePosts = await fetch(
    //     this.$store.state.apiroute.url + '/api/blogs/' + id + '?populate=deep,4'
    //   ).then((res) => {
    //       // can set up 404 redirection here
    //     return res.json();
    //   });
    //   //this.filterdArray.push(thePosts);
    // },

    async allBlogs(){
        // const theBlogs = await fetch(
        //     this.$store.state.apiroute.url + '/api/blogs?[populate][featured_image]?pagination[start]=0&pagination[limit]=6'
        // ).then((res) => {
        //     // can set up 404 redirection here
        //     return res.json();
        // });
        const theBlogs = await fetch(
            this.$store.state.apiroute.url + '/api/blogs?populate=deep,4'
        ).then((res) => {
            // can set up 404 redirection here
            return res.json();
        });
        

        

        // theBlogs.data.forEach(element => {
        //   this.firstTimePosts(element.id);
        // });
        this.filterdBlogs = theBlogs.data
    },

      async asyncData() {
      try {
        const response = await fetch(
          this.$store.state.apiroute.url + '/api/blogs?filters[PrimaryCategory][category][slug]=' + this.theBlogsName + '&populate=*'
        );
        const theBlogsNameReady = await response.json();
        
        this.filterdBlogs = theBlogsNameReady.data;
       
      } catch (e) {
        console.error('Error fetching data:', e);
        return { catBlogs: null };
      }
    },

    changeCat(value){
        this.blogClass = '';
        setTimeout(function () {    
            if(value === 'all'){
                this.$router.push('/blog');
            }else{
                this.$router.push('/blog/' + value);
            }
        }.bind(this), 1000)
    },

    animateIn(){
       this.blogClass = 'active'
    },
    // async loadMore(){
    //   /// this.filterdBlogs
    //   //       pagination: { bottom: 0, top: 6 },
    //   // amountToPaginate: 6

    //   this.pagination.bottom = this.pagination.bottom + amountToPaginate;
    //   this.pagination.top = this.pagination.top + amountToPaginate;

    //   const theBlogs = await fetch(
    //       this.$store.state.apiroute.url + '/api/blogs?pagination[start]=' + this.pagination.bottom + '&pagination[limit]=' + this.pagination.top + ''
    //   ).then((res) => {
    //       // can set up 404 redirection here
    //       return res.json();
    //   });

    //   this.filterdBlogs.append(theBlogs);

    //   alert('cubes');

    // }

  },

  mounted() {

    // 

    var thisContext = this;
    var apiStore = this.$store.state.apiroute.url
    
    this.getCategories();
    //this.categoryBlogs();

    
    setTimeout(function () { this.animateIn() }.bind(this), 500);

    
    
    if(this.theBlogsName){
      this.blogCategory = this.theBlogsName;
    }

    if(this.theBlogsName){
        // this.asyncData();
        this.asyncData();
    }else{
        // this.allBlogs();
        this.allBlogs();

    }

  },

}
</script>
