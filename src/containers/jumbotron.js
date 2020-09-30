import React from "react";
import { Jumbotron } from "../components";
import jumboData from "../fixtures/jumbo.json";

export default function JumbotronContainer() {
  return (
    <Jumbotron.container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.container>
  );
}

// 1h01p01s
