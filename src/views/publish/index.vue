<template>
  <div class="publish">
      <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>{{$route.params.articleID ? '编辑文章' : '发布文章'}}</span>
  </div>
<div class="content">
  <el-form ref="form" :model="article" label-width="80px">
  <el-form-item label="标题">
    <el-input v-model="article.title"></el-input>
  </el-form-item>
    <el-form-item label="内容">
    <quill-editor
    ref="myQuillEditor"
    v-model="article.content"
  />
  </el-form-item>
  <el-form-item label="频道">
   <channel-select v-model="article.channel_id"></channel-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit(false)">发布文章</el-button>
    <el-button @click="onSubmit(true)">存为草稿</el-button>
  </el-form-item>
</el-form>
</div>
</el-card>
  </div>
</template>

<script>
// 引入富文本编辑器样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 引入富文本编辑器核心组件
import { quillEditor } from 'vue-quill-editor'
import ChannelSelect from '../../components/channel-select'
export default {
  name: 'publish',
  components: {
    quillEditor,
    ChannelSelect
  },
  data () {
    return {
      article: {
        title: '', // 文章标题
        content: '', // 文章内容
        cover: { // 封面
          type: 0,
          images: []
        },
        channel_id: '' // 文章所属频道id
      }
    }
  },
  created () {
    if (this.$route.params.articleID) {
      this.loadArticle()
    }
  },
  methods: {
    onSubmit (draft) {
      if (this.$route.params.articleID) {
        this.updataArticle(draft)
      } else {
        this.addArticle(draft)
      }
    },
    // 添加文章
    addArticle (draft) {
      this.$axios({
        method: 'post',
        url: '/articles',
        params: {
          draft
        },
        data: this.article
      }).then(res => {
        console.log(res, '发布成功')
        this.$router.push('/article')
      }).catch(err => {
        console.log(err, '发布失败')
      })
    },
    // 编辑文章
    updataArticle (draft) {
      this.$axios({
        url: '/articles/' + this.$route.params.articleID,
        method: 'PUT',
        data: this.article
      }).then(res => {
        console.log(res, '编辑文章成功')
        this.$message({
          type: 'success',
          message: '更新成功'
        })
        this.$router.push('/article')
      }).catch(err => {
        console.log(err, '编辑文章失败')
        this.$message({
          type: 'error',
          message: '更新失败'
        })
      })
    },
    // 获取指定文章
    loadArticle () {
      this.$axios({
        url: '/articles/' + this.$route.params.articleID,
        method: 'get'
      }).then(res => {
        console.log(res, '获取指定文章成功')
        this.article = res.data.data
      }).catch(err => {
        console.log(err, '获取指定文章失败')
      })
    }
  }
}
</script>

<style>

</style>
