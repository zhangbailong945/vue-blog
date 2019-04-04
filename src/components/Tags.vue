<template>
  <div class="tag-mytag">
    <md-water-mark
      class="text-container"
      content="loachblog.com"
      spacing="10vw"
      opacity="0.2"
      v-if="showList!==undefined && showList.length>0"
    >
      <md-scroll-view
        ref="scrollView"
        :scrolling-x="false"
        @endReached="$_onEndReached"
      >
        <div
          class="md-example-child md-example-child-tag md-example-child-tag-2"
          v-for="(value,key) in showList"
          :key="key"
        >
          <router-link :to="{path:'/taglist',query:{tname:value.name}}">
          <tag
            size="small"
            shape="square"
            v-bind:font-color="getRandomColor()"
            type="ghost"
          >{{ value.name }}</tag>
          </router-link>
        </div>
        <md-scroll-view-more
          slot="more"
          :is-finished="isFinished"
        >
        </md-scroll-view-more>
      </md-scroll-view>
    </md-water-mark>
    <p class="nolist" v-else><strong>博主太懒，什么也没留下！</strong></p>
  </div>
</template>

<script>
import { WaterMark, Tag, ScrollView, ScrollViewMore } from "mand-mobile";

export default {
  data: function() {
    return {
      list:[],
      showList:this.getTagList(),
      index: 40,
      isFinished: false
    };
  },
  components: {
    [WaterMark.name]: WaterMark,
    [ScrollView.name]: ScrollView,
    [ScrollViewMore.name]: ScrollViewMore,
    Tag
  },
  methods: {
    $_onEndReached() {
      if (this.isFinished) {
        return;
      }
      // async data
      setTimeout(() => {
        var maxLen = this.list.length - 1;

        if (this.index < maxLen) {
          this.showList = this.list.slice(0, this.index);
          this.index += 5;
        }

        if (this.index >= maxLen) {
          this.showList = this.list;
          this.isFinished = true;
        }
        this.$refs.scrollView.finishLoadMore();
      }, 1000);
    },
    getTagList() {
      var url = this.$API_HOST+"tags/";
      this.$axios
        .get(url)
        .then(response => {
          this.list = response.data;
          if (this.index < this.list.length - 1) {
            this.showList = this.list.slice(0, this.index);
          } else {
            this.showList = this.list;
          }
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    getRandomColor() {
      var r = Math.round(Math.random() * 255),
        g = Math.round(Math.random() * 255),
        b = Math.round(Math.random() * 255);
      var color = (r << 16) | (g << 8) | b;
      return "#" + color.toString(16);
    }
  },
  mounted() {
    this.getTagList();
  }
};
</script>

<style lang="stylus">
.tag-mytag
  margin-top 3px
.md-example-child-tag-2
  margin 5px
  display inline-block
</style>