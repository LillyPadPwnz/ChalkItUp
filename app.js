const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const log = console.log;

log(chalk.red.inverse.bold.underline('\t\tObelius'));
log(chalk.green('\tObelius was a man of many feats.'));
log(chalk.green.italic('\tHe was known for being the son of Cratos.'));
log(chalk.green.dim('\tHarboring the strength of physicality.'));
log(chalk.green.strikethrough('\tThe strength of mentality.'));
log(chalk.green.dim('\tThe strength of spirituality.'));
log(chalk.cyan.bold('\tAnd the strength of emotion.'));

chalkAnimation.rainbow('\t-Story by Austin Lilly-', 0.5);
