import { mount } from "@vue/test-utils";
import Inicio from "../../vistas/inicio/InicioComponente.vue";

describe("Test Inicio", () => {
    it("renders properly", () => {
        const wrapper = mount(Inicio);
        expect(wrapper.findComponent(Inicio).isVisible()).toBe(true);
    });
});
