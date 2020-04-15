import * as Express from 'express';
import { getConnectionOptions, createConnection, BaseEntity } from 'typeorm';
import Router from './api/v1/routes/Router';
import * as Dotenv from 'dotenv';

const path = process.env.NODE_ENV == 'develop' ? '../.develop.env' : '../.env';
Dotenv.config({ path: path });

const main = async () => {
  const app = Express();
  const port = process.env.APP_PORT;
  const connectionOptions = await getConnectionOptions();
  const connectiosn = await createConnection(connectionOptions);
  BaseEntity.useConnection(connectiosn);

  app.use(Express.json());
  app.use(Express.urlencoded({ extended: true }));
  app.use('/api/v1/', Router);

  app.listen(port, () => {
    console.log('Example app listening on port', port);
  });
};

main();
