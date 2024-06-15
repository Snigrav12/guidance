const questions=[
    {
         'que' : "Which of the following is the most haunted place ?",
          'a'  :  "PP",
          'b'  :  "VIP",
          'c'  :  "Gakhir",
          'd'  :  "Mouth",
          'correct' : "b",
    },

    {
        'que' : "Who is the Prime Minister of India?",
         'a'  :  "Modi",
         'b'  :  "Gaurav",
         'c'  :  "Rahul",
         'd'  :  "Amit shah",
         'correct' : "b",
   },

   {
    'que' : "Which food gaurav mostly like ?",
     'a'  :  "Chole Bhature",
     'b'  :  "Pav bhaji",
     'c'  :  "Saag",
     'd'  :  "Paneer ",
     'correct' : "d",
},

{
    'que' : "Which is gaurav favourite color?",
     'a'  :  "Red",
     'b'  :  "Blue",
     'c'  :  "White",
     'd'  :  "Black",
     'correct' : "b",
},

{
    'que' : "Which game does gaurav like the most?",
     'a'  :  "Kabaddi",
     'b'  :  "Football",
     'c'  :  "Cricket",
     'd'  :  "Badminton",
     'correct' : "c",
}
]

let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const quesbox=document.getElementById('quesbox');
const answer=document.querySelectorAll('.answers');
const loadquestion = ()=>{
    reset();
    if(index===total){
        return endquiz();
    }
    const data = questions[index];
    quesbox.innerText= `${index+1}${data.que}`;
    answer[0].nextElementSibling.innerText=data.a;
    answer[1].nextElementSibling.innerText=data.b;
    answer[2].nextElementSibling.innerText=data.c;
    answer[3].nextElementSibling.innerText=data.d;
}

const submitquiz=()=>{
    const data = questions[index];
    const ans =getanswer();
    console.log(ans,data.correct);
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getanswer =()=>{
    let user;
    answer.forEach(
        (input)=>{
            if(input.checked){
                user= input.value;
                
            }
        }
    )
    return user;
}

const reset =()=>{
    answer.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}


const endquiz=()=>{

    let resultText = document.getElementById('resultText');
    if (right >= 3) {
        resultText.innerHTML = `<h2>Congratulations! You got selected. You will receive a confirmation email from our college.</h2>`;
    } else {
        resultText.innerHTML = `<h2>Better luck next time.</h2>`;
    }

    document.getElementById('box').innerHTML= `<h3>Your response for the exam is</h3>
    <h2>${right}/${total}are correct</h2>
    `
}



loadquestion();

