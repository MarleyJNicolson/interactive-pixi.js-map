<template>
    <div class="quote">
        <div class="quote__mark quote__mark-left">
            <Icon icon='mwekQuoteLeft' />
        </div> 
        <vue-markdown :source="blockData.quoteText" /> 
        <div class="quote__mark quote__mark-right">
            <Icon icon='mwekQuoteRight' />
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'TextSection',
    components: {
        VueMarkdown
    },
    props: {
        blockData: Array,
    },
    mounted(){
        
    },
    beforeMount(){
        require('@/assets/scss/text-content/quote.scss');
    }
}
</script>