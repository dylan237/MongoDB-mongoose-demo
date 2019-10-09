const mongoose = require('mongoose')

// 連接資料庫
//  - 連接的位置為本機的 kittyDB 資料庫, 這個資料庫不需要存在, 執行後會自動新增
mongoose.connect('mongodb://localhost:27017/kittyDB', {useNewUrlParser: true})

// 創建一個模型
//  - 就是在設計資料庫, MongoDB 是動態的, 非常靈活, 只需要在程式碼中設計你的資料庫就可以了, mongoose 這個套件可以讓你的設計編寫過程變得簡單
const Cat = mongoose.model('Cat', { name: String })

// 創建一個 Cat 實例
const kitty = new Cat({ name: 'Zildjian' })

// 持久畫保存 kitty 實例
kitty.save().then(() => console.log('meow'))