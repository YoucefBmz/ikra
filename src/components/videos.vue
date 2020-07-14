<template>
  <div id="videos">
    <div class="videos-sec-container">
        <h1 class="title">
            vidéos analyse math
        </h1>
        <div class="title-line"></div>

        <div class="videos-container">
          <div class="video-box" v-for="(item,index) in analyseVid" :key="index">
            <iframe  v-bind:src="item.url" target="_blank" height="200">
            </iframe>

            <p class="video-title">
               {{ item.title }}
            </p>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videos',
  data(){
    return{
      test: 'hello',
    }
  },
  computed:{
      analyseVid(){
        return this.$store.state.mathVid
      }
  },
}
</script>

<style>
#videos{
  width: 100vw;
  height: auto;
  background: #fafafa;
}
.videos-sec-container{ 
    margin-top: 70px;
  min-height: calc(100vh - 70px);
}

.videos-container{
  margin-top: 50px;
  padding-top: 1.5rem;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  margin: auto;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
}
.video-box{
  border-radius: 20px;
  text-align: center;
  padding: 10px 0;
  background: #FF2D4A;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
}
.video-title{
  text-transform: capitalize;
  background: #fff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
  width: 350px;
  margin: auto;
  border-radius: 20px;
  padding: 5px 0;
  font-size: 1.2rem;
}
iframe{
  width: 350px;
}
@media screen and (max-width: 1220px){
  .videos-container{
      margin-top: 50px;
      padding-top: 1.5rem;
      width: 95%;
      display: grid;
      grid-template-columns: repeat(2,1fr);
      margin: auto;
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
  }
}
@media screen and (max-width: 819px){
  .videos-container{
      margin-top: 50px;
      padding-top: 1.5rem;
      width: 95%;
      display: grid;
      grid-template-columns: repeat(1,1fr);
  }
}
@media screen and (max-width: 380px){
  iframe{
    width: 300px;
  }
}

@media screen and (max-width: 350px){
  iframe{
    width: 200px;
    height: fit-content;
  }
}
</style>