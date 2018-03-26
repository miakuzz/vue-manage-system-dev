<template>
  <div class="wrapper">
    <el-container  class="container" direction="vertical">
      <v-head></v-head>
      <el-container class="container">
        <v-sidebar></v-sidebar>
        <el-main>
          <transition name="move" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
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

<style>

</style>

