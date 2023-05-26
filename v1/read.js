const { client } = require('../pg');

module.exports.handler = async () => {
  const region = `aws-${process.env.AWS_REGION}`;

  try {
    await client.connect();

    const response = await client.query('SELECT * FROM data WHERE region = $1', [region]);

    await client.clean();

    if (!response.rows) {
      return {
        statusCode: 404,
        headers: headers,
        body: JSON.stringify({ message: 'Read v1 - Error' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'READ v1 - A Ok!',
        data: response.rows,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'READ v1 - Error!',
      }),
    };
  }
};
