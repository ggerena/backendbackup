const express = require('express')
const app = express()
const path = require('path')

function useAngular(req, res, next){
  res.sendFile(require('path').join(__dirname, '../frontend/WebContent/index.html'));
}

app.get('/', useAngular);

//otras rutas no encontradas o que no comiencen con /ms se manejan con AngularJS
app.all(/^(?!\/ms).*$/, useAngular);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
