const { createApp, ref } = Vue

createApp({
    setup() {
        const name = ref('')
        const count = ref(0)
        const resultado = ref(0)
        const userName = ref('')
        const lastName = ref('')
        const persons = ref([])
        return {
            name,
            count,
            resultado,
            userName,
            lastName, 
            persons
        }
    },
    methods:{
        addPerson(){
            const person = {
                userName:this.userName, 
                lastName:this.lastName
            }
            // console.log('Hola Vue')
            // console.log(this.name)
            // console.log(this.lastName)
            this.persons.push(person)
        }
    }
}).mount('#app')