<template>
  <div class="home">
    <!-- 布局-->
    <el-container>
      <!-- 左侧边栏容器 -->
      <el-aside class="Nav-left" style="width:220px">
        <div class="title-img">
          <img src="../../assets/img/logo_admin.png" alt="">
        </div>
        <!-- 导航菜单 -->
        <el-menu
        background-color='#333b4c'
        text-color='#fff'
        active-text-color='#fe860a'
        style="width:220px"
        router
        >
<!-- 一级菜单 -->
<el-menu-item index='/'>首页</el-menu-item>
<!-- 二级菜单 -->
 <el-submenu>
   <template slot="title">内容管理</template>
<el-menu-item index='/publish'>发布文章</el-menu-item>
<el-menu-item index='/article'>内容列表</el-menu-item>
<el-menu-item index='/comment'>评论列表</el-menu-item>
<el-menu-item index='/material'>素材管理</el-menu-item>
 </el-submenu>
  <el-submenu>
   <template slot="title">粉丝管理</template>
<el-menu-item>图文数据</el-menu-item>
<el-menu-item>粉丝概况</el-menu-item>
<el-menu-item>粉丝画像</el-menu-item>
<el-menu-item>粉丝列表</el-menu-item>
 </el-submenu>
<el-menu-item>账户信息</el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧大容器 -->
      <el-container>
        <!-- 顶栏容器 -->
        <el-header>
          <layout-header></layout-header>
        </el-header>
        <!-- 主要区域容器 -->
        <el-main>
          <!-- 二级路由容器 -->
          <router-view :key='$route.path'></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import header from '../../components/header'
export default {
  name: 'Layout',
  components: {
    'layout-header': header
  }
}
</script>
<style lang="less" scoped>
.Nav-left{
  height: 100vh;
  background-color: #333b4c;
  .title-img{
    padding: 20px 0;
    text-align: center;
    background-color: #2c2e2f;
  }
}
</style>
