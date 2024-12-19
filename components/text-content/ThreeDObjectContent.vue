<template>
    <div>
        <h2>{{ this.blockData.title }}</h2>
        <vue3dLoader :height="200" :showFps="true" filePath="/images/MWEKEarth.obj"  :backgroundColor="0xff00ff">
        </vue3dLoader>
    </div>
</template>

<script>
    import { vue3dLoader } from "vue-3d-loader";
    export default {
        name:'ThreeDObjectContent',
        components: {
            vue3dLoader
        },
        props: {
            blockData: Array,
        }
    }
</script>