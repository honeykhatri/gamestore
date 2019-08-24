for (n=0; n<blength; n++) 
{
	for (i=0; i<blength; i++) 
	{
        document.write('<img src="images/hl1.gif" name="hrl' + n + + i +'" width="35" height="5" onclick="draw(usrname,hlname,'+n+','+i+')" onmouseover="show(hlname,'+n+','+i+')" onmouseout="unshow(hlname,'+n+','+i+')">');
      	}
      	document.write('<img src="images/hl1.gif" name="hrp" width="35" height="5">');
      	document.write('<br>');
      	for (i=0; i<blength; i++) 
	{
        document.write('<img src="images/vl1.gif" name="vrl' + n+ i+ '" width="5" height="30" onclick="draw(usrname,vlname,'+n+','+i+')" onmouseover="show(vlname,'+n+','+i+')" onmouseout="unshow(vlname,'+n+','+i+')">');
        document.write('<img src="images/nothing.gif" name="box' + n + i + '" width="30" height="30">');
      	}
      	document.write('<img src="images/vl1.gif" name="vrl' + n+ blength + '" width="5" height="30" onclick="draw(usrname,vlname,'+n+','+blength+')" onmouseover="show(vlname,'+n+','+blength+')" onmouseout="unshow(vlname,'+n+','+blength+')">');
      	document.write('<br>');
}
for (i=0; i<blength; i++) 
{
document.write('<img src="images/hl1.gif" name="hrl' + blength + i +'" width="35" height="5" onclick="draw(usrname,hlname,'+blength+','+i+')" onmouseover="show(hlname,'+blength+','+i+')" onmouseout="unshow(hlname,'+blength+','+i+')">');
}
document.write('<img src="images/hl1.gif" name="hrp" width="35" height="5">');
document.write('<br>');
