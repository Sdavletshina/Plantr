const db = require('./models');
db.sync({force:true})
.then(()=>{
    console.log('database synced');
  db.close();
  })
  .catch( err => {
    console.log('something went wrong!');
    console.log(err);
    db.close();
  })

  // .finally(()=>{
  //   db.close()
  // })
