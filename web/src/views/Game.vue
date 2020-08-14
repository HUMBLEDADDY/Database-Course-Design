<template>
    <div>
        <router-link tag="div" :to="`/games/${games._id}`" class="py-2 fs-lg d-flex" v-for="(games,i) in Games"::key="i">
            <img :src="games.icon" style="width:3rem; height:3rem">
            <span class="flex-1 text-ellipsis pr-2">{{games.name}}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
        Games:[
        ]
        }
    },
    methods: {
        async fetchGames(){
        const res = await this.$http.get('games')
        this.Games = res.data
        }
    },
    created() {
        this.fetchGames();
    },
}
</script>

<style>

</style>