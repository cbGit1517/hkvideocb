<template>
  <div>
    <p style="font-size: 18px">10条评论</p>
    <hr>
    <div class="sendComment">
      <div class="li-comment-img">
        <img src="../../assets/logo.png" alt="Cinque Terre" class="img-circle" width="48" height="48">
      </div>
      <div class="sendCommentContainer">
        <textarea class="form-control commentArea" autosize v-model="myComment"
                  style="width: 600px;height: 80px;">
        </textarea>
        <div></div>
        <button @click="sendComment" class="btn btn-primary commentBtn"
                style="height: 80px; height: 80px;">发表评论</button>
      </div>

    </div>
    <ul class="ul-comment">
      <li v-for="i in 10" class="li-comment">
        <div class="li-comment-container">
          <div class="li-comment-img">
            <img src="../../assets/logo.png" alt="Cinque Terre" class="img-circle" width="48" height="48">
          </div>
          <div class="li-comment-div">
            <p class="li-comment-div-p1">这是用户名</p>
            <p class="li-comment-content">这是一条评论这是一条评论这是一条评论这是一条评论
              这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论
              这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论
              这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论
              这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论
            </p>
            <p class="li-comment-about">2020-12-25</p>
            <hr>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        myComment:""
      }
    },
    methods:{
      sendComment(){

      }
    }
  }
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
  .li-comment-container,.sendComment{
    display: grid;
    grid-template-columns: 100px 1fr;
    width: 800px;
    margin-top: 20px;
  }
  .sendCommentContainer{
    display: grid;
    grid-template-columns: 600px 20px 1fr;
    width: 700px;
  }
	.li-comment-div-p1{
		font-size: 14px;
	}
	.li-comment{
		list-style: none;
		width: 800px;
		/* background: #8FD19E; */
		line-height: normal;
	}
	/*.li-comment-div{*/
	/*	float: left;*/
	/*}*/
	.li-comment-content{
		font-size: 18px;
	}
	.li-comment-about{
		font-size: 12px;
	}
</style>
