window.onload = () =>{
    let button = document.querySelector('#btn');
    button.addEventListener('click',calculateBMI);
}



function calculateBMI(){
    let height = parseInt(document.querySelector('#height').value);
    let Weight = parseInt(document.querySelector('#Weight').value);
    let result = document.querySelector('#result');
    console.log(height);
    if(height === '' || isNaN(height) || height < 0){
        result.innerHTML = 'Please provide a valid height';
    }else if(Weight === '' || isNaN(Weight) || Weight < 0){
        result.innerHTML = 'Please provide a valid weight';
    }


    else{
         let bmi = (Weight / ((height * height) / 10000)).toFixed(2); 


         if(bmi < 18.6){
             result.innerHTML = `Under Weight : <span>${bmi}</span>`;
         }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = `Normal : <span>${bmi}</span>`;
         } else{
            result.innerHTML = `Over Weight : <span>${bmi}</span>`;
         }
    }
}
