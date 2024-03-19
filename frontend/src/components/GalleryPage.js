import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const images = [
  {
    original: 'images/2022-hike-with-friend.jpeg',
    thumbnail: 'images/2022-hike-with-friend.jpeg',
    description: 'A scenic view of a friend sitting on a rock, looking away from Lake 22.',
  },
  {
    original: 'images/2022-hike-lake-22.jpg',
    thumbnail: 'images/2022-hike-lake-22.jpg',
    description: 'A scenic view of me sitting on the same rock, looking away from Lake 22.',
  },
  {
    original: 'images/colombia-guatape-piedra-el-penol.jpg',
    thumbnail: 'images/colombia-guatape-piedra-el-penol.jpg',
    description: 'A view from the bottom of the big rock, Piedra el Penol in Colombia, before summiting the rock.',
  },
  {
    original: "images/medellin-football-stadium.jpeg",
    thumbnail: "images/medellin-football-stadium.jpeg",
    description: "Atanasio Girardot Stadium in Medellín, Colombia.",
  },
  {
    original:"images/soccer-drill.jpg",
    thumbnail: "images/soccer-drill.jpg",
    description: "Left foot on soccer ball with blue cones in a straight line for left foot drills.",
  },
  {
    original:"images/2022-qfc-fc-rats-league-soccer.jpg",
    thumbnail: "images/2022-qfc-fc-rats-league-soccer.jpg",
    description: "QFC FC soccer team picture before a soccer game.",
  },
  {
    original:"images/guitar-setup.jpg",
    thumbnail:"images/guitar-setup.jpg",
    description: "A set-up of a guitar and an amp, with the guitar leaning on the amp.",
  },
  {
    original:"images/playing-guitar.jpeg",
    thumbnail:"images/playing-guitar.jpeg",
    description: "I am pictured here playing and practicing guitar, a favorite home hobby.",
  },
  {
    original:"images/coding-chessboard-setup.png",
    thumbnail:"images/coding-chessboard-setup.png",
    description: "My code design for playing chess. Pictured are the pieces set in place for a game.",
  },
  {
    original:"images/moved-coding-chess-pieces.png",
    thumbnail:"images/moved-coding-chess-pieces.png",
    description: "My code design for playing chess. Pictured are the pieces set in positions to win the game.",
  },
  {
    original:"images/coding-program-to-optimize-guitar-practice-sessions.png",
    thumbnail:"images/coding-program-to-optimize-guitar-practice-sessions.png",
    description: "Perhaps my favorite project that I am working on so far. A program to help me practice the guitar efficiently!",
  },
];

function Gallery() {
  return (
   
    <article className="gallery">
    <ImageGallery items={images} />
  </article>
   
  );
}

export default Gallery