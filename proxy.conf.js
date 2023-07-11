const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://54.227.29.101/',
    secure: false,
    loglevel: 'debug',
    pathRewrite: {'^/api' : ''}
  }
];

module.exports = PROXY_CONFIG
