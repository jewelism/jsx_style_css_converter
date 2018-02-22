<template>
  <div id="app">
    <div class="title">{{target ? 'JSX' : 'CSS'}} to {{target ? 'CSS' : 'JSX'}} Style Converter</div>
    <img @click="onClickReverseBtn" src="./assets/circle_arrow.png" class="reverseBtn"/>
    <div class="form">
      <div class="inner_form_left">
        <textarea v-model="input" :placeholder="`Input ${target ? 'JSX' : 'CSS'} Style here`" class="style_input"/>
      </div>
      <div class="inner_form_right">
        <textarea v-model="output" :placeholder="`Input ${target ? 'CSS' : 'JSX'} Style outputs`" class="style_output"/>
      </div>
    </div>
    <button @click="onClickConvert" class="convert_btn">Convert!</button>
  </div>
</template>

<script>
import { jsxToCss, cssToJsx } from './actions'
export default {
  name: 'App',
  data () {
    return {
      target: true,
      input: '',
      output: '',
    }
  },
  methods: {
    onClickConvert: function(){
      try {
        if(this.target){
          // sample
          // let sample = {
          //   "display": 'flex',
          //   flexDirection: 'row-reverse',
          //   'justify-content': 'space-around',
          //   "align-items": "center",
          // }
          this.output = jsxToCss(this.input)
        } else {
          //sample
          // display: flex;
          // flex-direction: row-reverse;
          // justify-content: space-around;
          // align-items: center;
          this.output = cssToJsx(this.input)
        }
      } catch (err){
        alert('something input wrong!')
        console.log(err)
      }
    },
    onClickReverseBtn: function(){
      this.target = !this.target
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}

.title {
  font-size: 30px;
  font-weight: bold;
}

.reverseBtn {
  width: 40px;
  height: 40px;
  margin-top: 20px;
}

.reverseBtn:hover {
  cursor: pointer;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
}

.inner_form_left {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  margin: 20px;
}

.inner_form_right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 20px;
}

.style_input {
  width: 50%;
  height: 200px;
  font-size: 15px;
}

.style_output {
  width: 50%;
  height: 200px;
  font-size: 15px;
}

.convert_btn {
  width: 150px;
  height: 45px;
  margin-top: 20px;
  border-radius: 30px;
  font-size: 17px;
}
</style>
