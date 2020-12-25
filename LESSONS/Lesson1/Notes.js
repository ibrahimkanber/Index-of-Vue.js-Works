new Vue({
  el:"#app",
  
  data:{
  name:"",
  title:"hello world",
  link:"https://clarusway.com/",
  bloglink:"<a href='http://vuejsegitim.com'>Link</a>",
  counter:0,
  counternew:0,
  x:0,
  y:0
  },
  
  methods:{
      changeTitle:function(event){
    this.title=event.target.value;
    /* console.log(event) */
    },
    hello:function(){
      this.title="new title"
      return this.title
    },
    showAlert:function(name){
      alert(name)
    },
    reset:function(){
      this.counter=0
    },
    showCoordinates:function(step,event){
      this.counter+=step
        this.x=event.clientX
        this.y=event.clientY
    },
    result:function(){
      return this.counternew >10 ? "bigger then 10":"smaller than 10"
    }
  
  },

  computed:{
    output:function(){
      return this.counter>10 ? "bigger than 10":"smaller than 10"
    }
  },

  watch:{
      counter:function(value){
        vm=this
        setTimeout(function(){
          vm.counter=0
        },1500)
      }
  }

})
/* 

ATTRIBUTE BINDING
----(v-bind)---
true:<a v-bind:href="link">clarusway</a>
false:<a v-bind:href={{link}}>clarusway</a>
---(v-once)---
<p v-once>{{title}}</p>
---(v-html)---
<p v-html="bloglink"></p>
---(v-on)----
 <input v-on:input="changeName"/>
---(modifiers)
<span v-on:mousemove.stop>Dont change values if mouse over me!!!</span>
---(v-model)---
<input type="text" v-model="name" placeholder="v-model exercise" />
---(v-on=@)----
 <button @click="counter++">increasewith @</button>
---(v-bind= :)---
 <a :href="link">: link</a>
---(style)-----

<div class="box" :class="{yellow:attachedClass}">box 3</div>
<div class="box" :class="color">box 3</div>
<div class="box" :class="[color,{yellow:attachedClass}]">box 3</div>
<div class="box" :style="customStyle" >box 4</div>
*/