function rand( min, max ){
    min = parseInt( min, 10 );
    max = parseInt( max, 10 );

    if ( min > max ){
        var tmp = min;
        min = max;
        max = tmp;
    }

    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

function losuj(){
	
	
	for(i=0;i<=ilosc_bomb;i++){
		unikat = rand(0,99);
		//alert(unikat);
		for(w=0;w<=ilosc_bomb;w++){
			if(unikat==tablica[w] || (unikat == puste_w_okol_1_pola_0) || (unikat == puste_w_okol_1_pola_1) || (unikat == puste_w_okol_1_pola_2) || (unikat == puste_w_okol_1_pola_3) || (unikat == puste_w_okol_1_pola_4) || (unikat == puste_w_okol_1_pola_5) || (unikat == puste_w_okol_1_pola_6) || (unikat == puste_w_okol_1_pola_7)){
				unikat = rand(0,99);
				w--;
			}
		}
		tablica[i] = unikat;	
	}

	
}

function inner(){
	for(i=0;i<=ilosc_bomb;i++){		
			document.getElementById("xd").innerHTML=wnetrze_diva+"tablica[i]"+"<br />"
	}
}

var ilosc_bomb = 3;
tablica = new Array(ilosc_bomb);
wnetrze_diva = document.getElementById("xd").innerHTML;

losuj();
inner();