const { createApp, ref } = Vue

createApp({
  setup() {
    const users = ref([]);
    const name = ref('');
    const inAction = ref('show');
    const id = ref(0);

    return {
      users,
      name,
      inAction,
      id
    }
  },
  methods: {
      action(m, u) {
          this.inAction = m;

          if (m == 'edit') {
              this.name = u.name
              this.id = u.id
          } else {
              this.name = ''
              this.id = 0
          }

      },
      cancel() {
          this.inAction = 'show';
      },
      save(e) {

          e.preventDefault();
          var access;

          if (this.inAction == 'edit') {

              let id = this.id
              let name = this.name;

              access = this.users.map(function (u) {

                  if (id == u.id) {

                      u.name = name;
                      swal.fire("Bien, hizo click en el boton");

                      return true;

                  }
              })

              if (access.includes(true)) {
                  this.inAction = 'show';

              } else {
                  swal.fire("Bien, hizo click en el boton", "error");
              }

          } else {
              this.users.push({ name: this.name })
              swal.fire("Bien, hizo click en el boton!", "success");
              this.inAction = 'show';
          }


      },
      remove(u) {
          swal.fire({
              title: "Estas seguro?",
              text: "Una vez eliminado, no podras recuperar este archivo!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
          })

              .then((willDelete) => {
                  if (willDelete) {


                      let c = 0;
                      let i = 0;

                      this.users.forEach(function (e) {
                          //element => console.log(element)

                          if (e.id == u) {
                              console.log(e)
                              i = c;
                          }

                          c++;
                      });

                      console.log(i)
                      this.users.splice(i, 1)

                      swal.fire("Tu archivo ha sido eliminado", {
                          icon: "success",
                      });

                  } else {
                      swal.fire("Tu archivo ha sido guardado");
                  }
              });

      }
  },
    mounted() {
        fetch('users.json')
            .then((res) => res.json())
            .then((json) => (this.users = json))
            .catch((err) => (console.log(err)))
    }
}).mount('#app')