<template>
    <div class="circle-icon">
        
    </div>
</template>

<script>
    export default {
        name: 'OnqorCircleIcon',

        props: {
            icon: String,
        },
        methods: {
            btnClick(){
                this.$emit('btnClick');
            }   
        }
    }
</script>
