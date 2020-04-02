interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
    [prop: string]: string;
}

const errorBag1: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};