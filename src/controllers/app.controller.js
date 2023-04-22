exports.healthCheck = (_, res) => {
  res.json({ status: 'ok' });
};

exports.welcomePage = (_, res) => {
  res.send("Welcome!")
};