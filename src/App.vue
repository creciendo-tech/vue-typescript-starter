<script setup lang="ts">
import { onMounted } from "vue";
import { initialData } from "./apiCalls";
import store from "./store";




onMounted(() => {
    initialData().then(res => {
        store.commit("setData", res);
    });
});

</script>

<template>
    <RouterView />
</template>

