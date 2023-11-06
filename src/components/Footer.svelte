<script>
    import gitlogo from "../lib/images/git-logo.svg";
    import linkedinLogo from "../lib/images/linkedln-logo.svg";
    import emailLogo from "../lib/images/email.svg";
    import cvImg from "../lib/images/cv.png";
    let contact_list = [
        { image: gitlogo, link: "https://github.com/Mark-Vu" },
        { image: linkedinLogo, link: "https://www.linkedin.com/in/markvu03/" },
        { image: emailLogo, link: "mailto:mark.dvu.work@gmail.com" },
        { image: cvImg, linl: "#" },
    ];
</script>

<footer
    id="contact"
    class="py-5 sm:py-5 bg-black border-t border-solid border-one-dark-yellow flex flex-col gap-4 justify-center items-center"
>
    <p class="px-4 py-2 bg-white text-slate-950 font-medium rounded-sm">
        Connect with me &darr;
    </p>
    <div
        class="flex flex-col gap-2 relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-one-dark-yellow after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-one-dark-yellow py-4"
    >
        <div class="flex flex-row mx-auto gap-5 lg:ml-0">
            {#each contact_list as contact}
                <a href={contact.link} target="_blank">
                    <button
                        class="mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-2 py-2 group rounded-md bg-white text-slate-950"
                    >
                        <img
                            src={contact.image}
                            alt="contact logo"
                            class="object-cover z-[2] w-7"
                        />
                    </button>
                </a>
            {/each}
        </div>
    </div>
    <h6 class="text-sm">
        <span class="italic">@Made in</span>
        <span class="font-medium poppins"
            >Sveltekit, Typescript, TailwindCSS, Flowbite</span
        >
    </h6>
</footer>
