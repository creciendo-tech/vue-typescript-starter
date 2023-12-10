import { mount } from "@vue/test-utils";

import Detalle from "../../vistas/detalle/DetalleComponente.vue";

describe("Test Detalle", () => {
    it("renders properly", () => {
        const mockRoute = {
            params: { id: "123" },
        };

        const wrapper = mount(Detalle, {
            global: {
                mocks: {
                    $route: { currentRoute: mockRoute },
                },
            },
        });
        expect(wrapper.findComponent(Detalle).isVisible()).toBe(true);
    });
});
