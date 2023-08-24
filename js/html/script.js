const nextButton = document.querySelector(`.next`) // кнопка вперед//
const prevButton = document.querySelector(`.prev`) // кнопка назад//

const images = document.querySelectorAll(".photos img") // получаем все картинки которые есть в пхотос//

let imageIndex = 0; // текущий эллемент который мы отоброжаем, равен 0 тк у нас есть класс show//

nextButton.onclick = function() {

    images[imageIndex].classList.remove("show");

    if (imageIndex >= images.length -1) { // прозрачна и не видна//
        imageIndex = 0;
    } else{ 
    imageIndex = imageIndex + 1;
     }

    images[imageIndex].classList.add("show");
     }

prevButton.onclick = function() {
    

    images[imageIndex].classList.remove("show");

    if (imageIndex <=0) {
        imageIndex = images.length -1 ;
    } else {
    imageIndex = imageIndex - 1;
    
    }
    images[imageIndex].classList.add("show");

}




function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



  
  $(document).ready(function() {
    $('#feedback-form').submit(function(e) {
        e.preventDefault();
        sendFeedback();
    });
 
    function sendFeedback() {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
 
        var data = {
            name: name,
            email: email,
            message: message
        };
 
        $.ajax({
            type: 'POST',
            url: 'send-feedback.php',
            data: data,
            success: function(response) {
                $('#feedback-response').html(response);
                $('#feedback-form')[0].reset();
            }
        });
    }
});