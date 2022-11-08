<script>
    import ScrollSection from "$lib/components/scrollspy/ScrollSection.svelte";
    import ActionBar from "$lib/components/static/ActionBar.svelte";

    import HeroSection from "$lib/components/sections/HeroSection.svelte";
    import AboutSection from "$lib/components/sections/AboutSection.svelte";


    import { activeSectionId } from '../stores'
  </script>
  
  <main>
      <ScrollSection id="heroSection">
          <HeroSection />
      </ScrollSection>
      
      <ScrollSection id="aboutSection">
          <AboutSection />
      </ScrollSection>
      
      <ScrollSection id="section-3">
          <h2>Section 3</h2>
      </ScrollSection>
  </main>

    {#if $activeSectionId === "heroSection"}
    <div class="action p-2 bg-purple text-white fixed text-xl flex flex-col justify-center z-[90]  bottom-0 w-full">  
        <div class="w-full">
            <a class="text-center block" href="#aboutSection">O aplikaci 👇</a>
        </div> 
    </div>


    {:else if $activeSectionId === "aboutSection"}
    <div class="action p-2 bg-gray text-white fixed text-xl flex flex-col justify-center z-[90]  bottom-0 w-full">  
        <div class="w-full">
            <a class="text-center block" href="#section-2">Základní principy aplikace 👇</a>
        </div> 
    </div>




    {:else}
        <ActionBar link="#section-1" copy="back to top" />
    {/if}


  <style>
      :global(html,body) {
          min-height: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          overflow-x: hidden;
          scroll-behavior: smooth;
      }
      :global(main) {
          padding-bottom: 200px;
      }
/*       
      aside {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed; bottom: 0rem; left: 0rem; z-index: 10;
          width: 100vw; 
          height: max-content;
      } */
  </style>