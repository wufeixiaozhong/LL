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
<!-- 文章列表 -->
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>总共找到56999条信息</span>
  </div>
  <div class="table">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="封面"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="address"
        label="发布日期">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
  </div>
</el-card>
  <!-- 文章列表 -->
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
      rangedate: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style>

</style>
