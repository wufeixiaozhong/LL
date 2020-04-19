<template>
  <div class="comment-detail">
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>评论详情</span>
  </div>
<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="头像"
        width="180">
        <template slot-scope="scope">
            <img :src="scope.row.aut_photo" alt="" width="50" height="50">
        </template>
      </el-table-column>
      <el-table-column
        prop="content"
        label="评论内容"
        width="180">
      </el-table-column>
      <el-table-column
        prop="is_liking"
        label="点赞">
        <template slot-scope="scope">
            {{scope.row.is_liking === 1 ? '已点赞':'未点赞'}}
        </template>
      </el-table-column>
       <el-table-column
        prop="like_count"
        label="点赞数量">
      </el-table-column>
       <el-table-column
        prop="pubdate"
        label="评论日期">
      </el-table-column>
       <el-table-column
        prop="reply_count"
        label="回复数量">
      </el-table-column>
    </el-table>
</el-card>
  </div>
</template>

<script>
export default {
  name: 'comment-detail',
  props: {
    articleID: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    loadCommentDetail () {
      this.$axios({
        url: '/comments',
        method: 'get',
        params: {
          type: 'a',
          source: this.articleID
        }
      }).then(res => {
        console.log(res, '获取文章评论详情成功')
        this.tableData = res.data.data.results
      }).catch(err => {
        console.log(err, '获取文章评论详情失败')
      })
    }
  },
  created () {
    this.loadCommentDetail()
  }
}
</script>

<style>

</style>
