<!-- filename: ListadoComponente.vue -->
<script setup lang="ts">

import "./listado.sass";
import { useStore } from "vuex";
import { DataItem } from "../../types";
const store = useStore();
const items = store?.state.data as DataItem[];
</script>

<template >
    <div class="listado">
        <h1>Listado</h1>
        <router-link to="/">Inicio</router-link>
        <ul>
            <li v-for="item in  items " :key="item.id">
                <p><strong>Título</strong>: {{ item.title }}</p>
                <p><strong>Descripción</strong>: {{ item.body }}</p>
                <router-link :to="`/detalle/${item.id}`">Ver más</router-link>
                <hr />

            </li>
        </ul>

    </div>
</template>
