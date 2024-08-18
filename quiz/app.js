const correctAnswers = ['B', 'B', 'B', 'B'];
const result = document.querySelector('.result');

const form = document.querySelector('.quiz-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    console.log(userAnswers);

    let i = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
        }
        i++;
    })
    //show result on the page
    score = score / 4 * 100;

    result.classList.remove('d-none');
    scrollTo(0, 0);

    let output = 0;
    const spantag = document.querySelector('span');
    
    let updateOutput = setInterval(() => {
        spantag.textContent = `${output}%`;
        if (output === score){
            clearInterval(updateOutput);
        } else {
            output++;
        }
    }, 10);

})
