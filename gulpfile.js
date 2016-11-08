'use strict';

/*
 This is not a task file.
 This file handles other tasks to be run.
 */

var ROOT_TASK_DIR = './tasks/';

var fs = require('fs');
var tasksDir = fs.readdirSync(ROOT_TASK_DIR);

tasksDir.forEach(function(taskDir) {
  if (!fs.statSync(ROOT_TASK_DIR + taskDir).isDirectory()) {
    require(ROOT_TASK_DIR + taskDir);
  } else {
    var currentTaskDir = ROOT_TASK_DIR + taskDir + '/';
    var tasks = fs.readdirSync(currentTaskDir);

    tasks.forEach(function(task) {
      require(ROOT_TASK_DIR + taskDir + '/' + task);
    });
  }
});
