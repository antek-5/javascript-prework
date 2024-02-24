

function playGame(playerInput)
{
    clearMessages();

    // FUNKCJE WEWNĘTRZNE
    function getMoveName(argMoveId)
    {
        if(argMoveId == 1)
        {
        return 'kamień';
        }
        else if(argMoveId == 2)
        {
            return 'papier';
        }
        else if(argMoveId == 3)
        {
            return 'nożyce';
        }
        else
        {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }

    function displayResult(argComputerMove, argPlayerMove)
    {
        if(argComputerMove == argPlayerMove)
        {
            printMessage('Zagrałem ' + argComputerMove + ', tak samo jak Ty.');
            printMessage('Remis!');
        }
        else
        {
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
        }

        if( argComputerMove == 'kamień' && argPlayerMove == 'papier')
        {
            printMessage('Ty wygrywasz!');
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce')
        {
            printMessage('Przegrałeś! :(');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'kamień')
        {
            printMessage('Przegrałeś! :(');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce')
        {
            printMessage('Ty wygrywasz!');
        }
        else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
        {
            printMessage('Ty wygrywasz!');
        }
        else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier')
        {
            printMessage('Przegrałeś! :(');
        }
        else if( argPlayerMove == 'nieznany ruch')
        {
            printMessage(':(');
        }
    }
    //

    // RUCH KOMPUTERA
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);

    // RUCH GRACZA
    let playerMove = getMoveName(playerInput);

    // WYNIK
    displayResult(computerMove, playerMove);
}


// KOD 

document.getElementById('play-rock').addEventListener('click',
    function()
    {
        playGame(1);
    }
);

document.getElementById('play-paper').addEventListener('click',
    function()
    {
        playGame(2);
    }
);

document.getElementById('play-scissors').addEventListener('click',
    function()
    {
        playGame(3);
    }
);