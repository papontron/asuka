import gulp from 'gulp';
import ts from 'gulp-typescript';
import * as del from 'del';
import * as fs from 'fs';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
const tsProject = ts.createProject('tsconfig.json');

async function compileTs() {
  tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist'));
}
export async function clean() {
  return del.deleteSync(['./dist']);
}
async function copyViews() {
  gulp.src('./src/views/**/*.{ejs,pug}').pipe(gulp.dest('./dist/views'));
}
async function copyAssets() {
  gulp.src('./src/public/assets/**/*').pipe(gulp.dest('./dist/public/assets'));
}
async function createPackageJson() {
  setTimeout(() => {
    const content = '{"type":"commonjs"}';
    fs.writeFileSync('dist/package.json', content);
  }, 400);
}
async function buildStyles() {
  return gulp
    .src('./src/public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/public/css'));
}
export default gulp.series(
  clean,
  createPackageJson,
  gulp.parallel(copyAssets, copyViews, buildStyles),
  compileTs
);
