const element = React.createElement;

class VisitContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  incrementCounter(counter) {
    this.setState({
      counter: counter + 1
    })
  }

  render() {
    return element(
      'div',
      null,
      [
        element(
          'div',
          null,
          element(
            'img',
            {
              src: 'http://thecatapi.com/api/images/get?format=src&size=small&count=' + this.state.counter,
              alt: 'meow',
              className: 'cat-img',
              key: 1
            },
            null
          )
        ),
        element(
          'button',
          { onClick: () => this.incrementCounter(this.state.counter), className: 'button' },
          'Click on me to see cat :)'
        )
      ]
    );
  }
}

ReactDOM.render(
  element(VisitContainer), document.getElementById('root')
);
