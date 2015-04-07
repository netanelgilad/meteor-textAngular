Package.describe({
  summary: "A radically powerful Text-Editor/Wysiwyg editor for Angular.js!",
  version: "1.3.7",
  git: "https://github.com/netanelgilad/meteor-textAngular.git",
  name: "netanelgilad:text-angular"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('angularjs:angular@1.3.15', 'client');

  api.use('twbs:bootstrap@3.3.4', 'client', { weak : true});
  api.use('fortawesome:fontawesome@4.3.0', 'client', { weak : true});
  api.use('maxharris9:rangy@0.0.1', 'client');

  api.addFiles(['textAngular.js',
                'textAngular-sanitize.js',
                'textAngularSetup.js',
                'textAngular.css'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:text-angular', 'client');
  api.addFiles('netanelgilad:text-angular-tests.js', 'client');
});
