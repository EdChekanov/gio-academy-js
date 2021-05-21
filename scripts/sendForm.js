const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) => {
    const request = new XMLHttpRequest();
    request.open('POST', server);

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;
        if (request.status === 200 ||
            request.status === 201) {
                const response = JSON.parse(request.responseText);
                callBack(response.id);
            } else {
                falseCallBack(request.status);
                throw new Error(request.status);
            }
    });

    request.send(data);
};

const formEls = document.querySelectorAll('.form');
const submitBtns = document.querySelectorAll('button[type=submit]');
const inputs = document.querySelectorAll('input');
const subText = document.createElement('subText');



const formHandler = (form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formInputs = form.querySelectorAll('input');
        formInputs.forEach((el) => {
            if(el.value.trim() === "") throw new Error('пусто');
        })

        const data = {};

        for (const {name, value} of form.elements) {
            if(name) {
                data[name] = value;
            }
        }
        sendData(JSON.stringify(data),
(id) => {
    subText.textContent = 'Заявка №' + id + ' принята';
    subText.style.color = "green";
    subText.style.fontFamily = "Comic Sans MS";
    form.append(subText);
},
(err) => {
    subText.textContent = 'Технические неполадки';
    subText.style.color = "red";
    subText.style.fontFamily = "Comic Sans MS";
    form.append(subText);
});
form.reset();
    })
}

formEls.forEach(formHandler)

