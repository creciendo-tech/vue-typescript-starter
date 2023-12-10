#!/bin/bash
capitalize()
{
  printf '%s' "$1" | head -c 1 | tr [:lower:] [:upper:]
  printf '%s' "$1" | tail -c '+2'
}
mkdir -p componentes/$1
cat > componentes/$1/$1.sass <<EOF
.$1
  display: block

EOF
Name=$(capitalize $1)
mkdir -p __tests__/$1
cat > __tests__/$1/$Name.spec.ts <<EOF

import { mount } from "@vue/test-utils";
import $Name from "../../componentes/$1/${Name}Componente.vue";

describe("Test $Name", () => {
    it("renders properly", () => {
        const wrapper = mount($Name);
        expect(wrapper.findComponent($Name).isVisible()).toBe(true);
    });
});

EOF

cat > componentes/$1/${Name}Componente.vue <<EOF
<!-- filename: ${Name}Componente.vue -->
<script setup lang="ts">
import "./$1.sass";

</script>

<template >
  <div class="$1">$1</div>
</template>
EOF