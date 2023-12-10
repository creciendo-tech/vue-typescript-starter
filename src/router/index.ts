import { createRouter, createWebHistory } from "vue-router";
import InicioComponenteVue from "../vistas/inicio/InicioComponente.vue";
import ListadoComponenteVue from "../vistas/listado/ListadoComponente.vue";
import DetalleComponenteVue from "../vistas/detalle/DetalleComponente.vue";
const routes = [
    {
        path: "/",
        name: "inicio",
        component: InicioComponenteVue,
    },
    {
        path: "/listado",
        name: "listado",
        component: ListadoComponenteVue,
    },
    {
        path: "/detalle/:id",
        name: "detalle",
        component: DetalleComponenteVue,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes, // short for `routes: routes`
});

export default router;
