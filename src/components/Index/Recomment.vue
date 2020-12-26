<template>
  <div class="recommentMain">
    <div class="my-carousel-container">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="/play"><img src="../../assets/logo.png" class="d-block w-100" alt=""></a>
          </div>
          <div class="carousel-item">
            <a href="/play"><img src="../../assets/logo.png" class="d-block w-100" alt=""></a>
          </div>
          <div class="carousel-item">
            <a href="/play"><img src="../../assets/logo.png" class="d-block w-100" alt=""></a>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
<!--          <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
<!--          <span class="carousel-control-next-icon"></span>-->
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div v-for="i in 4" style="margin: 0 auto;">
        <img src="../../assets/logo.png" alt="" class="smallRecomment">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Recomment"
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .recommentMain{
    width: 1000px;
    margin-top: 20px;
    margin-left: 200px;
    margin-bottom: 20px;
  }
  .my-carousel-container{
    display: grid;
    grid-template-columns: 450px 1fr 1fr;
    grid-template-rows: 110px 110px;
    grid-auto-flow: row dense;
  }
  .slide,.w-100{
    width: 420px;
    height: 220px;
    border: 1px solid;
  }
  .slide{
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .smallRecomment{
    width: 200px;
    height: 100px;
    border: 1px solid;

  }
</style>