<template>
	<div id="blog">
		<div data-spy="scroll" data-target="#navbar-example" data-offset="0"style="height:3.7rem;overflow:auto; position: relative;" class="content">
		   <div class="right-content" v-for="elem in blogData">
        <h2 class="article-title">{{elem.title}}</h2>
        <span>发布日期：{{elem.date}}</span>
        <span>分类：{{elem.classify}}</span>
         <!--  <div class="article-img"><img src="static/images/shenxiang.jpg" alt="" ></div> -->
         <div class="article-img"><img :src='"static/"+elem.image' alt="" ></div>
        <p>{{elem.titleContent}}</p>
    	</div> 
		</div>
	</div>
</template>
<script type="text/javascript">
import Axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      blogData:[],
     
    }
  },
  mounted(){
      Axios.get('static/blog-data.json').then((res)=>{
        this.blogData=res.data.BlogData.list;
//        console.log(res.data.BlogData.list);
      });
	}
}
</script>
<style scoped>
	#blog{
		height: 3.8rem;
		width:4.2rem;
		background: #fff;
		position: absolute;
		top: 1.15rem;
		left: 1.4rem;
		border: .05rem solid #aed7dd;

	}
.right-content{
    float: left;
    width: 63%;
    margin-left:.3rem;

}
.right-content .article-title{
    font-weight: normal;
    color: #9ec09f;
    vertical-align: top;
    margin-top:.05rem;
    font-size:.1rem;
}
.right-content .article-img{
    display: block;
    text-align: center;
    margin-top:25px;
    margin-bottom:15px;

}
.right-content .article-img img{
	/*width: 1rem;*/
    height: 1rem;
}
.right-content span{
    color: #9b9b9b;
    margin-right: .08rem;

}
.right-content p{
    color: #555;
    font-size:0.08rem;
}
</style>