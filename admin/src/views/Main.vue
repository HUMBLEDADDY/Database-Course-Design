<template>
    <el-container style="height: 100vh;">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu router  unique-opened :default-active="$route.path">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-message"></i>内容管理
                </template>
                <el-menu-item-group>
                    <template slot="title">游戏</template>
                    <el-menu-item index="/games/create">新建游戏</el-menu-item>
                    <el-menu-item index="/games/list">游戏列表</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <template slot="title">硬件</template>
                    <el-menu-item index="/hardware/create">新建硬件</el-menu-item>
                    <el-menu-item index="/hardware/list">硬件列表</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <template slot="title">文章</template>
                    <el-menu-item index="/article/create">新建文章</el-menu-item>
                    <el-menu-item index="/article/list">文章列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-message"></i>系统设置
                </template>
                <el-menu-item-group>
                    <template slot="title">分类</template>
                    <el-menu-item index="/categories/create">新建分类</el-menu-item>
                    <el-menu-item index="/categories/list">分类列表</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <template slot="title">管理员</template>
                    <el-menu-item index="/admin_users/create">新建用户</el-menu-item>
                    <el-menu-item index="/admin_users/list">用户列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </el-menu>
        </el-aside>
  
        <el-container>
            
            <el-main>
                <router-view :key="$route.path"></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>