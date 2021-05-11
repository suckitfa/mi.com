#### v-pre
用于跳过这个元素和它的子元素的编译过程
对于大量没有指令的节点使用v-pre可以加速编译过程


### v-clock
这个指令保持在元素上直到关联实例编译结束，编译结束后该指令被移除。
可以用来做优化:遮盖直到Mastach准备好。 **指令以元素属性的形式来使用，在浏览器眼中就是属性！**

```js
<style>
        [v-cloak] {
            display: none;
        }
    </style>
</head>

<body>
    <div id="app">
        <h1 v-cloak>{{message}}</h1>
    </div>
    <script src="../node_modules/vue/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            data: {
                message: "Vue.js从入门到实战"
            }
        })
    </script>
</body>b
```