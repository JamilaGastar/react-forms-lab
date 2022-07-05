import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tweetText: "",
      maxChars: props.maxChars,
    };
  }

  handleInput = (event) => {
    this.setState({
      tweetText: event.target.value,
    })
  }

  render() {
    console.log(this.state.tweetText)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweetText} onChange={this.handleInput} />
        <p>Remaining chars: {this.props.maxChars - this.state.tweetText.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
