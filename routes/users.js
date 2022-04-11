module.exports = function(app){
  app.get('/users', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      users:[{
        name: 'Adalberto Maia', 
        email:'btow.m@hotmail.com',
        id:1
      }]
    });
  });
  
  
  app.get('/users/admin', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      users: []
    });
  
  })
}

