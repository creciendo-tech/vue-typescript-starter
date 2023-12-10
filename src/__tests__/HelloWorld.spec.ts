import { mount } from "@vue/test-utils";
import Hello from "../componentes/HelloWorld.vue";

describe("HelloWorld", () => {
    it("renders properly", () => {
        const wrapper = mount(Hello, {
            props: { msg: "Hello Vitest" },
        });

        expect(wrapper.findComponent(Hello).isVisible()).toBe(true);
    });

    it("renders props", () => {
        const wrapper = mount(Hello, { props: { msg: "Hello Vitest" } });
        expect(wrapper.text()).toContain("Hello Vitest");
    });
    // test clicks on button changes count
    it("increments count when button is clicked", async () => {
        const wrapper = mount(Hello, { props: { msg: "Hello Vitest" } });
        expect(wrapper.text()).toContain("Hello Vitest");
        expect(wrapper.find("button").text()).toContain("count is 0");
        expect(wrapper.html()).toMatchSnapshot();
        await wrapper.find("button").trigger("click");
        expect(wrapper.find("button").text()).toContain("count is 1");
        expect(wrapper.html()).toMatchSnapshot();
        await wrapper.find("button").trigger("click");
        expect(wrapper.find("button").text()).toContain("count is 2");
        expect(wrapper.text()).toContain("Hello Vitest");
        expect(wrapper.html()).toMatchSnapshot();
        await wrapper.find("button").trigger("click");
        expect(wrapper.find("button").text()).toContain("count is 3");
        expect(wrapper.text()).toContain("Hello Vitest");
        expect(wrapper.html()).toMatchSnapshot();
        await wrapper.find("button").trigger("click");
    });
});
