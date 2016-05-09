
// JavaScript Document
var s_movieName = "";

function Flash_embedSWF(srcURL,srcID,swfbgColor,sW,sH,sfv) {
s_movieName = srcID;

var defaultColor = (document.bgColor != null) ? document.bgColor :"#ffffff";
var bgcolor = (swfbgColor != null) ? swfbgColor : defaultColor;

var objectStr = '<OBJECT classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' +
'codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"' +
'ID="' + srcID + '" WIDTH="' + sW + '" HEIGHT="' + sH + '">' +
'<PARAM NAME="movie" VALUE="' + srcURL + '">' +
'<PARAM NAME="allowScriptAccess" VALUE="sameDomain">' +
'<PARAM NAME="quality" VALUE="high">' +
'<PARAM NAME="wmode" VALUE="transparent">'+
'<PARAM NAME="flashvars" VALUE="'+sfv+'&s_movieID='+srcID+'">'+
'<PARAM NAME="autostart" VALUE="false">'+
'<PARAM NAME="bgcolor" VALUE=' + bgcolor + '>' +
'<embed src="' + srcURL + '" quality="high"' + 'bgcolor="' +
bgcolor + '"' + 'width="' + sW + '" height="' + sH + '"wmode="transparent" swLiveConnect="true" flashvars="'+sfv+'&s_movieID='+srcID+'"' + 'type="application/x-shockwave-flash" allowScriptAccess="sameDomain" NAME="' + srcID + '"' +'pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></OBJECT>';

document.write(objectStr);
}



