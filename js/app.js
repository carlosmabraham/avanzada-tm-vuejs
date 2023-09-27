const { createApp, ref } = Vue

createApp({
    setup() {
        const users = ref([]);
        //const email = ref("");
        const email = ref('Sincere@april.biz');
        const password = ref('secret')
        //const password = ref("");
        let tmp = localStorage.getItem("is_login");
        if( tmp == null ) {
            tmp = false;
        }

        is_login = ref(tmp);
        return {
            users,
            email,
            password,
            is_login
        }
    },
    mounted: () => {
        const getUsers = async() => {
            const response = await fetch('./users.json?v=1.1');
            const tmp_users = await response.json();

            this.users = tmp_users;
        }

        if( this.is_login ) {
            getUsers();
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