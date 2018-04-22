<template>
    <el-dialog title="文件上传"
      :visible.sync="visible"
      ref="uploadDialog"
      :before-close="beforeClose"
      @close="close"
      width="350px"
      :close-on-press-escape="false"
      :close-on-click-modal="false">
        <el-upload
          class="file-upload"
          ref="upload"
          drag
          action="/something/file/upload"
          :auto-upload="false"
          :file-list="fileList"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-progress="handleProgress"
          :on-error="handleError"
          :on-change="handleChange"
          :on-success="handleSuccess"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip"></div>
        </el-upload>
        <div class="btn-upload-submit">
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      Uploading: false,
      visible: this.show,
      fileNum: 0
    }
  },
  props:['show'],
  watch: {
      show () {
        this.visible = this.show;
      }
  },
  methods: {
    submitUpload(){
      this.Uploading = true;
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      //console.log(file, fileList);
    },
    handlePreview(file) {
      //console.log(file);
    },
    handleProgress(e, file, fileList){
      this.progress = Math.floor(e.percent)
    },
    handleChange(file, fileList){
      var selfIndex = 0
      , sameIndex = 0
      , repeat = false;
      if(file.status == 'ready'){
        for(var i = 0;i < fileList.length; i++) {
          if(file == fileList[i]){
            selfIndex = i
          }

          if(fileList[i].name == file.name && file != fileList[i]){
            sameIndex = i
            repeat = true
            this.$message({
              type: 'info',
              message: '文件：' + file.name + '已更新'
            });
          }
        }

        if(repeat){
          fileList.splice(selfIndex)
          fileList[sameIndex] = file
        }
        this.fileNum = fileList.length
      }
    },
    handleSuccess(response, file, fileList){
      this.fileNum--
      if(this.fileNum <= 0){
          this.$message({
            type: 'success',
            message: '上传成功'
          });
        window.setTimeout(() =>{
          this.Uploading = false
          this.close();
        }, 800)
      }
    },
    handleError(err, file, fileList){
        this.$message({
          type: 'error',
          message: file.name + '上传失败'
        });
    },
    beforeClose(done){
      if(this.Uploading){
        this.$message({
          type: 'info',
          message: '在上传呢，一边儿玩去！'
        });
        return
      }
      done()
    },
    close(){
      this.$refs.upload.clearFiles()
      this.$emit('close')
    }
  }
}
</script>

<style>
.btn-upload-submit{
  margin-top: 10px;
  text-align: right;
}
</style>

