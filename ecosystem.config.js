module.exports = {
    apps: [
        {
            name: 'FlaskAdmin',
            port: '3005',
            interpreter: 'node@16.20.0',
            instances: 'max',
            script: 'npm',
            args: 'run serve',
            env_production: {
                NODE_ENV: 'production',
                NUXT_SITE_URL:'https://www.flask-admin.com'
            },
            env_development: {
                NODE_ENV: 'development',
                NUXT_SITE_URL:'https://development.flask-admin.com'
            }
        }
    ],
    deploy: {
        development: {
            host: '44.231.36.180',
            user: 'ubuntu',
            ref: 'origin/main',
            repo: 'https://victtorl:glpat-3ny8wEyfGocHCx6kKqcn@gitlab.com/komarca/flask-admin.git',
            path: '/home/deploys/dia-esperado-nuxt',
            'post-deploy': 'source ~/.nvm/nvm.sh && nvm use 16 && node -v && npm install --legacy-peer-deps && npm run build && pm2 restart ecosystem.config.js --env production',
            'pre-setup': ''
        },
        production: {
            host: '144.202.64.126',
            key: './witreel-key',
            user: 'root',
            ref: 'origin/main',
            repo: 'https://victtorl:glpat-3ny8wEyfGocHCx6kKqcn@gitlab.com/komarca/flask-admin.git',
            path: '/home/deploys/flask-admin',
            'post-deploy': 'source ~/.nvm/nvm.sh && nvm use 16 && node -v && npm install --legacy-peer-deps && npm run build:dev && pm2 restart ecosystem.config.js --env development',
            'pre-setup': ''
        }
    }
}
