<template>
  <div class="md-example-child md-example-child-scroll-view md-example-child-scroll-view-3">
    <md-scroll-view
      ref="scrollView"
      :scrolling-x="false"
      @endReached="$_onEndReached"
      v-if="showList!==undefined && showList.length>0"
    >
      <div
        v-for="(value,key) in showList"
        :key="key"
        class="scroll-view-list"
      >
        <router-link :to="{ path:'/categorylist',query:{cname:value.name}}"><p class="scroll-view-item">{{ value.name }}</p></router-link>
      </div>
      <md-scroll-view-more
        slot="more"
        :is-finished="isFinished"
      >
      </md-scroll-view-more>
    </md-scroll-view>
    <p class="nolist" v-else><strong>博主太懒，什么也没留下</strong></p>
  </div>
</template>

<script>
import {ScrollView, ScrollViewMore} from 'mand-mobile'

export default {
  name: 'scroll-view-demo-2',
  components: {
    [ScrollView.name]: ScrollView,
    [ScrollViewMore.name]: ScrollViewMore,
  },
  data() {
    return {
      list: [],
      showList:this.getCategoryList(),
      index:5,
      isFinished: false,
    }
  },
  methods: {
    $_onEndReached() {
      if (this.isFinished) {
        return
      }
      // async data
      setTimeout(() => {
        
        var maxLen=this.list.length-1
        
        if(this.index<maxLen)
        {
            this.showList=this.list.slice(0, this.index);
            this.index+=5
        }
        
        if (this.index >= maxLen) {
          this.showList=this.list
          this.isFinished = true
        }
        this.$refs.scrollView.finishLoadMore()
      }, 1000)
    },
    getCategoryList() {
      var url = this.$API_HOST+"category/";
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
    this.getCategoryList();
  }
}

</script>

<style lang="stylus">
.nolist 
  text-align center
.md-example-child-scroll-view-3
  height 800px
  background #FFF
  .scroll-view-item
    padding 30px 0
    text-align center
    font-size 32px
    font-family DINAlternate-Bold
    border-bottom .5px solid #efefef

.md-example-child-scroll-view-3 a:link 
  text-decoration none

</style>