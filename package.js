Package.describe({
  summary: "A radically powerful Text-Editor/Wysiwyg editor for Angular.js! Create multiple editor instances, two-way-bind HTML content, watch editors for changes and more!",
  version: "0.0.2",
  git: "https://github.com/netanelgilad/meteor-textAngular.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('urigo:ngmeteor@0.2.0', 'client');

  api.addFiles('textAngular.min.js', 'client');

  // Client files.
  api.addFiles('init.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:text-angular');
  api.addFiles('netanelgilad:text-angular-tests.js');
});