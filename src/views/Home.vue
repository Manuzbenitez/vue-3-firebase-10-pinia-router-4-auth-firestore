<template>
  <div>
    <h1>Home</h1>
    <p>{{ userStore.userData?.email }}</p>

    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Ingrese URL" v-model="url">
      <button type="submit" :disabled="databaseStore.loadingDoc">Agregar</button>
    </form>
    <ul v-if="!databaseStore.loading">
      <li v-for="item in databaseStore.documents" :key="item.uid">
        {{ item.id }}
        <br>
        {{ item.name }}
        <br>
        {{ item.short }}
        <br>
        <button @click="databaseStore.deleteUrl(item.id)" :disabled="databaseStore.loadingDoc">Eliminar</button>
        <button @click="router.push(`/editar/${item.id}`)">Editar</button>
      </li>
    </ul>
    <p v-else>Loading Docs...</p>
  </div>
</template>

<script setup>
  import { useUserStore } from "../stores/user";
  import { useDatabaseStore } from '../stores/database'
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const userStore = useUserStore()
  const databaseStore = useDatabaseStore()
  const router = useRouter()

  databaseStore.getUrls()

  const url = ref('')

  const handleSubmit = () => {
    // validaciones de esa url....

    databaseStore.addUrl(url.value)

  }
</script>
