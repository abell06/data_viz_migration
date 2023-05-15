<script>
    import Scroller from "@sveltejs/svelte-scroller";
    import Bars from '../components/Interact_bars_vertical.svelte';
    import App_violence from '../components/App_violence.svelte';
    import App_guided from '../components/App_guided_scrolly.svelte';
    import { fit, parent_style } from '@leveluptuts/svelte-fit';
    import Map from '../components/App_map.svelte'

    let count, index, offset, progress;

</script>

<main>
  <!-- entry page put picture here -->
    <div class='bookend_image' style="background-color: #9d87ba; display: flex; align-items: center; justify-content: center; flex-direction: column; height: 100vh;">
      <!-- set background to picture -->
<!-- <<<<<<< lan/add-map -->
       <!-- <h1 style="margin-top: 100px; margin-right: 40px; margin-left: 40px">The Perilous Journey for Central American Migrants Traveling to the US</h1>
        -->
<!-- ======= -->
      <div class="text-background" style="text-align: center;">
        <h1 style="margin-top: 100px: margin-right: 40px; margin-left: 40px">The Perilous Journey for Central American Migrants Traveling to the US</h1>
        <h5 style ="margin-top: 20px"><em>Authors: Les Armstrong, Allison Bell, and Lan Ha</em></h5>
        <h4 style ="margin-top: 100px"><em>Scroll to continue</em></h4>
<!--         <h4 style="margin-top: 30px">In this webpage, we highlight the often violent journey that irregular Central American migrants take to reach the US. 
          We analyze data from a survey conducted by the <a href="https://www.wfp.org">World Food Programme (WFP)</a> in 2019 which we then
          compare to reporting by news outlets to understand the strenghts and limitations of the data.
        </h4>
        <p style="margin-top: 50px">The data collected from approximately 5,000 household interviews and over 6,000 web survey responses across 
          the three countries conducted as part of a joint initiative between WFP and the International Organization for Migration (IOM) to better 
          understand the factors in migration.
        </p>
        <h4 style="margin-top: 50px">It is key to remember that this survey was conducted on migrants after their journey which means that 
          the data we are seeing is likely subject to <i><a href="https://en.wikipedia.org/wiki/Survivorship_bias">Survivorship Bias</a></i>. 
        </h4> -->
      </div>
<!--        <h3 style="margin-top: 50px; color:  rgba(255, 255, 255); font-style: italic;"><strong>Scroll to continue</strong></h3> -->
        <div style = "height:50px"></div>
<!-- >>>>>>> main -->
    </div>

    <!-- moved intro text to map page -->
    <div class = 'map'>
      <h4 style="margin-top: 30px; padding-left: 40px; padding-right: 40px;">In this webpage, we highlight the often violent jounrey that irregular Central American migrants take to reach the US. 
        We analyze data from a survey conducted by the <a href="https://www.wfp.org">World Food Programme (WFP)</a> in 2019 which we then
        compare to reporting by news outlets to understand the strenghts and limitations of the data.
      </h4>
        <p style="margin-top: 30px; padding-left: 40px; padding-right: 40px;">The data collected from approximately 5,000 household interviews and over 6,000 web survey responses across 
                the three countries conducted as part of a joint initiative between WFP and the International Organization for Migration (IOM) to better 
                understand the factors in migration.
        </p>
        <h4 style="margin-top: 30px; padding-left: 40px; padding-right: 40px;">It is key to remember that this survey was conducted on migrants after their journey which means that 
                the data we are seeing is likely subject to <a href="https://en.wikipedia.org/wiki/Survivorship_bias"><em>Survival Bias.</em> </a>
      </h4>

        <!-- <div style = "height:500px"></div> -->
      <Map />   
      
      <!-- <div style = "height:500px"></div> -->
    </div>


<div class='scroll_container'>
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
    
      {#if progress <0.13}
        
        <div class="container text-sizing transition-class" 
          style="background-color: #9d87ba;">
          <div style={parent_style}>
            
          <h2  style="margin-top: 5px">
          Irregular migrant experience violence at an alarmingly high rate

          </h2>  
          <p use:fit={{min_size: 3, max_size: 40}} style="margin-center: 100px;">According to the survey, about <strong>1 in 4 out of the 1268 reported irregular migrants surveyed suffer some form of violence during their journey.</strong><br> 
            <em>Here "irregular" migration refers to migration not following regular migration pathways such as through the use of visas, foreign residence permits, or those seeking asylum.</em>
          </p>
          
        </div>
        </div>

        {/if}
        
        {#if index === 1}
        
       

      {/if}

      {#if progress >=0.13 && progress<0.28}
        <div class="container text-sizing transition-class" 
          style="background-color: #eadc41;"> 
          <div style={parent_style}>
            <h2 style="margin-top: 5px">
              Gender vulnerablity

            </h2>

            <p use:fit={{min_size: 3, max_size: 40}} style="margin-top: 5px;"> According to the survey, women (20%) were less likely to suffer from violence than men (27%).
              However, <strong>this statistic does not align with other studies, which report that 60% of women experience rape and sexual assault during migration</strong> <sup><a href="https://unu.edu/publications/articles/fleeing-to-mexico-for-safety-the-perilous-journey-for-migrant-women.html" target="_blank">2</a></sup>.
              The discrepancy may be due to the survey data being collected from the migrant's family members. The victims have reported feeling shame and trauma about the experience and may not want to share it with their family members back home.
            </p>
          </div> 
        </div>  
      {/if} 

      {#if progress >=0.28 && progress <0.54}
        <div class="container text-sizing transition-class" 
        style="background-color: #20a8b0;"> 
          <div style={parent_style}>
            <h2 style="margin-top: 5px">
              Migration motives

            </h2>

            <p use:fit={{min_size: 3, max_size: 40}}  style="margin-top: 5px"><strong>Natural hazards are increasingly becoming a motive for migration from central America.</strong><br>  
              In the Fall of 2020, two hurricanes (Eta and Iota) hit impoverished areas of Honduras in rapid succession, striking more than four million people across the nation — nearly half the population — and leveling entire neighborhoods. 
              This was right after a ruinous 5 year drought that drove many rural communities to bankruptcy. <sup><a href="https://www.nbcnews.com/news/latino/central-american-climate-migrants-face-countless-barriers-seeking-refu-rcna525" target="_blank">4</a></sup>
               Many decided to migrate at that exact moment. 
               <strong>The abruptness meant many were underprepared and travelled with their children which slowed them down and made them easier targets for malicious actors</strong> <sup><a href="https://revistas.unal.edu.co/index.php/recs/article/view/95765/83853" target="_blank">1</a></sup>.
            </p>
          </div> 
        </div>
      {/if} 

    {#if progress >=0.54 && progress < 0.68}
      <div class="container text-sizing"
        style="background-color: #e56147;">
        <div style={parent_style}>
          <h2 style="margin-top: 5px">
            Migration companion 
          </h2>

          <p use:fit={{min_size: 3, max_size: 40}}  style="margin-top: 5px">Attempting to travel alone has many perils. It is easy to be targeted by cartels and human smugglers who are looking for desperate lost people.
             This is why most people opt to either pay a coyote who know the lay of the land or join a migrant caravan
             <sup><a href="https://revistas.unal.edu.co/index.php/recs/article/view/95765/83853" target="_blank">1</a></sup>.
          </p>
        </div> 
      </div>

    {/if} 


    {#if progress >=0.68 && progress < 0.80}
    <div class="container text-sizing"
     style="background-color: #d34188;">
      <div style={parent_style}>     
        <h2 style="margin-top: 5px">
          Migration method of travel 
        </h2>

        <p use:fit={{min_size: 3, max_size: 40}} style="margin-top: 5px"> 
          <strong>Migrant caravans have become more popular in recent years because they are perceived as a cheaper and safer option of travel, especially for women and children.</strong><br>
          The idea is that by traveling in groups with the same objective, the solidarity among the migrants would protect them. The reality was far from this. 
          <strong>Many of the people who joined the caravans were people who would not have migrated through other traditional means such as women with children who are particularly vulnerable during the journey</strong> <sup><a href="https://revistas.unal.edu.co/index.php/recs/article/view/95765/83853" target="_blank">1</a></sup>.
      </p>
      
        
      </div> 
    </div>

 


  {/if} 


      {#if progress >= 0.80 && progress < 0.91}
      <div class="container text-sizing"
         style="background-color: #d34188;">
        <div style={parent_style}>  
          <p use:fit={{min_size: 3, max_size: 40}}  style="margin-top: 5px">
            Human traffickers follow the caravan to seize opportunities to target and pick off migrants who are left behind due to taking breaks.
            <br> 
            Sexual assault is pervasive inside the caravans themselves, where there is little police oversight and it is easy for the assaulters to blend back into the crowds
        
            <sup><a href="https://revistas.unal.edu.co/index.php/recs/article/view/95765/83853" target="_blank">1</a></sup>.
          </p>
        </div> 
      </div>

        {/if}
      {#if progress >= 0.91}
      <div class="container text-sizing" style="background-color:#bbd4bc"> 
        <div style={parent_style}> 
          <h4 use:fit={{min_size: 3, max_size: 40}}  style="margin-top: 50px;">
            In this section we allow the user to interact with the data by reviewing the different risk factors and how they relate to each other across different travel conditions. Please select one 
            of the violence type and one of the comparators to view the bar chart. We arrange this data in descending order of risk. 
            You can view the category of each bar by hovering over them." 
          </h4>
        </div> 
      </div>  


      {/if}

    
  </div>

  <div class="foreground" slot="foreground" >
    

    <!--
    <h5 style="margin-top: 60px; margin-right: 20px">Data collected from approximately 5,000 household interviews and over 6,000 web survey responses across the three countries conducted as part of a joint initiative between WFP and the International Organization for Migration (IOM) to better understand the factors in migration. </h5>
    <p style="margin-top: 10px; margin-right: 20px; font-size: smaller; font-style: italic;">It is key to remember that this survey was conducted on migrants after their journey which means that the data we are seeing is likely subject to Survivor Bias.</p>
    -->

    <App_violence />
    
    
    <div style = "height:10px" ></div>
    
    <App_guided select_index = 0/>
    
    
    <div style = "height:10px"></div>
    <div class='quote' style="background-color: rgba(234, 220, 32, 0.5);">
      <h3>
        &ldquo;Me and some other women with our children were offered a ride by two young men, but it was a trap.
         They took us to the fields and pulled out a gun. Thank god we were able to fight back against them, but many other women are not as lucky” - Pilar, El Salvador (February 2020) <sup><a href="https://revistas.unal.edu.co/index.php/recs/article/view/95765/83853" target="_blank">1</a></sup>
      </h3>  
    </div>


    <div style = "height:10px"></div>
    <App_guided select_index = 1/>
    
    
    <div style = "height:10px"></div>

    <div class='quote' style="background-color: rgba(32, 168, 176, 0.5);">
      <h3>
        &ldquo; We are doomed here. The desperation, the sadness, that's what makes you migrate." - Magdalena Flores (Honduras 2020) <sup><a href="https://www.nytimes.com/2021/04/06/world/americas/migration-honduras-central-america.html" target="_blank">3</a></sup>
     </h3>  
    </div>

    <div class='quote' style="background-color: rgba(32, 168, 176, 0.5);">
      <h3>
        &ldquo; I never wanted to do this.” - Said Ana Hernández, clutching her 11-year-old's hand at a gas station - “The situation is forcing me to. You get to a point where you don't have anything to give them to eat.” (Honduras 2020)<sup><a href="https://revistas.unal.edu.co/index.php/recs/article/view/95765/83853" target="_blank">1</a></sup>
     </h3>  
    </div>

    <div style = "height:10px"></div>
    

    <App_guided select_index = 2/>


    
    <div style = "height:10px">
    </div>
   
    <App_guided select_index = 3/>
   
    <div style = "height:10px"></div> 
    <div class='quote' style="background-color: rgba(211, 65, 136, 0.5);">
      <h3>
        &ldquo; I joined the caravan because they said everything would be fine, that we would pass through to the north without problems. 
        They said that together in the caravan we would protect ourselves from the crime in Mexico, that we would share many things,
         from the idea of reaching the north to being well united.” - Andrea (September 2019)<sup><a href="https://revistas.unal.edu.co/index.php/recs/article/view/95765/83853" target="_blank">1</a></sup>
      </h3>  
    </div>

    <div style = "height:10px"></div>
    <div class='quote' style="background-color: rgba(211, 65, 136, 0.5);">

      <h3>
        &ldquo; It hasn't been easy to come in the caravan because everything is difficult.
         Contrary to what I thought, there aren't many facilities, and it takes a lot of effort to come in the caravan.
          You have to walk a lot, rest little, and even when you rest, you're always taking care of yourself. 
          There's a lack of trust with those you come with because not everyone knows each other. 
          There are many problems, and the journey in the caravan is not safe.” - Alicia (September 2019)<sup><a href="https://revistas.unal.edu.co/index.php/recs/article/view/95765/83853" target="_blank">1</a></sup>
      </h3>  
    </div>
    
    <div style = "height:10px"></div>

    <div class='quote' style="background-color: rgba(211, 65, 136, 0.5);">
      <h3>
        &ldquo; In the end, there were so many of us, it was scary.
         When my wife went to the bathroom, someone touched her inappropriately, but she didn't tell me out of fear until the next day. 
         There was nothing I could do.” - Rodrigo (2020) <sup><a href="https://revistas.unal.edu.co/index.php/recs/article/view/95765/83853" target="_blank">1</a></sup>

      </h3>  
    </div>

    <div style = "height:10px"></div>
    
    <Bars style="margin-left: 50px"/>
    <div style = "height:100px"></div>

  </div>
</Scroller>
</div>
</main>

<body style="background-color: #dcdada;">
  <main>
      <div class='bookend' style="background-color: #dcdada; padding: 20px;">
        <h4 style="margin-top: 0px; color: #dddada;">In this website, we highlight the insights related to external migration mobility collected by the joint initiative between WFP and the International Organization for Migration (IOM).</h4>
  
        <h4 style="margin-top: 0px">In this website, we highlight the insights related to external migration mobility collected by the joint initiative between WFP and the International Organization for Migration (IOM).</h4>
          <h3 style="margin-top: 50px">Our main goal is to shed light on the most vulnerable forms of travel in a way that is understandable to the general public.
            We believe that this topic is of particular relevance today as Title 42, which was put in place by the 
            Trump administration during the COVID pandemic and has been used to expel migrants from the United States without due process, is set to expire<sup><a href="https://www.wola.org/2023/05/weekly-u-s-mexico-border-update-title-42-ends/" target="_blank">5</a></sup>. 
          </h3>
          
          <h3 style="margin-top: 50px">Furthermore, we hope to offer this information to potential migrants considering the journey, so they can make more informed decisions.
            We also hope to provide a resource for journalists and researchers who are interested in this topic
          </h3>
          <h4 style="margin-top: 50px;">Another objective is to showcase the strengths and weaknesses of the dataset by comparing it to other qualitative and quantitative work in this sector.
            Overall, we believe that we have unconvered significant weaknesses and biases hidden in the data, particularly when it comes to violence as it relates to gender differences where the data
            and the reporting diverge significantly. We highlight this issue because we believe that it is very important to not always relay on data to tell the whole story.
          </h4> 
          <h3 style="margin-top: 50px; margin-bottom: 50px; background-color: #dcdada;" >
            If you have been moved by these data points and stories,  
            <a href="https://www.house.gov/representatives/find-your-representative">we urge you to contact your representatives</a> and ask them to support policies that protect these migrants.
          </h3>
        
        
      </div>
  </main>

  <!-- Add your Acknowledgement and Reference sections here -->
  <section style="background-color: #dcdada; padding: 20px;margin-top: 200px;">
      <h2>Acknowledgements</h2>
      <div style = "height:10px"></div>
      <h3 style="font-size: 24px;">
        We would like to express our deepest appreciation to all those who provided us the possibility to complete this project. We would particularly give to thanks the World Food Program staff, who shared this important and sensitive data with us.
      </h3>
      <h3 style="font-size: 24px;">
        Furthermore, we would also like to acknowledge with much appreciation the crucial role that the faculty and TA staff who supported us throughout the project and the semester.
      </h3>
  </section>

  <section style="background-color: #dcdada; padding: 20px;margin-top: 30px;">
      <h4 style="font-size: 35px;">References</h4>
      <ol style="font-size: 24px;margin-top: 10px;">
          <li>
              <p style="margin-left: 100px; font-size: 24px;">
                Simón Pedro Izcara Palacios & Karla Lorena Andrade Rubio. (2022). Migración y violencia: las caravanas  de migrantes centroamericanos. Universidad Autónoma de Tamaulipas, Victoria, México. <sup><a href="https://revistas.unal.edu.co/index.php/recs/article/view/95765/83853">1</a></sup>
              </p>
          </li>
          <li>
            <p style="margin-left: 100px; font-size: 24px;">
              Fleeing to Mexico for Safety: The Perilous Journey for Migrant Women. United Nations University. <sup><a href="https://unu.edu/publications/articles/fleeing-to-mexico-for-safety-the-perilous-journey-for-migrant-women.html">2</a></sup>
            </p>
          </li>
          <li>
            <p style="margin-left: 100px; font-size: 24px;">
              "We Are Doomed": Devastation From Storms Fuels Migration in Honduras (2021). NYTimes - By Natalie Kitroeff. <sup><a href="https://www.nytimes.com/2021/04/06/world/americas/migration-honduras-central-america.html">3</a></sup>
            </p>
          </li>
          <li>
            <p style="margin-left: 100px; font-size: 24px;">
              "We're defeated": Climate migrants fleeing storm-stricken Central America struggle to find refuge (2021). NBC News - By Albinson Linares, Noticias Telemundo <sup><a href="https://www.nbcnews.com/news/latino/central-american-climate-migrants-face-countless-barriers-seeking-refu-rcna525">4</a></sup>
            </p>
          </li>
          <li>
            <p style="margin-left: 100px; font-size: 24px;">
              Weekly U.S.-Mexico Border Update: Title 42 Ends (May 2023). Advocacy for Human Rights in the Americas - By Adam Isacson <sup><a href="https://revistas.unal.edu.co/index.php/recs/article/view/95765/83853">1</a></sup>
            </p>
          </li>
          <!-- Add more as required -->
      </ol>
  </section>
</body>
  

<style>
    @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap');

    :root {
        --color-bg: #1c3441;
        --color-outline: #c2c2c2;
        --color-shadow: hsl(0, 0%, 0%, 0.1);
        --color-text: #fffff;
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
        font-family: "Georgia";
        font-weight: 300;
        line-height: 2;
        font-size: 24px;
        color: var(--color-text);
        margin-top: 0px;
        background-color:  #dddada; /* 20% opaque */
    }
    h1 {
        font-size: 52px;
        font-weight: 300;
        line-height: 2;
    }

    h2 {
        font-size: 40px;
        font-weight: bold;
        line-height: 1.5;
    }
    /* change width and margin for sidebar*/
    .background {
    width: 35%;
    margin-left: 65%;
    height: 100vh;
    position: relative;
    /* outline: green solid 3px; */
    background-color: #dcdada;
    /*padding: 0 0 50% 0;*/
  }
  /* for circles size */
  .foreground {
    width: 65%;
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
  

  .quote {
    margin: 30px;
    padding-left: 30px;
    padding-right: 30px;
    font-style: italic;
    font-weight: normal;  /* set font-weight to normal to prevent boldening */
    font-size: 19px;  /* set font-size to a smaller value */
    /*border-left: 5px solid rgb(216, 27, 213);*/
    color: #122028;
    background-color: #a04c0c;
    border-radius: 10px; /* adjust this value as needed */
}


  /*
 .quote::before {
    content: open-quote;
  }

 .quote::after {
    content: close-quote;
  }
  */
  
  .bookend {
    /*background-color: aquamarine;*/
    padding: 0 10.0%;
    /* Add any other styles you want here */
    height : 100vh;
    width: 100vw;

  }
  .bookend_image {
    /*background-color: aquamarine;*/
    height : 100vh;
    width: 100vw;
    background-image: url("../migration_portada-modified.webp");
    margin-top: 0px;

  }

  .bookend_image2 {
    /*background-color: aquamarine;*/
    height : 100vh;
    width: 100vw;
    background-image: url("../migration_portada-modified.webp");
    margin-top: 0px;

  }


  .container {
		
		padding: 20px;
		height: 100vh;
		width: 100%;
    transition: background-color 4s ease;
	}
	
	.text-sizing {
		resize: both;
		overflow: hidden;
		margin-bottom: 1rem;
	}
[slot="background"] {
  pointer-events: all;
}

[slot="foreground"] {
  pointer-events: all;
}
.scroll_container {
		
		pointer-events: none;
	}

body {
    font-family: "Georgia", serif;
}

.text-background {
    background-color: rgba(255, 255, 255, 0.8); /* white background with 60% opacity */
    padding: 20px;
    border-radius: 10px; /* optional, for rounded corners */
    max-width: 80%; /* optional, to limit the width of the text block */
    margin: auto; /* optional, to center the text block */
}


</style>