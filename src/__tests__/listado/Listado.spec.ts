import { mount } from "@vue/test-utils";
import Listado from "../../vistas/listado/ListadoComponente.vue";

describe("Test Listado", () => {
    it("renders properly", () => {
        const wrapper = mount(Listado);
        expect(wrapper.findComponent(Listado).isVisible()).toBe(true);
    });
});
