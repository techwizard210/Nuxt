<template>
  <section class="-mt-20 w-80 h-96">
    <div class="relative">
      <p class="absolute top-12 left-3.375 font-sans text-9xl text-item_num z-40">
        3.
      </p>
      <p
        class="absolute top-24 left-11.313 font-sans text-base text-item_num z-20"
      >
        {{ text }}
      </p>
      <div class="absolute top-48 left-14 z-20">
        <img :src="require( `../assets/${img_name}.svg`)" alt="Item3" />
      </div>
      <div
        class="
          absolute
          top-14
          -left-12
          w-72
          h-72
          rounded-full
          bg-circle bg-item3-circle
          z-0
          opacity-70
        "
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Item8',
  props: {
    text: String,
    img_name: String,    
  },
};
</script>

<style>
</style>