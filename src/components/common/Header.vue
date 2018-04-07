<template>
  <el-header class="header">
    <div class="logo">SOMETHING</div>
    <div class="user-info">
      <el-dropdown @command="handleCommand">
        <div class="el-dropdown-link">
          <img class="user-logo" src="../../../static/images/img.jpg">
          {{username}}
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import http from '../../../static/js/http'

export default {
  data() {
    return {
      name: 'admin'
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
      const self = this;
      if(command == 'loginout'){
        self.apiPost('admin/user/logout', null).then((res) => {
          self.handleResponse(res, (data) => {
            router.replace('/login')
          })
        })
      }
    }
  },
  mixins: [http]
}
</script>

<style scoped>
  .header, .user-info, .user-info .el-dropdown-link{
    height: 55px!important;
    line-height: 55px!important;
  }

  .header{
    position: relative;
    box-sizing: border-box;
    width: 100%;
    font-size: 20px;
  }

  .header .logo{
    float: left;
    text-align: center;
  }
  .user-info {
    float: right;
    font-size: 16px;
  }
  .user-info .el-dropdown-link{
    text-align:center;
    cursor: pointer;
  }
  .user-info .user-logo{
    width:35px;
    height:35px;
    border-radius: 50%;
    vertical-align:middle;
  }
  .el-dropdown-menu__item{
    text-align: center;
  }

</style>

