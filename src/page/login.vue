<template>
  <el-card class="box-card">
    <h1>后台管理系统</h1>
    <el-form :model="loginForm" :rules="rules" label-position="right" ref="loginForm">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
      </el-form-item>
  
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
  
      <el-form-item>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
  
    </el-form>
  </el-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { userLogin } from '@/api/apiList'
export default {
  // 进入页面之前判断 已登录直接跳转
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$store.state.token) {
        vm.$router.push('main');
      }
    })
  },
  data() {
    return {
      loginForm: {
        username: 'sushipai',
        password: '123456'
      },
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
          try {
            userLogin(this.loginForm, result => {
              if (result.success === 1) {//返回API的数据再判断
                this.actionUserLogin(result.data);// 更新TOKEN
                this.$router.push('home');// 跳转
                this.$message({ message: '登录成功', type: 'success' });// 成功弹窗提示
              } else {
                this.$message(result.message);// 错误弹窗提示
              }
            });
          } catch (error) {
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
<style >
.box-card {
  width: 400px;
  margin: 100px auto 0 auto
}

.box-card h1 {
  line-height: 3em;
  font-size: 18px;
}
</style>