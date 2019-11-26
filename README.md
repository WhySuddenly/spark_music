# 火花音乐播放器(0.1.0)

使用React做的一个简单的网页音乐播放器React练手项目，新手适用。
##### API用的是网易云音乐的，[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

### 技术栈
- react
- redux
- react-redux
- redux-thunk
- styled-compnents
- axios
- immutable
- redux-immutable
- antd

### 安装
	git clone git@github.com:WhySuddenly/spark_music.git
	npm install

### 运行
	npm start

\* 注意：项目里面网易云API我用的是 localhost：4000 端口，请务必把网易云API项目拷下来之后在 `app.js` 里面修改端口号为 4000 \*

	const port = process.env.PORT || 4000

### IDE
VScode

### 实现的功能
- 暂停/播放
- 进度条拖动
- 歌词滚动
- 背景图随专辑图改变
- 音量调节
- 上一首/下一首
- 歌单切换
- 歌曲搜索

\* 后续会添加更多源，敬请期待... 
\* 现在是网页PC版的排版，后续会添加响应式排版

### 图片预览

![markdown](https://raw.githubusercontent.com/WhySuddenly/source/master/images/cover.png "首页")

![markdown](https://raw.githubusercontent.com/WhySuddenly/source/master/images/search.gif "搜索")

![markdown](https://raw.githubusercontent.com/WhySuddenly/source/master/images/play.gif "播放/暂停")

![markdown](https://raw.githubusercontent.com/WhySuddenly/source/master/images/Progress-bar.gif "进度条")

![markdown](https://raw.githubusercontent.com/WhySuddenly/source/master/images/song-sheet.gif "歌单")

![markdown](https://raw.githubusercontent.com/WhySuddenly/source/master/images/Lyric.gif "歌词滚动")


## 特别鸣谢
[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

