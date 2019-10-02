    //let bodyBG = document.querySelector('BODY')
  //bodyBG.style.backgroundImage = "url(../img/apple_true.jpg)";
    // Create a <li> node
let node = document.createElement("LI");
let textnode = document.createTextNode("Пятый пункт");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);// Append <li> to <ul> with id="myList"
node.classList.add('menu-item');
    //End of Create a <li> node
let menuItem = document.getElementsByTagName('LI');
document.getElementById("myList").insertBefore(menuItem[2], menuItem[1]);


//Change an Title
    let oldTitle = document.getElementsByClassName('column');
    let a = document.createElement("DIV");
    let b = document.createTextNode("Мы продаем только подлинную технику Apple");
    a.appendChild(b);
    oldTitle[1].appendChild(a);
    a.classList.add('title');
    oldTitle[1].removeChild(document.getElementById("title"));
    oldTitle[1].insertBefore(a, document.getElementById("prompt"));

    //Prompt block

   let pr = prompt("Do you like Apple's gadgets?",'');
    let c = document.getElementById("prompt");
    c.innerHTML = '<p>' + pr + '</p>';





    let advN = document.querySelector('.adv');
    document.body.removeChild(advN);





