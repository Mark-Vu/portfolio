<script lang="ts">
    export let y: number;

    export let tabs = [
        { section: '"About me"', link: "#about" },
        { section: '"Projects"', link: "#projects" },
    ];
</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid sm-max:px-3" +
        (y > 0
            ? " py-4 border-one-dark-yellow bg-one-dark"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 class="font-medium text-lg">
        <b class="font-bold poppins text-one-dark-yellow">Mark</b>
        <span class="">Vu</span>
    </h1>
    <div class="flex items-center gap-4 sm-max:gap-2">
        {#each tabs as tab, index}
            <a
                href={tab.link}
                class="duration-200 hover:text-one-dark-yellow sm-max:text-sm"
                target={index === 2 ? "_blank" : ""}
            >
                <p>
                    &#123; <span class="text-one-dark-green">
                        {tab.section}
                    </span>&#125;
                </p>
            </a>
        {/each}
        <a
            href="#contact"
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-md bg-white text-slate-950
        sm-max:px-2"
        >
            <div
                class="absolute top-0 right-full w-full h-full bg-one-dark-yellow opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h4 class="relative z-9">Get in touch</h4>
        </a>
    </div>
</header>
