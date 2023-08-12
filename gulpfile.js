import gulp from 'gulp';
import * as del from 'del';
import * as fs from 'fs';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export async function clean() {
  return del.deleteSync(['./dist']);
}
//VIEWS
async function cleanViews() {
  del.deleteSync(['./dist/views']);
}
async function copyViews() {
  gulp.src('./src/views/**/*.{ejs,pug}').pipe(gulp.dest('./dist/views'));
}
export async function watchViews() {
  const task = gulp.series(cleanViews, copyViews);
  task();
}
//data
async function cleanData() {
  del.deleteSync(['./dist/data']);
}
async function copyData() {
  gulp.src('./src/data/**/*').pipe(gulp.dest('./dist/data'));
}
export async function watchData() {
  const task = gulp.series(cleanData, copyData);
  task();
}
//ASSETS
async function copyAssets() {
  gulp.src('./src/public/assets/**/*').pipe(gulp.dest('./dist/public/assets'));
}
async function cleanAssets() {
  del.deleteSync(['./dist/public/assets']);
}
export async function watchAssets() {
  const task = gulp.series(cleanAssets, copyAssets);
  task();
}
//packageJson
export async function createPackageJson() {
  setTimeout(() => {
    const content = '{"type":"commonjs"}';
    fs.writeFileSync('dist/package.json', content);
  }, 400);
}
//SASS-CSS
async function buildStyles() {
  return gulp
    .src('./src/public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/public/css'));
}
async function cleanStyles() {
  del.deleteSync(['./dist/public/css']);
}
export async function watchStyles() {
  const task = gulp.series(cleanStyles, buildStyles);
  task();
}
export default gulp.series(
  clean,
  createPackageJson,
  gulp.parallel(copyData, copyAssets, copyViews, buildStyles)
);
