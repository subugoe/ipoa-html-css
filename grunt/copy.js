module.exports = {

  // copy HTML Inspector from bower_components to jekyll source folder
  htmlinspector: {
    src: 'bower_components/html-inspector/html-inspector.js',
    dest: 'js/vendor/html-inspector.js',
  },

  // copy picturefill to jekyll source folder
  picturefill: {
    src: 'bower_components/picturefill/dist/picturefill.min.js',
    dest: 'js/vendor/picturefill.js',
  },

  // copy jQuery to jekyll source folder
  jquery: {
    src: 'bower_components/jquery/dist/jquery.min.js',
    dest: 'js/vendor/jquery.js',
  },
  jqueryAdditionalFiles: {
    src: 'bower_components/jquery/dist/jquery.min.map',
    dest: 'js/vendor/jquery.min.map',
  },

};
