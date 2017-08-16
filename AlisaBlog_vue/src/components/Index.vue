<template>
  <div class="page">
    <div id="content">
            <div class="wrap">
                <div class="left-menu">
                    <div class="blog-title">
                        博客分类
                    </div>
                    <ul class="blog-classify">
                        <li><a href="">心情</a></li>
                        <li><a href="">教程</a></li>
                        <li><a href="">旅行</a></li>
                        <li><a href="">美食</a></li>
                    </ul>
                    <div class="about-blogger">
                        关于博主
                    </div>
                    <img src="static/images/blogger.jpg" alt="" class="blogger-photo">
                    <ul class="blogger-detail">
                        <li>姓名：Alisa</li>
                        <li>出生日期：1995-10-13</li>
                        <li>星座：天秤座</li>
                        <li>新居城市：哈尔滨</li>
                        <li>职业：程序媛</li>
                        <li>爱好：美食、旅行、写代码</li>
                    </ul>
                    <ul class="blog-link">
                        <li><img src="static/images/weichat.png" alt=""></li>
                        <li><img src="static/images/QQ.png" alt=""></li>
                        <li><img src="static/images/weibo.png" alt=""></li>
                        <li><img src="static/images/cell-phone.png" alt=""></li>
                        <li><img src="static/images/email.png" alt=""></li>
                    </ul>
                </div>
                <div>
                    <div class="right-content" v-for="elem in blogData">
                    <h2 class="article-title">{{elem.title}}</h2>
                    <span>发布日期：{{elem.date}}</span>
                    <span>分类：{{elem.classify}}</span>
                     <!--  <div class="article-img"><img src="static/images/shenxiang.jpg" alt="" ></div> -->
                     <div class="article-img"><img :src='"static/"+elem.image' alt="" ></div>
                    <p>{{elem.titleContent}}</p>
                </div>

                <!-- <div class="loading" v-show="show">
                    <span><img src="static/images/more.gif"></span>
                </div> -->
            </div>
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
      blogData:[],
      user_info:{},
      user_id:"1"
    }
  },
  mounted(){
      Axios.get('static/blog-data.json').then((res)=>{
        this.blogData=res.data.BlogData.list;
//        console.log(res.data.BlogData.list);
      });
     Axios.get('http://127.0.0.1:3000/get_info',{
         params:{
             user_id:this.user_id
         }
     }).then((res)=>{
         this.user_info=JSON.parse(res.data);
         console.log(this.user_info);
     })
    }
}
</script>

<style scoped>
#content{
    /*margin-top:15px;*/
    padding-top: 15px;
}
#content:before{
  content: '';
    position: absolute;
    background: rgba(0,0,0,.1);
    top:0px;
    height:2px;
    width:100%;
}
#content .wrap{
    padding: 0 30px;
}
#content .left-menu{
    width:25%;
    float: left;
    position: relative;
    top: 10px;
    height: 100%;
}
#content .blog-title{
    font-size: 1rem;
    font-weight:bold;
    color: #666;

    /*margin-bottom: 10px;*/
}
#content .blog-title:after{
    content: '';
    position: absolute;
    background: #9ec09f;
    /*background: #000000;*/
    width:84%;
    height:2px;
    left:0px;
    top:25px;
}
#content .blog-classify{
    margin-top:10px;
    margin-bottom: 15px;
}
#content .blog-classify li{
    height:30px;
    line-height:35px;

}
#content .blog-classify li a{
    color: #666;
}
#content .about-blogger{
    color: #666;
}
#content .about-blogger:after{
    content: '';
    position: absolute;
    background: #9ec09f;
    /*background: #000000;*/
    width:84%;
    height:3px;
    left:0px;
    top:193px;
}
#content .blogger-photo{
    margin-top:25px;
    width:12.3rem;
    height:16.3rem;
    margin-bottom:25px;
}
#content .blogger-detail li{
    color: #666;
    font-size:12px;
}
#content .blog-link{
    margin-top:28px;
}
#content .blog-link li{
    float: left;
    width:24px;
    margin-right:5px;

}
#content .blog-link img{
    width:100%;
}
/*右侧内容*/
.right-content{
    float: right;
    /*display: block;*/
    width: 63%;
    margin-left:60px;
    margin-right:55px;
    /*position: absolute;*/
    /*top:-12px;
    left:235px;*/
}
.right-content .article-title{
    padding-bottom: 10px;
    font-weight: normal;
    color: #9ec09f;
    line-height: 35px;
    vertical-align: top;
    margin-top:20px;
    font-size:2rem;
}
.right-content .article-img{
    display: block;
    text-align: center;
    margin-top:25px;
    margin-bottom:15px;
}
.right-content span{
    color: #9b9b9b;
    margin-right:10px;

}
.right-content p{
    color: #555;
    font-size:19px;
}
#content .loading{
    /*width:30px;*/
    /*height:25px;*/
    /*color: #9ec09f;*/
    /*font-size:2rem;*/
    /*border:2px solid #9ec09f;*/
    text-align: center;
}
</style>
