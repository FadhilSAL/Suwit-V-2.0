function pilihanKomputer(){
    const komputer = Math.random();
    if(komputer<0.34) return 'gajah'
    else if(komputer > 0.34 && komputer<0.64) return 'orang'
    else{return 'semut'}
    }



    function rules(player,komp){
        if(player == komp) return 'Seri!';
        if(player == 'gajah') return (komp == 'orang') ? 'Menang!' :'Kalah!';
        if(player == 'orang') return (komp == 'gajah') ? 'Kalah!' :'Menang!';
        if(player == 'semut') return (komp == 'orang') ? 'Kalah!' :'Menang!';
    }


    function roll(){
        const pilihanK = document.querySelector('.img-komputer');
        const gambar = ['gajah','orang','semut'];
        let i = 0;
        const waktumulai = new Date().getTime();
        setInterval(function(){
          if(new Date().getTime() - waktumulai>1000){
             clearInterval;
             return;
            }
            pilihanK.setAttribute('src',gambar[i++] + '.png')
            if(i == gambar.length) i = 0;
        },100)
        
    }
    
    
    
    const pilihan = document.querySelectorAll('li img');
    
    let skor = 0;

pilihan.forEach((pil)=>{
    pil.addEventListener('click',function(){
        const pilihanComputer = pilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = rules(pilihanPlayer,pilihanComputer)
        roll();

setTimeout(function(){
        const img = document.querySelector('.img-komputer')    
        img.setAttribute('src',pilihanComputer+'.png')
        const info = document.querySelector('.info');
        info.innerHTML = hasil
        
        if(hasil == 'Menang!' ){
            skor += 1
            document.querySelector('span').innerHTML = skor
        }
        else if(hasil == 'Kalah!'){
            skor -= 1
            document.querySelector('span').innerHTML = skor
        }
    },1000)
    
    })
})