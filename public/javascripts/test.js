/**
 * Created by MaxCheng on 2016/8/27.
 */
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

function showPic(obj) {
    var fullPath = getFullPath(obj);
    if (fullPath) {
        document.getElementById("pic").src = fullPath + "";
    }
}