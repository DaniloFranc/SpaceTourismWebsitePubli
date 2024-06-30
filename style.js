const body=document.getElementById("body")
const a=document.getElementById("a")
const b=document.getElementById("b")
const c=document.getElementById("c")
const d=document.getElementById("d")
const e=document.getElementById("e")
const f=document.getElementById("f")
const g=document.getElementById("g")
const h=document.getElementById("h")
const barra0=document.getElementById("barra0")
const barra1=document.getElementById("barra1")
const barra2=document.getElementById("barra2")
const barra3=document.getElementById("barra3")
const destino=document.getElementById("destino")


const main = document.getElementById("main");


barra0.addEventListener("click",()=>{

    if (window.innerWidth <= 768) {

        body.classList.add("body1");
        body.classList.remove("body2");
        body.classList.remove("body3");
        body.classList.remove("body4");

        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.classList.remove("alignment")
        main.classList.add("alinhar")

        const homeDivPrinc=document.createElement("div")
        homeDivPrinc.setAttribute("class","textoCor")
        main.prepend(homeDivPrinc)

        const homeDivSec=document.createElement("div")
        main.appendChild(homeDivSec)

        const homeDivSecButton=document.createElement("button")
        homeDivSecButton.setAttribute("class","botao")
        homeDivSecButton.innerHTML="EXPLORE"
        homeDivSec.appendChild(homeDivSecButton)

        const homeDivPrincPrim=document.createElement("div")
        homeDivPrincPrim.setAttribute("class","texto1")
        homeDivPrincPrim.innerHTML="SO, YOU WANT TO TRAVEL TO"
        homeDivPrinc.appendChild(homeDivPrincPrim)

        const homeDivPrincSec=document.createElement("div")
        homeDivPrincSec.setAttribute("class","texto2")
        homeDivPrincSec.innerHTML="SPACE"
        homeDivPrinc.appendChild(homeDivPrincSec)

        const homeDivPrincTer=document.createElement("div")
        homeDivPrincTer.setAttribute("class","texto3")
        homeDivPrincTer.innerHTML="Let's face it; if you want to go to space, you might as well"
        homeDivPrinc.appendChild(homeDivPrincTer)

        const homeDivPrincQua=document.createElement("div")
        homeDivPrincQua.setAttribute("class","texto4")
        homeDivPrincQua.innerHTML="genuinely go to outer space and not hover kind of on the edge of"
        homeDivPrinc.appendChild(homeDivPrincQua)

        const homeDivPrincQui=document.createElement("div")
        homeDivPrincQui.setAttribute("class","texto5")
        homeDivPrincQui.innerHTML="it. Well sit back, and relax because we'll give you a truly out of "
        homeDivPrinc.appendChild(homeDivPrincQui)

        const homeDivPrincSex=document.createElement("div")
        homeDivPrincSex.setAttribute("class","texto6")
        homeDivPrincSex.innerHTML="this world experience!"
        homeDivPrinc.appendChild(homeDivPrincSex)

 

    } else {


        body.classList.add("body1");
        body.classList.remove("body2");
        body.classList.remove("body3");
        body.classList.remove("body4");

        while (main.firstChild) {

        main.removeChild(main.firstChild);

        }
        main.classList.remove("alignment")
        main.classList.add("alinhar")

        const homeDivPrinc=document.createElement("div")
        homeDivPrinc.setAttribute("class","textoCor")
        main.prepend(homeDivPrinc)

        const homeDivSec=document.createElement("div")
        main.appendChild(homeDivSec)

        const homeDivSecButton=document.createElement("button")
        homeDivSecButton.setAttribute("class","botao")
        homeDivSecButton.innerHTML="EXPLORE"
        homeDivSec.appendChild(homeDivSecButton)

        const homeDivPrincPrim=document.createElement("div")
        homeDivPrincPrim.setAttribute("class","texto1")
        homeDivPrincPrim.innerHTML="SO, YOU WANT TO TRAVEL TO"
        homeDivPrinc.appendChild(homeDivPrincPrim)

        const homeDivPrincSec=document.createElement("div")
        homeDivPrincSec.setAttribute("class","texto2")
        homeDivPrincSec.innerHTML="SPACE"
        homeDivPrinc.appendChild(homeDivPrincSec)

        const homeDivPrincTer=document.createElement("div")
        homeDivPrincTer.setAttribute("class","texto3")
        homeDivPrincTer.innerHTML="Let's face it; if you want to go to space, you might as well"
        homeDivPrinc.appendChild(homeDivPrincTer)

        const homeDivPrincQua=document.createElement("div")
        homeDivPrincQua.setAttribute("class","texto4")
        homeDivPrincQua.innerHTML="genuinely go to outer space and not hover kind of on the"
        homeDivPrinc.appendChild(homeDivPrincQua)

        const homeDivPrincQui=document.createElement("div")
        homeDivPrincQui.setAttribute("class","texto5")
        homeDivPrincQui.innerHTML="edge of it. Well sit back, and relax because we'll give you a"
        homeDivPrinc.appendChild(homeDivPrincQui)

        const homeDivPrincSex=document.createElement("div")
        homeDivPrincSex.setAttribute("class","texto6")
        homeDivPrincSex.innerHTML="truly out of this world experience!"
        homeDivPrinc.appendChild(homeDivPrincSex)

        

        
       

    }





    

})





barra1.addEventListener("click", () => {



    if (window.innerWidth <= 768) {
        
        body.classList.remove("body1");
        body.classList.add("body2");
        body.classList.remove("body3");        
        body.classList.remove("body4");
        
        
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.classList.remove("alinhar")
        main.classList.add("alignment")
    
        const divPrinc=document.createElement("div")
        divPrinc.setAttribute("class","alinha")
        main.prepend(divPrinc)
    
        const divPrincPrim=document.createElement("div")
        divPrincPrim.setAttribute("class","linha")
        divPrinc.prepend(divPrincPrim)
    
        const divPrincPrimPrim=document.createElement("div")
        divPrincPrimPrim.setAttribute("class","num")
        divPrincPrimPrim.innerHTML="01"
        divPrincPrim.appendChild(divPrincPrimPrim)
    
        
        const divPrincPrimSec=document.createElement("div")
        divPrincPrimSec.setAttribute("class","letr")
        divPrincPrimSec.innerHTML="PICK YOUR DESTINATION"
        divPrincPrim.appendChild(divPrincPrimSec)
    
        const imgLua=document.createElement("img")
        imgLua.setAttribute("class","imagem0")
        imgLua.setAttribute("src","img/image-moon.png")
        divPrinc.appendChild(imgLua)
    
        const divSec=document.createElement("div")
        divSec.setAttribute("class","alin2")
        main.appendChild(divSec)
    
        const divSecPrim=document.createElement("div")
        divSecPrim.setAttribute("class","al")
        divSec.appendChild(divSecPrim)
    
        const divSecPrimPrim=document.createElement("div")
        divSecPrimPrim.setAttribute("id","barra4")
        divSecPrim.appendChild(divSecPrimPrim)
    
        const divSecPrimPrimPrim=document.createElement("div")
        divSecPrimPrimPrim.setAttribute("class","letra90")
        divSecPrimPrimPrim.innerHTML="MOON"
        divSecPrimPrim.appendChild(divSecPrimPrimPrim)
    
        const divSecPrimPrimSec=document.createElement("div")
        divSecPrimPrimSec.setAttribute("id","e")
        divSecPrimPrimSec.setAttribute("class","subBarra0")
        divSecPrimPrim.appendChild(divSecPrimPrimSec)
    
        const barra4=document.getElementById("barra4")
        const e=document.getElementById("e")
        
        barra4.addEventListener("mouseover",()=>{
            
            e.classList.add("visibilidade")
        
        })
        barra4.addEventListener("mouseout",()=>{
            
            e.classList.remove("visibilidade")
    
        })
    
        const visi = "visibility: visible;";
    
        barra4.addEventListener("click", () => {
        
        f.removeAttribute("style")
        g.removeAttribute("style")
        h.removeAttribute("style")
        
        let v = "Ok";
    
        if (v === "Ok") {
            
            e.style.visibility = "visible";
                   
        }
    
    
        }); 
    
        const divSecPrimSec=document.createElement("div")
        divSecPrimSec.setAttribute("id","barra5")
        divSecPrim.appendChild(divSecPrimSec)
        
    
        const divSecPrimSecPrim=document.createElement("div")
        divSecPrimSecPrim.setAttribute("class","letra90")
        divSecPrimSecPrim.innerHTML="MARS"
        divSecPrimSec.appendChild(divSecPrimSecPrim)
    
        const divSecPrimSecSec=document.createElement("div")
        divSecPrimSecSec.setAttribute("id","f")
        divSecPrimSecSec.setAttribute("class","subBarra1")
        divSecPrimSec.appendChild(divSecPrimSecSec)
    
        const barra5=document.getElementById("barra5")
        const f=document.getElementById("f")
    
    
    
        barra5.addEventListener("mouseover",()=>{
            
            f.classList.add("visibilidade")
        
        })
        barra5.addEventListener("mouseout",()=>{
            
            f.classList.remove("visibilidade")
    
        })
    
    
        barra5.addEventListener("click", () => {
        
        e.removeAttribute("style")
        g.removeAttribute("style")   
        h.removeAttribute("style")
    
        let v = "Ok";
        
            if (v === "Ok") {
                
                f.style.visibility = "visible";
                       
            }
        
            
        });
    
        const divSecPrimTer=document.createElement("div")
        divSecPrimTer.setAttribute("id","barra6")
        divSecPrim.appendChild(divSecPrimTer)
    
        const divSecPrimTerPrim=document.createElement("div")
        divSecPrimTerPrim.setAttribute("class","letra90")
        divSecPrimTerPrim.innerHTML="EUROPA"
        divSecPrimTer.appendChild(divSecPrimTerPrim)
    
        const divSecPrimTerSec=document.createElement("div")
        divSecPrimTerSec.setAttribute("id","g")
        divSecPrimTerSec.setAttribute("class","subBarra2")
        divSecPrimTer.appendChild(divSecPrimTerSec)
    
        const barra6=document.getElementById("barra6")
        const g=document.getElementById("g")
        
        barra6.addEventListener("mouseover",()=>{
            
            g.classList.add("visibilidade")
        
        })
    
        barra6.addEventListener("mouseout",()=>{
            
            g.classList.remove("visibilidade")
    
        })
    
        barra6.addEventListener("click", () => {
            
        e.removeAttribute("style")
        f.removeAttribute("style")
        h.removeAttribute("style")
    
        let v = "Ok";
        
            if (v === "Ok") {
                
                g.style.visibility = "visible";
                       
            }
        
        
            });
    
    
        const divSecPrimQua=document.createElement("div")
        divSecPrimQua.setAttribute("id","barra7")
        divSecPrim.appendChild(divSecPrimQua)
    
        const divSecPrimQuaPrim=document.createElement("div")
        divSecPrimQuaPrim.setAttribute("class","letra90")
        divSecPrimQuaPrim.innerHTML="TITAN"
        divSecPrimQua.appendChild(divSecPrimQuaPrim)
    
        const divSecPrimQuaSec=document.createElement("div")
        divSecPrimQuaSec.setAttribute("id","h")
        divSecPrimQuaSec.setAttribute("class","subBarra3")
        divSecPrimQua.appendChild(divSecPrimQuaSec)
    
        const barra7=document.getElementById("barra7")
        const h=document.getElementById("h")
        barra7.addEventListener("mouseover",()=>{
            
            h.classList.add("visibilidade")
        
        })
        barra7.addEventListener("mouseout",()=>{
            
            h.classList.remove("visibilidade")
    
        })
    
    
        barra7.addEventListener("click", () => {
            
        e.removeAttribute("style")
        f.removeAttribute("style")
        g.removeAttribute("style")
    
        let v = "Ok";
            
                if (v === "Ok") {
                    
                    h.style.visibility = "visible";
                           
                }
            
            
                });
    
        const divSecSec=document.createElement("div")
        divSecSec.setAttribute("class","text0")
        divSecSec.innerHTML="MOON"
        divSec.appendChild(divSecSec)
    
        const divSecTer=document.createElement("div")
        divSecTer.setAttribute("class","text1")
        divSecTer.innerHTML="See our planet as you've never seen it before. A perfect relaxing trip away to help"
        divSec.appendChild(divSecTer)
    
        const divSecQua=document.createElement("div")
        divSecQua.setAttribute("class","text2")
        divSecQua.innerHTML="regain perspective and come back refreshed. While you're there, take in some"
        divSec.appendChild(divSecQua)
    
        const divSecQui=document.createElement("div")
        divSecQui.setAttribute("class","text3")
        divSecQui.innerHTML="history by visiting the Luna 2 and Apollo 11 landing sites."
        divSec.appendChild(divSecQui)
    
        // const divSecSex=document.createElement("div")
        // divSecSex.setAttribute("class","text4")
        // divSecSex.innerHTML=""
        // divSec.appendChild(divSecSex)
    
        const divSecLinha=document.createElement("hr")
        divSecLinha.setAttribute("class","linhaPersonalizada")
        divSec.appendChild(divSecLinha)
    
        const divSecSep=document.createElement("div")
        divSecSep.setAttribute("class","alin3")
        divSec.appendChild(divSecSep)
    
        const divSecSepPrim=document.createElement("div")
        divSecSep.appendChild(divSecSepPrim)
    
        const divSecSepPrimPrim=document.createElement("div")
        divSecSepPrimPrim.setAttribute("class","text5")
        divSecSepPrimPrim.innerHTML="AVG. DISTANCE"
        divSecSepPrim.appendChild(divSecSepPrimPrim)
    
        const divSecSepPrimSec=document.createElement("div")
        divSecSepPrimSec.setAttribute("class","numDist0")
        divSecSepPrimSec.innerHTML="384,400 KM"
        divSecSepPrim.appendChild(divSecSepPrimSec)
    
        const divSecSepPrimTer=document.createElement("div")
        divSecSepPrimTer.setAttribute("class","espaco1")
        divSecSep.appendChild(divSecSepPrimTer)
    
        const divSecSepSec=document.createElement("div")
        divSecSep.appendChild(divSecSepSec)
    
        const divSecSepPrimQua=document.createElement("div")
        divSecSepPrimQua.setAttribute("class","text5")
        divSecSepPrimQua.innerHTML="EST. TRAVEL TIME"
        divSecSepSec.appendChild(divSecSepPrimQua)
    
        const divSecSepPrimQui=document.createElement("div")
        divSecSepPrimQui.setAttribute("class","numDist0")
        divSecSepPrimQui.innerHTML="3 DAYS"
        divSecSepSec.appendChild(divSecSepPrimQui) 
    
        const animacao=
            "opacity: 1;"+
            "animation: fadeIn 3s linear;"
    
    
    
        barra4.addEventListener("click",()=>{
    
            
    
            divSecSec.innerHTML="MOON" 
            divSecTer.innerHTML="See our planet as you've never seen it before. A perfect relaxing trip away to help"
            divSecQua.innerHTML="regain perspective and come back refreshed. While you're there, take in some"
            divSecQui.innerHTML="history by visiting the Luna 2 and Apollo 11 landing sites."
            // divSecSex.innerHTML="by visiting the Luna 2 and Apollo 11 landing sites."
            imgLua.setAttribute("src","img/image-moon.png")
            divSecSepPrimSec.innerHTML="384,400 KM"
            divSecSepPrimQui.innerHTML="3 DAYS"
                
        
            divSecSec.setAttribute("style",animacao)
            divSecTer.setAttribute("style",animacao)
            divSecQua.setAttribute("style",animacao)
            divSecQui.setAttribute("style",animacao)
            divSecSex.setAttribute("style",animacao)
            imgLua.setAttribute("style",animacao)
            divSecLinha.setAttribute("style",animacao)
            divSecSepPrimSec.setAttribute("style",animacao)
            divSecSepPrimQui.setAttribute("style",animacao)
        
            const timeout=setTimeout(function(){
    
                divSecSec.removeAttribute("style",animacao)
                divSecTer.removeAttribute("style",animacao)
                divSecQua.removeAttribute("style",animacao)
                divSecQui.removeAttribute("style",animacao)
                divSecSex.removeAttribute("style",animacao)
                imgLua.removeAttribute("style",animacao)
                divSecLinha.removeAttribute("style",animacao)
                divSecSepPrimSec.removeAttribute("style",animacao)
                divSecSepPrimQui.removeAttribute("style",animacao)
    
            }, 3000)
        
              
                
        
        })
    
    
    
    
    
    
    
        barra5.addEventListener("click",()=>{
    
           
            divSecSec.innerHTML="MARS" 
            divSecTer.innerHTML="Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the"
            divSecQua.innerHTML="tallest planetary mountain in our solar system. It's two and a half times the size of"
            divSecQui.innerHTML="Everest!"
            // divSecSex.innerHTML=""
            imgLua.setAttribute("src","img/image-mars.png")
            divSecSepPrimSec.innerHTML="225 MIL. KM"
            divSecSepPrimQui.innerHTML="9 MONTHS"
            
    
            divSecSec.setAttribute("style",animacao)
            divSecTer.setAttribute("style",animacao)
            divSecQua.setAttribute("style",animacao)
            divSecQui.setAttribute("style",animacao)
            // divSecSex.setAttribute("style",animacao)
            imgLua.setAttribute("style",animacao)
            divSecLinha.setAttribute("style",animacao)
            divSecSepPrimSec.setAttribute("style",animacao)
            divSecSepPrimQui.setAttribute("style",animacao)
    
    
            const timeout=setTimeout(function(){
                
                divSecSec.removeAttribute("style",animacao)
                divSecTer.removeAttribute("style",animacao)
                divSecQua.removeAttribute("style",animacao)
                divSecQui.removeAttribute("style",animacao)
                // divSecSex.removeAttribute("style",animacao)
                imgLua.removeAttribute("style",animacao)
                divSecLinha.removeAttribute("style",animacao)
                divSecSepPrimSec.removeAttribute("style",animacao)
                divSecSepPrimQui.removeAttribute("style",animacao)
    
            }, 3000)
    
    
            
    
            
    
        })
    
        barra6.addEventListener("click",()=>{
    
           
            divSecSec.innerHTML="EUROPA" 
            divSecTer.innerHTML="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's"
            divSecQua.innerHTML="dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or"
            divSecQui.innerHTML=" simple relaxation in your snug wintery cabin."
            // divSecSex.innerHTML=""
            imgLua.setAttribute("src","img/image-europa.png")
            divSecSepPrimSec.innerHTML="628 MIL. KM"
            divSecSepPrimQui.innerHTML="3 YEARS"
            
    
            divSecSec.setAttribute("style",animacao)
            divSecTer.setAttribute("style",animacao)
            divSecQua.setAttribute("style",animacao)
            divSecQui.setAttribute("style",animacao)
            // divSecSex.setAttribute("style",animacao)
            imgLua.setAttribute("style",animacao)
            divSecLinha.setAttribute("style",animacao)
            divSecSepPrimSec.setAttribute("style",animacao)
            divSecSepPrimQui.setAttribute("style",animacao)
    
    
            const timeout=setTimeout(function(){
                
                divSecSec.removeAttribute("style",animacao)
                divSecTer.removeAttribute("style",animacao)
                divSecQua.removeAttribute("style",animacao)
                divSecQui.removeAttribute("style",animacao)
                // divSecSex.removeAttribute("style",animacao)
                imgLua.removeAttribute("style",animacao)
                divSecLinha.removeAttribute("style",animacao)
                divSecSepPrimSec.removeAttribute("style",animacao)
                divSecSepPrimQui.removeAttribute("style",animacao)
    
            }, 3000)
    
    
            
    
            
    
        })
    
        barra7.addEventListener("click",()=>{
    
           
            divSecSec.innerHTML="TITAN" 
            divSecTer.innerHTML="The only moon known to have a dense atmosphere other than Earth, Titan is a"
            divSecQua.innerHTML="home away from home (just a few hundred degrees colder!). As a bonus, you get"
            divSecQui.innerHTML="striking views of the Rings of Saturn."
            // divSecSex.innerHTML=""
            imgLua.setAttribute("src","img/image-titan.png")
            divSecSepPrimSec.innerHTML="1.6 BIL. KM"
            divSecSepPrimQui.innerHTML="7 YEARS"
            
    
            divSecSec.setAttribute("style",animacao)
            divSecTer.setAttribute("style",animacao)
            divSecQua.setAttribute("style",animacao)
            divSecQui.setAttribute("style",animacao)
            // divSecSex.setAttribute("style",animacao)
            imgLua.setAttribute("style",animacao)
            divSecLinha.setAttribute("style",animacao)
            divSecSepPrimSec.setAttribute("style",animacao)
            divSecSepPrimQui.setAttribute("style",animacao)
    
    
            const timeout=setTimeout(function(){
                
                divSecSec.removeAttribute("style",animacao)
                divSecTer.removeAttribute("style",animacao)
                divSecQua.removeAttribute("style",animacao)
                divSecQui.removeAttribute("style",animacao)
                // divSecSex.removeAttribute("style",animacao)
                imgLua.removeAttribute("style",animacao)
                divSecLinha.removeAttribute("style",animacao)
                divSecSepPrimSec.removeAttribute("style",animacao)
                divSecSepPrimQui.removeAttribute("style",animacao)
    
            }, 3000)
    
    
            
    
            
    
        })
    
    
        
    } else {
        
        body.classList.remove("body1");
        body.classList.add("body2");
        body.classList.remove("body3");        
        body.classList.remove("body4");
        
        
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.classList.remove("alinhar")
        main.classList.add("alignment")
    
        const divPrinc=document.createElement("div")
        divPrinc.setAttribute("class","alinha")
        main.prepend(divPrinc)
    
        const divPrincPrim=document.createElement("div")
        divPrincPrim.setAttribute("class","linha")
        divPrinc.prepend(divPrincPrim)
    
        const divPrincPrimPrim=document.createElement("div")
        divPrincPrimPrim.setAttribute("class","num")
        divPrincPrimPrim.innerHTML="01"
        divPrincPrim.appendChild(divPrincPrimPrim)
    
        
        const divPrincPrimSec=document.createElement("div")
        divPrincPrimSec.setAttribute("class","letr")
        divPrincPrimSec.innerHTML="PICK YOUR DESTINATION"
        divPrincPrim.appendChild(divPrincPrimSec)
    
        const imgLua=document.createElement("img")
        imgLua.setAttribute("class","imagem0")
        imgLua.setAttribute("src","img/image-moon.png")
        divPrinc.appendChild(imgLua)
    
        const divSec=document.createElement("div")
        divSec.setAttribute("class","alin2")
        main.appendChild(divSec)
    
        const divSecPrim=document.createElement("div")
        divSecPrim.setAttribute("class","al")
        divSec.appendChild(divSecPrim)
    
        const divSecPrimPrim=document.createElement("div")
        divSecPrimPrim.setAttribute("id","barra4")
        divSecPrim.appendChild(divSecPrimPrim)
    
        const divSecPrimPrimPrim=document.createElement("div")
        divSecPrimPrimPrim.setAttribute("class","letra0")
        divSecPrimPrimPrim.innerHTML="MOON"
        divSecPrimPrim.appendChild(divSecPrimPrimPrim)
    
        const divSecPrimPrimSec=document.createElement("div")
        divSecPrimPrimSec.setAttribute("id","e")
        divSecPrimPrimSec.setAttribute("class","subBarra0")
        divSecPrimPrim.appendChild(divSecPrimPrimSec)
    
        const barra4=document.getElementById("barra4")
        const e=document.getElementById("e")
        
        barra4.addEventListener("mouseover",()=>{
            
            e.classList.add("visibilidade")
        
        })
        barra4.addEventListener("mouseout",()=>{
            
            e.classList.remove("visibilidade")
    
        })
    
        const visi = "visibility: visible;";
    
        barra4.addEventListener("click", () => {
        
        f.removeAttribute("style")
        g.removeAttribute("style")
        h.removeAttribute("style")
        
        let v = "Ok";
    
        if (v === "Ok") {
            
            e.style.visibility = "visible";
                   
        }
    
    
        }); 
    
        const divSecPrimSec=document.createElement("div")
        divSecPrimSec.setAttribute("id","barra5")
        divSecPrim.appendChild(divSecPrimSec)
        
    
        const divSecPrimSecPrim=document.createElement("div")
        divSecPrimSecPrim.setAttribute("class","letra0")
        divSecPrimSecPrim.innerHTML="MARS"
        divSecPrimSec.appendChild(divSecPrimSecPrim)
    
        const divSecPrimSecSec=document.createElement("div")
        divSecPrimSecSec.setAttribute("id","f")
        divSecPrimSecSec.setAttribute("class","subBarra1")
        divSecPrimSec.appendChild(divSecPrimSecSec)
    
        const barra5=document.getElementById("barra5")
        const f=document.getElementById("f")
    
    
    
        barra5.addEventListener("mouseover",()=>{
            
            f.classList.add("visibilidade")
        
        })
        barra5.addEventListener("mouseout",()=>{
            
            f.classList.remove("visibilidade")
    
        })
    
    
        barra5.addEventListener("click", () => {
        
        e.removeAttribute("style")
        g.removeAttribute("style")   
        h.removeAttribute("style")
    
        let v = "Ok";
        
            if (v === "Ok") {
                
                f.style.visibility = "visible";
                       
            }
        
            
        });
    
        const divSecPrimTer=document.createElement("div")
        divSecPrimTer.setAttribute("id","barra6")
        divSecPrim.appendChild(divSecPrimTer)
    
        const divSecPrimTerPrim=document.createElement("div")
        divSecPrimTerPrim.setAttribute("class","letra0")
        divSecPrimTerPrim.innerHTML="EUROPA"
        divSecPrimTer.appendChild(divSecPrimTerPrim)
    
        const divSecPrimTerSec=document.createElement("div")
        divSecPrimTerSec.setAttribute("id","g")
        divSecPrimTerSec.setAttribute("class","subBarra2")
        divSecPrimTer.appendChild(divSecPrimTerSec)
    
        const barra6=document.getElementById("barra6")
        const g=document.getElementById("g")
        
        barra6.addEventListener("mouseover",()=>{
            
            g.classList.add("visibilidade")
        
        })
    
        barra6.addEventListener("mouseout",()=>{
            
            g.classList.remove("visibilidade")
    
        })
    
        barra6.addEventListener("click", () => {
            
        e.removeAttribute("style")
        f.removeAttribute("style")
        h.removeAttribute("style")
    
        let v = "Ok";
        
            if (v === "Ok") {
                
                g.style.visibility = "visible";
                       
            }
        
        
            });
    
    
        const divSecPrimQua=document.createElement("div")
        divSecPrimQua.setAttribute("id","barra7")
        divSecPrim.appendChild(divSecPrimQua)
    
        const divSecPrimQuaPrim=document.createElement("div")
        divSecPrimQuaPrim.setAttribute("class","letra0")
        divSecPrimQuaPrim.innerHTML="TITAN"
        divSecPrimQua.appendChild(divSecPrimQuaPrim)
    
        const divSecPrimQuaSec=document.createElement("div")
        divSecPrimQuaSec.setAttribute("id","h")
        divSecPrimQuaSec.setAttribute("class","subBarra3")
        divSecPrimQua.appendChild(divSecPrimQuaSec)
    
        const barra7=document.getElementById("barra7")
        const h=document.getElementById("h")
        barra7.addEventListener("mouseover",()=>{
            
            h.classList.add("visibilidade")
        
        })
        barra7.addEventListener("mouseout",()=>{
            
            h.classList.remove("visibilidade")
    
        })
    
    
        barra7.addEventListener("click", () => {
            
        e.removeAttribute("style")
        f.removeAttribute("style")
        g.removeAttribute("style")
    
        let v = "Ok";
            
                if (v === "Ok") {
                    
                    h.style.visibility = "visible";
                           
                }
            
            
                });
    
        const divSecSec=document.createElement("div")
        divSecSec.setAttribute("class","text0")
        divSecSec.innerHTML="MOON"
        divSec.appendChild(divSecSec)
    
        const divSecTer=document.createElement("div")
        divSecTer.setAttribute("class","text1")
        divSecTer.innerHTML="See our planet as you've never seen it before. A perfect"
        divSec.appendChild(divSecTer)
    
        const divSecQua=document.createElement("div")
        divSecQua.setAttribute("class","text2")
        divSecQua.innerHTML="relaxing trip away to help regain perspective and come"
        divSec.appendChild(divSecQua)
    
        const divSecQui=document.createElement("div")
        divSecQui.setAttribute("class","text3")
        divSecQui.innerHTML="back refreshed. While you're there, take in some history"
        divSec.appendChild(divSecQui)
    
        const divSecSex=document.createElement("div")
        divSecSex.setAttribute("class","text4")
        divSecSex.innerHTML="by visiting the Luna 2 and Apollo 11 landing sites."
        divSec.appendChild(divSecSex)
    
        const divSecLinha=document.createElement("hr")
        divSecLinha.setAttribute("class","linhaPersonalizada")
        divSec.appendChild(divSecLinha)
    
        const divSecSep=document.createElement("div")
        divSecSep.setAttribute("class","alin3")
        divSec.appendChild(divSecSep)
    
        const divSecSepPrim=document.createElement("div")
        divSecSep.appendChild(divSecSepPrim)
    
        const divSecSepPrimPrim=document.createElement("div")
        divSecSepPrimPrim.setAttribute("class","text5")
        divSecSepPrimPrim.innerHTML="AVG. DISTANCE"
        divSecSepPrim.appendChild(divSecSepPrimPrim)
    
        const divSecSepPrimSec=document.createElement("div")
        divSecSepPrimSec.setAttribute("class","numDist0")
        divSecSepPrimSec.innerHTML="384,400 KM"
        divSecSepPrim.appendChild(divSecSepPrimSec)
    
        const divSecSepPrimTer=document.createElement("div")
        divSecSepPrimTer.setAttribute("class","espaco1")
        divSecSep.appendChild(divSecSepPrimTer)
    
        const divSecSepSec=document.createElement("div")
        divSecSep.appendChild(divSecSepSec)
    
        const divSecSepPrimQua=document.createElement("div")
        divSecSepPrimQua.setAttribute("class","text5")
        divSecSepPrimQua.innerHTML="EST. TRAVEL TIME"
        divSecSepSec.appendChild(divSecSepPrimQua)
    
        const divSecSepPrimQui=document.createElement("div")
        divSecSepPrimQui.setAttribute("class","numDist0")
        divSecSepPrimQui.innerHTML="3 DAYS"
        divSecSepSec.appendChild(divSecSepPrimQui) 
    
        const animacao=
            "opacity: 1;"+
            "animation: fadeIn 3s linear;"
    
    
    
        barra4.addEventListener("click",()=>{
    
            
    
            divSecSec.innerHTML="MOON" 
            divSecTer.innerHTML="See our planet as you've never seen it before. A perfect"
            divSecQua.innerHTML="relaxing trip away to help regain perspective and come"
            divSecQui.innerHTML="back refreshed. While you're there, take in some history"
            divSecSex.innerHTML="by visiting the Luna 2 and Apollo 11 landing sites."
            imgLua.setAttribute("src","img/image-moon.png")
            divSecSepPrimSec.innerHTML="384,400 KM"
            divSecSepPrimQui.innerHTML="3 DAYS"
                
        
            divSecSec.setAttribute("style",animacao)
            divSecTer.setAttribute("style",animacao)
            divSecQua.setAttribute("style",animacao)
            divSecQui.setAttribute("style",animacao)
            divSecSex.setAttribute("style",animacao)
            imgLua.setAttribute("style",animacao)
            divSecLinha.setAttribute("style",animacao)
            divSecSepPrimSec.setAttribute("style",animacao)
            divSecSepPrimQui.setAttribute("style",animacao)
        
            const timeout=setTimeout(function(){
    
                divSecSec.removeAttribute("style",animacao)
                divSecTer.removeAttribute("style",animacao)
                divSecQua.removeAttribute("style",animacao)
                divSecQui.removeAttribute("style",animacao)
                divSecSex.removeAttribute("style",animacao)
                imgLua.removeAttribute("style",animacao)
                divSecLinha.removeAttribute("style",animacao)
                divSecSepPrimSec.removeAttribute("style",animacao)
                divSecSepPrimQui.removeAttribute("style",animacao)
    
            }, 3000)
        
              
                
        
        })
    
    
    
    
    
    
    
        barra5.addEventListener("click",()=>{
    
           
            divSecSec.innerHTML="MARS" 
            divSecTer.innerHTML="Don't forget to pack your hiking boots. You'll need them to"
            divSecQua.innerHTML="tackle Olympus Mons, the tallest planetary mountain in"
            divSecQui.innerHTML="our solar system. It's two and a half times the size of"
            divSecSex.innerHTML="Everest!"
            imgLua.setAttribute("src","img/image-mars.png")
            divSecSepPrimSec.innerHTML="225 MIL. KM"
            divSecSepPrimQui.innerHTML="9 MONTHS"
            
    
            divSecSec.setAttribute("style",animacao)
            divSecTer.setAttribute("style",animacao)
            divSecQua.setAttribute("style",animacao)
            divSecQui.setAttribute("style",animacao)
            divSecSex.setAttribute("style",animacao)
            imgLua.setAttribute("style",animacao)
            divSecLinha.setAttribute("style",animacao)
            divSecSepPrimSec.setAttribute("style",animacao)
            divSecSepPrimQui.setAttribute("style",animacao)
    
    
            const timeout=setTimeout(function(){
                
                divSecSec.removeAttribute("style",animacao)
                divSecTer.removeAttribute("style",animacao)
                divSecQua.removeAttribute("style",animacao)
                divSecQui.removeAttribute("style",animacao)
                divSecSex.removeAttribute("style",animacao)
                imgLua.removeAttribute("style",animacao)
                divSecLinha.removeAttribute("style",animacao)
                divSecSepPrimSec.removeAttribute("style",animacao)
                divSecSepPrimQui.removeAttribute("style",animacao)
    
            }, 3000)
    
    
            
    
            
    
        })
    
        barra6.addEventListener("click",()=>{
    
           
            divSecSec.innerHTML="EUROPA" 
            divSecTer.innerHTML="The smallest of the four Galilean moons orbiting Jupiter,"
            divSecQua.innerHTML="Europa is a winter lover's dream. With an icy surface, it's"
            divSecQui.innerHTML="perfect for a bit of ice skating, curling, hockey, or simple"
            divSecSex.innerHTML="relaxation in your snug wintery cabin."
            imgLua.setAttribute("src","img/image-europa.png")
            divSecSepPrimSec.innerHTML="628 MIL. KM"
            divSecSepPrimQui.innerHTML="3 YEARS"
            
    
            divSecSec.setAttribute("style",animacao)
            divSecTer.setAttribute("style",animacao)
            divSecQua.setAttribute("style",animacao)
            divSecQui.setAttribute("style",animacao)
            divSecSex.setAttribute("style",animacao)
            imgLua.setAttribute("style",animacao)
            divSecLinha.setAttribute("style",animacao)
            divSecSepPrimSec.setAttribute("style",animacao)
            divSecSepPrimQui.setAttribute("style",animacao)
    
    
            const timeout=setTimeout(function(){
                
                divSecSec.removeAttribute("style",animacao)
                divSecTer.removeAttribute("style",animacao)
                divSecQua.removeAttribute("style",animacao)
                divSecQui.removeAttribute("style",animacao)
                divSecSex.removeAttribute("style",animacao)
                imgLua.removeAttribute("style",animacao)
                divSecLinha.removeAttribute("style",animacao)
                divSecSepPrimSec.removeAttribute("style",animacao)
                divSecSepPrimQui.removeAttribute("style",animacao)
    
            }, 3000)
    
    
            
    
            
    
        })
    
        barra7.addEventListener("click",()=>{
    
           
            divSecSec.innerHTML="TITAN" 
            divSecTer.innerHTML="The only moon known to have a dense atmosphere other"
            divSecQua.innerHTML="than Earth, Titan is a home away from home (just a few"
            divSecQui.innerHTML="hundred degrees colder!). As a bonus, you get striking"
            divSecSex.innerHTML="views of the Rings of Saturn."
            imgLua.setAttribute("src","img/image-titan.png")
            divSecSepPrimSec.innerHTML="1.6 BIL. KM"
            divSecSepPrimQui.innerHTML="7 YEARS"
            
    
            divSecSec.setAttribute("style",animacao)
            divSecTer.setAttribute("style",animacao)
            divSecQua.setAttribute("style",animacao)
            divSecQui.setAttribute("style",animacao)
            divSecSex.setAttribute("style",animacao)
            imgLua.setAttribute("style",animacao)
            divSecLinha.setAttribute("style",animacao)
            divSecSepPrimSec.setAttribute("style",animacao)
            divSecSepPrimQui.setAttribute("style",animacao)
    
    
            const timeout=setTimeout(function(){
                
                divSecSec.removeAttribute("style",animacao)
                divSecTer.removeAttribute("style",animacao)
                divSecQua.removeAttribute("style",animacao)
                divSecQui.removeAttribute("style",animacao)
                divSecSex.removeAttribute("style",animacao)
                imgLua.removeAttribute("style",animacao)
                divSecLinha.removeAttribute("style",animacao)
                divSecSepPrimSec.removeAttribute("style",animacao)
                divSecSepPrimQui.removeAttribute("style",animacao)
    
            }, 3000)
    
    
            
    
            
    
        })
    
    
        
    }

    

});


barra2.addEventListener("click",()=>{

    if (window.innerWidth <= 768) {
        
        body.classList.remove("body1");
        body.classList.remove("body2");
        body.classList.add("body3");
        body.classList.remove("body4");
    
    } else {

        main.classList.remove("alinhar")
        
        body.classList.remove("body1");
        body.classList.remove("body2");
        body.classList.add("body3");
        body.classList.remove("body4");


        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }

        // main.classList.add("alinhar")
        main.classList.remove("alignment")

        const CrewdivPrinc=document.createElement("div")
        CrewdivPrinc.setAttribute("class","alinhaCrew0")
        main.appendChild(CrewdivPrinc)
        
        const CrewdivPrincPri=document.createElement("div")
        CrewdivPrincPri.setAttribute("class","aliCrew")
        CrewdivPrinc.appendChild(CrewdivPrincPri)

        const CrewdivPrincPriPri=document.createElement("div")
        CrewdivPrincPriPri.setAttribute("class","alinhaCrew1")
        CrewdivPrincPri.appendChild(CrewdivPrincPriPri)

        const CrewdivPrincPriPriPri=document.createElement("div")
        CrewdivPrincPriPriPri.setAttribute("class","tituloCrew0")
        CrewdivPrincPriPriPri.innerHTML="02"
        CrewdivPrincPriPri.appendChild(CrewdivPrincPriPriPri)

        const CrewdivPrincPriPriSec=document.createElement("div")
        CrewdivPrincPriPri.appendChild(CrewdivPrincPriPriSec)

        const CrewdivPrincPriPriTer=document.createElement("div")
        CrewdivPrincPriPriTer.setAttribute("class","nomeCrew0")
        CrewdivPrincPriPriTer.innerHTML="MEET YOUR CREW"
        CrewdivPrincPriPri.appendChild(CrewdivPrincPriPriTer)

        const CrewdivPrincPriSec=document.createElement("div")
        CrewdivPrincPriSec.setAttribute("class","centroCrew")
        CrewdivPrincPri.appendChild(CrewdivPrincPriSec)

        const CrewdivPrincPriSecPri=document.createElement("div")
        CrewdivPrincPriSecPri.setAttribute("class","tituloCrew")
        CrewdivPrincPriSecPri.innerHTML="COMMANDER"
        CrewdivPrincPriSec.appendChild(CrewdivPrincPriSecPri)

        const CrewdivPrincPriSecSec=document.createElement("div")
        CrewdivPrincPriSecSec.setAttribute("class","nomeCrew")
        CrewdivPrincPriSecSec.innerHTML="DOUGLAS HURLEY"
        CrewdivPrincPriSec.appendChild(CrewdivPrincPriSecSec)

        const CrewdivPrincPriTer=document.createElement("div")
        CrewdivPrincPriTer.setAttribute("class","textCrew")
        CrewdivPrincPri.appendChild(CrewdivPrincPriTer)

        const CrewdivPrincPriTerPri=document.createElement("div")
        CrewdivPrincPriTerPri.innerHTML="Douglas Gerald Hurley is an American engineer, former"
        CrewdivPrincPriTer.appendChild(CrewdivPrincPriTerPri)

        const CrewdivPrincPriTerSec=document.createElement("div")
        CrewdivPrincPriTerSec.innerHTML="Marine Corps pilot and former NASA astronaut. He"
        CrewdivPrincPriTer.appendChild(CrewdivPrincPriTerSec)

        const CrewdivPrincPriTerTer=document.createElement("div")
        CrewdivPrincPriTerTer.innerHTML="launched into space for the third time as commander of"
        CrewdivPrincPriTer.appendChild(CrewdivPrincPriTerTer)

        const CrewdivPrincPriTerQua=document.createElement("div")
        CrewdivPrincPriTerQua.innerHTML="Crew Dragon Demo-2."
        CrewdivPrincPriTer.appendChild(CrewdivPrincPriTerQua)

        const CrewdivPrincPriTerQui=document.createElement("div")
        CrewdivPrincPriTer.appendChild(CrewdivPrincPriTerQui)


        const CrewdivPrincPriQua=document.createElement("div")
        CrewdivPrincPriQua.setAttribute("class","conjuntoBotao")
        CrewdivPrincPri.appendChild(CrewdivPrincPriQua)

        const CrewBotaoSub0=document.createElement("button")
        CrewBotaoSub0.setAttribute("class","botaoCrewClick")

        CrewBotaoSub0.setAttribute("id","botao0")




        CrewBotaoSub0.addEventListener("click",()=>{

            const animacao=
            "opacity: 1;"+
            "animation: fadeIn 3s linear;"    
    

            CrewBotaoSub0.setAttribute("class","botaoCrewClick")
            CrewBotaoSub1.setAttribute("class","botaoCrew")            
            CrewBotaoSub2.setAttribute("class","botaoCrew")
            CrewBotaoSub3.setAttribute("class","botaoCrew")

            

            CrewElemetImagem.removeAttribute("class","imagemCrew1")
            CrewElemetImagem.setAttribute("class","imagemCrew0")

            CrewdivPrincPriSecPri.innerHTML="COMMANDER"
            CrewdivPrincPriSecSec.innerHTML="DOUGLAS HURLEY"
            CrewdivPrincPriTerPri.innerHTML="Douglas Gerald Hurley is an American engineer, former"
            CrewdivPrincPriTerSec.innerHTML="Marine Corps pilot and former NASA astronaut. He"
            CrewdivPrincPriTerTer.innerHTML="launched into space for the third time as commander of"
            CrewdivPrincPriTerQua.innerHTML="Crew Dragon Demo-2."
            CrewdivPrincPriTerQui.innerHTML=""

            CrewdivPrincPriQua.setAttribute("class","conjuntoBotao")
            

            CrewElemetImagem.setAttribute("src","img/image-douglas-hurley.png")
            


            CrewdivPrincPriSecPri.setAttribute("style",animacao)
            CrewdivPrincPriSecSec.setAttribute("style",animacao)
            CrewdivPrincPriTerPri.setAttribute("style",animacao)
            CrewdivPrincPriTerSec.setAttribute("style",animacao)
            CrewdivPrincPriTerTer.setAttribute("style",animacao)
            CrewdivPrincPriTerQua.setAttribute("style",animacao)
            CrewdivPrincPriTerQui.setAttribute("style",animacao)
            CrewElemetImagem.setAttribute("style",animacao)

        
            const timeout=setTimeout(function(){
    
                CrewdivPrincPriSecPri.removeAttribute("style",animacao)
                CrewdivPrincPriSecSec.removeAttribute("style",animacao)
                CrewdivPrincPriTerPri.removeAttribute("style",animacao)
                CrewdivPrincPriTerSec.removeAttribute("style",animacao)
                CrewdivPrincPriTerTer.removeAttribute("style",animacao)
                CrewdivPrincPriTerQua.removeAttribute("style",animacao)
                CrewdivPrincPriTerQui.removeAttribute("style",animacao)
                CrewElemetImagem.removeAttribute("style",animacao)
    
            }, 3000)
        
            

        })

        CrewdivPrincPriQua.appendChild(CrewBotaoSub0)

        const CrewBotaoSub1=document.createElement("button")
        CrewBotaoSub1.setAttribute("class","botaoCrew")
        CrewBotaoSub1.setAttribute("id","botao1")

        CrewBotaoSub1.addEventListener("click",()=>{

            const animacao=
            "opacity: 1;"+
            "animation: fadeIn 3s linear;" 

            CrewBotaoSub0.setAttribute("class","botaoCrew")
            CrewBotaoSub1.setAttribute("class","botaoCrewClick")
            CrewBotaoSub2.setAttribute("class","botaoCrew")
            CrewBotaoSub3.setAttribute("class","botaoCrew")


            CrewElemetImagem.removeAttribute("class","imagemCrew0")
            CrewElemetImagem.removeAttribute("class","imagemCrew1")
            CrewElemetImagem.setAttribute("class","imagemCrew2")

            
            // Mission Specialist 
            // MARK SHUTTLEWORTH

            // Mark Richard Shuttleworth is the founder and CEO of
            // Canonical, the company behind the Linux-based Ubuntu
            // operating system. Shuttleworth became the first South
            // African to travel to space as a space tourist.

            CrewdivPrincPriSecPri.innerHTML="MISSION SPECIALIST"
            CrewdivPrincPriSecSec.innerHTML="MARK SHUTTLEWORTH"
            CrewdivPrincPriTerPri.innerHTML="Mark Richard Shuttleworth is the founder and CEO of"
            CrewdivPrincPriTerSec.innerHTML="Canonical, the company behind the Linux-based Ubuntu"
            CrewdivPrincPriTerTer.innerHTML="operating system. Shuttleworth became the first South"
            CrewdivPrincPriTerQua.innerHTML="African to travel to space as a space tourist."
            CrewdivPrincPriTerQui.innerHTML=""

            CrewdivPrincPriQua.setAttribute("class","conjuntoBotao")

            CrewElemetImagem.setAttribute("src","img/image-mark-shuttleworth.png")


            CrewdivPrincPriSecPri.setAttribute("style",animacao)
            CrewdivPrincPriSecSec.setAttribute("style",animacao)
            CrewdivPrincPriTerPri.setAttribute("style",animacao)
            CrewdivPrincPriTerSec.setAttribute("style",animacao)
            CrewdivPrincPriTerTer.setAttribute("style",animacao)
            CrewdivPrincPriTerQua.setAttribute("style",animacao)
            CrewdivPrincPriTerQui.setAttribute("style",animacao)
            CrewElemetImagem.setAttribute("style",animacao)

        
            const timeout=setTimeout(function(){
    
                CrewdivPrincPriSecPri.removeAttribute("style",animacao)
                CrewdivPrincPriSecSec.removeAttribute("style",animacao)
                CrewdivPrincPriTerPri.removeAttribute("style",animacao)
                CrewdivPrincPriTerSec.removeAttribute("style",animacao)
                CrewdivPrincPriTerTer.removeAttribute("style",animacao)
                CrewdivPrincPriTerQua.removeAttribute("style",animacao)
                CrewdivPrincPriTerQui.removeAttribute("style",animacao)
                CrewElemetImagem.removeAttribute("style",animacao)
    
            }, 3000)



        })

        
        CrewdivPrincPriQua.appendChild(CrewBotaoSub1)

        const CrewBotaoSub2=document.createElement("button")
        CrewBotaoSub2.setAttribute("class","botaoCrew")
        CrewBotaoSub2.setAttribute("id","botao2")
        
        CrewBotaoSub2.addEventListener("click",()=>{

            const animacao=
            "opacity: 1;"+
            "animation: fadeIn 3s linear;" 

            CrewBotaoSub0.setAttribute("class","botaoCrew")
            CrewBotaoSub1.setAttribute("class","botaoCrew")
            CrewBotaoSub2.setAttribute("class","botaoCrewClick")
            CrewBotaoSub3.setAttribute("class","botaoCrew")

            
           
            CrewElemetImagem.removeAttribute("class","imagemCrew0")
            CrewElemetImagem.removeAttribute("class","imagemCrew1")
            CrewElemetImagem.setAttribute("class","imagemCrew3")
            

            // PILOT
            // Victor Glover

            // Pilot on the first operational flight of the SpaceX Crew
            // Dragon to the International Space Station. Glover is a
            // commander in the U.S. Navy where he pilots an F/A-18.He
            // was a crew member of Expedition 64, and served as a
            // station systems flight engineer.  

            CrewdivPrincPriSecPri.innerHTML="PILOT"
            CrewdivPrincPriSecSec.innerHTML="VICTOR GLOVER"
            CrewdivPrincPriTerPri.innerHTML="Pilot on the first operational flight of the SpaceX Crew"
            CrewdivPrincPriTerSec.innerHTML="Dragon to the International Space Station. Glover is a"
            CrewdivPrincPriTerTer.innerHTML="commander in the U.S. Navy where he pilots an F/A-18.He"
            CrewdivPrincPriTerQua.innerHTML="was a crew member of Expedition 64, and served as a"
            CrewdivPrincPriTerQui.innerHTML="station systems flight engineer."

            CrewdivPrincPriQua.setAttribute("class","conjuntoBotao1")

            

            CrewElemetImagem.setAttribute("src","img/image-victor-glover.png")


            CrewdivPrincPriSecPri.setAttribute("style",animacao)
            CrewdivPrincPriSecSec.setAttribute("style",animacao)
            CrewdivPrincPriTerPri.setAttribute("style",animacao)
            CrewdivPrincPriTerSec.setAttribute("style",animacao)
            CrewdivPrincPriTerTer.setAttribute("style",animacao)
            CrewdivPrincPriTerQua.setAttribute("style",animacao)
            CrewdivPrincPriTerQui.setAttribute("style",animacao)
            CrewElemetImagem.setAttribute("style",animacao)

        
            const timeout=setTimeout(function(){
    
                CrewdivPrincPriSecPri.removeAttribute("style",animacao)
                CrewdivPrincPriSecSec.removeAttribute("style",animacao)
                CrewdivPrincPriTerPri.removeAttribute("style",animacao)
                CrewdivPrincPriTerSec.removeAttribute("style",animacao)
                CrewdivPrincPriTerTer.removeAttribute("style",animacao)
                CrewdivPrincPriTerQua.removeAttribute("style",animacao)
                CrewdivPrincPriTerQui.removeAttribute("style",animacao)
                CrewElemetImagem.removeAttribute("style",animacao)
    
            }, 3000)



        })

        CrewdivPrincPriQua.appendChild(CrewBotaoSub2)
        
        const CrewBotaoSub3=document.createElement("button")
        CrewBotaoSub3.setAttribute("class","botaoCrew")
        CrewBotaoSub3.setAttribute("id","botao3")

        CrewBotaoSub3.addEventListener("click",()=>{

            const animacao=
            "opacity: 1;"+
            "animation: fadeIn 3s linear;" 

            CrewBotaoSub0.setAttribute("class","botaoCrew")
            CrewBotaoSub1.setAttribute("class","botaoCrew")
            CrewBotaoSub2.setAttribute("class","botaoCrew")
            CrewBotaoSub3.setAttribute("class","botaoCrewClick")

            CrewElemetImagem.removeAttribute("class","imagemCrew0")
            CrewElemetImagem.setAttribute("class","imagemCrew1")
            // Flight Engineer
            // Anousheh Ansari

            // Anousheh Ansari is an Iranian American engineer and
            // co-founder of Prodea Systems. Ansari was the fourth
            // self-funded space tourist, the first self-funded woman to
            // fly to the ISS, and the first Iranian in space. 

            CrewdivPrincPriSecPri.innerHTML="FLIGHT ENGINEER"
            CrewdivPrincPriSecSec.innerHTML="ANOUSHEH ANSARI"
            CrewdivPrincPriTerPri.innerHTML="Anousheh Ansari is an Iranian American engineer and"
            CrewdivPrincPriTerSec.innerHTML="co-founder of Prodea Systems. Ansari was the fourth"
            CrewdivPrincPriTerTer.innerHTML="self-funded space tourist, the first self-funded woman to"
            CrewdivPrincPriTerQua.innerHTML="fly to the ISS, and the first Iranian in space."
            CrewdivPrincPriTerQui.innerHTML=""

            CrewdivPrincPriQua.setAttribute("class","conjuntoBotao")

            CrewElemetImagem.setAttribute("src","img/image-anousheh-ansari.png")


            CrewdivPrincPriSecPri.setAttribute("style",animacao)
            CrewdivPrincPriSecSec.setAttribute("style",animacao)
            CrewdivPrincPriTerPri.setAttribute("style",animacao)
            CrewdivPrincPriTerSec.setAttribute("style",animacao)
            CrewdivPrincPriTerTer.setAttribute("style",animacao)
            CrewdivPrincPriTerQua.setAttribute("style",animacao)
            CrewdivPrincPriTerQui.setAttribute("style",animacao)
            CrewElemetImagem.setAttribute("style",animacao)

        
            const timeout=setTimeout(function(){
    
                CrewdivPrincPriSecPri.removeAttribute("style",animacao)
                CrewdivPrincPriSecSec.removeAttribute("style",animacao)
                CrewdivPrincPriTerPri.removeAttribute("style",animacao)
                CrewdivPrincPriTerSec.removeAttribute("style",animacao)
                CrewdivPrincPriTerTer.removeAttribute("style",animacao)
                CrewdivPrincPriTerQua.removeAttribute("style",animacao)
                CrewdivPrincPriTerQui.removeAttribute("style",animacao)
                CrewElemetImagem.removeAttribute("style",animacao)
    
            }, 3000)

        })

        CrewdivPrincPriQua.appendChild(CrewBotaoSub3)

        const CrewEspacoMeio=document.createElement("div")
        CrewEspacoMeio.setAttribute("class","espacoCrew")
        CrewdivPrinc.appendChild(CrewEspacoMeio)

        const CrewDivImagem=document.createElement("div")
        CrewdivPrinc.appendChild(CrewDivImagem)

        const CrewElemetImagem=document.createElement("img")
        CrewElemetImagem.setAttribute("id","destino")
        CrewElemetImagem.setAttribute("class","imagemCrew0")
        CrewElemetImagem.setAttribute("src","img/image-douglas-hurley.png")
        CrewDivImagem.appendChild(CrewElemetImagem)


        
        // CrewdivPrincPriTerPri.innerHTML="Marine Corps pilot and former NASA astronaut. He"
        // CrewdivPrincPriTerPri.innerHTML="launched into space for the third time as commander of"
        // CrewdivPrincPriTerPri.innerHTML="Crew Dragon Demo-2."



    }

})

barra3.addEventListener("click",()=>{

    if (window.innerWidth <= 768) {

        body.classList.remove("body1");
        body.classList.remove("body2");
        body.classList.remove("body3");
        body.classList.add("body4");

        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.classList.remove("alignment")
        main.classList.remove("alinhar")

        

         

    } else {


        body.classList.remove("body1");
        body.classList.remove("body2");
        body.classList.remove("body3");
        body.classList.add("body4");

    
        while (main.firstChild) {

        main.removeChild(main.firstChild);

        }
        main.classList.remove("alignment")
        main.classList.remove("alinhar")

        const divPrinTech=document.createElement("div")
        divPrinTech.setAttribute("class","caixaPrincipalTech")
        main.prepend(divPrinTech)

        const divPrincPriTech=document.createElement("div")
        divPrincPriTech.setAttribute("class","alinhamentoTech")
        divPrinTech.prepend(divPrincPriTech) //continuar depois

        const divPrincPriTechPri=document.createElement("div")
        divPrincPriTechPri.setAttribute("class","caixaTituloTech")
        divPrincPriTech.appendChild(divPrincPriTechPri)

        const divPrincPriTechPriPri=document.createElement("div")
        divPrincPriTechPriPri.setAttribute("class","numeroTech")
        divPrincPriTechPriPri.innerHTML="03"
        divPrincPriTechPri.appendChild(divPrincPriTechPriPri)

        const divPrincPriTechPriSec=document.createElement("div")
        divPrincPriTechPriSec.setAttribute("class","espacoTech")
        divPrincPriTechPri.appendChild(divPrincPriTechPriSec)

        const divPrincPriTechPriTer=document.createElement("div")
        divPrincPriTechPriTer.setAttribute("class","tituloTech")
        divPrincPriTechPriTer.innerHTML="SPACE LAUNCH 101"
        divPrincPriTechPri.appendChild(divPrincPriTechPriTer)

        const divPrincPriTechSec=document.createElement("div")
        divPrincPriTechSec.setAttribute("class","caixaSecTech")
        divPrincPriTech.appendChild(divPrincPriTechSec)

        const divPrincPriTechSecPri=document.createElement("div")
        divPrincPriTechSecPri.setAttribute("class","ordemBotoes")
        divPrincPriTechSec.appendChild(divPrincPriTechSecPri)

       
        

        const divPrincPriTechSecPriPri=document.createElement("button")
        divPrincPriTechSecPriPri.setAttribute("class","botaoTech ajustePriBotaoTech")
        divPrincPriTechSecPriPri.setAttribute("id","botTech01")
        divPrincPriTechSecPriPri.innerHTML="1"
        divPrincPriTechSecPri.appendChild(divPrincPriTechSecPriPri)

        const botTech01=document.getElementById("botTech01")
        
        botTech01.addEventListener("click",()=>{
                      
            botTech01.setAttribute("class","botaoTech ajustePriBotaoTech")
            botTech02.setAttribute("class","botaoTech corBotao")
            botTech03.setAttribute("class","botaoTech corBotao") 

            divPrincPriTechSecTerSec.innerHTML="LAUNCH VEHICLE"
            divPrincPriTechSecTerTerPri.innerHTML="A launch vehicle or carrier rocket is a rocket-propelled"
            divPrincPriTechSecTerTerSec.innerHTML="vehicle used to carry a payload from Earth's surface to"
            divPrincPriTechSecTerTerTer.innerHTML="space, usually to Earth orbit or beyond. Our WEB-X"
            divPrincPriTechSecTerTerQua.innerHTML="carrier rocket is the most powerful in operation. Standing"
            divPrincPriTechSecTerTerQui.innerHTML="150 metres tall, it's quite an awe-inspiring sight on the"
            divPrincPriTechSecTerTerSex.innerHTML="launch pad!"
            imagemTech.setAttribute("src","img/image-launch-vehicle-portrait.jpg")

        })

        const divPrincPriTechSecPriSec=document.createElement("button")
        divPrincPriTechSecPriSec.setAttribute("class","botaoTech corBotao")
        divPrincPriTechSecPriSec.setAttribute("id","botTech02")
        divPrincPriTechSecPriSec.innerHTML="2"
        divPrincPriTechSecPri.appendChild(divPrincPriTechSecPriSec)

        const botTech02=document.getElementById("botTech02")

        botTech02.addEventListener("click",()=>{

            botTech01.setAttribute("class","botaoTech corBotao ajustePriBotaoTech")
            botTech02.setAttribute("class","botaoTech")
            botTech03.setAttribute("class","botaoTech corBotao") 

            divPrincPriTechSecTerSec.innerHTML="SPACEPORT"

            divPrincPriTechSecTerTerPri.innerHTML="A spaceport or cosmodrome is a site for launching (or"
            divPrincPriTechSecTerTerSec.innerHTML="receiving) spacecraft, by analogy to the seaport for ships"
            divPrincPriTechSecTerTerTer.innerHTML="or airport for aircraft. Based in the famous Cape"
            divPrincPriTechSecTerTerQua.innerHTML="Canaveral, our spaceport is ideally situated to take"
            divPrincPriTechSecTerTerQui.innerHTML="advantage of the Earth’s rotation for launch."
            divPrincPriTechSecTerTerSex.innerHTML=""
            imagemTech.setAttribute("src","img/image-spaceport-portrait.jpg")

        })

        const divPrincPriTechSecPriTer=document.createElement("button")
        divPrincPriTechSecPriTer.setAttribute("class","botaoTech corBotao")
        divPrincPriTechSecPriTer.setAttribute("id","botTech03")
        divPrincPriTechSecPriTer.innerHTML="3"
        divPrincPriTechSecPri.appendChild(divPrincPriTechSecPriTer)

        const botTech03=document.getElementById("botTech03")

        botTech03.addEventListener("click",()=>{
            
            botTech01.setAttribute("class","botaoTech corBotao ajustePriBotaoTech")
            botTech02.setAttribute("class","botaoTech corBotao") 
            botTech03.setAttribute("class","botaoTech") 


            divPrincPriTechSecTerSec.innerHTML="SPACE CAPSULE"

            divPrincPriTechSecTerTerPri.innerHTML="A space capsule is an often-crewed spacecraft that uses"
            divPrincPriTechSecTerTerSec.innerHTML="a blunt-body reentry capsule to reenter the Earth's"
            divPrincPriTechSecTerTerTer.innerHTML="atmosphere without wings. Our capsule is where you'll"
            divPrincPriTechSecTerTerQua.innerHTML="spend your time during the flight. It includes a space"
            divPrincPriTechSecTerTerQui.innerHTML="gym, cinema, and plenty of other activities to keep you"
            divPrincPriTechSecTerTerSex.innerHTML="entertained."
            imagemTech.setAttribute("src","img/image-space-capsule-portrait.jpg")



            // A space capsule is an often-crewed spacecraft that uses
            // a blunt-body reentry capsule to reenter the Earth's
            // atmosphere without wings. Our capsule is where you'll
            // spend your time during the flight. It includes a space
            // gym, cinema, and plenty of other activities to keep you
            // entertained.



        })




        const divPrincPriTechSecSec=document.createElement("div")
        divPrincPriTechSecSec.setAttribute("class","espacoTechBotao")
        divPrincPriTechSec.appendChild(divPrincPriTechSecSec)

        const divPrincPriTechSecTer=document.createElement("div")
        divPrincPriTechSecTer.setAttribute("class","caixaTextTech")
        divPrincPriTechSec.appendChild(divPrincPriTechSecTer)


        const divPrincPriTechSecTerPri=document.createElement("div")
        divPrincPriTechSecTerPri.setAttribute("class","text0Tech")
        divPrincPriTechSecTerPri.innerHTML="THE TERMINOLOGY…"
        divPrincPriTechSecTer.appendChild(divPrincPriTechSecTerPri)

        const divPrincPriTechSecTerSec=document.createElement("div")
        divPrincPriTechSecTerSec.setAttribute("class","text1Tech")
        divPrincPriTechSecTerSec.innerHTML="LAUNCH VEHICLE"
        divPrincPriTechSecTer.appendChild(divPrincPriTechSecTerSec)


        const divPrincPriTechSecTerTer=document.createElement("div")
        divPrincPriTechSecTerTer.setAttribute("class","textTech")
        divPrincPriTechSecTer.appendChild(divPrincPriTechSecTerTer)

        const divPrincPriTechSecTerTerPri=document.createElement("div")
        divPrincPriTechSecTerTerPri.innerHTML="A launch vehicle or carrier rocket is a rocket-propelled"
        divPrincPriTechSecTerTer.appendChild(divPrincPriTechSecTerTerPri)

        const divPrincPriTechSecTerTerSec=document.createElement("div")
        divPrincPriTechSecTerTerSec.innerHTML="vehicle used to carry a payload from Earth's surface to"
        divPrincPriTechSecTerTer.appendChild(divPrincPriTechSecTerTerSec)

        const divPrincPriTechSecTerTerTer=document.createElement("div")
        divPrincPriTechSecTerTerTer.innerHTML="space, usually to Earth orbit or beyond. Our WEB-X"
        divPrincPriTechSecTerTer.appendChild(divPrincPriTechSecTerTerTer)

        const divPrincPriTechSecTerTerQua=document.createElement("div")
        divPrincPriTechSecTerTerQua.innerHTML="carrier rocket is the most powerful in operation. Standing"
        divPrincPriTechSecTerTer.appendChild(divPrincPriTechSecTerTerQua)

        const divPrincPriTechSecTerTerQui=document.createElement("div")
        divPrincPriTechSecTerTerQui.innerHTML="150 metres tall, it's quite an awe-inspiring sight on the"
        divPrincPriTechSecTerTer.appendChild(divPrincPriTechSecTerTerQui)

        const divPrincPriTechSecTerTerSex=document.createElement("div")
        divPrincPriTechSecTerTerSex.innerHTML="launch pad!"
        divPrincPriTechSecTerTer.appendChild(divPrincPriTechSecTerTerSex)




        const divPrincSecTech=document.createElement("div")
        divPrincSecTech.setAttribute("class","espacoImagem")
        divPrinTech.appendChild(divPrincSecTech)

        const imagemTech=document.createElement("img")
        imagemTech.setAttribute("class","imagemTech")
        imagemTech.setAttribute("src","img/image-launch-vehicle-portrait.jpg")
        divPrinTech.appendChild(imagemTech) 

        
        

    }





    

})




barra0.addEventListener("mouseover",()=>{
    
    if (a.style.visibility === "visible") {
        a.classList.add("visibilidade1"); 
      } else {
        a.classList.add("visibilidade"); 
      }
})

barra0.addEventListener("mouseout",()=>{
    
    a.classList.remove("visibilidade"); 
    a.classList.remove("visibilidade1"); 

})


barra0.addEventListener("click", () => {
    
    a.removeAttribute("style")
    b.removeAttribute("style")
    c.removeAttribute("style")
    d.removeAttribute("style")
    a.style.visibility = "visible";


}); 


barra1.addEventListener("mouseover", () => {
    
    if (b.style.visibility === "visible") {
      b.classList.add("visibilidade1"); 
    } else {
      b.classList.add("visibilidade"); 
    }

});
  
barra1.addEventListener("mouseout", () => {

    b.classList.remove("visibilidade"); 
    b.classList.remove("visibilidade1"); 

});
  
barra1.addEventListener("click", () => {

    a.removeAttribute("style")
    b.removeAttribute("style")
    c.removeAttribute("style")
    d.removeAttribute("style")
    b.style.visibility = "visible";

});



barra2.addEventListener("mouseover",()=>{
    
    if (c.style.visibility === "visible") {
        c.classList.add("visibilidade1"); 
      } else {
        c.classList.add("visibilidade"); 
      }
})

barra2.addEventListener("mouseout",()=>{
    
    c.classList.remove("visibilidade"); 
    c.classList.remove("visibilidade1"); 

})


barra2.addEventListener("click", () => {
    
    a.removeAttribute("style")
    b.removeAttribute("style")
    c.removeAttribute("style")
    d.removeAttribute("style")
    c.style.visibility = "visible";


});


barra3.addEventListener("mouseover",()=>{
    
    if (d.style.visibility === "visible") {
        d.classList.add("visibilidade1"); 
      } else {
        d.classList.add("visibilidade"); 
      }
})

barra3.addEventListener("mouseout",()=>{
    
    d.classList.remove("visibilidade"); 
    d.classList.remove("visibilidade1"); 

})


barra3.addEventListener("click", () => {
    
    a.removeAttribute("style")
    b.removeAttribute("style")
    c.removeAttribute("style")
    d.removeAttribute("style")
    d.style.visibility = "visible";


}); 
// barra4.addEventListener("mouseover",()=>{
    
//     e.classList.add("visibilidade")
// })

// barra4.addEventListener("mouseout",()=>{
    
//     e.classList.remove("visibilidade")
// })

// barra5.addEventListener("click",()=>{
    
//     destino.setAttribute("src","img/image-mars.png")

// })

// barra5.addEventListener("mouseover",()=>{
    
//     f.classList.add("visibilidade")
// })

// barra5.addEventListener("mouseout",()=>{
    
//     f.classList.remove("visibilidade")
// })

// barra6.addEventListener("mouseover",()=>{
    
//     g.classList.add("visibilidade")
// })

// barra6.addEventListener("mouseout",()=>{
    
//     g.classList.remove("visibilidade")
// })

// barra7.addEventListener("mouseover",()=>{
    
//     h.classList.add("visibilidade")
// })

// // barra7.addEventListener("mouseout",()=>{
    
// //     h.classList.remove("visibilidade")
// // })

