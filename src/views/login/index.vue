<template>
  <div class="login">
      <el-card class="login-card">
        <div slot="header" class="img">
        <img src="../../assets/img/logo_index.png" alt="">
        </div>
              <!-- 表单 -->
    <el-form :model='loginForm' :rules='ruleForm'>
      <!-- 手机号 -->
      <el-form-item prop='mobile'>
        <el-input placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
      </el-form-item>
      <!-- 发送 输入验证码 -->
      <el-form-item prop='code'>
        <el-input placeholder='验证码' style="width:250px" v-model="loginForm.code"></el-input>
        <el-button style="float:right">发送验证码</el-button>
      </el-form-item>
      <!-- 勾选服务条款 -->
      <el-form-item prop='checked'>
         <el-checkbox v-model="loginForm.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-form-item>
        <el-button type="primary" style="width:100%">登录</el-button>
      </el-form-item>
    </el-form>
      </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单数据对象
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false // 勾选框
      },
      // 数据校验对象
      ruleForm: {
        mobile: [{ required: true, message: '请输入手机号' }, { pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '请输入正确手机号' }], // 自动校验
        code: [{ required: true, message: '请输入验证码' }, { pattern: /^\d{6}$/, message: '请输入6位数验证码' }], // 自动校验
        checked: [{
          // 自定义校验规则
          validator: function (rule, value, callback) {
            if (value) {
              callback()
            } else {
              callback(new Error('您还没有勾选条款'))
            }
          }
        }]
      }
    }
  }
}
</script>

<style lang='less' scoped>
.login{
  background-image: url('../../assets/img/login_bg.jpg');
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card{
    width: 430px;
    height: 350px;
    .img{
      text-align: center;
      img{
        height: 40px;
      }
    }
  }
}
</style>
