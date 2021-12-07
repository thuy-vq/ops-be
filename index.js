const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

var cors = require('cors');

app.use('*', createProxyMiddleware({
    target: 'https://ami-operation-portal-sandbox.public.tmn-dev.com/', 
    changeOrigin: true,
}));

const port = process.env.PORT || 3045

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
