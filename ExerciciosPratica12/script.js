
	var filme1info1 = "Tipo: Terror\nHistoria: Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.\n Ano: 2014"
	var filme1info2 = "Tipo: Terror\n Historia: Os famosos demonologistas Lorraine e Ed Warren viajam ao norte de Londres. Lá eles ajudam uma mãe solteira que cria quatro filhos sozinha em uma casa atormentada por espíritos malignos.\n Ano: 2014"
	var filme1info3 = "Tipo: Terror\n Historia: Quatro década depois de escapar do ataque de Michael Myers em uma noite de Halloween, Laurie Strode precisa confrontar o assassino mascarado mais uma vez após ele escapar de uma instituição. Mas, agora Laurie está preparada.\n Ano: 2014"
	var filme1info4 = "Tipo: Terror\n Historia: Jack Torrance se torna caseiro de inverno do isolado Hotel Overlook, nas montanhas do Colorado, na esperança de curar seu bloqueio de escritor. Ele se instala com a esposa Wendy e o filho Danny, que é atormentando por premonições. Jack não consegue escrever e as visões de Danny \n Ano: 2014"
	var filme1info5 = "Tipo: Terror\n Historia: Um ano depois de escapar da morte nas mãos de Michael Myers (Tyler Mane), Laurie Strode está no seu limite depois da revelação do Dr. Loomis (Malcolm McDowell) de que ela é irmã de Michael. Mal sabe ela que o assassino está de volta em Haddonfield e, com visões da mãe morta \n Ano: 2014"
	var filme1info6 = "Tipo: Terror\n Historia: Clyde compra uma casa nova e a filha mais nova, Em, convence-o a comprar também uma caixa antiga. Logo, Em se mostra obcecada com o artefato e age de forma cada vez mais estranha. Descobre-se, então, que ela está possuída por um espírito do mal.\n Ano: 2014"
	var filme1info7 = "Tipo: Terror\n Historia: Love Never Dies, também chamado de Phantom II: Love Never Dies, é um musical romântico com música e produção de Andrew Lloyd Webber, letras de Glenn Slater, letras adicionais de Charles Hart, libreto de Webber e Ben Elton, com material adicional de Frederick Forsyth e Slater. \n Ano: 2014"
	var filme1info8 = "Tipo: Terror\n Historia: DescriçãoUma família se muda para uma nova casa, localizada nos arredores de um antigo cemitério amaldiçoado, usado para enterrar animais de estimação, mas que já foi usado para sepultamento de indígenas. Algumas coisas estranhas começam a acontecer, transformando a vida cotidiana dos moradores em um pesadelo\n Ano: 2014"
	var filme1info9 = "Tipo: Terror\n Historia: The first two films were directed by James Wan, the third by Leigh Whannell, who also served as the screenwriter for all four films. Adam Robitel directed the fourth installment. FilmDistrict released the first and second films, while Focus Features and Universal Pictures handled the third and fourth, respectively.\n Ano: 2014"
	var filme1info10 = "Tipo: Terror\n Historia: kkkkkkkkkkkkkkkk\n Ano: 2014"

function mostrarInfo(x){


switch (x) {

		case "filme1":
		document.getElementById('resposta').innerHTML = filme1info1;
		break;

		case "filme2":
		document.getElementById('resposta').innerHTML = filme1info2;
		break;

		case "filme3":
		document.getElementById('resposta').innerHTML = filme1info3;
		break;	
		case "filme4":
		document.getElementById('resposta').innerHTML = filme1info4;
		break;

		case "filme5":
		document.getElementById('resposta').innerHTML = filme1info5;
		break;

		case "filme6":
		document.getElementById('resposta').innerHTML = filme1info6;
		break;	

		case "filme7":
		document.getElementById('resposta').innerHTML = filme1info7;
		break;

		case "filme8":
		document.getElementById('resposta').innerHTML = filme1info8;
		break;

		case "filme9":
		document.getElementById('resposta').innerHTML = filme1info9;
		break;

		case "filme10":
		document.getElementById('resposta').innerHTML = filme1info10;
		break;	


		default:
		document.getElementById('resposta').innerHTML = filme1info1;
	}


}

	function toggle(button){

			var conteudo = button.parentElement;
			detalhes = conteudo.children[1];

			if(detalhes.style.display == "none"){
				detalhes.style.display = "block";
			}else{
				detalhes.style.display = "none";
			}
		}