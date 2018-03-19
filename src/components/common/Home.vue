<template>
  <div class="wrapper">
    <el-container>
      <v-head></v-head>
    </el-container>
    <el-container class="container">
      <v-sidebar></v-sidebar>
      <el-main>
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
    <div class="content">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>

<script>
import vHead from './Header.vue'
import vSidebar from './Sidebar.vue'
export default {
  components: {
    vHead,
    vSidebar
  }
}
</script>
