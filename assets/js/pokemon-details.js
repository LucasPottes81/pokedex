const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('pokemon');

if (pokemonId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response) => response.json())
        .then((pokemon) => {
            const pokemonDetails = document.getElementById('pokemonDetails');
            const pokemonName = document.getElementById('pokemonName');
            const pokemonSection = document.getElementById('pokemonSection');

            // Setando o nome do Pokémon
            pokemonName.textContent = pokemon.name;

            // Pegando os tipos
            const types = pokemon.types.map((type) => type.type.name);

            // Aplicando cor de fundo com base no primeiro tipo
            if (types.length > 0) {
                pokemonSection.classList.add(types[0]);
            }

            // Preenchendo os detalhes
            pokemonDetails.innerHTML = `
                <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
                <p><strong>Number:</strong> #${pokemon.id}</p>
                <p><strong>Name:</strong> ${pokemon.name}</p>
                <p><strong>Type:</strong> ${types.join(', ')}</p>
                <p><strong>Height:</strong> ${pokemon.height / 10} m</p>
                <p><strong>Weight:</strong> ${pokemon.weight / 10} kg</p>
            `;
        })
        .catch((error) => {
            console.error('Erro ao carregar os detalhes do Pokémon:', error);
        });
}
