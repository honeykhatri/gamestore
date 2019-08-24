var level,bx1,bx2,bx3,bx1pts,bx2pts,bx3pts,upoints,cpoints,ctrun,fmove;  
var blength;

var ur = document.location.href;
if ( ur.indexOf("?") != -1 ){
var a = ur.split("=");
level = a[1];
} 
else
{
	blength=7;
}

if(level==1)
{
	blength=7;
}
else if(level==2)
{
	blength=8;
}
else if(level==3)
{
	blength=9;
}
var mposs=0,cmpbx=0,begin=0;
bimg = new Image(30,30);
bimg.src = 'images/nothing.gif';
cmpimg = new Image(30,30);
cmpimg.src = 'images/cimg.gif';
usimg = new Image(30,30);
usimg.src = 'images/uimg.gif';
vrlnimg = new Image(5,30);
vrlnimg.src = 'images/vl1.gif';
vrlnimgh = new Image(5,30);
vrlnimgh.src = 'images/vl2.gif';
boxhrl = new Image(35,5);
boxhrl.src = 'images/hl1.gif';
boxhrlh = new Image(35,5);
boxhrlh.src = 'images/hl2.gif'; 
var hlname=1;
var vlname=2;
var usrname=3;
var ctype=4;
bx1x=new Array(10);
bx1y=new Array(10);
bx2x=new Array(10);
bx2y=new Array(10);
bx3x=new Array(100);
bx3y=new Array(100);  
var num = new Array(10);
for (x=0; x<10; x++) 
{
      num[x] = new Image(64,64);
      num[x].src = 'images/s' + x + '.gif';
}

vrln = new Array(10);
hrln = new Array(10);
gbx  = new Array(10);

for(i=0; i<10; i++) 
{
	gbx[i]  = new Array(10);
        vrln[i] = new Array(10);
        hrln[i] = new Array(10);
}

function startplay() 
{
	document.getElementById("scard").style.visibility="visible";
        if (begin == 1) 
	{
           fplay();
        } 
	else 
	{
           document.getElementById("sgame").value="END PLAY";
           splay();
        }
}

function splay() 
{
	begin = 1;
        for (i=0; i<10; i++) 
	{
         	for (j=0; j<10; j++) 
		{
            	gbx[i][j] = 0;
           	vrln[i][j] = 0;
            	hrln[i][j] = 0;
         	}
       }
	ldimg();
}

function ldimg()
{
      for (j=0; j< blength; j++)
      {
		for (i=0; i< blength; i++)
		{
               	document.images['hrl'+j+i].src = boxhrl.src;
           	}
           	for (i=0; i<blength; i++) 
		{
               	document.images['vrl'+j+i].src = vrlnimg.src;
               	document.images['box'+j+i].src = bimg.src;
           	}
           	document.images['vrl'+j+blength].src = vrlnimg.src;

      }
      for (i=0; i<blength; i++) 
      {
      		document.images['hrl'+blength+i].src = boxhrl.src;
      }
      mposs = 1;
      cpoints = 0;
      upoints = 0;
      document.images['fcs'].src = num[0].src;
      document.images['scs'].src = num[0].src;
      document.images['fus'].src = num[0].src;
      document.images['sus'].src = num[0].src;
}



function fplay() 
{
        mposs = 0;
        var tpoints = blength * blength;
        begin = 0;
        
       if (upoints > cpoints)
	{
          alert("success!..you won the game");				
       } 
	else
	{
          alert("you last the game.Better luck next time");

       }
	if(confirm("Play Game Again"))
	{
		window.location.reload();
	}
       
}


function show(lnname,y,x) 
{
        if (lnname ==1) 
	{
          var isrc = 'hrl'+y+x;
          document.images[isrc].src = boxhrlh.src; 
        } 
	else 
	{
          var isrc = 'vrl'+y+x;
          document.images[isrc].src = vrlnimgh.src; 
        }
}

function unshow(lnname,y,x)
{
	if (lnname==1) 
	{
       		if (hrln[y][x] != 1) 
		{
                 var isrc = 'hrl'+y+x;
                 document.images[isrc].src = boxhrl.src; 
                }
        } 
        else 
	{
          if (vrln[y][x] != 1)
	   {
             var isrc = 'vrl'+y+x;
             document.images[isrc].src = vrlnimg.src; 
          }
      }
}

function draw(currentmv,lnname,y,x)
{
        if (currentmv == usrname && mposs == 0) 
	{
        return;
        }
	ctrun = 0;
        cmpbx = 0;
        if (lnname == 1) 
	{
        	if (hrln[y][x] == 0) 
		{
             	hrln[y][x] = 1;
             	var isrc = 'hrl'+y+x;
             	document.images[isrc].src = boxhrlh.src; 
             	makeim(currentmv, y, x);
             	if (y  > 0) 
		{
                	makeim(currentmv, y*1-1, x);
             	}
        	} 
		else 
		{
        		if (currentmv == usrname) 
			{
                	return;
             		}
        	}
        } 
	else 
	{
		if (vrln[y][x] == 0) 
		{
            	vrln[y][x] = 1;
             	var isrc = 'vrl'+y+x;
             	document.images[isrc].src = vrlnimgh.src;
             	makeim(currentmv, y, x);
             	if (x  > 0) 
		{
                	makeim(currentmv, y, x*1-1);
             	}

          	} 
		else 
		{
             		if (currentmv == usrname) 
			{
                	return;
             	}
          	}
       }
       if ((cmpbx == 0) && (currentmv == usrname) && (begin == 1))
       {
              setTimeout(cmpsturn,200);
       } 
	else 
	{
             if (currentmv ==ctype && cmpbx == 1) 
	     {
                 ctrun = 1;
             }
       }
}

 
function makeim(currentmv,y,x) 
{
       var gotBox;
       gbx[y][x] = (gbx[y][x])*1 +1;
       gotBox = 0
       if (gbx[y][x] > 3)
       {
             var isrc = 'box'+y+x;
             if (currentmv == usrname) 
	     {
             document.images[isrc].src = usimg.src;
             } 
	     else 
             {
              document.images[isrc].src = cmpimg.src;
             }
             uppoints(currentmv);
             cmpbx = 1;
       }

}

function cmpsturn() 
{
	if (begin == 0) 
	{
           return;
       	}
       	mposs = 0;
       	ctrun = 0;
     	cmpmkmove();
       if (ctrun == 0)
       {
          mposs = 1;
       } 
       else 
       {
          setTimeout(cmpsturn,400);
       }
}

function cmpmkmove() 
{
       fmove = 1;	
       bx1pts = 0;
       bx2pts = 0;
       bx3pts = 0;
       var canplay,ub1,ub2,cub2,cub1,lnloc;
       for (i=0; i<blength; i++)
       {
           for (j=0; j<blength; j++) 
           {
               if (gbx[i][j] == 3) 
               {
                   if (bx1pts < 8) 
                   {
                       bx1x[bx1pts] = j;
                       bx1y[bx1pts] = i;
                       bx1pts = bx1pts * 1 + 1;
                   }
               } 
               else if (gbx[i][j] == 2) 
               {
                   if (bx2pts < 8) 
                    {
                       bx2x[bx2pts] = j;
                       bx2y[bx2pts] = i;
                       bx2pts = bx2pts * 1 + 1;
                   }
               } 
               else if (gbx[i][j] < 2) 
               {
                   if (bx3pts < 64) 
                   {
                       bx3x[bx3pts]=j;
                       bx3y[bx3pts]=i;
                       bx3pts = bx3pts*1+1;
                   }
               }
            }
        }

   
        if (bx1pts > 0) 
	{
           lnloc = Math.floor(Math.random()*bx1pts);
           ub2 = bx1x[lnloc];
           ub1 = bx1y[lnloc];
        } 
	else if (bx3pts > 0) 
	{
           lnloc = Math.floor(Math.random()*bx3pts);
           ub2 = bx3x[lnloc];
           ub1 = bx3y[lnloc];
        } 
	else if (bx2pts > 0) 
	{
           lnloc = Math.floor(Math.random()*bx2pts);
           ub2 = bx2x[lnloc];
           ub1 = bx2y[lnloc];
        } 

        cub1 = ub1;
        cub2 = ub2;
        canplay = 0;
        ctrun = 0;
        if (Math.floor(Math.random() * 2) == 1)
         {
           for (j=0; j<2 && canplay == 0; j++) 
           {
               cub1 = (ub1*1 + j*1);
               if (cub1 >= 0 && cub1 <= blength) 
               {
                   if (hrln[cub1][cub2] == 0) 
                   {
                       draw(ctype, hlname, cub1, cub2);
                       canplay = 1;
                   }
              }
           }
           cub1 = ub1;
           cub2 = ub2;
        }

        for (i=0; i< 2 && canplay == 0; i++) 
	{
           cub2 = (ub2*1 + i*1);
           if (cub2 >= 0 && cub2 <= blength) 
	    {
              if (vrln[cub1][cub2] == 0) 
              {
                 draw(ctype, vlname, cub1, cub2);
                 canplay = 1;
              }
           }
         }

         cub2 = ub2;
        
         for (j=0; j<2 && canplay == 0; j++) 
         {
            cub1 = (ub1*1 + j*1);
            if (cub1 >= 0 && cub1 <= blength) 
            {
                 if (hrln[cub1][cub2] == 0) 
                 {
                     draw(ctype, hlname, cub1, cub2);
                     canplay = 1;
                 }
            }
         }
}

  
function uppoints(currentmv) 
{
       var fn;
       var sn;
       if (currentmv == usrname) 
       {	
          upoints = upoints*1+1;
	  fn=Math.floor(upoints/10);
          sn=upoints%10;
          document.images['fus'].src = num[fn].src;
          document.images['sus'].src = num[sn].src;	
       } 
       else 
       {
          cpoints = cpoints*1+1;
	  fn=Math.floor(cpoints/10);
          sn=cpoints%10;
          document.images['fcs'].src = num[fn].src;
          document.images['scs'].src = num[sn].src;	

       }
       if ((cpoints*1 + upoints*1) >= (blength * blength)) 
       {
           fplay();
       }
}
