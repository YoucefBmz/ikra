<template>
    <div id="module">
    <div class="module-container">
      <h1 class="title"> macroéconomie</h1>
      <div class="title-line"></div>
      <div class="loader" v-if="$store.state.loadingMacro">
          <div class="lds-dual-ring"></div>
      </div>
      <div class="boxes-container">

        <div class="box" v-for="(item,index) in macro" :key="index">
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
    name: 'macro',
    computed:{
      macro(){
        return this.$store.state.macro
      }
    },
    mounted(){
      console.log('mounted macro');
      
      this.$ga.page({
      page: '/macro',
      title: 'macro',
      location: window.location.href
    })
  }
}
</script>

<style>

</style>