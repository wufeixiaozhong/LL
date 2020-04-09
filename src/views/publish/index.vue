<template>
  <div class="publish">
      <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>发布文章</span>
  </div>
<div class="content">
  <el-form ref="form" :model="article" label-width="80px">
  <el-form-item label="标题">
    <el-input v-model="article.title"></el-input>
  </el-form-item>
    <el-form-item label="内容">
    <el-input type="textarea" v-model="article.content"></el-input>
  </el-form-item>
  <el-form-item label="频道">
    <el-select v-model="article.channel_id" placeholder="请选择频道">
      <el-option :label="channel.name" :value="channel.id" v-for="channel in channels" :key='channel.id'></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">发布文章</el-button>
    <el-button>存为草稿</el-button>
  </el-form-item>
</el-form>
</div>
</el-card>
  </div>
</template>

<script>
export default {
  name: 'publish',
  data () {
    return {
      article: {
        title: '', // 文章标题
        content: '', // 文章内容
        cover: { // 封面
          type: '',
          images: []
        },
        channel_id: '' // 文章所属频道id
      },
      channels: [] // 所有频道
    }
  },
  created () {
    // 获取频道列表数据
    this.loadChannels()
  },
  methods: {
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
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>

</style>
