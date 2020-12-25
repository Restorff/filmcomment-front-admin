<template>
  
  <div class="app-container">
    <!-- <a href="/#/film/detail">haha</a> -->
    <!-- css样式库 -->
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/mxstyle.css?v=4.0">
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/hlstyle.css?v=4.0">
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/gold.css?v=4.0" name="skin">
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/pink.css?v=4.0" name="color">

<meta name="referrer" content="never">

    <ul class="vodlist vodlist_wi  clearfix">
					<li class="vodlist_item num" v-for="(item) in list" :key='item.fid'>
	          <a class="vodlist_thumb lazyload" 
            :href="'#/film/detail?fid=' + item.fid" 
            :title="item.filmname"  
            :data-original="item.img" 
            :style="{backgroundImage: 'url(' + item.img+ ')'}">					
		          <span class="play hidden_xs"></span>
		          <span class="pic_text text_right text_dy">{{item.score}}</span>
        	</a>
	<div class="vodlist_titbox">									
		<p class="vodlist_title">
		<a :href="'#/film/detail?fid=' + item.fid" title="item.filmname">{{item.filmname}}</a>
		</p>
		<p class="vodlist_sub">{{item.actor}}</p>
	</div>
</li>
<!-- <li class="vodlist_item num_2">
	<a class="vodlist_thumb lazyload" href="/index.php/vod/detail/id/41694.html" title="颜如玉" data-original="https://tu.tianzuida.com/pic/upload/vod/2020-12-14/202012141607933850.jpg" style="background-image: url(&quot;https://tu.tianzuida.com/pic/upload/vod/2020-12-14/202012141607933850.jpg&quot;);">					
		<span class="play hidden_xs"></span>
		        <span class="pic_text text_right text_dy">4.0</span>
        	</a>
	<div class="vodlist_titbox">									
		<p class="vodlist_title">
		<a href="/index.php/vod/detail/id/41694.html" title="颜如玉">颜如玉</a>
		</p>
		<p class="vodlist_sub">杨瑾洁&nbsp;苏德伦&nbsp;陈凯瑞&nbsp;徐金峰&nbsp;储毅&nbsp;张灯振&nbsp;</p>
	</div>
</li> -->
	</ul>

  <!-- 页码 -->
  <ul class="page text_center cleafix">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="limit"
      layout="prev, pager, next, jumper"
      :total="total">
      </el-pagination>
	<!-- <li class="hidden_mb"><a href="/index.php/vod/show/id/1/page/1.html" class="btns_disad">首页</a></li>
	<li><a href="/index.php/vod/show/id/1/page/1.html" class="btns_disad">上一页</a></li>
		<li class="hidden_xs active"><a href="/index.php/vod/show/id/1/page/1.html">1</a></li>
		<li class="hidden_xs "><a href="/index.php/vod/show/id/1/page/2.html">2</a></li>
		<li class="hidden_xs "><a href="/index.php/vod/show/id/1/page/3.html">3</a></li>
		<li class="hidden_xs"><span class="btns_disad" href="javascript:;">...</span></li>
	<li class="hidden_xs"><a href="/index.php/vod/show/id/1/page/415.html">415</a></li>
		<li><a href="/index.php/vod/show/id/1/page/2.html">下一页</a></li>
	<li class="hidden_mb"><a href="/index.php/vod/show/id/1/page/415.html">尾页</a></li>		 -->
</ul>
<!-- <div class="page_tips hidden_mb">当前<span>第1页</span>&nbsp;/&nbsp;共有415页</div> -->
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
        // date2: '',
        // delivery: false,
        type: [],
        actor:'',
        img: '',
        intro: '',
        score:0,
      },
      total:1,
      limit:10,
      list:[],
      currentPage: 1
    }
  },
  mounted(){
    this.getAllFilmsCount()
        this.getFilmList()
    },
    methods:{
      getAllFilmsCount(){
        film.getAllFilmsCount()
            .then(response => {
                // console.log(response)
                this.total = response.data.allFilms
                // this.total = response.data.total
                // console.log(this.list)
            })
            .catch(error =>{
                console.log(error)
            })
      },
        getFilmList(page=1){
            this.page = page
            film.getFilmByPage(this.page,this.limit)
            .then(response => {
                // console.log(response)
                this.list = response.data.filmByPage
                // this.total = response.data.total
                // console.log(this.list)
            })
            .catch(error =>{
                console.log(error)
            })
        },
       
        deleteById(id){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          teacher.deleteById(id).then(response => {
            this.$message({
              type: 'success',
              message: '删除成功!'
          });
            this.getList()
          })  
        }).catch(()=>{})

        },
        handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.list=[],
        this.getFilmList(val)
      },
    }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

