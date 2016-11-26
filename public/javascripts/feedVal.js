//alert('File included');
function btnClick(){
    //alert('In btnClick()');
    return validate();
}
function validate(){
    //alert('In Validate()');
    var lh = document.getElementById('lhc').value;
    var q1 = document.getElementById('q1').value;
    var q2 = document.getElementById('q2').value;
    var q3 = document.getElementById('q3').value;

    //alert('lh is '+lh);
    //alert('q1 is '+q1);
    //alert('q2 is '+q2);
    //alert('q3 is '+q3);

    // Check LH
    if(!(lh == 15 || lh == 16 || lh==17)){
        alert('Please select your LH room number');
        return false;
    }

    // Check each question
    if(q1 === '' || q1.trim().length === 0){
        alert('Answering question 1 is mandatory!!');
        return false;
    }
    if(q2 === '' || q2.trim().length === 0){
        alert('Answering question 2 is mandatory!!');
        return false;
    }
    //alert('Returning true in validate');
    return true;
}
