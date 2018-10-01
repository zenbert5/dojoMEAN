                gameBoard = '<table class="table table-bordered text-center"><thead class="bg-info"><tr>';
                gameBoard += '<th scope="col">'+trivia[0].category+'</th>';
                gameBoard += '<th scope="col">'+trivia[1].category+'</th>';
                gameBoard += '<th scope="col">'+trivia[2].category+'</th></tr></thead>';

                gameBoard += '<tbody>';
                for (var i=0; i<5; ++i) {
                    gameBoard += '<tr>';
                    for (var j=0; j<3; ++j) {
                        gameBoard += '<td>'+data[j][i].question+'</td>';
                    }
                    gameBoard += '</tr>';
                }
                gameBoard += '</tbody>'; 