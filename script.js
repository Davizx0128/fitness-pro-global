const exercicios = [];
const receitas = [];

// LISTA REAL DE EXERCÍCIOS MAIS USADOS NO MUNDO
const listaExercicios = [
{nome:"Supino Reto",grupo:"Peito"},
{nome:"Supino Inclinado",grupo:"Peito"},
{nome:"Crucifixo",grupo:"Peito"},
{nome:"Agachamento Livre",grupo:"Pernas"},
{nome:"Leg Press",grupo:"Pernas"},
{nome:"Stiff",grupo:"Pernas"},
{nome:"Barra Fixa",grupo:"Costas"},
{nome:"Puxada Frontal",grupo:"Costas"},
{nome:"Remada Curvada",grupo:"Costas"},
{nome:"Desenvolvimento",grupo:"Ombros"},
{nome:"Elevação Lateral",grupo:"Ombros"},
{nome:"Rosca Direta",grupo:"Bíceps"},
{nome:"Rosca Alternada",grupo:"Bíceps"},
{nome:"Tríceps Corda",grupo:"Tríceps"},
{nome:"Tríceps Testa",grupo:"Tríceps"},
{nome:"Abdominal Crunch",grupo:"Core"},
{nome:"Prancha",grupo:"Core"},
{nome:"Burpee",grupo:"Funcional"},
{nome:"Flexão de Braço",grupo:"Casa"},
{nome:"Corrida",grupo:"Cardio"}
];

// DUPLICAR PARA GERAR MUITO CONTEÚDO PROFISSIONAL
for(let i=0;i<20;i++){
listaExercicios.forEach(e=>{
exercicios.push({
nome:e.nome+" "+(i+1),
grupo:e.grupo,
descricao:"Exercício clássico para desenvolvimento de "+e.grupo
});
});
}

// RECEITAS FITNESS MAIS POPULARES
const listaReceitas = [
{nome:"Frango com Batata Doce",categoria:"Hipertrofia",calorias:450},
{nome:"Omelete Proteico",categoria:"Alta Proteína",calorias:250},
{nome:"Salada Proteica",categoria:"Emagrecimento",calorias:300},
{nome:"Smoothie Verde",categoria:"Detox",calorias:180},
{nome:"Arroz Integral com Frango",categoria:"Manutenção",calorias:500},
{nome:"Panqueca de Banana",categoria:"Fitness",calorias:220}
];

for(let i=0;i<25;i++){
listaReceitas.forEach(r=>{
receitas.push({
nome:r.nome+" "+(i+1),
categoria:r.categoria,
calorias:r.calorias,
descricao:"Receita ideal para dieta "+r.categoria
});
});
}

function renderExercicios(){
const container=document.getElementById("exercicios");
container.innerHTML="<h2>Exercícios</h2>";
exercicios.forEach(e=>{
container.innerHTML+=`
<div class="card">
<h3>${e.nome}</h3>
<p>Grupo: ${e.grupo}</p>
<p>${e.descricao}</p>
</div>`;
});
}

function renderReceitas(){
const container=document.getElementById("receitas");
container.innerHTML="<h2>Receitas</h2>";
receitas.forEach(r=>{
container.innerHTML+=`
<div class="card">
<h3>${r.nome}</h3>
<p>Categoria: ${r.categoria}</p>
<p>Calorias: ${r.calorias} kcal</p>
<p>${r.descricao}</p>
</div>`;
});
}

function showSection(id){
document.querySelectorAll(".section")
.forEach(sec=>sec.style.display="none");
document.getElementById(id).style.display="block";
}

function calcularIMC(){
let peso=document.getElementById("peso").value;
let altura=document.getElementById("altura").value;
let imc=peso/(altura*altura);
document.getElementById("resultadoIMC")
.innerText="IMC: "+imc.toFixed(2);
}

document.getElementById("search").addEventListener("input",function(){
let value=this.value.toLowerCase();
document.querySelectorAll(".card").forEach(card=>{
card.style.display=
card.innerText.toLowerCase().includes(value)
?"block":"none";
});
});

renderExercicios();
renderReceitas();
showSection("exercicios");