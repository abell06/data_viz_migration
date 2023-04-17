<script>

    //import Person from '../components/Person.svelte';
    import Person from '../components/new_person.svelte';
    import Dot from '../components/new_dot.svelte';
    import all_violence_data from '../components/all_violence_data.json';
    import ButtonContainer from './ButtonContainer.svelte';

    //filers for different violence types
    const violence_options = [
		{ text: 'Any incident of violence', filterFunction: (e) => {return !e.violence_strings.includes("None");}},
        { text: 'Threat/ Intimidation', filterFunction: (e) => {return e.violence_strings.includes("Threat \/ Intimidation");}},
		{ text: 'Physical aggression', filterFunction: (e) => {return e.violence_strings.includes("Physical aggression");}},
		{ text: 'Extortion/ attempted extortion', filterFunction: (e) => {return e.violence_strings.includes("Extortion \/ Attempted extortion");}},
        { text: 'Armed robbery', filterFunction: (e) => {return e.violence_strings.includes("Armed robbery");}},
        { text: 'Theft', filterFunction: (e) => {return e.violence_strings.includes("Theft");}},
        { text: 'Sexual harassment or assault', filterFunction: (e) => {return e.violence_strings.includes("Sexual harassment or assault");}},
        { text: 'Kidnapping/ Attempted kidnapping', filterFunction: (e) => {return e.violence_strings.includes("Kidnapping \/ Attempted kidnapping");}},
        { text: 'Attemped murder', filterFunction: (e) => {return e.violence_strings.includes("Attempted murder");}},
        { text: 'Passed away or missing', filterFunction: (e) => {return e.violence_strings.includes("Passed away or whereabouts are unknown");}},
	];
    let selected_violence_option = violence_options[0];
    let options = [
		{ filter: 'Sort by gender', filterFunction: (e) => {return e.mig_ext_sex ===1;}, left_text: 'Female migrants', text: 'Female migrants in the data were less likely to report violence.'},
		{ filter: 'Sort by motivation to migrate', filterFunction: (e) => {return e.motivation ===1;}, left_text: 'Migrants motivated by deteriorating livelihoods from natural hazards', text: 'People migrating because of deterioration of livelihoods due to natural hazards (floods, droughts, volcanic eruptions, hurricanes, plagues, etc.) were more likely to experience violence than those migrating for other reasons.'},
		{ filter: 'Sort by accompanying travelers', filterFunction: (e) => {return e.acompany ===1;}, left_text: 'Migrants traveling alone'},
        { filter: 'Sort by mode of travel', filterFunction: (e) => {return e.medio ===1;}, left_text: 'Migrants traveling in a caravan'},
	];
    let selected = options[0];

    //apply filters to the data
    let data_filtered_violence_type = all_violence_data.filter(e => selected_violence_option.filterFunction(e));
    let data_violence_left = data_filtered_violence_type.filter(e => selected.filterFunction(e));
    let data_violence_right = data_filtered_violence_type.filter(e => !selected.filterFunction(e));
    let data_filtered_no_violence_type = all_violence_data.filter(e => !selected_violence_option.filterFunction(e));
    let data_no_violence_left = data_filtered_no_violence_type.filter(e => selected.filterFunction(e));
    let data__no_violence_right = data_filtered_no_violence_type.filter(e => !selected.filterFunction(e));

    
    $: { data_filtered_violence_type = all_violence_data.filter(e => selected_violence_option.filterFunction(e));
        data_violence_left = data_filtered_violence_type.filter(e => selected.filterFunction(e));
        data_violence_right = data_filtered_violence_type.filter(e => !selected.filterFunction(e));
        data_filtered_no_violence_type = all_violence_data.filter(e => !selected_violence_option.filterFunction(e));
        data_no_violence_left = data_filtered_no_violence_type.filter(e => selected.filterFunction(e));
        data__no_violence_right = data_filtered_no_violence_type.filter(e => !selected.filterFunction(e));
        console.log("Number of  migrants with violence type: ", Object.keys(data_filtered_violence_type).length)}
    

    //calculate violence rate by category...
    let violence_rate_filter = Object.keys(data_violence_left).length/(Object.keys(data_violence_left).length + Object.keys(data_no_violence_left).length)
    let s_violence_rate_filter = Number(violence_rate_filter).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    let violence_rate_opp_filter = Object.keys(data_violence_right).length/(Object.keys(data_violence_right).length + Object.keys(data__no_violence_right).length)
    let s_violence_rate_opp_filter = Number(violence_rate_opp_filter).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});


    $: {violence_rate_filter = Object.keys(data_violence_left).length/(Object.keys(data_violence_left).length + Object.keys(data_no_violence_left).length)
        s_violence_rate_filter = Number(violence_rate_filter).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
        violence_rate_opp_filter = Object.keys(data_violence_right).length/(Object.keys(data_violence_right).length + Object.keys(data__no_violence_right).length)
        s_violence_rate_opp_filter = Number(violence_rate_opp_filter).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    }

</script>


<main>


    <h2 style="margin-top: 5px">Explore how different types of violence experienced interact with migrant characteristics</h2>

    


    <div class = "buttons_grid">
        <section class = left_buttons>
            <p style="margin-top: 10px">Filter by violence type</p>
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
            <p style="margin-top: 10px">Sort by migrant characteristic</p>
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


    <h3 style="margin-top: 10px; color: #F8553D;">Migrants reporting {selected_violence_option.text} </h3>
    <div class = "violence_grid">
        <section class="humans_filter1">
            <p style = "font-style: italic">{selected.left_text}</p>
            <p>Rate of reported violence: {s_violence_rate_filter}</p>

            <Person data_person = {data_violence_left}/>
        </section>

        <section class="humans_filter2">
            <p style = "font-style: italic">All others</p>
            <p>Rate of reported violence: {s_violence_rate_opp_filter}</p>
            <Person data_person = {data_violence_right}/>
        </section>


    </div>

    <div class = "no_violence_grid">
        <section class="dots_filter1">
            <Dot data_dot = {data_no_violence_left}/>
        </section>

        <section class="dots_filter2">
            <Dot data_dot = {data__no_violence_right}/>
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
        /*height: 100vh;*/
        padding: 40px;
        

        }

    .humans_filter2 {
        width: 50%;
        flex-grow: 1;
        flex-shrink: 0;
        padding: 40px;

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
        padding: 40px;

        }

    .dots_filter2 {
        width: 50%;
        flex-grow: 1;
        flex-shrink: 0;
        padding: 40px;
        } 

    /* Style the buttons */
    .btn {
        width: 170px;
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
</style>
