<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
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
  background: #222;
  color: #fbfbfb;
  text-shadow: 0px 0px 8px #49ff4e90;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease-in-out;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.99);
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
  animation: move 3s linear infinite, flicker 1s ease-in-out infinite;
  mix-blend-mode: color-burn;
  pointer-events: none;
}

@keyframes move {
   0% {
      background-position:0px 0px;
   }
   100% {
      background-position:0px 20px;
   }
}

@keyframes flicker {
   0% {
      opacity: 0.2;
   }
   100% {
      opacity: 0.3;
   }
} */
</style>
