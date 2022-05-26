import * as React from "react";
import { Card } from "react-bootstrap/";

// App images
import FunTime from "../images/Don't get bored.png.png";
import Scheduler from "../images/daily-scheduler (2).png";
import PasswordGenerator from "../images/password-generator.png.png";
import GameRec from '../images/gameRec.png.png';
import BookSearch from '../images/BookSearch.png';
import NOTED from '../images/NOTED.png'

const sampleProjects = [
    {
        id: 1,
    title: "Don't get bored",
    imagePath: FunTime,
    page: "LIVE",
    pageURL: "https://chandrapanda.github.io/MXC-team//",
    repo: "REPO",
    repoURL: "https://github.com/chandrapanda/MXC-team",
    },

    {
        id: 2,
    title: "Password-generator",
    imagePath: PasswordGenerator,
    page: "LIVE",
    pageURL: "https://nderingo.github.io/Password-generator/",
    repo: "REPO",
    repoURL: "https://github.com/Nderingo/Password-generator",
    },
    
    {
        id: 3,
    title: "Daily-scheduler",
    imagePath: Scheduler,
    page: "LIVE",
    pageURL: "https://nderingo.github.io/Daily-Scheduler/",
    repo: "REPO",
    repoURL: "https://github.com/Nderingo/Daily-Scheduler",
    
    },

    {
        id: 4,
    title: "gameRec",
    imagePath: GameRec,
    page: "LIVE",
    pageURL: "https://gamrec-project.herokuapp.com/",
    repo: "REPO",
    repoURL: "https://github.com/chriskimball/gameRec",
    },

    {
      id: 5,
  title: "Book Search",
  imagePath: BookSearch,
  page: "LIVE",
  pageURL: "https://book-searched.herokuapp.com/",
  repo: "REPO",
  repoURL: "https://github.com/Nderingo/BOOK-SEARCH-ENGINE",
  },

  {
    id: 6,
title: "Note Taker",
imagePath: NOTED,
page: "LIVE",
pageURL: "https://notedy.herokuapp.com/notes",
repo: "REPO",
repoURL: "https://github.com/Nderingo/NOTED",
},
];

export default function Projects() {
    return (
      <section className="container d-flex justify-content-center">
      {/* <section className="samples-container vw-100"> */}
  
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
  
            {sampleProjects.map((item) => (
                <Card key={item.id} 
                // style={{ width: "18rem" }}
                className="p-3"
                // className="row col-md-3 m-4 sample-card"
                >
                  <Card.Img variant="top" src={item.imagePath} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link href={item.pageURL}>{item.page}</Card.Link>
                    <Card.Link href={item.repoURL}>{item.repo}</Card.Link>
                  </Card.Footer>
                </Card>
                ))}
                
        </div>
  
      </section>
    );
  }