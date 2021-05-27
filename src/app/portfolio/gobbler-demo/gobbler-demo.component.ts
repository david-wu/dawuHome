import {
  Component,
} from '@angular/core';

import { Board } from './board.model';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'dwu-gobbler-demo',
  templateUrl: './gobbler-demo.component.html',
  styleUrls: ['./gobbler-demo.component.scss'],
})
export class GobblerDemoComponent {

  constructor() {
    const board = Board.createBlank();
    // const pieces = [3, 3, 2, 2, 1, 1];
    const pieces = [3, 2, 1];
    const p1Pieces = this.getPlayerPieces('p1', pieces);
    const p2Pieces = this.getPlayerPieces('p2', pieces);

    // board.state[2][0] = p2Pieces[0];
    // board.state[2][1] = p2Pieces[0];
    // board.state[2][2] = p2Pieces[0];
    // console.log('winner', board.checkBoardState())
    const now = Date.now();
    const move = this.checkNextMove(board.state, true, p1Pieces, p2Pieces, 0);
    console.log("move", move, Date.now() - now)

  }

//(9*3)^4 = 531441
  public checkNextMove(boardState, isP1Turn, p1Pieces, p2Pieces, turn = 0) {
    const winner = Board.checkBoardState(boardState);
    if (winner === 'p1') {
      return [{}];
    }
    if (winner === 'p2') {
      return [];
    }
    if (turn > 3) {
      return [];
    }

    const pieces = isP1Turn ? p1Pieces : p2Pieces;
    const goodMoves = [];
    for(let i = 0; i < boardState.length; i++) {
      const row = boardState[i];
      for(let j = 0; j < row.length; j++) {
        const cell = row[j];
        for(let k = 0; k < pieces.length; k++) {
          const piece = pieces[k];

          if (piece.value > cell.value) {
            const nextPieces = [
              ...pieces.slice(0, k),
              ...pieces.slice(k + 1),
            ];
            const nextBoardState = [...boardState];
            nextBoardState[i] = [...boardState[i]];
            nextBoardState[i][j] = piece;

            if(isP1Turn) {
              const res = this.checkNextMove(nextBoardState, false, nextPieces, p2Pieces, turn + 1);
              if (res.length) {
                goodMoves.push([i, j, piece])
              }
              // Every possible next move most still be winnable
            } else {
              this.checkNextMove(nextBoardState, true, p1Pieces, nextPieces, turn + 1);
            }
          }

        }
      }
    }
    return goodMoves;
  }

  public getPlayerPieces(player, pieces) {
    return pieces.map((piece) => {
      return {
        player: player,
        value: piece,
      };
    });
  }

}