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
            <span class="glyphicon glyphicon-user"></span>
            <span class="list">中共预备党员</span>
          </li>
          <li class="detail">
            <span class="glyphicon glyphicon-data">生日</span>
            <span class="list">1995.01,07</span>
          </li>
          <li class="detail">
            <span class="glyphicon glyphicon-user">学校</span>
            <span class="list">黑龙江大学</span>
          </li>
          <li class="detail">
            <span class="glyphicon glyphicon-user">联系方式</span>
            <span class="list">13104013181</span>
          </li>
          <li class="detail">
            <span class="glyphicon glyphicon-wechat">微信</span>
            <span class="list">1124934298</span>
          </li>
          <li class="detail">
            <span class="glyphicon glyphicon-user">邮件</span>
            <span class="list">xiuqing_ye@126.com</span>

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
  padding:10px 10px;
  height: 3rem;
  /*width:4.2rem;*/
  width:57.5%;
  background: #fff;
  position: absolute;
  top: .3rem;
  left: 1rem;
  border: .05rem solid #aed7dd;
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
