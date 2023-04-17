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
        <g on:mouseover={(event) => { hovered = individual; 
            recorded_mouse_position = {
                        x: event.pageX,
                        y: event.pageY}}}
            on:mouseout={(event) => { hovered = -1; }}>
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" height="132.24px" width="124.19px" version="1.1" x="0px" y="0px" xmlns:ns="&amp;#38;ns_ai;" enable-background="new 0 0 124.189 132.243" viewBox="0 0 124.189 132.243"><g ns:extraneous="self"><path stroke-width="1.25" d="m62.096 8.5859c-5.208 0-9.424 4.2191-9.424 9.4261 0.001 5.203 4.217 9.424 9.424 9.424 5.202 0 9.422-4.221 9.422-9.424 0-5.208-4.22-9.4261-9.422-9.4261zm-10.41 21.268c-6.672 0-12.131 5.407-12.131 12.07v29.23c0 2.275 1.791 4.123 4.07 4.123 2.28 0 4.127-1.846 4.127-4.123v-26.355h2.102s0.048 68.811 0.048 73.331c0 3.05 2.478 5.53 5.532 5.53 3.052 0 5.525-2.48 5.525-5.53v-42.581h2.27v42.581c0 3.05 2.473 5.53 5.531 5.53 3.054 0 5.549-2.48 5.549-5.53v-73.331h2.127v26.355c0 2.275 1.85 4.123 4.126 4.123 2.28 0 4.073-1.846 4.073-4.123v-29.23c0-6.663-5.463-12.07-12.129-12.07h-20.82z"

            /></svg>

        </g>
      </svg>
      {/each}
</main>

<style>
    .dot {
        height: 40px;
        width: 40px;
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        /*animation-delay: 100ms;*/
        fill:#964CAD;
    }
    @keyframes floating {
        0% { transform: translate(0,  0px); }
        25%  { transform: translate(0, 2px); }
        50%  { transform: translate(2px, 2px); }
        75%  { transform: translate(2px, -0px); }
        100%   { transform: translate(-0px, -0px); }   
    }
</style>