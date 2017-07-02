<template>
  <div class="activeView">
    <h3>活动管理</h3>
    <el-table
      :data="tableData3"
      border
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        label="活动时间"
        width="150">
        <template scope="scope">{{ scope.row.date1 }}</template>
      </el-table-column>

      <el-table-column
        prop="name"
        label="活动名称"
        width="200">
      </el-table-column>

      <el-table-column
        prop="region"
        label="活动地点"
        show-overflow-tooltip>
      </el-table-column>

      <el-table-column label="操作" width="150">
        <template scope="scope">
          <el-button size="small" @click="dialogFormVisible = true, handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-dialog title="编辑活动" v-model="dialogFormVisible">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>

              <el-form-item label="活动区域">
                <el-select class="select-width" v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="上海" value="上海"></el-option>
                  <el-option label="北京" value="北京"></el-option>
                  <el-option label="广州" value="广州"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                  style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>

              <el-form-item label="即时配送">
                <el-col :span="2">
                  <el-switch class="switch-left" on-text="" off-text="" v-model="form.delivery"></el-switch>
                </el-col>
              </el-form-item>
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
              </el-form-item>

              <el-form-item label="特殊资源">
                <el-col>
                  <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                </el-col>

              </el-form-item>

              <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
            </el-form>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="onSuccess(form.selectindex)">确 定</el-button>
          </el-dialog>

          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>


</template>

<style>
  .el-table th > .cell {
    text-align: center;
  }
</style>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          selectindex: '',
          name: '',
          region: '',
          date1: '',
//          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData3:
          this.$store.state.activeData,
        multipleSelection: []
      }
    },

    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(val)
      },
      handleEdit(index, row) {
        console.log(index, row);
        console.log(this.tableData3[index]);
        this.form.selectindex = index;
        this.form.name = this.tableData3[index].name;
        this.form.date1 = this.tableData3[index].date1;
        this.form.region = this.tableData3[index].region;

      },
      handleDelete(index, row) {
        console.log(index, row);
        this.tableData3.splice(index, 1);
      },
      onSuccess(selectindex){
        console.log('Success!');
        console.log(this.form);
        console.log(333,selectindex);
        var a = new Date(this.form.date1);
        this.tableData3[selectindex].name = this.form.name;
        this.tableData3[selectindex].date1 = this.formatDate(a);
        this.tableData3[selectindex].region = this.form.region;

        this.$message({
          message: '修改成功！',
          showClose: true,
          type: 'success'
        });

        this.dialogFormVisible = false;
      },
      formatDate(date) {//标准时间转换年月日格式
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
      }
  }
  }
</script>
