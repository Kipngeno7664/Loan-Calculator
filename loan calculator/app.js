
//listen for submit
document.getElementById('loan-form').addEventListener('submit',function(e){

//hide results
document.getElementById('results').style.display = 'none';

//show loader

document.getElementById('loading').style.display = 'block';
setTimeout(calculateResults,2000);


   
 e.preventDefault();

});
 
//calculate results
function calculateResults(e){
    console.log('calculating.....');
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterset = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterset = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(years.value)*12;
    //monthly payment
    const x = Math.pow(1+calculatedInterset,calculatedPayments);
    const monthly = (principal *x*calculatedInterset)/(x-1);
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterset.value = ((monthly*calculatedPayments)-principal).toFixed(2);
   //show resluts
       
   document.getElementById('results').style.display = 'block';
   //hide loader
   document.getElementById('loading').style.display = 'none';


    } else{
        showError('Please check your numbers');
    }

}
//show error
function showError(error){
     //hide resluts
       
   document.getElementById('results').style.display = 'none';
   //hide loader
   document.getElementById('loading').style.display = 'none';


    //create div
    const errorDiv = document.createElement('div');
    //Get elements
    const card  = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //add class
    errorDiv.className = 'alert alert-danger '; 
    
   // create text node and append child to div
   errorDiv.appendChild(document.createTextNode(error));
   //insert error above
   card.insertBefore(errorDiv,heading);
   //clear error after 3 seconds
   setTimeout(clearError,3000);  
}
//clear error
function clearError(){
document.querySelector('.alert').remove();
}