<template>
    <md-water-mark
      class="text-container"
      content="loachblog.com"
      spacing="10vw"
      opacity="0.2"
    >
    <article
    v-for="(value,key) in tagList"
    :key="key"
    >
    <header class="post-head">
        <h1 class="post-title">
            {{ value.title }}
        </h1>
        <section class="post-meta">
            <span class='author'>作者:
                <a href="/about/">{{ value.username}}</a>
            </span>
            <span class='author'>分类:
                <a href="/category/9/">{{ value.cname }}</a>
            </span>
            <time class='post-date' datetime='2018年10月15日 14:26' title=''>{{ value.crated_time }}</time>
            <span>阅读:
                <a href="#">{{ value.views }}次</a>
            </span>
        </section>
    </header>
    <section class="post-content">
     <p v-html="value.content"></p>
    </section>
    <footer class="post-footer">
        <div class="post-tag">
            标签：
        </div>
        <div
          class="md-example-child md-example-child-tag md-example-child-tag-2"
          v-for="(value,key) in value.tags"
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
        
        <div
          class="md-example-child md-example-child-tag md-example-child-tag-2"
        >
        <router-link :to="{path:'/tags'}">
          <tag
            size="small"
            shape="square"
            font-color="black"
            type="ghost"
          >更多</tag></router-link>
        </div>
    </footer>
    </article>
    </md-water-mark>
</template>

<script>
import { WaterMark, Tag,Icon} from "mand-mobile";
export default {
    data:function(){
        return {
            tagList:[],
            postObj:{}
        }
    },
    components:{
        [WaterMark.name]: WaterMark,
        [Icon.name]:Icon,
        Tag
    },
    methods:{
       getPostById(){
           var id=this.$route.query.id
           var url = "/api/api/post/?id="+id;
           this.$axios
            .get(url)
            .then(response => {
                this.list = response.data;
                this.tagList=this.list
                if(this.list.length==1){
                    this.postObj=this.list[0]
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
    mounted(){
        this.getPostById()
    }
}
</script>
<style lang="stylus">
.post-meta a:link 
    text-decoration none
    margin-right 2px
.post-footer
    margin-top: 30px;
    border-top: 1px solid #ebebeb;
    padding: 10px 0 0;
    .post-tag
        float:left
        margin-top:5px
        font-size:28px
        line-height:28px 
    .md-example-child-tag-2
        float:left
</style>

