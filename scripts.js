let formData = document.getElementById('reg');

formData.addEventListener("submit", formSubmit);
console.log("Скрипт загружен");

function formSubmit(evt) {
  let formData = new FormData();
  console.log("Кнопка нажата");
  evt.preventDefault();
  
  const name = document.getElementById('username');
  const text = document.getElementById('comment');
  const rating = document.getElementById('selectRating');
  if (name.value == 'user' || name.value == '') {
    Swal.fire(
      'Ошибка!',
      'Вы не ввели имя!',
      'error'
    )
    console.log("Вы не ввели имя или введено стандартное имя user");
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
    var textFirst ='';
    if (rating.value == 1) {
      var imagepath = 'images/oneStar.png';
      textFirst='Ужасно';
    }

    else if (rating.value == 2) {
      var imagepath = 'images/twoStar.png';
      textFirst='Плохо';
    }

    else if (rating.value == 3) {
      var imagepath = 'images/threeStar.png';
      textFirst='Ни о чём';
    }

    else if (rating.value == 4) {
      var imagepath = 'images/fourStar.png';
      textFirst='Хорошо';
    }

    else if (rating.value == 5) {
      var imagepath = 'images/fiveStar.png';
      textFirst='Отлично!';
    }
    
    formData.append('userName', name.value);
    formData.append('userText', text.value);
    formData.append('userRating', rating.value);
    Swal.fire({
      title: textFirst,
      html: '<div>Ваше имя </div>' + formData.get('userName') +
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
        console.log('Форма закрыта по таймеру');
      }
    })
    setTimeout(function () { document.location.href = "index.html"; }, 10000);
    console.log("Перешли на главную");
  }
}