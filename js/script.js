var texts = ["Привет)", "Пожалуй, начнем", "Меня зовут Шамиль", "мне 23 года или лет, как тебе удобнее", "сейчас учусь на инженера геодезиста в высшем учебном заведении", "эту хрень которую, ты читаешь я сделал сам", "то есть, сделал его полностью", "учеба в высшем заведении мне нравится, но я знаю, что это не мое ", "свое я уже нашел, и было бы прикольно", "если бы я сказал, что это ты", "но не будем, это саморазвитие)"
,"ооо, включилась музыка)", "Сделай звук чуть потише, чтобы это чудесная музыка не сильно мешала думать", "Хотя похрен, эта музыка прекрасна","под такую музыку хочется говорить о многом", 
"даже пофилософствовать, разговоры о важном и все дела", "но, думаю сейчас это не то место да и не то время", "бывает такое, когда в голове что-то щёлкает", "и этот щелчок открывает дверь к новым мыслям и идеям",
"когда ты чувствуешь, что можешь перевернуть свою жизнь вверх дном", "выбраться из зоны комфорта и рисковать ради своих мечтаний","ох, да, не будем усложнять простое, лучше поговорим о интересном, то есть обо мне)", "Хочу сказать, что я из таких типов людей мечтателей", "которые любят свою жизнь","мой характер можно описать как 'Экстраверт'", "очень запоминающая личность)",
"и официально заявляю - я скромный)", "шучу, скромный это не про меня)", "чутка грустная музыка", "но она мне очень нравится", "ты уже дошла до сюда, это так мило)","пообещай мне выполнить следующею легкую просьбу","обещаешь? не переживай, просьба не сложная","так, я сейчас скажу слово пармезан","а вот ты обязательно должна улыбнуться","хорошо?", "прекрасно", "пармезан", "пармезан", "пармезан", 
"надеюсь, что ты улыбнулась", "в общем, я парень не простой, своеобразный", "со мной точно не соскучишься", "забыл сказать","я уже отслужил в армии"," меня даже ждать не надо", "хороший плюс однако)","пожалуй, мы закончим на этой ноте", "было не скучно, верно?)", "Думаю не скучно", "выбор за тобой", ]; // массив с текстами
var index = 0; // индекс текущего текста

function startAnimation() {
  var buttonArray = document.getElementById("buttonArray");
  buttonArray.setAttribute("disabled", "disabled"); // добавляем атрибут disabled
  document.getElementById("buttonStart").style.display = "none";
  buttonArray.style.display = "block";
  document.getElementById("content").style.display = "block";

  var text = texts[index];
  var i = 0;
  var intervalId = setInterval(function() {
    content.innerHTML += text.charAt(i);
    i++;
    if (i > text.length - 1) {
      clearInterval(intervalId);
      content.style.display = "block";
      buttonArray.removeAttribute("disabled"); // удаляем атрибут disabled
      if (index === texts.length - 1) { // если это последний элемент в массиве, то показываем кнопки
        buttonArray.style.display = "none";
        document.getElementById("button1").style.display = "block";
        document.getElementById("button2").style.display = "block";
      }
    }
    if (index === 11) { // если индекс равен 11 (т.е. 12 элемент массива), включаем музыку
      var audio = document.getElementById("audio");
      audio.currentTime = 10; // устанавливаем начальную позицию воспроизведения в секундах
      audio.play(); // запускаем воспроизведение музыки
    }
  }, 46);
}

function nextText() {
	index++; // увеличиваем индекс для вывода следующего текста
	if (index >= texts.length) { // если индекс стал больше или равен длине массива, то обнуляем его
		index = 0;
	}
	content.innerHTML = ""; // очищаем контент перед выводом нового текста
	startAnimation(); // запускаем анимацию для следующего текста
}


// При нажатии кнопки "button1"
document.getElementById("button1").addEventListener("click", function() {
	// Скрыть текст и показать изображение
	document.getElementById("content").style.display = "none";
	document.getElementById("image1").style.display = "block";
	document.getElementById("button2").style.display = "none";
	document.getElementById("button1").style.display = "none";

	// Создать маленькие сердечки
	for (var i = 0; i < 20; i++) {
		var heart = document.createElement("img");
		heart.src = "img/heart.png";
		heart.classList.add("heart");
		document.body.appendChild(heart);
	}

	// Анимировать маленькие сердечки
	var hearts = document.querySelectorAll(".heart");
	hearts.forEach(function(heart) {
		// Установить начальную позицию маленького сердца
		heart.style.left = Math.random() * window.innerWidth + "px";
		heart.style.top = window.innerHeight + "px";

		// Анимировать маленькое сердце
		var animationDuration = Math.random() * 2 + 1; // случайное время анимации
		var animationDelay = Math.random() * 2; // случайная задержка перед началом анимации
		heart.style.animationDuration = animationDuration + "s";
		heart.style.animationDelay = animationDelay + "s";
		heart.style.animationName = "heart";
	});

	// Удалить маленькие сердечки после окончания анимации
	setTimeout(function() {
		hearts.forEach(function(heart) {
			heart.remove();
		});
	}, 7000);
});

 
 // При нажатии кнопки "button2"
document.getElementById("button2").addEventListener("click", function() {
	// Скрыть текст и показать изображение
	document.getElementById("content").style.display = "none";
	document.getElementById("image2").style.display = "block";
	document.getElementById("button1").style.display = "none";
	document.getElementById("button2").style.display = "none";

	// Создать маленькие сердечки
	for (var i = 0; i < 20; i++) {
		var heart = document.createElement("img");
		heart.src = "img/brokenheart.png";
		heart.classList.add("heart");
		document.body.appendChild(heart);
	}

	// Анимировать маленькие сердечки
	var hearts = document.querySelectorAll(".heart");
	hearts.forEach(function(heart) {
		// Установить начальную позицию маленького сердца
		heart.style.left = Math.random() * window.innerWidth + "px";
		heart.style.top = window.innerHeight + "px";

		// Анимировать маленькое сердце
		var animationDuration = Math.random() * 2 + 1; // случайное время анимации
		var animationDelay = Math.random() * 2; // случайная задержка перед началом анимации
		heart.style.animationDuration = animationDuration + "s";
		heart.style.animationDelay = animationDelay + "s";
		heart.style.animationName = "heart";
	});

	// Удалить маленькие сердечки после окончания анимации
	setTimeout(function() {
		hearts.forEach(function(heart) {
			heart.remove();
		});
	}, 7000);
});

 document.getElementById("image1").style.display = "none";
document.getElementById("image2").style.display = "none";
