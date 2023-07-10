<script setup>
import '../../assets/TeamList.scss'
</script>


<template>
  <div class="addPlayerModal">
    <input class="addPlayerInput" v-model="player" placeholder="Add a new player" /> <br /><br />
    <input class="addPlayerButton" type="submit" @click="storePlayer" value="Add Player" />
    <button class="getPlayersButton" @click="getPlayers">Get Player List</button>
  </div>
  
  <div v-if=this.players.length>
    <ul class="list">
      <li v-for="(player, i) in players" :key="i">
        {{ player }} <input type="submit" @click="deletePlayer(i)" value="Remove Player" />
      </li>
    </ul>
  </div>
  <div v-else>
    <h1>Warning: no players saved</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: localStorage.getItem("players") ? JSON.parse(localStorage.getItem("players")) : [],
      player: "",
    };
  },
  methods: {
    storePlayer() {
      if (this.player.length) {
        this.players.push(this.player);
        localStorage.setItem("players", JSON.stringify(this.players));
        this.player = "";
      }
    },

    deletePlayer(index){
      this.players.splice(index, 1);
      localStorage.setItem("players", JSON.stringify(this.players));
    },

    getPlayers() {
      this.players = JSON.parse(localStorage.getItem("players"));
    },
  },
};
</script>
