




function allCountries(){
    var all ="all";
    getData(all, function (d) {
        setData(d);
    });
}

function BySearch(e){
    console.log(123);
    
    e.preventDefault();
    
    let name = $('#nameCounrty').val();
     $('#nameCounrty').val('');

    getData(name, function (d) {
        setData(d);
    });
}




function getData(name, callback){
   if(name!=="all"){
    var url = "http://restcountries.eu/rest/v2/name/"+name
   }else{
    var url = "http://restcountries.eu/rest/v2/all";
   }

    $.ajax({
        url:url,
        method: 'GET'
    }).done(function (d) {
        if (typeof d === 'string')
            d = JSON.parse(d);
            callback(d);
    });
}


function setData(countries){ 
var clear = `<div class=""></div>`;
    $('#countries').html(clear);
    for(let i = 0; i <countries.length; i++){
        console.log(typeof countries.length);
        console.log(i);
        
        var tempMain = `<div class="col-md-5  mainDiv divImg">
        <img class="img" src="${countries[i]["flag"]}" alt="">
        <div class="divContent">
            <h3 class="content">Name: ${countries[i]['name']}</h3>
            <h3 class="content">Top Level Domain: ${countries[i]['topLevelDomain'][0]}</h3>
            <h3 class="content">Capital: ${countries[i]["capital"]}</h3>
            <div id="${i} class=""> <h3 class="content"><strong>Currencies:</strong> Code: ${countries[i]["currencies"][0]['code']}</h3><h3 class="content">Name:  ${countries[i]["currencies"][0]['name']}</h3><h3 class="content"> Symbol:  ${countries[i]["currencies"][0]['symbol']}</h3></div>
        </div>
        </div>`;
        $('#countries').append(tempMain);
    }
}
