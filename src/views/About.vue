<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-row>
      <v-col v-for="(dessert, index) in desserts" :key="index" cols="12" md="4">
        <v-card class="mx-auto bg-white card shadow-1" max-width="344" link>
          <v-card-title>{{ dessert.name }}</v-card-title>
          <v-card-subtitle>{{ desserts.calories }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- <v-card class="mx-auto" max-width="344" subtitle="Same looks, no anchor" title="Hover and click me" link></v-card> -->
</template>
<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'Donut',
          calories: 452,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
    }
  },
}
</script>
