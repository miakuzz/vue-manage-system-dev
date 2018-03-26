<template>
  <el-aside width="200px" class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-location-outline',
                        index: '/home',
                        title: '首页'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '',
                        title: '工具箱',
                        subs: [
                            {
                                index: '/tools/file',
                                title: '文件管理',
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path;
            }
        }
    }
</script>

<style>
    .sidebar{
        display: block;
        width: 220px!important;
        height:100%;
    }

    .sidebar > ul {
        height:100%;
    }

    .sidebar li>.el-submenu__title, .sidebar .el-menu-item{
      height:44px !important;
      line-height: 28px !important;
      padding:8px 15px 8px 20px;
      border-left: 4px solid transparent;
    }

</style>
