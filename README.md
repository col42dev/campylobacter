campylobacter
=============

hygienic macros


http://gruntjs.com/getting-started


Update npm
$ npm update -g npm


Ensure node module folder has write permission
$sudo chown -R `whoami` /usr/local/lib/node_modules


Install grunt globally
$ npm install -g grunt-cli

/usr/local/bin/grunt -> /usr/local/lib/node_modules/grunt-cli/bin/grunt
grunt-cli@0.1.13 /usr/local/lib/node_modules/grunt-cli
├── resolve@0.3.1
├── nopt@1.0.10 (abbrev@1.0.5)
└── findup-sync@0.1.3 (lodash@2.4.1, glob@3.2.11)


$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (campylobacter) 
version: (1.0.0) 
description: nasty bug
entry point: (index.js) 
test command: 
git repository: campylobacter
keywords: hygienic macros
author: colin moore
license: (ISC) 
About to write to /Users/colinmoore/Dev/NodeJS/campylobacter/package.json:

{
  "name": "campylobacter",
  "version": "1.0.0",
  "description": "nasty bug",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "campylobacter"
  },
  "keywords": [
    "hygienic",
    "macros"
  ],
  "author": "colin moore",
  "license": "ISC"
}



This create custom package.json file. 


install the latest version of Grunt in your project folder, adding it to your devDependencies:


$ npm install grunt --save-dev
npm WARN package.json campylobacter@1.0.0 No README data
grunt@0.4.5 node_modules/grunt
├── which@1.0.7
├── dateformat@1.0.2-1.2.3
├── eventemitter2@0.4.14
├── getobject@0.1.0
├── rimraf@2.2.8
├── colors@0.6.2
├── hooker@0.2.3
├── async@0.1.22
├── grunt-legacy-util@0.2.0
├── exit@0.1.2
├── nopt@1.0.10 (abbrev@1.0.5)
├── minimatch@0.2.14 (sigmund@1.0.0, lru-cache@2.5.0)
├── lodash@0.9.2
├── glob@3.1.21 (inherits@1.0.0, graceful-fs@1.2.3)
├── coffee-script@1.3.3
├── underscore.string@2.2.1
├── iconv-lite@0.2.11
├── findup-sync@0.1.3 (glob@3.2.11, lodash@2.4.1)
├── grunt-legacy-log@0.1.1 (underscore.string@2.3.3, lodash@2.4.1)
└── js-yaml@2.0.5 (esprima@1.0.4, argparse@0.1.15)




$ npm install grunt-contrib-jshint --save-dev
npm WARN package.json campylobacter@0.1.0 No README data
grunt-contrib-jshint@0.10.0 node_modules/grunt-contrib-jshint
├── hooker@0.2.3
└── jshint@2.5.10 (strip-json-comments@1.0.2, underscore@1.6.0, exit@0.1.2, shelljs@0.3.0, minimatch@1.0.0, console-browserify@1.1.0, cli@0.6.5, htmlparser2@3.8.2)
$ npm install grunt-contrib-nodeunit --save-dev
npm WARN package.json campylobacter@0.1.0 No README data
grunt-contrib-nodeunit@0.4.1 node_modules/grunt-contrib-nodeunit
├── hooker@0.2.3
└── nodeunit@0.9.0 (tap@0.4.13)
$ npm install grunt-contrib-uglify --save-dev
npm WARN package.json campylobacter@0.1.0 No README data
grunt-contrib-uglify@0.6.0 node_modules/grunt-contrib-uglify
├── uri-path@0.0.2
├── lodash@2.4.1
├── chalk@0.5.1 (escape-string-regexp@1.0.2, ansi-styles@1.1.0, supports-color@0.2.0, has-ansi@0.1.0, strip-ansi@0.3.0)
├── uglify-js@2.4.15 (uglify-to-browserify@1.0.2, async@0.2.10, source-map@0.1.34, optimist@0.3.7)
└── maxmin@1.0.0 (figures@1.3.5, pretty-bytes@1.0.1, gzip-size@1.0.0)



$ grunt -v
Initializing
Command-line options: --verbose

Reading "Gruntfile.js" Gruntfile...OK

Registering Gruntfile tasks.
Reading package.json...OK
Parsing package.json...OK
Initializing config...OK

Registering "grunt-contrib-uglify" local Npm module tasks.
Reading /Users/colinmoore/Dev/NodeJS/campylobacter/node_modules/grunt-contrib-uglify/package.json...OK
Parsing /Users/colinmoore/Dev/NodeJS/campylobacter/node_modules/grunt-contrib-uglify/package.json...OK
Loading "uglify.js" tasks...OK
+ uglify
Loading "Gruntfile.js" tasks...OK
+ default

No tasks specified, running default tasks.
Running tasks: default

Running "default" task

Running "uglify" task

Running "uglify:build" (uglify) task
Verifying property uglify.build exists in config...OK
Files: src/campylobacter.js -> build/campylobacter.min.js
Options: banner="/*! campylobacter 2014-11-28 */\n", footer="", compress={"warnings":false}, mangle={}, beautify=false, report="min", expression=false, maxLineLen=32000, ASCIIOnly=false
Minifying with UglifyJS...Reading src/campylobacter.js...OK
OK
Writing build/campylobacter.min.js...OK
File build/campylobacter.min.js created: 61 B → 59 B
>> 1 file created.





