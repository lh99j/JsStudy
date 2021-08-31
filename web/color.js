var body = {
    setcolor:function(color)
{
    document.querySelector('body').style.color = color;
},
    backgroundColor:function(color)
{
    document.querySelector('body').style.backgroundColor = color;
}
}

var Link = {
    atagcolor:function(color){
    // var alist = document.querySelectorAll('a');
    //  var i = 0;
    //  while(i < alist.length){
    //          alist[i].style.color = color;
    //          i++;
    //  }        
        $('a').css('color',color);
    }
}

function day_night(self){
    if(self.value === 'night'){
        body.backgroundColor('black');
        body.setcolor('white');
        self.value = 'day'; 
        Link.atagcolor('powderblue');   
    }
    else{
        body.backgroundColor('#F5F4F0');
        body.setcolor('black');
        self.value = 'night';
        Link.atagcolor('green');
}
}
