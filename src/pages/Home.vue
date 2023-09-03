<template>
  <div class="home">
    <div class="sectiontopbar">
      <div class="topbar1">
        <div class="userprofile">
          <div class="text">
            <div class="bienvenido">Bienvenido!</div>
            <div class="david-herrera">David Herrera</div>
          </div>
          <img class="userimage-icon1" alt="" src="/userimage1@2x.png" />
        </div>
        <div class="text1">
          <div class="bienvenido">Agosto 31, 2023</div>
          <div class="david-herrera">09:00 a.m</div>
        </div>
        <img class="topbar-child" alt="" src="/line-1.svg" />
        <div class="boxnotification">
          <img class="notificationicon" alt="" src="/notificationicon.svg" />
          <img class="calendaricon" alt="" src="/calendaricon.svg" />
          <div class="boxiconnotificationon">
            <img class="boxicon" alt="" src="/boxicon.svg" />
            <div class="boxiconnotificationon-child" />
            <div class="div1">1</div>
          </div>
          <img class="darkmodeicon" alt="" src="/darkmodeicon.svg" />
        </div>
      </div>
    </div>
    <div class="sectionlateralmenu">
      <div class="divother">
        <div class="settingspage">
          <div class="settingspage1">
            <img
              class="material-symbolssettings-icon"
              alt=""
              src="/materialsymbolssettings.svg"
            />
            <div class="configuraciones">Configuraciones</div>
          </div>
        </div>
        <div class="settingspage">
          <div class="settingspage1">
            <img
              class="material-symbolssettings-icon"
              alt=""
              src="/mdilogin.svg"
            />
            <div class="configuraciones">Cerrar Sesión</div>
          </div>
        </div>
      </div>
      <div class="divcategorias">
        <div class="homepage">
          <div class="settingspage1">
            <img
              class="material-symbolssettings-icon"
              alt=""
              src="/icoutlinehome.svg"
            />
            <div class="configuraciones">Inicio</div>
          </div>
        </div>
        <div class="settingspage">
          <div class="settingspage1">
            <img
              class="material-symbolsdashboard-out-icon"
              alt=""
              src="/materialsymbolsdashboardoutline.svg"
            />
            <div class="configuraciones">Panel de control</div>
          </div>
        </div>
        <div class="settingspage">
          <div class="boxpage1">
            <img class="vector-icon" alt="" src="/vector.svg" />
            <div class="configuraciones">Agenda</div>
          </div>
        </div>
        <div class="settingspage">
          <div class="settingspage1">
            <img
              class="material-symbolssettings-icon"
              alt=""
              src="/formkithappy.svg"
            />
            <div class="configuraciones">Clientes</div>
          </div>
        </div>
        <div class="settingspage">
          <div class="salespage1">
            <img
              class="material-symbolssettings-icon"
              alt=""
              src="/humbleiconscurrencydollarcircle.svg"
            />
            <div class="ventas">Ventas</div>
            <img
              class="mingcutedown-fill-icon"
              alt=""
              src="/mingcutedownfill.svg"
            />
          </div>
        </div>
        <div class="settingspage">
          <div class="shoppingpage1">
            <img
              class="material-symbolssettings-icon"
              alt=""
              src="/mdishoppingoutline.svg"
            />
            <div class="ventas">Compras</div>
            <img
              class="mingcutedown-fill-icon"
              alt=""
              src="/mingcutedownfill1.svg"
            />
          </div>
        </div>
        <div class="settingspage">
          <div class="settingspage1">
            <img
              class="material-symbolssettings-icon"
              alt=""
              src="/carbonfinance.svg"
            />
            <div class="configuraciones">Cuenta empresa</div>
          </div>
        </div>
        <div class="settingspage">
          <div class="productspage1">
            <div class="settingspage1">
              <img
                class="material-symbolsdashboard-out-icon"
                alt=""
                src="/mdiboxoutline.svg"
              />
              <div class="configuraciones">Productos</div>
              <img
                class="mingcutedown-fill-icon"
                alt=""
                src="/mingcutedownfill1.svg"
              />
            </div>
          </div>
        </div>
        <div class="settingspage">
          <div class="productspage1">
            <div class="settingspage1">
              <img
                class="material-symbolssettings-icon"
                alt=""
                src="/mdiusers.svg"
              />
              <div class="configuraciones">Especialistas</div>
            </div>
          </div>
        </div>
        <div class="settingspage">
          <div class="settingspage1">
            <img
              class="material-symbolssettings-icon"
              alt=""
              src="/arcticonsservices.svg"
            />
            <div class="configuraciones">Servicios</div>
          </div>
        </div>
        <div class="settingspage">
          <div class="settingspage1">
            <img
              class="material-symbolssettings-icon"
              alt=""
              src="/mdireportboxoutline.svg"
            />
            <div class="configuraciones">Informes</div>
          </div>
        </div>
        <div class="settingspage">
          <div class="settingspage1">
            <img
              class="material-symbolssettings-icon"
              alt=""
              src="/materialsymbolshomework.svg"
            />
            <div class="configuraciones">Sede</div>
          </div>
        </div>
      </div>
      <div class="logolizto1">
        <div class="logo3">
          <div class="rectangle-div" />
          <img class="tablercheck-icon4" alt="" src="/tablercheck2.svg" />
        </div>
        <div class="bienvenido">Lizto</div>
      </div>
    </div>
    <div class="maininiciopage">
      <img
        class="chatfloatingbutton-icon"
        alt=""
        src="/chatfloatingbutton.svg"
        @click="onChatFloatingButtonClick"
      />
      <div class="frame">
        <div class="hola-soporte-bienvenido1">
          Hola soporte, Bienvenido a Lizto
        </div>
        <div class="accesos-rpidos1">Accesos rápidos</div>
        <div class="divdirectaccess">
          <div class="directaccessnewbill1">
            <img class="mdidollar-icon1" alt="" src="/mdidollar1.svg" />
            <div class="importar-cantidades-de-container">Crear Factura</div>
          </div>
          <div class="directaccessnewelectronicbill1">
            <img class="mdidollar-icon1" alt="" src="/fabook1.svg" />
            <div class="importar-cantidades-de-container">
              <p class="aadir-nuevo-acceso">Crear Factura</p>
              <p class="aadir-nuevo-acceso">Electrónica</p>
            </div>
          </div>
          <div class="directaccessnewdate1">
            <img
              class="mdidollar-icon1"
              alt=""
              src="/solarcalendarlineduotone1.svg"
            />
            <div class="importar-cantidades-de-container">Crear Cita</div>
          </div>
          <div class="directaccessseeproducts1">
            <img class="mdidollar-icon1" alt="" src="/zondiconsbox1.svg" />
            <div class="importar-cantidades-de-container">Ver Productos</div>
          </div>
          <div class="addnewdirectaccess1">
            <img class="mdidollar-icon1" alt="" src="/viconxlarge1.svg" />
            <div class="importar-cantidades-de-container">
              <p class="aadir-nuevo-acceso">Añadir nuevo acceso</p>
              <p class="aadir-nuevo-acceso">directo</p>
            </div>
          </div>
          <div class="directaccessimportinventary1">
            <img class="mdidollar-icon1" alt="" src="/icsharpsavealt1.svg" />
            <div class="importar-cantidades-de-container">
              <p class="aadir-nuevo-acceso">Importar cantidades de</p>
              <p class="aadir-nuevo-acceso">Inventario</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Home",
    methods: {
      onChatFloatingButtonClick() {
        this.$router.push("/homecrmchaton");
      },
    },
  });
</script>
<style scoped>
  .bienvenido {
    position: relative;
    letter-spacing: 0.1em;
    font-weight: 500;
  }
  .david-herrera {
    position: relative;
    font-size: 15px;
    letter-spacing: 0.1em;
  }
  .text {
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
  }
  .userimage-icon1 {
    position: relative;
    border-radius: 50%;
    width: 68px;
    height: 68px;
    object-fit: cover;
  }
  .userprofile {
    position: absolute;
    top: 0px;
    left: 1188.94px;
    width: 225.06px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .text1 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 198.09px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
  }
  .topbar-child {
    position: absolute;
    top: -1px;
    left: 1162.01px;
    width: 2px;
    height: 70px;
  }
  .notificationicon {
    position: absolute;
    top: 3px;
    left: 250.99px;
    width: 40px;
    height: 40px;
  }
  .calendaricon {
    position: absolute;
    top: 3px;
    left: 168.02px;
    width: 40px;
    height: 40px;
  }
  .boxicon {
    position: absolute;
    top: 3.24px;
    left: 0px;
    width: 37.78px;
    height: 36.76px;
  }
  .boxiconnotificationon-child {
    position: absolute;
    top: 0px;
    left: 23.33px;
    border-radius: 50%;
    background-color: #fe4141;
    width: 16.67px;
    height: 16.22px;
  }
  .div1 {
    position: absolute;
    top: 2.16px;
    left: 30px;
    letter-spacing: 0.1em;
    font-weight: 500;
    display: inline-block;
    width: 3.33px;
    height: 11.89px;
  }
  .boxiconnotificationon {
    position: absolute;
    top: 0px;
    left: 83.95px;
    width: 40px;
    height: 40px;
  }
  .darkmodeicon {
    position: absolute;
    top: 3px;
    left: 0px;
    width: 40px;
    height: 40px;
  }
  .boxnotification {
    position: absolute;
    top: 13px;
    left: 846px;
    width: 290.99px;
    height: 43px;
    font-size: 7px;
    color: #fff;
  }
  .topbar1 {
    position: relative;
    width: 1414px;
    height: 68px;
  }
  .sectiontopbar {
    position: absolute;
    top: 0px;
    left: 276px;
    background-color: #fff;
    width: 1452px;
    height: 106px;
    display: flex;
    flex-direction: column;
    padding: 16px 12px;
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .material-symbolssettings-icon {
    position: relative;
    width: 25px;
    height: 25px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .configuraciones {
    position: relative;
    font-weight: 500;
  }
  .settingspage1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .settingspage {
    width: 220px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .divother {
    position: absolute;
    top: 992px;
    left: 14px;
    width: 220px;
    height: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }
  .homepage {
    border-radius: 10px;
    background-color: #fff;
    width: 220px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .material-symbolsdashboard-out-icon {
    position: relative;
    width: 24px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .vector-icon {
    position: relative;
    width: 22px;
    height: 22px;
  }
  .boxpage1 {
    width: 83px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .ventas {
    position: relative;
    font-weight: 500;
    display: inline-block;
    width: 91px;
    flex-shrink: 0;
  }
  .mingcutedown-fill-icon {
    position: relative;
    width: 15px;
    height: 15px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .salespage1 {
    width: 160px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .shoppingpage1 {
    width: 140px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .productspage1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .divcategorias {
    position: absolute;
    top: 117px;
    left: 14px;
    width: 220px;
    height: 758px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 18px;
  }
  .rectangle-div {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #000;
    box-sizing: border-box;
    width: 25px;
    height: 25px;
  }
  .tablercheck-icon4 {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    overflow: hidden;
  }
  .logo3 {
    position: relative;
    width: 25px;
    height: 25px;
  }
  .logolizto1 {
    position: absolute;
    top: 34px;
    left: 82px;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    font-size: 30px;
    color: #000;
  }
  .sectionlateralmenu {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 0px 2px 2px 0px;
    background-color: #2ecab5;
    width: 276px;
    height: 1117px;
    font-size: 18px;
    color: #0d203c;
  }
  .chatfloatingbutton-icon {
    position: absolute;
    top: 888px;
    left: 1320px;
    width: 88px;
    height: 88px;
    cursor: pointer;
  }
  .hola-soporte-bienvenido1 {
    position: absolute;
    top: calc(50% - 324.5px);
    left: calc(50% - 285px);
    letter-spacing: 0.1em;
    font-weight: 500;
  }
  .accesos-rpidos1 {
    position: absolute;
    top: calc(50% - 239.5px);
    left: calc(50% - 121px);
    font-size: 25px;
    letter-spacing: 0.1em;
  }
  .mdidollar-icon1 {
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .directaccessnewbill1 {
    position: absolute;
    top: 0px;
    left: 59px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;
  }
  .directaccessnewelectronicbill1 {
    position: absolute;
    top: 152px;
    left: 55px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;
    text-align: center;
  }
  .directaccessnewdate1 {
    position: absolute;
    top: 0px;
    left: 405px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;
  }
  .directaccessseeproducts1 {
    position: absolute;
    top: 152px;
    left: 384px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;
  }
  .aadir-nuevo-acceso {
    margin: 0;
  }
  .addnewdirectaccess1 {
    position: absolute;
    top: 327px;
    left: 342px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;
    text-align: center;
  }
  .importar-cantidades-de-container {
    position: relative;
    letter-spacing: 0.1em;
  }
  .directaccessimportinventary1 {
    position: absolute;
    top: 324px;
    left: 0px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;
    text-align: center;
  }
  .divdirectaccess {
    position: absolute;
    top: 185px;
    left: 0px;
    width: 600px;
    height: 464px;
    font-size: 20px;
  }
  .frame {
    position: absolute;
    top: 88px;
    left: 426px;
    width: 600px;
    height: 649px;
    overflow: hidden;
  }
  .maininiciopage {
    position: absolute;
    top: 109px;
    left: 276px;
    background-color: #fff;
    width: 1452px;
    height: 1008px;
    overflow: hidden;
    font-size: 30px;
  }
  .home {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 1117px;
    overflow: hidden;
    text-align: left;
    font-size: 20px;
    color: #324a6d;
    font-family: Poppins;
  }
</style>
