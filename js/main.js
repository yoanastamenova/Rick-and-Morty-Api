let prevPage = "";
let nextPage = "";

const bringCharacters = async (url) => {
  const characters = await fetch(
    `${url === "" ? "https://rickandmortyapi.com/api/character/?page=1" : url}`
  );
  const data = await characters.json();

  prevPage = data.info.prev;
  nextPage = data.info.next;

  const cardElements = data.results.map((person) => {
    return `
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="${person.image}" class="card-img-top" alt="${person.id}">
                    <div class="card-body">
                        <h5 class="card-title">${person.name}</h5>
                    </div>
                </div>
            </div>
        `;
  });

  document.getElementById("characters").innerHTML = `
        <div class="row">
            ${cardElements.join("")}
        </div>
    `;
};

bringCharacters("");

let buttons = document.getElementsByTagName("button");

let buttonsArray = Array.from(buttons);

buttonsArray.map((boton) =>
  boton.addEventListener("click", (e) => {
    e.target.id === "p" ? bringCharacters(!prevPage ? "" : prevPage) : bringCharacters(!nextPage ? "" : nextPage);
  })
);