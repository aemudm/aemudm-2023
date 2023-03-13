module.exports = {
    content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
    css: ['./src/**/*.scss'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  }