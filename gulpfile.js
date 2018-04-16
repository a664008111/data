var gulp=require("gulp")
var scss=require("gulp-sass")
var Css=require("gulp-clean-css")
var mins=require("gulp-uglify")
var htmlmin=require("gulp-htmlmin")
var clean=require("gulp-clean")
var rename=require("gulp-rename")
var server=require("gulp-webserver")
var sq=require("gulp-sequence")

gulp.task("readcss",function(){
    gulp.src("css/style.scss")
    .pipe(scss())
    .pipe(Css())
    .pipe(rename("type.css"))
    .pipe(gulp.dest("./dist/css"))
})
gulp.task("readhtml",function(){
    gulp.src("index.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("dist"))
})
gulp.task("readjs",function(){
    gulp.src("!js/*.min.js")
    .pipe(mins())
    .pipe(gulp.dest("dist"))
})
gulp.task("server",function(){
   gulp.src(".")
   .pipe(server({
    port:8090,
        open:true,
        livereload:true,
        middlewras:function(req,res,next){
            next()
        }
    }))
})
gulp.task("default",
    ["readcss","readhtml","readjs","server"])
