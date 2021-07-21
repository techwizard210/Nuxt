<template>
  <button
    :class="[
      bgcolor ? bgcolor : '',
      color ? color : '',
      width ? width : '',
      height ? height : '',
      radius ? radius : '',
    ]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    bgcolor: String,
    color: String,
    width: String,
    height: String,
    radius: String,
    text: String,
  },
};
</script>

<style>
</style>