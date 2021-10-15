<template>
  <div class="wrap">
    <router-view></router-view>
    <canvas ref="snow" class="snow"></canvas>
    <audio ref="music" src="/letter/02.mp3" preload loop></audio>
    <div class="bg">
      <img class="rainbow" src="/letter/img/rainbow.png" alt="">
    </div>
  </div>
</template>

<script>
import { snow } from './util/snow'
export default {
  name: 'App',
  methods: {
    init () {
      snow(this.$refs.snow)
    },
    play () {
      this.$nextTick(() => {
        this.$refs.music.play()
      })
    },
    pause () {
      this.$nextTick(() => {
        this.$refs.music.pause()
      })
    },
    load () {
      this.$nextTick(() => {
        this.$refs.music.load()
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
}
.bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  .sun {
    position: absolute;
    top: 0;
    left: -30px;
  }
  .rainbow {
    width: 100%;
    position: absolute;
    bottom: 0;
    right: -100px;
    transform: rotate(-15deg);
    opacity: 0.6;
  }
}
.snow {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -2;
}
</style>
