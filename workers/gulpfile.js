const
  gulp = require('gulp'),
  del = require('del'),
  babel = require('gulp-babel'),
  nodemon = require('gulp-nodemon')

gulp.task('default', ['build']);

gulp.task('watch', ['build'], () => nodemon({
  script: 'dist/', // run ES2015 code
  watch: 'src', // watch ES2016 code
  tasks: ['build'] // compile synchronously onChange
}));

gulp.task('build', ['jsons', 'compile']);

// Clean output directory
gulp.task('clean', () => del(['dist']));

gulp.task('jsons', ['clean'], () => gulp
  .src('./src/**/*.json')
  .pipe(gulp.dest('./dist')) // write them
);

gulp.task('compile', ['clean'], () => gulp
  .src('./src/**/*.js') // your ES2015 code
  .pipe(babel()) // compile new ones
  .pipe(gulp.dest('./dist')) // write them
);
