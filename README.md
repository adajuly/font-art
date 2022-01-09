## font-art

#### 一个可以给字体设置艺术字的精简库，可以设置平面艺术字，也可以设置 3D 艺术字。

### 怎么使用

安装 font-art

```
npm i font-art --save
```

引入

```
import fontArt from 'font-art';

<fontArt @fontArtChange="getFontStyle" />
```

getFontStyle 可以把字效字效样式返回，接收到的样式对象绑定到对应的文字结构即可。

<img src="https://github.com/adajuly/libs/blob/main/fontArt.png?raw=true" height="620" width="500" />

### 开发

```bash
npm i
npm run dev
```

### 打包构建

```bash
npm run build
```
