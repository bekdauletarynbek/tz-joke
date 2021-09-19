<template>
<div class="search">
  <input type="text" @input="search()" v-model="text">
  <button>Поиск</button>
</div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      text: ''
    }
  },
  methods: {
    search() {
      this.$store.commit('SEARCH', this.text);
    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  display: flex;
  width: 100%;
  justify-content: center;
  padding:0 5px;
  input{
    width: 60%
  }
  button{
    margin-left: 10px;
  }
}
</style>