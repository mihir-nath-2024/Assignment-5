// Donate and History Section

// document.getElementById('btn-donate').addEventListener("click", function(){
//     document.getElementById('comment-section').style.display="none";
//     document.getElementById('donate-section').style.display="block";
   
// })

// document.getElementById('btn-history').addEventListener("click", function(){
//     document.getElementById('comment-section').style.display="block";
//     document.getElementById('donate-section').style.display="none";
// })


function setActive(clickedButton) {
    // Get all buttons
    var buttons = document.querySelectorAll('#btn-donate, #btn-history');
  
    // Remove active class from all buttons
    buttons.forEach(function(button) {
      button.classList.remove('bg-btn-secondary', 'text-white');
      button.classList.add('bg-btn-primary');
    });
  
    // Add active class to the clicked button
    clickedButton.classList.remove('bg-btn-primary');
    clickedButton.classList.add('bg-btn-secondary');
  }
  
  document.getElementById('btn-donate').addEventListener("click", function() {
    document.getElementById('comment-section').style.display = "none";
    document.getElementById('donate-section').style.display = "block";
    setActive(this);  // Set the Donate button as active
  });
  
  document.getElementById('btn-history').addEventListener("click", function() {
    document.getElementById('comment-section').style.display = "block";
    document.getElementById('donate-section').style.display = "none";
    setActive(this);  // Set the History button as active
  });
  



let currentGlobalBalance = parseFloat(document.getElementById('total-balance').innerText);
// Noakhali Donation
let noakhalifinalBalance = 0;


document.getElementById('btn-noakhali').addEventListener("click", function(event) {
    event.preventDefault(); 

    let noakhaliInputAmount = parseFloat(document.getElementById("input-noakhali").value);
    let balanceNoakhali = document.getElementById('noakhali-Final');

   
    if (!isNaN(noakhaliInputAmount) && noakhaliInputAmount > 0) {
        noakhalifinalBalance += noakhaliInputAmount;
        balanceNoakhali.textContent = noakhalifinalBalance.toFixed(2); 

        
        let commentSection = document.getElementById('comment-section');
        let comment = document.createElement('p');
        let paymentTime =document.createElement('p');
        let currentTime = new Date().toLocaleString('en-US', { timeZoneName: 'short' });
        comment.textContent = `Payment of BDT ${noakhaliInputAmount.toFixed(2)} for Noakhali flood was successful.`;
        paymentTime.textContent = `Date ${currentTime} (Bangladesh Standard Time.) `
        commentSection.appendChild(comment);
        commentSection.appendChild(paymentTime);
        comment.style.fontSize='20px';
        comment.style.fontWeight='bold';
        

        
        document.getElementById('my_modal_6').checked = true;    

       
        currentGlobalBalance += noakhaliInputAmount; 
        document.getElementById('total-balance').innerText = currentGlobalBalance.toFixed(2); 

        
        document.getElementById("input-noakhali").value = ''; 
    } else {
        alert('Invalid Data. Please enter a valid donation amount.');
    }  
});


// Feni Donation


let fenifinalBalance = 0;

document.getElementById('btn-feni').addEventListener("click", function(event) {
    event.preventDefault(); 
    let feniInputAmount = parseFloat(document.getElementById("input-feni").value);
    let balanceFeni = document.getElementById('feni-Final');

    

    if (feniInputAmount > 0 && !isNaN(feniInputAmount)) {
        fenifinalBalance += feniInputAmount;
        balanceFeni.textContent = `BDT ${fenifinalBalance.toFixed(2)}`; 

       
        let commentSection = document.getElementById('comment-section');
        let comment = document.createElement('p');
        let paymentTime =document.createElement('p');
        let currentTime = new Date().toLocaleString('en-US', { timeZoneName: 'short' });
        comment.textContent = `Payment of BDT ${feniInputAmount.toFixed(2)} for Feni flood was successful.`;
        paymentTime.textContent = `Date ${currentTime} (Bangladesh Standard Time.) `
        commentSection.appendChild(comment);
        commentSection.appendChild(paymentTime);
        comment.style.fontSize='20px';
        comment.style.fontWeight='bold';
        

        

        
        document.getElementById('my_modal_6').checked = true;  
        
        currentGlobalBalance += feniInputAmount; 
        document.getElementById('total-balance').innerText = currentGlobalBalance.toFixed(2); 

        
        document.getElementById("input-feni").value = '';
    } else {
        alert('Invalid Data');
    }  
});

// Quota Donation

let quotafinalBalance = 0;

document.getElementById('btn-quota').addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let quotaInputAmount = parseFloat(document.getElementById("input-quota").value);
    let balanceQuota = document.getElementById('quota-Final');

    console.log("Feni Input Amount:", quotaInputAmount); // Debugging

    if (quotaInputAmount > 0 && !isNaN(quotaInputAmount)) {
        quotafinalBalance += quotaInputAmount;
        balanceQuota.textContent = `BDT ${quotafinalBalance.toFixed(2)}`; 

       
        let commentSection = document.getElementById('comment-section');
        let comment = document.createElement('p');
        let paymentTime =document.createElement('p');
        let currentTime = new Date().toLocaleString('en-US', { timeZoneName: 'short' });
        comment.textContent = `Payment of BDT ${quotaInputAmount.toFixed(2)} for Quota Movement was successful.`;
        paymentTime.textContent = `Date ${currentTime} (Bangladesh Standard Time.) `
        commentSection.appendChild(comment);
        commentSection.appendChild(paymentTime);
        comment.style.fontSize='20px';
        comment.style.fontWeight='bold';

        
        
       

       
        document.getElementById('my_modal_6').checked = true; 
        currentGlobalBalance += quotaInputAmount; 
        document.getElementById('total-balance').innerText = currentGlobalBalance.toFixed(2); 

        
        document.getElementById("input-quota").value = '';      
    } else {
        alert('Invalid Data');
    }  
});

// // scroll Blur
// const content = document.getElementById('main-part');
// const navbarHeight = document.getElementById('top-two-btn').offsetHeight;

// // Scroll event listener
// window.onscroll = function() {
    
//     if (window.scrollY > navbarHeight) {
//         content.style.filter = 'blur(5px)';
//     } else {
//         content.style.filter = 'none';
//     }
// };


const navbarHeight = document.getElementById('top-two-btn').offsetHeight;

        // Set the height of the blur overlay to match the navbar height
        document.getElementById('blur-overlay').style.height = `${navbarHeight}px`;

        // Add blur effect to the overlay
        window.addEventListener('scroll', function() {
            const blurOverlay = document.getElementById('blur-overlay');

            if (window.scrollY > 0) {
                blurOverlay.classList.add('backdrop-blur-md');  // Apply the blur
            } else {
                blurOverlay.classList.remove('backdrop-blur-md');  // Remove the blur when at the top
            }
        });



// button
