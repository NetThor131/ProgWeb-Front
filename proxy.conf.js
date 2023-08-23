const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://pweb-api.duckdns.org/',
    secure: false,
    loglevel: 'debug',
    pathRewrite: {'^/api' : ''}
  }
];

module.exports = PROXY_CONFIG
