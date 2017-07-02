<template>
  <div>
    <h2>个人中心</h2>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <h3>[{{account}}]</h3>

    <!--<el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">-->
    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">

        <el-table :data="data4" border tooltip-effect="dark" style="width: 100%" >
          <el-table-column type="selection" width="55"></el-table-column>

          <el-table-column prop="name" label="用户名" width="200"></el-table-column>

          <el-table-column label="注册日期" width="150">
            <template scope="scope">{{ scope.row.date1 }}</template>
          </el-table-column>

          <el-table-column prop="region" label="地址" show-overflow-tooltip></el-table-column>

          <el-table-column label="操作" width="150">
            <template scope="scope">
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

      </el-tab-pane>

      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    padding: 50px;
  }
</style>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        data4:this.$store.state.users,
        imageUrl: '',
        account:this.$store.state.user_name
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleClick(){
        console.log(123)
      },

      handleDelete(index, row) {
        console.log(index, row);
        this.data4.splice(index, 1);
      }

    }
  }
</script>



