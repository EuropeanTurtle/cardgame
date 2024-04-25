const cards = [
    { id: 1, name: "Dragon Flame", description: "Ancient dragon with fire abilities.", image: "images/dragon_flame.png" },
    { id: 2, name: "Warrior Shield", description: "Warrior with a giant shield.", image: "images/warrior_shield.png" }
];

const folders = [];

function displayCards() {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';
    cards.forEach(card => {
        const cardElement = `<div>
            <h3>${card.name}</h3>
            <p>${card.description}</p>
            <img src="${card.image}" alt="${card.name}" style="width:100px;height:100px;">
            <button onclick="moveCardToFolder(${card.id})">Move to Folder</button>
        </div>`;
        cardsContainer.innerHTML += cardElement;
    });
}

function createFolder() {
    const folderName = document.getElementById('folderName').value;
    if (!folderName) return;
    const newFolder = { name: folderName, cards: [] };
    folders.push(newFolder);
    document.getElementById('folderName').value = ''; // clear input field
    displayFolders();
}

function moveCardToFolder(cardId) {
    const folderName = prompt("Enter the folder name to move this card:");
    const folder = folders.find(f => f.name === folderName);
    if (folder) {
        folder.cards.push(cardId);
        displayFolders();
    } else {
        alert("Folder not found!");
    }
}

function displayFolders() {
    const foldersContainer = document.getElementById('folders');
    foldersContainer.innerHTML = '';
    folders.forEach(folder => {
        let cardsInFolder = folder.cards.map(id => {
            const card = cards.find(card => card.id === id);
            return card ? card.name : '';
        }).join(', ');
        foldersContainer.innerHTML += `<div><strong>${folder.name}</strong>: ${cardsInFolder}</div>`;
    });
}

// Initialize display
displayCards();
displayFolders();

