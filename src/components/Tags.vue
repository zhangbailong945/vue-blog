<template>
  <div class="tag-mytag">
    <md-water-mark
      class="text-container"
      content="loachblog.com"
      spacing="10vw"
      opacity="0.2"
    >
    <div class="md-example-child md-example-child-tag md-example-child-tag-2"
    v-for="(value,key) in tlist"
    :key="key"
    >
      <tag
        size="small"
        shape="square"
        v-bind:font-color="getRandomColor()"
        type="ghost"
      >{{ value.name }}</tag>
    </div>
    </md-water-mark>
  </div>
</template>

<script>
import { WaterMark,Tag } from "mand-mobile";

export default {
  data:function(){
    return {
      tlist:[]
    }
  },
  components: {
    [WaterMark.name]: WaterMark,
    Tag
  },
  methods:{
    getTagList(){
      var url = "/api/api/tags/";
      this.$axios
        .get(url)
        .then(response => {
          this.tlist = response.data;
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    getRandomColor(){
    var r = Math.round(Math.random() * 255), g = Math.round(Math.random() * 255), b = Math.round(Math.random() * 255);
    var color = r << 16 | g << 8 | b;
    return "#" + color.toString(16)
    }
  },
  mounted(){
    this.getTagList()
  }
};
</script>

<style lang="stylus">
.tag-mytag
  margin-top 3px
.md-example-child-tag-2
  margin 5px
  display inline-block;
</style>