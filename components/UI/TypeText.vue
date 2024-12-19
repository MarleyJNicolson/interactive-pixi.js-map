<template>
    <span>
        {{ this.typeText }}
    </span>
</template>

<script>
    export default {
        name: 'TypeText',

        props: {
            text: String,
        },
        data(){
            return {
                typeText: ''
            }
        },
        mounted(){

            var textArray = []; 

            for (let index = 0; index < this.text.length; index++) {

                textArray.push(this.text.charAt(index));
            }

            

            
            var keepWhile = 0;
            var textCount = 0;
     
            var TypeME = setInterval(function () { 
                this.typeText = this.typeText + this.text.charAt(textCount)
                textCount++;

                if(textCount >= textArray.length){
                    clearInterval(TypeME);
                }

            }.bind(this), 45)
            

        }

    }
</script>
