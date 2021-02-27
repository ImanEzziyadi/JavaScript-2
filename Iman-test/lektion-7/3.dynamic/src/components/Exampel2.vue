<template>
<div>
  
     <div class="output" :class="computedClasses">
    
     <h2> text</h2>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            bg: false,
            text:false
         

        }
    },



 computed: {
    computedClasses() {
        return {
            'bg-dark': this.bg,
            'text-white': this.text
        
        }

    }
 }
}
</script>

<style scoped>


.output {
    background-color:white;
    color: black;
    padding: 1rem;
    margin-top: irem;
    width: 300;
    min-height: 300;
    
}
.bg-dark {
 background-color: black;
}
.text-white {
 color: rgb(236, 233, 233);
}
    


</style>

 


