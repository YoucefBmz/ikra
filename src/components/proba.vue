<template>
    <div id="module">
    <div class="module-container">
      <h1 class="title"> probabilité</h1>
      <div class="title-line"></div>

      <div class="loader" v-if="$store.state.loadingProba">
          <div class="lds-dual-ring"></div>
      </div>

      <div class="boxes-container">

        <div class="box" v-for="(item,index) in proba" :key="index">
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
    name: 'proba',
    computed:{
      proba(){
        return this.$store.state.proba
      }
    },
    mounted() {
      console.log('mounted proba');
          this.$ga.page({
            page: '/proba',
            title: 'proba',
            location: window.location.href
          })
    }

}
</script>

<style>

</style>