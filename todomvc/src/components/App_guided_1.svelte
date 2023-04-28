<script>

    //import Person from '../components/Person.svelte';
    import Person from './new_person.svelte';
    import Dot from './new_dot.svelte';
    import all_violence_data from '../components/all_violence_data.json';
    import ButtonContainer from './ButtonContainer.svelte';
    import Person_cluster from './test.svelte';

    let hovered = -1;
    let hovered_1 = -1;

    let recorded_mouse_position = {
		x: 0, y: 0
	};
    let options = [
		{ filter: 'Sort by gender', filterFunction: (e) => {return e.mig_ext_sex ===1;}, left_text: 'Female migrants', text: 'Female migrants in the data were less likely to report violence.'},
		{ filter: 'Sort by motivation to migrate', filterFunction: (e) => {return e.motivation ===1;}, left_text: 'Migrants motivated by deteriorating livelihoods from natural hazards', text: 'People migrating because of deterioration of livelihoods due to natural hazards (floods, droughts, volcanic eruptions, hurricanes, plagues, etc.) were more likely to experience violence than those migrating for other reasons.'},
		{ filter: 'Sort by accompanying travelers', filterFunction: (e) => {return e.acompany ===1;}, left_text: 'Migrants traveling alone', text: 'Migrants traveling alone had higher rates of reported violence.'},
        { filter: 'Sort by mode of travel', filterFunction: (e) => {return e.medio ===1;}, left_text: 'Migrants traveling in a caravan', text: 'Migrants traveling in a caravan reported higher rates of violence than migrants traveling with a cajote or through their own method.'},
	];
    let select_index = 0
    let selected = options[select_index];

    let next_option = options[select_index+1];
    let previous_option = options[select_index-1];

    $:{
        next_option = options[select_index+1];
        previous_option = options[select_index-1]; 
    }

    //apply filters to the data
    let data_violence_left = all_violence_data.filter(e => selected.filterFunction(e));
    let data_violence_right = all_violence_data.filter(e => !selected.filterFunction(e));
  
    
    $: { 
        data_violence_left = all_violence_data.filter(e => selected.filterFunction(e));
        data_violence_right = all_violence_data.filter(e => !selected.filterFunction(e));
    }
    

    //calculate violence rate by category...

    let violence_data_left = data_violence_left.filter(data_violence_left => (data_violence_left.experienced_violence_yn==1));
    let violence_data_right = data_violence_right.filter(data_violence_right => (data_violence_right.experienced_violence_yn==0));
    let violence_rate_filter = Object.keys(violence_data_left).length/(Object.keys(data_violence_left).length)
    let s_violence_rate_filter = Number(violence_rate_filter).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    let violence_rate_opp_filter = Object.keys(violence_data_right).length/(Object.keys(data_violence_right).length)
    let s_violence_rate_opp_filter = Number(violence_rate_opp_filter).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});

    $:{
        violence_data_left = data_violence_left.filter(data_violence_left => (data_violence_left.experienced_violence_yn==1));
        violence_data_right = data_violence_right.filter(data_violence_right => (data_violence_right.experienced_violence_yn==1));
        violence_rate_filter = Object.keys(violence_data_left).length/(Object.keys(data_violence_left).length)
        s_violence_rate_filter = Number(violence_rate_filter).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
        violence_rate_opp_filter = Object.keys(violence_data_right).length/(Object.keys(data_violence_right).length)
        s_violence_rate_opp_filter = Number(violence_rate_opp_filter).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
  
    }

</script>


<main>


    <h2 style="margin-top: 5px">Are some "irregular" migrants experiencing violence at higher rates than others?</h2>


    <p>{selected.text}</p>
    <div class = "violence_grid">
        <section class="humans_filter1">
            <p style = "font-style: italic">{selected.left_text}</p>
            <p style="color: #F8553D;">Rate of reported violence: {s_violence_rate_filter}</p>

            <Person_cluster data_dot = {data_violence_left}/>
        </section>

        <section class="humans_filter2">
            <p style = "font-style: italic">All others</p>
            <p style="color: #F8553D;">Rate of reported violence: {s_violence_rate_opp_filter}</p>
            <Person_cluster data_dot  = {data_violence_right}/>
        </section>


    </div>
    <div class = "buttons_grid">
        <section class = back_buttons>
            <ButtonContainer>
                {#if select_index != 0}
                    <button class:active={hovered_1 !==-1}
                                    class="btn" 
                                    data-name={previous_option.filter}
                                    on:click= {()=>selected = previous_option}
                                    on:click={()=>select_index = select_index-1}
                                    value = {previous_option}
                                    on:mouseover={(event) => { hovered_1 = 1; 
                                        recorded_mouse_position = {
                                                    x: event.pageX,
                                                    y: event.pageY}}}
                                    on:mouseout={(event) => { hovered_1 = -1; }}
                                    >
                        Back
                    </button>            
                {/if}
            </ButtonContainer>
        </section>

        
        <section class=continue_buttons>
            <ButtonContainer>
                {#if select_index != 3}
                    <button class:active={hovered !==-1}
                                    class="btn" 
                                    data-name={next_option.filter}
                                    on:click= {()=>selected = next_option}
                                    on:click={()=>select_index = select_index+1}
                                    value = {next_option}
                                    on:mouseover={(event) => { hovered = 1; 
                                        recorded_mouse_position = {
                                                    x: event.pageX,
                                                    y: event.pageY}}}
                                    on:mouseout={(event) => { hovered = -1; }} >
                        Continue
                    </button>            
                {/if}
            </ButtonContainer>
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

    .buttons_grid {
        justify-content: end;
        display: flex;
        width: 100%;
        /*   height:250px; */

        flex-wrap: wrap;
        flex-direction: row;

        }

    .back_buttons {
        flex-grow: 1;
        flex-shrink: 0;
        width: 50%;
        height: 100vh;
        justify-content: start;

    }
    .button-highlighted {
        background-color: #ECEE41;
        color: black;
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
        margin-top: 0px;
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
        justify-content: start;
        

        }

    .humans_filter1 {

        /*flex-grow: 1;
        flex-shrink: 0;
        width: 50%;
        /*height: 100vh;*/
        padding: 10px;
        justify-content: start;
        width: 50%;
        }

    .humans_filter2 {
        width: 50%;
        flex-grow: 1;
        flex-shrink: 0;
        padding: 10px;
        justify-content: start;

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
