import React, { Component } from "react";
import Brickwork from "react-brickwork";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const style = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "300px"
};

// const imgStyle = {
//   position: "absolute",
//   top: "0px",
//   width: "100%"
// };

export default class App extends Component {
  render() {
    return (
      <Brickwork gap={[2, 2, 3]} itemsPerRow={[2, 3]}>
        {cardData.map(({ id, title, image }) => (
          <div key={id} style={{ ...style, background: getRandomColor() }}>
            <h3>{title}</h3>
            {/* <img src={image} alt="title" style={imgStyle} /> */}
          </div>
        ))}
      </Brickwork>
    );
  }
}

const cardData = [
  {
    id: "1",
    title: "Twinkling Slave",
    image:
      "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "2",
    title: "The Forgotten Stream",
    image:
      "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "3",
    title: "Map Apps for the Superior Mode of Transport",
    image:
      "https://images.unsplash.com/photo-1498019559366-a1cbd07b5160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "4",
    title: "Servant of Touch",
    image:
      "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "5",
    title: "The Snake's Way",
    image:
      "https://images.unsplash.com/photo-1505480449763-8f5c78af9caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "6",
    title: "The Slave of the Wizards",
    image:
      "https://images.unsplash.com/photo-1497751770456-d8af337e01d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "7",
    title: "Angel in the Princess",
    image:
      "https://images.unsplash.com/photo-1517767563817-315c7d9c06bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "8",
    title: "The Forgotten Game",
    image:
      "https://images.unsplash.com/photo-1519638617638-c589a8ba5b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "9",
    title: "The Forgotten Game",
    image:
      "https://images.unsplash.com/photo-1519638617638-c589a8ba5b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  }
];
