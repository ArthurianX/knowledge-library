/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
    /**
     * The `build_dir` folder is where our projects are compiled during
     * development and the `compile_dir` folder is where our app resides once it's
     * completely built.
     */
    build_dir: 'build',
    compile_dir: 'bin',
    production_dir: '../client/www',

    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks. `js` is all project javascript, less tests. `ctpl` contains
     * our reusable components' (`src/common`) template HTML files, while
     * `atpl` contains the same, but for our app's code. `html` is just our
     * main HTML file, `less` is our main stylesheet, and `unit` contains our
     * app's unit tests.
     */
    app_files: {
        js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/**/*.e2e.js', '!src/assets/**/*.js' ],
        jsunit: [ 'src/**/*.spec.js' ],

        coffee: [ 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
        coffeeunit: [ 'src/**/*.spec.coffee' ],

        atpl: [ 'src/app/**/*.tpl.html' ],
        ctpl: [ 'src/common/**/*.tpl.html' ],

        html: [ 'src/index.html' ],
        less: 'src/less/main.less'
    },

    /**
     * This is a collection of files used during testing only.
     */
    test_files: {
        js: [
            'vendor/angular-mocks/angular-mocks.js'
        ]
    },

    /**
     * This is the same as `app_files`, except it contains patterns that
     * reference vendor code (`vendor/`) that we need to place into the build
     * process somewhere. While the `app_files` property ensures all
     * standardized files are collected for compilation, it is the user's job
     * to ensure non-standardized (i.e. vendor-related) files are handled
     * appropriately in `vendor_files.js`.
     *
     * The `vendor_files.js` property holds files to be automatically
     * concatenated and minified with our project source files.
     *
     * The `vendor_files.css` property holds any CSS files to be automatically
     * included in our app.
     *
     * The `vendor_files.assets` property holds any assets to be copied along
     * with our app's assets. This structure is flattened, so it is not
     * recommended that you use wildcards.
     */
    //TODO: We will use primary_files as the array to load the main libraries, when the logic is done in Gruntfile.js
    primary_files: {
      js: [
          'vendor/angular/angular.min.js'
      ]
    },
    vendor_files: {
        js: [
            'vendor/angular/angular.min.js',
            /* ABOVE are main files, for filtering and comparison we load them here first */
            'vendor/angular-animate/angular-animate.min.js',
            'vendor/angular-cookie/angular-cookie.min.js',
            'vendor/angular-ui-router/release/angular-ui-router.min.js',
            'vendor/angular-ui-utils/modules/route/route.js',
            'vendor/angular-promise-tracker/promise-tracker.js',
            'vendor/angular-promise-tracker/promise-tracker-http-interceptor.js',
            'vendor/angular-sanitize/angular-sanitize.min.js',
            'vendor/angular-rn-carousel/dist/angular-carousel.min.js',
            'vendor/angular-ui-router-anim-in-out/anim-in-out.js',
            'vendor/angular-touch/angular-touch.min.js',
            'vendor/hammerjs/hammer.min.js',
            'vendor/angular-hammer/angular-hammer.js',
            'vendor/angular-bootstrap/ui-bootstrap.min.js',
            'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'customlibs/highlight/highlight.pack.js',
            'vendor/angular-highlightjs/angular-highlightjs.min.js',


        ],
        css: [
            'vendor/bootstrap/dist/css/bootstrap.min.css',
            'vendor/bootstrap/dist/css/bootstrap-theme.min.css',
            'vendor/font-awesome/css/font-awesome.min.css',
            'customlibs/highlight/monokai.css',
        ],
        assets: [

        ],
        fonts: [
            'vendor/font-awesome/fonts/FontAwesome.otf',
            'vendor/font-awesome/fonts/fontawesome-webfont.eot',
            'vendor/font-awesome/fonts/fontawesome-webfont.svg',
            'vendor/font-awesome/fonts/fontawesome-webfont.ttf',
            'vendor/font-awesome/fonts/fontawesome-webfont.woff'
        ]
    },
};
