var file;
var sum=0;
var files = [];
document.getElementById("fileItem1").addEventListener("change", function(){
    file = document.getElementById('fileItem1');
    files.push.apply(files,file.files);
    fsize = file.files[0].size/(10**6);
    if (sum+fsize<=100){
    sum+=fsize;
    document.querySelector('.white_heading').textContent = (100-sum).toFixed(2);
    document.querySelector('.t').textContent = sum.toFixed(2);
    var progress_width = sum.toString() + "%";
    document.querySelector('.progress').style.width = progress_width;
    //if (sum>3)
    //    document.querySelector('.point').style.display = "flex";
}
});
document.getElementById("fileItem2").addEventListener("click", function(){
    var str = "The files you selected are: \n\n";
    for (var i=0;i<files.length;i++){
        str= str+files[i].name+"\n";
    }
    alert(str);
}
);
