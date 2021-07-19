<template>
  <footer
    class="
      h-footer
      bottom-0
      sticky
      rounded-b-none rounded-t-br
      shadow-4xl
      flex flex-row
      items-center
      px-5
    "
  >
    <Button
      :bgcolor="btn_bgcolor"
      :color="btn_color"
      :width="btn_width"
      :height="btn_height"
      :radius="btn_radiux"
      :text="btn_text"
    />
  </footer>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {
      btn_bgcolor: "bg-gradient-to-r from-primary to-secondary",
      btn_color: "text-white",
      btn_width: "w-full",
      btn_height: "h-10",
      btn_radiux: "rounded-xl",
      btn_text: "Kostenlos Registrieren",
    };
  },
};
</script>

<style>
</style>