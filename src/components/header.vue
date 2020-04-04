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
    <el-dropdown-item>推出</el-dropdown-item>

  </el-dropdown-menu>
</el-dropdown>

    </el-col>
</el-row>
</template>

<script>
export default {

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
