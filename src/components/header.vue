<template>
<el-row type="flex" justify="space-between" align='middle'>
    <el-col class="left" :span='6'>
        <i class="el-icon-s-unfold"></i>
        <span>江苏传智播客教育科技有限公司</span>
    </el-col>
    <el-col class="right" :span='3'>
        <!-- 用户头像 -->
        <img src="../assets/img/avatar.jpg" alt="">
        <!-- 下拉菜单 -->
        <el-dropdown>
  <span class="el-dropdown-link">
    超超不会飞<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>账户信息</el-dropdown-item>
    <el-dropdown-item>git地址</el-dropdown-item>
    <el-dropdown-item @click.native="onlogout">推出</el-dropdown-item>

  </el-dropdown-menu>
</el-dropdown>

    </el-col>
</el-row>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {

    }
  },
  methods: {
    // 点击退出
    onlogout () {
      // 弹窗
      this.$confirm('你确定要退出登录？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.localStorage.removeItem('user-token') // 删除token
        this.$router.push('/login') // 跳转到登录页
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消退出！'
        })
      })
    }
  }

}
</script>

<style lang='less' scoped>
.left{
    i{
        font-size: 25px;
    }
    span{
vertical-align: top;
margin-left: 5px;
    }
}
.right{
    display: flex;
    align-items: center;
    img{
        border-radius: 50%;
        margin-left: 5px;
    }
}
</style>
