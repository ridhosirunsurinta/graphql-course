const app = require('./server/server');
const chalk = require('chalk');

app.listen(4000, () => {
  console.log('Listening on port ' + chalk.bgHex('#0189D2').hex('#FFFFFF')(' 4000 '));
});
