<template>
    <div class="our-approach">
        <!-- <h2>{{ this.blockData.title }}</h2> -->
        <!-- <div v-for="(item, index) in this.blockData.approachSectionsRepeater" :class="'our-approach__section-' + index " class="our-approach__section"  :key="index">
            <div class="our-approach__content">
                <div class='our-approach__icon'>
                    <OnqorCircleIcon />
                    <svg xmlns="http://www.w3.org/2000/svg" width="209" height="209" viewBox="0 0 209 209" fill="none">
                        <circle cx="104.5" cy="104.5" r="102.5" :stroke="item.colour" stroke-width="4" stroke-miterlimit="1" stroke-linecap="round" stroke-dasharray="3 19"/>
                    </svg>
                </div>
                <div class="content">
                    <h3 :style="{ color: item.colour  }">{{ item.title }}</h3>
                    {{ item.content }}
                </div>
            </div>
            <div class="our-approach__line-container">
                <div   v-if="index < blockData.approachSectionsRepeater.length - 1" class="line" :style="{ background: 'linear-gradient(90deg, ' + blockData.approachSectionsRepeater[index].colour + ' 0%, ' + blockData.approachSectionsRepeater[index + 1].colour + ' 100%)' }">
                    <div :style="{ backgroundImage: 'url(/images/Line.png)'}">  </div>
                </div>
            </div>
        </div> -->
        <OurApproachSection v-for="(item, index) in this.blockData.approachSectionsRepeater" :secondColour="colours[index]"  :sectionIndex="index" :sectionData="item" :key="index" />
    </div>
</template>

<script>
    export default {
        name: 'OurApproach',

        props: {
            blockData: Object,
        },
        methods: {

        },

        data(){
            return {
                colours: []
            }
        },

        mounted(){
            this.blockData.approachSectionsRepeater.forEach((element, index) => {
                if(index < this.blockData.approachSectionsRepeater.length - 1){
                    this.colours.push(this.blockData.approachSectionsRepeater[index + 1].colour);
                }
            });
        },
    }
</script>



