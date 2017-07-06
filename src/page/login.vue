<template>
  <el-form :model="dataLogin" :rules="rulesLogin" ref="formLogin" class="login-container">
    <h3 class="title">系统登录</h3>
  
    <el-form-item prop="username">
      <el-input v-model="dataLogin.username" placeholder="请输入账号">
        <template slot="prepend">
          <div class="icon-container">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
        </template>
      </el-input>
    </el-form-item>
  
    <el-form-item prop="password">
      <el-input v-model="dataLogin.password" placeholder="请输入密码" @keyup.enter.native="submitForm">
        <template slot="prepend">
          <div class="icon-container">
            <i class="fa fa-lock" aria-hidden="true"></i>
          </div>
        </template>
      </el-input>
    </el-form-item>
  
    <el-checkbox v-model="dataLogin.remember" class="remember">记住密码</el-checkbox>
  
    <el-form-item>
      <el-button class="btn-submit" type="primary" :loading="loadingLogin" @click.native.prevent="submitForm">登录</el-button>
    </el-form-item>
  
  </el-form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { apiUserLogin } from '@/api/apiList'
export default {
  // 进入页面之前判断 已登录直接跳转
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$store.state.token) {
        vm.$router.push('welcome');
      }
    })
  },
  data() {
    return {
      dataLogin: {
        username: '18016011673',
        password: '123456',
        remember: true
      },
      loadingLogin: false,
      rulesLogin: {
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
      //console.log('new: %s, old: %s', val, oldVal)
    },
    userProfile: function (val, oldVal) {
      //console.log('new: %s, old: %s', val, oldVal)
    },
  },
  computed: mapState(['token', 'userProfile']),
  methods: {
    ...mapActions(['actionUserLogin']),
    submitForm() {
      this.$refs.formLogin.validate((valid) => {
        if (valid) {// 客户端验证成功提交数据API 验证
          this.loadingLogin = true;
          try {
            apiUserLogin(this.dataLogin, result => {
              this.loadingLogin = false;
              if (result.success === 1) {// 返回API的数据再判断
                this.actionUserLogin(result.data);// 更新TOKEN
                this.$router.push('welcome');// 跳转
                this.$message.success('登录成功');// 成功弹窗提示
              } else {
                this.$message.error(result.message);// 错误弹窗提示
              }
            });
          } catch (error) {
            this.loadingLogin = false;
          }
        }
      });
    },
    resetForm() {
      this.$refs.formLogin.resetFields();// 重置表单
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .icon-container {
    padding: 5px;
    color: #889aa4;
  }
  .btn-submit {
    width: 100%;
    margin-top: 20px;
  }
}
</style>