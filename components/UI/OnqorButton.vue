<template>
    <div class="onqor-button" v-on:click="btnClick()">
        <p>{{ this.text }}</p>
    </div>
</template>

<script>
    export default {
        name: 'OnqorButton',

        props: {
            text: String,
        },
        methods: {
            btnClick(){
                this.$emit('btnClick');
            }   
        }

    }
</script>
