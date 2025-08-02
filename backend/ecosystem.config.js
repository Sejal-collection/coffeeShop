module.exports = {
  apps: [{
    name: 'coffee-shop-api',
    script: 'server.js',
    cwd: '/opt/coffee-shop/backend',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/opt/coffee-shop/logs/err.log',
    out_file: '/opt/coffee-shop/logs/out.log',
    log_file: '/opt/coffee-shop/logs/combined.log',
    time: true,
    max_restarts: 10,
    min_uptime: '10s',
    exec_mode: 'fork'
  }]
};
