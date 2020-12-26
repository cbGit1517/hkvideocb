<template>

  <div>
    <Recomment></Recomment>
    <ul>
      <li v-for="list in lists">
        <List :type="list"></List>
      </li>
    </ul>

  </div>
</template>

<script>
import Recomment from "../components/Index/Recomment";
import List from "../components/Index/List";
export default {
  name: "Index",
  components:{
    Recomment,
    List
  },
  data(){
    return{
      lists: ["鬼畜","科幻","日常","搞笑","美食"]
    }
  }

}
</script>

<style>

</style>