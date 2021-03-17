# URL地址解析

### URL/URI/URN 

> URL: Uniform resource Locator:统一资源定位符，根据这个东西可以找到对应资源
> URI: Uniform resource Identifier:同一资源标识符，URL是URLI的子集。。。
> URN: Uniform resource Name: 同一资源名称，国际上一些通用的名字，比如ISNB

### URL包含的内容
> https:baidu.com/stu/index.html?from=google#top
- 协议 https://  能把客户端和服务端通信信息传递的工具（类似快递小哥）
  + http 超文本传输协议（文本，xml, json(restful), 多媒体流媒体资源)
  + https 更加安全的http, 涉及支付的网站。。。SSL证书（加密传输）443
  + ftp 文件传输协议 (一般应用：将 大型文件上传到服务器)
  + 如果项目采用默认端口号，书写地址的时候不用加端口号，浏览器默认加上
- 端口： 0- 65535（默认80不显示） 端口号区分同一台服务器上的不同项目
- 域名 baidu.com （作为ip地址的表示，方便记忆）
  + 顶级域名（需要购买,以下有由顶级分配)
  + 一级域名
  + 二级域名
  + 三级域名
  + .gov政府
  + .io博客
- 请求资源路径名称： /stu/index.html
  + 默认路径名或者名称 （xx.com/stu 服务器上自己配置的默认资源)
  + 用户注意伪URL地址的处理 https:item.jd.hk/12312.html => https:item.jd.hk/index.php?id=12312(URL重写)增加SEO搜索引擎优化，动态的网址不能够收缩引擎收入,将动态网址静态化
- 问号传参: ?from=google
  + 客户端将信息传递给服务器
    + URL问号传参 
    + 请求报头文
  + 不同页面之间的信息交互；列表到详情
- 哈希值: #top
  + 锚点定位
  + 基于HASH实现路由管控(不同的hash值展示不同的组件)


服务器： 
1. 根据端口号找到对应的服务
2. 根据路径名找到资源文件
3. 读取资源文件
4. 发送给请求方 