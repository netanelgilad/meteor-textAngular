Package.describe({
  summary: "A radically powerful Text-Editor/Wysiwyg editor for Angular.js!",
  version: "0.0.4",
  git: "https://github.com/netanelgilad/meteor-textAngular.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('mquandalle:bower@0.1.11', 'client');
  api.use('urigo:angular@0.4.5', 'client');

  api.addFiles('bower.json', 'client');

  api.addFiles('.meteor/local/bower/textAngular/dist/textAngular-sanitize.min.js', 'client');

  // Client files.
  api.addFiles('init.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:text-angular');
  api.addFiles('netanelgilad:text-angular-tests.js');
});