<template>
    <div class="card">
    <img :src="`/images/${experience.image}`" :alt="experience.name"/>
    <span class="card__text">
        {{ experience.name }}
    </span>
    </div>
</template>

<script>
export default{
    props:{
        experience:{type: object , required: true,}
    }
}
</script>