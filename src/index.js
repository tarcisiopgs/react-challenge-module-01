import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "./Header";
import Post from "./Post";
import "./style.scss";
import User from "./user.png";

class App extends Component {
  state = {
    title: "RocketBook",
    posts: [
      {
        author: {
          name: "Tarcísio Pedro",
          image: User
        },
        published: "há 10 horas",
        content:
          "<p>13 anos afundando o nosso pais na miséria, tudo contra o povo. Pra você vencer o mal você não retribui o mal com mal. Mas eu tenho algo muito importante pra falar pra nação brasileira:</p><p>Vocês já estão em todos os Estados da nação. O grande problema que a nação está enfrentando hoje é a falta de amor. Chega, chega, chega!</p><p>Vocês já estão em todos os Estados da nação. Eu quero dizer, deputado Jean Wyllys, que eu te amo irmão. Mas falar que eu te amo é muito simples, eu quero dizer irmão, que Jesus Cristo te ama. O grande problema que a nação está enfrentando hoje é a falta de amor.</p><p>É Satanás contra a nação brasileira. Somos o único país onde não existe o voto impresso. A urna eletrônica, o que o senhor tem a falar delas?</p><p>Em nome do Senhor Jesus. Chega, chega, chega! O espírito santo tem tocado o teu coração!</p>"
      },
      {
        author: {
          name: "Tarcísio Pedro",
          image: User
        },
        published: "há 10 horas",
        content:
          "<p>13 anos afundando o nosso pais na miséria, tudo contra o povo. Pra você vencer o mal você não retribui o mal com mal. Mas eu tenho algo muito importante pra falar pra nação brasileira:</p><p>Vocês já estão em todos os Estados da nação. O grande problema que a nação está enfrentando hoje é a falta de amor. Chega, chega, chega!</p><p>Vocês já estão em todos os Estados da nação. Eu quero dizer, deputado Jean Wyllys, que eu te amo irmão. Mas falar que eu te amo é muito simples, eu quero dizer irmão, que Jesus Cristo te ama. O grande problema que a nação está enfrentando hoje é a falta de amor.</p><p>É Satanás contra a nação brasileira. Somos o único país onde não existe o voto impresso. A urna eletrônica, o que o senhor tem a falar delas?</p><p>Em nome do Senhor Jesus. Chega, chega, chega! O espírito santo tem tocado o teu coração!</p>"
      },
      {
        author: {
          name: "Tarcísio Pedro",
          image: User
        },
        published: "há 10 horas",
        content:
          "<p>13 anos afundando o nosso pais na miséria, tudo contra o povo. Pra você vencer o mal você não retribui o mal com mal. Mas eu tenho algo muito importante pra falar pra nação brasileira:</p><p>Vocês já estão em todos os Estados da nação. O grande problema que a nação está enfrentando hoje é a falta de amor. Chega, chega, chega!</p><p>Vocês já estão em todos os Estados da nação. Eu quero dizer, deputado Jean Wyllys, que eu te amo irmão. Mas falar que eu te amo é muito simples, eu quero dizer irmão, que Jesus Cristo te ama. O grande problema que a nação está enfrentando hoje é a falta de amor.</p><p>É Satanás contra a nação brasileira. Somos o único país onde não existe o voto impresso. A urna eletrônica, o que o senhor tem a falar delas?</p><p>Em nome do Senhor Jesus. Chega, chega, chega! O espírito santo tem tocado o teu coração!</p>"
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <Header title={this.state.title} />
        <div className="container">
          <Post posts={this.state.posts} />
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
