<template>
    <div class="header" :class="this.openMobileNav">
        <div class="header__container">
            <img v-on:click="retrunToMap()" :src="this.theHeaderLogo" />

            <div class="header__nav-container">
                <div v-for="(item, index) in this.navItems" :key="index" :class="{ 'active' : index == $store.state.apiroute.underlineHeader }" class="header__item">
                    <div class="header__click-zone" v-on:click="navClick(index), customClick('/' + item.slug)">
                        <NuxtLink  style="position: absolute; opacity: 0.0; pointer-events: none;" v-if="item.slug" :to="'/' + item.slug"  >
                            {{ item.title }} 
                        </NuxtLink>
                        <a v-if="item.slug" v-on:click="customClick('/' + item.slug)">{{ item.title }} </a>
                    </div>
                    <a v-if="item.slug == null ">
                        {{ item.title }} 
                    </a>
                    <div v-if="item.subItems" class="header__item-dropdown">
                        <div v-for="(subItem, subIndex) in item.subItems" v-on:click="navClick(index)"  :key="subIndex" class="header__sub-item">
                            <NuxtLink style="position: absolute; opacity: 0.0; pointer-events: none;" v-on:click="navClick(index)" v-if="subItem.customText" :to="'/' + subItem.page.data.attributes.slug"  >
                                {{ subItem.customText }} 
                            </NuxtLink>
                            <NuxtLink style="position: absolute; opacity: 0.0; pointer-events: none;" v-on:click="navClick(index)" v-else :to="'/' + subItem.page.data.attributes.slug"  >
                                {{ subItem.page.data.attributes.title }} 
                            </NuxtLink>
                            <a v-if="subItem.customText" v-on:click="customClick('/' + subItem.page.data.attributes.slug), navClick(index)" >
                                {{ subItem.customText }}
                            </a>
                            <a v-else v-on:click="customClick('/' + subItem.page.data.attributes.slug), navClick(index)">
                                {{ subItem.page.data.attributes.title }} 
                            </a>
                        </div>
                    </div>
                    <div class="header__underline"></div>
                </div>
            </div>
            
            <div id="hamburger" v-on:click="mobileNav()" onclick="this.classList.toggle('open');">
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path class="line line2" d="M 20,50 H 80" />
                    <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Header',
    props: {
        theActiveHeader: Number
    },
    data(){
        return {
            theHeaderLogo: '',
            navItemIDs: [],
            navItems: [],
            openMobileNav: '',
            activeItem: '',

        }
    },
    methods: {
        async asyncData() {

            const headerLogo = await fetch(
                this.$store.state.apiroute.url + '/api/header?populate=*'
                // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
            ).then((res) => {
                // can set up 404 redirection here
                
            return res.json();
            }); 

            // 

            this.theHeaderLogo = this.$store.state.apiroute.url + headerLogo.data.attributes.headerLogo.data.attributes.url

            const navItemIDs = await fetch(
                this.$store.state.apiroute.url + '/api/header?[populate][headerNavigation][populate][page][populate][NavigationDropDownItems][populate][page]=*'
                // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
            ).then((res) => {
                
            return res.json();
            }); 

            const navSubItem = await fetch(
                this.$store.state.apiroute.url + '/api/header?[populate][headerNavigation][populate][NavigationDropDownItems][populate][page]=*'
                // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
            ).then((res) => {
                
            return res.json();
            }); 

            // navItemIDs.data.attributes.headerNavigation.forEach(element => {
            //     this.navItemIDs.push(element.id);
            // });

            

            // get all pages so we can filter them by nav id
            const navItems = await fetch(
                this.$store.state.apiroute.url + '/api/pages'
                // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
            ).then((res) => {
                
            return res.json();
            }); 


            
            // filter pages by navID 
            var newArray = [];
            
            
            

            function theSubItems(count){
                if(navSubItem.data.attributes.headerNavigation[count].NavigationDropDownItems != 0){
                    return navSubItem.data.attributes.headerNavigation[count].NavigationDropDownItems;
                }else{
                    return false
                }
            }

            navItemIDs.data.attributes.headerNavigation.forEach((element, index) => {
               if(element.page.data){
                    newArray.push({ slug: element.page.data.attributes.slug, title: element.page.data.attributes.title });
                }else{
                    newArray.push({ slug: element.customLink, title: element.customText, subItems: theSubItems(index),  });
                }
            });


            
            this.navItems = newArray;
            // 
        },
        navClick(count){
            
            this.$emit('page-open');
            this.$store.commit('apiroute/underlineHeader', count)
            if(this.openMobileNav === 'mobileNavOpen'){
                this.openMobileNav = ''
            }else{
                this.openMobileNav = 'mobileNavOpen'
            }
        },
        retrunToMap(){
            this.$emit('goMap');
        },
        mobileNav(){
            if(this.openMobileNav === 'mobileNavOpen'){
                this.openMobileNav = ''
            }else{
                this.openMobileNav = 'mobileNavOpen'
            }
        },
        customClick(link){
            
            this.$emit('customLink', link);
            if(this.openMobileNav === 'mobileNavOpen'){
                this.openMobileNav = ''
            }else{
                this.openMobileNav = 'mobileNavOpen'
            }
        }
    },  
    mounted(){
        this.asyncData();
        this.$store.commit('apiroute/underlineHeader', this.theActiveHeader)
    },
    watch: {
        theActiveHeader(val, oldVal){
            this.$store.commit('apiroute/underlineHeader', val)
        }
    }
}
</script>


