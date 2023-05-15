<script>
    ////https://svelte.dev/examples/bar-chart
    import { scaleLinear } from "d3";
    import data from '../components/violence_rates.json';
    import ButtonContainer from './ButtonContainer.svelte';

    let hovered = -1;
    let recorded_mouse_position = {
		x: 0, y: 0
	};

    //filers for different violence types
    const violence_options = [
		{ text: 'Any incident of violence', violence_type:'experienced_violence_yn' ,filterFunction: (e) => {return !e.violence_strings.includes("None");}},
        { text: 'Threat/ Intimidation', violence_type:'mig_ext_violence\/5' ,filterFunction: (e) => {return e.violence_strings.includes("Threat \/ Intimidation");}},
		{ text: 'Physical aggression', violence_type:'mig_ext_violence\/6' , filterFunction: (e) => {return e.violence_strings.includes("Physical aggression");}},
		{ text: 'Extortion/ attempted extortion', violence_type:'mig_ext_violence\/2' , filterFunction: (e) => {return e.violence_strings.includes("Extortion \/ Attempted extortion");}},
        { text: 'Armed robbery', violence_type:'mig_ext_violence\/4' , filterFunction: (e) => {return e.violence_strings.includes("Armed robbery");}},
        { text: 'Theft', violence_type:'mig_ext_violence\/3' , filterFunction: (e) => {return e.violence_strings.includes("Theft");}},
        { text: 'Sexual harassment or assault', violence_type:'mig_ext_violence\/7' , filterFunction: (e) => {return e.violence_strings.includes("Sexual harassment or assault");}},
        { text: 'Kidnapping/ Attempted kidnapping', violence_type:'mig_ext_violence\/8' , filterFunction: (e) => {return e.violence_strings.includes("Kidnapping \/ Attempted kidnapping");}},
        { text: 'Attemped murder', violence_type:'mig_ext_violence\/9' , filterFunction: (e) => {return e.violence_strings.includes("Attempted murder");}},
        { text: 'Passed away or missing', violence_type:'mig_ext_violence\/10' , filterFunction: (e) => {return e.violence_strings.includes("Passed away or whereabouts are unknown");}},
	];
    let selected_violence_option = violence_options[0];
    let selected_violence_type = selected_violence_option.violence_type

    let options = [
		{ filter: 'Compare by motivation to migrate', select_by:'mig_ext_motivo', filterFunction: (e) => {return e.motivation ===1;}, left_text: 'Migrants motivated by deteriorating livelihoods from natural hazards', text: ' (floods, droughts, volcanic eruptions, hurricanes, plagues, etc.) were more likely to experience violence than those migrating for other reasons.'},
		{ filter: 'Compare by accompanying travelers', select_by:'mig_ext_acompany',filterFunction: (e) => {return e.acompany ===1;}, left_text: 'Migrants traveling alone'},
        { filter: 'Compare by mode of travel', select_by:'mig_ext_medio', filterFunction: (e) => {return e.medio ===1;}, left_text: 'Migrants traveling in a caravan'},
	];
    let selected = options[0];

    let chart_data = data.filter(data => (data.select_by ==selected.select_by));

    let sorted_chart_data = chart_data.sort(
        (p1, p2) => (p1[selected_violence_type] < p2[selected_violence_type]) ? 1 : (p1[selected_violence_type] > p2[selected_violence_type]) ? -1 : 0);
    let xVals = sorted_chart_data.map((el) => el.categories);
    let yVals = sorted_chart_data.map((el) => el[selected_violence_type]).map(Number);
    let xTicks = xVals
    $: {
        selected_violence_type = selected_violence_option.violence_type
        chart_data = data.filter(data => (data.select_by ==selected.select_by));
        sorted_chart_data = chart_data.sort(
        (p1, p2) => (p1[selected_violence_type] < p2[selected_violence_type]) ? 1 : (p1[selected_violence_type] > p2[selected_violence_type]) ? -1 : 0);
        xVals = sorted_chart_data.map((el) => el.categories);
        yVals = sorted_chart_data.map((el) => el[selected_violence_type]).map(Number);
        xTicks = xVals
    }


	const yTicks = [0.1,0.2,0.3,0.4,0.5,0.6]
	const padding = { top: 20, right: 15, bottom: 20, left: 65 };

	let width = 500;
	let height = 200;

	function formatMobile(tick) {
		return "'" + tick.toString().slice(-2);
	}
    let xScale = scaleLinear()
		.domain([0, xTicks.length])
		.range([padding.left, width - padding.right]);
	$: xScale = scaleLinear()
		.domain([0, xTicks.length])
		.range([padding.left, width - padding.right]);
    let yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);
	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length;
</script>

<main>
    <!-- <h2 style="margin-top: 5px">Explore potential drivers of differences in reported rates of violence by migrants</h2> -->

    <div class = "buttons_grid">
        <section class = left_buttons>
            <p style="margin-top: 0px">Filter by violence type</p>
            <ButtonContainer >
                {#each violence_options as violence_option}
                    <button class:active={selected_violence_option === violence_option} 
                                    class="btn" 
                                    data-name={violence_option.text} 
                                    on:click= {()=>selected_violence_option = violence_option}
                                    value = {violence_option}>
                        {violence_option.text}
                    </button>            
                {/each}
            </ButtonContainer>
        </section>
        <section class = right_buttons>
            <p style="margin-top: 0px">Choose comparator</p>
            <p style="margin-top: 10px"></p>
            <ButtonContainer>
                {#each options as option}
                    <button class:active={selected === option} 
                                    class="btn" 
                                    data-name={option.filter} 
                                    on:click= {()=>selected = option}
                                    value = {option}>
                        {option.filter}
                    </button>            
                {/each}
            </ButtonContainer>
        </section>
    </div>
    <div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
        <svg>
            <!-- y axis -->
            <g class="axis y-axis">
                {#each yTicks as tick}
                    <g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
                        <line x2="100%"></line>
                        <text y="-4">{tick*100}% {tick === 4 ? ' % reporting violence' : ''}</text>
                    </g>
                {/each}
            </g>

            <!-- x axis -->
            <g class="axis x-axis">
                
                    <g class="tick" >
                        <text x=0 y="500">Highest rate of reported violence</text>
                        <text x=500 y="500">Lowest rate of reported violence</text>
                        <text x=65 y="15">of migrants reporting violence</text>
                    </g>
                
            </g>

            <g class='bars'>
                {#each yVals as pointY, i}
                    <rect
                        x="{xScale(i) + 2}"
                        y="{yScale(pointY)}"
                        width="{barWidth - 4}"
                        height="{yScale(0) - yScale(pointY)}"
                        on:mouseover={(event) => { hovered = i; 
                            recorded_mouse_position = {
                                        x: event.pageX,
                                        y: event.pageY}}}
                        on:mouseout={(event) => { hovered = -1; }}
                    ></rect>

                {/each}
            </g>
        </svg>
    </div>
    <div
    class={hovered === -1 ? "tooltip-hidden": "tooltip-visible"}	
    style="left: {recorded_mouse_position.x}px; top: {recorded_mouse_position.y-1000}px"
>
    {#if hovered !== -1}
        {xVals[hovered]} 
    {/if}
</div>

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
    main {
        text-align: center;
        font-family: Georgia;
        font-weight: 300;
        line-height: 2;
        font-size: 24px;
        color: var(--color-text);
        margin-top: 20px;
    }
    h2 {
		text-align: center;
	}

	.chart {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
        overflow: visible;
	}

	svg {
		position: relative;
		width: 100%;
		height: 50vh;
        overflow: visible;
	}

	.tick {
		/*font-family: Helvetica, Arial;
		font-size: .725em;
		font-weight: 200;*/
	}

	.tick line {
		stroke: #e2e2e2;
		stroke-dasharray: 2;
	}

	.tick text {
		/*fill: #ccc;*/
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: start;
        /*transform:rotate(-25deg);*/
	}

	.bars rect {
		fill: #F8553D;
		stroke: none;
		opacity: 0.65;
        margin: 12px;
	}
    .ax-axis {
        margin-bottom: 50px;
    }
        /* Style the buttons */
        .btn {
        width: 150px;
        /*height: 170px;*/
        /*text-transform: uppercase;
        font-weight: 200;*/
        font-size: 16px;
        letter-spacing: 1px;
        border: none;
        outline: none;
        margin: 10px;
        padding: 20px 20px 20px;
        background-color:#2E2F48 ;
        /*border: 1px solid black;*/
        cursor: pointer;
        transition: .1s ease-in-out;
        color: white;
    }


        /* Add a dark background color to the active button */
    .btn:active,
    .active {
        background-color: #ECEE41;
        color: black;
    }
    g:hover {
        /*opacity: 0.5;*/
        cursor: pointer;
    }
        	/* dynamic classes for the tooltip */
	.tooltip-hidden {
		visibility: hidden;
		font-family: Georgia;
		width: 200px;
		position: absolute;
	}

	.tooltip-visible {
		font: 15px sans-serif;
		font-family: Georgia;
		visibility: visible;
		background-color: whitesmoke;
		border-radius: 10px;
		width: 200px;
		color: black;
		position: absolute;
		padding: 10px;
	}
</style>
