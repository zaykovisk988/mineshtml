var originalImages = {};
var countdown = 120; // Tempo em segundos (2 minutos)
var countdownSpan = document.getElementById("countdown");

function changeImages() {
    var cells = document.querySelectorAll("td");
    var randomCells = getRandomCells(cells, 6);

    // Restaurar imagens anteriores
    for (var cellId in originalImages) {
        var originalImage = originalImages[cellId];
        var cell = document.getElementById(cellId);
        var image = cell.querySelector("img");
        image.src = originalImage;
    }

    // Definir novas imagens e armazenar as originais
    for (var i = 0; i < randomCells.length; i++) {
        var cell = randomCells[i];
        var cellId = cell.id;
        var image = cell.querySelector("img");

        // Armazenar a imagem original antes de alterá-la
        originalImages[cellId] = image.src;

        // Definir nova imagem
        image.src = "img/star01.png";
    }
}

function updateCountdown() {
    countdown--; // Reduzir o contador em 1 segundo

    if (countdown < 0) {
        countdown = 120; // Reiniciar o contador para 2 minutos (120 segundos)
        changeImages(); // Chamar a função changeImages quando o contador chegar a zero
    }

    countdownSpan.textContent = formatTime(countdown); // Atualizar o valor do contador no HTML
}

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

setInterval(updateCountdown, 1000); // Executar a função updateCountdown a cada segundo

function getRandomCells(cells, count) {
    var randomCells = [];
    var cellCount = cells.length;

    if (count > cellCount) {
        count = cellCount;
    }

    while (randomCells.length < count) {
        var randomIndex = Math.floor(Math.random() * cellCount);
        var randomCell = cells[randomIndex];

        if (!randomCells.includes(randomCell)) {
            randomCells.push(randomCell);
        }
    }

    return randomCells;
}
updateCountdown();
changeImages(); // Chamar a função changeImages quando a página carregar