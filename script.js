// Donate and History Section

document.getElementById('btn-donate').addEventListener("click", function(){
    document.getElementById('history-section').style.display="none";
    document.getElementById('donate-section').style.display="block";
})

document.getElementById('btn-history').addEventListener("click", function(){
    document.getElementById('history-section').style.display="block";
    document.getElementById('donate-section').style.display="none";
})