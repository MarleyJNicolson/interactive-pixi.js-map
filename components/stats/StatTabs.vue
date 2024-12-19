<template>
    <div class="statTabs">
        <div class="statTabs__item" v-for="(item, index) in this.blockData.statTabsRepeater" :key="index" >
            <div class="statTabs__graph">
                <img v-if="item.statImage.data" :src="$store.state.apiroute.url + item.statImage.data.attributes.url" /> 
            </div>
            <div class="statTabs__info">
                <p>{{ item.statTitle }}</p>
                <p>{{ item.statContent }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown';
    export default {
        name: 'StatTabs',
        props: {
            blockData: Object,
        },
        mounted(){
            
        },
        beforeMount(){
            require('@/assets/scss/stats/stat-tabs.scss');
        }
    }
</script>
