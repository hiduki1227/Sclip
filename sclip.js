function (copy_txt) {
    var str = copy_txt;
    
    var listener = function(e){
    
        e.clipboardData.setData("text/plain" , str);    
        // 本来のイベントをキャンセル
        e.preventDefault();
        // 終わったら一応削除
        document.removeEventListener("copy", listener);
    }
    
    // コピーのイベントが発生したときに、クリップボードに書き込むようにしておく
    document.addEventListener("copy" , listener);
    
    // コピー
    document.execCommand("copy");
}
