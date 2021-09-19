import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: {
    },
    jokes: [
    ],
    search_jokes:[],
    headers: {
      'Accept': 'application/json'
    }
  },
  getters:{
    in_jokes: state=> id=> !state.jokes.some(k=> k.id === id)
  },
  mutations: {
    SET_PROPERTY(state, payload) {
      state[payload.key] = payload.value;
    },
    ADD_JOKE(state, payload) {
      if(!state.jokes.some(k=> k.id === payload.id)) {
        state.jokes.push(payload);
      }
      else{
        state.jokes.splice(state.jokes.findIndex(i=> i.id === payload.id), 1);
      }
    },
    SEARCH(state, payload) {
      state.search_jokes = state.jokes.filter(i=> i.joke.match(new RegExp(payload, 'gi')))
      console.log(state.search_jokes)
    }
  },
  actions: {
    GET_JOKE({state}) {
      return new Promise( (res, rej) => {
        axios({method: 'get' ,url: 'https://icanhazdadjoke.com', headers: state.headers}).then((response)=>{
          res(response.data);
        }).catch((err)=> {
          console.log(err);
          rej();
        });
      })
    },
  },
  modules: {
  }
})
