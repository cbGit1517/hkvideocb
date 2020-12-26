<template>
	<div>
		<div class="up-container">
		<form role="form" id="uploadvideo" enctype="multipart/form-data">
			<div class="form-group">
			    <label for="title">视频标题</label>
			    <input type="text" class="form-control" id="title" v-model="title">
			 </div>
			<div class="form-group">
			    <label for="type">视频类型</label>
			    <select class="form-control" id="type" v-model="type">
			      <option value="guichu">鬼畜</option>
			      <option value="magic">科幻</option>
			      <option value="fun">搞笑</option>
			      <option value="normal">日常</option>
			      <option value="food">美食</option>
			    </select>
			</div>
			<div class="form-group">
			    <label for="description">视频介绍</label>
			    <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
			 </div>
			<div class="form-group">
				<label for="video">请添加你要上传的视频</label>
				<input type="file" class="form-control-file" id="video" ref="getFile">
			</div>
		</form>
		<div class="form-group" align="center">
			<button @click="send" type="submit" class="btn btn-light" style="background-color: #2D93CA; width: 200px;">上&nbsp;&nbsp;&nbsp;&nbsp;传</button>
		</div>
	</div>
	</div>

</template>

<script>
    import axios from 'axios'

    import uploadService from "../../service/uploadService";
	export default{
	    name: "Up",
		data: () =>({
            valid: false,
            isEditing: false,
            notCompleted: false,
            name: '',
            type: '',
            description: '',
            title: ''
		}),
        methods:{
            send(){
                var _this = this
                var formdata=new window.FormData()
                formdata.append('name',_this.title)
                formdata.append('type',_this.type)
                formdata.append('description',_this.description)
                formdata.append('file',document.getElementById("video").files[0])
                formdata.append('userId',12)
                axios({
                    method:'post',
                    url:"http://127.0.0.1:8012/video/addVideo",
                    contentType:'multipart/form-data',
                    data:formdata
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
