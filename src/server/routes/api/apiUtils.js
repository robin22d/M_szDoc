const pino = require('pino');

const pretty = pino.pretty();
pretty.pipe(process.stdout);
const log = pino({ level: 'debug', serializers: pino.stdSerializers }, pretty);

module.exports = {

  JSONOutput: (res, err, results) => {
    if (err) {
      log.error('ERROR: ', err);
      return (
        res.status(500).json({
          confirmation: 'fail',
          message: err
        })
      );
    }
    return (
      log.info('Correct response from the database.'),
      res.status(201).json({
        confirmation: 'success',
        message: results
      })
    );
  }
};
