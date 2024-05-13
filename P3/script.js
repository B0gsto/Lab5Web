var boardSize = 6; // numărul de celule pe fiecare linie și coloană
        var totalPairs = (boardSize * boardSize) / 2; // numărul total de perechi
        var gameBoard = $('#gameBoard');
        var revealedCells = 0;
        var firstCell = null;
        var secondCell = null;
        var isTimeoutActive = false; // Noua variabilă pentru a verifica dacă timeout-ul este activ

        // Crearea matricei de perechi de numere
        var numbers = [];
        for (var i = 1; i <= totalPairs; i++) {
            numbers.push(i);
            numbers.push(i);
        }

        // Amestecarea matricei de numere
        numbers.sort(() => Math.random() - 0.5);

        // Crearea tabelului de joc
        for (var i = 0; i < boardSize; i++) {
            var row = $('<tr></tr>');
            for (var j = 0; j < boardSize; j++) {
                var cell = $('<td></td>').data('value', numbers[i * boardSize + j]).data('clicked', false).click(cellClickHandler);
                row.append(cell);
            }
            gameBoard.append(row);
        }

        function cellClickHandler() {
            if (isTimeoutActive || $(this).data('clicked')) return; // Verificare dacă timeout-ul este activ sau dacă celula a fost deja selectată

            $(this).text($(this).data('value')).data('clicked', true);

            if (firstCell === null) {
                firstCell = $(this);
            } else {
                secondCell = $(this);
                if (firstCell.data('value') === secondCell.data('value')) {
                    firstCell = null;
                    secondCell = null;
                    revealedCells += 2;
                    if (revealedCells === totalPairs * 2) {
                        alert('Felicitări! Ai câștigat!');
                    }
                } else {
                    isTimeoutActive = true; // Setăm timeout-ul ca activ
                    setTimeout(function () {
                        firstCell.text('').data('clicked', false);
                        secondCell.text('').data('clicked', false);
                        firstCell = null;
                        secondCell = null;
                        isTimeoutActive = false; // Setăm timeout-ul ca inactiv după expirarea timpului
                    }, 2000);
                }
            }
        }