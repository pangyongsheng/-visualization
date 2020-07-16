<!--
 * @Author       : your name
 * @Date         : 2020-04-09 11:33:59
 * @LastEditTime : 2020-07-16 17:38:40
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\App.vue
--> 
<template>
  <div id="app">
    <el-container>
      <el-header>
        <headerList/>
      </el-header>
      <div class="cont">
        <el-aside width="220px">
          <listNav />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </div>
    </el-container>
  </div>
</template>
<script>
import listNav from "./views/page/navList";
import headerList from "./views/header"
export default {
  name: "app",
  components: { listNav, headerList }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
body,
html,
#app, .el-container,.el-aside{
  height: 100%;
}
.cont{
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: auto;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/* custom */
.el-aside::-webkit-scrollbar {
  display: none;
}
#app .el-header{
  padding: 0;
}

</style>
