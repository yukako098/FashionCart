const gulp = require("gulp");
const sass = require("gulp-sass");

// style.scssの監視タスクを作成する
gulp.task("default", function() {
    // ★ style.scssファイルを監視
    return gulp.watch("scss/style.scss", function() {
        // style.scssの更新があった場合の処理

        // style.scssファイルを取得
        return (
            gulp
                .src("scss/style.scss")
                // Sassのコンパイルを実行
                .pipe(
                    sass({
                        outputStyle: "expanded"
                    })
                        // Sassのコンパイルエラーを表示
                        // (これがないと自動的に止まってしまう)
                        .on("error", sass.logError)
                )
                // cssフォルダー以下に保存
                .pipe(gulp.dest("css"))
        );
    });
});
