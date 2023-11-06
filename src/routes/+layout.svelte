
<script lang="ts">
    // This can be false if you're using a fallback (i.e. SPA mode)
    export const prerender = true;
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    let y: number;
    let innerHeight = 0;
    let innerWidth = 0;
    function scrollToTop() {
        document.body.scrollIntoView();
    }

</script>

<div
    class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm
sm:text-base min-h-screen text-white"
>
    <div
        class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10]" +
            (y > 0
                ? " opacity-full pointer-events-auto"
                : "pointer-events-none")}
    >
        <button
            on:click={scrollToTop}
            class="ml-auto rounded-full bg-slate-900 text-one-dark-yellow px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"
        >
            <i class="fa-solid fa-arrow-up" />
        </button>
    </div>
    <Header {y} />
    <slot />
</div>
<Footer />

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />