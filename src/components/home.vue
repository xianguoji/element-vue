<template>
  <div>
    <header>
      <!-- 头部导航 -->
      <el-menu class="el-menu-demo" :default-active="activeIndex" mode="horizontal" @select="handleSelect" :router="true">
        <el-menu-item  index="homeMain">处理中心</el-menu-item>
        <el-submenu index="myJob">
          <template slot="title">我的工作台</template>
          <el-menu-item index="myJob1">选项1</el-menu-item>
          <el-menu-item index="myJob2">选项2</el-menu-item>
          <el-menu-item index="myJob3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="personal">个人中心</el-menu-item>
        <el-menu-item index="order">订单管理</el-menu-item>
        <el-menu-item index="/"><a>退出</a></el-menu-item>
      </el-menu>
    </header>
      <!-- 主内容区 -->
      <div >
        <!-- 视图 -->
        <router-view class="view"></router-view>
      </div>
  </div>
</template>
<style>
  .el-menu-demo{
   text-align: center;
  }
</style>
  <script>
    export default {
      data() {
        return {
          activeIndex: 'homeMain',
          form1: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          }
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
  </script>

