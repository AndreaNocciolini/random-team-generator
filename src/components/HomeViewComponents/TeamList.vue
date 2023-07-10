<script setup>
import '../../assets/TeamList.scss'
</script>


<template>
  <div class="d-flex flex-row justify-content-around w-100">
    <div class="addPlayerModal">
      <input class="addPlayerInput" v-model="player" placeholder="Add a new player" /> <br /><br />
      <input class="addPlayerButton" type="submit" @click="storePlayer" value="Add Player" />
      <button class="getPlayersButton" @click="getPlayers">Get Player List</button>
    </div>

    <div v-if=this.players.length>
      <ul class="list">
        <b-table striped hover :items="items"></b-table>
          {{ player }} <input type="submit" @click="deletePlayer(i)" value="Remove" />
      </ul>
    </div>
    <div v-else class="d-flex justify-content-center flex-column">
      <h1>Warning: no players saved</h1>
    </div>
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

    deletePlayer(index) {
      this.players.splice(index, 1);
      localStorage.setItem("players", JSON.stringify(this.players));
    },

    getPlayers() {
      this.players = JSON.parse(localStorage.getItem("players"));
    },
  },
};
</script>
