<template>
    <section>
        <h1>{{ destination.name }}</h1>
        <Goback/>
        <div class="destiation-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section> 
</template>
<script>
import sourceData from '@/components/data.json'
import Goback from '@/components/Goback.vue'
export default{
    components:{Goback},
    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        destination(){
            return sourceData.destinations.find(destination=>destination.id===this.destinationId)
        }
    }
}
</script>