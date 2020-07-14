import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingAnalyse: true,
    loadingProba: true,
    loadingMicro: true,
    loadingMacro: true,
    analyse: [],
    proba: [],
    micro:[],
    macro:[],

    mathVid:[]
  },
  mutations: {
    getDocs(state,probaArr){
      state.proba = probaArr;
    },
    analyseDocs(state,analyse){
      state.analyse = analyse;
    },
    microDocs(state, micro){
      state.micro = micro;
    },
    macroDocs(state,macro){
      state.macro = macro;
    },
    videoMath(state, videos) {
      state.mathVid = videos;
    }
  },
  actions: {
    getElements(context){
      //----------- proba

      context.state.loadingProba = true;
      
      
      db.collection('proba').get()
      .then(querySnapshot =>{
        var probaArr = [];
        querySnapshot.forEach(el =>{
          let data = {
            id: el.id,
            title: el.data().name,
            url: el.data().url
          };
          probaArr.push(data);
          context.state.loadingProba = false;
        })
        context.commit('getDocs', probaArr)
      })

      //----------- analyse

      context.state.loadingAnalyse = true;
      db.collection('analyse').get()
      .then(querySnapshot =>{
        var analyseArr = [];
        querySnapshot.forEach(el =>{
          let data = {
            id: el.id,
            title: el.data().name,
            url: el.data().url,
          };
          analyseArr.push(data);
          context.state.loadingAnalyse = false;          
        })
        context.commit('analyseDocs', analyseArr)

      })

      //----------- micro
      context.state.loadingMicro = true;
      db.collection('micro').get()
      .then(querySnapshot =>{
        var microArr = [];
        querySnapshot.forEach(el =>{
          let data = {
            id: el.id,
            title: el.data().name,
            url: el.data().url,
          };
          microArr.push(data);
          context.state.loadingMicro = false;
        })
        context.commit('microDocs', microArr)
      })

      //----------- macro

      context.state.loadingMacro = true;
      db.collection('macro').get()
      .then(querySnapshot =>{
        var macroArr = [];
        querySnapshot.forEach(el =>{
          let data = {
            id: el.id,
            title: el.data().name,
            url: el.data().url,
          };
          macroArr.push(data);
          context.state.loadingMacro = false;
        })
        context.commit('macroDocs', macroArr)
      })

            //----------- video math

      db.collection('videosMath').get()
      .then(querySnapshot =>{
        var videosMath = [];
        querySnapshot.forEach(el =>{
        //console.log(el.data());
          let data = {
            id: el.id,
            title: el.data().title,
            url: el.data().url,
          };
          videosMath.push(data);
          //context.state.loadingMacro = false;
        })
        context.commit('videoMath', videosMath)
      })
        

    }
  },
  modules: {
  }
})
