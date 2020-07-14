<template>
  <div id="module">
    <div class="module-container">
      <h1 class="title"> analyse math</h1>
      <div class="title-line"></div>
              <!---->
      <!--
      <div class="vid-container">
        <router-link to="/videos" class="link vid-btn">
            voir les vidéos
        </router-link>
      </div>
      -->
              <!---->
      <div class="loader" v-if="$store.state.loadingAnalyse">
          <div class="lds-dual-ring"></div>
      </div>
              <!---->
      <div class="boxes-container">

        <div class="box" v-for="(item,index) in analyse" :key="index">
          <h2 class="box-title"> {{item.title}} </h2>
          <a v-bind:href="item.url" class="box-btn" target="_blank">voir le document </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import VueAnalytics from 'vue-analytics'
export default {
    name: 'analyse',
    data(){
      return{
      }
    },
    mounted(){
      console.log('mounted analyse');
      
    this.$ga.page({
      page: '/analyse',
      title: 'analyse',
      location: window.location.href
    })
  },
  computed:{
      analyse(){
        return this.$store.state.analyse
      }
  },
}
</script>

<style>
#module{
  display: flex;
  justify-content: center;
  width: 100vw;
  height: auto;
  background: #fafafa;
}
.module-container{
  width: 97vw;
  margin-top: 70px;
  min-height: calc(100vh - 70px);
}
.title{
  text-transform: capitalize;
  font-weight: 650;
  text-align: center;
}
.title-line{
  width: 60px;
  height: 5px;
  border-radius: 15px;
  margin: auto;
  background: #FF2D4A;
}
.boxes-container {
  margin-top: 0.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
}
.box{
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  flex-direction: column;
}
.box-title{
  font-weight: 600;
  font-size: 1.7rem;
  text-transform: capitalize;
  margin-top: 5px;
}
.box-btn ,.vid-btn{
  text-transform: capitalize;
  text-decoration: none;
  color: #fff;
  background: #FF2D4A;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
  padding: 15px 30px ;
  font-weight: 600;
  width: 290px;
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.3rem;
  border-radius: 20px;
  text-decoration: none;
}
.vid-container{
  margin: 30px 0;
  text-align: center;
}

/* loader */


/************/

@media screen and (max-width: 1050px){
.boxes-container{
  grid-template-columns: repeat(2,1fr);  
}
}
@media screen and (max-width: 700px){
.boxes-container{
  grid-template-columns: repeat(1,1fr); 
}
}

</style>