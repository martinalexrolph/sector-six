<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/game">Game</router-link>
  </div>
  <router-view/>
</template>

<style>

@font-face {
  font-family: "Source Code Pro";
  src: url("./fonts/SourceCodePro-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Source Code Pro";
  src: url("./fonts/SourceCodePro-Italic.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: "Source Code Pro";
  src: url("./fonts/SourceCodePro-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Source Code Pro";
  src: url("./fonts/SourceCodePro-BoldItalic.ttf") format("truetype");
  font-weight: 700;
  font-style: italic;
}

#app {
  font-family: "Source Code Pro", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  width: 100%;
  margin: 0;
  height: 100%;
  line-height: 1.3;
  font-size: 20px;
}

html, body {
  margin: 0;
  height: 100%;
  background: #333;
}

* {
  box-sizing: border-box;
}

#nav {
  position: absolute;
  padding: 10px;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #eee;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
