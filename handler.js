'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: {
      message: process.env.GREETING,
      input: event,
    },
  };

  callback(null, JSON.stringify(response));
};
