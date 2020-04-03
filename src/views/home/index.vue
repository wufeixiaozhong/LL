<template>
  <div class="home">
    <!-- 布局-->
    <el-container>
      <!-- 左侧边栏容器 -->
      <el-aside></el-aside>
      <!-- 右侧大容器 -->
      <el-container>
        <!-- 顶栏容器 -->
        <el-header></el-header>
        <!-- 主要区域容器 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>
