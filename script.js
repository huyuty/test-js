qu = 0
rs = 0
document.querySelectorAll('.image img').forEach((el, index) => {
    el.addEventListener('click', () => {
        if (index === questions[qu].rightAnswer) {
            el.parentNode.classList.add('image__success')
            rs = rs + 1
        } else {
            el.parentNode.classList.add('image__failure')
            document.querySelectorAll('.image')[questions[qu].rightAnswer].classList.add('image__success')
        }
        document.querySelectorAll('.image').forEach((e) => {
            e.style.pointerEvents = 'none'
        })
        document.querySelector('.button').classList.add('button__active')
        document.querySelector('.text div').textContent = 'Красавчик'
        qu = qu + 1
    })
})


document.querySelector('.button').addEventListener('click', () => {
    document.querySelector('.button').classList.remove('button__active')
    document.querySelectorAll('.image').forEach((el, index) => {
        el.style.pointerEvents = ''
        el.classList.remove('image__success')
        el.classList.remove('image__failure')
        el.querySelector('img').src = questions[qu].options[index]
        console.log(qu)
    })
    document.querySelector('.text div').textContent = questions[qu].question
    document.getElementById(qu).classList.add('link__active')
    if (qu === 4) {
        alert('Ваш результат ' + rs + '. Обновите страницу')
    }
})

const questions = [{
        question: "Начинаем с простенького. Судя по мультфильму, Чебурашка и Гена много гуляли и ходили пешком. А вот если бы они устали, то могли бы спокойно воспользоваться любым другим способом передвижения, кроме одного. Какого?",
        options: [
            "var1.jpg",
            "var2.jpg",
            "var3.jpg",
            "var4.jpg",
        ],
        rightAnswer: 0,
    },
    {
        question: "Какой вредительский сувенир подарил героям «Тайны третьей планеты» Весельчак У?",
        options: [
            "popuga.jpg",
            "flowers.jpg",
            "blaster.jpg",
            "briliantturtle.jpg",
        ],
        rightAnswer: 3,
    },
    {
        question: "Что, по словам рассказчика мультфильма «Кот, который гулял сам по себе», сделало «дикого-предикого» древнего человека более цивилизованным?",
        options: [
            "dog.jpg",
            "woman.jpg",
            "kop'e.jpg",
            "fire.jpg",
        ],
        rightAnswer: 1,
    },
    {
        question: "Из какого советского мультфильма вышла крылатая фраза «Шо, опять?»?",
        options: [
            "blue_puppy.jpg",
            "vovka.jpg",
            "ZBP.jpg",
            "v-strane-nevyuchennyh-urokov.jpg",
        ],
        rightAnswer: 2,
    },
];