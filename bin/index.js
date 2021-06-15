#!/usr/bin/env node
const { program, option } = require('commander')

program
  .command('create')
  .description('Create a new project by options')
  .option('-t, --type <type>', 'type of project', 'react')
  .option('-s, --simple', 'Whether to choose simple mode')
  .action((options) => {
    console.log(options)
  })

program.parse()
