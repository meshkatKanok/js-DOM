const chek=document.querySelectorAll('section');
 for(const all of chek){
    all.style.border='2px solid red';
   all.style.background='yellow';
   all.style.textAlign='center';
   all.style.padding='10px'
   all.style.width='50%';
   all.style.margin='15px auto'
 
 }
 const pera=document.getElementById('p');
 pera.classList.add('my-pera');
 pera.classList.remove('t-p')

 const tittle=document.getElementById('c');
 const c=tittle.getAttribute('id');
 const t=tittle.setAttribute('title','this todo')
 console.log(c,t);


 let maincontainer=document.getElementById('c');
 const s=document.createElement('section');
 s.innerHTML=`
<div class="check">
<h1>good news</h1>
<ul class="t-p">
<li>news1</li>
<li>news2</li>
<li>news3</li>
<li>news4</li>
<li>newa5</li>
<li>news6</li>
</ul></div>
 `;
 maincontainer.appendChild(s);
  

 
  