var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var glob = require('glob');
var fs = require('fs');
var q = require('q');
var mod = require('./gulp-modulos');
arrRequire = [];
arrRequirePosition = [];
arrInjection = [];
arrInjectionPosition = [];
arrCss = [];
arrCssPosition = [];
gulp.task('modulos', [/*'clean'*/],function(cb) {

    // var modulos = gulp.src('app/scripts/modules/index.js')
    //     .pipe($.rename('modulos.js'));
        //.pipe(gulp.dest('.tmp'));

    return glob('app/scripts/modules/**/package.json',function(err,files){
        
        files.map(function(path){
            var package = JSON.parse(fs.readFileSync(path));
            var currentPath = '../app/scripts/modules/'+path.substring(path.indexOf('modules')+8,path.length-13);
            if(package.disabled==true) return;
            if(!package.name){
                console.error("O package.json do módulo " + currentPath + " não possui o atributo name. Caso queira que ele seja incluído, adicione esse atributo.");
                return;
            }
            
            var contentRequire = "require('"+currentPath+"');\n\t";
            var contentInjection = "'"+ package.name +"'";
            var contentCss = '';
            if(package.css){
                if(typeof(package.css)=="string") package.css = [package.css];
                package.css.map(function(item){
                    var inline = (item.indexOf('.css')>-1) ? '(inline)' : ''; 
                    contentCss += "@import " + inline + " \""+currentPath+"/"+item+"\";\n";
                });
            }

            if(package.position)
            {
                --package.position;
                arrRequirePosition.splice(package.position,0,contentRequire);
                arrInjectionPosition.splice(package.position,0,contentInjection);
                arrCssPosition.splice(package.position,0,contentCss);
            }
            else{
                arrRequire.push(contentRequire);
                arrInjection.push(contentInjection);
                arrCss.push(contentCss);
            }
            
            

        });

        arrRequire = arrRequirePosition.concat(arrRequire);
        arrInjection = arrInjectionPosition.concat(arrInjection);
        arrCss = arrCssPosition.concat(arrCss);

        var moduloQ = q.defer();
        gulp.src('app/scripts/modules/index.js')
            .pipe($.rename('modulos.js'))
            .pipe($.injectString.before('/*END_REQUIRE_MODULE*/', arrRequire.join("")))
            .pipe($.injectString.before('/*END_MODULE_INJECTION*/', arrInjection.join(",\n\t\t") ))
            .pipe(gulp.dest('.tmp'))
            .on('end',function(){
                moduloQ.resolve();
            })

        var cssQ = q.defer();
        gulp.src('app/styles/less/app-brb.less')
            .pipe($.injectString.before('/*END_REQUIRE_CSS_MODULE*/', arrCss.join("")))
            .pipe(gulp.dest('.tmp'))
            .on('end',function(){
                cssQ.resolve();
            });

        q([moduloQ,cssQ]).then(function(){
           cb();
        })

    })


});


