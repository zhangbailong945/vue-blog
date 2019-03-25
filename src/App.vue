<template>
  <div class="md-example-child md-example-child-tabs md-example-child-tab-bar-4">
    <md-tab-bar
      v-model="current"
      :items="items"
      :has-ink="false"
    >
      <template
        slot="item"
        slot-scope="{ item }"
      >
        <div class="custom-item">
          <router-link :to="item.mypath">
          <div class="icon">
            <md-icon :name="item.icon" />
          </div>
          <div class="text">
            <span v-text="item.label"></span>
          </div>
          </router-link>
        </div>
      </template>
    </md-tab-bar>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import { TabBar, Icon } from "mand-mobile";

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
        { name: 1, label: "首页", icon: "home",mypath:"/index"},
        { name: 2, label: "分类", icon: "card-bag",mypath:"/category"},
        { name: 3, label: "标签", icon: "id-card",mypath:"/tags"},
        { name: 4, label: "我的", icon: "user",mypath:"/about"}
      ]
    };
  }
};
</script>

<style lang="stylus">
.md-example-child-tab-bar-4 {
  .custom-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 1;

    .text {
      font-size: 20px;
    }
  }
}

.custom-item a:link{
  text-decoration:none;
}
</style>