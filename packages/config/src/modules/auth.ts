import { IConfigModule } from '@xarples/types'

const config: IConfigModule = {
  service: {
    host: 'https://accounts.xarples.com',
    port: 5001
  },
  db: {
    username: process.env.DB_USERNAME || 'xarples',
    password: process.env.DB_PASSWORD || 'xarples',
    database: process.env.DB_NAME || 'xarples_auth',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: 5432
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost'
  }
}

if (process.env.NODE_ENV !== 'production') {
  config!.db!.host = process.env.DB_HOST || 'localhost'

  config.service = {
    host: 'localhost',
    port: 5001
  }
}

if (process.env.NODE_ENV === 'test') {
  config!.db!.dialect = 'sqlite'
}

export default config
