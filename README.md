# vue-
vue单页面文件上传裁切

#### 使用说明

1.  引入vue和element和config.js
2.  初始化vue实例
3.  使用<upload-pictures></upload-pictures>组件

#### 组件传参

1. only (Boolean) 默认上传单张图片
2. value (Array<String>| String) 初始值图片的连接 only为false value为Array
3. myfiles (String) 文件上传名 默认 file
4. disabled (Boolean) 只读 默认false
5. crop (Boolean) 随意裁切 默认false
6. multiple (Object) multiple.tips 提示信息如果又 w*h 则图片只能裁切找个大小 multiple.len(number)多文件上传的最大文件数,默认为3 multiple.data(Object) 额外的参数
7. url (String) 文件上传路径 
8. accept (String) 文件类型 默认'image/jpeg,image/png'
  
  上传成功返回参数 默认 res.status === 200 取得值为 res.src 根据个人需求在 config.js 的uploadSuccess 方法里修改
