
function $(q){return document.querySelector(q)}
function $all(q){return Array.from(document.querySelectorAll(q))}
function gradeQuiz(id){
  const root = document.getElementById(id);
  let score=0, total=0;
  if(!root) return;
  root.querySelectorAll('[data-question]').forEach((q,i)=>{
    total++;
    const correct = q.getAttribute('data-answer');
    q.querySelectorAll('.option').forEach(opt=>{
      opt.onclick = ()=>{
        q.querySelectorAll('.option').forEach(o=>o.classList.remove('correct','incorrect'));
        if(opt.getAttribute('data-value')===correct){ opt.classList.add('correct'); } else { opt.classList.add('incorrect'); }
        const chosen = opt.getAttribute('data-value');
        if(chosen===correct){ score++; }
        root.querySelector('.result').textContent = `Puntuación: ${score} / ${total}`;
      }
    })
  })
}
document.addEventListener('DOMContentLoaded', ()=>{
  $all('.quiz').forEach(q=> gradeQuiz(q.id));
});
