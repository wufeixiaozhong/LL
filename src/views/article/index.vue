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
      <el-radio :label = 'null'>全部</el-radio>
      <el-radio label="0">草稿</el-radio>
      <el-radio label="1">待审核</el-radio>
      <el-radio label="2">审核通过</el-radio>
      <el-radio label="3">审核失败</el-radio>
      <el-radio label="4">已删除</el-radio>
    </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表">
        <el-select placeholder="请选择活动区域" v-model="filterForm.channel_id">
          <el-option label='所有频道' :value='null'></el-option>
          <el-option :label="channel.name" :value='channel.id' v-for='channel in channels' :key='channel.id'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间选择">
        <el-date-picker
        value-format='yyyy-MM-dd'
      v-model="rangedate"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loadArticle()">查询</el-button>
      </el-form-item>
</el-form>
  </div>
    <!-- 筛选表单 -->
</el-card>
<!-- 文章列表 -->
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>共找到{{total_count}}条符合条件的内容</span>
  </div>
  <div class="table">
    <el-table
    v-loading="loading"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="cover"
        label="封面"
        width="180">
        <template slot-scope="scope">
<img :src="scope.row.cover.images[0]" alt="" width="50">
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
        <template slot-scope="scope">
<el-tag :type='articleStatus[scope.row.status].value'>{{articleStatus[scope.row.status].label}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="pubdate"
        label="发布日期">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
           <el-button type="primary" icon="el-icon-edit" circle  @click="$router.push('/publish/'+scope.row.id)"></el-button>
           <el-button type="danger" icon="el-icon-delete" circle @click="onDelete(scope.row.id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</el-card>
  <!-- 文章列表 -->

  <!-- 分页 -->
  <div class="page">
    <el-pagination
    @current-change='onChangePage'
    :disabled = 'loading'
      background
      layout="prev, pager, next"
      :total="total_count">
    </el-pagination>
  </div>

  <!-- 分页 -->
  </div>
</template>

<script>
export default {
  name: 'article',
  data () {
    return {
    // 筛选表单数据对象
      filterForm: {
        status: null, // 状态
        channel_id: null, // 频道id
        begin_pubdate: '', // 起始时间
        end_pubdate: '' // 截至时间
      },
      rangedate: '',
      tableData: [], // 文章列表默认返回数据
      total_count: '', // 文章列表总条数
      loading: true,
      channels: [], // 频道列表数据
      page: '', // 当前页码
      articleStatus: [
        {
          value: '',
          label: '草稿'
        },
        {
          value: 'info',
          label: '待审核'
        },
        {
          value: 'success',
          label: '审核通过'
        },
        {
          value: 'warning',
          label: '审核失败'
        },
        {
          value: 'danger',
          label: '已删除'
        }
      ] // 文章状态
    }
  },
  created () {
    // 获取文章列表数据
    this.loadArticle()
    // 获取频道列表数据
    this.loadChannels()
  },
  methods: {
    // 获取文章列表
    loadArticle (page = 1) {
      this.loading = true // 打开loading区域加载
      this.$axios({
        method: 'get',
        url: '/articles',
        params: {
          page,
          status: this.filterForm.status,
          channel_id: this.filterForm.channel_id,
          begin_pubdate: this.rangedate ? this.rangedate[0] : null,
          end_pubdate: this.rangedate ? this.rangedate[1] : null
          // per_page:
        }
      }).then(res => {
        console.log(res, '请求成功！')
        this.tableData = res.data.data.results
        this.total_count = res.data.data.total_count
        this.loading = false
      }).catch(err => {
        console.log(err, '请求失败！')
        this.loading = false
      })
    },
    loadChannels () {
      this.$axios({
        method: 'get',
        url: '/channels'
      }).then(res => {
        console.log(res, '请求成功！')
        this.channels = res.data.data.channels
      }).catch(err => {
        console.log(err, '请求失败！')
      })
    },
    // 点击分页
    onChangePage (value) {
      this.page = value
      this.loadArticle(value)
    },
    // 删除文章
    onDelete (articleID) {
      this.$axios({
        url: `/articles/${articleID}`,
        method: 'delete'
      }).then(res => {
        console.log(res, '删除成功!')
        this.loadArticle(this.page)
      }).catch(err => {
        console.log(err, '请求失败')
      })
    }

  }
}
</script>

<style lang='less' scoped>
.page{
  text-align: center;
  padding: 10px;
}
</style>
