const { client } = require('../pg');

module.exports.handler = async () => {
  const date = new Date();
  const region = `aws-${process.env.AWS_REGION}`;

  try {
    // Remove for production
    throw new Error('Disabled for demo');

    await client.connect();

    await client.query('INSERT INTO data (date, region) VALUES($1, $2)', [date, region]);

    await client.clean();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'CREATE v1 - A Ok!',
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'CREATE v1 - Error!',
      }),
    };
  }
};
