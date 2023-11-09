<script lang="ts">
    import profileImg from "../lib/images/profileImg.png";
    import Project from "./Project.svelte";
    import sortingAlgoImg from "../lib/images/projects/sortingAlgo.png";
    import broSliderImg from "../lib/images/projects/brosliderImg.png";
    import ficCheckImg from "../lib/images/projects/ficcheck.png";
    import Experience from "./Experience.svelte";
    import jobHubImg from "../lib/images/projects/jobhub.png";
    import studyHubImg from "../lib/images/projects/studyhub.png";

    let benefits = [
        {
            name: "Languages",
            description:
                "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.",
        },
        {
            name: "Framework",
            description:
                "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.",
        },
        {
            name: "Badminton",
            description:
                "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
        },
    ];

    let project_list: ProjectItem[] = [
        {
            description: "Full Stack Web app",
            title: "Study Ecosystem",
            content:
                "Focused on backend development with JWT authentication, XSS prevention, and CSRF double-submit token. Considering different web security config such as COR, HttpOnly Cookie JWT, SameSite Lax",
            technology:
                "React, Flask, PostgreSQL, Pytest, SQLAchemy, Vite, HTML, CSS, Vercel",
            image: studyHubImg,
            github: "https://github.com/Mark-Vu/StudyHub",
            liveSite: "",
            imagePosition: "right",
        },
        {
            description: "12-hour Hackathon Project",
            title: "Job Hub",
            content:
                "Join Jobhub - an all-in-one job board that scrapes data from different sites including LinkedIn, Indeed,... . The purpose is saving you time from looking up different keywords such as: software dev, software engineer, software developer, etc...?",
            technology:
                "React, Flask, PostgreSQL, SQLAlchemy, Vite, Docker, HTML, CSS",
            image: jobHubImg,
            github: "https://github.com/Mark-Vu/JobHub",
            liveSite: "",
            imagePosition: "left",
        },
        {
            description: "Full Stack Web app",
            title: "FIC Check",
            content:
                "An Attendance Management System build for Fraser International College. It lets students join, take and view attendance sessions. let teachers create, customize and view attendacnce session data",
            technology:
                "Java Spring Boot, PostgreSQL, HTML, CSS, JavaScript, Docker",
            image: ficCheckImg,
            github: "https://github.com/Thachsaudoi/FIC-Check",
            liveSite: "",
            imagePosition: "right",
        },
        {
            description: "Java Swing Application",
            title: "BroSlider",
            content:
                "You just learned Graph Theory and wanted to compare different searching methods? Try BroSlider ",
            technology: "Java Swing, MongoDB",
            image: broSliderImg,
            github: "https://github.com/Mark-Vu/PuzzleSlider",
            liveSite: "",
            imagePosition: "left",
        },
        {
            description: "Pygame Application",
            title: "Sorting Algorithm Visualizer",
            content:
                "Wanna learn sorting algorithms by visualizing? Click the link below",
            technology: "Python, Pygame",
            image: sortingAlgoImg,
            github: "https://github.com/Mark-Vu/Algorithm-Visualizer",
            liveSite: "",
            imagePosition: "right",
        },
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section class="grid grid-cols-1 xl:grid-cols-2 gap-10 py-8 sm:py-14">
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-one-dark-yellow">Mark</span>
                Vu
                <br />
                Software
                <span class="poppins text-one-dark-yellow">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-one-dark-yellow">favorite tech</span>
                includes Python(Flask), Java (Spring Boot or Swing), JavaScript(ReactJS
                or SvelteKit), TailwindCSS, MongoDB & PostgreSQl 🌞
            </p>
        </div>
        <div class="relative grid place-items-center">
            <img
                src={profileImg}
                alt="Profile"
                class="object-cover max-h-[70vh] z-[2]"
            />
        </div>
    </section>
    <section id="projects" class="py-20 gap-2 xl:mt-10 lg:py32">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creative endeavors
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to see <span class="poopins text-one-dark-yellow"
                    >my Projects</span
                > ?
            </h3>
        </div>
        <div class="mt-10 lg:mt-20">
            {#each project_list as project}
                <Project props={project} />
            {/each}
        </div>
    </section>

    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-10 relative"
    >
        <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-one-dark-yellow after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-one-dark-yellow py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-one-dark-yellow">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            <span class="poppins text-one-dark-yellow">My</span> . . .
        </p>
        <!-- <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-one-dark-yellow font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div> -->
        <Experience />
    </section>
</main>
