let soe = document.getElementById("soe");
let start = document.getElementById("solve_soe");

let numbers =[];



function displayNumbers(){
    let count=1;
    while (soe.firstChild) {
        soe.removeChild(soe.firstChild);
    }

    for(let i=1;i<=10;i++){
        let soeRow = document.createElement("tr");
        soe.appendChild(soeRow);
        for(let j=1;j<=10;j++){
            let soeCell = document.createElement("td");
            soeRow.appendChild(soeCell);
            soeCell.id = `cell-${count}`;
            //numbers.push(count);
            soeCell.innerText=count;
            count++;
        }
    }    

    console.log(numbers);

}

let ms=100;

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve,ms));
}

async function notPrime(num){

    for(i=0;i<num.length;i++){

        let cell = document.getElementById(`cell-${num[i]}`);
        cell.classList.remove("multiple");
        cell.classList.add("notPrime");
        await sleep(ms);
    }
}

async function primeSieveAlgo(){
       //kisi index pe false set hai to us index ko prime number consider kiya jayega
        //kisi index pe true set hai to us index ko not prime number consider kiya jayega
        let arr = new Array(101);
        arr[0]=true;
       

        for(let i=2;i<=100;i++){
            arr[i]=false;
        }
      
        console.log(arr);

        for(let i=1;i<arr.length;i++)
        {   await sleep(ms);
            let num =[];  
            if(i==1){
                arr[1]=true;
                let cell = document.getElementById(`cell-${i}`);
                cell.classList.add("currentCell");
                await sleep(ms*5);
                cell.classList.remove("currentCell");
                cell.classList.add("notPrime");
                await sleep(ms);
            }
            else{
            if(arr[i]==false){
                let cell = document.getElementById(`cell-${i}`);
                cell.classList.add("currentCell");
                await sleep(ms*10);
                for(let j=2;i*j<=100;j++){
                    let multi = document.getElementById(`cell-${i*j}`);
                    arr[i*j]=true; //not prime set kiyo ho
                    multi.classList.add("multiple");
                    num.push(i*j);
                    await sleep(ms);
                }
                await sleep(ms);
                cell.classList.remove("currentCell");
                cell.classList.add("prime");
                await sleep(ms);
                await notPrime(num);
                

            }}

        }

        let result = [];

        for(let i=2;i<=100;i++){
            if(!arr[i]){
                result.push(i);
            }
        }

        console.log("result: " + result);
    
}

document.addEventListener("DOMContentLoaded", function(){
   displayNumbers(); 
});


start.addEventListener("click", function(){

    primeSieveAlgo();

});


