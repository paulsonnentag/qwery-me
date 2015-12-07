import _ from 'lodash';
import React from 'react';


export default class Deferred extends React.Component {

  constructor () {
    super();

    this.state = {loading: true};
  }

  waitForData () {
    const {promise} = this.props;
    const timestamp = Date.now();

    if (promise) {
      this.setState({timestamp, loading: true});
      promise.then((data) => {
        if (this.state.timestamp === timestamp) {
          this.setState({data, loading: false})
        }
      });
    }
  }

  componentDidMount () {
    this.waitForData();
  }

  componentWillReceiveProps () {
    this.waitForData();
  }

  render () {
    const {children} = this.props;
    const {loading, data} = this.state;

    if (children.length !== 2) {
      throw new Error (`Deferred expected 2 children, instead got ${children.length}`);
    }

    if (loading) {
      return children[0]; // display loader
    }

    // diplay actual content
    return (
      <div>
        {React.cloneElement(children[1], data)}
      </div>
    );
  }
}