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

            const acces = users.map(( u ) =>{
                console.log('Hola')
                if( this.email == u.email ) {
                    if( this.password == u.password ) {
                        alert('Bienvenido')
                          return true;
                    }
                }
            })


            if(acces.includes( true )) {
                console.log('accediste')
                window.location.href="data.html";
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                  })
            }
        }
    }
}).mount('#app')