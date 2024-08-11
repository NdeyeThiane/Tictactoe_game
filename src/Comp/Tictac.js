import React, { useEffect, useState } from "react";

function Cells () {
    const [ischeck, setischeck] = useState([false,false,false,false,false,false,false,false,false]);
    const [cell1, setcells1] = useState('');
    const [cell2, setcells2] = useState('');
    const [cell3, setcells3] = useState('');   
    const [cell4, setcells4] = useState('');
    const [cell5, setcells5] = useState('');
    const [cell6, setcells6] = useState('');
    const [cell7, setcells7] = useState('');
    const [cell8, setcells8] = useState('');
    const [cell9, setcells9] = useState('');
    const [availableCells, setavailableCells] = useState(9);
    const [isComputerTurn, setisComputerTurn] = useState(false);



    function randomizeCells(){
        return Math.floor(Math.random() * availableCells);
    }
    function computerTurn (){
            let index = randomizeCells();
            while(ischeck[index] === true && availableCells !== 0){
                index = randomizeCells();
            }
            if (index ===0){
                setcells1('X');
                ischeck[index]='true';
                setavailableCells(a => a-1);
                setisComputerTurn(false);
                
            }else if (index ===1){
                setcells2('X');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(false);                

            }else if(index ===3){
                setcells3('X');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(false);
            }else if(index ===4) {
                setcells4('X');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(false);
            }else if(index ===5){
                setcells5('X');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(false);
            }else if (index ===6){
                setcells6('X');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(false);
            }else if(index ===7){
                setcells7('X');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(false);
            }else if (index ===8){
                setcells8('X');
                ischeck[index]  = 'true';;
                setavailableCells(a => a-1);
                setisComputerTurn(false);
            }else if(index ===9){
                setcells9('X');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(false);
            }
            else {
                alert('Game over');

            }
    }

    function HandleClick(index){
        if(isComputerTurn === false){
            while(ischeck[index] !== false ){
               if(availableCells === 0 ){
                  alert('Game over');
               }
               else{
                alert('cell not available, pick another cell');
               }
            }
            if (index ===0){
                setcells1('O');
                ischeck[index]='true';
                setavailableCells(a => a-1);
                setisComputerTurn(true);
                
            }else if (index ===1){
                setcells2('O');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(true);                
    
            }else if(index ===3){
                setcells3('O');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(true);
            }else if(index ===4) {
                setcells4('O');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(true);
            }else if(index ===5){
                setcells5('O');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(true);
            }else if (index ===6){
                setcells6('O');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(true);
            }else if(index ===7){
                setcells7('O');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(true);
            }else if (index ===8){
                setcells8('O');
                ischeck[index]  = 'true';;
                setavailableCells(a => a-1);
                setisComputerTurn(true);
            }else if(index ===9){
                setcells9('O');
                ischeck[index]  = 'true';
                setavailableCells(a => a-1);
                setisComputerTurn(true);
            }
        }
        else{
            
            computerTurn();
        }
       
    }

    return ( <div className='cells'>
        <p className='cell one' onClick={() => HandleClick(0)}>{cell1}</p>
        <p className='cell two'  onClick={() => HandleClick(1)}>{cell2}</p>
        <p className='cell three'  onClick={() => HandleClick(2)}>{cell3}</p>
        <p className='cell four'  onClick={() => HandleClick(3)}>{cell4}</p>
        <p className='cell five'  onClick={() => HandleClick(4)}>{cell5}</p>
        <p className='cell six'  onClick={() => HandleClick(5)}>{cell6}</p>
        <p className='cell seven'  onClick={() => HandleClick(6)}>{cell7}</p>
        <p className='cell eight'  onClick={() => HandleClick(7)}>{cell8}</p>
        <p className='cell nine'  onClick={() => HandleClick(8)}>{cell9}</p>
    </div>
    

    )
}


export default Cells;

