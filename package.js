Package.describe({
  summary: "A radically powerful Text-Editor/Wysiwyg editor for Angular.js!",
  version: "0.0.5",
  git: "https://github.com/netanelgilad/meteor-textAngular.git",
  name: "netanelgilad:text-angular"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('urigo:angular@0.7.2', 'client');

  api.addFiles(["bower_components/bootstrap-css-only/css/bootstrap.css",
                "bower_components/bootstrap-css-only/fonts/glyphicons-halflings-regular.eot",
                "bower_components/bootstrap-css-only/fonts/glyphicons-halflings-regular.svg",
                "bower_components/bootstrap-css-only/fonts/glyphicons-halflings-regular.ttf",
                "bower_components/bootstrap-css-only/fonts/glyphicons-halflings-regular.woff",
                "bower_components/bootstrap-css-only/fonts/glyphicons-halflings-regular.woff2"] , 'client');

  api.addFiles(['bower_components/font-awesome/css/font-awesome.css',
                'bower_components/font-awesome/fonts/FontAwesome.otf',
                'bower_components/font-awesome/fonts/fontawesome-webfont.eot',
                'bower_components/font-awesome/fonts/fontawesome-webfont.svg',
                'bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
                'bower_components/font-awesome/fonts/fontawesome-webfont.woff',
                'bower_components/font-awesome/fonts/fontawesome-webfont.woff2'], 'client');

  api.use('maxharris9:rangy@0.0.1', 'client');

  api.addFiles(['bower_components/textAngular/dist/textAngular-rangy.min.js',
                'bower_components/textAngular/dist/textAngular-sanitize.min.js',
                'bower_components/textAngular/dist/textAngular.min.js'], 'client');

  // Client files.
  api.addFiles('init.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:text-angular', 'client');
  api.addFiles('netanelgilad:text-angular-tests.js', 'client');
});
