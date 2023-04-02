
<script>

    //import data from '../components/irregularviolence.json';


    let hovered = -1;
    let recorded_mouse_position = {
		x: 0, y: 0
	};
    export let data_person =[];
    //console.log("Verifying output: ", Object.keys(data_person).length);
    let data_values = Object.values(data_person)

</script>

<main class="humans">
    {#each data_values as individual}
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

</main>


<style>
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
</style>