<template>
  <div class="homeresponsivemobileprofile">
    <img class="topbar-icon" alt="" src="/topbar.svg" />
    <div class="hola-soporte-bienvenido2">Hola soporte, Bienvenido a Lizto</div>
    <div class="accesos-rpidos2">Accesos rápidos</div>
    <div class="directaccess1">
      <div class="directaccessnewbill2">
        <img class="mdidollar-icon2" alt="" src="/mdidollar2.svg" />
        <div class="crear-factura4">Crear Factura</div>
      </div>
      <div class="directaccessnewdate2">
        <img
          class="mdidollar-icon2"
          alt=""
          src="/solarcalendarlineduotone2.svg"
        />
        <div class="crear-factura4">Crear Cita</div>
      </div>
      <div class="directaccessnewelectronicbill2">
        <img class="mdidollar-icon2" alt="" src="/fabook.svg" />
        <div class="crear-factura4">
          <p class="crear-factura5">Crear Factura</p>
          <p class="crear-factura5">Electrónica</p>
        </div>
      </div>
      <div class="directaccessseeproducts2">
        <img class="mdidollar-icon2" alt="" src="/zondiconsbox.svg" />
        <div class="crear-factura4">Ver Productos</div>
      </div>
      <div class="directaccessimportinventary2">
        <img class="mdidollar-icon2" alt="" src="/icsharpsavealt.svg" />
        <div class="crear-factura4">
          <p class="crear-factura5">Importar cantidad</p>
          <p class="crear-factura5">de</p>
          <p class="crear-factura5">Inventario</p>
        </div>
      </div>
      <div class="addnewdirectaccess2">
        <img class="mdidollar-icon2" alt="" src="/viconxlarge2.svg" />
        <div class="crear-factura4">
          <p class="crear-factura5">Añadir nuevo</p>
          <p class="crear-factura5">acceso directo</p>
        </div>
      </div>
    </div>
    <img class="chatbutton-icon1" alt="" src="/chatbutton1.svg" />
    <div class="sectionlateralmenu1">
      <div class="lateralmenu">
        <div class="lateralmen" />
        <div class="topbarmenlateral">
          <img
            class="material-symbolsclose-icon2"
            alt=""
            src="/materialsymbolsclose2.svg"
            @click="onMaterialSymbolscloseIconClick"
          />
          <img class="userimage-icon2" alt="" src="/userimage@2x.png" />
          <div class="david-herrera1">David Herrera</div>
        </div>
        <div class="notificationpage-parent">
          <div class="notificationpage">
            <div class="homepage4">
              <div class="notificaciones">Notificaciones</div>
              <img
                class="minotification-icon"
                alt=""
                src="/minotification.svg"
              />
            </div>
          </div>
          <div class="notificationpage">
            <div class="homepage4">
              <div class="notificaciones">Citas</div>
              <img
                class="minotification-icon"
                alt=""
                src="/radixiconscalendar.svg"
              />
            </div>
          </div>
          <div class="productspage2">
            <div class="homepage6">
              <div class="notificaciones">Productos</div>
              <img class="zondiconsbox3" alt="" src="/zondiconsbox2.svg" />
            </div>
            <div class="ellipse-group">
              <div class="group-item" />
              <div class="div2">1</div>
            </div>
          </div>
          <div class="notificationpage">
            <div class="homepage4">
              <div class="notificaciones">Modo Oscuro</div>
              <img class="minotification-icon" alt="" src="/phmoonfill.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homeresponsivemobileprofile-child" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "HomeResponsiveMobileProfile",
    methods: {
      onMaterialSymbolscloseIconClick() {
        this.$router.push("/");
      },
    },
  });
</script>
<style scoped>
  .topbar-icon {
    position: absolute;
    top: 0px;
    left: calc(50% - 180px);
    width: 360px;
    height: 68px;
    overflow: hidden;
  }
  .hola-soporte-bienvenido2 {
    position: absolute;
    top: calc(50% - 287px);
    left: calc(50% - 142px);
    letter-spacing: 0.1em;
    font-weight: 500;
  }
  .accesos-rpidos2 {
    position: absolute;
    top: calc(50% - 244px);
    left: calc(50% - 73px);
    letter-spacing: 0.1em;
  }
  .mdidollar-icon2 {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .crear-factura4 {
    position: relative;
    letter-spacing: 0.1em;
  }
  .directaccessnewbill2 {
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
  .directaccessnewdate2 {
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
  .crear-factura5 {
    margin: 0;
  }
  .directaccessnewelectronicbill2 {
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
  .directaccessseeproducts2 {
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
  .directaccessimportinventary2 {
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
  .addnewdirectaccess2 {
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
  .directaccess1 {
    position: absolute;
    top: 215px;
    left: calc(50% - 145px);
    width: 289px;
    height: 409px;
    font-size: 12px;
  }
  .chatbutton-icon1 {
    position: absolute;
    top: 713px;
    left: 286px;
    width: 68px;
    height: 68px;
  }
  .lateralmen {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 0px 2px 2px 0px;
    background-color: #fff;
    width: 276px;
    height: 800px;
  }
  .material-symbolsclose-icon2 {
    position: absolute;
    height: 66.67%;
    width: 14.49%;
    top: 16.67%;
    right: 82.25%;
    bottom: 16.67%;
    left: 3.26%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    cursor: pointer;
  }
  .userimage-icon2 {
    position: absolute;
    height: 66.67%;
    width: 14.49%;
    top: 16.67%;
    right: 3.99%;
    bottom: 16.67%;
    left: 81.52%;
    border-radius: 50%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .david-herrera1 {
    position: absolute;
    top: 30%;
    left: 35.14%;
    letter-spacing: 0.1em;
    font-weight: 500;
  }
  .topbarmenlateral {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 276px;
    height: 60px;
    overflow: hidden;
  }
  .notificaciones {
    position: relative;
    font-weight: 500;
  }
  .minotification-icon {
    position: relative;
    width: 25px;
    height: 25px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .homepage4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .notificationpage {
    border-radius: 10px;
    width: 207px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    box-sizing: border-box;
    align-items: flex-end;
    justify-content: flex-start;
  }
  .zondiconsbox3 {
    position: relative;
    width: 23px;
    height: 23px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .homepage6 {
    position: absolute;
    top: 5px;
    left: 92px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .group-item {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: #fe4141;
    width: 18px;
    height: 18px;
  }
  .div2 {
    position: absolute;
    top: 2px;
    left: 7px;
    letter-spacing: 0.1em;
    font-weight: 500;
    display: inline-block;
    width: 3.6px;
    height: 13.2px;
  }
  .ellipse-group {
    position: absolute;
    top: 7px;
    left: 0px;
    width: 18px;
    height: 18px;
    font-size: 10px;
    color: #fff;
  }
  .productspage2 {
    position: relative;
    border-radius: 10px;
    width: 207px;
    height: 33px;
  }
  .notificationpage-parent {
    position: absolute;
    top: 79px;
    left: 58px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 20px;
    color: #0d203c;
  }
  .lateralmenu {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 276px;
    height: 800px;
  }
  .sectionlateralmenu1 {
    position: absolute;
    top: 0px;
    left: 84px;
    width: 276px;
    height: 800px;
  }
  .homeresponsivemobileprofile-child {
    position: absolute;
    top: 0px;
    left: -1px;
    background-color: #9a9595;
    width: 84px;
    height: 800px;
    mix-blend-mode: darken;
  }
  .homeresponsivemobileprofile {
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
