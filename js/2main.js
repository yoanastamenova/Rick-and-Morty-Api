const bringCharacters = async () => {
    const characters = await fetch('https://rickandmortyapi.com/api/character/?page=3');
    const data = await characters.json();

    const cardElements = data.results.map(person => {
        return(`
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="${person.image}" class="card-img-top" alt="${person.id}">
                    <div class="card-body">
                        <h5 class="card-title">${person.name}</h5>
                    </div>
                </div>
            </div>
        `);
    });

    document.getElementById("characters").innerHTML = `
        <div class="row">
            ${cardElements.join("")}
        </div>
    `;
}

bringCharacters();