<template>
    <div>
        <input class="onqor-input" :placeholder="inputPlaceHolder" type="text" v-model="inputValue">
    </div>
</template>

<script>
    export default {
        name: 'OnqorInput',

        data(){
            return {
                inputValue: '',
            }
        },
        props: {
            inputPlaceHolder: String,
        },
        mounted(){
            // this.inputValue = this.inputPlaceHolder;
        },
        methods: {
            getValue(value) {
                
            }
        },
        watch: {
            inputValue(oldVal, newVal){
                this.$emit('send', newVal);
            }
        }
    }
</script>
