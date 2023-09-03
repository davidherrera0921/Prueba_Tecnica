<template>
  <div class="homeresponsivemobilechat">
    <div class="crmchatvariant21">
      <div class="crmchatvariant2-inner" />
      <div class="politicas-de-privacidad2">Politicas de privacidad</div>
      <div class="agosto-31-20233">Agosto 31 2023, 09:31 a.m</div>
      <div class="lizto-bot2">Lizto Bot</div>
      <div class="just-now2">Just now</div>
      <div class="crmchatvariant2-child1" />
      <img
        class="icsharp-arrow-back-icon2"
        alt=""
        src="/icsharparrowback.svg"
      />
      <div class="logo4">
        <div class="logo-child1" />
        <img class="tablercheck-icon5" alt="" src="/tablercheck3.svg" />
      </div>
      <div class="liztoia2">LiztoIA</div>
      <img
        class="material-symbolsclose-icon3"
        alt=""
        src="/materialsymbolsclose3.svg"
        @click="onMaterialSymbolscloseIconClick"
      />
      <img class="avatarliztobot-icon2" alt="" src="/avatarliztobot2.svg" />
      <div class="chat2">
        <div class="hola-soy-lizto-container2">
          <p class="hola-soy-lizto2">Hola, soy Lizto Bot, su asistente</p>
          <p class="hola-soy-lizto2">digital. ¿Qué desea hacer?</p>
        </div>
      </div>
      <div class="startchat2">
        <div class="escriba-un-mensaje2">Escriba un mensaje</div>
      </div>
      <img class="mdisend-icon2" alt="" src="/mdisend2.svg" />
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "HomeResponsiveMobileChat",
    methods: {
      onMaterialSymbolscloseIconClick() {
        this.$router.push("/");
      },
    },
  });
</script>
<style scoped>
  .crmchatvariant2-inner {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: #fff;
  }
  .politicas-de-privacidad2 {
    position: absolute;
    height: 4.88%;
    top: 12.88%;
    left: calc(50% - 77px);
    letter-spacing: 0.1em;
    text-align: center;
    display: inline-block;
    width: 154px;
  }
  .agosto-31-20233 {
    position: absolute;
    height: 3.7%;
    top: 22.5%;
    left: calc(50% - 84px);
    letter-spacing: 0.1em;
    text-align: center;
    display: inline-block;
    width: 167.2px;
  }
  .lizto-bot2 {
    position: absolute;
    height: 2.5%;
    width: 14.72%;
    top: 31.63%;
    left: 16.94%;
    font-size: 10px;
    letter-spacing: 0.1em;
    display: inline-block;
  }
  .just-now2 {
    position: absolute;
    height: 2.5%;
    width: 18.06%;
    top: 42.38%;
    left: 16.94%;
    font-size: 10px;
    letter-spacing: 0.1em;
    display: inline-block;
  }
  .crmchatvariant2-child1 {
    position: absolute;
    height: 7.5%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 92.5%;
    left: 0%;
    background-color: #2ecab5;
  }
  .icsharp-arrow-back-icon2 {
    position: absolute;
    height: 3.75%;
    width: 8.33%;
    top: 1.88%;
    right: 88.89%;
    bottom: 94.38%;
    left: 2.78%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .logo-child1 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #000;
    box-sizing: border-box;
  }
  .tablercheck-icon5 {
    position: absolute;
    height: 60%;
    width: 60%;
    top: 20%;
    right: 20%;
    bottom: 20%;
    left: 20%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .logo4 {
    position: absolute;
    height: 3.75%;
    width: 8.33%;
    top: 1.88%;
    right: 75.99%;
    bottom: 94.38%;
    left: 15.68%;
  }
  .liztoia2 {
    position: absolute;
    height: 3.75%;
    width: 31.67%;
    top: 1.88%;
    left: 26.11%;
    font-size: 18px;
    letter-spacing: 0.1em;
    font-weight: 500;
    color: #324a6d;
    display: inline-block;
  }
  .material-symbolsclose-icon3 {
    position: absolute;
    height: 3.75%;
    width: 8.33%;
    top: 1.88%;
    right: 3.77%;
    bottom: 94.38%;
    left: 87.9%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    cursor: pointer;
  }
  .avatarliztobot-icon2 {
    position: absolute;
    height: 3.13%;
    width: 6.94%;
    top: 36%;
    right: 90.28%;
    bottom: 60.88%;
    left: 2.78%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .hola-soy-lizto2 {
    margin: 0;
  }
  .hola-soy-lizto-container2 {
    position: absolute;
    top: 7px;
    left: 16px;
    letter-spacing: 0.1em;
  }
  .chat2 {
    position: absolute;
    height: 7.5%;
    width: 80.83%;
    top: 34.13%;
    right: 5.83%;
    bottom: 58.38%;
    left: 13.33%;
    border-radius: 20px;
    background-color: #ebebeb;
    overflow: hidden;
    font-size: 14px;
    color: #324a6d;
  }
  .escriba-un-mensaje2 {
    position: absolute;
    top: 16px;
    left: 16px;
    letter-spacing: 0.1em;
  }
  .startchat2 {
    position: absolute;
    height: 6.25%;
    top: 90.75%;
    bottom: 3%;
    left: 10px;
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid #e2e2e2;
    box-sizing: border-box;
    width: 292.97px;
    overflow: hidden;
  }
  .mdisend-icon2 {
    position: absolute;
    height: 3.75%;
    width: 8.37%;
    top: 92%;
    right: 1.35%;
    bottom: 4.25%;
    left: 90.28%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .crmchatvariant21 {
    position: absolute;
    top: 0px;
    left: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 360px;
    height: 800px;
  }
  .homeresponsivemobilechat {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 800px;
    overflow: hidden;
    text-align: left;
    font-size: 12px;
    color: rgba(50, 74, 109, 0.5);
    font-family: Poppins;
  }
</style>
