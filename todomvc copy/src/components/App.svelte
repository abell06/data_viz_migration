<script>

    //import { width, height, numExpandedIndividuals } from '../components/stores.js';
	//let data = d3.csv('https://raw.githubusercontent.com/tututwo/svelte-tutorial-heatmap/main/src/data/data.csv')
    import data from '../components/irregularviolence.json';
    console.log(data);
    console.log(data.violence_strings);
    //import {all_violence_strings} from '../components/irregularviolence.json';
    //let data = [0,1,2,3,4,5,6,7,8,9,10,11, 12, 13, 14, 15, 16, 17];
    //let rest_of_data = [0,1,2,3,4,5,6,7,8];
    let rest_of_data = new Array(932);
    let hovered = -1;
    let recorded_mouse_position = {
		x: 0, y: 0
	};


    let todos = [
        { id: "0", text: "Learn Svelte", completed: false },
        { id: "1", text: "Finish Lab", completed: false },
    ];


      // Adjust scales to dimensions
    //$: individualRowScale = d3.scaleLinear()
    //    .domain([0, data.length])
    //    .range([$width / 100, $width]);
    //$: data

    let colour = 'red';
	
	function handleMouseOver(e) {
		colour = 'green';
	}
	function handleMouseOut(e) {
		colour = 'red';
	}
</script>


<main>

    <h2 style="margin-top: 5px">The survey asked whether each migrant had experienced any form of violence on their journey. Of the 1249 "irregular" migrants included, 317 reported at least one type of violence experienced. </h2>

    <section class="humans">
        <h3 style="margin-top: 10px">Migrants reporting violence</h3>
        {#each data as individual}
        <svg width=200 height=200 class="person" viewBox="-100 -100 200 200">
            <g>
                <circle
                cx="-0"
                cy="-45"
                r="28"
                fill=	#800000
                stroke=#800000
                stroke-width="2"
                />
                <line x1="0" y1="-25" x2="0" y2="30" stroke=#800000 stroke-width="10"/>
                <line x1="0" y1="30" x2="20" y2="65" stroke=#800000 stroke-width="10"/>
                <line x1="0" y1="30" x2="-20" y2="65" stroke=#800000 stroke-width="10"/>
                <line x1="-20" y1="5" x2="20" y2="5" stroke=#800000 stroke-width="10"/>
                <rect x="-100" y="-100" width="200" height="200" fill = "blue" opacity= 0
                on:mouseover={(event) => { hovered = individual; 
                    recorded_mouse_position = {
                                x: event.pageX,
                                y: event.pageY}}}
                    on:mouseout={(event) => { hovered = -1; }}/>

            </g>

          </svg>
          <div
          class={hovered === -1 ? "tooltip-hidden": "tooltip-visible"}	
          style="left: {recorded_mouse_position.x + 20}px; top: {recorded_mouse_position.y + 20}px"
      >
          {#if hovered !== -1}
              Type of violence reported: {hovered.violence_strings} 
          {/if}
      </div>
  
          {/each}
    </section>

    <section class="dots">
        <h3 style="margin-top: 10px">Migrants not reporting violence</h3>
        {#each rest_of_data as individual, i}
        <svg width=100 height=100 class="dot" viewBox="-100 -100 200 200">
            <circle
              cx="-0"
              cy="-45"
              r="28"
              fill=	#808080
              stroke=#808080
              stroke-width="2"
            />
          </svg>
          {/each}
    </section>

</main>

<style>
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

    /* .humans {
        align-items: flex-start;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(160px, 1fr));
        display: flex;
        height: 300px;
        width: 500px;
        background: blue;
        flex-wrap: wrap;
        flex-direction: row;
    } */
    /* .person {
        flex-grow: 0;
        flex-shrink: 0;
        flex: 0 1 10%;
    } */

    .person {
        height: 40px;
        width: 40px;
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    g:hover {
        opacity: 0.5;
        cursor:pointer;
    }
    .dot {
        height: 20px;
        width: 20px;
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-delay: 100ms;
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

    label,
    input,
    button {
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
        font-size: 24px;
        width: 100%;
    }

    input {
        padding-left: 20px;
        line-height: 72px;
        font-style: italic;
        border: none;
    }

    ::placeholder {
        color: #9e9e9e;
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

    .todos {
        display: inline-block;
        vertical-align:top;
        width: 500px;
        background-color: var(--color-bg);
        border-radius: 5px;
        border: 1px solid var(--color-outline);
        box-shadow: 0 0 4px var(--color-shadow);
    }

    .graph {
        display: inline-block;
        margin-left: 50px;
    }

    .actions {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .actions:before {
        content: "";
        height: 40px;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        box-shadow: 0 1px 1px var(--color-shadow-1), 0 8px 0 -3px var(--color-shadow-1),
            0 9px 1px -3px var(--color-bg-1), 0 16px 0 -6px var(--color-shadow-1),
            0 17px 2px -6px var(--color-bg-1);
        z-index: -1;
    }
    	/* dynamic classes for the tooltip */
	.tooltip-hidden {
		visibility: hidden;
		font-family: "Nunito", sans-serif;
		width: 200px;
		position: absolute;
	}

	.tooltip-visible {
		font: 15px sans-serif;
		font-family: "Nunito", sans-serif;
		visibility: visible;
		background-color: #f0dba8;
		border-radius: 10px;
		width: 200px;
		color: black;
		position: absolute;
		padding: 10px;
	}

 
    @keyframes floating {
        0% { transform: translate(0,  0px); }
        50%  { transform: translate(0, 3px); }
        100%   { transform: translate(0, -0px); }   
    }
</style>
