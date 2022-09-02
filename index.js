var player1 = true;
function play(buttonNumber){
    let btn = document.getElementById(buttonNumber);

    if(btn.textContent == 'X' || btn.textContent == 'O'){
        return;
    }

    if(player1 == true){
        btn.textContent = 'X';
        btn.style.color = 'red';
        player1 = false;
    }else{
        btn.textContent = 'O';
        btn.style.color = 'green';
        player1 = true;
    }

    checkWin();
};

const odds = ['123','456','789','147','258','369','159','357'];
function checkWin(){
    odds.forEach(odd => {
        if(document.getElementById(odd[0]).textContent==='X' &&
           document.getElementById(odd[1]).textContent==='X' &&
           document.getElementById(odd[2]).textContent==='X'){
            Win('X');
        }
        if(document.getElementById(odd[0]).textContent==='O' &&
           document.getElementById(odd[1]).textContent==='O' &&
           document.getElementById(odd[2]).textContent==='O'){
            Win('O');
        }
    });
};

function Win(player){
    document.getElementById('txt').textContent = player+' WINS';
};

function reset(){
    document.getElementById('txt').textContent = 'TIC TAC TOE';
    for(let j = 1; j < 10; j++){
        document.getElementById(j.toString()).textContent == '';
    };

}