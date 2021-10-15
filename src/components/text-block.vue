<template>
  <div class="text-block">
    <template v-for="(item, i) in parseText">
      <span v-if="item.type === 'text'" :key="i">{{ item.val }}</span>
      <img v-else :key="i" :src="item.val" class="img">
    </template>
  </div>
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    text: String
  },
  data () {
    return {
      imgs: {
        j: '/letter/img/01.jpg',
        m: '/letter/img/02.jpg',
        g: '/letter/img/03.png'
      }
    }
  },
  computed: {
    parseText () {
      return [...this.text].map(t => {
        if (this.imgs[t]) {
          return {
            type: 'img',
            val: this.imgs[t]
          }
        }
        return {
          type: 'text',
          val: t
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.text-block {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  padding: 10px 20px;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 16px;
  background: rgb(251, 217, 245, .8);
  box-shadow: rgb(47, 47, 47, .1) 0px 2px 5px 0px;
  span {
    font-size: 16px;
    line-height: 36px;
  }
  .img {
    height: 36px;
    border-radius: 6px;
    margin: 0 6px;
    transform: translateY(6px);
  }
}
</style>
