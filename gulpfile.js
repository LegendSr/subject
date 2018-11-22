var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// 监视文件改动并重新载入
gulp.task('serve', function() {
  browserSync({
    server: {
    }
  });

  gulp.watch(['*.html'], {cwd: './'}, reload);
});
