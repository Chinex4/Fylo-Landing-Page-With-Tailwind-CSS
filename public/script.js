const textbox1 = document.querySelector('.textbox1');
const warningMsg1 = document.querySelector('.warning1');
const btn1 = document.querySelector('.btn1');
const textbox2 = document.querySelector('.textbox2');
const warningMsg2 = document.querySelector('.warning2');
const btn2 = document.querySelector('.btn2');

const RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail1() {
    if (textbox1.value.match(RegExp)) {
        textbox1.style.border = '1px solid green';
    } else {
        warningMsg1.style.display = 'block';
        textbox1.style.border = '1px solid red';

        textbox1.addEventListener('click', (e) => {
            warningMsg1.style.display = 'none';
            textbox1.style.border = '1px solid grey';
        })
    }
}
function validateEmail2(){
    if (textbox2.value.match(RegExp)) {
        textbox2.style.border = '1px solid green';
    } else {
        warningMsg2.style.display = 'block';
        textbox2.style.border = '1px solid red';

        textbox2.addEventListener('click', (e) => {
            warningMsg2.style.display = 'none';
            textbox2.style.border = '1px solid grey';
        });
    };
};
btn1.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmail1();
});
btn2.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmail2();
});


