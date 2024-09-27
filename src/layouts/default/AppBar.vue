<!-- eslint-disable vue/valid-v-for -->
<template>
  <v-app-bar class="bg-white v-app-bar-shadow v-app-bar justify-center d-flex">
    <v-app-bar-title class="">
      <v-container fluid>
        <v-row>
          <v-col-2>
            <!--側邊欄控制按鈕-->
            <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer">
            </v-app-bar-nav-icon>
          </v-col-2>
          <v-col-2>
            <!--logo-->
            <img class="" src="@/assets/CookBookie-logo.png" alt="Logo" style="height: 50px;" />
          </v-col-2>
        </v-row>
      </v-container>
    </v-app-bar-title>

    <!-- <v-responsive max-width="260" class="mr-15">
      <v-text-field label="搜尋" solo-inverted dense flat hide-details rounded append-outer-icon="search">
      </v-text-field>
    </v-responsive> -->
  </v-app-bar>

  <!--側邊攔-->
  <v-navigation-drawer v-model="drawer" style="border: 0;width: 320px;" class="align-center bg-main"
    :style="{ transform: drawer ? 'translateX(24px)' : 'translateX(-320px)' }">
    <v-container class="d-flex justify-center mt-5">
      <v-row>
        <v-col class="d-flex justify-center">
          <v-card class="sidebar-card bg-white card shadow-1">
            <!-- <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="John Leider"></v-list-item> -->
            <!-- <v-divider></v-divider> -->
            <v-list density="compact" nav>
              <v-list-item v-for="item in sidenav" :prepend-icon="item.icon" :title="item.title" :value="item.value"
                router :to="item.path" :key="item.value" :exact="item.path === '/'"
                :class="{ 'v-list-item--active': $route.path === item.path }">
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

    </v-container>

  </v-navigation-drawer>
  <!--container-->
  <v-main :style="{ '--v-layout-left': drawer ? '350px' : ' 0px' }" class="bg-main">
    <v-container class="d-flex justify-center mt-5">
      <router-view />
    </v-container>
    <!--<div class="d-flex justify-center h-100" style="margin-top: 100px;">
          <router-view />
        </div>-->
  </v-main>
</template>

<script>
import sidenav from '../../shared/data/sidenav/sidenav.js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // 确保您正在使用 css-l
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

<style>
.sidebar-card {
  position: fix;
  /*margin-top: 50px;*/
  /*margin-left: 15px;*/
  /*margin-right: 10px;*/
  /*top: 80px;*/
  /* 增加了與頂部的距離 */
  /*left: 16px;
  /*bottom: 16px;*/
  width: 300px;
  /* border-radius: 16px !important; */
  overflow: hidden;
  transition: transform 0.3s ease;
  z-index: 1000;
}

.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  box-shadow:
    0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.1)),
    0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgb(0 0 0 / 0%)),
    0px 1px 0px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0)) !important;
}

/* card */
</style>
