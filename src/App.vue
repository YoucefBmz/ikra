<template>
  <div id="app">
    
    <navBar></navBar>
    
    <router-view/>
  </div>
</template>

<script>
import navBar from './components/navbar.vue'
export default {
  name: 'app',
  components:{
    navBar
  },
  
  mounted(){
    this.$store.dispatch('getElements')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

@import url('https://fonts.googleapis.com/css?family=El+Messiri|Lalezar&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins';
}
html{
  scroll-behavior: smooth;
}
#app{
  overflow: hidden;
}


/** loader  */
.loader{
  text-align: center;
}

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #FF2D4A;
  border-color: #FF2D4A transparent #FF2D4A transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}






</style>
