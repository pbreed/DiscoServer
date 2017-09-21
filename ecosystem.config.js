module.exports = {
  apps: [{
    name: 'discoserver',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-221-65-53.us-east-2.compute.amazonaws.com',
      key: '~/keys/DiscoServer.pem',
      ref: 'origin/master',
      repo: 'git@github.com:pbreed/DiscoServer.git',
      path: '/home/ubuntu/DiscoServer',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
