<!-- eslint-disable vue/valid-v-for -->
<template>
  <v-app-bar class="">
    <v-app-bar-title>
      <!-- <v-icon icon="mdi-circle-slice-4" @click.stop="drawer = !drawer"/> -->
      <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer">

      </v-app-bar-nav-icon>
      Base Preset
    </v-app-bar-title>
  </v-app-bar>

  <v-card class="mt-3">
    <v-layout>

      <v-navigation-drawer v-model="drawer" shaped>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="John Leider"></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <!-- <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" router :to="'/'"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about" router :to="'/about'"></v-list-item> -->

          <v-list-item v-for="item in sidenav" :prepend-icon="item.icon" :title="item.title" :value="item.value" router
            :to="item.path">
          </v-list-item>

          <!-- <v-list-group>
              <v-list-item v-for="item in sidenav" :prepend-icon="item.icon" :title="item.title" :value="item.value"
                router :to="item.path">
              </v-list-item>
              <v-list-item v-for="item in sidenav.children" :prepend-icon="item.icon" :title="item.title" :value="item.value"
                router :to="item.path">

              </v-list-item>
          </v-list-group> -->

        </v-list>

      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <div class="d-flex justify-center align-center h-100">
          <router-view />
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import sidenav from '../../shared/data/sidenav/sidenav.js'

export default {
  data() {
    // const sidenav = [
    //   {
    //     title: 'Home',
    //     path: '/',
    //     value: 'home',
    //     icon: 'mdi-view-dashboard'
    //   },
    //   {
    //     title: 'About',
    //     path: '/about',
    //     value: 'about',
    //     icon: 'mdi-forum'
    //   }
    // ]

    return {
      drawer: null,
      sidenav
    }
  },
}
</script>
