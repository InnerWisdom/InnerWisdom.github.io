let formData = new FormData();
var buttonsubmit = document.forms[0].elements[2];
var text = document.forms[0].elements[1];
var rating = document.forms[0].elements[3];
buttonsubmit.addEventListener("click", buttonPressed);
console.log("Скрипт загружен")
function buttonPressed(evt) {
    console.log("Кнопка нажата загружен");
    evt.preventDefault();

    if (document.forms[0].elements[0].value == 'user' || document.forms[0].elements[0].value == '') {
        Swal.fire(
            'Ошибка!',
            'Вы не ввели имя!',
            'error'
        )
        console.log("Вы не ввели имя");
    }
    else if (text.value == '') {
        Swal.fire(
            'Ошибка!',
            'Вы не ввели текст!',
            'error'
        )
        console.log("Вы не ввели текст");
    }
    else {
        var imagepath = 'images/bin.jpg';
        if(rating.value == 1){

            var imagepath = 'images/oneStar.png';
        
        }
        else if(rating.value== 2){
            
        var imagepath = 'images/twoStar.png';
        
        }
        else if(rating.value== 3){
            
        var imagepath = 'images/threeStar.png';
        
        }
        else if(rating.value== 4){
            
        var imagepath = 'images/fourStar.png';
        
        }
        else if(rating.value== 5){
            
        var imagepath = 'images/fiveStar.png';
        
        }
        formData.append('userName', document.forms[0].elements[0].value);
        formData.append('userText', document.forms[0].elements[1].value);
        formData.append('userRating', rating.value);
        Swal.fire({
            title:'Отлично!',
            html:'<div>Ваше имя </div>' + formData.get('userName')  +
            '<div>Ваш текст </div>' + formData.get('userText') +
            '<div>Ваш рейтинг </div>' + formData.get('userRating') +
            '<div>Перенаправляем Вас на главную страницу </div>' +
            'Осталось <b></b> миллисекунд.',
            imageUrl: imagepath,
            timer: 10000,
            timerProgressBar: true,
            willOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                  const content = Swal.getContent()
                  if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                      b.textContent = Swal.getTimerLeft()
                    }
                  }
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
        })
        setTimeout(function() {document.location.href = "index.html";},10000);
        console.log("Перешли на страницу игры");
    }
}