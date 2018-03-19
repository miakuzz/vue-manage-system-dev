<template>
  <el-header class="header">
    <div class="logo">管理系统</div>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img class="user-logo" src="../../../static/images/img.jpg" alt="../../../static/images/img.jpg">
          {{username}}
        </span>
        <el-dropdown-menu solt="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      name: '111'
    }
  },
  computed: {

  }
}
</script>

<style scoped>
  .header{
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
  }

</style>

