const ServerlessClient = require('serverless-postgres');

const connectionString = process.env.DATABASE_URL;

const client = new ServerlessClient({
  application_name: 'multi-region-node-lambda-api',
  connectionString,
  strategy: 'minimum_idle_time',
  maxConnections: 1000,
  debug: true,
});

module.exports = {
  client,
};
