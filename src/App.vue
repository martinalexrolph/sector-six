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
  width: 100%;
  margin: 0;
  height: 100%;
  line-height: 1.3;
  font-size: 20px;
}

/* body:after {
  content: '';
  position: absolute;
  top:0px;
  left:0px;
  right:0px;
  bottom:0px;
  z-index:1000;
  background: repeating-linear-gradient(0deg, #111 0px, #111 1px, transparent 2px, transparent 5px);
  background-size:100% 5px;
  animation: lines 3s ease-in-out infinite;
  opacity:0.3;
  mix-blend-mode: color-burn;
  pointer-events: none;
}

@keyframes lines {
   0% {
      background-position:0px 0px;
   }
   100% {
      background-position:0px 25px;
   }
} */

html, body {
  margin: 0;
  height: 100%;
  background: #333;
  color: #fff;
  text-shadow: 0px 0px 6px #49ff4e70;
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
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
