let  date = new Date().toLocaleString();  

function salvar() {
   
    let pergunta1 = document.getElementsByName("area")[0].value;
    let pergunta1_1;

    if (pergunta1 == "Area Urbana") {
        pergunta1_1 = document.getElementsByName("area1")[0].value;
    } else {
        pergunta1_1 = document.getElementsByName("area2")[0].value;
    }
      let  pergunta2  = document.getElementsByName("inlineRadioOptions_02")[0].value;
      let  pergunta3  = document.getElementsByName("inlineRadioOptions_03")[0].value;
      let  pergunta4  = document.getElementsByName("inlineRadioOptions_04")[0].value;
      let  pergunta5  = document.getElementsByName("inlineRadioOptions_05")[0].value;
      let  pergunta6  = document.getElementsByName("inlineRadioOptions_06")[0].value;
      let  pergunta7  = document.getElementsByName("inlineRadioOptions_07")[0].value;
      let  pergunta8  = document.getElementsByName("inlineRadioOptions_08")[0].value;
      let  pergunta9  = document.getElementsByName("inlineRadioOptions_09")[0].value;
      let  pergunta10 = document.getElementsByName("inlineRadioOptions_10")[0].value;
      let  pergunta11 = document.getElementsByName("inlineRadioOptions_11")[0].value;
      let  pergunta12 = document.getElementsByName("inlineRadioOptions_12")[0].value;
      let  pergunta13 = document.getElementsByName("inlineRadioOptions_13")[0].value;
      let  select14_0 = document.getElementsByName("inputSelect14_00")[0].value;
      let  select14_1 = document.getElementsByName("inputSelect14_01")[0].value;
      let  select14_2 = document.getElementsByName("inputSelect14_02")[0].value;
      let  pergunta15 = document.getElementsByName("inlineRadioOptions_15")[0].value;
      let  pergunta16 = document.getElementsByName("inlineRadioOptions_16")[0].value;
      let  pergunta17 = document.getElementsByName("inlineRadioOptions_17")[0].value;
      let  pergunta18 = document.getElementsByName("inlineRadioOptions_18")[0].value;
      let  pergunta19 = document.getElementsByName("inlineRadioOptions_19")[0].value;
      if (pergunta19 == "Sim")
           pergunta19 = document.getElementsByName("inlineRadioSim_input_19")[0].value;
      let pergunta20 = document.getElementsByName("inlineRadioOptions_20")[0].value;
      if (pergunta20 == "Outro")
           pergunta20 = document.getElementsByName("inlineRadioOptions_20_outro")[0].value;
      let  pergunta21 = document.getElementsByName("inlineRadioOptions_21")[0].value;
      let  pergunta22 = document.getElementsByName("inlineRadioOptions_22")[0].value;
      let  pergunta24 = document.getElementsByName("ckb")[0].value;
      let  pergunta25 = document.getElementsByName("text_25")[0].value;   
      let  pergunta26 = document.getElementsByName("text_26")[0].value ; 
      let  pergunta27 = document.getElementsByName("text_27")[0].value;
    
    // Verifica se ha valor nas variaveis
    if( typeof pergunta1 == 'undefined' ) {
        // => Code goes here
        pergunta1 = '';
    }
    if( typeof pergunta1_1 == 'undefined' ) {
        // => Code goes here
        pergunta1_1 = '';
    }
    if( typeof pergunta2 == 'undefined' ) {
        // => Code goes here
        pergunta2 = '';
    }
    if( typeof pergunta3 == 'undefined' ) {
        // => Code goes here
        pergunta3 = '';
    }
    if( typeof pergunta4 == 'undefined' ) {
        // => Code goes here
        pergunta4 = '';
    }
    if( typeof pergunta5 == 'undefined' ) {
        // => Code goes here
        pergunta5 = '';
    }
    if( typeof pergunta6 == 'undefined' ) {
        // => Code goes here
        pergunta6 = '';
    }
    if( typeof pergunta7 == 'undefined' ) {
        // => Code goes here
        pergunta7 = '';
    }
    if( typeof pergunta8 == 'undefined' ) {
        // => Code goes here
        pergunta8 = '';
    }

    if( typeof pergunta9 == 'undefined' ) {
        // => Code goes here
        pergunta9 = '';
    }
    if( typeof pergunta10 == 'undefined' ) {
        // => Code goes here
        pergunta10 = '';
    }
    if( typeof pergunta11 == 'undefined' ) {
        // => Code goes here
        pergunta11 = '';
    }
    if( typeof pergunta12 == 'undefined' ) {
        // => Code goes here
        pergunta12 = '';
    }
    if( typeof pergunta13 == 'undefined' ) {
        // => Code goes here
        pergunta13 = '';
    }
    if( typeof select14_0 == 'undefined' ) {
        // => Code goes here
        select14_0 = '';
    }
    if( typeof select14_1 == 'undefined' ) {
        // => Code goes here
        select14_1 = '';
    }
    if( typeof select14_2 == 'undefined' ) {
        // => Code goes here
        select14_2 = '';
    }
    if( typeof pergunta15 == 'undefined' ) {
        // => Code goes here
        pergunta15 = '';
    }
    if( typeof pergunta16 == 'undefined' ) {
        // => Code goes here
        pergunta16 = '';
    }
    if( typeof pergunta17 == 'undefined' ) {
        // => Code goes here
        pergunta17 = '';
    }
    if( typeof pergunta18 == 'undefined' ) {
        // => Code goes here
        pergunta18 = '';
    }
    if( typeof pergunta19 == 'undefined' ) {
        // => Code goes here
        pergunta19 = '';
    }
    if( typeof pergunta20 == 'undefined' ) {
        // => Code goes here
        pergunta20 = '';
    }
    if( typeof pergunta21 == 'undefined' ) {
        // => Code goes here
        pergunta21 = '';
    }
    if( typeof pergunta22 == 'undefined' ) {
        // => Code goes here
        pergunta22 = '';
    }
   
    if( typeof pergunta24 == 'undefined' ) {
        // => Code goes here
        pergunta24 = '';
    }
    if( typeof pergunta25 == 'undefined' ) {
        // => Code goes here
        pergunta25 = '';
    }
    if( typeof pergunta26== 'undefined' ) {
        // => Code goes here
        pergunta26= '';
    }
    if( typeof pergunta27 == 'undefined' ) {
        // => Code goes here
        pergunta27 = '';
    }
  
    let respostas;
    respostas = [[],
    [pergunta1,
        pergunta1_1,
        pergunta2,
         pergunta3,
         pergunta4,
         pergunta5,
         pergunta6,
         pergunta7,
         pergunta8,
         pergunta9,
         pergunta10,
         pergunta11,
         pergunta12,
         pergunta13,
         select14_0,
         select14_1,
         select14_2,
         pergunta15,
         pergunta16,
         pergunta17,
         pergunta18,
         pergunta19,
         pergunta20,
         pergunta21,
         pergunta22,
 
         pergunta24,
         pergunta25,
         pergunta26,
         pergunta27
    ]
    ];

    /*csv = respostas.map(function (d) {
        return JSON.stringify(Object[0].values(d));
    })
        .join('\n')
        .replace(/(^\[)|(\]$)/mg, '')*/

        setTimeout(function() {
       
        }, 1000);
    let texto, titulo, blob;
    titulo = "perguntas"
    texto = respostas 
    
    blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    // saveAs(blob, "dados/" + titulo + "_" + date + ".csv");
    localStorage.csv_respostas +=  respostas +"\r\n" ;
    console.log(localStorage.csv_respostas) 
    /*fs.writeFile('perguntas.csv', csv, { flag: 'a+' }, (err) => {

        if (err) throw err;
        console.log('O arquivo foi Salvo!');
       
    });
    */ 
    let Segmentos = [
        'Academia',
        'Agencia de turismo',
        'Agência/serviço bancário',
        'Artigos para festa ',
        'Auto escola',
        'Açougue Estúdio ',
        'Barbearia',
        'Cantor / dupla /Banda ',
        'Clinica estética',
        'Clinica medica',
        'Colégio particular',
        'Comercio mais tempo de trabalho',
        'Decoração de festa',
        'Distribuidor água e gás ',
        'Doceria / confeitaria',
        'Emissora de Rádio ',
        'Equipamento de Informática ',
        'Escritório de advocacia',
        'Escritório de contabilidade',
        'Farmácia/Drogaria',
        'Fisioterapeuta ',
        'Fotográfico',
        'Hamburgueria/Lanchonete ',
        'Hotel/ Pousada ',
        'Laboratório de análises clínicas',
        'Loja de Calçado',
        'Loja de cosméticos',
        'Loja de móveis e eletrodomésticos',
        'Loja de tecidos/cama mesa e banho/ Utilidades para o lar',
        'Loja Moda Íntima',
        'Madeireira',
        'Manutenção instalação refrigeração',
        'Mármore /granito',
        'Mercadinho e mercearia',
        'Nutricionista',
        'Oficina mecânica e Peças',
        'Oficina mecânica e Peças automóvel',
        'Ótica',
        'Panificadora (padaria)',
        'Papelaria',
        'Personal Traineer',
        'Petshop',
        'Pizzaria',
        'Posto de combustível',
        'Produtos agropecuários',
        'Produtos esportivos',
        'Professor (a)',
        'Provedor de internet',
        'Psicólogo (a)',
        'Rações',
        'Restaurante/Churrascaria',
        'Salão de beleza feminino',
        'Site de notícias',
        'Supermercado',
        'Veterinário',
        'Vidraçaria'
    ];
    let  nome0  = document.getElementsByName("myInput0")[0].value;           
    let  nome1  = document.getElementsByName("myInput1")[0].value;           
    let  nome2  = document.getElementsByName("myInput2")[0].value;           
    let  nome3  = document.getElementsByName("myInput3")[0].value;           
    let  nome4  = document.getElementsByName("myInput4")[0].value;           
    let  nome5  = document.getElementsByName("myInput5")[0].value;           
    let  nome6  = document.getElementsByName("myInput6")[0].value;           
    let  nome7  = document.getElementsByName("myInput7")[0].value;           
    let  nome8  = document.getElementsByName("myInput8")[0].value;           
    let  nome9  = document.getElementsByName("myInput9")[0].value;           
    let  nome10 = document.getElementsByName("myInput10")[0].value;           
    let  nome11 = document.getElementsByName("myInput11")[0].value;           
    let  nome12 = document.getElementsByName("myInput12")[0].value;           
    let  nome13 = document.getElementsByName("myInput13")[0].value;           
    let  nome14 = document.getElementsByName("myInput14")[0].value;           
    let  nome15 = document.getElementsByName("myInput15")[0].value;           
    let  nome16 = document.getElementsByName("myInput16")[0].value;           
    let  nome17 = document.getElementsByName("myInput17")[0].value;           
    let  nome18 = document.getElementsByName("myInput18")[0].value;           
    let  nome19 = document.getElementsByName("myInput19")[0].value;           
    let  nome20 = document.getElementsByName("myInput20")[0].value;           
    let  nome21 = document.getElementsByName("myInput21")[0].value;           
    let  nome22 = document.getElementsByName("myInput22")[0].value;           
    let  nome23 = document.getElementsByName("myInput23")[0].value;           
    let  nome24 = document.getElementsByName("myInput24")[0].value;           
    let  nome25 = document.getElementsByName("myInput25")[0].value;           
    let  nome26 = document.getElementsByName("myInput26")[0].value;           
    let  nome27 = document.getElementsByName("myInput27")[0].value;           
    let  nome28 = document.getElementsByName("myInput28")[0].value;           
    let  nome29 = document.getElementsByName("myInput29")[0].value;           
    let  nome30 = document.getElementsByName("myInput30")[0].value;           
    let  nome31 = document.getElementsByName("myInput31")[0].value;
    let  nome32 = document.getElementsByName("myInput32")[0].value;
    let  nome33 = document.getElementsByName("myInput33")[0].value;
    let  nome34 = document.getElementsByName("myInput34")[0].value;
    let  nome35 = document.getElementsByName("myInput35")[0].value;
    let  nome36 = document.getElementsByName("myInput36")[0].value;
    let  nome37 = document.getElementsByName("myInput37")[0].value;
    let  nome38 = document.getElementsByName("myInput38")[0].value;
    let  nome39 = document.getElementsByName("myInput39")[0].value;
    let  nome40 = document.getElementsByName("myInput40")[0].value;
    let  nome41 = document.getElementsByName("myInput41")[0].value;
    let  nome42 = document.getElementsByName("myInput42")[0].value;
    let  nome43 = document.getElementsByName("myInput43")[0].value;
    let  nome44 = document.getElementsByName("myInput44")[0].value;
    let  nome45 = document.getElementsByName("myInput45")[0].value;
    let  nome46 = document.getElementsByName("myInput46")[0].value;
    let  nome47 = document.getElementsByName("myInput47")[0].value;
    let  nome48 = document.getElementsByName("myInput48")[0].value;
    let  nome49 = document.getElementsByName("myInput49")[0].value;
    let  nome50 = document.getElementsByName("myInput50")[0].value;
    let  nome51 = document.getElementsByName("myInput51")[0].value;
    let  nome52 = document.getElementsByName("myInput52")[0].value;
    let  nome53 = document.getElementsByName("myInput53")[0].value;
    let  nome54 = document.getElementsByName("myInput54")[0].value;
    let  nome55 = document.getElementsByName("myInput55")[0].value;
    // verificando os dados dos nomes
    if( typeof nome0 == 'undefined' ) {
        // => Code goes here
        nome0 = '';
    }
    if( typeof nome1 == 'undefined' ) {
        // => Code goes here
        nome1 = '';
    }
    if( typeof nome2 == 'undefined' ) {
        // => Code goes here
        nome2 = '';
    }
    if( typeof nome3 == 'undefined' ) {
        // => Code goes here
        nome3 = '';
    }
    if( typeof nome4 == 'undefined' ) {
        // => Code goes here
        nome4 = '';
    }
    if( typeof nome5 == 'undefined' ) {
        // => Code goes here
        nome5 = '';
    }
    if( typeof nome6 == 'undefined' ) {
        // => Code goes here
        nome6 = '';
    }
    if( typeof nome7 == 'undefined' ) {
        // => Code goes here
        nome7 = '';
    }
    if( typeof nome8 == 'undefined' ) {
        // => Code goes here
        nome8 = '';
    }

    if( typeof nome9 == 'undefined' ) {
        // => Code goes here
        nome9 = '';
    }
    if( typeof nome10 == 'undefined' ) {
        // => Code goes here
        nome10 = '';
    }
    if( typeof nome11 == 'undefined' ) {
        // => Code goes here
        nome11 = '';
    }
    if( typeof nome12 == 'undefined' ) {
        // => Code goes here
        nome12 = '';
    }
    if( typeof nome13 == 'undefined' ) {
        // => Code goes here
        nome13 = '';
    }
    if( typeof nome14 == 'undefined' ) {
        // => Code goes here
        nome14 = '';
    }
    if( typeof nome15 == 'undefined' ) {
        // => Code goes here
        nome15 = '';
    }
    if( typeof nome16 == 'undefined' ) {
        // => Code goes here
        nome16 = '';
    }
    if( typeof nome17 == 'undefined' ) {
        // => Code goes here
        nome17 = '';
    }
    if( typeof nome18 == 'undefined' ) {
        // => Code goes here
        nome18 = '';
    }

    if( typeof nome19 == 'undefined' ) {
        // => Code goes here
        nome19 = '';
    }
    if( typeof nome20 == 'undefined' ) {
        // => Code goes here
        nome20 = '';
    }
    if( typeof nome21 == 'undefined' ) {
        // => Code goes here
        nome21 = '';
    }
    if( typeof nome22 == 'undefined' ) {
        // => Code goes here
        nome22 = '';
    }
    if( typeof nome23 == 'undefined' ) {
        // => Code goes here
        nome23 = '';
    }
    if( typeof nome24 == 'undefined' ) {
        // => Code goes here
        nome24 = '';
    }
    if( typeof nome25 == 'undefined' ) {
        // => Code goes here
        nome25 = '';
    }
    if( typeof nome26 == 'undefined' ) {
        // => Code goes here
        nome26 = '';
    }
    if( typeof nome27 == 'undefined' ) {
        // => Code goes here
        nome27 = '';
    }
    if( typeof nome28 == 'undefined' ) {
        // => Code goes here
        nome28 = '';
    }
    if( typeof nome29 == 'undefined' ) {
        // => Code goes here
        nome29 = '';
    }
    if( typeof nome30 == 'undefined' ) {
        // => Code goes here
        nome30 = '';
    }
    if( typeof nome31 == 'undefined' ) {
        // => Code goes here
        nome31 = '';
    }
    if( typeof nome32 == 'undefined' ) {
        // => Code goes here
        nome32 = '';
    }
    if( typeof nome33 == 'undefined' ) {
        // => Code goes here
        nome33 = '';
    }
    if( typeof nome34 == 'undefined' ) {
        // => Code goes here
        nome34 = '';
    }
    if( typeof nome35 == 'undefined' ) {
        // => Code goes here
        nome35 = '';
    }
    if( typeof nome36 == 'undefined' ) {
        // => Code goes here
        nome36 = '';
    }
    if( typeof nome37 == 'undefined' ) {
        // => Code goes here
        nome37 = '';
    }
    if( typeof nome38 == 'undefined' ) {
        // => Code goes here
        nome38 = '';
    }

    if( typeof nome39 == 'undefined' ) {
        // => Code goes here
        nome39 = '';
    }
    if( typeof nome40 == 'undefined' ) {
        // => Code goes here
        nome40 = '';
    }
    if( typeof nome41 == 'undefined' ) {
        // => Code goes here
        nome41 = '';
    }
    if( typeof nome42 == 'undefined' ) {
        // => Code goes here
        nome42 = '';
    }
    if( typeof nome43 == 'undefined' ) {
        // => Code goes here
        nome43 = '';
    }
    if( typeof nome44 == 'undefined' ) {
        // => Code goes here
        nome44 = '';
    }
    if( typeof nome45 == 'undefined' ) {
        // => Code goes here
        nome45 = '';
    }
    if( typeof nome46 == 'undefined' ) {
        // => Code goes here
        nome46 = '';
    }
    if( typeof nome47 == 'undefined' ) {
        // => Code goes here
        nome47 = '';
    }
    if( typeof nome48 == 'undefined' ) {
        // => Code goes here
        nome48 = '';
    }

    if( typeof nome49 == 'undefined' ) {
        // => Code goes here
        nome49 = '';
    }
    if( typeof nome50 == 'undefined' ) {
        // => Code goes here
        nome50 = '';
    }
    if( typeof nome51 == 'undefined' ) {
        // => Code goes here
        nome51 = '';
    }
    if( typeof nome52 == 'undefined' ) {
        // => Code goes here
        nome52 = '';
    }
    if( typeof nome53 == 'undefined' ) {
        // => Code goes here
        nome53 = '';
    }
    if( typeof nome54 == 'undefined' ) {
        // => Code goes here
        nome54 = '';
    }
    if( typeof nome55 == 'undefined' ) {
        // => Code goes here
        nome55 = '';
    }


    let  Acessibilidade_0  = document.getElementsByName("rating_0_2")[0].value;           
    let  Acessibilidade_1  = document.getElementsByName("rating_1_2")[0].value;           
    let  Acessibilidade_2  = document.getElementsByName("rating_2_2")[0].value;           
    let  Acessibilidade_3  = document.getElementsByName("rating_3_2")[0].value;           
    let  Acessibilidade_4  = document.getElementsByName("rating_4_2")[0].value;           
    let  Acessibilidade_5  = document.getElementsByName("rating_5_2")[0].value;           
    let  Acessibilidade_6  = document.getElementsByName("rating_6_2")[0].value;           
    let  Acessibilidade_7  = document.getElementsByName("rating_7_2")[0].value;           
    let  Acessibilidade_8  = document.getElementsByName("rating_8_2")[0].value;           
    let  Acessibilidade_9  = document.getElementsByName("rating_9_2")[0].value;           
    let  Acessibilidade_10 = document.getElementsByName("rating_10_2")[0].value;           
    let  Acessibilidade_11 = document.getElementsByName("rating_11_2")[0].value;           
    let  Acessibilidade_12 = document.getElementsByName("rating_12_2")[0].value;           
    let  Acessibilidade_13 = document.getElementsByName("rating_13_2")[0].value;           
    let  Acessibilidade_14 = document.getElementsByName("rating_14_2")[0].value;           
    let  Acessibilidade_15 = document.getElementsByName("rating_15_2")[0].value;           
    let  Acessibilidade_16 = document.getElementsByName("rating_16_2")[0].value;           
    let  Acessibilidade_17 = document.getElementsByName("rating_17_2")[0].value;           
    let  Acessibilidade_18 = document.getElementsByName("rating_18_2")[0].value;           
    let  Acessibilidade_19 = document.getElementsByName("rating_19_2")[0].value;           
    let  Acessibilidade_20 = document.getElementsByName("rating_20_2")[0].value;           
    let  Acessibilidade_21 = document.getElementsByName("rating_21_2")[0].value;           
    let  Acessibilidade_22 = document.getElementsByName("rating_22_2")[0].value;           
    let  Acessibilidade_23 = document.getElementsByName("rating_23_2")[0].value;           
    let  Acessibilidade_24 = document.getElementsByName("rating_24_2")[0].value;           
    let  Acessibilidade_25 = document.getElementsByName("rating_25_2")[0].value;           
    let  Acessibilidade_26 = document.getElementsByName("rating_26_2")[0].value;           
    let  Acessibilidade_27 = document.getElementsByName("rating_27_2")[0].value;           
    let  Acessibilidade_28 = document.getElementsByName("rating_28_2")[0].value;           
    let  Acessibilidade_29 = document.getElementsByName("rating_29_2")[0].value;           
    let  Acessibilidade_30 = document.getElementsByName("rating_30_2")[0].value;           
    let  Acessibilidade_31 = document.getElementsByName("rating_31_2")[0].value;
    let  Acessibilidade_32 = document.getElementsByName("rating_32_2")[0].value;
    let  Acessibilidade_33 = document.getElementsByName("rating_33_2")[0].value;
    let  Acessibilidade_34 = document.getElementsByName("rating_34_2")[0].value;
    let  Acessibilidade_35 = document.getElementsByName("rating_35_2")[0].value;
    let  Acessibilidade_36 = document.getElementsByName("rating_36_2")[0].value;
    let  Acessibilidade_37 = document.getElementsByName("rating_37_2")[0].value;
    let  Acessibilidade_38 = document.getElementsByName("rating_38_2")[0].value;
    let  Acessibilidade_39 = document.getElementsByName("rating_39_2")[0].value;
    let  Acessibilidade_40 = document.getElementsByName("rating_40_2")[0].value;
    let  Acessibilidade_41 = document.getElementsByName("rating_41_2")[0].value;
    let  Acessibilidade_42 = document.getElementsByName("rating_42_2")[0].value;
    let  Acessibilidade_43 = document.getElementsByName("rating_43_2")[0].value;
    let  Acessibilidade_44 = document.getElementsByName("rating_44_2")[0].value;
    let  Acessibilidade_45 = document.getElementsByName("rating_45_2")[0].value;
    let  Acessibilidade_46 = document.getElementsByName("rating_46_2")[0].value;
    let  Acessibilidade_47 = document.getElementsByName("rating_47_2")[0].value;
    let  Acessibilidade_48 = document.getElementsByName("rating_48_2")[0].value;
    let  Acessibilidade_49 = document.getElementsByName("rating_49_2")[0].value;
    let  Acessibilidade_50 = document.getElementsByName("rating_50_2")[0].value;
    let  Acessibilidade_51 = document.getElementsByName("rating_51_2")[0].value;
    let  Acessibilidade_52 = document.getElementsByName("rating_52_2")[0].value;
    let  Acessibilidade_53 = document.getElementsByName("rating_53_2")[0].value;
    let  Acessibilidade_54 = document.getElementsByName("rating_54_2")[0].value;
    let  Acessibilidade_55 = document.getElementsByName("rating_55_2")[0].value;
    
    // verificando os dados dos Acessibilidade
    if( typeof Acessibilidade_0 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_0 = '';
    }
    if( typeof Acessibilidade_1 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_1 = '';
    }
    if( typeof Acessibilidade_2 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_2 = '';
    }
    if( typeof Acessibilidade_3 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_3 = '';
    }
    if( typeof Acessibilidade_4 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_4 = '';
    }
    if( typeof Acessibilidade_5 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_5 = '';
    }
    if( typeof Acessibilidade_6 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_6 = '';
    }
    if( typeof Acessibilidade_7 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_7 = '';
    }
    if( typeof Acessibilidade_8 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_8 = '';
    }

    if( typeof Acessibilidade_9 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_9 = '';
    }
    if( typeof Acessibilidade_10 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_10 = '';
    }
    if( typeof Acessibilidade_11 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_11 = '';
    }
    if( typeof Acessibilidade_12 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_12 = '';
    }
    if( typeof Acessibilidade_13 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_13 = '';
    }
    if( typeof Acessibilidade_14 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_14 = '';
    }
    if( typeof Acessibilidade_15 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_15 = '';
    }
    if( typeof Acessibilidade_16 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_16 = '';
    }
    if( typeof Acessibilidade_17 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_17 = '';
    }
    if( typeof Acessibilidade_18 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_18 = '';
    }

    if( typeof Acessibilidade_19 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_19 = '';
    }
    if( typeof Acessibilidade_20 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_20 = '';
    }
    if( typeof Acessibilidade_21 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_21 = '';
    }
    if( typeof Acessibilidade_22 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_22 = '';
    }
    if( typeof Acessibilidade_23 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_23 = '';
    }
    if( typeof Acessibilidade_24 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_24 = '';
    }
    if( typeof Acessibilidade_25 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_25 = '';
    }
    if( typeof Acessibilidade_26 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_26 = '';
    }
    if( typeof Acessibilidade_27 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_27 = '';
    }
    if( typeof Acessibilidade_28 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_28 = '';
    }

    if( typeof Acessibilidade_29 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_29 = '';
    }
    if( typeof Acessibilidade_30 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_30 = '';
    }
    if( typeof Acessibilidade_31 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_31 = '';
    }
    if( typeof Acessibilidade_32 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_32 = '';
    }
    if( typeof Acessibilidade_33 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_33 = '';
    }
    if( typeof Acessibilidade_34 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_34 = '';
    }
    if( typeof Acessibilidade_35 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_35 = '';
    }
    if( typeof Acessibilidade_36 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_36 = '';
    }
    if( typeof Acessibilidade_37 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_37 = '';
    }
    if( typeof Acessibilidade_38 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_38 = '';
    }

    if( typeof Acessibilidade_39 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_39 = '';
    }
    if( typeof Acessibilidade_40 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_40 = '';
    }
    if( typeof Acessibilidade_41 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_41 = '';
    }
    if( typeof Acessibilidade_42 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_42 = '';
    }
    if( typeof Acessibilidade_43 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_43 = '';
    }
    if( typeof Acessibilidade_44 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_44 = '';
    }
    if( typeof Acessibilidade_45 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_45 = '';
    }
    if( typeof Acessibilidade_46 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_46 = '';
    }
    if( typeof Acessibilidade_47 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_47 = '';
    }
    if( typeof Acessibilidade_48 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_48 = '';
    }

    if( typeof Acessibilidade_49 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_49 = '';
    }
    if( typeof Acessibilidade_50 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_50 = '';
    }
    if( typeof Acessibilidade_51 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_51 = '';
    }
    if( typeof Acessibilidade_52 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_52 = '';
    }
    if( typeof Acessibilidade_53 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_53 = '';
    }
    if( typeof Acessibilidade_54 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_54 = '';
    }
    if( typeof Acessibilidade_55 == 'undefined' ) {
        // => Code goes here
        Acessibilidade_55 = '';
    }



    let  Atendimento_0  = document.getElementsByName("rating_0_3")[0].value;           
    let  Atendimento_1  = document.getElementsByName("rating_1_3")[0].value;           
    let  Atendimento_2  = document.getElementsByName("rating_2_3")[0].value;           
    let  Atendimento_3  = document.getElementsByName("rating_3_3")[0].value;           
    let  Atendimento_4  = document.getElementsByName("rating_4_3")[0].value;           
    let  Atendimento_5  = document.getElementsByName("rating_5_3")[0].value;           
    let  Atendimento_6  = document.getElementsByName("rating_6_3")[0].value;           
    let  Atendimento_7  = document.getElementsByName("rating_7_3")[0].value;           
    let  Atendimento_8  = document.getElementsByName("rating_8_3")[0].value;           
    let  Atendimento_9  = document.getElementsByName("rating_9_3")[0].value;           
    let  Atendimento_10 = document.getElementsByName("rating_10_3")[0].value;           
    let  Atendimento_11 = document.getElementsByName("rating_11_3")[0].value;           
    let  Atendimento_12 = document.getElementsByName("rating_12_3")[0].value;           
    let  Atendimento_13 = document.getElementsByName("rating_13_3")[0].value;           
    let  Atendimento_14 = document.getElementsByName("rating_14_3")[0].value;           
    let  Atendimento_15 = document.getElementsByName("rating_15_3")[0].value;           
    let  Atendimento_16 = document.getElementsByName("rating_16_3")[0].value;           
    let  Atendimento_17 = document.getElementsByName("rating_17_3")[0].value;           
    let  Atendimento_18 = document.getElementsByName("rating_18_3")[0].value;           
    let  Atendimento_19 = document.getElementsByName("rating_19_3")[0].value;           
    let  Atendimento_20 = document.getElementsByName("rating_20_3")[0].value;           
    let  Atendimento_21 = document.getElementsByName("rating_21_3")[0].value;           
    let  Atendimento_22 = document.getElementsByName("rating_22_3")[0].value;           
    let  Atendimento_23 = document.getElementsByName("rating_23_3")[0].value;           
    let  Atendimento_24 = document.getElementsByName("rating_24_3")[0].value;           
    let  Atendimento_25 = document.getElementsByName("rating_25_3")[0].value;           
    let  Atendimento_26 = document.getElementsByName("rating_26_3")[0].value;           
    let  Atendimento_27 = document.getElementsByName("rating_27_3")[0].value;           
    let  Atendimento_28 = document.getElementsByName("rating_28_3")[0].value;           
    let  Atendimento_29 = document.getElementsByName("rating_29_3")[0].value;           
    let  Atendimento_30 = document.getElementsByName("rating_30_3")[0].value;           
    let  Atendimento_31 = document.getElementsByName("rating_31_3")[0].value;
    let  Atendimento_32 = document.getElementsByName("rating_32_3")[0].value;
    let  Atendimento_33 = document.getElementsByName("rating_33_3")[0].value;
    let  Atendimento_34 = document.getElementsByName("rating_34_3")[0].value;
    let  Atendimento_35 = document.getElementsByName("rating_35_3")[0].value;
    let  Atendimento_36 = document.getElementsByName("rating_36_3")[0].value;
    let  Atendimento_37 = document.getElementsByName("rating_37_3")[0].value;
    let  Atendimento_38 = document.getElementsByName("rating_38_3")[0].value;
    let  Atendimento_39 = document.getElementsByName("rating_39_3")[0].value;
    let  Atendimento_40 = document.getElementsByName("rating_40_3")[0].value;
    let  Atendimento_41 = document.getElementsByName("rating_41_3")[0].value;
    let  Atendimento_42 = document.getElementsByName("rating_42_3")[0].value;
    let  Atendimento_43 = document.getElementsByName("rating_43_3")[0].value;
    let  Atendimento_44 = document.getElementsByName("rating_44_3")[0].value;
    let  Atendimento_45 = document.getElementsByName("rating_45_3")[0].value;
    let  Atendimento_46 = document.getElementsByName("rating_46_3")[0].value;
    let  Atendimento_47 = document.getElementsByName("rating_47_3")[0].value;
    let  Atendimento_48 = document.getElementsByName("rating_48_3")[0].value;
    let  Atendimento_49 = document.getElementsByName("rating_49_3")[0].value;
    let  Atendimento_50 = document.getElementsByName("rating_50_3")[0].value;
    let  Atendimento_51 = document.getElementsByName("rating_51_3")[0].value;
    let  Atendimento_52 = document.getElementsByName("rating_52_3")[0].value;
    let  Atendimento_53 = document.getElementsByName("rating_53_3")[0].value;
    let  Atendimento_54 = document.getElementsByName("rating_54_3")[0].value;
    let  Atendimento_55 = document.getElementsByName("rating_55_3")[0].value;

    // verificando os dados dos Atendimento
    if( typeof Atendimento_0 == 'undefined' ) {
        // => Code goes here
        Atendimento_0 = '';
    }
    if( typeof Atendimento_1 == 'undefined' ) {
        // => Code goes here
        Atendimento_1 = '';
    }
    if( typeof Atendimento_2 == 'undefined' ) {
        // => Code goes here
        Atendimento_2 = '';
    }
    if( typeof Atendimento_3 == 'undefined' ) {
        // => Code goes here
        Atendimento_3 = '';
    }
    if( typeof Atendimento_4 == 'undefined' ) {
        // => Code goes here
        Atendimento_4 = '';
    }
    if( typeof Atendimento_5 == 'undefined' ) {
        // => Code goes here
        Atendimento_5 = '';
    }
    if( typeof Atendimento_6 == 'undefined' ) {
        // => Code goes here
        Atendimento_6 = '';
    }
    if( typeof Atendimento_7 == 'undefined' ) {
        // => Code goes here
        Atendimento_7 = '';
    }
    if( typeof Atendimento_8 == 'undefined' ) {
        // => Code goes here
        Atendimento_8 = '';
    }
    if( typeof Atendimento_9 == 'undefined' ) {
        // => Code goes here
        Atendimento_9 = '';
    }
    if( typeof Atendimento_10 == 'undefined' ) {
        // => Code goes here
        Atendimento_10 = '';
    }
    if( typeof Atendimento_11 == 'undefined' ) {
        // => Code goes here
        Atendimento_11 = '';
    }
    if( typeof Atendimento_12 == 'undefined' ) {
        // => Code goes here
        Atendimento_12 = '';
    }
    if( typeof Atendimento_13 == 'undefined' ) {
        // => Code goes here
        Atendimento_13 = '';
    }
    if( typeof Atendimento_14 == 'undefined' ) {
        // => Code goes here
        Atendimento_14 = '';
    }
    if( typeof Atendimento_15 == 'undefined' ) {
        // => Code goes here
        Atendimento_15 = '';
    }
    if( typeof Atendimento_16 == 'undefined' ) {
        // => Code goes here
        Atendimento_16 = '';
    }
    if( typeof Atendimento_17 == 'undefined' ) {
        // => Code goes here
        Atendimento_17 = '';
    }
    if( typeof Atendimento_18 == 'undefined' ) {
        // => Code goes here
        Atendimento_18 = '';
    }
    if( typeof Atendimento_19 == 'undefined' ) {
        // => Code goes here
        Atendimento_19 = '';
    }
    if( typeof Atendimento_20 == 'undefined' ) {
        // => Code goes here
        Atendimento_20 = '';
    }
    if( typeof Atendimento_21 == 'undefined' ) {
        // => Code goes here
        Atendimento_21 = '';
    }
    if( typeof Atendimento_22 == 'undefined' ) {
        // => Code goes here
        Atendimento_22 = '';
    }
    if( typeof Atendimento_23 == 'undefined' ) {
        // => Code goes here
        Atendimento_23 = '';
    }
    if( typeof Atendimento_24 == 'undefined' ) {
        // => Code goes here
        Atendimento_24 = '';
    }
    if( typeof Atendimento_25 == 'undefined' ) {
        // => Code goes here
        Atendimento_25 = '';
    }
    if( typeof Atendimento_26 == 'undefined' ) {
        // => Code goes here
        Atendimento_26 = '';
    }
    if( typeof Atendimento_27 == 'undefined' ) {
        // => Code goes here
        Atendimento_27 = '';
    }
    if( typeof Atendimento_28 == 'undefined' ) {
        // => Code goes here
        Atendimento_28 = '';
    }
    if( typeof Atendimento_29 == 'undefined' ) {
        // => Code goes here
        Atendimento_29 = '';
    }
    if( typeof Atendimento_30 == 'undefined' ) {
        // => Code goes here
        Atendimento_30 = '';
    }
    if( typeof Atendimento_31 == 'undefined' ) {
        // => Code goes here
        Atendimento_31 = '';
    }
    if( typeof Atendimento_32 == 'undefined' ) {
        // => Code goes here
        Atendimento_32 = '';
    }
    if( typeof Atendimento_33 == 'undefined' ) {
        // => Code goes here
        Atendimento_33 = '';
    }
    if( typeof Atendimento_34 == 'undefined' ) {
        // => Code goes here
        Atendimento_34 = '';
    }
    if( typeof Atendimento_35 == 'undefined' ) {
        // => Code goes here
        Atendimento_35 = '';
    }
    if( typeof Atendimento_36 == 'undefined' ) {
        // => Code goes here
        Atendimento_36 = '';
    }
    if( typeof Atendimento_37 == 'undefined' ) {
        // => Code goes here
        Atendimento_37 = '';
    }
    if( typeof Atendimento_38 == 'undefined' ) {
        // => Code goes here
        Atendimento_38 = '';
    }
    if( typeof Atendimento_39 == 'undefined' ) {
        // => Code goes here
        Atendimento_39 = '';
    }
    if( typeof Atendimento_40 == 'undefined' ) {
        // => Code goes here
        Atendimento_40 = '';
    }
    if( typeof Atendimento_41 == 'undefined' ) {
        // => Code goes here
        Atendimento_41 = '';
    }
    if( typeof Atendimento_42 == 'undefined' ) {
        // => Code goes here
        Atendimento_42 = '';
    }
    if( typeof Atendimento_43 == 'undefined' ) {
        // => Code goes here
        Atendimento_43 = '';
    }
    if( typeof Atendimento_44 == 'undefined' ) {
        // => Code goes here
        Atendimento_44 = '';
    }
    if( typeof Atendimento_45 == 'undefined' ) {
        // => Code goes here
        Atendimento_45 = '';
    }
    if( typeof Atendimento_46 == 'undefined' ) {
        // => Code goes here
        Atendimento_46 = '';
    }
    if( typeof Atendimento_47 == 'undefined' ) {
        // => Code goes here
        Atendimento_47 = '';
    }
    if( typeof Atendimento_48 == 'undefined' ) {
        // => Code goes here
        Atendimento_48 = '';
    }
    if( typeof Atendimento_49 == 'undefined' ) {
        // => Code goes here
        Atendimento_49 = '';
    }
    if( typeof Atendimento_50 == 'undefined' ) {
        // => Code goes here
        Atendimento_50 = '';
    }
    if( typeof Atendimento_51 == 'undefined' ) {
        // => Code goes here
        Atendimento_51 = '';
    }
    if( typeof Atendimento_52 == 'undefined' ) {
        // => Code goes here
        Atendimento_52 = '';
    }
    if( typeof Atendimento_53 == 'undefined' ) {
        // => Code goes here
        Atendimento_53 = '';
    }
    if( typeof Atendimento_54 == 'undefined' ) {
        // => Code goes here
        Atendimento_54 = '';
    }
    if( typeof Atendimento_55 == 'undefined' ) {
        // => Code goes here
        Atendimento_55 = '';
    }

    let  pagamento_0  = document.getElementsByName("rating_0_4")[0].value;           
    let  pagamento_1  = document.getElementsByName("rating_1_4")[0].value;           
    let  pagamento_2  = document.getElementsByName("rating_2_4")[0].value;           
    let  pagamento_3  = document.getElementsByName("rating_3_4")[0].value;           
    let  pagamento_4  = document.getElementsByName("rating_4_4")[0].value;           
    let  pagamento_5  = document.getElementsByName("rating_5_4")[0].value;           
    let  pagamento_6  = document.getElementsByName("rating_6_4")[0].value;           
    let  pagamento_7  = document.getElementsByName("rating_7_4")[0].value;           
    let  pagamento_8  = document.getElementsByName("rating_8_4")[0].value;           
    let  pagamento_9  = document.getElementsByName("rating_9_4")[0].value;           
    let  pagamento_10 = document.getElementsByName("rating_10_4")[0].value;           
    let  pagamento_11 = document.getElementsByName("rating_11_4")[0].value;           
    let  pagamento_12 = document.getElementsByName("rating_12_4")[0].value;           
    let  pagamento_13 = document.getElementsByName("rating_13_4")[0].value;           
    let  pagamento_14 = document.getElementsByName("rating_14_4")[0].value;           
    let  pagamento_15 = document.getElementsByName("rating_15_4")[0].value;           
    let  pagamento_16 = document.getElementsByName("rating_16_4")[0].value;           
    let  pagamento_17 = document.getElementsByName("rating_17_4")[0].value;           
    let  pagamento_18 = document.getElementsByName("rating_18_4")[0].value;           
    let  pagamento_19 = document.getElementsByName("rating_19_4")[0].value;           
    let  pagamento_20 = document.getElementsByName("rating_20_4")[0].value;           
    let  pagamento_21 = document.getElementsByName("rating_21_4")[0].value;           
    let  pagamento_22 = document.getElementsByName("rating_22_4")[0].value;           
    let  pagamento_23 = document.getElementsByName("rating_23_4")[0].value;           
    let  pagamento_24 = document.getElementsByName("rating_24_4")[0].value;           
    let  pagamento_25 = document.getElementsByName("rating_25_4")[0].value;           
    let  pagamento_26 = document.getElementsByName("rating_26_4")[0].value;           
    let  pagamento_27 = document.getElementsByName("rating_27_4")[0].value;           
    let  pagamento_28 = document.getElementsByName("rating_28_4")[0].value;           
    let  pagamento_29 = document.getElementsByName("rating_29_4")[0].value;           
    let  pagamento_30 = document.getElementsByName("rating_30_4")[0].value;           
    let  pagamento_31 = document.getElementsByName("rating_31_4")[0].value;
    let  pagamento_32 = document.getElementsByName("rating_32_4")[0].value;
    let  pagamento_33 = document.getElementsByName("rating_33_4")[0].value;
    let  pagamento_34 = document.getElementsByName("rating_34_4")[0].value;
    let  pagamento_35 = document.getElementsByName("rating_35_4")[0].value;
    let  pagamento_36 = document.getElementsByName("rating_36_4")[0].value;
    let  pagamento_37 = document.getElementsByName("rating_37_4")[0].value;
    let  pagamento_38 = document.getElementsByName("rating_38_4")[0].value;
    let  pagamento_39 = document.getElementsByName("rating_39_4")[0].value;
    let  pagamento_40 = document.getElementsByName("rating_40_4")[0].value;
    let  pagamento_41 = document.getElementsByName("rating_41_4")[0].value;
    let  pagamento_42 = document.getElementsByName("rating_42_4")[0].value;
    let  pagamento_43 = document.getElementsByName("rating_43_4")[0].value;
    let  pagamento_44 = document.getElementsByName("rating_44_4")[0].value;
    let  pagamento_45 = document.getElementsByName("rating_45_4")[0].value;
    let  pagamento_46 = document.getElementsByName("rating_46_4")[0].value;
    let  pagamento_47 = document.getElementsByName("rating_47_4")[0].value;
    let  pagamento_48 = document.getElementsByName("rating_48_4")[0].value;
    let  pagamento_49 = document.getElementsByName("rating_49_4")[0].value;
    let  pagamento_50 = document.getElementsByName("rating_50_4")[0].value;
    let  pagamento_51 = document.getElementsByName("rating_51_4")[0].value;
    let  pagamento_52 = document.getElementsByName("rating_52_4")[0].value;
    let  pagamento_53 = document.getElementsByName("rating_53_4")[0].value;
    let  pagamento_54 = document.getElementsByName("rating_54_4")[0].value;
    let  pagamento_55 = document.getElementsByName("rating_55_4")[0].value;

    // verificando os dados dos pagamento
    if( typeof pagamento_0 == 'undefined' ) {
        // => Code goes here
        pagamento_0 = '';
    }
    if( typeof pagamento_1 == 'undefined' ) {
        // => Code goes here
        pagamento_1 = '';
    }
    if( typeof pagamento_2 == 'undefined' ) {
        // => Code goes here
        pagamento_2 = '';
    }
    if( typeof pagamento_3 == 'undefined' ) {
        // => Code goes here
        pagamento_3 = '';
    }
    if( typeof pagamento_4 == 'undefined' ) {
        // => Code goes here
        pagamento_4 = '';
    }
    if( typeof pagamento_5 == 'undefined' ) {
        // => Code goes here
        pagamento_5 = '';
    }
    if( typeof pagamento_6 == 'undefined' ) {
        // => Code goes here
        pagamento_6 = '';
    }
    if( typeof pagamento_7 == 'undefined' ) {
        // => Code goes here
        pagamento_7 = '';
    }
    if( typeof pagamento_8 == 'undefined' ) {
        // => Code goes here
        pagamento_8 = '';
    }
    if( typeof pagamento_9 == 'undefined' ) {
        // => Code goes here
        pagamento_9 = '';
    }
    if( typeof pagamento_10 == 'undefined' ) {
        // => Code goes here
        pagamento_10 = '';
    }
    if( typeof pagamento_11 == 'undefined' ) {
        // => Code goes here
        pagamento_11 = '';
    }
    if( typeof pagamento_12 == 'undefined' ) {
        // => Code goes here
        pagamento_12 = '';
    }
    if( typeof pagamento_13 == 'undefined' ) {
        // => Code goes here
        pagamento_13 = '';
    }
    if( typeof pagamento_14 == 'undefined' ) {
        // => Code goes here
        pagamento_14 = '';
    }
    if( typeof pagamento_15 == 'undefined' ) {
        // => Code goes here
        pagamento_15 = '';
    }
    if( typeof pagamento_16 == 'undefined' ) {
        // => Code goes here
        pagamento_16 = '';
    }
    if( typeof pagamento_17 == 'undefined' ) {
        // => Code goes here
        pagamento_17 = '';
    }
    if( typeof pagamento_18 == 'undefined' ) {
        // => Code goes here
        pagamento_18 = '';
    }
    if( typeof pagamento_19 == 'undefined' ) {
        // => Code goes here
        pagamento_19 = '';
    }
    if( typeof pagamento_20 == 'undefined' ) {
        // => Code goes here
        pagamento_20 = '';
    }
    if( typeof pagamento_21 == 'undefined' ) {
        // => Code goes here
        pagamento_21 = '';
    }
    if( typeof pagamento_22 == 'undefined' ) {
        // => Code goes here
        pagamento_22 = '';
    }
    if( typeof pagamento_23 == 'undefined' ) {
        // => Code goes here
        pagamento_23 = '';
    }
    if( typeof pagamento_24 == 'undefined' ) {
        // => Code goes here
        pagamento_24 = '';
    }
    if( typeof pagamento_25 == 'undefined' ) {
        // => Code goes here
        pagamento_25 = '';
    }
    if( typeof pagamento_26 == 'undefined' ) {
        // => Code goes here
        pagamento_26 = '';
    }
    if( typeof pagamento_27 == 'undefined' ) {
        // => Code goes here
        pagamento_27 = '';
    }
    if( typeof pagamento_28 == 'undefined' ) {
        // => Code goes here
        pagamento_28 = '';
    }
    if( typeof pagamento_29 == 'undefined' ) {
        // => Code goes here
        pagamento_29 = '';
    }
    if( typeof pagamento_30 == 'undefined' ) {
        // => Code goes here
        pagamento_30 = '';
    }
    if( typeof pagamento_31 == 'undefined' ) {
        // => Code goes here
        pagamento_31 = '';
    }
    if( typeof pagamento_32 == 'undefined' ) {
        // => Code goes here
        pagamento_32 = '';
    }
    if( typeof pagamento_33 == 'undefined' ) {
        // => Code goes here
        pagamento_33 = '';
    }
    if( typeof pagamento_34 == 'undefined' ) {
        // => Code goes here
        pagamento_34 = '';
    }
    if( typeof pagamento_35 == 'undefined' ) {
        // => Code goes here
        pagamento_35 = '';
    }
    if( typeof pagamento_36 == 'undefined' ) {
        // => Code goes here
        pagamento_36 = '';
    }
    if( typeof pagamento_37 == 'undefined' ) {
        // => Code goes here
        pagamento_37 = '';
    }
    if( typeof pagamento_38 == 'undefined' ) {
        // => Code goes here
        pagamento_38 = '';
    }
    if( typeof pagamento_39 == 'undefined' ) {
        // => Code goes here
        pagamento_39 = '';
    }
    if( typeof pagamento_40 == 'undefined' ) {
        // => Code goes here
        pagamento_40 = '';
    }
    if( typeof pagamento_41 == 'undefined' ) {
        // => Code goes here
        pagamento_41 = '';
    }
    if( typeof pagamento_42 == 'undefined' ) {
        // => Code goes here
        pagamento_42 = '';
    }
    if( typeof pagamento_43 == 'undefined' ) {
        // => Code goes here
        pagamento_43 = '';
    }
    if( typeof pagamento_44 == 'undefined' ) {
        // => Code goes here
        pagamento_44 = '';
    }
    if( typeof pagamento_45 == 'undefined' ) {
        // => Code goes here
        pagamento_45 = '';
    }
    if( typeof pagamento_46 == 'undefined' ) {
        // => Code goes here
        pagamento_46 = '';
    }
    if( typeof pagamento_47 == 'undefined' ) {
        // => Code goes here
        pagamento_47 = '';
    }
    if( typeof pagamento_48 == 'undefined' ) {
        // => Code goes here
        pagamento_48 = '';
    }
    if( typeof pagamento_49 == 'undefined' ) {
        // => Code goes here
        pagamento_49 = '';
    }
    if( typeof pagamento_50 == 'undefined' ) {
        // => Code goes here
        pagamento_50 = '';
    }
    if( typeof pagamento_51 == 'undefined' ) {
        // => Code goes here
        pagamento_51 = '';
    }
    if( typeof pagamento_52 == 'undefined' ) {
        // => Code goes here
        pagamento_52 = '';
    }
    if( typeof pagamento_53 == 'undefined' ) {
        // => Code goes here
        pagamento_53 = '';
    }
    if( typeof pagamento_54 == 'undefined' ) {
        // => Code goes here
        pagamento_54 = '';
    }
    if( typeof pagamento_55 == 'undefined' ) {
        // => Code goes here
        pagamento_55 = '';
    }

    let  preco_0  = document.getElementsByName("rating_0_5")[0].value;           
    let  preco_1  = document.getElementsByName("rating_1_5")[0].value;           
    let  preco_2  = document.getElementsByName("rating_2_5")[0].value;           
    let  preco_3  = document.getElementsByName("rating_3_5")[0].value;           
    let  preco_4  = document.getElementsByName("rating_4_5")[0].value;           
    let  preco_5  = document.getElementsByName("rating_5_5")[0].value;           
    let  preco_6  = document.getElementsByName("rating_6_5")[0].value;           
    let  preco_7  = document.getElementsByName("rating_7_5")[0].value;           
    let  preco_8  = document.getElementsByName("rating_8_5")[0].value;           
    let  preco_9  = document.getElementsByName("rating_9_5")[0].value;           
    let  preco_10 = document.getElementsByName("rating_10_5")[0].value;           
    let  preco_11 = document.getElementsByName("rating_11_5")[0].value;           
    let  preco_12 = document.getElementsByName("rating_12_5")[0].value;           
    let  preco_13 = document.getElementsByName("rating_13_5")[0].value;           
    let  preco_14 = document.getElementsByName("rating_14_5")[0].value;           
    let  preco_15 = document.getElementsByName("rating_15_5")[0].value;           
    let  preco_16 = document.getElementsByName("rating_16_5")[0].value;           
    let  preco_17 = document.getElementsByName("rating_17_5")[0].value;           
    let  preco_18 = document.getElementsByName("rating_18_5")[0].value;           
    let  preco_19 = document.getElementsByName("rating_19_5")[0].value;           
    let  preco_20 = document.getElementsByName("rating_20_5")[0].value;           
    let  preco_21 = document.getElementsByName("rating_21_5")[0].value;           
    let  preco_22 = document.getElementsByName("rating_22_5")[0].value;           
    let  preco_23 = document.getElementsByName("rating_23_5")[0].value;           
    let  preco_24 = document.getElementsByName("rating_24_5")[0].value;           
    let  preco_25 = document.getElementsByName("rating_25_5")[0].value;           
    let  preco_26 = document.getElementsByName("rating_26_5")[0].value;           
    let  preco_27 = document.getElementsByName("rating_27_5")[0].value;           
    let  preco_28 = document.getElementsByName("rating_28_5")[0].value;           
    let  preco_29 = document.getElementsByName("rating_29_5")[0].value;           
    let  preco_30 = document.getElementsByName("rating_30_5")[0].value;           
    let  preco_31 = document.getElementsByName("rating_31_5")[0].value;
    let  preco_32 = document.getElementsByName("rating_32_5")[0].value;
    let  preco_33 = document.getElementsByName("rating_33_5")[0].value;
    let  preco_34 = document.getElementsByName("rating_34_5")[0].value;
    let  preco_35 = document.getElementsByName("rating_35_5")[0].value;
    let  preco_36 = document.getElementsByName("rating_36_5")[0].value;
    let  preco_37 = document.getElementsByName("rating_37_5")[0].value;
    let  preco_38 = document.getElementsByName("rating_38_5")[0].value;
    let  preco_39 = document.getElementsByName("rating_39_5")[0].value;
    let  preco_40 = document.getElementsByName("rating_40_5")[0].value;
    let  preco_41 = document.getElementsByName("rating_41_5")[0].value;
    let  preco_42 = document.getElementsByName("rating_42_5")[0].value;
    let  preco_43 = document.getElementsByName("rating_43_5")[0].value;
    let  preco_44 = document.getElementsByName("rating_44_5")[0].value;
    let  preco_45 = document.getElementsByName("rating_45_5")[0].value;
    let  preco_46 = document.getElementsByName("rating_46_5")[0].value;
    let  preco_47 = document.getElementsByName("rating_47_5")[0].value;
    let  preco_48 = document.getElementsByName("rating_48_5")[0].value;
    let  preco_49 = document.getElementsByName("rating_49_5")[0].value;
    let  preco_50 = document.getElementsByName("rating_50_5")[0].value;
    let  preco_51 = document.getElementsByName("rating_51_5")[0].value;
    let  preco_52 = document.getElementsByName("rating_52_5")[0].value;
    let  preco_53 = document.getElementsByName("rating_53_5")[0].value;
    let  preco_54 = document.getElementsByName("rating_54_5")[0].value;
    let  preco_55 = document.getElementsByName("rating_55_5")[0].value;

     // verificando os dados dos preco
     if( typeof preco_0 == 'undefined' ) {
        // => Code goes here
        preco_0 = '';
    }
    if( typeof preco_1 == 'undefined' ) {
        // => Code goes here
        preco_1 = '';
    }
    if( typeof preco_2 == 'undefined' ) {
        // => Code goes here
        preco_2 = '';
    }
    if( typeof preco_3 == 'undefined' ) {
        // => Code goes here
        preco_3 = '';
    }
    if( typeof preco_4 == 'undefined' ) {
        // => Code goes here
        preco_4 = '';
    }
    if( typeof preco_5 == 'undefined' ) {
        // => Code goes here
        preco_5 = '';
    }
    if( typeof preco_6 == 'undefined' ) {
        // => Code goes here
        preco_6 = '';
    }
    if( typeof preco_7 == 'undefined' ) {
        // => Code goes here
        preco_7 = '';
    }
    if( typeof preco_8 == 'undefined' ) {
        // => Code goes here
        preco_8 = '';
    }
    if( typeof preco_9 == 'undefined' ) {
        // => Code goes here
        preco_9 = '';
    }
    if( typeof preco_10 == 'undefined' ) {
        // => Code goes here
        preco_10 = '';
    }
    if( typeof preco_11 == 'undefined' ) {
        // => Code goes here
        preco_11 = '';
    }
    if( typeof preco_12 == 'undefined' ) {
        // => Code goes here
        preco_12 = '';
    }
    if( typeof preco_13 == 'undefined' ) {
        // => Code goes here
        preco_13 = '';
    }
    if( typeof preco_14 == 'undefined' ) {
        // => Code goes here
        preco_14 = '';
    }
    if( typeof preco_15 == 'undefined' ) {
        // => Code goes here
        preco_15 = '';
    }
    if( typeof preco_16 == 'undefined' ) {
        // => Code goes here
        preco_16 = '';
    }
    if( typeof preco_17 == 'undefined' ) {
        // => Code goes here
        preco_17 = '';
    }
    if( typeof preco_18 == 'undefined' ) {
        // => Code goes here
        preco_18 = '';
    }
    if( typeof preco_19 == 'undefined' ) {
        // => Code goes here
        preco_19 = '';
    }
    if( typeof preco_20 == 'undefined' ) {
        // => Code goes here
        preco_20 = '';
    }
    if( typeof preco_21 == 'undefined' ) {
        // => Code goes here
        preco_21 = '';
    }
    if( typeof preco_22 == 'undefined' ) {
        // => Code goes here
        preco_22 = '';
    }
    if( typeof preco_23 == 'undefined' ) {
        // => Code goes here
        preco_23 = '';
    }
    if( typeof preco_24 == 'undefined' ) {
        // => Code goes here
        preco_24 = '';
    }
    if( typeof preco_25 == 'undefined' ) {
        // => Code goes here
        preco_25 = '';
    }
    if( typeof preco_26 == 'undefined' ) {
        // => Code goes here
        preco_26 = '';
    }
    if( typeof preco_27 == 'undefined' ) {
        // => Code goes here
        preco_27 = '';
    }
    if( typeof preco_28 == 'undefined' ) {
        // => Code goes here
        preco_28 = '';
    }
    if( typeof preco_29 == 'undefined' ) {
        // => Code goes here
        preco_29 = '';
    }
    if( typeof preco_30 == 'undefined' ) {
        // => Code goes here
        preco_30 = '';
    }
    if( typeof preco_31 == 'undefined' ) {
        // => Code goes here
        preco_31 = '';
    }
    if( typeof preco_32 == 'undefined' ) {
        // => Code goes here
        preco_32 = '';
    }
    if( typeof preco_33 == 'undefined' ) {
        // => Code goes here
        preco_33 = '';
    }
    if( typeof preco_34 == 'undefined' ) {
        // => Code goes here
        preco_34 = '';
    }
    if( typeof preco_35 == 'undefined' ) {
        // => Code goes here
        preco_35 = '';
    }
    if( typeof preco_36 == 'undefined' ) {
        // => Code goes here
        preco_36 = '';
    }
    if( typeof preco_37 == 'undefined' ) {
        // => Code goes here
        preco_37 = '';
    }
    if( typeof preco_38 == 'undefined' ) {
        // => Code goes here
        preco_38 = '';
    }
    if( typeof preco_39 == 'undefined' ) {
        // => Code goes here
        preco_39 = '';
    }
    if( typeof preco_40 == 'undefined' ) {
        // => Code goes here
        preco_40 = '';
    }
    if( typeof preco_41 == 'undefined' ) {
        // => Code goes here
        preco_41 = '';
    }
    if( typeof preco_42 == 'undefined' ) {
        // => Code goes here
        preco_42 = '';
    }
    if( typeof preco_43 == 'undefined' ) {
        // => Code goes here
        preco_43 = '';
    }
    if( typeof preco_44 == 'undefined' ) {
        // => Code goes here
        preco_44 = '';
    }
    if( typeof preco_45 == 'undefined' ) {
        // => Code goes here
        preco_45 = '';
    }
    if( typeof preco_46 == 'undefined' ) {
        // => Code goes here
        preco_46 = '';
    }
    if( typeof preco_47 == 'undefined' ) {
        // => Code goes here
        preco_47 = '';
    }
    if( typeof preco_48 == 'undefined' ) {
        // => Code goes here
        preco_48 = '';
    }
    if( typeof preco_49 == 'undefined' ) {
        // => Code goes here
        preco_49 = '';
    }
    if( typeof preco_50 == 'undefined' ) {
        // => Code goes here
        preco_50 = '';
    }
    if( typeof preco_51 == 'undefined' ) {
        // => Code goes here
        preco_51 = '';
    }
    if( typeof preco_52 == 'undefined' ) {
        // => Code goes here
        preco_52 = '';
    }
    if( typeof preco_53 == 'undefined' ) {
        // => Code goes here
        preco_53 = '';
    }
    if( typeof preco_54 == 'undefined' ) {
        // => Code goes here
        preco_54 = '';
    }
    if( typeof preco_55 == 'undefined' ) {
        // => Code goes here
        preco_55 = '';
    }



    let tabela = [
        [],
        [Segmentos[0], nome0, Acessibilidade_0, Atendimento_0, pagamento_0, preco_0,"\r\n"],
        [Segmentos[1], nome1, Acessibilidade_1, Atendimento_1, pagamento_1, preco_1,"\r\n"],
        [Segmentos[2], nome2, Acessibilidade_2, Atendimento_2, pagamento_2, preco_2,"\r\n"],
        [Segmentos[3], nome3, Acessibilidade_3, Atendimento_3, pagamento_3, preco_3,"\r\n"],
        [Segmentos[4], nome4, Acessibilidade_4, Atendimento_4, pagamento_4, preco_4,"\r\n"],
        [Segmentos[5], nome5, Acessibilidade_5, Atendimento_5, pagamento_5, preco_5,"\r\n"],
        [Segmentos[6], nome6, Acessibilidade_6, Atendimento_6, pagamento_6, preco_6,"\r\n"],
        [Segmentos[7], nome7, Acessibilidade_7, Atendimento_7, pagamento_7, preco_7,"\r\n"],
        [Segmentos[8], nome8, Acessibilidade_8, Atendimento_8, pagamento_8, preco_8,"\r\n"],
        [Segmentos[9], nome9, Acessibilidade_9, Atendimento_9, pagamento_9, preco_9,"\r\n"],

        [Segmentos[10], nome10, Acessibilidade_10, Atendimento_10, pagamento_10, preco_10,"\r\n"],
        [Segmentos[11], nome11, Acessibilidade_11, Atendimento_11, pagamento_11, preco_11,"\r\n"],
        [Segmentos[12], nome12, Acessibilidade_12, Atendimento_12, pagamento_12, preco_12,"\r\n"],
        [Segmentos[13], nome13, Acessibilidade_13, Atendimento_13, pagamento_13, preco_13,"\r\n"],
        [Segmentos[14], nome14, Acessibilidade_14, Atendimento_14, pagamento_14, preco_14,"\r\n"],
        [Segmentos[15], nome15, Acessibilidade_15, Atendimento_15, pagamento_15, preco_15,"\r\n"],
        [Segmentos[16], nome16, Acessibilidade_16, Atendimento_16, pagamento_16, preco_16,"\r\n"],
        [Segmentos[17], nome17, Acessibilidade_17, Atendimento_17, pagamento_17, preco_17,"\r\n"],
        [Segmentos[18], nome18, Acessibilidade_18, Atendimento_18, pagamento_18, preco_18,"\r\n"],
        [Segmentos[19], nome19, Acessibilidade_19, Atendimento_19, pagamento_19, preco_19,"\r\n"],
        [Segmentos[20], nome20, Acessibilidade_20, Atendimento_20, pagamento_20, preco_20,"\r\n"],

        [Segmentos[21], nome21, Acessibilidade_21, Atendimento_21, pagamento_21, preco_21,"\r\n"],
        [Segmentos[22], nome22, Acessibilidade_22, Atendimento_22, pagamento_22, preco_22,"\r\n"],
        [Segmentos[23], nome23, Acessibilidade_23, Atendimento_23, pagamento_23, preco_23,"\r\n"],
        [Segmentos[24], nome24, Acessibilidade_24, Atendimento_24, pagamento_24, preco_24,"\r\n"],
        [Segmentos[25], nome25, Acessibilidade_25, Atendimento_25, pagamento_25, preco_25,"\r\n"],
        [Segmentos[26], nome26, Acessibilidade_26, Atendimento_26, pagamento_26, preco_26,"\r\n"],
        [Segmentos[27], nome27, Acessibilidade_27, Atendimento_27, pagamento_27, preco_27,"\r\n"],
        [Segmentos[28], nome28, Acessibilidade_28, Atendimento_28, pagamento_28, preco_28,"\r\n"],
        [Segmentos[29], nome29, Acessibilidade_29, Atendimento_29, pagamento_29, preco_29,"\r\n"],
        [Segmentos[30], nome30, Acessibilidade_30, Atendimento_30, pagamento_30, preco_30,"\r\n"],

        [Segmentos[31], nome31, Acessibilidade_31, Atendimento_31, pagamento_31, preco_31,"\r\n"],
        [Segmentos[32], nome32, Acessibilidade_32, Atendimento_32, pagamento_32, preco_32,"\r\n"],
        [Segmentos[33], nome33, Acessibilidade_33, Atendimento_33, pagamento_33, preco_33,"\r\n"],
        [Segmentos[34], nome34, Acessibilidade_34, Atendimento_34, pagamento_34, preco_34,"\r\n"],
        [Segmentos[35], nome35, Acessibilidade_35, Atendimento_35, pagamento_35, preco_35,"\r\n"],
        [Segmentos[36], nome36, Acessibilidade_36, Atendimento_36, pagamento_36, preco_36,"\r\n"],
        [Segmentos[37], nome37, Acessibilidade_37, Atendimento_37, pagamento_37, preco_37,"\r\n"],
        [Segmentos[38], nome38, Acessibilidade_38, Atendimento_38, pagamento_38, preco_38,"\r\n"],
        [Segmentos[39], nome39, Acessibilidade_39, Atendimento_39, pagamento_39, preco_39,"\r\n"],

        [Segmentos[40], nome40, Acessibilidade_40, Atendimento_40, pagamento_40, preco_40,"\r\n"],
        [Segmentos[41], nome41, Acessibilidade_41, Atendimento_41, pagamento_41, preco_41,"\r\n"],
        [Segmentos[42], nome42, Acessibilidade_42, Atendimento_42, pagamento_42, preco_42,"\r\n"],
        [Segmentos[43], nome43, Acessibilidade_43, Atendimento_43, pagamento_43, preco_43,"\r\n"],
        [Segmentos[44], nome44, Acessibilidade_44, Atendimento_44, pagamento_44, preco_44,"\r\n"],
        [Segmentos[45], nome45, Acessibilidade_45, Atendimento_45, pagamento_45, preco_45,"\r\n"],
        [Segmentos[46], nome46, Acessibilidade_46, Atendimento_46, pagamento_46, preco_46,"\r\n"],
        [Segmentos[47], nome47, Acessibilidade_47, Atendimento_47, pagamento_47, preco_47,"\r\n"],
        [Segmentos[48], nome48, Acessibilidade_48, Atendimento_48, pagamento_48, preco_48,"\r\n"],
        [Segmentos[49], nome49, Acessibilidade_49, Atendimento_49, pagamento_49, preco_49,"\r\n"],
        [Segmentos[50], nome50, Acessibilidade_50, Atendimento_50, pagamento_50, preco_50,"\r\n"],
        [Segmentos[51], nome51, Acessibilidade_51, Atendimento_51, pagamento_51, preco_51,"\r\n"],
        [Segmentos[52], nome52, Acessibilidade_52, Atendimento_52, pagamento_52, preco_52,"\r\n"],
        [Segmentos[53], nome53, Acessibilidade_53, Atendimento_53, pagamento_53, preco_53,"\r\n"],
        [Segmentos[54], nome54, Acessibilidade_54, Atendimento_54, pagamento_54, preco_54,"\r\n"],
        [Segmentos[55], nome55, Acessibilidade_55, Atendimento_55, pagamento_55, preco_55,"\r\n"],
    ]
0
    titulo = "tabela";
    texto = tabela;
    localStorage.csv_tabela +=  tabela +"\r\n";
    console.log( localStorage.csv_tabela)

    /*fs.writeFile('tabela.csv', csv, { flag: 'a+' }, (err) => {

        if (err) throw err;
        console.log('A tabela foi Salva!');
       
    });*/

    
    setTimeout(function() {
        window.location.href = "dadossalvos.html";
    }, 1000);
    /* let texto = document.getElementsByName("texto")[0].value;
     let titulo = document.getElementsByName("titulo")[0].value;*/
    //location.reload();
}

function downloadFiles(data, file_name, file_type) {
    var file = new Blob([data], {type: file_type});
    
    if (window.navigator.msSaveOrOpenBlob) 
        window.navigator.msSaveOrOpenBlob(file, file_name);
    else { 
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = file_name;
        document.body.appendChild(a);
        a.click();
        
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
//let blob = new Blob(["GeeksForGeeks"], { type: "text/plain" });
    // The full Blob Object can be seen 
    // in the Console of the Browser
    
function downloadJSON(inArray, fileName) {
    var json = JSON.stringify(inArray)
    
    //Convert JSON string to BLOB.
    json = [json]
    var blob1 = new Blob(json, {
        type: "text/csv;charset=utf-8"
    })
    
    
    //Check the Browser.
    let isIE = false || !!document.documentMode
    if(isIE) {
        window.navigator.msSaveBlob( blob1, fileName)
    }else{
        let url = window.URL || window.webkitURL
        link = url.createObjectURL(blob1)
        let a = document.createElement("a")
        a.download = fileName
        a.href = link
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
    }
    function blobToBase64(blob) {
        return new Promise((resolve, _) => {
          let  reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });

        
      }
      function downloadCSV(csv,fileName) {
        let  linkSource = `data:application/csv;base64,${csv}`;
        let  downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
        downloadLink.remove();
    }
    function downloadBlob(blob, name) {

       // var File = blobToFile(blob, name);
        var element = document.createElement('a');
        element.setAttribute('href','data:text/csv;charset=utf-8, ' + encodeURIComponent(localStorage.csv_tabela));
        element.setAttribute('download', name);
        document.body.appendChild(element);
        element.click();
        element.remove();
/*
        // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
        let  blobUrl = URL.createObjectURL(blob);
       
        // Create a link element
        let  link = document.createElement("a");
      
        // Set link's href to point to the Blob URL
        link.href = blobUrl;
        link.download = name;
      
        // Append link to the body
        document.body.appendChild(link);
      
        // Dispatch click event on the link
        // This is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(
          new MouseEvent('click', { 
            bubbles: true, 
            cancelable: true, 
            view: window 
          })
        );
      
        // Remove link from body
        document.body.removeChild(link);*/
      }
function blobToFile(theBlob, fileName){
        //A Blob() é quase um File() - só faltam as duas propriedades abaixo das quais adicionaremos
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
    }
 
    


function baixaTabela(){  

    let fileName = "Tabela"
    let blob = new Blob([localStorage.csv_tabela], {type: "text/csv;charset=utf-8" });
    let file = new File([localStorage.csv_tabela],  fileName, {type: "text/csv;charset=utf-8"});
 
    // let  file = document.querySelector('#myfile').files[0];,
    var element = document.createElement('a');
    let url = URL.createObjectURL(file);
    let url2= encodeURIComponent([localStorage.csv_tabela])
    console.log(encodeURIComponent([localStorage.csv_tabela]))
    console.log("\n ============================================== \n")
    console.log(url)
    element.setAttribute('href', url2);
    element.setAttribute('download', fileName+".csv");
    element.setAttribute('name', fileName)
    element.setAttribute('class', fileName)
    document.body.appendChild(element);
    element.click();
    element.remove();
    let  data = [
        [localStorage.csv_tabela],

    ];
    let csvContent = "data:text/csv;charset=utf-8," 
        + data.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);

    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tabela.csv");
    document.body.appendChild(link); 
    link.click();
    link.remove();
    console.log(localStorage.csv_tabela)//*/
}

function baixaPergunta(){ 
    // downloadFiles(localStorage.csv_respostas,"respostas","text/csv;charset=utf-8")
    let fileName = "Perguntas.csv"
    //saveAs(new File([localStorage.csv_tabela],  fileName, {type: "text/csv;charset=utf-8"}));
    let file = new File([localStorage.csv_tabela],  fileName, {type: "text/csv;charset=utf-8"});
    var element = document.createElement('a');
    let url = URL.createObjectURL(file);
    console.log("\n ============================================== \n")
    console.log(url)
    element.setAttribute('href', url);
    element.setAttribute('download', fileName+".csv");
    element.setAttribute('name', fileName)
    element.setAttribute('class', fileName)
    document.body.appendChild(element);
    element.click();
    element.remove();
   /* var dataStr  = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(localStorage.csv_respostas));
    var dlAnchorElem = document.createElement("a")
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", fileName+".csv");
    dlAnchorElem.click(); 
    dlAnchorElem.remove()*//*
    let  titulo = "pergunta";   
    let blob = new Blob([localStorage.csv_respostas], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "dados/"+titulo +"_"+date+ ".csv");// */
   /* let  data = [
        [localStorage.csv_respostas],

    ];
    let csvContent = "data:text/csv;charset=utf-8," 
        + data.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);

    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "respostas.csv");
    document.body.appendChild(link); 
    link.click();
   // console.log(localStorage.csv_tabela) // */
}
function downloadBase64File(contentBase64, fileName) {
    let  linkSource = `data:application/csv;base64,${contentBase64}`;
    let  downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);

    downloadLink.href = linkSource;
    downloadLink.target = '_self';
    downloadLink.download = fileName;
    downloadLink.click(); 
}

function BaixarBlob(fileName, fileContents){
    if (typeof(Blob) != 'undefined') { // Alternative 1: using Blob
        var textFileAsBlob = new Blob([localStorage.csv_respostas], {type: 'application/csv;charset=utf-8'});
        var downloadLink = document.createElement("a");
        downloadLink.download = fileName;
        if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = document.body.removeChild(event.target);
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
        downloadLink.remove()
    } else { // Alternative 2: using Data
        var pp = document.createElement('a');
        pp.setAttribute('href', 'data:application/csv;charset=utf-8,' +
            encodeURIComponent(fileContents));
        pp.setAttribute('download', fileName);
        pp.onclick = document.body.removeChild(event.target);
        pp.click();
        pp.remove();
    }
}

function baixaTabelaBla(){  
    let titulo = "tabela.csv";
    let blob = new Blob([localStorage.csv_tabela], { type: "text/csv;charset=utf-8" });
    var url  = URL.createObjectURL(blob);
    //saveAs(blob, titulo +"_"+date+ ".csv");
     var element = document.createElement('a');
     element.href = url ;
     // element.setAttribute('href', url);
     element.setAttribute('download', titulo);
    // element.target = '_self';
     document.body.appendChild(element);
     element.click();
     element.remove();
    // console.log(url);
  //  BaixarBlob(titulo, localStorage.csv_tabela);
   // downloadFiles(blob,"FILEblob"+titulo,"application/csv;charset=utf-8")
  /*  downloadBase64File( btoa(localStorage.csv_tabela),"GDS"+titulo)
    downloadBase64File( btoa(blob),"GDS_blob"+titulo)*/
}
function baixaPerguntaBla(){ 
    let titulo = "pergunta.csv";
    let blob = new Blob([localStorage.csv_respostas], { type: "application/csv;charset=utf-8" });
    var url  = URL.createObjectURL(blob);
    // saveAs(blob, titulo +"_"+date+ ".csv");
     var element = document.createElement('a');
     element.href = url ;//encodeURIComponent([localStorage.csv_respostas]));
     element.setAttribute('download', titulo);
    //element.target = '_self';
     document.body.appendChild(element);
     element.click();
     element.remove();
  //console.log(url);
  //BaixarBlob(titulo, localStorage.csv_respostas);
  //downloadFiles(blob,"FILEblob"+titulo,"application/csv;charset=utf-8")
  /*downloadBase64File( btoa(localStorage.csv_respostas),"GDS"+titulo)
    downloadBase64File( btoa(blob),"GDS_blob"+titulo)*/
 /**
  * downloadFiles(blob,"FILEblob"+titulo,"text/csv;charset=utf-8")
  * downloadBase64File( btoa(localStorage.csv_respostas),"GDS"+titulo)
  * downloadBase64File( btoa(blob),"GDS_blob"+titulo)
  * 
  **/
}


