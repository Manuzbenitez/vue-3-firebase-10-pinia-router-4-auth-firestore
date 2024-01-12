<template>
    <div>
        <h1>Editar</h1>
        <p v-if="databaseStore.loadingDoc">Loading doc...</p>
        <form @submit.prevent="handleSubmit" v-else>
            <input type="text" placeholder="Ingrese URL" v-model="url">
            <button type="submit" :disabled="databaseStore.loadingDoc">Editar</button>
        </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useDatabaseStore } from '../stores/database'
import router from "../router";

const route = useRoute()
// console.log(route.params.id)
const databaseStore = useDatabaseStore()

const handleSubmit = () => {
    // validaciones del input
    databaseStore.updateUrl(route.params.id, url.value)
}

const url = ref('')

onMounted(async() => {
    url.value = await databaseStore.leerUrl(route.params.id)

})

</script>
