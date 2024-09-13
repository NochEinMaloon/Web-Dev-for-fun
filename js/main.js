console.log("Landing");

/* class Menu{
    constructor()
} */


    function createELM(name, parent, id){

    }

    //window.onload

    var Menubar = document.querySelector("menu");
    console.log(Menubar);
    

    console.log(menuitems);
    

    menuitems.forEach(menuitem => {
        var Menubar = document.querySelector("menu");
        console.log(Menubar);
        console.log(menuitem);

        const newMenitem = document.createElement("Menuitem");
        newMenitem.innerHTML = menuitem.name;
        newMenitem.href = menuitem.link;

        newMenitem.classList.add("Test");

        Menubar.appendChild(newMenitem);

        //TODO: Isactive

        
        
    });