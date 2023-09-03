<template>
  <div class="homeresponsivemobile">
    <div class="topbar">
      <div class="logolizto">
        <div class="logolizto-child" />
        <img class="tablercheck-icon" alt="" src="/tablercheck.svg" />
      </div>
      <img
        class="logohamburger-icon"
        alt=""
        src="/logohamburger.svg"
        @click="onLogoHamburgerIconClick"
      />
      <img
        class="userimage-icon"
        alt=""
        src="/userimage@2x.png"
        @click="onUserImageIconClick"
      />
      <div class="ellipse-parent">
        <div class="group-child" />
        <div class="div">1</div>
      </div>
    </div>
    <div class="hola-soporte-bienvenido">Hola soporte, Bienvenido a Lizto</div>
    <div class="accesos-rpidos">Accesos rápidos</div>
    <div class="directaccess">
      <div class="directaccessnewbill">
        <img class="mdidollar-icon" alt="" src="/mdidollar.svg" />
        <div class="crear-factura">Crear Factura</div>
      </div>
      <div class="directaccessnewdate">
        <img
          class="mdidollar-icon"
          alt=""
          src="/solarcalendarlineduotone.svg"
        />
        <div class="crear-factura">Crear Cita</div>
      </div>
      <div class="directaccessnewelectronicbill">
        <img class="mdidollar-icon" alt="" src="/fabook.svg" />
        <div class="crear-factura">
          <p class="electrnica">Crear Factura</p>
          <p class="electrnica">Electrónica</p>
        </div>
      </div>
      <div class="directaccessseeproducts">
        <img class="mdidollar-icon" alt="" src="/zondiconsbox.svg" />
        <div class="crear-factura">Ver Productos</div>
      </div>
      <div class="directaccessimportinventary">
        <img class="mdidollar-icon" alt="" src="/icsharpsavealt.svg" />
        <div class="crear-factura">
          <p class="electrnica">Importar cantidad</p>
          <p class="electrnica">de</p>
          <p class="electrnica">Inventario</p>
        </div>
      </div>
      <div class="addnewdirectaccess">
        <img class="mdidollar-icon" alt="" src="/viconxlarge.svg" />
        <div class="crear-factura">
          <p class="electrnica">Añadir nuevo</p>
          <p class="electrnica">acceso directo</p>
        </div>
      </div>
    </div>
    <img
      class="chatbutton-icon"
      alt=""
      src="/chatbutton.svg"
      @click="onChatButtonClick"
    />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "HomeResponsiveMobile",
    methods: {
      onLogoHamburgerIconClick() {
        this.$router.push("/homeresponsivemobilelateralmenu");
      },
      onUserImageIconClick() {
        this.$router.push("/homeresponsivemobileprofile");
      },
      onChatButtonClick() {
        this.$router.push("/homeresponsivemobilechat");
      },
    },
  });
</script>
<style scoped>
  .logolizto-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #000;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
  }
  .tablercheck-icon {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 18px;
    height: 18px;
    overflow: hidden;
  }
  .logolizto {
    position: absolute;
    top: 15px;
    left: 165px;
    width: 30px;
    height: 30px;
  }
  .logohamburger-icon {
    position: absolute;
    top: 10px;
    left: 12px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    cursor: pointer;
  }
  .userimage-icon {
    position: absolute;
    height: 66.67%;
    width: 11.11%;
    top: 16.67%;
    right: 3.33%;
    bottom: 16.67%;
    left: 85.56%;
    border-radius: 50%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  .group-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: #fe4141;
    width: 18px;
    height: 18px;
  }
  .div {
    position: absolute;
    top: 2px;
    left: 7px;
    letter-spacing: 0.1em;
    font-weight: 500;
    display: inline-block;
    width: 3.6px;
    height: 13.2px;
  }
  .ellipse-parent {
    position: absolute;
    top: 6px;
    left: 328px;
    width: 18px;
    height: 18px;
  }
  .topbar {
    position: absolute;
    top: 0px;
    left: calc(50% - 180px);
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 360px;
    height: 60px;
    overflow: hidden;
    font-size: 10px;
    color: #fff;
  }
  .hola-soporte-bienvenido {
    position: absolute;
    top: calc(50% - 287px);
    left: calc(50% - 142px);
    letter-spacing: 0.1em;
    font-weight: 500;
  }
  .accesos-rpidos {
    position: absolute;
    top: calc(50% - 244px);
    left: calc(50% - 73px);
    letter-spacing: 0.1em;
  }
  .mdidollar-icon {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .crear-factura {
    position: relative;
    letter-spacing: 0.1em;
  }
  .directaccessnewbill {
    position: absolute;
    top: 0px;
    left: 22px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;
  }
  .directaccessnewdate {
    position: absolute;
    top: 0px;
    left: 187px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;
  }
  .electrnica {
    margin: 0;
  }
  .directaccessnewelectronicbill {
    position: absolute;
    top: 135px;
    left: 19.5px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;
    text-align: center;
  }
  .directaccessseeproducts {
    position: absolute;
    top: 130px;
    left: 174px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;
  }
  .directaccessimportinventary {
    position: absolute;
    top: 288px;
    left: 6px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;
    text-align: center;
  }
  .addnewdirectaccess {
    position: absolute;
    top: 297px;
    left: 169px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;
    text-align: center;
  }
  .directaccess {
    position: absolute;
    top: 215px;
    left: calc(50% - 145px);
    width: 289px;
    height: 409px;
    font-size: 12px;
  }
  .chatbutton-icon {
    position: absolute;
    top: 713px;
    left: 286px;
    width: 68px;
    height: 68px;
    cursor: pointer;
  }
  .homeresponsivemobile {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 800px;
    overflow: hidden;
    text-align: left;
    font-size: 15px;
    color: #324a6d;
    font-family: Poppins;
  }
</style>
