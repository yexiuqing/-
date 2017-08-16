<template>
  <div class="header-page">
    <div id="header">
            <div class="wrapper">
                <div class="logo">
                    <img src="static/images/balloon.png" alt="">
                    <div class="name">
                        <p class="alisa">Alisa's</p>
                        <p class="blog">Blog</p>
                    </div>
                </div>
                <div class="headNav">
                    <ul>
                        <li>博客</li>
                        <router-link to="/about_me"><li>关于我</li></router-link>
                        <router-link to="/tel"><li>联系我</li></router-link>
                    </ul>
                </div>
                <div class="headSearch">
                    <input type="text">
                    <div class="image">
                        <img src="static/images/serch.png" alt="">
                    </div>
                </div>
            </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-page{
    width:66rem;
    height:124px;
    position: relative;
    left:50%;
    margin-left:-33rem;
    background: #fff;



}
	#header {
    height: 124px;
    position: relative;

    /*display: none;*/
}
/*#header:after{
    content: '';
    position: absolute;
    background: rgba(0,0,0,.1);
    top:124px;
    height:1px;
    width:100%;

}*/

#header .logo{
    float: left;
    flex:1;
    -webkit-box-flex: 1;

}
#header .logo img{
    width: 4rem;
    float: left;
    margin-right: 15px;

}
#header .logo p{
    font-size: 1.7rem;
    font-weight: bold;
}
#header .logo .alisa{
    margin-top:18px;
}
#header .headNav{
    flex:2;
    margin:0 auto;
    position: relative;


}
#header .headNav ul{

    width:340px;
    height:38px;
    line-height:38px;
}
#header .headNav ul:before,#header .headNav ul:after{
    content:'';
    position: absolute;
    background: rgba(0,0,0,.2);
    height:1px;
    width:370px;

}
#header .headNav ul:before{
    top:0px;

}
#header .headNav ul:after{
    top:38px;
    left: 0px;
}
#header .headNav li{
    float: left;
    margin-right:68px;
}
#header .headNav li:first-child{
    margin-left: 45px;
}
#header .headNav li:last-child{
    margin-right: 0px;
}
#header .headSearch{
    flex:1;
    float: right;
    /*margin-right: 20px;*/
    position: relative;
}
#header .headSearch input{
    width:145px;
    height:25px;
    padding:5px 10px;
    border-top:1px solid #000000;
    border-left:1px solid #000000;
    border-bottom:1px solid #000000;
}
#header .headSearch .image{
    width: 36px;
    height: 36px;
    background: #666;
    position: absolute;
    right:80px;
    top:1px;
    border-right:1px solid #000000;
}
#header .headSearch img{
    width:30px;
    height:30px;
}
</style>
