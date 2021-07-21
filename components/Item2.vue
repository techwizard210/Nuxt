<template>
  <section class="w-origin relative">        
        <svg viewBox="0 0 100 15" class="w-origin h-15 absolute -top-1">
            <path fill="white" d="M0,0 L0,2 C3,2 15,2 25,8 C40,15 50,12 65,8 S90,4 100,6 L100,0" />
        </svg>
        <div class="bg-gradient-to-br from-landingbg-from to-landingbg-to py-10 w-origin text-center font-sans tracking-landing font-medium text-5xl text-landing">
            <div class="relative h-80">
                <p class="absolute top-0 left-8 font-sans text-9xl text-item_num z-20"> 
                    2. 
                </p>
                <div class="absolute top-24 right-4 font-sans text-base text-item_num tracking-normal z-20">
                    {{ text }}
                </div>
                <div class="absolute top-40 left-28 z-10">
                    <img :src="require( `../assets/${img_name}.svg`)" alt="Item2" />
                </div>
            </div>
        </div>
        <svg viewBox="0 0 100 10" class="w-origin h-15 absolute bottom-0 z-20">
            <path fill="white" d="M0,10 L0,8 C15,6 30,5 45,6 S80,7 100,0 L100,10" />
        </svg>        
  </section>
</template>

<script>
export default {
    name: "Item2",
    props: {
    text: String,
    img_name: String,    
  },
}
</script>

<style>

</style>