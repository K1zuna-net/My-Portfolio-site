
emailjs.init('oKLMsGCSnjc7A53S_');

window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            //ローディング画面を表示
            document.getElementById('contact_wrapper').style.display = 'none';
            document.getElementById('loader').style.display = 'block';
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm('portfolio_contact', 'contact_inquiry', this)
                .then(function() {
                    document.getElementById('loader').style.display = 'none';
                    document.getElementById('contact_wrapper').style.display = 'block';
                    document.getElementById('send_success').style.display = 'block';
                    document.getElementById('contact-form').reset();
                }, function(error) {
                    console.log(error);
                    document.getElementById('loader').style.display = 'none';
                    document.getElementById('error_msg').innerText = error.text; // エラーメッセージを設定
                    document.getElementById('send_error').style.display = 'block';
                    document.getElementById('contact_wrapper').style.display = 'block';
                });
        });
    }

    function send_error_hideModal() {
    var modal = document.getElementById('send_error');
    modal.style.display = 'none';
    }

    function send_success_hideModal() {
    var modal = document.getElementById('send_success');
    modal.style.display = 'none';
    }

    function closeMenu() {
        document.getElementById('menu-btn-check').checked = false;
        console.log('closeMenu');
    }