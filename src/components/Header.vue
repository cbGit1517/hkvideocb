<template>
	<nav class="navbar navbar-expand-lg navbar-light" style="background-color:#48B3F5">
	  <a class="navbar-brand" href="#">Navbar</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNavDropdown">
	    <ul class="navbar-nav">
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	      </li>
	      <li class="nav-item dropdown">
	        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          Dropdown link
	        </a>
	        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	          <a class="dropdown-item" href="#">Action</a>
	          <a class="dropdown-item" href="#">Another action</a>
	          <a class="dropdown-item" href="#">Something else here</a>
	        </div>
	      </li>
	    </ul>
		<form class="form-inline" style="margin:auto; margin-left: 200px;">
		    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
		    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form>
		<ul class="nav navbar-nav navbar-right" style="margin-right: 100px;">
      <li class="nav-item active" v-if="!isLogin">
        <a class="nav-link" href="/login">登录<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active" v-if="!isLogin">
        <a class="nav-link" href="/register">注册<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown" v-if="isLogin">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2"
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="../assets/logo.png" style="width: 30px;height: 30px">
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/person">个人中心</a>
          <a class="dropdown-item" href="#">我的收藏</a>
          <a class="dropdown-item" href="#">历史记录</a>
          <a class="dropdown-item" href="" @click="logout">退出登录</a>

        </div>
      </li>

		</ul>
	  </div>
	</nav>
</template>

<script>
export default {
  data(){
    return {
      isLogin:false
    }
  },
  created() {
    let _this = this
    // this.$session.set("id",1)
    let id = this.$session.get("id")
    console.log(id)
    if(id!=null){
      this.isLogin=true
    }
  },
  methods:{
    logout(){
      this.$session.remove("id")
      this.isLogin=false
    }
  }
}
</script>

<style>
	
</style>
