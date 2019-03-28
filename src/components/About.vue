<template>
  <div class="about">
    <md-water-mark
      class="text-container"
      content="loachblog.com"
      spacing="10vw"
      opacity="0.2"
    >
    <blockquote>
      <p>关于我</p>
    </blockquote>
    <div class="head-img">
      <img
        src="../assets/logo.png"
        alt="loach"
      />
    </div>
    <blockquote>
      <p>座右铭</p>
    </blockquote>
    <article>有志者,事竟成;苦心人,天不负.</article>
    <blockquote>
      <p>个人技能</p>
    </blockquote>
    <pre>
    <code class="language-json">
      {
    &quot;Name&quot;:&quot;loach&quot;,
    &quot;Location&quot;:&quot;ZhuHai&quot;,
    &quot;Skills&quot;:{
        &quot;Design&quot;:[&quot;Photoshop&quot;,&quot;Css&quot;,&quot;Js&quot;,&quot;Jquery&quot;],
        &quot;Programming&quot;:[&quot;java&quot;,&quot;php&quot;,&quot;Python&quot;],
        &quot;Language&quot;:[&quot;Chinese&quot;],
    },
    &quot;Hobby&quot;:[&quot;Music&quot;,&quot;DIY&quot;,&quot;LOL&quot;,&quot;PUBG&quot;]
}</code>
  </pre>
    <blockquote>
      <p>网站坏境</p>
    </blockquote>
    <pre>
    <code class="language-json">{
    &quot;Server&quot;:&quot;Tencent Cloud&quot;,
    &quot;System&quot;:&quot;Centos7.4 64bit&quot;,
    &quot;Program Language&quot;:&quot;Vue&quot;,
    &quot;Http Server&quot;:&quot;Gunicorn-19.7.1&quot;,
    &quot;Proxy Server&quot;:&quot;Nginx-1.13.9&quot;,
    &quot;Developer&quot;:&quot;Loach&quot;
}</code>
  </pre>
  </md-water-mark>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="stylus">
.about
  width auto
  height auto
.about blockquote
  margin 0 0 1.64em 0
  border-left 3px solid #e67e22
  padding-left 12px
  color #666664
.head-img
  width auto
  height auto
  margin 5px
  text-align center
.head-img img
  width 64px
  height 64px
article
  text-align center
.about pre
  margin 1.64em 0
  padding 7px
  border none
  border-left 3px solid #dadada
  padding-left 10px
  overflow auto
  line-height 1.5
  font-size 0.96em
  font-family Menlo, Monaco, Consolas, 'Courier New', monospace
  color #4c4c4c
  background-color #f9f9f7
</style>



