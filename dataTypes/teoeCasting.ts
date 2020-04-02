// const userInputElement1 = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement1 = document.getElementById('user-input');

if (userInputElement1) {
    (userInputElement1 as HTMLInputElement).value = 'Hi there!';
}

