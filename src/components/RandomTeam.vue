<script setup>
import '../assets/components/TeamList.scss'
import Swal from 'sweetalert2'
</script>


<template>
  <div class="addPlayerModal">
    <button class="btn btn-outline-success m-1" @click="generateTeam">Generate Random Team</button>
    <button class="btn btn-outline-info m-1" @click="getTeams">Get Teams</button>
  </div>

  <div v-if="this.teams.length" class="mb-5">
    <ul
      v-for="(team, i) in teams"
      :key="i"
      class="list-group align-items-center list-group-numbered mb-2"
    >
      <h3>TEAM #{{ i + 1 }}</h3>
      <li
        v-for="(player, i) in team"
        :key="i"
        class="list-group-item d-flex justify-content-between align-items-start w-75"
      >
        <div class="ms-2 me-auto text-start">
          <div class="text-start text-danger">{{ player }}</div>
          {{ this.generateRole(i) }}
        </div>
      </li>
    </ul>
  </div>
  <div v-else class="mb-5">
    <h1>Click the button to generate a random team</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [],
      team: []
    }
  },
  methods: {
    getRandomItem(arr) {
      const validPlayers = arr
        .map((player) => {
          return !this.team.includes(player) ? player : undefined
        })
        .filter((player) => {
          return player !== undefined
        })
      const randomIndex = Math.floor(Math.random() * validPlayers.length)

      const player = validPlayers[randomIndex]
      return player
    },

    getTeams(){
        console.log(JSON.parse(localStorage.getItem('teams')))
        this.teams = JSON.parse(localStorage.getItem('teams'))
        console.log(this.teams)
    },

    generateRole(index) {
      switch (index) {
        case 0:
          return 'Point Guard'
        case 1:
          return 'Shooting Guard'
        case 2:
          return 'Power Foward'
        case 3:
          return 'Center'
        case 4:
          return 'Small Foward'
        default:
          return 'Anything'
      }
    },

    generateTeam() {
      const teamLength = 5

      if (
        !!JSON.parse(localStorage.getItem('players')) &&
        JSON.parse(localStorage.getItem('players')).length >= teamLength
      ) {
        this.team = []
        const availablePlayer = JSON.parse(localStorage.getItem('players'))
          .map((player) => {
            return !this.teams.flat().includes(player) ? player : undefined
          })
          .filter((player) => {
            console.log(player)
            return player !== undefined
          })
        if (availablePlayer.length < 5) {
          this.team = this.teams[0] ? this.teams[0] : []
          Swal.fire({
            title: 'Not enough players!',
            text: 'You need more players to form a new team!',
            icon: 'error',
            confirmButtonText: 'Got it!'
          })
          return
        }
        for (let index = 0; index < teamLength; index++) {
          const player = this.getRandomItem(availablePlayer)
          this.team.push(player)
        }
        this.teams.push(this.team)
        localStorage.setItem('teams', JSON.stringify(this.teams))
        localStorage.setItem('team', JSON.stringify(this.team))
      } else {
        Swal.fire({
          title: 'Not enough players!',
          text: 'You need at least 5 players to form a team!',
          icon: 'error',
          confirmButtonText: 'Got it!'
        })
      }
    }
  }
}
</script>
