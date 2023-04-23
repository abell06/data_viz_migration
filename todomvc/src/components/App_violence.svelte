<script>

    import Person from '../components/test.svelte';
    import Dot from '../components/new_dot.svelte';
    //import violence_data from '../components/irregularviolence.json';
    //import no_violence_data from '../components/irregular_no_violence.json';
    import all_violence_data from '../components/all_violence_data.json';

    let violence_data = all_violence_data.filter(all_violence_data => (all_violence_data.experienced_violence_yn==1));
    let no_violence_data = all_violence_data.filter(all_violence_data => (all_violence_data.experienced_violence_yn==0));

    let violence_rate_filter = Object.keys(violence_data).length/(Object.keys(violence_data).length + Object.keys(no_violence_data).length)
    let s_violence_rate_filter = Number(violence_rate_filter).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    

</script>


<main>


    <h2 style="margin-top: 5px">The survey asked whether each migrant experienced violence on their journey. Of the 1249 "irregular" migrants included in the survey, 317 reported experiencing at least one type of violence.</h2>


    <h3 style="margin-top: 10px; color: #F8553D;">Migrants reporting violence</h3>
    <div class = "violence_grid">
        <section class="humans">
            <p>Rate of reported violence: {s_violence_rate_filter}</p>

            <Person data_dot = {all_violence_data}/>
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
        margin-left: 0px;
        margin-right: 00px;
        justify-content: center;
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
        justify-content: center;
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
        justify-content: center;

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
