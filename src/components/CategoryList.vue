<template>
  <div>
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
          class="index-list"
          v-for="(value,key) in showList"
          :key="key"
        >
          <h3><router-link :to="{ path:'/post',query:{id:value.id}}">{{ value.title }}</router-link></h3>
          <div class="index-list-post">
            <router-link :to="{ path:'/post',query:{id:value.id}}"><img v-bind:src="value.post_img" /></router-link>
            <div class="index-list-content">
              <p v-html="value.excerpt"></p>......[<router-link :to="{ path:'/post',query:{id:value.id}}">详情</router-link>]
            </div>
          </div>
          <div class="index-list-footer">
            <span><router-link :to="{ path:'/categorylist',query:{cname:value.cname}}">{{ value.cname }}</router-link></span>
            <span>{{ value.created_time }}</span>
            <span>浏览 {{ value.views }}</span>
          </div>
        </div>
        <md-scroll-view-more
          slot="more"
          :is-finished="isFinished"
        >
        </md-scroll-view-more>
      </md-scroll-view>
    </md-water-mark>
    <p class="nolist" v-else><strong>没有找到 <font color='red'>{{ this.$route.query.cname }} </font>相关笔记!</strong></p>
  </div>
</template>
<script>
import { ScrollView, ScrollViewMore } from "mand-mobile";

export default {
  data: function() {
    return {
      list:this.getPostList(),
      showList:this.getPostList(),
      index:5,
      isFinished: false
    };
  },
  components: {
    [ScrollView.name]: ScrollView,
    [ScrollViewMore.name]: ScrollViewMore
  },
  methods: {
    $_onEndReached() {
      if (this.isFinished) {
        return;
      }
      // async data
      setTimeout(() => {
        var maxLen = this.list.length;
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
    getPostList() {
      var cname=this.$route.query.cname
      var url = "/api/api/post/?category__name="+cname;
      this.$axios
        .get(url)
        .then(response => {
          this.list = response.data;
          if(this.index<this.list.length-1)
          {
              this.showList=this.list.slice(0,this.index)
          }
          else{
            this.showList=this.list
          }
        })
        .catch(error => {
          window.console.log(error);
        });
    }
  },
  mounted() {
    this.getPostList();
  }
};
</script>
<style lang="stylus">
.nolist
  text-align center
.index-list
  margin-top 2px
  width auto
.index-list h3
  height 20px
  line-height 20px
  font-weight bold
  font-size 14px
  text-align center
  margin-bottom 3px
.index-list h3 a
  color #388fec
.index-list h3 a:link
  text-decoration none
.index-list-post
  overflow hidden
.index-list-post img
  float left
  width 90px
  height 70px
  vertical-align middle
  margin-right 2px
.index-list-post .index-list-content
  height 60px
  width auto
  line-height 16px
  font-size 12px
  text-indent 2em
  margin-bottom 2px
.index-list-content a
  color #5c5b58
.index-list-content a:link
  text-decoration none
.index-list-footer
  float left
  font-size 12px
  height 14px
  line-height 14px
.index-list-footer a
  color #5c5b58
.index-list-footer span
  float left
  font-size 12px
  height 14px
  line-height 14px
  margin-right 4px
</style>