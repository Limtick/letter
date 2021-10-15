<template>
  <div class="loading">
    <h1 :class="[
      'animate__animated',
      {
        animate__rollIn: !ready,
        animate__rollOut: started
      }
    ]">小鸡给小马写信啦</h1>
    <wired-card :class="['loading-card', 'animate__animated', {'animate__fadeOut': started}]" @click="start">{{ loadingText }}</wired-card>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      i: 0,
      ready: false,
      started: false
    }
  },
  computed: {
    loadingText () {
      const dot = '.'
      return this.ready ? '开启' : '加载中' + dot.repeat(this.i % 4)
    }
  },
  methods: {
    updateLoading () {
      this.timer = setInterval(() => {
        this.i++
        if (this.i > 7) {
          clearInterval(this.timer)
          this.ready = true
        }
      }, 300)
    },
    start () {
      if (this.ready) {
        this.started = true
        this.$parent.play()
        setTimeout(() => {
          this.$router.push({
            name: 'Letter'
          })
        }, 1000)
      }
    }
  },
  mounted () {
    this.updateLoading()
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 600;
    margin-bottom: 20px;
  }
  .loading-card {
    width: 160px;
    text-align: center;
  }
}
</style>
