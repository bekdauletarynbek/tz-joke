<template>
  <div class="home">
    <card :data="joke" v-for="joke in jokes" :key="joke.id"></card>
    <button style="margin-top: 10px;" @click="getJoke()">Загрузить еще</button>
  </div>
</template>

<script>
// @ is an alias to /src
import card from "../components/card";

export default {
  name: 'Home',
  data() {
    return {
      jokes: []
    }
  },
  components: {
    card
  },
  async mounted() {
    await this.getJoke();
    console.log(this.joke)
  },
  methods:{
    async getJoke() {
      this.jokes.push(await this.$store.dispatch('GET_JOKE'));
    }
  }
}
</script>


<style>
  button {
    border: none;
    padding: 10px;
    border-radius: 3px;
    color: #fff;
    background-color: #42b983;
  }
</style>
