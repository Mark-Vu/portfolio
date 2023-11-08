<script>
    import pythonIcon from "../lib/images/languages/python.svg";
    import cIcon from "../lib/images/languages/c.svg";
    import cppIcon from "../lib/images/languages/cpp.svg";
    import jsIcon from "../lib/images/languages/js.svg";
    import tsIcon from "../lib/images/languages/ts.svg";
    import rIcon from "../lib/images/languages/r.svg";
    import cssIcon from "../lib/images/languages/css.svg";
    import htmlIcon from "../lib/images/languages/html.svg";
    import javaIcon from "../lib/images/languages/java.svg";

    import reactIcon from "../lib/images/frameworks/react.svg";
    import flaskIcon from "../lib/images/frameworks/flask.svg";
    import javaspringIcon from "../lib/images/frameworks/javaspring.svg";
    import nodejsIcon from "../lib/images/frameworks/nodejs.svg";
    import reactNativeIcon from "../lib/images/frameworks/react-native.png";
    import tailwindIcon from "../lib/images/frameworks/tailwindcss.svg";
    import sassIcon from "../lib/images/frameworks/sass.svg";
    import expressIcon from "../lib/images/frameworks/express.svg";
    import sveltekitIcon from "../lib/images/frameworks/sveltekit.svg";

    import dockerIcon from "../lib/images/cloud/docker.svg";
    import githubIcon from "../lib/images/cloud/github.svg";
    import mongoIcon from "../lib/images/cloud/mongodb.svg";
    import postgresIcon from "../lib/images/cloud/postgresql.svg";
    import postmanIcon from "../lib/images/cloud/postman.svg";
    import restApiIcon from "../lib/images/cloud/restapi.svg";
    import vercelIcon from "../lib/images/cloud/vercel.svg";
    import vscodeIcon from "../lib/images/cloud/vscode.svg";

    let language_icons = [
        {
            Python: pythonIcon,
            TypeScript: tsIcon,
            Java: javaIcon,
        },
        {
            JavaScript: jsIcon,
            Html: htmlIcon,
            Css: cssIcon,
        },
        {
            C: cIcon,
            "C++": cppIcon,
            R: rIcon,
        },
    ];

    let framework_icons = [
        {
            Flask: flaskIcon,
            "Java Spring Boot": javaspringIcon,
            NodeJS: nodejsIcon,
        },
        {
            React: reactIcon,
            SvelteKit: sveltekitIcon,
            ReactNative: reactNativeIcon,
        },
        {
            Sass: sassIcon,
            Express: expressIcon,
            TailwindCSS: tailwindIcon,
        },
    ];

    let cloud_services = [
        {
            Docker: dockerIcon,
            GitHub: githubIcon,
            MongoDB: mongoIcon,
        },
        {
            PostgreSQL: postgresIcon,
            Postman: postmanIcon,
            RestAPI: restApiIcon,
        },
        {
            Vercel: vercelIcon,
            VSCode: vscodeIcon,
        },
    ];
</script>

<div class="z-[1]">
    <div class="md:flex mt-1 text-center ml-10 mr-10 md:ml-36 md:mr-36">
        <div class="md:mr-20 md:w-1/3">
            <h1
                class="poppins text-one-dark-yellow font-semibold text-lg sm:text-xl md:text-2xl"
            >
                Technologies
            </h1>

            <div class="relative mt-5 text-left">
                <div class="flex items-center relative pb-5 justify-start">
                    <div
                        class="border-r-2 border-one-dark-white absolute h-full top-2 z-10"
                    >
                        <i
                            class="fas fa-circle text-one-dark-yellow -top-1 -ml-2 absolute"
                        />
                        <div
                            class="absolute seccion -ml-8 font-bold italic text-one-dark-yellow"
                        >
                            LANGUAGES
                        </div>
                    </div>
                    <div class="ml-6 pt-5">
                        {#each language_icons as icons}
                            <div class="flex mb-4 space-x-10">
                                {#each Object.entries(icons) as [title, iconImg]}
                                    <div>
                                        <img
                                            src={iconImg}
                                            alt="icon"
                                            class="w-24"
                                        />
                                    </div>
                                {/each}
                            </div>
                        {/each}
                    </div>
                </div>

                <div class="flex items-center relative pb-5 pt-5 justify-start">
                    <div
                        class="border-r-2 border-one-dark-white absolute h-full top-2 z-10"
                    >
                        <i
                            class="fas fa-circle text-one-dark-yellow -top-1 -ml-2 absolute"
                        />
                        <div
                            class="absolute seccion -ml-8 font-bold italic text-one-dark-yellow"
                        >
                            FRAMEWORKS
                        </div>
                    </div>

                    <div class="ml-6 pt-5">
                        {#each framework_icons as icons}
                            <div class="flex mb-4 space-x-10">
                                {#each Object.entries(icons) as [title, iconImg]}
                                    <div>
                                        <img
                                            src={iconImg}
                                            alt="icon"
                                            class="w-24"
                                            style={title === "Flask"
                                                ? "filter: contrast(0.01%) brightness(200%)"
                                                : ""}
                                        />
                                    </div>
                                {/each}
                            </div>
                        {/each}
                    </div>
                </div>

                <div class="flex items-center relative pb-5 pt-5 justify-start">
                    <div
                        class="border-r-2 border-one-dark-white absolute h-full top-2 z-10"
                    >
                        <i
                            class="fas fa-circle text-one-dark-yellow -top-1 -ml-2 absolute"
                        />
                        <div
                            class="absolute seccion -ml-8 font-bold italic text-one-dark-yellow"
                        >
                            SERVICES
                        </div>
                    </div>
                    <div class="ml-6 pt-5">
                        {#each cloud_services as icons}
                            <div class="flex mb-4 space-x-10">
                                {#each Object.entries(icons) as [title, iconImg]}
                                    <div>
                                        <img
                                            src={iconImg}
                                            alt="icon"
                                            class="w-24"
                                            style={title === "Vercel"
                                                ? "filter: contrast(0.01%) brightness(200%)"
                                                : ""}
                                        />
                                    </div>
                                {/each}
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

        <div class="my-10 md:w-2/3 md:my-0">
            <h1
                class="poppins text-one-dark-yellow font-semibold text-lg sm:text-xl md:text-2xl"
            >
                Experience
            </h1>

            <div class="relative mt-5 text-left flex flex-col ali">
                <div class="flex items-center relative">
                    <div
                        class="border-r-2 border-one-dark-white absolute h-full left-1 md:left-20 top-2 z-10"
                    >
                        <i
                            class="fas fa-circle text-one-dark-yellow -top-1 -ml-2 absolute"
                        />
                    </div>

                    <div class="ml-12 md:ml-24 mb-3">
                        <time
                            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-one-dark-yellow"
                            >Jun - Sep 2023</time
                        >
                        <h3
                            class="text-lg font-semibold text-gray-900 dark:text-white"
                        >
                            IOS Developer
                        </h3>
                        <div class="italic mb-3">CJSF Radio</div>
                        <p class="text-gray-500 dark:text-gray-300 mb-3">
                            Collaborated within a four-member team to test and
                            deploy <a
                                href="https://apps.apple.com/us/app/cjsf-radio-fm/id1599448685"
                                target="_blank"
                                class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                                >CJSF Radio</a
                            > an in-house application allowing users to listen to
                            live radio, see upcoming programs, choose favorite programs,
                            and receive notifications
                        </p>
                        <li class="flex gap-x-1">
                            <svg
                                class="mt-[0.1rem] h-5 w-5 flex-none text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span class="poppins font-medium"
                                ><strong
                                    class="font-medium text-one-dark-yellow tracking-wider"
                                    >Technologies:</strong
                                >
                                React Native</span
                            >
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .seccion {
        text-transform: uppercase;
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        transform: rotate(270deg);
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        -o-transform-origin: 0 0;
        transform-origin: 0 0;
        top: 60%;
    }
</style>
