<script>
    import {
        Splide,
        SplideSlide
    } from '@splidejs/svelte-splide';
    import {
        loop
    } from 'svelte/internal';

    const options = {
        pagination: false,
        isNavigation: true,
        slideFocus: true,
        arrows: false,
        type: 'loop',
        padding: '12%',
        rewind: true,
        focus: 'center',
        perPage: 1,
        gap: '1rem',
        height: '70vh',
        breakpoints: {
            1000: {
                perPage: 1,
            },
        },
    }
</script>



<div class="w-full text-m leading-tight h-screen flex items-center pb-20 top-0 bg-yellow  text-white">
    <div class="pt-20 p-4 text-center max-w-screen-lg mx-auto">
        <p>Existuje nespočet možností jak konkrétní lokaci a místa v ní mapovat. Proto je důležité do procesu tvorby
            zapojit co nejvíce lidí, s nimiž lze navrhovat nové nástroje a funkce, jež nám mohou pomoci mapovat svět co
            nejpestřejším způsobem.</p>
        <p> Z něčeho je ale potřeba vycházet, a proto jsme navrhli základní funkce aplikace, na kterých lze stavět… 🧱
        </p>
    </div>

</div>

<div class="w-full h-screen bg-yellow text-white text-s">
    <div class="pt-24 pb-16 h-full ">
        <div class="h-full flex flex-col text-black justify-center">
            <Splide  options={ options } aria-label="My Favorite Images">

                
                <SplideSlide class="rounded-xl bg-white ">
                    <div class="p-6 rounded-xl absolute w-full md:w-1/2 z-40">
                        <h2 class="mb-6 text-m">🌍 Mapa</h2>
                        <p class="text-gray text-sm">Prostředí výchozí mapy je navrženo tak, aby uživatel*ka měl*a
                            možnost objevovat a bezděčně se dovídat o dané lokaci přímo v jejím prostředí. Místa jsou
                            vytvářena místní komunitou, nejsou hierarchizována, ani o jejich přítomnosti nerozhoduje
                            placená reklama — ať už se nacházíš kdekoli, máš možnost poznat okolí prismatem lidí, kteří
                            v něm žijí a navštěvovat podniky a místa, jež jsou validovány jinými uživateli*kami. Namísto
                            co nejkratší trajektorie ke konkrétní destinaci je ti aplikací přizpůsobena trasa tak, abys
                            mohl*a cestou objevovat nová a zajímavá místa…</p>
                    </div>
                    <div class="rounded-xl bg-[url('/mapa.webp')] bgg bg-contain h-full">
                    </div>
                </SplideSlide>

                <SplideSlide class=" bg-white rounded-xl">
                    <div class="rounded-xl p-6 absolute w-full md:w-1/2 z-40">
                        <h2 class="mb-6 text-m">🗺 Trasy</h2>
                        <p class="text-gray text-sm">Tato funkce ti umožní poznávat lokace pomocí tras, které jsou
                            rozděleny do mnoha kategorií. Můžeš tak zjistit kam ostatní uživatelé*ky rádi*y chodí, kam
                            je nejvhodnější vyrazit s kočárkem, na bruslích, na kole, do přírody, na vodu, nebo třeba co
                            jiné v daném místě zajímá — trasy vytvořené historičkami, přírodovědci, umělci,
                            architektkami, ekoložkami nebo flanéry… Trasy můžeš tvořit i ty a umožnit tak ostatním
                            poznat nová místa z tvé perspektivy!</p>
                    </div>
                    <div class="rounded-xl bg-[url('/trasy.webp')] bgg bg-contain h-full">
                    </div>
                </SplideSlide>

                <SplideSlide class="rounded-xl  bg-white">
                    <div class="rounded-xl p-6 absolute w-full md:w-1/2 z-40">
                        <h2 class="mb-6 text-m">😎 Profil a 🗃 Archiv</h2>
                        <p class="text-gray text-sm">O všech místech a trasách, které jsi navštívil*a, máš v
                            profilu přehledné statistiky a najdeš zde i archiv. Ten funguje jako organizovaný index, v
                            němž si jednotlivá místa můžeš procházet, upravovat, třídit do kategorií nebo poslat jako
                            tip svým kamarádům*kám…</p>
                    </div>
                    <div class="rounded-xl bg-[url('/archiv.webp')] bgg bg-contain h-full">
                    </div>
                </SplideSlide>
            </Splide>
        </div>

    </div>

</div>

<style>


    .bgg {
        background-repeat: no-repeat;
        background-position: bottom right;
    }

    p {
        @apply mb-4;
    }
</style>