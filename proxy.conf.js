const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://54.226.157.65/',
    secure: false,
    loglevel: 'debug',
    pathRewrite: {'^/api' : ''}
  }
];

module.exports = PROXY_CONFIG
