<script>

    import Person from '../components/Person.svelte';
    import Dot from '../components/Dot.svelte';
    import violence_data from '../components/irregularviolence.json';
    import no_violence_data from '../components/irregular_no_violence.json';

    //Obtain data for gender filter
    let filtered_data_violence = violence_data.filter(violence_data => (violence_data.mig_ext_sex==1));
    let opposing_filtered_data_violence = violence_data.filter(violence_data => (violence_data.mig_ext_sex!=1));
    let filtered_data_no_violence = no_violence_data.filter(no_violence_data => (no_violence_data.mig_ext_sex==1));
    let opposing_filtered_data_no_violence = no_violence_data.filter(no_violence_data => (no_violence_data.mig_ext_sex!=1));
    
    //calculate the percentage of violence for given filter
    let violence_rate_filter = Object.keys(filtered_data_violence).length/(Object.keys(filtered_data_violence).length + Object.keys(filtered_data_no_violence).length)
    let s_violence_rate_filter = Number(violence_rate_filter).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    let violence_rate_opp_filter = Object.keys(opposing_filtered_data_violence).length/(Object.keys(opposing_filtered_data_no_violence).length + Object.keys(opposing_filtered_data_violence).length)
    let s_violence_rate_opp_filter = Number(violence_rate_opp_filter).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});

    //Obtain data for motivation filter
    let filtered_data_violence1 = violence_data.filter(violence_data => (violence_data.mig_ext_motivo/3==1));
    let opposing_filtered_data_violence1 = violence_data.filter(violence_data => (violence_data.mig_ext_motivo/3!=1));
    let filtered_data_no_violence1 = no_violence_data.filter(no_violence_data => (no_violence_data.mig_ext_motivo/3==1));
    let opposing_filtered_data_no_violence1 = no_violence_data.filter(no_violence_data => (no_violence_data.mig_ext_motivo/3!=1));

    const options = [
		{ filter: 'Sort by gender', v_filter_on: filtered_data_violence},
		{ filter: 'Sort by motivation to migrate',  v_filter_on: filtered_data_violence1},
		{ filter: 'Sort by accompanying travelers'},
	];

	let selected = options[0];

</script>


<main>


    <h2 style="margin-top: 5px">Reported violence by various migrant characteristics </h2>

    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>{option.filter}</option>
        {/each}
    </select>
    {#if selected.filter === 'Sort by gender'}
	    <p>Violence by gender</p>
    {:else if selected.filter === 'Sort by motivation to migrate'}
	    <p>by x</p>
    {:else if selected.filter === 'Sort by accompanying travelers'}
	    <p>by y</p>
    {/if}

    <p>{selected.filter}</p>

    <h3 style="margin-top: 10px">Migrants reporting violence</h3>
    <div class = "violence_grid">
        <section class="humans_filter1">
            <p style = "font-style: italic">Female migrants</p>
            <p>Rate of reported violence: {s_violence_rate_filter}</p>

            <Person data_person = {selected.v_filter_on}/>
        </section>

        <section class="humans_filter2">
            <p style = "font-style: italic">All others</p>
            <p>Rate of reported violence: {s_violence_rate_opp_filter}</p>
            <Person data_person = {opposing_filtered_data_violence}/>
        </section>


    </div>
    <h3 style="margin-top: 10px">Migrants not reporting violence</h3>
    <div class = "no_violence_grid">
        <section class="dots_filter1">
            <Dot data_dot = {filtered_data_no_violence}/>
        </section>

        <section class="dots_filter2">
            <Dot data_dot = {opposing_filtered_data_no_violence}/>
        </section>
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
    .humans {
        display: inline-block;
        margin-left: 50px;
    }

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
    .violence_grid {
        display: flex;
        width: 100%;
        /*   height:250px; */

        flex-wrap: wrap;
        flex-direction: row;

        }

    .humans_filter1 {
        flex-grow: 1;
        flex-shrink: 0;
        width: 50%;
        height: 100vh;

        }

    .humans_filter2 {
        width: 50%;
        flex-grow: 1;
        flex-shrink: 0;

        } 
    .no_violence_grid {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row;

        }

    .dots_filter1 {
        flex-grow: 1;
        flex-shrink: 0;
        width: 50%;
        height: 100vh;

        }

    .dots_filter2 {
        width: 50%;
        flex-grow: 1;
        flex-shrink: 0;

        } 
</style>
