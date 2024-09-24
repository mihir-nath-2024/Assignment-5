// Donate and History Section

document.getElementById('btn-donate').addEventListener("click", function(){
    document.getElementById('comment-section').style.display="none";
    document.getElementById('donate-section').style.display="block";
})

document.getElementById('btn-history').addEventListener("click", function(){
    document.getElementById('comment-section').style.display="block";
    document.getElementById('donate-section').style.display="none";
})

// Noakhali Donate
let noakhalifinalBalance = 0;

document.getElementById('btn-noakhali').addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let noakhaliInputAmount = parseFloat(document.getElementById("input-noakhali").value);
    let balanceNoakhali = document.getElementById('noakhali-Final');

    if (noakhaliInputAmount > 0 && !isNaN(noakhaliInputAmount)) {
        noakhalifinalBalance += noakhaliInputAmount;
        balanceNoakhali.textContent = noakhalifinalBalance;

        // Add a comment with the current date and time zone
        let commentSection = document.getElementById('comment-section'); // The section to add comments
        let comment = document.createElement('p');
        let currentTime = new Date().toLocaleString('en-US', { timeZoneName: 'short' });
        comment.textContent = `Payment of ${noakhaliInputAmount} was successful on ${currentTime}.`;
        commentSection.appendChild(comment);

        // Trigger the modal (if applicable)
        document.getElementById('my_modal_6').checked = true;       
    } else {
        alert('Invalid Data');
    }  
});
