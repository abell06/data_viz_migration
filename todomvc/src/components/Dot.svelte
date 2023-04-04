<script>

    //import data from '../components/irregularviolence.json';


    let hovered = -1;
    let recorded_mouse_position = {
		x: 0, y: 0
	};
    export let data_dot =[];
    //console.log("Verifying output: ", Object.keys(data_person).length);
    let data_values = Object.values(data_dot)
    $: {data_values= Object.values(data_dot)}

</script>


<main class="dots">
    {#each data_values as individual, i}
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
</main>

<style>
    .dot {
        height: 20px;
        width: 20px;
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-delay: 100ms;
    }
    @keyframes floating {
        0% { transform: translate(0,  0px); }
        50%  { transform: translate(0, 3px); }
        100%   { transform: translate(0, -0px); }   
    }
</style>