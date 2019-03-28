<template>
  <div class="md-example-child md-example-child-tabs md-example-child-tab-bar-4">
    <md-tab-bar
      v-model="current"
      :items="items"
      :has-ink="false"
      :maxLength="5"
      @change="changedMenu"
    >
      <template
        slot="item"
        slot-scope="{ item }"
      >
        
          <div class="custom-item">
            
            <div class="icon">
              <md-icon
                :name="item.icon"
                size="sm"
              />
            </div>
            <div class="text">
              
              <span v-text="item.label"></span>
              
            </div>
            
          </div>
        
      </template>
    </md-tab-bar>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import { TabBar, Icon, Toast } from "mand-mobile";
import { close } from 'fs';

export default {
  name: "tab-bar-demo",
  components: {
    [TabBar.name]: TabBar,
    [Icon.name]: Icon
  },
  data() {
    return {
      current: 1,
      items: [
        { name: 1, label: "首页", icon: "home", mypath: "/index" },
        { name: 2, label: "分类", icon: "card-bag", mypath: "/category" },
        { name: 3, label: "标签", icon: "id-card", mypath: "/tags" },
        { name: 4, label: "我的", icon: "user", mypath: "/about" }
      ]
    }
  },
  methods:{
    changedMenu(item,index,prevIndex){
      switch(index){
        case 0:
          this.$router.push({path:'/index'})
          break
        case 1:
          this.$router.push({path:'/category'})
          break
        case 2:
          this.$router.push({path:'/tags'})
          break
        case 3:
          this.$router.push({path:'/about'})
          break
      }
    }
  }
};
</script>

<style lang="stylus">
.md-example-child-tab-bar-4
  .custom-item
    display flex
    flex-direction column
    align-items center
    justify-content center
    height 100%
    flex 1
    .text
      font-size 14px
.custom-item a:link
  text-decoration none
</style>