const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://54.167.43.169/',
    secure: false,
    loglevel: 'debug'
  }
];

module.exports = PROXY_CONFIG
