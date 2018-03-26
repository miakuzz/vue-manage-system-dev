<template>
  <div class="login-wrap">
    <div class="ms-login-form">
      <div class="ms-title">
        <img src="/static/images/icon.png">
      </div>
      <el-form :model="form" :rules="rules" ref="form" label-width="0px" class="ms-form">
        <el-form-item prop="loginid">
          <el-input type="text" v-model="form.loginid" placeholder="用户名" @keyup.enter.native="submitForm('form')"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="密码" @keyup.enter.native="submitForm('form')"></el-input>
        </el-form-item>
        <div class="login-btn">
            <el-button type="primary" v-loading="loading" @click.native.prevent="submitForm('form')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import http from '../../../static/js/http'

export default {
  data: function(){
    return {
      loading: false,
      requireVerify: false,
      form: {
        loginid: '',
        password: ''
      },
      rules: {
        loginid: [
          {required: true, message: '请填写用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请填写密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm: function(form){
      const self = this;
      if(this.loading) return
      self.$refs[form].validate((valid) => {
        if(valid){
          self.loading = !self.loading
          let data = {}
          if(self.requireVerify){
            // 预留了验证码功能
          } else {
            data.loginid = self.form.loginid
            data.password = self.form.password
          }
          self.apiPost('admin/user/login', data).then((res) => {
            if(res.code != 200){
              self.loading = !self.loading
              self.handleError(res)
            } else {
              //self.refreshVerify()
              //self.resetCommonData(res.data)
              _g.toastMsg('success', '登录成功')
              router.replace('/home')
            }
          })
        } else {
          return false
        }
      })
    }
  },
  mixins: [http]
}
</script>

<style scoped>
  .login-wrap{
    width:100%;
    height:100%;
    display:flex;
    display: -webkit-flex; /* Safari */
    align-items:center;
    justify-content:center;
  }

  .ms-title{
    border-radius: 5px;
    text-align: center;
    margin-bottom: 20px;
  }

  .ms-login-form{
    width:300px;
    padding:40px;
    border-radius: 5px;
    background: #fff;
  }

  .login-btn{
     text-align: center;
  }

  .login-btn button{
    width:100%;
    height:36px;
    border-color: #d9534f;
    background-color: #d9534f;
  }

  .login-btn button:hover{
    border-color: #d23430;
    background-color:#d23430;
  }
</style>
