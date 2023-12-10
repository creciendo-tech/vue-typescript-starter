
import { mount } from "@vue/test-utils";
import Sidebar from "../../componentes/sidebar/SidebarComponente.vue";

describe("Test Sidebar", () => {
    it("renders properly", () => {
        const wrapper = mount(Sidebar);
        expect(wrapper.findComponent(Sidebar).isVisible()).toBe(true);
    });
});

