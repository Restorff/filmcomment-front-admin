<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="电影名称">
        <el-input v-model="form.filmname"/>
      </el-form-item>
      <el-form-item label="电影地区"> 
        <el-select v-model="form.regions" placeholder="请选择电影地区">
          <el-option label="中国大陆" value="中国大陆"/>
          <el-option label="中国香港" value="中国香港"/>
          <el-option label="美国" value="美国"/>
          <el-option label="印度" value="印度"/>
          <el-option label="日本" value="日本"/>
          <el-option label="德国" value="德国"/>
          <el-option label="英国" value="英国"/>
          <el-option label="法国" value="法国"/>
          <el-option label="奥地利" value="奥地利"/>
        </el-select>
      </el-form-item>
      <el-form-item label="上映时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;"/>
        </el-col>
      </el-form-item>
      <el-form-item label="导演">
        <el-input v-model="form.director"/>
      </el-form-item>
      <el-form-item label="领衔主演">
        <el-input v-model="form.actor"/>
      </el-form-item>
       <el-form-item label="评分">
        <el-slider
        :max = "10"
      v-model="form.score"
      :step="1"
      show-stops>
    </el-slider>
      </el-form-item>
      <el-form-item label="评分人数">
        <el-input v-model="form.scorePeople"/>
      </el-form-item>
      <el-form-item label="电影类型">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="剧情" name="type" true-label="剧情"/>
          <el-checkbox label="犯罪" name="type" true-label="犯罪"/>
          <el-checkbox label="动作" name="type" true-label="动作"/>
          <el-checkbox label="喜剧" name="type" true-label="喜剧"/>
          <el-checkbox label="爱情" name="type" true-label="爱情"/>
          <el-checkbox label="传记" name="type" true-label="传记"/>
          <el-checkbox label="历史" name="type" true-label="历史"/>
          <el-checkbox label="战争" name="type" true-label="战争"/>
          <el-checkbox label="奇幻" name="type" true-label="奇幻"/>
          <el-checkbox label="动画" name="type" true-label="动画"/>
          <el-checkbox label="科幻" name="type" true-label="科幻"/>
        </el-checkbox-group>
      </el-form-item>

       <!-- 封面图片 -->
<el-form-item label="封面图片">

    <!-- 图片缩略图 -->
    <pan-thumb :image="form.img"/>
    <!-- 文件上传按钮 -->
    <el-button type="primary" icon="el-icon-upload" @click="imagecropperShow=true">更换图片
    </el-button>

    <!--
v-show：是否显示上传组件
:key：类似于id，如果一个页面多个图片上传控件，可以做区分
:url：后台上传的url地址
@close：关闭上传组件
@crop-upload-success：上传成功后的回调 -->
    <image-cropper
                   v-show="imagecropperShow"
                   :width="300"
                   :height="300"
                   :key="imagecropperKey"
                   :url="BASE_API+'/filmoss/uploadOssFile'"
                   field="file"
                   @close="close"
                   @crop-upload-success="cropSuccess"/>

</el-form-item>

      <el-form-item label="电影简介">
        <el-input v-model="form.intro" type="textarea" maxlength="254" show-word-limit="true" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import film from '@/api/film/film'
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
export default {
  components: { ImageCropper, PanThumb },
  data() {
    
    return {
      form: {
        filmname: '',
        regions: '',
        // date1: ',
        // date2: '',
        // delivery: false,
        director:'',
        type: '',
        actor:'',
        img: '',
        intro: '',
        score:0,
        scorePeople:0,
      },
      imagecropperShow:false,
      imagecropperKey:0,//上传组件唯一标识
      BASE_API : process.env.BASE_API,
    }
  },
  methods: {
    onSubmit() {
          film.release(this.form)
            .then(response => {
                console.log(response.msg)
                // this.list = response.data.filmByPage
                // this.total = response.data.total
                // console.log(this.list)
            })
            .catch(error =>{
                console.log(error)
            })
      // film.release(this.form)
      // this.$message(!')
      this.$message({
              type: 'success',
              message: '发布成功!'
            })
              location.reload();
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      }),
      location.reload()
    },
    close(){
      //关闭上传弹框方法
      this.imagecropperShow = false
    },
    cropSuccess(data){
      //上传成功调用的方法
      this.form.img = data.url
      this.imagecropperShow = false
      console.log(this.form.img)
    }

  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

