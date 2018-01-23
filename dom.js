var $ = function (sel){
    var elem = document.querySelectorAll(sel);
    
    var text = function(str){
        elem.innerText = str;
        for(var i = 0; i < elem.length; i++){
            elem[i].innerText = str;
        }

    }
    
    var addClass = function(className){
        for(var i = 0; i < elem.length; i++){
            elem[i].classList.add(className);
        }
    }

    var removeClass = function(className){
        for(var i = 0; i < elem.length; i++){
            elem[i].classList.remove(className);
        }
    }

    var on = function(action, cb){
        for (var i = 0; i <elem.length; i++){
            elem[i].addEventListener(action, cb);
        }
    }

    //toggleclass
    var toggleClass = function(className){
        for (var i = 0; i < elem.length; i++){
            if (elem[i].className.includes(className)){
                elem.classList.remove(className);
            }
            else{
                elem.classList.add(className);

            }
        }
    }

    function newHTML(){
        var elem = document.getElementById("fancy");
        elem.classList.toggle("hide");
    }

    //html
    var html = function(newHTML){
        for (var i = 0; i < elem.length; i++){
            elem[i].innerHTML = newHTML;
        }

    }


    var publicAPI = {
        element: elem,
        text: text,
        addClass: addClass,
        removeClass: removeClass,
        html: html,
        on: on
    }

    return publicAPI;

}


