<script setup>
import '../../assets/TeamList.scss'
import Swal from 'sweetalert2'
</script>


<template>
    <div class="addPlayerModal">
        <button class="getPlayersButton" @click="generateTeam">Generate Random Team</button>
    </div>

    <div v-if=this.team.length>
        <ul class="list">
            <li v-for="(player, i) in team" :key="i">
                {{ player }}
            </li>
        </ul>
    </div>
    <div v-else>
        <h1>Click the button to generate a random team</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [],
        };
    },
    methods: {
        getRandomItem(arr) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            const item = arr[randomIndex];
            return item;
        },

        generateTeam() {
            const teamLength = 5;

            if (JSON.parse(localStorage.getItem("players")).length >= teamLength) {
                this.team = [];
                for (let index = 0; index < teamLength; index++) {
                    const player = this.getRandomItem(JSON.parse(localStorage.getItem("players")));
                    this.team.push(player);
                }
                localStorage.setItem("team", JSON.stringify(this.team));
            } else {
                Swal.fire({
                    title: 'Not enough players!',
                    text: 'You need at least 5 players to form a team!',
                    icon: 'error',
                    confirmButtonText: 'Got it!'
                })
            }
        },
    },
};
</script>
