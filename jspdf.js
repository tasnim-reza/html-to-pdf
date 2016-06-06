var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
            
            function pdfDownload(){
                 var fileName = "test.pdf";
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
var text="Hello, world !";
            // base64 string
            var binary = "%PDF-1.7\n\n"+
"1 0 obj  % entry point\n"+
"<<\n"+
"  /Type /Catalog\n"+
"  /Pages 2 0 R\n"+
">>\n"+
"endobj\n\n"+

"2 0 obj\n"+
"<<\n"+
"  /Type /Pages\n"+
"  /MediaBox [ 0 0 200 200 ]\n"+
"  /Count 1\n"+
"  /Kids [ 3 0 R ]\n"+
">>\n"+
"endobj\n\n"+

"3 0 obj\n"+
"<<\n"+
"  /Type /Page\n"+
"  /Parent 2 0 R\n"+
"  /Resources <<\n"+
"    /Font <<\n"+
"      /F1 4 0 R \n"+
"    >>\n"+
"  >>\n"+
"  /Contents 5 0 R\n"+
">>\n"+
"endobj\n\n"+

"4 0 obj\n"+
"<<\n"+
"  /Type /Font\n"+
"  /Subtype /Type1\n"+
"  /BaseFont /Times-Roman\n"+
">>\n"+
"endobj\n\n"+

"5 0 obj  % page content\n"+
"<<\n"+
"  /Length 44\n"+
">>\n"+
"stream\n"+
"BT\n"+
"70 50 TD\n"+
"/F1 12 Tf\n"+
"("+text+") Tj\n"+
"ET\n"+
"endstream\n"+
"endobj\n\n"+

"xref\n"+
"0 6\n"+
"0000000000 65535 f \n"+
"0000000010 00000 n \n"+
"0000000079 00000 n \n"+
"0000000173 00000 n \n"+
"0000000301 00000 n \n"+
"0000000380 00000 n \n"+
"trailer\n"+
"<<\n"+
"  /Size 6\n"+
"  /Root 1 0 R\n"+
">>\n"+
"startxref\n"+
"492\n"+
"%%EOF";
            
            // decode base64 string, remove space for IE compatibility
           //var binary = atob(base64str.replace(/\s/g, ''));
            
            // get binary length
            var len = binary.length;
            
            // create ArrayBuffer with binary length
            var buffer = new ArrayBuffer(len);
            
            // create 8-bit Array
            var view = new Uint8Array(buffer);
            
            // save unicode of binary data into 8-bit Array
            for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
            }       
                        
            // create the blob object with content-type "application/pdf"               
            var file = new Blob( [view], { type: "application/pdf" });


            //var file = new Blob([result.data], {type: 'application/pdf'});
                var fileURL = window.URL.createObjectURL(file);
                a.href = fileURL;
                a.download = fileName;
                a.click();
                
                
                
                //window.open("data:application/pdf;base64," + Base64.encode('out'));
            }