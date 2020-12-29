import React, { Component } from 'react';
import '../index.css';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 8);
    this.setState({ spans });
  };

  render() {
    console.log(this.props.image);
    const { alt_description, urls, likes, links, user } = this.props.image;
    return (
      <div
        className="card-image"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <a rel="noreferrer" target="_blank" href={links.html}>
          <img ref={this.imageRef} src={urls.regular} alt={alt_description} />{' '}
        </a>

        <h4>Shot by: {user.name}</h4>
        <h5>
          Porfolio link:
          <a rel="noreferrer" target="_blank" href={user.portfolio_url}>
            {' '}
            {user.portfolio_url}
          </a>
        </h5>
        <h6>Likes received: {likes}</h6>
      </div>
    );
  }
}

export default ImageCard;
