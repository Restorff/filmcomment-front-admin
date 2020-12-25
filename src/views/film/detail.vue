<template>
  <div class="app-container">

    <!-- css样式库 -->
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/mxstyle.css?v=4.0">
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/hlstyle.css?v=4.0">
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/gold.css?v=4.0" name="skin">
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/black.css?v=4.0" name="color">

 <div class="hot_banner ">
    
    <div class="detail_list_box">
         <div class="detail_list">
				<div class="content_box clearfix">
					<div class="content_thumb fl">											
						<a class="vodlist_thumb lazyload" :href="form.img" :title="form.filmname" :data-original="form.img" :style="{backgroundImage: 'url(' + form.img+ ')'}" target="_blank"><span class="play hidden_xs" ></span>
						</a>								
					</div>
					<div class="content_detail content_top fl">
						<div class="pannel_head clearfix">
								<span class="text_muted pull_right hidden_mb ">
								<a href="javascript:void(0);" class="open-share"><i class="iconfont shaixuan_i"></i>&nbsp;分享</a>
							</span>
							<h2 class="title">
								{{form.filmname}}							</h2>
						</div>
						<div id="detail_rating" class="fn-clear">
                             <div id="rating" class="fn-left" data-mid="1" data-id="41689" data-score="2">
        <!-- <span class="star_tips">{{form.score}}</span> -->

        <ul class="rating-s">
          <el-rate
  v-model="form.score"
  disabled
  show-score
  text-color="#ff9900"
  :max = "10"
  :allow-half = "true"
  >
</el-rate>
        <!-- <li class="one  current active-b active" title="很差" val="1">很差</li>
        <li class="two  current active-b active" title="较差" val="2">较差</li>
        <li class="three current active-b active" title="还行" val="3">还行</li>
        <li class="four current active-b active" title="推荐" val="4">推荐</li>
        <li class="five current active-b" title="力荐" val="5">力荐</li> -->
    </ul>
    </div>
                        </div>
                    </div>
                    <div class="content_detail content_min fl">
                        <ul>	
						<li class="data">
							<span class="text_muted hidden_xs">年份：</span><a href="javascript:void(0);" >{{form.date1}}</a>&nbsp;							<span class="split_line"></span>
							<span class="text_muted hidden_xs">地区：</span><a href="javascript:void(0);" >{{form.regions}}</a>&nbsp;							<span class="split_line"></span>
							<span class="text_muted hidden_xs">类型：</span><a href="javascript:void(0);" >{{form.type}}</a>&nbsp;			
						</li>
						<li class="data"><span>状态：</span><span class="data_style">BD超清中字</span>&nbsp;/&nbsp;<em>{{form.date1}}</em></li>
						<li class="data"><span>主演：</span><a href="javascript:void(0);">{{form.actor}}</a></li>
						<li class="data"><span>导演：</span><a href="javascript:void(0);" >{{form.director}}</a>&nbsp;</li>
						<li class="desc hidden_xs">
							<span class="left text_muted">简介：</span>{{form.intro}}<a href="#desc">详细&nbsp;&gt;</a>
						</li>
						</ul>
					</div>
					<div class="content_detail content_min content_btn fl">
                        						    

	<div class="playbtn o_like" style="margin-right: 0;">
        	    <a class="btn btn_like digg_link" data-id="41689" data-mid="1" data-type="up" href="javascript:void(0);"><i class="iconfont"></i>&nbsp;喜欢&nbsp;<em class="digg_num">{{form.scorePeople}}</em></a>
	        </div>
                            <div class="playbtn o_share hidden_xs">
						<a class="btn btn_share" href="javascript:void(0);"><i class="iconfont"></i>&nbsp;分享</a>
						<div class="dropdown">
        <div class="bds_share_title">分享到</div>
	<div class="bdsharebuttonbox bdshare-button-style0-32" data-tag="share_1" data-bd-bind="1608015628951">
	<a class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
	<a class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
	<a class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
	<a class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
	<a class="bds_more" data-cmd="more"></a>
    </div>
        <span class="share_tips">复制下方链接，去粘贴给好友吧：</span>
	<span id="short2" class="share_link shorturl">{{form.filmname}}--</span>
	<span id="btn" class="copy_btn" data-clipboard-action="copy" data-clipboard-target="#short2">复制链接</span>
		
		</div>
						</div>
											</div>
				</div>
         </div>
    </div>
    </div>


   <div class="container white_pal">
           <div class="input_row">
       <div class="pannel clearfix">
        <!--右侧图片盒子-->
        <div class="mac_msg_r">
            <img src="https://i.loli.net/2020/12/15/nEICp8SQvlYVxGo.gif">
        </div>
        <!--留言结束-->
        		
	   </div>
    </div>
	<div class="commlist_row">
	    <div class="comm_list pannel clearfix">
			<div class="pannel_head clearfix">
     <span class="pull_right">共&nbsp;<span class="mycol">{{list.length}}</span>&nbsp;条留言</span>
     <h2 class="title">留言</h2>								
    </div>
<ul class="part_rows" >
<li class="comm_each line_top margin" v-for="(item,index) in list" :key="item.cid">
<img class="comm_avat part_roun" :src="userList[index].avatar" v-if='userList[index]' >
<div class="comm_head">
<strong class="text_line" v-if='userList[index]'   >{{userList[index].username}}</strong>
<!-- <span class="part_tips hidden_mb">2020-10-06 02:18<span class="split_line"></span><span class="mycol">1#</span></span> -->
  
<span class="part_tips hidden_xs" v-if='userList[index]' >{{userList[index].gmtCreate}}
  <span class="split_line"></span>
  <span class="mycol">
     <el-button type="danger" 
    icon="el-icon-delete" round 
    size="mini" 
    @click="deleteCommentById(item.cid)"></el-button>
    {{item.stars}}
    </span></span>

</div>
<div class="comm_cont" style="display: flex;">
<div class="comm_content" >{{item.main}}</div>
<!-- <span class="split_line"></span> -->

</div>
</li>
</ul>
<!--__ 翻页__-->
		</div>
	</div>
</div>
  </div>
  
</template>

<script>
import film from '@/api/film/film'
export default {
  data() {
    return {
      form: {
        filmname: '',
        regions: '',
        date1: '',
        type: [],
        actor:'',
        img: '',
        intro: '',
        score:0,
        scorePeople:0,
      },
      comment:{
        cid:1,
        uid:1,
        fid:1,
        gmtCreate:'',
        main:'',
        stars:0,
      },
      list:[],
      userList:[
        ],
      user:{
        uid:1,
        username:'',
        avatar:'',
        email:'',
        phone:'',
        gmtCreate:'',
        },
    }
  },
  created(){
    this.fid = this.$route.query.fid;
    // console.log(this.fid)
    this.getFilmById(this.fid)
    this.getCommentsById(this.fid)
    // console.log(this.list[0]);
    // this.getUserById(this.list[0].uid)
  },
  methods: {
    
    getFilmById(fid){
            film.getOneFilmById(fid)
            .then(response => {
                // console.log(response)
                this.form = response.data.film
                // this.total = response.data.total
                // console.log(this.form)
            })
            .catch(error =>{
                console.log(error)
            })
        },
    getCommentsById(fid){
      film.getCommentsById(fid)
            .then(response => {
                // console.log(response)
                this.list = response.data.comments
                var i;
                let uids=[];
                for(i in response.data.comments){
                  // console.log(response.data.data.comments[i].uid)
                  uids.push(response.data.comments[i].uid)
                }
                  this.getUserByIds(uids)
            })
            .catch(error =>{
              console.log(error)
            })
    },
    async getUserByIds(uids){
      var uid;
      for(var i = 0, len = uids.length; i < len; i++){
        // console.log(i,"---",uids[i])
        await film.getUserById(uids[i])
            .then(response => {
              // console.log(response)
               this.userList.push(JSON.parse(JSON.stringify(response.data.user)))
            })
            .catch(error =>{
                console.log(error)
            })
}
      // console.log(uid)
      
    },
    deleteCommentById(cid){
      this.$confirm('此操作将永久删除该评论, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          sessionStorage.setItem('username', 'admin');
      var data = sessionStorage.getItem('username');
      if(data == 'admin'){
         console.log(data)
        film.deleteCommentById(cid)
            .then(response => {
              // console.log(response)
              this.$message({
              type: 'success',
              message: '删除成功!'
            })
              //location.reload();
              this.list = []
                  this.userList=[]
                //   this.getCommentsById(this.fid)
              this.getCommentsById(this.fid)
            })
      }  
          })      
},
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

