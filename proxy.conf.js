const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://3.93.188.18/',
    secure: false,
    loglevel: 'debug',
    pathRewrite: {'^/api' : ''}
  }
];

module.exports = PROXY_CONFIG
