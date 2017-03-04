/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

const path = require('path');
const fs = require('fs');
const tasks = fs.readdirSync('./gulp/tasks/').filter(name => /(\.(js)$)/i.test(path.extname(name)));

tasks.forEach(task => require('./tasks/' + task));
