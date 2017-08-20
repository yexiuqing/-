<template>
  <div id="header" class="wrapper">
    <div class="image"></div>
    <span class="name">叶秀青</span>
    <span class="occupation">Web前端工程师</span>
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
    height: 1rem;
    margin-top: .1rem;
    position: relative;

  }
  #header .image{
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    top: .02rem;
    left: 3.5rem;
    margin: 0 auto;
    background: url("../../static/images/user.jpg") no-repeat ;
    background-position: -10px -95px;
    border-radius: 50%;
  }
  #header .name, #header .occupation{
    position: absolute;
    top: 0.85rem;
    left: 3.55rem;
    font-size: .1rem;
    color: #fff;
    font-family: "行楷";

  }
  #header .occupation{
    top: 0.85rem;
    font-size: .1rem;
    left: 3.95rem;
  }
  #header .skill{
    position: absolute;
    top: .11rem;
    left: .2rem;
  }
  #header .skill p{
    font-size: .09rem;
    color: #fff;
  }
</style>
