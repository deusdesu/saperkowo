window.onload = start;
var ilosc_bomb=30; //LEPIEJ KURWA NIE WPISUJ TU WIĘCEJ NIŻ 91, BO ŁAPY UPIERDOLE, ZAPIERDOLE CAŁEGO, RODZINE ZABIJĘ, OJCA, BABKĘ, DZIADKA A JAK NIE MASZ DZIADKA TO PRADZIATKA, A JEŻELI MISZKASZ W BLOKU TO UCIERPIĄ NIEWINNI.
//var ilosc_bomb_help=ilosc_bomb+5;
var ilosc_powtorek=0;
var ilosc_wyznaczonych_bomb=0;
var klikniety_element;
var tresc_fota = "";
var nr_id_2_warstwy=nr_id_2_warstwy/1;
var pierwsze_klikniecie = true;
var bomb = new Array(ilosc_bomb);
var numer = new Array(100);
var czy_bomba;
	for(i=0;i<100;i++)
	{
		numer[i]=0;
	}
	var puste_w_okol_1_pola_0=puste_w_okol_1_pola_0/1;
	var puste_w_okol_1_pola_1=puste_w_okol_1_pola_1/1;
	var puste_w_okol_1_pola_2=puste_w_okol_1_pola_2/1;
	var puste_w_okol_1_pola_3=puste_w_okol_1_pola_3/1;
	var puste_w_okol_1_pola_4=puste_w_okol_1_pola_4/1;
	var puste_w_okol_1_pola_5=puste_w_okol_1_pola_5/1;
	var puste_w_okol_1_pola_6=puste_w_okol_1_pola_6/1;
	var puste_w_okol_1_pola_7=puste_w_okol_1_pola_7/1;

// tablica wypełniona  zerami, zwiększaj pole o 1 za każdym razem kiedy liczba równa jego indeksowi zostanie wylosowana (to się dzieje potem ;) )
var bomb_czy_zostala_wylosowana = new Array(99);
for(i=0;i<100;i++)
	{
		bomb_czy_zostala_wylosowana[i]=0;
	}
/*---------------------------------------------------------------------------------------------------------------*/
	
function start(){
	var tresc_diva="";
	for(i=0;i<100;i++)
	{
	/*	wyznacz(i);*/
		if(i%10==0)tresc_diva=tresc_diva+'<div style="clear:both;"></div>';
		tresc_diva=tresc_diva+'<div class="defa1" id=id'+i+'></div>';  /* sprawdz_czy_bomba('+i+') */
	}
	tresc_diva=tresc_diva+'<div style="clear:both;"></div>';
	
	document.getElementById("pola").innerHTML=tresc_diva;
	/*
	mod_numer();
	umiesc_numer();
	umiesc_bombe(); 
	*/
	umiesc_2_warstwe();
}
	//tresc_fota=tresc_fota+"<br />ilosc_wyznaczonych_bomb= "+ilosc_wyznaczonych_bomb+"<br />ilosc_powtorek= "+ilosc_powtorek;

function wyznacz_bomby(){
	var unikat;
	var ilosc_powtorzen_w_petli=0;
	
	for(i=0;i<ilosc_bomb;i++){
		for(;;){
			unikat = rand(0,99);
			if(bomb_czy_zostala_wylosowana[unikat]==0 && unikat != nr_id_2_warstwy && unikat != puste_w_okol_1_pola_0 && unikat != puste_w_okol_1_pola_1 && unikat != puste_w_okol_1_pola_2 && unikat != puste_w_okol_1_pola_3 && unikat != puste_w_okol_1_pola_4 && unikat != puste_w_okol_1_pola_5 && unikat != puste_w_okol_1_pola_6 && unikat != puste_w_okol_1_pola_7){
				bomb_czy_zostala_wylosowana[unikat]++;
				break;
			}
			ilosc_powtorzen_w_petli++;
			
		}
		bomb[i] = unikat;
		ilosc_wyznaczonych_bomb++;		
	}
	document.getElementById("footer").innerHTML="Wyznaczyło: "+ilosc_wyznaczonych_bomb+"<br />"+"ilosc_powtorzen_w_petli: "+ilosc_powtorzen_w_petli;

}

function mod_numer(){
	for(i=0;i<ilosc_bomb;i++)
	{
		if(bomb[i]==0)
		{
			numer[1]=numer[1]+1;
			numer[10]=numer[10]+1;
			numer[11]=numer[11]+1;
		}
		
		else if(bomb[i]>1&&bomb[i]<9)
		{
			numer[bomb[i]+1]=numer[bomb[i]+1]+1;
			numer[bomb[i]-1]=numer[bomb[i]-1]+1;
			numer[bomb[i]+10]=numer[bomb[i]+10]+1;
			numer[bomb[i]+11]=numer[bomb[i]+11]+1;
			numer[bomb[i]+9]=numer[bomb[i]+9]+1;
		}
		
		else if(bomb[i]==9)
		{
			numer[8]=numer[8]+1;
			numer[19]=numer[19]+1;
			numer[18]=numer[18]+1;
		}
		
		else if(bomb[i]==90)
		{
			numer[91]=numer[91]+1;
			numer[80]=numer[80]+1;
			numer[81]=numer[81]+1;
		}
		
		else if(bomb[i]%10==0)
		{
			numer[bomb[i]-10]=numer[bomb[i]-10]+1;
			numer[bomb[i]-9]=numer[bomb[i]-9]+1;
			numer[bomb[i]+1]=numer[bomb[i]+1]+1;
			numer[bomb[i]+10]=numer[bomb[i]+10]+1;
			numer[bomb[i]+11]=numer[bomb[i]+11]+1;
		}
		
		else if(bomb[i]==99)
		{
			numer[98]=numer[98]+1;
			numer[89]=numer[89]+1;
			numer[88]=numer[88]+1;
		}
		
		else if((bomb[i]+1)%10==0)
		{
			numer[bomb[i]-10]=numer[bomb[i]-10]+1;
			numer[bomb[i]+9]=numer[bomb[i]+9]+1;
			numer[bomb[i]-1]=numer[bomb[i]-1]+1;
			numer[bomb[i]+10]=numer[bomb[i]+10]+1;
			numer[bomb[i]-11]=numer[bomb[i]-11]+1;
		}
		
		else if(bomb[i]>90&&bomb[i]<99)
		{
			numer[bomb[i]-1]=numer[bomb[i]-1]+1;
			numer[bomb[i]-9]=numer[bomb[i]-9]+1;
			numer[bomb[i]-10]=numer[bomb[i]-10]+1;
			numer[bomb[i]-11]=numer[bomb[i]-11]+1;
			numer[bomb[i]+1]=numer[bomb[i]+1]+1;
		}
		
		else
		{
			numer[bomb[i]-11]=numer[bomb[i]-11]+1;
			numer[bomb[i]-10]=numer[bomb[i]-10]+1;
			numer[bomb[i]-9]=numer[bomb[i]-9]+1;
			numer[bomb[i]-1]=numer[bomb[i]-1]+1;
			numer[bomb[i]+1]=numer[bomb[i]+1]+1;
			numer[bomb[i]+9]=numer[bomb[i]+9]+1;
			numer[bomb[i]+10]=numer[bomb[i]+10]+1;
			numer[bomb[i]+11]=numer[bomb[i]+11]+1;
		}
		
		
	}
}

function umiesc_numer(){
	for(i=0;i<100;i++)
	{
		if(numer[i]!=0){
		document.getElementById("id"+i).className="numer0";
		document.getElementById("id"+i).innerHTML=numer[i];
		}
		
	}
}

function umiesc_bombe(){
	//document.getElementById("footer").innerHTML=tresc_fota;		
	for(i=0;i<ilosc_bomb;i++)
	{
		document.getElementById("id"+bomb[i]).className="bomba";
		document.getElementById("id"+bomb[i]).setAttribute("onclick","bomba()");			 /*----------*/
		document.getElementById("id"+bomb[i]).innerHTML="";
	}
	/*document.getElementById("id3").className="bomba";*/
}

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

function bomba(){
	//alert("porażkowo :ccc");
	/*for(i=0;i<100;i++)
	{
		document.getElementById("ida"+i).className="defa0";
	}
	
	for(i=0;i<ilosc_bomb;i++)
	{
		document.getElementById("ida"+bomb[i]).className="bomba_on";
	}*/
	document.getElementById("logo").innerHTML="PORAŻKA"	
	document.getElementById("polaIndex2").innerHTML=""	
//	document.getElementsByClassName("defa").style.opacity=0;
	//document.querySelector(".defa").style.opacity=0;
	
}

function znikajka(n){
	document.getElementById(n).style.visibility='hidden';
	//document.getElementsByClassName("defa").style.visibility='hidden';

	klikniety_element=n;
	//alert(n);
	
	if(klikniety_element.length == 5)			//wyznacza nr id dla 2 warstwy
		czy_bomba=klikniety_element.substr(4,1);
		else czy_bomba=klikniety_element.substr(4,2);
	
	//alert(czy_bomba);
	
	
	
	sprawdz_czy_1st_jest_puste();
	//interakcja_z_bomba()
	for(i=0;i<ilosc_bomb;i++)
	{
		//document.getElementById("id"+bomb[i]).className="bomba";
		document.getElementById("id2a"+bomb[i]).setAttribute("onclick","");			 /*----------*/
		document.getElementById("id2a"+bomb[i]).setAttribute("onclick","bomba()");			 /*----------*/
	//	document.getElementById("id2a"+bomb[i]).innerHTML="";
	}
}

function umiesc_2_warstwe(){
	
	var tresc_diva2="";
	for(i=0;i<100;i++)
	{
	/*	wyznacz(i);*/
		if(i%10==0)tresc_diva2=tresc_diva2+'<div style="clear:both;"></div>';
		tresc_diva2=tresc_diva2+'<div class="defa" id=id2a'+i+' onclick="znikajka(this.id)" ></div>';  /* sprawdz_czy_bomba('+i+') */
	}
	tresc_diva2=tresc_diva2+'<div style="clear:both;"></div>';
	
	
	document.getElementById("polaIndex2").innerHTML=tresc_diva2;
}

function sprawdz_czy_1st_jest_puste(){
	//jeżeli element o id pod tym (mające taki sam nr) ma class != defa to powtarza pentle ehh
	//alert(klikniety_element);
	if(pierwsze_klikniecie == true){
		//alert(klikniety_element.length);
		if(klikniety_element.length == 5)			//wyznacza nr id dla 2 warstwy
		nr_id_2_warstwy=klikniety_element.substr(4,1);
		else nr_id_2_warstwy=klikniety_element.substr(4,2);
		//alert(nr_id_2_warstwy);
		
		//alert(nr_id_2_warstwy);

		//wyznaczyć class dla elementu 1 wartwy
		
		//var class_1_warstwy=document.getElementById("id"+nr_id_2_warstwy).className;
		//alert(class_1_warstwy);
		nr_id_2_warstwy=nr_id_2_warstwy/1
		//alert(nr_id_2_warstwy+100)
		
		puste_w_okol_1_pola_0 = nr_id_2_warstwy - 11;
		puste_w_okol_1_pola_1 = nr_id_2_warstwy - 10;
		puste_w_okol_1_pola_2 = nr_id_2_warstwy - 9;
		puste_w_okol_1_pola_3 = nr_id_2_warstwy - 1;
		puste_w_okol_1_pola_4 = nr_id_2_warstwy + 1;
		puste_w_okol_1_pola_5 = nr_id_2_warstwy + 9;
		puste_w_okol_1_pola_6 = nr_id_2_warstwy + 10;
		puste_w_okol_1_pola_7 = nr_id_2_warstwy + 11;
		 
		//alert("id klikniete = "+nr_id_2_warstwy + " puste pole" + puste_w_okol_1_pola_0 + "." + puste_w_okol_1_pola_1+ "." + puste_w_okol_1_pola_2+ "." + puste_w_okol_1_pola_3+ "." + puste_w_okol_1_pola_4+ "." + puste_w_okol_1_pola_5+ "." + puste_w_okol_1_pola_6+ "." + puste_w_okol_1_pola_7);
		
			wyznacz_bomby();
			mod_numer();
			umiesc_numer();
			umiesc_bombe();
			
	}
	pierwsze_klikniecie = false;
	
	// funkcje manipulujące liczbami muszą być wywołane dopiero po kliku XDDD i bez udziału klikniętego diva! XD no tak od początku powinno być ale ok XD
	
	/*PODCZAS WYZNACZANIA NR BOMB NIE MOŻE ZAJŚĆ:
		1.	BOMBA = nr_id_2_warstwy
		2.	BOMBA = puste_w_okol_1_pola_x	GDZIE X TO LICZBY NATURALNE OD 0 DO 7 WŁĄCZNIE
		
	*/
}

/*function interakcja_z_bomba(){
	// if kliknięte id +
	//	czy_bomba	numerID dla 2 warstwy
	
	
	if(document.getElementById("id"+czy_bomba).className=="bomba") alert("chuj udalo się :)))))");
		
	
	
}*/


