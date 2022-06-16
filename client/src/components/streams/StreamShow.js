import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <h1>loading</h1>;
    }
    const { title, description } = this.props.stream;

    return (
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.stream[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
