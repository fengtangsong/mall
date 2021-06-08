<template>
<div class="root">
  <div class="tabbar">
    <span>首页</span>
    <span>我的</span>

  </div>

</div>
</template>

<script>
export default {
name: "home"
}
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
.tabbar {
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: pink;
  display: flex;
  justify-content: space-around;
  line-height: 50px;
}
</style>