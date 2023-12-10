<!-- filename: InicioComponente.vue -->
<script setup lang="ts">
import "./inicio.sass";
import HelloWorld from "../../componentes/HelloWorld.vue";


</script>

<template >
    <div class="inicio">
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
                <img src="../../assets/vue.svg" class="logo vue" alt="Vue logo" />
            </a>
        </div>
        <HelloWorld msg="Vite + Vue" />
        <router-link to="/listado">Listado</router-link>
    </div>
</template>
