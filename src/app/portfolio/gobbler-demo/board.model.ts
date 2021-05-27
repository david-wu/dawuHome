import { cloneDeep } from 'lodash';

const emptyPiece = {
  player: undefined,
  value: 0,
};

export class Board {
  public static initial = [
    [emptyPiece, emptyPiece, emptyPiece],
    [emptyPiece, emptyPiece, emptyPiece],
    [emptyPiece, emptyPiece, emptyPiece],
  ];
  public static winStates = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  public static createBlank() {
    return Object.assign(new Board(), {
      state: cloneDeep(Board.initial),
    })
  }

  public static createFromState(state) {
    return Object.assign(new Board(), {
      state: state,
    })
  }

  public static checkBoardState(state) {
    for(let i = 0; i < Board.winStates.length; i++) {
      const winState = Board.winStates[i];
      let cell = state[winState[0][0]][winState[0][1]];

      for(let j = 1; j < winState.length; j++) {
        const nextCell = state[winState[j][0]][winState[j][1]];
        if (!nextCell.player || (cell.player !== nextCell.player)) {
          break;
        }
        if (j === 2) {
          return cell.player;
        }
      }
    }
  }


  public state = [];

  public checkBoardState() {
    for(let i = 0; i < Board.winStates.length; i++) {
      const winState = Board.winStates[i];
      let cell = this.state[winState[0][0]][winState[0][1]];

      for(let j = 1; j < winState.length; j++) {
        const nextCell = this.state[winState[j][0]][winState[j][1]];
        if (!nextCell.player || (cell.player !== nextCell.player)) {
          break;
        }
        if (j === 2) {
          return cell.player;
        }
      }
    }
  }

}
