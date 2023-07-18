console.log('Hello World !');
let request = new XMLHttpRequest();

let html = '',data;
let check;

function country(temp)
{
    // document.querySelector('button').preventDefault();
    request.open('GET',`https://restcountries.com/v3.1/name/${temp}`);
    request.send();
    
        
            request.addEventListener('load',function(){
                [data] = JSON.parse(this.responseText);
                
    //                 html = `
    // <div class="card">
    //             <div class="image">
    //                 <img alt="Img Here" class="logo">
    //             </div><hr>
    //             <div class="detail">
    //                 <p>Name :<span class='name'></span></p>
    //                 <p>Area : <span  class="area"></span> Km<sup>2</sup></p>
    //                 <p class="Population"></p>
    //                 <p>Capital : <span class="capital"></span></p>
    //                 <p >Currency : ${data.capital}</p>
    //                 <a target="_blank">Map</a>
    //             </div>
    //         </div>
    // `;
    
    if(check)
    {
        let {currencies} = data.currencies;
        // console.log(data);
        // console.log(currencies);
         html = `
     <div class="card">
                 <div class="image">
                     <img alt="Img Here" class="logo" src='${data.flags.png}'>
                 </div><hr>
                 <div class="detail">
                     <p> ${data.name.common}</p>
                     <p>📏 : ${data.area} Km<sup>2</sup></p>
                     <p class="Population"></p>
                     <p>📌 : ${data.capital}</p>
                     <p >💰 : ${data.currencies}</p>
                     <a target="_blank" href="${data.maps.googleMaps}"> 🌍🌏🌎</a>
                 </div>
             </div>
     `;
                document.querySelector('.container').insertAdjacentHTML('beforeend',html);
                check = false;
    }
    // document.querySelector('.logo').src = data.flags.png;
    // document.querySelector('.name').textContent = data.name.common;
    // document.querySelector('.Currency').textContent =` ${data.currencies.INR.symbol} `;
    // document.querySelector('.area').textContent = data.area;
    // document.querySelector('.capital').textContent = data.capital ;
    // document.querySelector('a').href = data.maps.googleMaps;
    });



}


    document.querySelector('button').addEventListener('click',(event)=>{
        event.preventDefault();
        country(document.querySelector('input')?.value);
        console.log('check');
        check = true;
    });
    // country('china');
    // country(brazil);    