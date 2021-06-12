const areaDoCodigo = document.querySelector('.codigo-wrapper')
const linguagem = document.querySelector('.linguagem')
const botao = document.querySelector('#btnHighlight')

function mudaLinguagem() {
    const codigo = areaDoCodigo.querySelector('code')
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
    areaDoCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})

//mudança da cor de fundo do editor a partir do color picker

let colorPicker = document.getElementById("colorPicker");
let caixa = document.getElementById("caixaMudaDeCor");

caixa.style.background = colorPicker.value;

colorPicker.addEventListener("input", function (event) {
    caixa.style.background = event.target.value;
}, false);

//localStorage *Em desenvolvimento*

const botaoSalvar = document.querySelector('.botaoSalvar')
const tituloProjeto = document.querySelector('.tituloDoProjeto')
const descricaoProjeto = document.querySelector('.descricaoProjeto')


botaoSalvar.addEventListener('click', () => {
    if (typeof (Storage) !== "undefined") {
        console.log("Suporta o localStorage")
        const projeto = montaProjeto()
        salvarLocalStorage(projeto)
        console.log(projeto)
    } else {
        console.log("Não suporta o localStorage")
    }
})

function montaProjeto() {
    let projeto = {
        'id': atribuiId(),
        'detalhesDoProjeto': {
            'nomeDoProjeto': tituloProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'linguagem': linguagem.value,
            'codigo': areaDoCodigo.querySelector('code').innerText
        }
    }
    return projeto
}

function atribuiId() {
    return  localStorage.length        
    }

function salvarLocalStorage(objetoJson){
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}