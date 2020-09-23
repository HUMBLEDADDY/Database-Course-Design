<template>
  <div>
    <router-link
      tag="div"
      :to="`/games/${games._id}`"
      class="game py-2 fs-lg d-flex"
      v-for="(games,i) in Games"
      :key="i"
    >
      <img :src="games.icon" class="gameimg" style="width:10rem; height:10rem" />
      <span class="text-primarydark fs-xl gamename pt-3 text-ellipsis pr-2">{{games.name}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Games: [],
    };
  },
  methods: {
    async fetchGames() {
      const res = await this.$http.get("games");
      this.Games = res.data;
    },
  },
  created() {
    this.fetchGames();
  },
};
</script>

<style lang="scss" scoped>
.game {
  background-color: white;
  border-bottom: 1px solid rgb(212, 212, 212);
  .gameimg {
    position: relative;
    left: 1rem;
  }
  .gamename {
    position: absolute;
    left: 13rem;
    line-height: 8rem;
    font-weight: bold;
  }
}
</style>

