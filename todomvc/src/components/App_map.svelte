<!-- <script>
    import Polygon from '../assets/cty_bnd.svelte';
</script> -->

<!-- <main>
    <Polygon/>
</main> -->
<!--   
<main>
    <Polygon>
      <text x="50" y="25" class="number">1</text>
      <text x="85" y="50" class="number">2</text>
      <text x="50" y="75" class="number">3</text>
      <text x="15" y="50" class="number">4</text>
    </Polygon>
  </main>
  
  <style>
    .polygon {
      fill: blue;
      stroke: black;
      stroke-width: 2;
      z-index: 1; /* Set a higher z-index for the Polygon */
    }
    
    .number {
      fill: white;
      font-size: 10px;
      font-weight: bold;
      text-anchor: middle;
      z-index: 2; /* Set a higher z-index for the numbers */
    }
  </style> -->
  
  <script>
    import Polygon from '../assets/cty_bnd.svelte';
  
    const data = [
      { id: '01', x: 100, y: 100 },
      { id: '02', x: 200, y: 200 },
      { id: '03', x: 300, y: 300 }
    ];
  </script>
  
  <main>
    <svg viewBox="0 0 800 600">
      <Polygon />
  
      {#each data as item}
        <text
          x={item.x}
          y={item.y}
          font-size="20"
          font-weight="bold"
          text-anchor="middle"
          alignment-baseline="middle"
        >
          {item.id}
        </text>
      {/each}
    </svg>
  </main>

<!-- <style>
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap");

    :root {
        --color-bg: #ffffff;
        --color-outline: #c2c2c2;
        --color-shadow: hsl(0, 0%, 0%, 0.1);
        --color-text: #3f4252;
        --color-bg-1: hsla(0, 0%, 0%, 0.2);
        --color-shadow-1: hsl(0, 0%, 96%);
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    main {
        text-align: center;
        font-family: "Nunito", sans-serif;
        font-weight: 300;
        line-height: 2;
        font-size: 24px;
        color: var(--color-text);
        margin-top: 80px;
    }
    h1 {
        font-size: 52px;
        font-weight: 300;
        line-height: 2;
    }

    h2 {
        font-size: 40px;
        font-weight: 300;
        line-height: 1.5;
    }

</style> -->