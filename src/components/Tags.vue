<template>
<div class="tags">
  <div class="md-example-child md-example-child-tag md-example-child-tag-2">
    <tag size="small" shape="square" font-color="#28AA91" type="ghost">python</tag>
  </div>
<div>
</template>

<script>
import {Tag} from 'mand-mobile'

export default {
  name: 'tag-demo',
  /* DELETE */
  title: '线框',
  titleEnUS: 'Square',
  /* DELETE */
  components: {
    Tag,
  },
}

</script>
<style lang="stylus">
.tags{
  margin-top:30px;
  border:1px solid red;
}
</style>