<template>
    <div id="module">
        <div class="module-container">
        <h1 class="title"> microéconomie</h1>
        <div class="title-line"></div>
         <div class="loader" v-if="$store.state.loadingMicro">
          <div class="lds-dual-ring"></div>
        </div>
        <div class="boxes-container">

            <div class="box" v-for="(item,index) in micro" :key="index">
            <h2 class="box-title"> {{item.title}} </h2>
            <a v-bind:href="item.url" class="box-btn" target="_blank" >voir le document </a>
            </div>

        </div>
        </div>
  </div>
</template>

<script>
import VueAnalytics from 'vue-analytics'
export default {
    name: 'micro',
    computed:{
        micro(){
            return this.$store.state.micro
        }
    },
    mounted(){
        console.log('monted micro');
        
        this.$ga.page({
            page: '/micro',
            title: 'micro',
            location: window.location.href
        })
    }
}
</script>

<style>

</style>