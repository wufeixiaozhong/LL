<template>
  <div class="login">
      <el-card class="login-card">
        <div slot="header" class="img">
        <img src="../../assets/img/logo_index.png" alt="">
        </div>
              <!-- 表单 -->
    <el-form>
      <!-- 用户名 -->
      <el-form-item >
        <el-input placeholder="请输入手机号"></el-input>
      </el-form-item>
      <!-- 发送 输入验证码 -->
      <el-form-item>
        <el-input placeholder='验证码' style="width:250px"></el-input>
        <el-button style="float:right">发送验证码</el-button>
      </el-form-item>
      <!-- 勾选服务条款 -->
      <el-form-item>
         <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-form-item>
        <el-button type="primary" style="width:100%">主要按钮</el-button>
      </el-form-item>
    </el-form>
      </el-card>

  </div>
</template>

<script>
export default {

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
