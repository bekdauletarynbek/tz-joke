<template>
  <div class="card">
    <div class="card-body">
      <p class="card-id">ID: {{data.id}}</p>
      <button :style="`background-color: ${in_jokes ? '#4895ef' : '#aaa'}`" @click="addJoke()">{{in_jokes ? 'Добавить' : 'Удалить'}}</button>
    </div>
    <p class="card-joke">{{data.joke}}</p>
  </div>
</template>


<script>
  export default {
    name: 'card',
    props: {
      data: Object
    },
    computed: {
      in_jokes() {
        return this.$store.getters.in_jokes(this.data.id);
      }
    },
    methods:{
      addJoke() {
        this.$store.commit('ADD_JOKE', this.data);
      }
    }
  }
</script>

<style lang="scss">
  .card{
    position: relative;
    background-color: #42b983;
    padding: 10px;
    border-radius: 3px;
    margin-bottom: 10px;
    .card-body{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card-id{
        text-align: left;
        color: #f2f2f2
      }
    }
    .card-joke{
      color: #fff
    }
  }
</style>