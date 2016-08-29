import $ from 'jquery';


    //传绝对路径的方式 开始
/*$('.submit').on('click',function(){
    let path=showPic($('#fileUpload')[0]);
    alert(path)
    $.ajax({
        url:"/qiniu",
        cache: false,
        type: 'post',
        async:false,
        dataType: 'json',
        data:{
            path:path
        },
        success : function (json) {
            console.log(json)
        }

    })
})*/
    //传绝对路径的方式 结束

    $('.modal-default-button').on('click',function(){
        alert('0000000')
        var formData=new FormData($("#uploadForm")[0]);

        $.ajax({
            url:"/qiniu",
            cache: false,
            type: 'post',
            async:false,
            dataType: 'json',
            processData: false,
            contentType: false,
            data:formData,
            success : function (json) {
                console.log(json)
            }

        })
        console.log(formData)
        var time=new Date().getTime();
        console.log(time+'000')
        alert('11111111111');
        // let formData=new FormData('#uploadForm')[0];
        // console.log(formData)
    })



function showPic(obj) {
    var fullPath = getFullPath(obj);
    if (fullPath) {
        // document.getElementById("pic").src = fullPath + "";
        return fullPath;
    }
}

function getFullPath(obj) {
    if (obj) {
        //Internet Explorer
        if (window.navigator.userAgent.indexOf("MSIE") >= 1) {
            obj.select();
            return document.selection.createRange().text;
        }
        //Firefox
        if (window.navigator.userAgent.indexOf("Firefox") >= 1) {
            if (obj.files) {
                var objectURL = window.URL.createObjectURL(obj.files[0]);
                return objectURL;
            }
            return obj.value;
        }

        //兼容chrome、火狐等，HTML5获取路径
        if (typeof FileReader != "undefined") {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("pic").src = e.target.result + "";
            }
            reader.readAsDataURL(obj.files[0]);
        } else if (browserVersion.indexOf("SAFARI") > -1) {
            alert("暂时不支持Safari浏览器!");
        }

    }
}


// $('.submit22').on('click',function(){
//     showPic($('#filePath')[0]);
// })