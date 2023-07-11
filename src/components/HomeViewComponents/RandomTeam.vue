<script setup>
import '../../assets/components/TeamList.scss'
import Swal from 'sweetalert2'
</script>


<template>
    <div class="addPlayerModal">
        <button class="btn btn-info" @click="generateTeam">Generate Random Team</button>
    </div>

    <div v-if=this.team.length class="mb-5">
        <ul class="list-group align-items-center list-group-numbered">
            <li v-for="(player, i) in team" :key="i"
                class="list-group-item d-flex justify-content-between align-items-start w-75">
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
            team: [],
        };
    },
    methods: {
        getRandomItem(arr) {
            const validPlayers = arr.map(player => {
                return !this.team.includes(player) ? player : undefined
            }).filter(player => {
                return player !== undefined
            });
            const randomIndex = Math.floor(Math.random() * validPlayers.length);

            const player = validPlayers[randomIndex];
            return player;
        },

        generateRole(index) {
            switch (index) {
                case 0:
                    return "Point Guard"
                case 1:
                    return "Shooting Guard"
                case 2:
                    return "Power Foward"
                case 3:
                    return "Center"
                case 4:
                    return "Small Foward"
                default:
                    return "Anything"
            }
        },

        generateTeam() {
            const teamLength = 5;

            if (JSON.parse(localStorage.getItem("players")).length >= teamLength) {
                this.loading = true;
                this.team = [];
                for (let index = 0; index < teamLength; index++) {
                    const player = this.getRandomItem(JSON.parse(localStorage.getItem("players")));
                    this.team.push(player);
                }
                localStorage.setItem("team", JSON.stringify(this.team));
                this.loading = false;
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
