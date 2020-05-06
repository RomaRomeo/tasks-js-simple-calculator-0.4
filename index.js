const pushFullName = document.querySelector('.full-name');
const pressButton = document.querySelector('.btn');

pressButton.addEventListener('click', fullNameSpace);

function fullNameSpace() {
    const nameResult = document.querySelectorAll('.result');
    if (pushFullName.value !== 0)  {
        const nameList = pushFullName.value;
        const nameArray = nameList.split(' ');
        for (let i = 0; i < nameArray.length; i++) {
        nameResult[i].value = nameArray[i];
        }
    }
    if (pushFullName.value == 0) {
        pushFullName.placeholder = "enter a full name by a space"
        for (let i = 0; i < nameResult.length; i++) {
        nameResult[i].value = ' ';
        }
	}
}