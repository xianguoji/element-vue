<template>
  <div class="login">
    <img src="../assets/logo.png">
    <el-row  type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="18" :md="12" :lg="9">
        <h2>用户注册</h2>
        <div class="loginBox">

          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="user_name">
              <el-input v-model.number="ruleForm2.user_name"></el-input>
            </el-form-item>
            <el-form-item
              prop="email"
              label="邮箱"
              :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]"
            >
              <el-input v-model="ruleForm2.email"></el-input>
            </el-form-item>

            <el-form-item label="手机号" prop="phone">
              <el-input v-model.number="ruleForm2.phone"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="registerForm('ruleForm2')">注册</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>&nbsp;&nbsp;&nbsp;
              <router-link to="/Login"><el-button>返回登录</el-button></router-link>
            </el-form-item>
          </el-form>

        </div>

      </el-col>
    </el-row>

  </div>
</template>

<style>
  .loginBox{
    min-width:315px;
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
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          var reg=/^1[34578]\d{9}$/;
          if (!reg.test(value)) {
            callback(new Error('请输入正确的手机号'));
          } else {
              callback();
          }

        }, 1000);
      };
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: '',
          email: '',
          user_name:'',
          phone:''
        },

        rules2: {
          pass: [
            {required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            {required: true, validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            {required: true, validator: checkAge, trigger: 'blur' }
          ],
          user_name: [
            {required: true, validator: checkAccount, trigger: 'blur' }
          ],
          phone: [
            {required: true, validator: checkPhone, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      registerForm(formName) {
        this.$refs[formName].validate((valid) => {
//          if (valid) {
          if (1) {
//            alert('register!');
            this.$alert('注册成功！', '标题名称', {
              confirmButtonText: '返回登录',
              callback: action => {
                router.push({name:"Login"});
//                this.$message({
//                  type: 'info',
//                  message: `action: ${ action }`
//                });
              }
            });
          } else {
            console.log('error register!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      register(){

      }
    }
  }
</script>
