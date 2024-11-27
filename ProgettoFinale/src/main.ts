import * as bootstrap from 'bootstrap';
import { TodoModel } from './todo.model';


const btnLoadData = document.getElementById('btnLoadData') as HTMLButtonElement | null;

if(btnLoadData != null){
    //Senza async await
    // btnLoadData.addEventListener('click', async ()=>{
    //     console.log(' Bottone Cliccato');
    //     fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    //     .then((response)=>response.json())  
    //     .then((valoreDiRisposta)=>{
    //         console.log(valoreDiRisposta);
    //     });
        
    // });

    
    //Più leggibile
    btnLoadData.addEventListener('click', async ()=>{
        console.log(' Bottone Cliccato');
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        
        const valoreDiRisposta: Array< TodoModel> =  await response.json();  
        console.log(valoreDiRisposta);
        
        
    });
}
