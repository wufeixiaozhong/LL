<template>
  <div class="comment">
     <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>评论管理</span>
  </div>
  <div class="commentTable">
     <el-table
      :data="comments"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="360"
        >
      </el-table-column>
      <el-table-column
        prop="comment_status"
        label="评论状态"
        width="180">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.comment_status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="onCommentStatusChange(scope.row)"
            >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        prop="total_comment_count"
        label="总评论数">
      </el-table-column>
       <el-table-column
        prop="fans_comment_count"
        label="粉丝评论数">
      </el-table-column>
       <el-table-column
        prop=""
        label="操作">
        <template>
          <el-button type="primary">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</el-card>
  </div>
</template>

<script>
export default {
  name: 'commentIndex',
  data () {
    return {
      comments: [] // 评论数据
    }
  },
  created () {
    this.loadComments()
  },
  methods: {
    loadComments () {
      this.$axios({
        url: '/articles',
        method: 'get',
        params: {
          response_type: 'comment'
        }
      }).then(res => {
        console.log(res, '获取评论列表成功')
        this.comments = res.data.data.results
      }).catch(err => {
        console.log(err, '获取评论列表失败')
      })
    },
    // 修改评论状态
    onCommentStatusChange (comment) {
      this.$axios({
        url: '/comments/status',
        method: 'PUT',
        params: {
          article_id: comment.id.toString()
        },
        data: {
          allow_comment: comment.comment_status
        }
      }).then(res => {
        this.$message({
          type: 'success',
          message: `${comment.comment_status ? '启用' : '禁用'}成功`
        })
      }).catch(err => {
        this.$message({
          type: 'error',
          message: '操作失败'
        })
        console.log(err)
      })
    }
  }

}
</script>

<style>

</style>
