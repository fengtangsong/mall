<template>
<div class="root">
  <div class="content">


    <ul class="main">
      <li> <label for="username"><img src="../assets/img/account.png" alt="" class="account"></label>
        <input type="text"  maxlength="10" placeholder="请输入你的用户名" id="username" class="inp"></li>
      <li> <label for="num"> <img src="../assets/img/password.png" alt="" class="password"></label>
        <input type="password" maxlength="10" placeholder="请输入您的密码" id="num" class="inp"></li>
    </ul>
    <div class="btn">
      <div class="login" @click="loginClick">登录</div>
      <div class="register" @click="registerClick">注册</div>
    </div>
    <div class="link">
      <a href="#">忘记密码？</a>
    </div>

  </div>
</div>
</template>

<script>
export default {
name: "login",
  // data(){
  //
  // }
  created (){
    this.w=document.documentElement.clientWidth || document.body.clientWidth;
    console.log(this.w);


  },
  data (){
      return{
          w:0,


        }
    },
  methods:{
    loginClick (){
      this.$router.push('/home')
    },
    registerClick(){
      console.log('dianjil ')
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.content {
  position: relative;
  margin: 200px auto;
  padding: 20px;
  height: 300px;
  width: 300px;
  background-color: rgba(255,255,255,0.3);
  border-radius: 5px;
}
.main li img{
  position: absolute;
  width: 20px;
  height: 20px;
}
.main li .password{
  left: 45px;
  top: 158px;


}
.main li .account{
  left: 45px;
  top: 86px;

}
.main {
  height: 70px;
  width: 300px;
  margin-top: 50px;
  color: #fff;
}
li {
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #4685ff;
}
li label {
display: inline-block;
  width: 55px;
  text-align: right;
}
li .inp {
  width: 200px;
  height: 50px;
  border: 0;
  outline: none;
  font-family: "Microsoft YaHei UI";
  font-size: 14px;
  margin-left: 10px;
}
.btn {
  height: 40px;
  margin: 100px auto 0;
}
.login {
  float: left;
  width: 140px;
  height: 40px;
  background-color: #4685ff;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 5px;

}
.register {
  float: right;
  width: 140px;
  height: 40px;
  background-color: #4685ff;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 5px;

}
.link {
  margin-top: 30px;
  background-color: pink;
}
a {
  float: right;
  font-size: 14px;
  text-decoration: none;
  color: #4685ff;
}

</style>