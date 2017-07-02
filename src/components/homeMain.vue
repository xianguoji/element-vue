<template>
  <main>
    <!-- 左侧导航 -->
    <div class="main-left">
      <el-menu class="el-menu-vertical-demo" :default-active="activeIndex" :router="true">
        <el-menu-item index="activePublic" >活动创建</el-menu-item>
        <el-menu-item index="activeManage" >活动管理</el-menu-item>
      </el-menu>
    </div>

    <!-- 右侧主内容区 -->
      <!-- 视图 -->
      <router-view></router-view>

  </main>

</template>
<style>
  /* 头部导航 */
  header{
    min-width: 980px;
    /*transition: all 0.5s ease;*/
  }
  header .el-menu-demo{padding-left: 300px!important;}

  /* 主内容区 */
  main{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
    min-width: 900px;
    border: solid 40px #E9ECF1;
    /*text-align: center;*/
  }
  .main-left{
    /*text-align: center;*/
    width: 20%;
    float: left;
    background-color: #FCFCFC;
  }
</style>
<script>
  export default {
    data() {
      return {
        activeIndex: 'activePublic'
      };
    }
  }
</script>
