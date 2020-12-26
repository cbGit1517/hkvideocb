<template>
	<div>
		<p class="videoTitle">title</p>
		<p class="videoAbout">
			test
		</p>
		<video width="800" height="500" controls="controls" autoplay="autoplay" style="margin-bottom: 0">
			<source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
		</video>
    <div class="videoSendBar">
      <div class="videoInfo">
        <p>0条弹幕</p>
        <p></p>
      </div>
      <div>
        <input type="text" class="sendDanmuText" v-model="danmu">
        <button @click="sendDanmu" class="sendDanmuBtn">发送</button>
      </div>
    </div>
    <div style="padding-top: 20px">

      <span style="margin-right: 100px">
        <i class="fa fa-thumbs-up fa-2x"
           title="点赞"
           v-bind:class="{'choose':like,'unchoose':unlike}" @click="change1"></i>
        0
      </span>
      <span>
         <i class="fa fa-star fa-2x"
            title="收藏"
            v-bind:class="{'choose':collect,'unchoose':uncollect}" @click="change2"></i>
        0
      </span>

    </div>
	</div>
</template>

<script>
  export default {
    data(){
      return{
        danmu:"",
        like:false,
        unlike:true,
        collect:false,
        uncollect:true
      }
    },
    methods:{
      sendDanmu(){

      },
      change1(){
        this.like=!this.like
        this.unlike=!this.unlike
      },
      change2(){
        this.collect=!this.collect
        this.uncollect=!this.uncollect
      }
    }
  }
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	.videoTitle{
		font-size: 18px;
		margin-bottom: 5px;
	}
	.videoAbout{
		font-size: 12px;
		margin-bottom: 5px;
		margin-top: 0;
	}
  .videoSendBar{
    display: grid;
    grid-template-columns: 200px 1fr;
    height: 50px;
    background: wheat;
    margin-top: 0;
    line-height: 50px;
    padding-left: 50px;
  }
  .sendDanmuText{
    height: 25px;
    width: 200px;
    margin: 12px auto;
    float: left
  }
  .sendDanmuBtn{
    height: 25px;
    width: 60px;
    margin: 12px auto;
    font-size: 12px;
    line-height: 25px;
    background: dodgerblue;
  }
  .choose{
    color: #48B3F5;
  }
  .unchoose{
    color: gray;
  }
  .fa-star:hover,.fa-thumbs-up:hover{
    color: #48B3F5;
  }

</style>
