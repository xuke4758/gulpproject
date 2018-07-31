//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    sass = require('gulp-ruby-sass');

//定义一个testLess任务（自定义任务名称）
gulp.task('less', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('./dist/less/css')); //将会在src/css下生成index.css
});

gulp.task('scss', function () {
    return sass('src/scss/index.scss')
        .on('error', sass.logError) // 错误信息
        .pipe(gulp.dest('./dist/scss/css'));
})

gulp.task('watch', function(){
    gulp.watch('src/scss/*.scss', ['scss']);
    gulp.watch('src/less/*.less', ['less']);
    // Other watchers
})

// gulp.task('default',['less', 'elseTask', 'scss']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
 
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径