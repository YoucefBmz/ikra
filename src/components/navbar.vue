<template>
  <div id="navBar">
      <nav>
          
            <h3 class="nav-icone"> 
                <a href="#" class="logo-nav">
                    إقرأ
                </a>
            </h3>
          <ul class="links-item" :class="{'open-nav': show}">
              <li @click="openNav">
                  <router-link to="/" class="link">home</router-link>
              </li>
              <li @click="openNav">
                  <router-link to="/analyse" class="link">analyse</router-link>
              </li>
              <li @click="openNav">
                  <router-link to="/proba" class="link">proba</router-link>
              </li>
              <li @click="openNav">
                  <router-link to="/micro" class="link">micro</router-link>
              </li>
              <li @click="openNav">
                  <router-link to="/macro" class="link">macro</router-link>
              </li>
          </ul>
          <div class="humb" @click="openNav">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
          </div>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'navBar',
    data() {
        return{
            show: false
        }
    },
    methods: {
        openNav(){
            this.show = !this.show
        },
        closeNav(){
            this.show = false
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
#navBar{
    background: #fff;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    position: fixed;
    width: 100vw;
    z-index: 10;
}
.logo-nav {
    font-weight: 400;
    letter-spacing: 0.6px;
    font-size: 22px;
    color: #000;
    color: #FF2D4A;
    font-family: 'Lalezar', cursive;
    text-decoration: none;
}
nav{
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.links-item{
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-between;
    width: 40vw;
}
.links-item li a{
    text-decoration: none;
    color: #000;
    text-transform: capitalize;
    transition: 1s ease all;
    font-size: 18px;
}
.links-item li a.router-link-exact-active{
   color: #FF2D4A;
  font-weight: 650;
}
.humb{
    width: 53px;
    height: 36px;
    cursor: pointer;
    display: none;
}
.line{
    width: 100%;
    width: 100%;
    margin: 3px 0;
    border-radius: 8px;
    height: 8px;
    background: #FF2D4A;
}
@media screen and (max-width: 1180px){
.links-item{
    width: 50vw;
}
}
@media screen and (max-width: 850px){
.links-item{
    width: 60vw;
}
}
@media screen and (max-width: 700px){
 .links-item{
    position: absolute;
    top: 70px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 70px);
    flex-direction: column;
    justify-content: space-around;
    clip-path: circle( 100px at 90% -29% );
    -webkit-clip-path:circle( 100px at 90% -29% );
    background: #fff;
    transition: all 1s ease;

}   
.humb{
    display: block;
}
.open-nav{
    clip-path:circle( 1000px at 90% -10% );
    -webkit-clip-path:circle( 1000px at 90% -10% );
}
}
</style>