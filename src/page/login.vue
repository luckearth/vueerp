<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <span class="svg-container"> </span>
        <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
      </el-form-item>
  
      <el-form-item prop="password">
        <span class="svg-container"> </span>
        <el-input v-model="loginForm.password" placeholder="请输入密码" @keyup.enter.native="submitForm"></el-input>
      </el-form-item>
  
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="submitForm">登录</el-button>
      </el-form-item>
  
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { userLogin } from '@/api/apiList'
export default {
  // 进入页面之前判断 已登录直接跳转
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$store.state.token) {
        vm.$router.push('home');
      }
    })
  },
  data() {
    return {
      loginForm: {
        username: 'sushipai',
        password: '123456'
      },
      loading: false,
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
      },
    }
  },
  watch: {
    token: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    userProfile: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
  },
  computed: mapState(['token', 'userProfile']),
  methods: {
    ...mapActions(['actionUserLogin']),
    submitForm() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {//客户端验证成功提交数据API 验证
          this.loading = true;
          try {
            userLogin(this.loginForm, result => {
              if (result.success === 1) {//返回API的数据再判断
                this.loading = false;
                this.actionUserLogin(result.data);// 更新TOKEN
                this.$router.push('home');// 跳转
                this.$message({ message: '登录成功', type: 'success' });// 成功弹窗提示
              } else {
                this.$message(result.message);// 错误弹窗提示
              }
            });
          } catch (error) {
            this.loading = false;
            console.log('login methods catch', error);
          }
        }
      });
    },
    resetForm() {
      this.$refs.loginForm.resetFields();// 重置表单
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/mixin.scss";
.tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 5px;
}

.login-container {
  @include relative;
  height: 100vh;
  background-color: #2d3a4b;

  input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #293444 inset !important;
    -webkit-text-fill-color: #fff !important;
  }
  input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #eeeeee;
    height: 47px;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
  }

  .title {
    font-size: 26px;
    font-weight: 400;
    color: #eeeeee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }

  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }

  .forget-pwd {
    color: #fff;
  }
}
</style>