<template>
  <div id="page">
    <ul class="head">
      <li class="person"> + 我的--个人资料</li>
      <li class="nameTop">叶秀青</li>
    </ul>
    <div class="content">
      <div class="contentL">
        <ul>
          <li class="detail">
            <span class="glyphicon glyphicon-user">姓名</span>
            <span class="list">叶秀青</span>
          </li>
          <li class="detail">
            <span class="glyphicon glyphicon-user">姓名</span>
            <span class="list">叶秀青</span>
          </li>
          <li class="detail">
            <span class="glyphicon glyphicon-user">姓名</span>
            <span class="list">叶秀青</span>
          </li>
          <li class="detail">
            <span class="glyphicon glyphicon-user">姓名</span>
            <span class="list">叶秀青</span>
          </li>
          <li class="detail">
            <span class="glyphicon glyphicon-user">姓名</span>
            <span class="list">叶秀青</span>
          </li>
          <li class="detail">
            <span class="glyphicon glyphicon-user">姓名</span>
            <span class="list">叶秀青</span>
          </li>
        </ul>

      </div>
      <div class="contentR">

      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  mounted(){

  }
}
</script>

<style scoped>
#page{
	height: 3.8rem;
	width:4.2rem;
	background: #fff;
	position: absolute;
	top: 1.15rem;
	left: 1.4rem;
  border: .05rem solid #aed7dd;
  padding:0 .07rem;
}
  #page .head{
    height:.5rem;
    border-bottom: .001rem solid #eee;
    line-height:.25rem;
    font-size:.1rem;
    color: #888;
    overflow: hidden;
  }
  #page .person{
    border-bottom: .001rem solid #eee;
  }
  #page .content{
    display: flex;
  }
  #page .contentL{
    position: relative;
    flex:1;
    padding-right:.08rem;
  }

  #page .nameTop{
    height:.25rem;
    border-bottom: .001rem solid #eee;
    color: #aed7dd;
  }
  #page .detail{
    height:.23rem;
    line-height:.23rem;
    border-bottom: .001rem solid #eee;
  }
  #page .detail .glyphicon{
    color: #aed7dd;
  }
  #page .detail .list{
    float: right;
  }
  #page .contentR{
    flex:1;
  }

</style>
