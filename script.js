// Donate and History Section

document.getElementById('btn-donate').addEventListener("click", function(){
    document.getElementById('history-section').style.display="none";
    document.getElementById('donate-section').style.display="block";
})

document.getElementById('btn-history').addEventListener("click", function(){
    document.getElementById('history-section').style.display="block";
    document.getElementById('donate-section').style.display="none";
})

// card add money
let noakhalifinalBalance = 0;
document.getElementById('btn-noakhali').addEventListener("click", function(event){
    event.preventDefault;
    let noakhaliInputAmount = parseFloat(document.getElementById("input-noakhali").value);
    let balanceNoakhali = document.getElementById('noakhali-Final')

    // let noakhaliFinalAmount = document.getElementById('noakhali-Final').innerText + noakhaliInputAmount;

    if(noakhaliInputAmount > 0  && !isNaN(noakhaliInputAmount)){
        noakhalifinalBalance += noakhaliInputAmount;
       balanceNoakhali.textContent= noakhalifinalBalance;
       document.getElementById('my_modal_6').checked = true;
               
    }
    else{
        alert('Invalid Data');
    }
    
        
    

   
   

})

