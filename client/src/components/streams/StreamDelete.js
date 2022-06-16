import React, { Component, useEffect } from "react";
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";

class StreamDelete extends Component {
  // called bcz if page is refreshed than we can get data
  // from api by passing id getting in url as params in props
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          DELETE
        </button>
        <Link to="/" className="ui button ">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to Delete this stream?";
    }
    return (
      <p>
        Are you sure you want to Delete stream with title:{" "}
        <b style={{ color: "red" }}> {this.props.stream.title}</b>
      </p>
    );
  }

  // render

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.stream[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
