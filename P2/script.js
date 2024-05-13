$(document).ready(function(){
    $('#submitButton').click(function(){
        var name = $('#name').val();
        var dob = $('#dob').val();
        var age = $('#age').val();
        var email = $('#email').val();

        var isValid = true;

        // Validare nume
        if (name.trim() === "") {
            isValid = false;
            $('#name').addClass('error');
        } else {
            $('#name').removeClass('error');
        }

        // Validare data de naștere
        if (dob.trim() === "" || isNaN(Date.parse(dob))) {
            isValid = false;
            $('#dob').addClass('error');
        } else {
            $('#dob').removeClass('error');
        }

        // Validare vârstă
        if (isNaN(age) || age <= 0 || age > 100) {
            isValid = false;
            $('#age').addClass('error');
        } else {
            $('#age').removeClass('error');
        }

        // Validare adresa de email
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            $('#email').addClass('error');
        } else {
            $('#email').removeClass('error');
        }

        if (isValid) {
            $('#message').text("Datele sunt completate corect.");
        } else {
            $('#message').text("Campurile nu sunt completate corect.");
        }
    });
});