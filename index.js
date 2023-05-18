const shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

const path = process.cwd()
shell.cd(path)
shell.exec("curl 'https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/stubs/config.full.js' > tailwind.config.js")