// Package metadata file for Meteor.js
var packageName = 'aaronroberson:ng-idle';
var where = 'client';
var version = '1.1.0';
var summary = 'Directives and services for responding to idle users in AngularJS. Repackaged for Meteor.';
var gitLink = 'https://github.com/aaronroberson/ng-idel';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.use('angular:angular@1.3.0', where)

  api.addFiles('angular-idle.js', where);
}); 