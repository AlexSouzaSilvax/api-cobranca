const express = require("express");

const LoginController = require("./controllers/LoginController");
const TituloController = require("./controllers/TituloController");
const FeedBackController = require("./controllers/FeedBackController");
const TweetController = require("./controllers/TweetController");
const PostController = require("./controllers/PostController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({
    DescricaO: "API app-cobranca",
    Github: "https://github.com/alexsouzasilvax/api-cobranca",
    Twitter: "https://twitter.com/alexsouzasilvax",
    LinkedIn: "https://www.linkedin.com/in/alexsouzasilvax/",
    rotas: [
      {
        //usuario
        Usuarios: [
          {
            listaUsuarios: [
              {
                method: "GET",
                route: "/usuarios"
              }
            ],
            buscarUsuario: [
              {
                method: "POST",
                route: "/usuarios/buscar",
                body: [
                  {
                    login: "login",
                    senha: "senha"
                  }
                ]
              }
            ],
            criarUsuario: [
              {
                method: "POST",
                route: "/usuarios/criar",
                body: [
                  {
                    email: "email",
                    login: "login",
                    senha: "senha"
                  }
                ]
              }
            ],
            atualizarUsuario: [
              {
                method: "POST",
                route: "/usuarios/atualizar",
                body: [
                  {
                    _id: "_id",
                    email: "email",
                    login: "login",
                    senha: "senha"
                  }
                ]
              }
            ],
            esqueciSenha: [
              {
                method: "POST",
                route: "/usuarios/esqueciSenha",
                body: [
                  {
                    email: "email",
                    senha: "senha"
                  }
                ]
              }
            ],
            apagarUsuario: [
              {
                method: "POST",
                route: "/usuarios/apagar",
                body: [
                  {
                    _id: "_id"
                  }
                ]
              }
            ]
          }
        ],
        //titulo
        Titulo: [
          {
            listarTitulos: [
              {
                method: "POST",
                route: "/titulos",
                body: [
                  {
                    _idUsuario: "_idUsuario"
                  }
                ]
              }
            ],
            buscarTitulos: [
              {
                method: "POST",
                route: "/titulos/buscar",
                body: [
                  {
                    _id: "id"
                  }
                ]
              }
            ],
            criarTitulo: [
              {
                method: "POST",
                route: "/titulos/criar",
                body: [
                  {
                    descricao: "descricao",
                    valor: "valor",
                    dataVenc: "dataVenc",
                    status: "status"
                  }
                ]
              }
            ],
            atualizarTitulo: [
              {
                method: "POST",
                route: "/titulos/atualizar",
                body: [
                  {
                    _id: "_id",
                    descricao: "descricao",
                    valor: "valor",
                    dataVenc: "dataVenc",
                    status: "status"
                  }
                ]
              }
            ],
            apagarTitulo: [
              {
                method: "POST",
                route: "/titulos/apagar",
                body: [
                  {
                    _id: "_id"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  });
});

routes.get("/usuarios", LoginController.index); //listar
routes.post("/usuarios/buscar", LoginController.show);
routes.post("/usuarios/criar", LoginController.store);
routes.post("/usuarios/atualizar", LoginController.update);
routes.post("/usuarios/esqueciSenha", LoginController.esqueciSenha);
routes.post("/usuarios/apagar", LoginController.destroy);

routes.post("/titulos", TituloController.index);
routes.post("/titulos/buscar", TituloController.show);
routes.post("/titulos/criar", TituloController.store);
routes.post("/titulos/atualizar", TituloController.update);
routes.post("/titulos/apagar", TituloController.destroy);

routes.get("/feedback", FeedBackController.index);
routes.post("/feedback/criar", FeedBackController.store);

routes.post("/tweets", TweetController.index);
routes.post("/tweets/criar", TweetController.store);
routes.post("/tweets/apagar", TweetController.destroy);

routes.post("/post", PostController.index);
routes.post("/post/criar", PostController.store);
routes.post("/post/atualizar", PostController.update);
routes.post("/post/apagar", PostController.destroy);

module.exports = routes;
