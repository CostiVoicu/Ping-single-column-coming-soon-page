button.addEventListener('click', event => {
    var form = document.getElementById('email_input').value.indexOf('@'),
    form_border = document.getElementById('email_input'),
    error_text = document.getElementById('error_text'),
    button = document.getElementById('button');

    if (form == -1){
        form_border.style.borderColor = 'hsl(354, 100%, 66%)';
        error_text.style.display = 'block';
    }
    else{
        form_border.style.borderColor = '';
        error_text.style.display = 'none';
    }
});