<template>
   <div>
        <HeroSection v-if="this.blockComponent.__component == 'image.hero-section'" :blockData="this.blockComponent" />
        <TextSection v-if="this.blockComponent.__component == 'text-content.text-section'" :blockData="this.blockComponent" />
        <CardsWithFilter v-if="this.blockComponent.__component == 'blogs.blog-cards-with-filter'"  />
        <OurApproach v-if="this.blockComponent.__component == 'explore.our-approach'" :blockData="this.blockComponent" />
        <ContentColumns v-if="this.blockComponent.__component == 'text-content-blocks.content-block'" :blockData="this.blockComponent" />
        <ContentWithImage v-if="this.blockComponent.__component == 'text-content-blocks.content-with-image'" :blockData="this.blockComponent" />
        <MeetTheTeam ref="team" v-if="this.blockComponent.__component == 'explore.meet-the-team'" :blockData="this.blockComponent" />
        <Quote v-if="this.blockComponent.__component ==  'text-content-blocks.quote'" :blockData="this.blockComponent" />
        <StatTabs v-if="this.blockComponent.__component ==  'stats.stat-tabs'" :blockData="this.blockComponent" />
        <TabbedContent  v-if="this.blockComponent.__component ==  'onqro-tabed-content.tabbed-content-container'" :blockData="this.blockComponent" />
        <ServicePageLinks v-if="this.blockComponent.__component ==  'the-page-links.service-links-repeater'" :blockData="this.blockComponent" />
        <ThreeDObjectContent v-if="this.blockComponent.__component == 'text-content-blocks.3-d-object-and-content'" :blockData="this.blockComponent" />
        <TickList v-if="this.blockComponent.__component == 'text-content-blocks.tick-list'" :blockData="this.blockComponent" />
        <div v-if="this.blockComponent.__component == 'scroll-toos.scroll-to-anchor'" class="anchor" :id="this.blockComponent.AnchorText" ></div>
    </div>
</template>

<script>

export default {
    name: 'BlockBuilder',
    props: {
        ID: Number,
        blockComponent: Object
    }
}
</script>


