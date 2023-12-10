
import { mount } from "@vue/test-utils";
import Areaprincipal from "../../componentes/areaprincipal/AreaprincipalComponente.vue";

describe("Test Areaprincipal", () => {
    it("renders properly", () => {
        const wrapper = mount(Areaprincipal);
        expect(wrapper.findComponent(Areaprincipal).isVisible()).toBe(true);
    });
});

