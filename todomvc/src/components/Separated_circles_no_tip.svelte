<script>
    import { InternSet, hierarchy, pack, range, scaleOrdinal, schemeTableau10,packSiblings } from 'd3';
    //import data from './bubble-data' // or pass data to component as prop
    import Person from '../components/new_person.svelte';
    import Dot from '../components/new_dot.svelte';
    //import violence_data from '../components/irregularviolence.json';
    //import no_violence_data from '../components/irregular_no_violence.json';
    import all_violence_data from '../components/all_violence_data.json';

    //const root = document.querySelector(":root"); // we first get the root element
    //root.style.setProperty("--rando", `${Math.floor(Math.random() * 20) + 1}px`); // inject the CSS with JavaScript
    //console.log(Math.random())
    export let data_dot =[];
    //console.log("Verifying output: ", Object.keys(data_person).length);
    let data_values = Object.values(data_dot);
    let violence_data = data_values.filter(data_values => (data_values.experienced_violence_yn==1));
    $: {data_values= Object.values(data_dot)
        violence_data = data_values.filter(data_values => (data_values.experienced_violence_yn==1));}

    let hovered = -1;
    let recorded_mouse_position = {
		x: 0, y: 0
	};


    
    const width = 700; //the margin top, bottom, left, right margin offset relative to the radius
    const padding = 3; // the all padding all around each circle, in pixels
    const margin = 1; // the all margin all around, in pixels
    const textColor = 'black'; //the color of the text
    const fill = '#ccc'; // a static fill color, if no group channel is specified
    const fillOpacity = 0.9; // the fill opacity of the bubbles
    const strokeColor = 'none'; // a static stroke around the bubbles
    const strokeWidth = 1; // the stroke width around the bubbles, if any
    const strokeOpacity = 1; // the stroke opacity around the bubbles, if any
    const height = width; // the outer height of the chart, in pixels
    const marginLeft = margin; // the left margin, in pixels
    const marginRight = margin; // the right margin, in pixels
    const marginTop = margin; // the top margin, in pixels
    const marginBottom = margin; // the bottom margin, in pixels
  
    //update link to the desired address path or remove.
   // const link = (d) => `https://github.com/prefuse/Flare/blob/master/flare/src/${d.id.replace(/\./g, '/')}.as`;
  
    // Compute the values.
    let dVals = data_values.map((el) => el);
    let vVals = data_values.map((el) => el.experienced_violence_yn);
    let gVals = data_values.map((el) => el.experienced_violence_yn);
    let iVals = range(vVals.length).filter(i => vVals[i] >= 0);
    let stringVals = data_values.map((el) => el.violence_strings);
    let groups = iVals.map(i => gVals[i]);
    groups = new InternSet(groups);
    let colorScale = scaleOrdinal(groups).domain([0, 1]).range(['#2E2F48', '#F8553D'])
    $:{
      dVals = data_values.map((el) => el);
      vVals = data_values.map((el) => el.experienced_violence_yn);
      gVals = data_values.map((el) => el.experienced_violence_yn);
      iVals = range(vVals.length).filter(i => vVals[i] >= 0);
      stringVals = data_values.map((el) => el.violence_strings);
      groups = iVals.map(i => gVals[i]);
      groups = new InternSet(groups);
      colorScale = scaleOrdinal(groups).domain([0, 1]).range(['#2E2F48', '#F8553D'])
    }
    
  
    //const colorScale = scaleOrdinal(groups, schemeTableau10);  
    
    // // Compute labels.
    //const lVals = data.map((el) => [...el.id.split('.').pop().split(/(?=[A-Z][a-z])/g), el.value.toLocaleString('en')].join('\n'));
    //const tVals = data.map((el) => `${el.id}\n${el.value.toLocaleString('en')}`);
  
    const uid = `O-${Math.random().toString(16).slice(2)}`;
  
    let base = pack()
    .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
    .radius(d => 6)
    .padding(padding)
    (hierarchy({children: iVals})
    .sum(i => vVals[i])
        );

    $: {
      base = pack()
    .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
    .radius(d => 6)
    .padding(padding)
    (hierarchy({children: iVals})
        .sum(i => vVals[i]));
    }
    //const packCircles = packSiblings(base.leaves());
    //console.log(packCircles)
    let data = base.leaves();
    console.log(data);
    let data_sorted= data.sort(function(a, b){
    return a.x - b.x;
        });

    data_sorted[0].value = 1;
    console.log(data_sorted[0].value);
    for (let i = 0; i < violence_data.length; i++) {
        data_sorted[i].value = 1;
        data_sorted[i].data = base.leaves()[data_dot.length-i-1].data;
        data_sorted[i].x = data_sorted[i].x - 10
    }
    for (let i = violence_data.length; i<data_dot.length;i++){
        data_sorted[i].value = 0;
        data_sorted[i].data = base.leaves()[0].data;
    }
    console.log(data_sorted)
    console.log(base.leaves())

</script>

<main class="circles">
  <div class = "violence_grid"> 
    <svg {width} {height} viewBox="{-marginLeft} {-marginTop} {width} {height}" fill={textColor} class="person">
        {#each data_sorted as leaf, i}
            <g class='node' transform="translate({(leaf.x)},{(leaf.y)})" 
                
                >
                <svg class = 'person' height ={2*leaf.r} width ={2*leaf.r} viewBox="0 0 100 120"
                on:mouseover={(event) => { hovered = leaf; 
                  recorded_mouse_position = {
                              x: event.pageX,
                              y: event.pageY}}}
                  on:mouseout={(event) => { hovered = -1; }}  >
                  <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" height="132.24px" width="124.19px" version="1.1" x="0px" y="0px" xmlns:ns="&amp;#38;ns_ai;" enable-background="new 0 0 124.189 132.243" viewBox="75 0 44.189 132.243"><g ns:extraneous="self"><path stroke-width="1.25" d="m62.096 8.5859c-5.208 0-9.424 4.2191-9.424 9.4261 0.001 5.203 4.217 9.424 9.424 9.424 5.202 0 9.422-4.221 9.422-9.424 0-5.208-4.22-9.4261-9.422-9.4261zm-10.41 21.268c-6.672 0-12.131 5.407-12.131 12.07v29.23c0 2.275 1.791 4.123 4.07 4.123 2.28 0 4.127-1.846 4.127-4.123v-26.355h2.102s0.048 68.811 0.048 73.331c0 3.05 2.478 5.53 5.532 5.53 3.052 0 5.525-2.48 5.525-5.53v-42.581h2.27v42.581c0 3.05 2.473 5.53 5.531 5.53 3.054 0 5.549-2.48 5.549-5.53v-73.331h2.127v26.355c0 2.275 1.85 4.123 4.126 4.123 2.28 0 4.073-1.846 4.073-4.123v-29.23c0-6.663-5.463-12.07-12.129-12.07h-20.82z"

                    fill={gVals ? colorScale(leaf.value) : fill == null ? 'none' : fill}
                    fill-opacity={fillOpacity}
                    
                  /></svg>
                </svg>
              


              <clipPath id={`${uid}-clip-${leaf.data}`}>
                <circle r={leaf.r}></circle>
              </clipPath>


            </g>

          
        {/each}
    </svg>
   
    <div
    class={hovered === -1 ? "tooltip-hidden": "tooltip-visible"}	
    style="left: {recorded_mouse_position.x -200}px; top: {recorded_mouse_position.y -1500}px">
    {#if hovered !== -1}
        Type of violence reported: `{stringVals[hovered.data]}` 
    {/if}
    </div>

  </div>   
</main>

  
  <style>

    /*svg {
      max-width: 100%;
      height: auto;
      height: intrinsic;
      font-size: 10;
      font-family: sans-serif;
      text-anchor: middle;
    }*/
    main {
        text-align: center;
        font-family: "Nunito", sans-serif;
        font-weight: 300;
        line-height: 2;
        font-size: 24px;
        color: var(--color-text);
        
        justify-content: center;
    }
  
    .node {
      cursor: pointer;
      height: 40px;
      width: 40px;
      
      
    }


  
    .node:hover {
      font-weight: 700;
    }
    .violence_grid {
        display: flex;
        width: 100%;
        /*   height:250px; */

        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        
        

        }
    g:hover {
        
        cursor:auto;
      }


        	/* dynamic classes for the tooltip */
    .tooltip-hidden {
      visibility: hidden;
      font-family: "Nunito", sans-serif;
      width: 200px;
      position: absolute;
    }

    .tooltip-visible {
        visibility: hidden;
      font-family: "Nunito", sans-serif;
      width: 200px;
      position: absolute;
    }



  </style>