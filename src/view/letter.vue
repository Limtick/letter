<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div v-show="show" class="letter">
      <!-- :style="{ 'animation-delay': `${i * 0.25}s` }" -->
      <TextBlock
        v-for="(content, i) in contents"
        :key="i"
        :text="content"
        class="ani fade-up"
        :style="end ? { 'animation-delay': `${i * 1}s` } : ''"
      ></TextBlock>
      <div v-if="!end" class="choose">
        <wired-fab class="pink" @click="happy">
          <mwc-icon>favorite</mwc-icon>
        </wired-fab>
        <wired-fab @click="tryAgain">
          <mwc-icon>close</mwc-icon>
        </wired-fab>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Letter',
  data () {
    return {
      show: false,
      end: false,
      contents: [
        '2021年4月3日，j遇到m啦',
        'j初次与m聊天，就感觉到m有一点特别：m真的好专心好认真，记得j当时提到了自己新买的显示器，m表示想看一看，j感到有一点意外，但是很开心~😊',
        '之后j开始给m科普分辨率（现在看，难以想象的话题🤔），好在m并不是特别反感，j算是逃过一劫吧🙄',
        'm好忙的，工作之余还要备考，j觉得自己还是不要每天打扰m啦（然后j也开始加班啦~噗）',
        'j心想，能够一直在首都漂泊的人，一定都有自己的那份坚持吧，愿m在逐梦的路上越走越顺利吧~🎉🎉，j也想有朝一日能和m一起逐梦呢',
        '时间总是在不经意间流逝，一转眼，将近半年的时间就过去啦。j看到了考试延期的消息，尝试安慰一下m。得知m并不是特别泄气，j暗暗松了口气，加油呀🙏',
        '国庆节g，j与m终于见面啦。m比j想象中的还要漂亮好多，j很开心😄（j问m穿裙子不怕湿吗？现在回想真的想给j挖个坑儿埋了）',
        'j与m聊天非常开心，j感觉自己的❤️在慢慢的被m填满。j知道，自己一直在等待的那个她，现在就在眼前😊。j也想自己能够慢慢的填满m的❤️（🐸与🦢，得加倍努力呀）',
        'j与m的故事就先说这么多吧，j有一些话想要对m说：',
        '每次和你微信聊天，我都🉑开心了。"对方正在输入..."，每次看到这几个字的时候，我都特别期待😄。听到手机响，我会想是不是你的信息（然后看到是个新闻推送🙄）',
        '你喜欢看综艺，喜欢追剧。特别是喜剧，带有家庭氛围的剧。你喜欢尝试新鲜事物，仿佛对一切都抱有极大的好奇心；你不怕探索未知领域🌌，敢于接受挑战，非常有担当',
        '你独立且自律，做事认真，对事情特别负责。你对事物保持专注，但也不失温柔可爱',
        '你还喜欢看书，喜欢慢节奏的生活。在现在这样一个快节奏的社会里，你就像一朵孤独绽放的花🌼，灿烂但不引人注意',
        '在茫茫的人海中，我能遇到这样的你，实属是我最大的幸运。这样的你，我真的好喜欢好喜欢💘💘💘',
        '我想和你一起培养更多的兴趣和爱好，我想和你有说不完的话，我想和你一起看日出🌅，一起游遍祖国的大好河山...',
        '我知道自己也有缺点：有点呆、有点无趣、嘴笨、生活技能欠缺、也不太会照顾人。我也有可能在一秒内把局面僵化（上次你和爸妈一起在晚上送货那次，你开心的和我分享，然后我两句就把话题引导到了一个伤感的方向。是我不对🤐，现在回想起来，我应该夸你懂事，和你聊聊夜景，聊聊衣服）',
        '你和这样的我相处，有可能会抓狂。我知道，自己得变得更成熟起来，要多照顾你的情绪，不能给你增添烦恼，不能让你有一种照顾小盆友的感觉。我需要成为你的帮手而不是负担。如果觉得我哪里做的不好，直接提出来就好啦'
      ]
    }
  },
  methods: {
    happy () {
      this.ending(
        [
          '我真是太开心啦~~啦啦啦',
          '借用你喜欢的话来结尾',
          '我余生的故事里',
          '字里行间都是你',
          '一笔一划都潇洒至极',
          '...',
          '潇洒放一边，字迹还可能会有潦草',
          '不管怎样，我会及时纠正，一定要给你稳稳的幸福❤️'
        ]
      )
    },
    tryAgain () {
      this.ending(
        [
          '呜呜呜~~',
          '也许现在的我还不能达到你的要求',
          '但是我不想放弃',
          '希望你可以给我一些建议',
          '我想变得更好💪'
        ]
      )
    },
    ending (content) {
      this.end = true
      this.contents = []
      this.$nextTick(() => {
        this.contents = content
      })
    }
  },
  mounted () {
    this.show = true
  },
  beforeRouteLeave (to, from, next) {
    this.$parent.load()
    next()
  }
}
</script>

<style lang="scss" scoped>
.letter {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
}
.choose {
  display: flex;
  justify-content: space-around;
}
.pink {
  color: red;
  --wired-fab-bg-color: rgba(255, 255, 255, .8);
}
</style>
