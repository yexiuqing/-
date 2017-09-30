<template>
  <div id="header" >
    <div class="image"></div>
    <p class="name">叶秀青</p>
    <p class="occupation">Web前端工程师</p>
    <div class="line"></div>
    <div class="skill">
      <p>1、掌握HTML/CSS/w3c和ES6标准以及HTML语义化，完成较为复杂的布局</p>
      <p>2、掌握原生JavaScript</p>
      <p>3、掌握并熟练使用vue语法以及框架</p>
      <p>4、能够使用PHP语言+mysql语句对数据进行增删改查</p>
      <p>5、具有良好的团队合作性</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>


<style scoped>
  #header{
    height: 3rem;
    width: 18%;
    padding: 0 10px;
    position: relative;
    right:-4.29rem;
    top:.3rem;
    background: rgba(174, 215, 221, 0.79);

  }
  #header .image{
    width: 0.7rem;
    height: 0.8rem;
    border:2px solid #5cb85c;
    margin:30px auto;
    background: url("../../static/images/user.jpg") no-repeat ;
    background-position: -10px -95px;
    border-radius: 50%;
  }
  #header .name{
    position: absolute;
    top: 1.05rem;
    left: 0.25rem;
    font-size: .15rem;
    color: #fff;
    font-family: "行楷";

  }
  #header .occupation {
    position: absolute;
    top: 1.27rem;
    left: 0.16rem;
    color: #888;
    font-size: .09rem;
    font-family: "行楷";
    /*border-bottom: 2px solid #666;*/
  }
  #header .line {
    width:90%;
    /*padding: 0 10px;*/
    border-bottom: 1px solid #eee;
    position: absolute;
    top: 1.45rem;
  }
  #header .skill{
    position: absolute;
    top: 1.55rem;
    /*left: 0.1rem;*/
  }
  #header .skill p{
    font-size: .07rem;
    color: #888;
  }
</style>
