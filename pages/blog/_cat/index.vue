<template>
  <div class="page-content">
    <BlogPage
      :theBlogsName="this.$route.params.cat"
    />
    <SubscriptionSection />
    <div class="page-modal-buttons button-bottom">
      <BackButton />
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',

  data() {
    return {
      catBlogs: null,
    };
  },

  async asyncData({ params, store }) {
    try {
      const response = await fetch(
        `${store.state.apiroute.url}/api/blogs?filters[PrimaryCategory][category][slug]=${params.cat}`
      );
      const theBlogsNameReady = await response.json();

      

      // Return an object with the properties you want to set on your component's data
      return {
        catBlogs: theBlogsNameReady,
      };
    } catch (e) {
      console.error('Error fetching data:', e);
      return { catBlogs: null };
    }
  },
  mounted(){
    document.getElementById('page-modal').scrollTop = 0;
  }

};
</script>