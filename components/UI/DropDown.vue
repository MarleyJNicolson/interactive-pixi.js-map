<template>
    <div class="drop-down">
        <div class="drop-down__active" v-on:click="dropDownClick()">
            <p>{{ this.activeOption }}</p>
            <Icon icon="chevronDown" />
        </div>
        <div class="drop-down__options" :class="active ? 'show' : null" :style="{height: this.dropDownHeight + 'px', top: this.activeTop + 'px' }">
            <div v-for="(item, index) in this.options" :key="index" class="drop-down__item" v-on:click="itemClick(item.value)" >
                <p>{{ item.option }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DropDown',
    props: {
        placeHolder: String,
        options: Array,
        valueKey: String,
        optionKey: String 
    },
    data(){
        return {
            activeOption: '',
            dropDownHeight: 0,
            activeHeight: 0,
            activeTop: 16,
            active: false
        }
    },
    methods: {
        dropDownClick(){
            if(this.active === false){
                this.active = true;
                this.activeHeight = 32 * this.options.length + 40;
                this.dropDownHeight = this.activeHeight;
                this.activeTop = 24;
            }else{
                this.active = false;
                this.dropDownHeight = 0;
                this.activeTop = 16;
            }
        },
        itemClick(item){
            this.$emit('send', item);
            this.$emit('dropdownEvent', item);
            this.active = false;
            this.dropDownHeight = 0;
            this.activeTop = 16;
            this.activeOption = item;
        }
    },
    mounted(){
        
        // this.options.unshift({ option: 'All posts', value: 'all' })
        
        if(this.placeHolder){
            this.activeOption = this.placeHolder;
        }else{
            this.activeOption = this.options[0].option;
        }
    }
}
</script>


