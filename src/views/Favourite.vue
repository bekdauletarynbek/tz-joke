<template>
  <div class="favourite">
    <card v-for="joke in jokes" :data="joke" :key="joke.id"></card>


    <search class="search"></search>
  </div>
</template>


<script>
import search from "../components/search";
import card from "../components/card";
export default{
  name: 'Favourite',
  components: {
    card,
    search
  },
  data() {
    return {
    }
  },
  computed:{
    jokes() {
      if(this.$store.state.search_jokes.length > 0)
        return this.$store.state.search_jokes;
      return this.$store.state.jokes;
    }
  },
  mounted() {
  }

}
</script>


<style lang="scss" scoped>
.favourite{
  position: relative;
  .search{
    position: fixed;
    bottom: 20px
  }
}
</style>