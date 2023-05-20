module.exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'API v1 - A Ok!',
      region: process.env.AWS_REGION,
    }),
  };
};
