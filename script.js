let intervallato;

const reset = document.getElementById("lorem").innerHTML
let html = document.querySelector("#lorem")
let hype = document.querySelector("#fatto")

hype.addEventListener("submit", (event)=>{
  event.preventDefault()
  let html = document.querySelector("#lorem")

  let oltre = document.getElementById("cosa").value 
  let grill = document.getElementById("quanto").value

  html.innerHTML = reset 

  let joi = document.getElementById("sotto")
  joi.innerText = ""
  if(oltre && grill){
    const regex =  new RegExp( "(" + oltre + ")", 'ig');
    const kok = html.innerHTML.split( regex ); 

    if( kok.length > 1){
      if(grill== "primo"){
        html.innerHTML = kok.map( (str,i) => 
          (i== 1) ? `<span class="highlight">${str}</span>` : str
        ).join('')

      }else{
        html.innerHTML = kok.map( (str,i) => 
          (i%2== 1) ? `<span class="highlight">${str}</span>` : str
        ).join('')

      }
    }else{
      let texto = document.createTextNode("invalid text or empty")
      joi.style.color = "red"
      joi.appendChild(texto);
    }

  }else{
    let texto = document.createTextNode("invalid text or empty")
    joi.style.color = "red"
    joi.appendChild(texto);
  }

})

let rolling = document.getElementById("roll")

rolling.addEventListener("submit", (event) =>{
  event.preventDefault();

  let primo = document.querySelector("#cambiare").value
  let secondo = document.querySelector("#cambiato").value

  html.innerHTML = reset 

  const regex =  new RegExp( "(" + primo + ")", 'ig');
  const lol = html.innerHTML.split( regex ); 

  document.getElementById("cambiare").value = "";

  let joll = document.getElementById("sotta")
  joll.innerText = ""

  if (lol.length == 1 || secondo.length <= 3 || primo.match(/^\s*$/) ){
    let nonn = document.createTextNode("invalid text or empty")
    joll.style.color = "red"
    joll.appendChild(nonn);

  }else{
    html.innerHTML = lol.map( (str,i) =>
      (i%2) ==1 ? `<span class="clickeirio" onclick="mate(), stopping()"> ${secondo} </span>` : str
    ).join('')

    if (!intervallato) {
      intervallato = setInterval(myTimer, 1000);
    }

  }

})

let caso = document.querySelector("#random")
let posizi = []

caso.addEventListener("submit", (event) =>{
  event.preventDefault()
  html.innerHTML = reset

  let ecco = document.querySelector("#casuale").value

  //so, we start with having the split for every single space on words, array formed
  let spaced = html.innerHTML.split( /(\s)/ )

  const nocheat =  new RegExp( "(" + ecco + ")", 'ig');
  let sono =  spaced.length
  let error = document.getElementById("sottin")
  //ALSO, considering how the spaces are in uneven indexes we put the string there

  let lonn = document.createTextNode("invalid text or empty")
  error.innerHTML = "";

  if(spaced.length > 1 && !nocheat.test(spaced) ){
    let rando = Math.random() 

    function trim(uno, due){
      if( Math.floor(uno * due)%2 == 1 ){
        return Math.floor(uno * due)
      }else{
        return Math.floor(uno * due) + 1
      }
    }

    posizi.shift()
    posizi.push( trim(rando, sono) )

    html.innerHTML = spaced.map(
      function(str, i){

        if( i == posizi[0] ){
          return `<span class="clickeirio" onclick="mate(), stopping()" > ${ecco} </span>` 
        }else{
          return str
        }

      }
      
      ).join('')

    if (!intervallato) {
      intervallato = setInterval(myTimer, 1000);
    }

  }else{
    error.style.color = "red"
    error.appendChild(lonn);
  }

})

let contare = 0;
let minuti = 0;

function myTimer(){
  contare += 1;

  if(contare < 10 ){
    document.getElementById("timo").innerHTML = minuti + " " + "0" + contare;

  }else if( contare >= 10){
    document.getElementById("timo").innerHTML = minuti + " " + contare;

    if(contare >= 60){
      minuti += 1;
      document.getElementById("timo").innerHTML = minuti + " " + "00";
      contare= 0;
      
    }
  }else{
    document.getElementById("timo").innerHTML = "0 00";
  }
  
}

let counter = 0;
let results = []

function mate(){
  let droll = document.getElementsByClassName("clickeirio");
  counter +=1;

  if( (counter%2) == 1 ){

    for(let rinn= 0; rinn< droll.length; rinn++){
      results.push( droll[rinn])
      droll[rinn].style.backgroundColor = "red"
    }
  }else{
    for(let rinn= 0; rinn< droll.length; rinn++){
      results.push( droll[rinn])
      droll[rinn].style.backgroundColor = "white"
    }
  }
  
}

let best = ["non ha ancora giocato"]

function stopping(){
  clearTimeout(intervallato) 
  contare = 0;
  intervallato = null; 

  let yunn = document.getElementById("timo")

  if(yunn.innerText!== "0 00"){
    best.push(yunn.innerText)

    yunn.innerText = ` 0 00`
    console.log( best )
    let yinn = document.querySelector("#past")
    let future = document.querySelector("#fut")

    if(best.length%2 == 0){
      yinn.innerHTML = "tempo: " + best[best.length-1 ]
      future.innerHTML = "tempo: " + best[best.length -2 ]
    }else{
      yinn.innerHTML = "tempo: " + best[best.length-2 ]
      future.innerHTML = "tempo: " + best[best.length -1 ]
    }

  }else{
    yunn.innerText = ` 0 00`
  }

}

