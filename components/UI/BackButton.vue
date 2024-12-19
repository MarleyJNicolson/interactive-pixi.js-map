<template>
    <div @click="goTop()" class="back-button">
        Back to top
    </div>
</template>

<script>
    export default {
        name: 'BackButton',
        props: {
            text: String,
        },
        methods: {
            goTop() {
                var pageModal = document.getElementById('page-modal');
                pageModal.scrollTo({top: 0, behavior: 'smooth'});
                window.scrollTo({top: 0, behavior: 'smooth'});
            },
        }
    }
</script>
