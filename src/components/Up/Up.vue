<template>
	<div>
		<div class="up-container">
		<form>
			<div class="form-group">
			    <label for="exampleFormControlInput1">视频标题</label>
			    <input type="text" class="form-control" id="exampleFormControlInput1" v-model="title">
			 </div>
			<div class="form-group">
			    <label for="exampleFormControlSelect1">视频类型</label>
			    <select class="form-control" id="exampleFormControlSelect1" v-model="type">
			      <option>鬼畜2</option>
			      <option>科幻</option>
			      <option>搞笑</option>
			      <option>日常</option>
			      <option>美食</option>
			    </select>
			</div>
			<div class="form-group">
			    <label for="exampleFormControlTextarea1">视频介绍</label>
			    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="description"></textarea>
			 </div>
			<div class="form-group">
				<label for="exampleFormControlFile1">请添加你要上传的视频</label>
				<input type="file" class="form-control-file" id="exampleFormControlFile1" ref="getFile">
			</div>
		</form>
		<div class="form-group" align="center">
			<button @click="send" class="btn btn-light" style="background-color: #2D93CA; width: 200px;">上&nbsp;&nbsp;&nbsp;&nbsp;传</button>
		</div>
	</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				title:"",
				type:"",
				description:"",
				video:"",
			}
		},
		methods:{
			send(){
				var _this = this
				// console.log(document.getElementById("exampleFormControlSelect1").selectedIndex)
				console.log(this.$refs.getFile.files[0])
				console
				this.$axios({
					url:"",
					methods:'post',
					params:{
						title:_this.title,
						type:document.getElementById("exampleFormControlSelect1"),
						description:_this.description,
						video:_this.$refs.getFile.files[0]
					}
				}).then(response=>{
					alert("上传成功")
				}).catch(error=>{
					// console.log(this.params.video)
					alert("上传失败")
				})
			}
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.up-container{
		display: grid;
		margin: 0 auto;
		place-items: center;
	}
	.form-group{
		padding: 12px;
		width: 400px;
	}
</style>
