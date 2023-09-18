<template>
  <v-sheet width="600" class="mx-auto">
    <v-container>
      <v-form ref="form">
        <v-row no-gutters>
          <v-col>
            <v-sheet class="pa-2">
              <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2">
              <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item"
                required></v-select>
            </v-sheet>
          </v-col>

          <!-- <v-responsive width="100%"></v-responsive> -->


        </v-row>
        <v-row no-gutters>
          <v-col>
            <v-sheet class="pa-2">
              <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2">
              <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
            </v-sheet>
          </v-col>
        </v-row>
        <!-- <v-row class="mb-6" no-gutters>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item"
              required></v-select>
            </v-sheet>
          </v-col>
        </v-row> -->
      </v-form>
      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
        required></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn color="success" class="mt-4" block @click="validate">
          Validate
        </v-btn>

        <v-btn color="error" class="mt-4" block @click="reset">
          Reset Form
        </v-btn>

        <v-btn color="warning" class="mt-4" block @click="resetValidation">
          Reset Validation
        </v-btn>
      </div>
    </v-container>
    <!-- <v-form ref="form">


      <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item"
        required></v-select>

      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

      <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item"
        required></v-select>

      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
        required></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn color="success" class="mt-4" block @click="validate">
          Validate
        </v-btn>

        <v-btn color="error" class="mt-4" block @click="reset">
          Reset Form
        </v-btn>

        <v-btn color="warning" class="mt-4" block @click="resetValidation">
          Reset Validation
        </v-btn>
      </div>
    </v-form> -->
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate()

      if (valid) alert('Form is valid')
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
