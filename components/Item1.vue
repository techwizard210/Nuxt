<template>
  <section class="relative mt-5 w-item1 h-60">
        <div class="absolute top-0 left-24 z-10">
            <img :src="require( `~/assets/${img_name}.svg`)" alt="Item1" />
        </div>
        <p class="absolute top-24 left-2.5 font-sans text-9xl text-item_num z-20"> 
            1. 
        </p>
        <p class="absolute top-48 right-0 font-sans text-base text-item_num z-20">
           {{ text }}
        </p>
        <div
        class="
            absolute
            top-14
            -left-8
            w-52
            h-52
            rounded-full
            bg-circle
            z-10
            opacity-50
        "
        />
  </section>
</template>

<script>
export default {
    name: 'Item1',
    props: {
        text: String,
        img_name: String,    
    },
};
</script>

<style>
</style>