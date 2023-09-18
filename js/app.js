const { createApp, ref } = Vue

createApp({
    setup() {
        const users = ref([]);
        const email = ref("");
        const password = ref("");
        return {
            users,
            email,
            password
        }
    },
    methods:{
        async login() {
            const response = await fetch("./users.json");
            const users = await response.json();
            console.log(users)

            let login = false

            users.forEach(( user ) => {
                if(this.email == user.email) {
                    if( this.password == user.password ) {
                        alert( "Bienvenido" );
                        login = true
                    }
                }
            });
            if( !login ) {
                alert("Verifique sus datos");
            }
        }
    }
}).mount('#app')