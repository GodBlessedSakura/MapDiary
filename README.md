# MapDiary

## Introduction

Map Diary  --- ？



## Start

### npm install --- Install all packages and dependencies

The terminal may flash with some warning messages regarding the middleware configuration. This is due to some minor issue in create-react-app v5.0.0 and hopefully fixed in v5.0.1, but it does not affect anything.

 ### npm start --- Start the project in the live browser



## Branches Management

### Production Branch

* **Master branch**

### Development Branch

* **Dev-v1.0.0**

### Other Branches

* **Feature Branches**
* **Release Branches**
* **Hotfix Branches**



## Account & Password







<hr>

## 时间规划

- [ ] 三月初完成前端                     
- [ ] 后端、数据库
- [ ] 移动端适配

## UI设计

### 页面1：主页面

1. 中间为地图，上面有图钉📌。点击地图放置图钉，确认进入**页面2: 编辑页面**
2. 左边栏显示图钉内容概览，类似博客主页那种，包括：标题、时间、摘要、封面图等。可以点击展开，让它占据页面主要部分；也可以点击全屏，跳转到**页面3:全文显示页面**
    1. 摘要：用户可以自定义摘要，如果不自定义的话，则截取正文前100字
    2. 封面图：用户可以自定义，否则默认为正文第一张图，或者没有
3. 右边有一个【可爱】的滚动显示的东西（叫啥来着），鼠标放在上面可以滑动滚轮或者单击来切换前一个/后一个图钉📌
4. 右上角是功能区，可以登陆、设置等等，分别跳转到**页面4: 登录页面**、**页面5: 设置页面**
5. 【美好愿想】搜索框在左上角

### 页面2: 编辑页面

一个完整的文档编辑器。Markdown编辑和类知乎的普通编辑器最好都要支持👍

编辑完毕，点击发布，回到**页面1：主页面**

### 页面3: 全文显示页面

利用组件化似乎还挺好实现的。

点击返回，回到**页面1：主页面**

### 页面4: 登录页面

登录成功，进入**页面1：主页面**

### 页面5: 设置页面

设置用户昵称、头像，页面主题等等。

点击确认，生效并返回**页面1：主页面**

## 业务逻辑（……我好像在UI里面写了）

每个用户拥有一张自己的地图（世界地图or新加坡地图？），他可以在地图上自由打图钉、写笔记。爱旅游的人可以满地图打图钉、记旅游日记，平常人也可以记录自己的日常，只是跟一般的博客平台相比，这是以一张私人地图为载体的。

绝对不是商业化的，要干净、用户导向。所以跟旅游笔记分享平台比（如大众点评、携程？），这个平台凸显的是用户私人地图，而不是公开景点的评价。但跟一般的博客平台比（如简书、小红书？），要突出 Map 这个功能点。

功能点：
1. 用户可以注册、登录、设置
2. 地图可以打图钉，查看对应的文档
3. 编辑和发布文档：完整的博客功能，也就是说可以组织不同格式的文本，还可以插入图片、视频之类的多媒体
4. 查看聚合地图，不同地理坐标，其他人记录了些什么呢？（如果用户笔记权限设为公开的话）如果选择「查看他人的图钉」，则在地图上显示其他人的图钉，可以用另一种颜色标识
5. 移动端适配问题：霖哥说有点难度
6. 【暂时放在后面】搜索功能：搜索图钉or搜索地点。如果搜索地点的话，可能需要用到谷歌的付费API

## 技术选型

Node.js + npm + react，会用到react脚手架、[Leaflet库](https://github.com/Leaflet/Leaflet)等等。

再找找看有没有直接实现文本编辑器的框架或者库之类的🤔

Reference：

[Leaflet -- JavaScript library for mobile-friendly interactive maps](https://github.com/Leaflet/Leaflet)

[Leaflet.label -- plugin for adding labels to markers & shapes on leaflet powered maps.](https://github.com/Leaflet/Leaflet.label)

