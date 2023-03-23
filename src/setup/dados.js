let dadosinicial=[];
dadosinicial["produto"]=[
    {
       "nome": "Creme hidratante",
       "categoria": "beleza",
       "custo": 5.0,
       "preco": 12.5,
       "quantidade": 50,
       "relevancia": 4,
       "linkimagem": "https://www.example.com/creme-hidratante.jpg"
    },
    {
       "nome": "Camiseta masculina",
       "categoria": "vestuário",
       "custo": 8.0,
       "preco": 20.0,
       "quantidade": 100,
       "relevancia": 3,
       "linkimagem": "https://www.example.com/camiseta-masculina.jpg"
    },
    {
       "nome": "Barrinha de cereal",
       "categoria": "alimentos",
       "custo": 0.8,
       "preco": 1.5,
       "quantidade": 200,
       "relevancia": 5,
       "linkimagem": "https://www.example.com/barrinha-de-cereal.jpg"
    },
    {
       "nome": "Fone de ouvido Bluetooth",
       "categoria": "eletrônicos",
       "custo": 25.0,
       "preco": 50.0,
       "quantidade": 30,
       "relevancia": 4,
       "linkimagem": "https://www.example.com/fone-bluetooth.jpg"
    },
    {
       "nome": "Notebook",
       "categoria": "eletrônicos",
       "custo": 800.0,
       "preco": 1500.0,
       "quantidade": 25,
       "relevancia": 5,
       "linkimagem": "https://www.example.com/notebook.jpg"
    },
    {
       "nome": "Bola de futebol",
       "categoria": "esportes",
       "custo": 10.0,
       "preco": 25.0,
       "quantidade": 20,
       "relevancia": 3,
       "linkimagem": "https://www.example.com/bola-de-futebol.jpg"
    },{
       "nome": "Raquete de tênis",
       "categoria": "esporte",
       "custo": 50.0,
       "preco": 100.0,
       "quantidade": 20,
       "relevancia": 4,
       "linkimagem": "https://www.example.com/raquete-de-tenis.jpg"
    },
    {
       "nome": "Caneleira de futebol",
       "categoria": "esporte",
       "custo": 10.0,
       "preco": 20.0,
       "quantidade": 30,
       "relevancia": 2,
       "linkimagem": "https://www.example.com/caneleira-de-futebol.jpg"
    }
];

dadosinicial["endereco"]=[
   {
      "endereco": "Rua das Palmeiras",
      "referencia": "Ao lado do Mercado Central",
      "complemento": "Sala 302",
      "cep": "12345-678",
      "cidade": "Belo Horizonte",
      "uf": "MG",
      "numero": "456"
    },
    {
      "endereco": "Avenida das Américas",
      "referencia": "Próximo ao Shopping",
      "complemento": "Bloco 2, apto 601",
      "cep": "22333-444",
      "cidade": "Rio de Janeiro",
      "uf": "RJ",
      "numero": "789"
    },
    {
      "endereco": "Rua dos Pinheiros",
      "referencia": "Em frente à Praça do Povo",
      "complemento": "Casa 1",
      "cep": "05422-000",
      "cidade": "São Paulo",
      "uf": "SP",
      "numero": "1234"
    },
    {
      "endereco": "Rua das Flores",
      "referencia": "Próximo à Praça da República",
      "complemento": "Apto 42, Bloco C",
      "cep": "01234-567",
      "cidade": "São Paulo",
      "uf": "SP",
      "numero": "123"
    },
    {
      "endereco": "Avenida do Sol",
      "referencia": "Em frente ao Parque Central",
      "complemento": "Sala 501",
      "cep": "89012-345",
      "cidade": "Blumenau",
      "uf": "SC",
      "numero": "789"
    },
    {
      "endereco": "Rua do Comércio",
      "referencia": "Próximo ao Banco Central",
      "complemento": "Loja 2",
      "cep": "45678-901",
      "cidade": "Salvador",
      "uf": "BA",
      "numero": "456"
    }
];

dadosinicial["grupousuario"]=[
   {
      "nome": "Administradores",
      "desc": "Grupo de usuários com permissões de administração",
      "permpost": true,
      "permget": true,
      "permput": true,
      "permdel": true
   },
   {
      "nome": "Usuários comuns",
      "desc": "Grupo de usuários comuns",
      "permpost": true,
      "permget": true,
      "permput": false,
      "permdel": false
   },
   {
      "nome": "Visitantes",
      "desc": "Grupo de usuários que visitam o site",
      "permpost": false,
      "permget": true,
      "permput": false,
      "permdel": false
   }
]

dadosinicial["anunciante"]=[
   {
      "nome": "Tec-Log",
      "cnpj": "55.765.432/0001-01",
      "ramo": "Tecnologia da Informação",
      "linklogo": "https://www.teclog.com.br/logo.png"
   },
   {
      "nome": "Ouro Preto Veículos",
      "cnpj": "99.888.777/0001-02",
      "ramo": "Automobilístico",
      "linklogo": "https://www.ouropretoveiculos.com.br/logo.png"
   },
   {
      "nome": "Doce Mania",
      "cnpj": "33.444.555/0001-03",
      "ramo": "Confeitaria",
      "linklogo": "https://www.docemania.com.br/logo.png"
   }
];

dadosinicial["ramo"]=[
   {
      "nome": "Tecnologia da Informação",
      "desc": "Desenvolvimento de software e soluções tecnológicas",
      "percimpos": 12.5
   },
   {
      "nome": "Automobilístico",
      "desc": "Comércio e reparação de veículos automotores",
      "percimpos": 18.2
   },
   {
      "nome": "Confeitaria",
      "desc": "Produção e venda de doces, bolos e outros produtos de confeitaria",
      "percimpos": 8.3
   }
]

module.exports=dadosinicial;