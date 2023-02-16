var index =0;
function ChangeColors(){

    var colors = ["cyan","red","blue","green","orange","purple"];
    document.getElementsByTagName("body")[0].
    style.background =colors[index++];

    if(index>colors.length -1)
    index=0;
}

function ChangeColor1(){

    var colors = ["red"];
    document.getElementsByTagName("body")[0].
    style.background =colors[index++];

    if(index>colors.length -1)
    index=0; 
}

function ChangeColor2(){

    var colors = ["blue"];
    document.getElementsByTagName("body")[0].
    style.background =colors[index++];

    if(index>colors.length -1)
    index=0; 
}

function ChangeColor3(){

    var colors = ["green"];
    document.getElementsByTagName("body")[0].
    style.background =colors[index++];

    if(index>colors.length -1)
    index=0; 
}

function ChangeColor4(){

    var colors = ["orange"];
    document.getElementsByTagName("body")[0].
    style.background =colors[index++];

    if(index>colors.length -1)
    index=0; 
}

function ChangeColor5(){

    var colors = ["purple"];
    document.getElementsByTagName("body")[0].
    style.background =colors[index++];

    if(index>colors.length -1)
    index=0; 
}