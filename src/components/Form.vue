<template>
  <v-row>
    <v-col class="d-flex justify-center">
      <v-card class="bg-white card shadow-1" width="100%">
        <v-sheet class="mx-auto">
          <v-container>
            <v-form ref="form">
              <v-row no-gutters>
                <v-col>
                  <v-sheet class="pa-2">
                    <v-select v-model="userId" :items="userItem" :rules="[v => !!v || 'Item is required']" label="Item"
                      required></v-select>
                  </v-sheet>
                </v-col>
                <v-col>
                  <v-sheet class="pa-2">
                    <v-text-field v-model="title" :counter="10" label="Name" required></v-text-field>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-form>
            <v-checkbox v-model="completed" label="Completed?" required></v-checkbox>

            <div class="d-flex flex-column">
              <v-btn color="success" class="mt-4" block @click="submitForm">
                Submit
              </v-btn>

              <v-btn color="error" class="mt-4" block @click="reset">
                Reset Form
              </v-btn>

            </div>
          </v-container>

        </v-sheet>
      </v-card>

    </v-col>
  </v-row>
</template>

<script>
import apiService from '../shared/apiService/apiService.js'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


export default {
  name: 'FormContainer',
  data: () => ({
    userId: null,
    userItem: [
      '1',
      '2',
      '3'
    ],
    title: '',
    completed: false
  }),
  mounted() {

  },
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate()

      if (valid) alert('Form is valid')
    },
    reset() {
      this.$refs.form.reset()
      this.completed = ''
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    submitForm() {
      const requestBody = {
        title: this.title,
        userId: this.userId,
        completed: this.completed
      };

      //使用apiService的post方法發送POST方法
      apiService.post('/users/1/todos', requestBody)
        .then(response => {
          console.log(response.data);

          if (response.data.id == 201) {
            this.reset()
            this.completed = ''

            //新增成功通知
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'Insert successfully'
            })
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
}
</script>
