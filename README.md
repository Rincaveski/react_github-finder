Primeiro projeto feito com TypeScript. O projeto foi feito na aula do Matheus Battisti [Video][https://www.youtube.com/watch?v=3sQITRihW_A]

Neste projeto foi abortado react, ts, e css modules.

Css modules é uma forma de escrever css que não vai afetar outros componentes, pois ele cria um hash para cada classe css.
Para criar um modulo css, basta criar um arquivo css e adicionar o sufixo .module.css, exemplo ``styles.module.css.``
Para importar o css, basta importar o arquivo css e chamar a classe css que deseja usar. exemplo

```js
import styles from './styles.module.css';

<div className={styles.container}>
    <h1>Olá mundo</h1>
```

```css
.container {
    background-color: red;
}
```

Para rodar o projeto, basta rodar o comando ``npm run dev``

Para criar um projeto com typescript, basta rodar o comando ``npm create vite@latest nome_do_projeto --template react-ts``