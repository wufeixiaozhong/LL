<template>
  <div class="article">
      <el-card class="box-card">
    <div slot="header" class="clearfix">
    <span>全部图文</span>
    </div>
    <!-- 筛选表单 -->
  <div class="filterForm">
<el-form label-width="80px">
      <el-form-item label="文章状态">
    <el-radio-group v-model="filterForm.status">
      <el-radio label="全部"></el-radio>
      <el-radio label="草稿"></el-radio>
      <el-radio label="待审核"></el-radio>
      <el-radio label="审核通过"></el-radio>
      <el-radio label="审核失败"></el-radio>
    </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表">
        <el-select placeholder="请选择活动区域" v-model="filterForm.channel_id">
          <el-option label="区域一" ></el-option>
          <el-option label="区域二" ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间选择">
        <el-date-picker
      v-model="rangedate"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
</el-form>
  </div>
    <!-- 筛选表单 -->
</el-card>

  </div>
</template>

<script>
export default {
  name: 'article',
  data () {
    return {
    // 筛选表单数据对象
      filterForm: {
        status: '', // 状态
        channel_id: '', // 频道id
        begin_pubdate: '', // 起始时间
        end_pubdate: '' // 截至时间
      },
      rangedate: ''
    }
  }
}
</script>

<style>

</style>
