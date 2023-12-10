import { createStore } from "vuex";
import { DataItem } from "../types";
const store = createStore({
    state: {
        data: [] as DataItem[],
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
    },
});
export default store;
