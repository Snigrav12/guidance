document.getElementById('testForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const q1 = parseInt(document.querySelector('input[name="q1"]').value);
    const q2 = document.querySelector('input[name="q2"]').value.toLowerCase();
    const q3 = parseInt(document.querySelector('input[name="q3"]').value);
    const q4 = document.querySelector('input[name="q4"]').value.toLowerCase();
    const q5 = parseInt(document.querySelector('input[name="q5"]').value);
    
    // Answers
    const answers = {
        q1: 1636,
        q2: 'paris',
        q3: 15,
        q4: 'sc',
        q5: 1861
    };
    
    // Check answers
    let score = 0;
    if (q1 === answers.q1) score++;
    if (q2 === answers.q2) score++;
    if (q3 === answers.q3) score++;
    if (q4 === answers.q4) score++;
    if (q5 === answers.q5) score++;
    
    // Display result

    const resultSection = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    
    if (score >= 4) {
        resultText.textContent = `Congratulations! You scored ${score}/5 and qualify for admission to Harvard College.We will contact you soon`;
    } else {
        window.location.assign('page10.html');
    }
  

    
    resultSection.style.display = 'block';
});
