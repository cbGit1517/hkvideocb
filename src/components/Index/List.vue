<template>
  <div>
    <p style="margin-left: 200px">{{type}}</p>
    <div class="videoList">
      <div v-for="i in 8">
        <img src="../../assets/logo.png" alt="" class="videoListImg">
        <p style="font-size: 12px">这是一个视频标题</p>
      </div>

      <hr>
      <hr>
      <hr>
      <hr>
    </div>
  </div>

</template>

<script>
export default {
  name: "List",
  props:["type"]
}
</script>

<style scoped>
  .videoList{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 120px 120px;
    margin-left: 200px;
    margin-top: 20px;
    width: 1000px;
  }
  .videoListImg{
    width: 200px;
    height: 100px;
    border: 1px solid;
  }
</style>