<template>
  <div>
    <h2>我的订单</h2>
    <el-tabs type="border-card">
      <el-tab-pane label="全部订单">
        <el-table
          :data="tableData5"
          style="width: 100%">
          <el-table-column type="expand">
            <template scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="商品 ID" prop="id"></el-table-column>

          <el-table-column label="商品名称" prop="name"></el-table-column>

          <el-table-column label="商品单价/元" prop="price"></el-table-column>

          <el-table-column label="商品数量" width="150px">
            <template scope="counts">
              <el-input-number size="small" :min="1" v-model="counts.row.count"></el-input-number>
            </template>
          </el-table-column>

          <el-table-column label="合计/元" prop="total">
            <template scope="totals">
              {{totals.row.price*totals.row.count}}
            </template>

          </el-table-column>

          <el-table-column label="操作" width="200px">
            <template scope="scope">
              <el-button size="small" @click="orderDetail(scope.$index, scope.row)">订单详情</el-button>

              <el-button size="small" type="success" v-if="!scope.row.subOrder" @click="orderSubmit(scope.$index, scope.row)">提交订单</el-button>

              <el-button size="small" type="danger" v-if="scope.row.subOrder" @click="orderDelete(scope.$index, scope.row)">取消订单</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!--提交订单提示框-->
        <el-dialog title="提交订单" v-model="dialogFormVisible">
            <el-form label-position="left" ref="ordersubmitbox" :model="ordersubmitbox" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ ordersubmitbox.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ ordersubmitbox.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ ordersubmitbox.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ ordersubmitbox.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ ordersubmitbox.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ ordersubmitbox.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ ordersubmitbox.desc }}</span>
              </el-form-item>
              <el-form-item label="商品单价/元">
                <span>{{ ordersubmitbox.price }}</span>
              </el-form-item>
              <el-form-item label="商品数量">
                <span>{{ ordersubmitbox.count }}</span>
              </el-form-item>
              <el-form-item label="合计/元">
                <span>{{ ordersubmitbox.price*ordersubmitbox.count }}</span>
              </el-form-item>
            </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="payment(seleIndex)">立即付款</el-button>
                </span>
        </el-dialog>

      </el-tab-pane>
      <el-tab-pane label="审核中">审核中</el-tab-pane>
      <el-tab-pane label="待收货">待收货</el-tab-pane>
      <el-tab-pane label="已完成">已完成</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
    text-align: left;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 49%;
  }
</style>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        ordersubmitbox:{
          id: '',
          name: '',
          price: '',
          count: '',
          subOrder: false,
          category: '',
          desc: '',
          address: '',
          shop: '',
          shopId: ''
        },
        seleIndex:'',
        dialogFormVisible: false,
        tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          price: '11',
          count: 4,
          subOrder: false,
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '手抓饼',
          price: '12.5',
          count: 3,
          subOrder: false,
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味酸奶',
          price: '9',
          count: 1,
          subOrder: false,
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '鱿鱼小丸子',
          price: '8.5',
          count: 6,
          subOrder: false,
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    },
    methods: {
      orderDetail(index, row) {
        console.log(index, row);
      },
      orderDelete(index, row) {
        console.log(index, row);
        this.tableData5[index].subOrder = false;
      },
      orderSubmit(index, row) {
        console.log(index, row);
        this.seleIndex=index;
        this.dialogFormVisible = true;
        this.ordersubmitbox=this.tableData5[index];
      },
      payment(seleIndex){
        this.tableData5[seleIndex].subOrder = true;
        this.dialogFormVisible = false;
      }
    }
  }
</script>
