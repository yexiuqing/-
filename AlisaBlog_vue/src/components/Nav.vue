<template>
	<ul id="nav">
		<router-link to="/"><li ><span class="glyphicon glyphicon-user" ></span></li></router-link>
		<router-link to="/show"><li><span class="glyphicon glyphicon-tasks" ></span></li></router-link>
		<router-link to="blog"><li><span class="glyphicon glyphicon-bold" ></span></li></router-link>
		<router-link to="/file_detail"><li><span class="glyphicon glyphicon-file" ></span></li></router-link>
		<router-link to="/download"><li><span class="glyphicon glyphicon-download" ></span></li></router-link>
	</ul>
</template>
imoprt $ from "jquery"
<script type="text/javascript">
export default {
  name: 'nav',
  data () {
    return {
      
    }
  },
  mounted(){
    $("li").on('mouseover',function(){
		$(this).find('span').addClass('active')
		$(this).addClass("select")
	})
	$("li").on('mouseout',function(){
		$(this).find('span').removeClass("active");
		$(this).removeClass("select");
	})  
  }
}
	
</script>

<style scoped>
	#nav{
		width: .5rem;
		height: 2rem;
		position: absolute;
		left: .8rem;
		top: 1.15rem;
		background: rgba(174, 215, 221, 0.79);
	}
	#nav li{
		height: .5rem;
		width: .5rem;
		background: rgba(174, 215, 221, 0.79);
		border-bottom: 1px solid #fff;
	}
	#nav .select{
		background: #fff;
	}
	#nav .glyphicon{
		font-size: .2rem;
		color: #fff;
		margin-left: .15rem;
		margin-top:.15rem; 
	}
	#nav  span.active{
		color: #aed7dd;

	}
</style>