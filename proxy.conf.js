const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://3.91.5.48/',
    secure: false,
    loglevel: 'debug',
    pathRewrite: {'^/api' : ''}
  }
];

module.exports = PROXY_CONFIG
