import Board from "./board";

function equals(arr1, arr2) {
  return (arr1[0] === arr2[0] && arr1[1] === arr2[1])
}

export default class SnakeView {
  constructor($el) {
    this.$el = $el;
    this.board = new Board();
    this.setupKeyBinds();
    setInterval(() => {
      this.step()
    }, 100);
  }

  step () {
    this.board.snake.move();
    this.$el.empty();
    this.render();
  }

  render () {
    for (let i = 0; i < 20; i++) {
      const $ul = $('<ul>')
      for (let j = 0; j < 20; j++) {
        const $li = $('<li>')
        if (
          this.board.snake.segments.filter(segment => equals([j,i], segment)).length
          ) {
            $li.addClass('snake-body')
          }
        $ul.append($li);
      }
      this.$el.append($ul)
    }
  }

  setupKeyBinds() {
    $(document).keydown(e => {
      if (e.keyCode === 38) {
        this.board.snake.turn("N")
      } else if (e.keyCode === 39) {
        this.board.snake.turn("E")
      } else if (e.keyCode === 40) {
        this.board.snake.turn("S")
      } else if (e.keyCode === 37) {
        this.board.snake.turn("W")
      }
    })
  }
}