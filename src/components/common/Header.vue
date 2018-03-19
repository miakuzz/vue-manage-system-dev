<template>
  <el-header class="header">
    <div class="logo">管理系统</div>
    <div class="user-info">
      <el-dropdown @command="handleCommand">
        <div class="el-dropdown-link">
          <img class="user-logo" src="../../../static/images/img.jpg">
        </div>
        <el-dropdown-menu slot="dropdown">
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
    username(){
      let username = ''
      return username ? username : this.name;
    }
  },
  methods: {
    handleCommand(command) {
      if(command == 'loginout'){
        alert(1)
      }
    }
  }
}
</script>

<style scoped>
  .header, .user-info, .user-info .el-dropdown-link{
    height: 60px;
    line-height: 60px;
  }

  .header{
    position: relative;
    box-sizing: border-box;
    width: 100%;
    font-size: 22px;
  }

  .header .logo{
    float: left;
    text-align: center;
  }
  .user-info {
    float: right;
    font-size: 16px;
    color: #fff;
  }
  .user-info .el-dropdown-link{
    text-align:center;
    color: #fff;
    cursor: pointer;
  }
  .user-info .user-logo{
    width:40px;
    height:40px;
    border-radius: 50%;
    vertical-align:middle;
  }
  .el-dropdown-menu__item{
    text-align: center;
  }

</style>

