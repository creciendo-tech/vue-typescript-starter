<!-- filename: DetalleComponente.vue -->
<script setup lang="ts">
import { useRoute } from "vue-router";
import "./detalle.sass";
const route = useRoute();
const params_id = route?.params?.id;
import { useStore } from "vuex";
import { DataItem } from "../../types";

const store = useStore();

const value = store?.state.data[+params_id - 1] as DataItem;

</script>

<template >
    <div class="detalle">
        <h2>detalle {{ value?.id }}</h2>

        <p>

            ID: {{ value?.id }}
            {{ value?.title }}
            {{ value?.body }}
        </p>
        <router-link to="/listado">Volver</router-link>

    </div>
</template>
