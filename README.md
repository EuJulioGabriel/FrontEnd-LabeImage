# Labefy

## Aplicação com funções semelhantes ao Spotify

## Stack
Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML e CSS; 
e o npm como gerenciador de pacotes do NodeJS.
Sobre a divisão dos arquivos, há apenas dois setores. O setor de `components` são 
os componentes em si do meu projeto (Router, PageSignup, PageSearch, PageProfile, PageLogin, PageImagesByCollection, PageFilters, PageFeed, PageCreateImage, PageAllImages, PageAllCollections, NavBar, ModalUpdateCollectionCover, ModalImage, ModalCreateCollection, Header, Footer, CardImage, BarSearch, AddImageToCollection) e o setor de hooks que possui apenas o controle do estado dos inputs do projeto.

## Sobre
Esse foi um dos primeiros projetos que fiz em React.
O projeto consiste em catorze páginas, que simulam o comportamento de uma rede social de imagens. A primeira página, é a página inicial, que possui duas áreas, a primeira área, é onde o usuário pode fazer o seu login, bastando apenas inserir o seu email e senha corretamente e clicando no botão de login e será redirecionado para a pagina do seu feed, e a segunda área consiste na área de transferência para a pagina de cadastro. A página de cadastro é onde o usuário poderá fornecer as informações solicitadas para realizar o cadastro, e os envia clicando no botão de cadastrar, se as informações forem inseridas corretamente, o usuário será cadastrado e redirecionado para a página do seu feed, e também possui no topo da página um botão para voltar a página inicial. A página de feed possui um barra para realizar buscas de usuários e também as últimas imagens postadas pelos usuários que o usuário segue, clicando numa postagem dos usuário você é redirecionado para a página de perfil do usuário. A página de criação de imagem é onde você pode postar a imagem que você deseja compartilhar com os seus seguidores, junto com a legenda e o álbum que deseja inseri-la bem como suas tags. A página de galeria exibe todas as imagens que você inseriu no seu perfil, clicando em uma das imagens, você abre um modal, onde pode ver a imagem em tamanho maior, juntos com as outras informações e pode também inseri-la em um álbum, caso não tenha feito isso quando postou. A página de criação de um álbum, serve para criar um álbum, onde você insere o nome do álbum, descrição e o link da imagem de capa do seu álbum e quando clicado o botão para criar o álbum, o modal se fecha, caso o álbum seja criado com sucesso. A página de álbuns mostra todos os álbuns criados pelo usuário e permite a alteração de capa do álbum, para isto, basta clicar no botão de atualizar capa do álbum, que será aberto um modal, onde você poderá inserir o link da nova imagem de capa e clicando no botão de atualizar o modal é fechado em caso de a modificação ser alterado com sucesso. A página de busca serve para você poder buscar as imagens que você inseriu, com alguns critérios. A página de perfil do usuário é onde você abre o perfil do usuário e você pode ver os álbuns e imagens criados por outros usuários e pode seguir e deixar de seguir o usuário.

Há integrações com uma API externa nesse caso.

## Deploy com Surge

<a href="http://labeimage.surge.sh/">LabeImage</a>

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em 
sua máquina, basta abrir o terminal e navegar até o repositório clonado e 
rodar:

1. `git clone https://github.com/EuJulioGabriel/Labefy.git`
2. `npm install` para instalar todas as dependências;
3. `npm run start` para rodar localmente o projeto
4. `npm run build` para gerar uma versão estática do projeto 
(que ficará na pasta `build`)

## Contato
Julio Gabriel<br>
juliogabriel@outlook.com<br>
<a href="https://www.linkedin.com/in/eujuliogabriel/">Linkedin</a>
