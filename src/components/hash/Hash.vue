<template>
  <div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> 工具箱</el-breadcrumb-item>
            <el-breadcrumb-item>哈希值计算</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <el-input v-model="value" placeholder="算点什么吧" style="margin: 20px 0"></el-input>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group v-model="checkedAlgorithms" @change="handleCheckedChange" style="margin: 15px 0;">
      <el-checkbox v-for="algorithm in algorithms" :label="algorithm" :key="algorithm">{{algorithm}}</el-checkbox>
    </el-checkbox-group>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="alg" label="算法" width="180"></el-table-column>
      <el-table-column prop="result" label="结果"></el-table-column>
      <el-table-column prop="copy" label="复制" width="180"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { sha256, sha224 } from 'js-sha256'
const options = ['sha256', 'sha224'];

export default {
  data: function(){
    return {
      value: '',
      checkAll: false,
      checkedAlgorithms: ['sha256', 'sha224'],
      algorithms: options,
      isIndeterminate: true
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedAlgorithms = val ? options : [];
      this.isIndeterminate = false;
    },
    handleCheckedChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.algorithms.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.algorithms.length;
    }
  },
  computed:{
    sha256(){
      return sha256(this.value)
    },
    sha224(){
      return sha224(this.value)
    },
    tableData(){
      let data = []
      data = [{
        alg:'sha256',
        result:this.sha256
      },
      {
        alg:'sha224',
        result:this.sha224
      }]

      return data
    }
  }
}
</script>

<style>

</style>
