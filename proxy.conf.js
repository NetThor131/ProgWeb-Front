const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://54.167.5.167/',
    secure: false,
    loglevel: 'debug',
    pathRewrite: {'^/api' : ''}
  }
];

module.exports = PROXY_CONFIG
