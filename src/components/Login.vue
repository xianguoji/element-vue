<template>
  <div class="login">
    <img src="../assets/logo.png">
    <el-row  type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="18" :md="12" :lg="12">
        <h2>用户登录</h2>
        <div class="loginBox">

          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="user_name">
              <el-input v-model.number="ruleForm2.user_name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2',ruleForm2)">登录</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>&nbsp;&nbsp;&nbsp;
              <router-link to="/register"><el-button >注册</el-button></router-link>
            </el-form-item>
          </el-form>

        </div>

      </el-col>
    </el-row>


  </div>
</template>
<style>
  .loginBox{
    min-width:400px;
    border:1px solid #bfcbd9;
    border-radius:10px;
    padding:50px 70px 20px 0;
  }
</style>
<script type="text/ecmascript-6">


  import router from '../router'
  export default {
    data() {
      var checkAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          var reg=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
          if (!reg.test(value)) {
            callback(new Error('字母开头,允许5-16字节,允许字母数字下划线'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm2: {
          user_name:'',
          pass: '',
          checkPass: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          user_name: [
            { validator: checkAccount, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName,ruleForm2) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.state.user_name = this.ruleForm2.user_name;
            console.log(this.$store.state.user_name);

//            alert('submit!');
            router.push({name:"home"});
          } else {
            console.log('error submit!!');
        return false;
      }
      });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
