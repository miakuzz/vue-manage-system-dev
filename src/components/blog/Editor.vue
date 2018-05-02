<template>
  <div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> 博客管理</el-breadcrumb-item>
            <el-breadcrumb-item>编辑器</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
      <quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
      <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor'

export default {
  data: function(){
    return {
      content: '',
      editorOption: {
          placeholder: 'Hello World'
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
      onEditorChange({ editor, html, text }) {
          this.content = html;
      },
      submit(){
          console.log(this.content);
          this.$message.success('提交成功！');
      }
  },
  computed: {
      editor() {
          return this.$refs.myTextEditor.quillEditor;
      }
  }
}
</script>

<style scoped>
.editor-btn{
  margin-top: 20px;
}

.container{
  background: #fff;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>

<style>
.ql-container{
  min-height:400px;
}
</style>

