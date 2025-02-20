const games = [
    {
        id: '1',
        img: "argentumonline.webp",
        name: "Argentum Online",
        url: "https://argentumonline.org/",
        online: "false"
    },
    {
        id: '2',
        img: "argentum20.webp",
        name: "Argentum Online 20th",
        url: "https://www.argentumonline.com.ar/",
        online: "true"
    },
    {
        id: '3',
        img: "furiusao.webp",
        name: "Furius AO",
        url: "https://furiusao.com.ar/",
        online: "true"
    },
    {
        id: '4',
        img: "aotds.webp",
        name: "Tierras del Sur AO",
        url: "https://tdslegacy.com.ar/",
        online: "false"
    },
    {
        id: '5',
        img: "fenixao.webp",
        name: "Fenix AO",
        url: "https://www.fenixao.com.ar/",
        online: "true"
    },
    {
        id: '6',
        img: "aoforever.webp",
        name: "AO Forever",
        url: "https://argentumonlineforever.com/",
        online: "true"
    },
    {
        id: '7',
        img: "cucsiao.webp",
        name: "Cucsi AO",
        url: "https://www.cucsi-ao.com.ar/",
        online: "false"
    },
    {
        id: '8',
        img: "mercuryao.webp",
        name: "Mercury AO",
        url: "https://mercuryao.ucoz.com/",
        online: "false"
    },
    {
        id: '9',
        img: "imperiumao.webp",
        name: "Imperium AO",
        url: "https://imperiumclassic.com/",
        online: "true"
    },
    {
        id: '10',
        img: "aodrag.webp",
        name: "AO Drag",
        url: "https://www.aodrag.es/",
        online: "false"
    },
    {
        id: '11',
        img: "tierrasperdidasao.webp",
        name: "Tierras Perdidas AO",
        url: "https://www.tpjuegos.com/",
        online: "true"
    },
    {
        id: '12',
        img: "desteriumao.webp",
        name: "Desterium AO",
        url: "https://desterium.net/",
        online: "false"
    },
    {
        id: '13',
        img: "aofrost.webp",
        name: "AO Frost",
        url: "https://aofrost.com/",
        online: "true"
    },
    {
        id: '14',
        img: "hispanoao.webp",
        name: "Hispano AO",
        url: "https://www.hispanoao.com.ar/",
        online: "true"
    }
]


const filter = document.querySelector(".filter");
filter.addEventListener('click', () => {
    const container = document.querySelector('#card-container');
    container.innerHTML = '';
    if (container.className === 'filtered') {
        printCards(games);
    }
    else {
        filterOffline(games);
    }
    container.classList.toggle('filtered');
});


function filterOffline(games) {
    const container = document.querySelector('#card-container');
    container.innerHTML = '';

    games.forEach(game => {
        if (game.online === 'true') {
            newGameCard(game);
        }
    });
}


function newGameCard(objGame) {
    const container = document.querySelector('#card-container');
    const card = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h3');
    const link = document.createElement('a');

    container.appendChild(card);
    card.classList.add(`card`);

    img["src"] = `images/${objGame.img}`;
    img["alt"] = `${objGame.name} picture`;
    img["loading"] = 'lazy';
    img["width"] = '400';
    img["height"] = '534';
    card.appendChild(img);

    title.innerHTML = `${objGame.name}`;
    card.appendChild(title);

    link["href"] = `${objGame.url}`;
    link["target"] = '_blank';
    link.innerHTML = ">Visit Website<";
    card.appendChild(link);

}

function printCards(games) {
    games.forEach(game => {
        newGameCard(game);
    });
}

printCards(games);