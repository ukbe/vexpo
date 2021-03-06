var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.js.browserify.watchify = {
    enabled: true,
    options: {
        poll: true
    }
};

elixir(function(mix) {
    mix.sass('app.scss');
    mix.version(['css/app.css']);

    mix.browserify('app-root.js');
});

//elixir.Task.find('sass').watch('resources/assets/sass',['sass']);