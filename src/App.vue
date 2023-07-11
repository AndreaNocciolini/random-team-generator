<script setup>
import { /* RouterLink, */ RouterView } from 'vue-router'
import '../src/assets/App.scss'
</script>

<template>
  <div class="container text-center">
    <h1 class="fs-1">Basketball Random Team Generator</h1>
    <router-link type="button" class="btn btn-info m-1" to="/add-players">Add new players</router-link>
    <router-link type="button" class="btn btn-info m-1" to="/generate-team">Generate Team</router-link>
    <RouterView />
  </div>
</template>
