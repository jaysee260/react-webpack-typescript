import * as React from 'react';

export interface State {
  count: number;
}

export interface AppProps {
  compiler: string;
  framework: string;
}

export default class App extends React.Component<AppProps, State> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      count: 0
    };

    this.increaseCount  = this.increaseCount.bind(this);
    this.decreaseCount  = this.decreaseCount.bind(this);
    this.resetCount     = this.resetCount.bind(this);
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  decreaseCount() {
    this.setState({ count: this.state.count - 1 });
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return(
      <div id="main">
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
        <p>
          This is the entry point to our React and TypeScript application.
        </p>
        <p>Count: {this.state.count}</p>
        <button className='btn' onClick={this.increaseCount}>Increase Count</button>
        <button className='btn' onClick={this.decreaseCount}>Decrease Count</button>
        <button className='btn' onClick={this.resetCount}>Reset Count</button>
      </div>
    )
  }
}
