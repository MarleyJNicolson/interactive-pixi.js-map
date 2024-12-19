<template>
    <div class="our-approach__section"  :key="index" ref="ourApproach__section">
        <div class="our-approach__content">
            <div class='our-approach__icon'>
                <OnqorCircleIcon />
                <div class='our-approach__icon-img' >
                    <img v-if="this.sectionData.icon.data" :src="this.$store.state.apiroute.url + this.sectionData.icon.data.attributes.url" />
                </div>
                <svg  ref="svgRotate" class="svgRotate" :style="{ transform: 'rotate('+ rotateMe+'turn)'}" xmlns="http://www.w3.org/2000/svg" width="209" height="209" viewBox="0 0 209 209" fill="none">
                    <circle cx="104.5" cy="104.5" r="102.5" :stroke="this.sectionData.colour" stroke-width="4" stroke-miterlimit="1" stroke-linecap="round" stroke-dasharray="3 19"/>
                </svg>

            </div>
            <div class="content" ref="content">
                <h3 :style="{ color: this.sectionData.colour  }">{{ this.sectionData.title }}</h3>
                <p>{{ this.sectionData.content }}</p>
            </div>
        </div>
        
        <div class="our-approach__line-container">
            <div  class="line" :style="{ background: 'linear-gradient(90deg, ' + this.sectionData.colour + ' 0%, ' + this.secondColour + ' 100%)' }">
                <div :style="{backgroundImage: 'url(/images/Line.png)'}" ></div>
            </div>
            <div class="our-approach__line-cover" ref="ourApproachCover">

            </div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'OurApproachSection',
  props: {
    sectionData: Object,
    secondColour: String,
    sectionIndex: Number
  },
  data() {
    return {
      svgItem: null,
      svgContainer: null,
    }
  },
  methods: {
    rotate() {
      this.svgItem = this.$refs.svgRotate;
      this.svgContainer = this.$refs.ourApproach__section;

      const rotationValue = this.sectionIndex % 2 === 0 ? '-0.25' : '0.25';

      gsap.to(this.svgItem, {
        scrollTrigger: {
          trigger: this.svgContainer,
          scrub: 0.5,
          scroller: '#page-modal',
        },
        rotation: rotationValue,
        ease: 'none',
      });

      gsap.to(".line div", {
        duration: 3,
        backgroundPosition: "200px 0px",
        scrollTrigger: {
          trigger: '.our-approach',
          scrub: 0.5,
          scroller: '#page-modal',
        },
        ease: 'ease-in'
      });

      gsap.to(this.$refs.ourApproachCover, {
        duration: 3,
        width: "-60%",
        scrollTrigger: {
          trigger: this.svgContainer,
          start: 'top-=100 center',
          scrub: 0.5,
          scroller: '#page-modal',
        },
        ease: 'ease-in'
      });

      gsap.to(this.$refs.content, {
        scrollTrigger: {
          trigger: this.$refs.content,
          scroller: '#page-modal',
          start: "top center+=145",
          end: "bottom top",
          scrub: 0.5,
          toggleClass: "active"
        },
      });
    },
  },
  mounted() {
    this.rotate();
  },
  beforeDestroy() {
    ScrollTrigger.getAll().forEach((ST) => ST.kill());
    gsap.globalTimeline.clear();
  },
}
</script>