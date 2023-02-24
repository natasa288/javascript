var auto = {
brend: {   
     marka: "VW",
      model: "golf",
},
      gorivo: "benzin",
      godina: "2022",
      boja: "crvena",
      maxBrzina: 160,
      trenutnaBrzina: 0,
      ubrzaj: function(ubrzanje){
        this.trenutnaBrzina += ubrzanje;  
        return this.trenutnaBrzina;
      },
      zakoci: function(brojSekundi){
          while(this.trenutnaBrzina > 0 && brojSekundi > 0){
            this.trenutnaBrzina -= 10;
            console.log("Trenutna brzina pri kočenju je " + this.trenutnaBrzina); 
            brojSekundi--;
            console.debug("Brojač: " + brojSekundi);

          }
          return this.trenutnaBrzina;
      },
      brojKotaca: 4    
};



for (let key in auto){
    if(auto.propertyIsEnumerable(key)){
        console.log("kljuc " + key + "; vrijednost: " + auto[key]);
    }
}

console.log("Ja vozim auto marke: " + auto.brend.marka + "; model: " + auto.brend.model + "iz godine " + auto.godina);

console.log("Auto vozi brzinom " + auto.trenutnaBrzina);
console.log("Auto nakon ubrzanja vozi brzinom " + auto.ubrzaj(60));

console.log("Auto nakon kocenja vozi brzinom " + auto.zakoci(30));


var json = JSON.stringify(auto);
console.log(json);
