<template>
  <div>
    <span>head</span>
    <div class="wrapper">
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
      <div class="four item">Four</div>
      <div class="five item">Five</div>
      <div class="six item">Six</div>
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
      <div class="four item">Four</div>
      <div class="five item">Five</div>
      <div class="six item">Six</div>
    </div>
    <span>foot</span>
    <div class="wrapper2">
      <header>Header</header>
      <nav>Navigation</nav>
      <main>Main area</main>
      <footer>Footer</footer>
    </div>
    <div class="wrapper3">
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
      <div class="four item">Four</div>
      <div class="five item">Five</div>
      <div class="six item">Six</div>
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
    </div>
    <div class="wrapper4">
      <div id="item1"></div>
      <div id="item2"></div>
      <div id="item3"></div>
      <div id="item4"></div>
      <div id="item5"></div>
    </div>
  </div>
</template>

<script>
</script>
<style lang='scss' scoped>
.wrapper {
  margin: 60px;
  /* 声明一个容器 */
  display: grid;
  /*  声明列的宽度  */
  grid-template-columns: 1fr 1fr minmax(300px, 2fr);
  /*  声明行间距和列间距  */
  grid-gap: 20px;
  /*  声明行的高度  */
  grid-template-rows: repeat(4, 100px);
}
.one {
  background: #19caad;
}
.two {
  background: #8cc7b5;
}
.three {
  background: #d1ba74;
}
.four {
  background: #bee7e9;
}
.five {
  background: #e6ceac;
}
.six {
  background: #ecad9e;
}
.item {
  text-align: center;
  font-size: 200%;
  color: #fff;
}
.wrapper2 {
  display: grid;
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 15px 1fr;
  grid-template-areas:
    "head head"
    "nav main"
    "nav foot";
  header {
    grid-area: head; /* 4. 指定当前元素所在的区域位置, 从grid-template-areas选取值 */
    background-color: #8ca0ff;
  }

  nav {
    grid-area: nav;
    background-color: #ffa08c;
  }

  main {
    grid-area: main;
    background-color: #ffff64;
  }

  footer {
    grid-area: foot;
    background-color: #8cffa0;
  }
}
.wrapper3 {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 100px 500px 100px;
  grid-auto-flow: row;
  grid-gap: 5px;
  grid-auto-rows: 50px;
}
.wrapper4{
	margin: 30px;
	height: 200px;
  width: 200px;
  display: grid;
  grid-gap: 10px;
  grid-template: repeat(4, 1fr) / repeat(3, 1fr);
  grid-auto-flow: column dense;  /* or 'row', 'row dense', 'column dense' */
	#item1 {
		background-color: lime;
		// grid-row-start: 3;
	}

	#item2 {
		background-color: yellow;
	}

	#item3 {
		background-color: blue;
	}

	#item4 {
		// grid-column-start: 2;
		background-color: red;
	}

	#item5 {
		background-color: aqua;
	}
}
</style>