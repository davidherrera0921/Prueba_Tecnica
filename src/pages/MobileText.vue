<template>
  <div class="mobile">Mobile</div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "MobileText",
  });
</script>
<style scoped>
  .mobile {
    position: relative;
    font-size: 50px;
    font-family: Inter;
    color: #fff;
    text-align: left;
  }
</style>
