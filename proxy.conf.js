const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://54.147.45.160/',
    secure: false,
    loglevel: 'debug',
    pathRewrite: {'^/api' : ''}
  }
];

module.exports = PROXY_CONFIG
