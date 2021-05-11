### v-on 缩写： @
### 用于监听DOM事件或者自定义事件
```js
<div id="app">
        <p>

            <button @click="count+=1">Add 1</button>
            <span>count:{{count}}</span>
            <button @click="greet">Greet</button>
            <button @click="say('hi')">Hi</button>
        </p>
    </div>
    <script src="../node_modules/vue/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            data: {
                count: 0,
                message: "Hello Wolrd!"
            },
            methods: {
                greet(e) {
                    console.log(e);
                    alert(this.message);
                },
                say(msg) {
                    alert(msg);
                }
            },
        })
    </script>
```
### 事件修饰符
1. **.stop 调用event.stopPropagation()**

 2. **.prevent event.preventDefault() 阻止默认事件触发****
 3.  **.capture 捕获模式（DOM事件默认：捕获阶段）**
 4.  .self
 5.  .native
 6.  .once 回调只执行一次
 7.  .left
 8.  .right
 9.  .middle
 10. .passive

### 按键修饰符
1. .enter
2. .tab
3. .delee
4. .esc
5. .space
6. .up
7. .left
8. .right
9. .exact 用于精确控制修饰符组合触发的事件。

### 鼠标修饰符
 1. .left 
 2. .right
 3. .middle


### 备注
 这些修饰符看起来很难记，可以结合DOM原生事件来记忆，
 同时也不要过分停留在这点，以后实际开发中用到了再来查看也行。