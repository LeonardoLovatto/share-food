var content = [
    {
        "name": "Silva Lanches",
        "menuItens": [
            {
                "name": "Xis Bacon",
                "description": "Pão, alface, tomate, carne, bacon, milho, ervilha, maionese, catchup, mostarda",
                "price": 20.5
            },
            {
                "name": "Xis Veg",
                "description": "Pão, alface, tomate, bide de grão-de-bico, milho, ervilha, maionese, catchup, mostarda",
                "price": 22.5
            },
            {
                "name": "Bauru Picanha",
                "description": "Pão, alface, tomate, picanha, maionese",
                "price": 25
            }
        ]
    },
    {
        "name": "Z café",
        "menuItens": [
            {
                "name": "Café expresso",
                "description": "50ml do amis pure café moído e passado na hora",
                "price": 5.5
            },
            {
                "name": "Café Ristretto",
                "description": "30ml do melhor café aliados dos principais óleos essenciais",
                "price": 7.5
            },
            {
                "name": "Café Mochaccino",
                "description": "70ml do melhor café expesso junto ao delicioso leite vaporizado e o melhor chocolate suíço",
                "price": 10.5
            }
        ]
    },
    {
        "name": "Canal café - PUCRS",
        "menuItens": [
            {
                "name": "Café expresso",
                "description": "50ml de puro café moído e passado na hora",
                "price": 6.5
            },
            {
                "name": "Suco Natural",
                "description": "500ml de suco de frutas da estação",
                "price": 12.5
            }
        ]
    },
    {
        "name": "Palatu's - PUCRS",
        "menuItens": [
            {
                "name": "Buffet com grelhados",
                "description": "30 variedades de saladas, pratos quentes e churrasco",
                "price": 27.5
            },
            {
                "name": "Suco Natural",
                "description": "500ml de suco de frutas da estação",
                "price": 4.5
            },
            {
                "name": "Refrigerante Lata",
                "description": "Pepsi, guaraná, sprite ou sukita",
                "price": 4.5
            }
        ]
    },
];

function getMenuItensByName(name) {
    return content.find(el => el.name === name).menuItens;
}