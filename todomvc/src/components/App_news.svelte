<script>
    import Scroller from "@sveltejs/svelte-scroller";
    import Bars from '../components/Interact_bars.svelte';
    import App_violence from '../components/App_violence.svelte';
    import App_guided from '../components/App_guided_scrolly.svelte';

    let count, index, offset, progress;
</script>

<main>
    <div class = 'bookend'>
        <h1 style="margin-top: 0px">Exploring risk factors related to violence reported by migrants whose external migration was characterized as "irregular"</h1>
        <h2 style="margin-top: 50px">*here "irregular" migration refers to migration not following regular migration pathways such as through the use of visas, foreign residence permits, or those seeking asylum.</h2>
        <p style ="margin-top: 100px">Scroll to continue</p>
    </div>
    


<Scroller
  top={0.0}
  bottom={1}
  threshold={0.5}
  bind:count
  bind:index
  bind:offset
  bind:progress
>
  <div class="background" slot="background">

    <!-- <div class="progress-bars">
      <p>current section: <strong>{index + 1}/{count}</strong></p>
      <progress value={count ? (index + 1) / count : 0} />

      <p>offset in current section</p>
      <progress value={offset || 0} />

      <p>total progress</p>
      <progress value={progress || 0} />
    </div> -->
      {#if index === 0}
          <h2 style="margin-top: 5px">0 section text</h2>

        {/if}
        {#if index === 1}
        
        <h2 style="margin-top: 5px">The survey asked whether each migrant experienced violence on their journey. Of the 1249 "irregular" migrants included in the survey, 317 reported experiencing at least one type of violence.</h2>

      {/if}
      {#if index > 2 && index <=9}
      <h2 style="margin-top: 5px">Are some "irregular" migrants experiencing violence at higher rates than others?</h2>


        {/if}
      {#if index > 9}
        <h2 style="margin-top: 50px">Exploring potential drivers of differences in reported rates of violence by migrants.</h2>


      {/if}

    
  </div>

  <div class="foreground" slot="foreground" >
    <section>This is the first section.</section>
    <App_violence />
    <div style = "height:100px"></div>
    <App_guided select_index = 0/>
    <div style = "height:100px"></div>

    <App_guided select_index = 1/>
    <div style = "height:100px"></div>

    <App_guided select_index = 2/>
    <div style = "height:100px"></div>

    <App_guided select_index = 3/>
    <!-- <div style = "height:0px"></div> -->
    <div style = "height:100px"></div>

    <Bars style="margin-left: 50px"/>
    <div style = "height:100px"></div>

  </div>
</Scroller>
</main>
<main>
    <div class = 'bookend'>
        <h2 style="margin-top: 0px">Placeholder for conclusion + call for action</h2>
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
    .background {
    width: 25%;
    margin-left: 75%;
    height: 100vh;
    position: relative;
    /* outline: green solid 3px; */
    background-color: #dcdada;
    /*padding: 0 0 50% 0;*/
  }
  .foreground {
    width: 75%;
    margin: 0 auto;
    margin-left: 0%;
    height: auto;
    position: relative;
    /* outline: red solid 3px; */
    justify-content: start;
    /*padding: 0 0 0 75%;*/
  }
  .progress-bars {
    position: absolute;
    background: rgba(170, 51, 120, 0.2) /*  40% opaque */;
    visibility: visible;
  }
  section {
    height: 80vh;
    background-color: rgba(0, 0, 0, 0.2); /* 20% opaque */
    /* color: white; */
    outline: magenta solid 3px;
    text-align: center;
    max-width: 750px; /* adjust at will */
    color: black;
    padding: 1em;
    margin: 0 0 2em 0;
  }

  .bookend {
    /*background-color: aquamarine;*/
    height : 100vh;
    width: 100vw;

  }

</style>