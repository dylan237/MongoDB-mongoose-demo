const mongoose = require('mongoose')

const Schema = mongoose.Schema

// 1. 連結資料庫
mongoose.connect('mongodb://localhost:27017/mongooseDemo', {useNewUrlParser: true})

// 2. 設計集合(collection)結構 
//    - mongoDB的集合就像是 MySQL的Table
var blogSchema = new Schema({
  title:  {
    type: String,
    required: true // 表示 title 為必須要有的參數
  },
  author: String,
  body:   String,
  // comments: [{ body: String, date: Date }],
  // date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
})

// 3. 將檔案結構發布為模型
//   - mongoose.model 方法就是用來將一個架構發布為 model
//   - 參數1： 傳入一個"大寫名詞且為單數的字串"用來表示你的資料庫名稱
//           mongoose 會自動將大寫名詞的字串轉為"小寫復數"的集合名稱
//           'Blog' --> 'blogs'

// 返回值： 模型構造函式
var Blog = mongoose.model('Blog', blogSchema);

// 4. 當有了模型構造函式後, 之後就可以使用此構造函數對 blogs 集合中的數據做 CRUD 了
var article = new Blog({
  title: 'MongoDB 起步',
  author: 'Dylan',
  body:   '認識 MongoDB',
  hidden: false,
  meta: {
    votes: 10,
    favs:  5
  }
})


// 5. CRUD API

// - 新增資料
// article.save(function (err, result) {
//   if (err) {
//     console.log('保存失敗');
//   } else {
//     console.log('保存成功');
//     console.log(result);
//   }
// })

// - 查詢資料
//    - 查詢所有
// Blog.find(function (err, result) {
//   if (err) {
//     console.log('查詢失敗');
//   } else {
//     console.log('查詢成功');
//     console.log(result);
//   }
// })
//    - 條件查詢
//      +  find => 查詢到的陣列會多包著一層物件
//      +  findOne => 只回傳符合條件的陣列
// Blog.find({ title: 'MongoDB 起步' }, function (err, result) {
//   if (err) {
//     console.log('條件查詢失敗');
//   } else {
//     console.log('條件查詢成功');
//     console.log(result);
//   }
// })
// Blog.findOne({ title: 'MongoDB 起步' }, function (err, result) {
//   if (err) {
//     console.log('條件查詢失敗');
//   } else {
//     console.log('條件查詢成功');
//     console.log(result);
//   }
// })

// - 刪除資料
// Blog.remove({ title: 'MongoDB 起步' }, function (err, result) {
//   if (err) {
//     console.log('刪除失敗');
//   } else {
//     console.log('刪除成功');
//     console.log(result);
//   }
// })

// - 更新資料
Blog.findByIdAndUpdate('5d9da06d0e406f21cca12c8a',{ 
  title: '標題被修改了' 
}, function (err, result) {
  if (err) {
    console.log('更新資料失敗');
  } else {
    console.log('更新資料成功');
    console.log(result);
  }
})