<template>
 <div class="app">
    <router-view/>
</div>
</template>

<style lang="less">
html{
  font-size:16px;
}
.app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2a2a2a;
}
@media (max-width:1280px) {
  html{
    font-size:14px;
  } 
}
@media (max-width:992px) {
  html{
    font-size:12px;
  } 
}
@media (max-width:767px) {
  html{
    font-size:10px;
  } 
}
</style>
