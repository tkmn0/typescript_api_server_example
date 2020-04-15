const rootDir = process.env.NODE_LANGUAGE == 'ts' ? 'src' : 'dist';
const extention = process.env.NODE_LANGUAGE == 'ts' ? 'ts' : 'js';

module.exports = {
  type: 'mysql',
  host: process.env.NODE_ENV == 'develop' ? process.env.DB_HOST : 'localhost',
  port: process.env.NODE_ENV == 'develop' ? process.env.DB_PORT : 3306,
  username: 'root',
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_ROOT_PASSWORD,
  synchronize: false,
  logging: false,
  entities: [`./${rootDir}/models/**/*.${extention}`],
  migrations: [`./${rootDir}/db/migrations/**/*.${extention}`],
  subscribers: [`./${rootDir}/db/subscribers/**/*.${extention}`],
  cli: {
    entitiesDir: `./${rootDir}/entities`,
    migrationsDir: `./${rootDir}/db/migrations`,
    subscribersDir: `./${rootDir}/db/subscribers`,
  },
};
