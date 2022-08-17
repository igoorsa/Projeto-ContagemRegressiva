function contagemRegressiva(){
    let classSegundos = document.querySelector(".second")
    let classMinutos = document.querySelector(".minute")
    let classHoras = document.querySelector(".hour")
    let classDias = document.querySelector(".day")
    
    let segundos = classSegundos.textContent
    let minutos = classMinutos.textContent
    let horas = classHoras.textContent
    let dias = classDias.textContent
    
   
        if(segundos!=0){
            newSecond = segundos-1
            classSegundos.innerText = `${newSecond}`
               
        }else if(segundos == 0 && minutos != 0){
            classSegundos.innerText = `${60}`
            newMinuto = minutos-1
            classMinutos.innerText = `${newMinuto}`

        }else if(minutos == 0 && horas != 0){
            classMinutos.innerText = `${60}`
            newHora = horas - 1
            classHoras.innerText = `${newHora}` 
        }else if(horas == 0 && dias != 0){
            classHoras.innerText = `${24}` 
            newDia = dias - 1
            classDias.innerText = `${newDia}`
            return horas = 24
        }
    
    }

setInterval(contagemRegressiva, 1000);
