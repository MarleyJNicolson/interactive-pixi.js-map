<template>
    <div class="card-with-filter">
        <DropDown />
    </div>
</template>

<script>

export default {
    name: 'CardsWithFilter',
    data(){
        return {
    
        }
    },
    methods: {

        async asyncData() {

            const cats = await fetch(
                this.$store.state.apiroute.url + '/api/categories'
            ).then((res) => {
                // can set up 404 redirection here
                return res.json();
            });

            

        // 
        },

    },  
    mounted(){
        this.asyncData();
    }
}
</script>


