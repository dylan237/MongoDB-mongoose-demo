> [官方文件](https://mongoosejs.com/docs/index.html)

## MongoDB 基本指令
下載
```zsh
npm install mongoose
```

查詢 MongoDB 版本
```zsh
mongod --version
```

開啟資料庫
```zsh
mongo
```

查看所有資料庫
```zsh
show dbs
```

切換至該資料庫 (資料庫不需要存在, 使用此指令後該資料庫會自動產生)
```zsh
use [資料庫名稱]
```

查詢目前所在資料庫
```zsh
db
```

查看該資料庫所有的集合 collections ( 類似Table )
```zsh
show collections
```

列出該集合的資料內容 
```
db.集合名稱.find()
```