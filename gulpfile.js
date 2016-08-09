var gulp = require('gulp'),
	babel = require('gulp-babel'),
	print = require('gulp-print');

gulp.task('js', function() {
	return gulp.src('app/**/*.js')           // #1. select all js files in the app folder
	.pipe(print())                           // #2. print each file in the stream
	.pipe(babel({ presets: ['es2015'] }))    // #3. transpile ES2015 to ES5 using ES2015 preset
	.pipe(gulp.dest('build'));               // #4. copy the results to the build folder
});

gulp.task('es2015',function(){
	gulp.watch('app/**/**.js', ['js']);
})

gulp.task('default', function(){
	gulp.start('es2015');
})