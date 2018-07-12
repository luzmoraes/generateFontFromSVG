/* GENERATER ICONS FONTS - BEGIN */
var fs = require('fs')
var path = require('path')
var _ = require('underscore')
var webfontsGenerator = require('./_generateFonts/index')

const icons_path_dir = 'icons-dir/';
const icons_path_fonts = 'icons-fonts/';
            
// var SRC = path.join(__dirname, '..', 'icons-dir')
var SRC = icons_path_dir
var FILES = _.map(fs.readdirSync(SRC), function(file) {
    return path.join(SRC, file)
})
var OPTIONS = {
    // dest: path.join(__dirname, '..', 'icons-fonts'),
    dest: icons_path_fonts,
    files: FILES,
    fontName: 'sfFonts',
    types: ['svg', 'ttf', 'woff', 'woff2', 'eot'],
    html:  true
}

webfontsGenerator(OPTIONS, function(error) {
    if (error) console.log('Fail!', error)
    else console.log('Done!')
});
/* GENERATER ICONS FONTS - END */