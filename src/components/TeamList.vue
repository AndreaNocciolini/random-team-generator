<script setup>
import '../assets/components/TeamList.scss'
import Swal from 'sweetalert2'
</script>


<template>
  <div class="d-flex flex-md-row flex-column justify-content-around  align-items-center w-100">
    <div class="addPlayerModal">
      <input class="addPlayerInputText" v-model="player" placeholder="Add a new player" /> <br /><br />
      <button class="btn btn-outline-success m-1" @click="storePlayer">Add Player</button>
      <button class="btn btn-outline-info m-1" @click="getPlayers">Get Player List</button>
    </div>

    <div v-if=this.players.length class="list justify-content-center align-items-center">
      <ul class="list">
        <li v-for="(player, i) in players" :key="i" class="d-flex align-items-center justify-content-between w-100 fs-4 pe-3 m-1">
          {{ player.length > 8 ? player.substring(0, 8) + "..." : player }} <button class="btn btn-outline-danger"
            @click="deletePlayer(i)">Remove</button>
        </li>
      </ul>
    </div>
    <div v-else class="list justify-content-center">
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
      if (this.player.length && !this.players.includes(this.player)) {
        this.players.push(this.player);
        localStorage.setItem("players", JSON.stringify(this.players));
        this.player = "";
      } else {
        Swal.fire({
          title: 'Invalid or Missing name!',
          text: 'Please, enter a valid name that is not already in the list!',
          icon: 'warning',
          confirmButtonText: 'Ok!'
        })
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
