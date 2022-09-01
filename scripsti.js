var esc = document.querySelector('input#butao2')
var hab = document.querySelector('select#habilidades')
var cla = document.querySelector('select#classe')
var op1 = document.querySelector('option#op1')
var op2 = document.querySelector('option#op2')
var op3 = document.querySelector('option#op3')
var op4 = document.querySelector('option#op4')
    var mamp = document.querySelector("input#MP")
    var mahp = document.querySelector("input#HP")
    var masan = document.querySelector("input#SAN")
    var maxmp = document.querySelector("input#MP2")
    var maxhp = document.querySelector("input#HP2")
    var maxsan = document.querySelector("input#SAN2")
        var str = document.querySelector("input#atributo1")
        var con = document.querySelector("input#atributo2")
        var will = document.querySelector("input#atributo3")
        var dex = document.querySelector("input#atributo4")
        var intt = document.querySelector("input#atributo5")
        var intm = document.querySelector("input#atributo6")
        var luck = document.querySelector("input#atributo7")
        var cha = document.querySelector("input#atributo8")
            var conc = document.querySelector("input#concentra")
            var ace = document.querySelector("input#acertar")
            var res = document.querySelector("input#resist")
                var equipamentos = document.querySelector("textarea#equip")
                var nome = document.querySelector("input#nome")
function save(){
    localStorage.setItem('equipamentos',equipamentos.value)
    localStorage.setItem('vidamax',maxhp.value)
    localStorage.setItem('vida',mahp.value)
    localStorage.setItem('mpmax',maxmp.value)
    localStorage.setItem('mp',mamp.value)
    localStorage.setItem('maxsan',maxsan.value)
    localStorage.setItem('san',masan.value)
        localStorage.setItem('concentra',conc.value)
        localStorage.setItem('acertar',ace.value)
        localStorage.setItem('resist',res.value)
    localStorage.setItem('str',str.value)
    localStorage.setItem('con',con.value)
    localStorage.setItem('will',will.value)
    localStorage.setItem('dex',dex.value)
    localStorage.setItem('intt',intt.value)
    localStorage.setItem('intm',intm.value)
    localStorage.setItem('luck',luck.value)
    localStorage.setItem('cha',cha.value)
    localStorage.setItem('name',nome.value)
}
function load(){
    equipamentos.value = localStorage.getItem('equipamentos')
    maxhp.value = localStorage.getItem('vidamax')
    mahp.value = localStorage.getItem('vida')
    maxmp.value = localStorage.getItem('mpmax')
    mamp.value = localStorage.getItem('mp')
    maxsan.value = localStorage.getItem('maxsan')
    masan.value = localStorage.getItem('san')
    conc.value = localStorage.getItem('concentra')
    ace.value = localStorage.getItem('acertar')
    res.value = localStorage.getItem('resist')
    str.value = localStorage.getItem('str')
    con.value = localStorage.getItem('con')
    will.value = localStorage.getItem('will')
    dex.value = localStorage.getItem('dex')
    intt.value = localStorage.getItem('intt')
    intm.value = localStorage.getItem('intm')
    luck.value = localStorage.getItem('luck')
    cha.value = localStorage.getItem('cha')
    nome.value = localStorage.getItem('name')
}                
function escolher(){
if(cla.value == 'Animago'){
   op1.innerText = `Chamado Animal`
   op2.innerText = `Transformação Parcial`
   op3.innerText = `Forma Animal`
   op4.innerText = `Sintonia Selvagem`
} else if(cla.value == 'Legilimens / Occlumens'){
    op1.innerText = `Memória Fotográfica`
    op2.innerText = `Oclumência`
    op3.innerText = `Intuição Precisa`
    op4.innerText = `Legilimência`
}
else if(cla.value == 'Especialista em Runas'){
    op1.innerText = `Item Rúnico`
    op2.innerText = `Fluente`
    op3.innerText = `Defesa Rúnica`
    op4.innerText = `Mestre das Runas`
}
else if(cla.value == 'Duelista'){
    op1.innerText = `Cadeia de Feitiços`
    op2.innerText = `Vigor Aprimorado`
    op3.innerText = `Reflexo Superior`
    op4.innerText = `Duelista de Primeira-Classe`
}
}
function opi1(){
    if(cla.value == 'Animago'){
    window.alert ("Chamado Animal: Você tem a habilidade de pedir ajuda ao seu animal interior. Uma vez ao dia você pode assumir uma característica (Determinada pelo DM) do seu animal para ajudar em algum momento de necessidade.")
}else if(cla.value == 'Legilimens / Occlumens'){
    window.alert("Memória Fotográfica: A partir do momento que você adquiri essa habilidade, você pode lembrar com precisão de tudo que aconteceu na sua volta.")
}
else if(cla.value == 'Especialista em Runas'){
    window.alert ("Item Rúnico: Você pode escolher um objeto para fundir com runas para reproduzir um feitiço que você já conhece. Para criar um novo objeto você deve primeiro se desfazer do antigo. O Feitiço reproduzido não custará nenhuma MP para ser usado, porém ainda custará uma ação para ser usado.")
}
else if(cla.value == 'Duelista'){
    window.alert ("Cadeia de Feitiços: Durante uma batalha você pode adquirir uma postura ofensiva. Enquanto manter essa postura você pode fazer 2 feitiços por rodada cada um custando metade da MP necessária (arredondada pra cima), em contrapartida você tem desvantagem em testes de resistência e desviar.")
}
}
function opi2(){
    if(cla.value == 'Animago'){
        window.alert ("Uma vez ao Dia, Com uma ação, você pode manifestar uma caractéristica ou parte do corpo da sua forma animal a sua escolha. Essa Habilidade dura até 1 hora.")
    }
    else if(cla.value == 'Legilimens / Occlumens'){
        window.alert ("Ao se concentrar você consegue impedir qualquer tipo de ataque ou invasão mental. No lugar dos seus pensamentos o invasor irá ver uma memória (real ou falsa) que você escolher.")
    }
    else if(cla.value == 'Especialista em Runas'){
        window.alert ("Você estudou runas o suficiente para entender qualquer tipo de conjunto rúnico sem precisar de um teste.")
    }
    else if(cla.value == 'Duelista'){
        window.alert ("Ao terminar uma batalha você recupera metade da MP que gastou durante o Confronto.")
    }
    }
function opi3(){
    if(cla.value == 'Animago'){
        window.alert ("Você pode se transformar no seu animal completamente, para isso você demora 2 turnos.")
    }
    else if(cla.value == 'Legilimens / Occlumens'){
        window.alert ("Você sempre sabe quando alguém está retendo alguma informação, ou mentindo. (lembre o dm quando quiser usar a habilidade pelo amor de deus o dm n tem como lembrar de tudo).")
    }
    else if(cla.value == 'Especialista em Runas'){
        window.alert ("Você sabe posicionar as runas para criar uma área (de até 5m²) protegida runicamente. Para criar essa área você demora 5 minutos e no final você escolhe uma das seguintes características: 1- Alarme: Você será informado se alguma criatura entrar na área. 2- Invísivel: Tudo dentro da área não será visível pelo lado de fora. 3- Barreira Mágica: Sua Barreira qualquer feitiço abaixo de Maldições imperdoáveis. 4- Barreira Física: Nada consegue entrar pelo lado de fora até a barreira ser desfeita. VOCÊ SÓ PODE TER 1 BARREIRA POR VEZ.")
    }
    else if(cla.value == 'Duelista'){
        window.alert ("Se algum alvo que você atacou esse turno lhe atacar de volta você tem vantagem em testes de Desviar. (ESSA HABILIDADE N FUNCIONA SE TU TA USANDO A CADEIA DE FEITIÇOS N PRECISA NEM PERGUNTAR SEU SAFADO)")
    }
}
function opi4(){
if(cla.value == 'Animago'){
    window.alert("1/Dia, Com uma ação, você consegue chamar qualquer criatura (mágica e não-mágica) num raio de 1Km para lhe ajudar (não inclui insetos)")
}
else if(cla.value == 'Legilimens / Occlumens'){
    window.alert("Com uma ação você pode tentar ler os pensamentos de outra criatura.")
}
else if(cla.value == 'Especialista em Runas'){
    window.alert("Você consegue reproduzir seu Item Rúnico e Barreira de Alarme e Invisibilidade em qualquer tipo de superfice, Incluindo seu própio corpo. Você pode fazer até 3 Usos de Runas no seu corpo, Os feitiços custam a MP normal deles e a barreira gasta 1 MP a cada 6 segundos ativa.")
}
else if(cla.value == 'Duelista'){
    window.alert("Enquanto estiver em combate com um único oponente você tem vantagem para acertar feitiços.")
}
}
function calcular(){
ace.value = Number(dex.value) + Number(luck.value)
res.value = Number(will.value) + Number(cha.value)
conc.value = Number(con.value) + Number(will.value)
maxmp.value = Number(will.value) + Number(luck.value) + Number(con.value)
maxhp.value = Number(con.value) + Number(str.value)
mamp.value = Number(will.value) + Number(luck.value) + Number(con.value)
mahp.value = Number(con.value) + Number(str.value)
realintt = Number(intt.value)
realintm = Number(intm.value)
if(realintt > realintm){
    maxsan.value = Number(will.value) + realintt
    masan.value = Number(will.value) + realintt
}
else{
    maxsan.value = Number(will.value) + realintm
    masan.value = Number(will.value) + realintm
}
}
function mag1(){
    window.alert("1-MP: Ilumina a Ponta da sua Varinha.")
}
function mag2(){
    window.alert("2-MP: Levita um objeto que seja menor do que 2m² e pese menos que 50kg. A magia se dissipa depois de 1 minuto.")
}
function mag3(){
    window.alert("1-MP: Destranca um tipo de mecanismo desde que não esteja magicamente trancado")
}
function mag4(){
    window.alert("Defende Você contra um feitiço. Protego pode ser usado no lugar da sua ação de Desviar, Quando usa-lo escolha um número de MP para determinar a força do escudo, se a MP escolhida for igual ou maior do que a magia inimiga você se protege.")
}
function mag5(){
    window.alert("2-MP: Desarma o Oponente. 4-MP: Desarma e derruba o Oponente")
}
function mag6(){
    window.alert("3-MP: Você tenta diminuir ou aumentar um objeto inanimado. Esse Objeto deve ser menor que 1m² e não pode passar de 2m² ou 5cm² quando a magia for usada.")
}
function mag7(){
    window.alert("2-MP: Desfaz uma transfiguração. Para isso faça um teste de Transfiguração. (Você gasta mana msm q a magia não funcione)")
}
function mag8(){
    window.alert("3-MP: Uma corda se enrola magicamente em volta de seu oponente se ele falhar no desvio. A magia não surte efeito em um ser maior que 1,5m²")
}
function mag9(){
    window.alert("3-MP: Tranca uma porta magicamente por até 10 minutos.")
}
function mag10(){
    window.alert("1-MP: Aumenta sua voz Magicamente por 10 minutos.")
}
function mag11(){
    window.alert("4-MP: Imobiliza uma criatura por até 1 hora.")
}
function mag12(){
    window.alert("2-MP: Desfaz a magia Petrificus Totatulus ou Estupefaça.")
}
function mag13(){
    window.alert("2-MP: Revela tinta ou algo de até 1m² que esteja invisível.")
}
function mag14(){
    window.alert("3-MP: Desfaz um encantamento que está em um lugar ou objeto. A magia não surte efeito em encantamentos aritmanticos(maldições) ou feitos com runas.")
}
function mag15(){
    window.alert("4-MP: Coloca uma sugestão na mente de uma criatura desde que não seja um comando nocivo e/ou fora da natureza do alvo.")
}
function mag16(){
    window.alert("2-MP: Faz um pequeno corte em algo ou alguém.")
}
function mag17(){
    window.alert("2-MP: Arremessa um objeto inanimado que não pese mais que 10kh na direção contrária da magia.")
}
function mag18(){
    window.alert("3-MP: Cria uma barreira contra qualquer tipo de inimigo. Demora 10 minutos para a barreira ficar pronta e ela dura 1 hora.")
}
function mag19(){
    window.alert("2-MP: Paralisa o alvo por 1 turno.")
}
function mag20(){
    window.alert("1-MP: Revela se existe presença humana num raio de 30m.")
}
function mag21(){
    window.alert("2-MP: Tenta destransfigurar uma criatura. Especialmente efetivo contra bicho-papão.")
}
function mag22(){
    window.alert("3-MP: Cria uma tala para um membro quebrado.")
}
function mag23(){
    window.alert("1-MP + 1MP para cada 2 Turnos se concentrando: Chama um objeto para sua direção desde que você saiba o lugar exato")
}
function mag24(){
    window.alert("1-MP: Levita alguém que está desmaiado.")
}
function mag25(){
    window.alert("1-MP: Envia um sinal mágico de SOS")
}
function mag26(){
    window.alert("2-MP: Invoca uma serpente que atacará um inimigo diretamente na sua frente.")
}
function mag27(){
    window.alert("2-MP: Cola a língua de alguém no céu da boca. Dura 1 minuto ou até o alvo conseguir resistir.")
}
function mag28(){
    window.alert("1-MP: Cria 300ml de água (hmmm agua geladinha hmmmm)")
}
function mag29(){
    window.alert("2-MP: Faz com que o seu alvo passe o próximo turno rindo descontroladamente.")
}
function mag30(){
    window.alert("2-MP: Faz com que o seu alvo passe o próximo turno dançando.")
}
function mag31(){
    window.alert("4-MP + 1 MP pra cada turno ativo: magia anti-dementador todo mundo conhece.")
}
function mag32(){
    window.alert("3-MP: Deixa um alvo desacordado.")
}
function mag33(){
    window.alert("2-MP: Cura pequenos machucados.")
}
function mag34(){
    window.alert("2-MP: Desaparece com 300ml de algum líquido não-mágico *para to sem sede >:(*")
}
function mag35(){
    window.alert("3-MP: Faz com que alguma criatura ou alguém se torne agressivo.")
}
function mag36(){
    window.alert("1-MP: Cria uma área de 2m² que bloqueia o som de sair dela.")
}
function mag37(){
    window.alert("3-MP: Interrompe a queda de uma criatura.")
}
function mag38(){
    window.alert("2-MP: Revela se existe presença humana numa área de 10m³ diretamente na sua frente.")
}
function mag39(){
    window.alert("1-MP: Pendura alguém pelo tornozelo.")
}
function mag40(){
    window.alert("3-MP: Cria uma área de proteção que impede quem está dentro de ser visto ou ouvido pelo lado de fora. Essa magia demora 15 minutos para ficar pronta.")
}
function mag41(){
    window.alert("5-MP: Cria uma explosão que causa 5 de dano, ou 2 de dano se o alvo conseguir desviar.")
}
function mag42(){
    window.alert("3-MP: Essa magia funciona como um lança chamas que saí da ponta da sua varinha. Cada turno que ela permanecer ativa gasta 1 MP.")
}
function mag43(){
    window.alert("3-MP: Você entra na mente de alguém e pode apagar ou modificar as suas memórias (você escolhe quais). Para cada memória apagada/modificada você deve fazer um teste de ciência mágica. Quanto mais memórias forem sendo afetadas maior será a dificuldade do teste.")
}
function mag44(){
    window.alert("7-MP e 1-SAN: se acertar matou.")
}
function mag45(){
    window.alert("5-MP e 1-SAN: controla uma pessoa completamente. A pessoa pode fazer 1 teste de resistência por semana, na primeira semana é quase impossível resistir porém a dificuldade vai diminuindo conforme as semanas passam.")
}
function mag46(){
    window.alert("6-MP e 1-SAN: feitiço de tortura.")
}
function mag47(){
    window.alert("3-MP: secret :) na real era os mosmordre sla como escreve. era o feitiço da marca do voldyshorts")
}
function mag48(){
    window.alert("4-MP: Cria cortes pelo corpo todo da vítima.")
}
function sanguepuro(){
document.querySelector("input#check22").checked = true
document.querySelector("input#check142").checked = true
document.querySelector("input#check21").checked = false
document.querySelector("input#check422").checked = false
}
function nascido(){
document.querySelector("input#check21").checked = true
document.querySelector("input#check422").checked = true
document.querySelector("input#check22").checked = false
document.querySelector("input#check142").checked = false
}