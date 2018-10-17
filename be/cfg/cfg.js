module.exports = {
    db: {
      url : "mongodb+srv://nembv:nembv@cluster0-dwwl8.gcp.mongodb.net/nemvv"
    },
    web: {
      host: 'localhost:3000',
      cors: true,
      secret_key : 'yullinNemvv',
      http : {
        use : true,
        port : 3000,
        redirect : false
      },
      jwt: {
        expiresIn: '7d',
        reTokenTime: 60*60*1,// 60*10,
      },
    },
    pm2: {
      deploy: {
        production: {
          user: 'root',
          host : [
            {
              host: 'xxx.com',
              port: '20002',
            }
          ],
          ref  : 'origin/master',
          repo : 'git@github.com:goguy/nemvv.git',
          path : '/var/www/nemvv',
          'post-deploy' : 'yarn && cd fe && yarn && npm run build',
        },
        dev : {
          user: 'root',
          host : [
            {
              host: 'xxx.com',
              port: '20002',
            }
          ],
          ref  : 'origin/master',
          repo : 'git@github.com:goguy/nemvv.git',
          path : '/var/www/nemvv',
          'post-deploy' : 'yarn && cd fe && yarn && npm run build && cd .. && pm2 startOrRestart ecosystem.config.js',
        }
      },
    },
    mail: {
      host: 'smtp.xxx.com',
      port: 25,
      secure: false,
      auth: {
        user: 'admin@xxx.com',
        pass: 'emailpwd',
      },
    },
    dev : {
      log : true,
    },
  };
  