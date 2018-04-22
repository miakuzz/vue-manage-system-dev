<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 工具箱</el-breadcrumb-item>
                <el-breadcrumb-item>文件管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
            <el-button type="primary" icon="el-icon-upload" class="handle-del mr10" @click="openUploadDialog">文件上传</el-button>
            <el-button type="primary" icon="el-icon-delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
            <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="文件名" width="255">
            </el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter">
            </el-table-column>
            <el-table-column prop="date" label="上传时间" sortable width="150">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="small"
                            @click="handleDownload(scope.$index, scope.row)">下载</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @current-change ="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="total"
                    v-show="total > 0">
            </el-pagination>
        </div>
        <v-dialog :show.sync="dialogUploadVisible" @close="CloseUploadDialog"></v-dialog>
    </div>
</template>

<script>
  import http from '@/../static/js/http'
  import vDialog from '../file/UploadDialog.vue'

  export default {
      components: {
        vDialog
      },
      data() {
          return {
              url: 'file/list',
              downloadUrl: 'file/download',
              tableData: [],
              cur_page: 1,
              page_size: 10,
              total : 0,
              multipleSelection: [],
              select_cate: '',
              select_word: '',
              del_list: [],
              is_search: false,
              dialogUploadVisible: false
          }
      },
      created(){
          this.getData();
      },
      computed: {
          data(){
              const self = this;
              return self.tableData.filter(function(d){
                  let is_del = false;
                  for (let i = 0; i < self.del_list.length; i++) {
                      if(d.name === self.del_list[i].name){
                          is_del = true;
                          break;
                      }
                  }
                  if(!is_del){
                      if(d.address.indexOf(self.select_cate) > -1 &&
                          (d.name.indexOf(self.select_word) > -1 ||
                          d.address.indexOf(self.select_word) > -1)
                      ){
                          return d;
                      }
                  }
              })
          }
      },
      methods: {
          handleCurrentChange(val){
              this.cur_page = val;
              this.getData();
          },
          getData(){
              const self = this
              let params = {}
              params.searchkeyword = self.select_word
              params.pageindex = self.cur_page
              params.pagesize = self.page_size
              self.apiGet(self.url, {"params" : params}).then((res) => {
                self.tableData = res.data.result
                self.total = res.data.total
              })
          },
          openUploadDialog(){
              this.dialogUploadVisible = true
          },
          CloseUploadDialog(){
              this.getData()
              this.dialogUploadVisible = false
          },
          search(){
              this.is_search = true;
          },
          formatter(row, column) {
              return row.address;
          },
          filterTag(value, row) {
              return row.tag === value;
          },
          handleDownload(index, row) {
            console.log(row)
            let params = {}
            params.id = row.id
            window.open("/something/" + this.downloadUrl + "?id=" + row.id)
          },
          handleDelete(index, row) {
              this.$message.error('删除第'+(index+1)+'行');
          },
          delAll(){
              const self = this,
                  length = self.multipleSelection.length;
              let str = '';
              self.del_list = self.del_list.concat(self.multipleSelection);
              for (let i = 0; i < length; i++) {
                  str += self.multipleSelection[i].name + ' ';
              }
              self.$message.error('删除了'+str);
              self.multipleSelection = [];
          },
          handleSelectionChange(val) {
              this.multipleSelection = val;
          }
      },
      mixins: [http]
  }
</script>

<style scoped>
.handle-box{
    margin-bottom: 20px;
}
.handle-select{
    width: 120px;
}
.handle-input{
    width: 300px;
    display: inline-block;
}
</style>
