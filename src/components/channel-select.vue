<template>
  <div class="channelSelect">
       <el-select  placeholder="请选择频道"
        :value='value'
        @input="oninput"
        >
      <el-option :label="channel.name" :value="channel.id" v-for="channel in channels" :key='channel.id'></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'ChannelSelect',
  props: {
    value: {
      type: [String, Number],
      require: true
    }
  },
  data () {
    return {
      channels: []
    }
  },
  created () {
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
    oninput (data) {
      this.$emit('input', data)
    }
  }

}
</script>

<style>

</style>
