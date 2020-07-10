const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.autoload({
    'jquery': ['jQuery', '$'],
})

mix.js('resources/js/landing-page.js', 'public/js/landing-page.js')
.js('resources/js/landing-page/js/jquery-3.3.1.min.js', 'public/js/landing-page.js')
.js('resources/js/landing-page/js/jquery-ui.js', 'public/js/landing-page.js')
.js('resources/js/landing-page/js/popper.min.js', 'public/js/landing-page.js')
.js('resources/js/landing-page/js/bootstrap.min.js', 'public/js/landing-page.js')
.js('resources/js/landing-page/js/owl.carousel.min.js', 'public/js/landing-page.js')
.js('resources/js/landing-page/js/jquery.easing.1.3.js', 'public/js/landing-page.js')
.js('resources/js/landing-page/js/aos.js', 'public/js/landing-page.js')
.js('resources/js/landing-page/js/jquery.fancybox.min.js', 'public/js/landing-page.js')
.js('resources/js/landing-page/js/isotope.pkgd.min.js', 'public/js/landing-page.js')
.js('resources/js/landing-page/js/main.js', 'public/js/landing-page.js')
.sass('resources/sass/landing-page.scss', 'public/css/landing-page.css')
.version();
