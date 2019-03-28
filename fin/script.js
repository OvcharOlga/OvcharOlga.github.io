var imgArray = new Array("ed_a","ed_b","ed_c","ed_d","ed_e","ed_f","ed_g","ed_h","ed_i");
var len = imgArray.length
var imgDir = "";
var num = 0;

for (i = 0; i < len; i++) {
   imageObj1 = imgArray[i] + "";
   temp = eval(imageObj1 + " = new Image()");
   temp.src = imgDir + imageObj1 + ".png";
}

function StartCycle() {
   eval("document."+imgArray[num]+".src = "+imgArray[num]+".src");
   num = num + 1;

 if (num < len) {
    setTimeout("StartCycle()", 1000);
        }
}
