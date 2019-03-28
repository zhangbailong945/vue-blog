<template>
  <div>
    <md-water-mark
      class="text-container"
      content="loachblog.com"
      spacing="10vw"
      opacity="0.2"
    >
      <div
        class="index-list"
        v-for="(value,key) in plist"
        :key="key"
      >
        <h3><a href="#">{{ value.title }}</a></h3>
        <div class="index-list-post">
          <a href="#"><img src="../assets/logo.png" /></a>
          <div class="index-list-content">
            召开了14年秋季拍立得新品发布会，发布了两款全新的拍立得新品及五款特别款新品
            召开了14年秋季拍立得新品发布会，发布了两款全新的拍款全新的拍全新的拍新的拍
            的拍......[<a href="#">详情</a>]
          </div>
        </div>
        <div class="index-list-footer">
          <span>python</span>
          <span>2019-3-26 11:42:59</span>
          <span>浏览1888</span>
          <span>评论1888</span>
        </div>
      </div>
    </md-water-mark>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      plist: []
    };
  },
  methods: {
    getPostList() {
      var url = "/api/api/post/";
      this.$axios
        .get(url)
        .then(response => {
          this.plist = response.data;
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
  border 1px solid red
  vertical-align middle
  margin-right 2px
.index-list-post .index-list-content
  height 60px
  width auto
  line-height 12px
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