
const answers={
"What causes acne?":"Acne can have several contributing factors, including increased oil production, blocked follicles, inflammation and hormonal influences. A dermatologist can assess the pattern and severity and recommend appropriate treatment.",
"What causes hair loss?":"Hair loss can have many causes, including hereditary factors, hormonal changes, nutritional deficiencies, medical conditions, stress and some medications. Identifying the underlying cause is important before choosing treatment.",
"What are retinoids?":"Retinoids are vitamin-A-related medicines used in dermatology for several conditions. Their suitability, precautions and use depend on the individual and the specific treatment plan."
};
function setupAssistant(){
 const input=document.querySelector("#chatInput"), send=document.querySelector("#chatSend"), box=document.querySelector("#messages"); if(!input||!send||!box)return;
 function ask(q){q=(q||input.value).trim();if(!q)return;let u=document.createElement("div");u.className="message user";u.textContent=q;box.appendChild(u);let b=document.createElement("div");b.className="message bot";b.textContent=answers[q]||"Demo response: the dermatologist-reviewed RAG response will appear here. The backend can be connected later without changing this UI.";box.appendChild(b);input.value="";box.scrollTop=box.scrollHeight}
 send.onclick=()=>ask();input.onkeydown=e=>{if(e.key==="Enter")ask()};document.querySelectorAll("[data-question]").forEach(x=>x.onclick=()=>ask(x.dataset.question));
}
function setupSearch(){const i=document.querySelector("#articleSearch");if(!i)return;i.oninput=()=>{let q=i.value.toLowerCase();document.querySelectorAll("[data-article]").forEach(x=>x.style.display=x.textContent.toLowerCase().includes(q)?"":"none")}}
document.addEventListener("DOMContentLoaded",()=>{setupAssistant();setupSearch()});
