
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}


function handleClick()
{   
    btck=this.innerHTML;
    buttonAnimation(btck);
    switch(btck)
    {
        case 'w':
        {
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        }
        case 'a':
        {
            var audio1 = new Audio('sounds/kick-bass.mp3');
            audio1.play();break;
        }
        case 's':
        {
            var audio2 = new Audio('sounds/tom-1.mp3');
            audio2.play();break;
        }
        case 'd':
        {
            var audio3 = new Audio('sounds/tom-2.mp3');
            audio3.play();break;
        }
        case 'j':
        {
            var audio4 = new Audio('sounds/tom-3.mp3');
            audio4.play();break;
        }
        case 'l':
        {
            var audio5 = new Audio('sounds/tom-4.mp3');
            audio5.play();break;
        }
        case 'k':
        {
            var audio6 = new Audio('sounds/snare.mp3');
            audio6.play();break;
        }
    }

}

document.addEventListener('keydown',(event) => {
    
    

    keyck=event.key;
    buttonAnimation(keyck);
    switch(keyck)
    {
        case 'w':
        {
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        }
        case 'a':
        {
            var audio1 = new Audio('sounds/kick-bass.mp3');
            audio1.play();break;
        }
        case 's':
        {
            var audio2 = new Audio('sounds/tom-1.mp3');
            audio2.play();break;
        }
        case 'd':
        {
            var audio3 = new Audio('sounds/tom-2.mp3');
            audio3.play();break;
        }
        case 'j':
        {
            var audio4 = new Audio('sounds/tom-3.mp3');
            audio4.play();break;
        }
        case 'l':
        {
            var audio5 = new Audio('sounds/tom-4.mp3');
            audio5.play();break;
        }
        case 'k':
        {
            var audio6 = new Audio('sounds/snare.mp3');
            audio6.play();break;
        }
    }
});



function buttonAnimation(currentkey)
{
    var presdbtn = document.querySelector('.'+currentkey);
    presdbtn.classList.add('pressed');
    setTimeout(function(){presdbtn.classList.remove('pressed');},100);
}
