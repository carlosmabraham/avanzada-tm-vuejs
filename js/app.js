const { createApp, ref } = Vue

createApp({
    setup() {
        const name = ref('')
        const count = ref(0)
        const resultado = ref(0)
        return {
            name,
            count,
            resultado
        }
    }
}).mount('#app')