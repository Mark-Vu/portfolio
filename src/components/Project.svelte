<script lang="ts">
  import profileImg from "../lib/images/profileImg.png";
  export let props: ProjectItem;
  let position = {
    textLeft:
      "lg:pl-16 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 ",
    textRight:
      " lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden",
    imageLeft:
      " max-h-[30rem] max-w-[30rem] -ml-12  lg:ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden z-1",
    imageRight:
      "max-h-[30rem] max-w-[30rem] -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden",
  };

  let textPosition =
    props.imagePosition === "right" ? position.textLeft : position.textRight;
  let imagePosition =
    props.imagePosition === "right" ? position.imageRight : position.imageLeft;
</script>

<div
  class="mt-5 relative isolate overflow-hidden bg-one-dark px-6 lg:overflow-visible lg:px-0"
>
  <div
    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
  >
    <div class={textPosition}>
      <div class="lg:pr-4">
        <div class="lg:max-w-lg">
          <p
            class="text-base font-medium tracking-wider leading-7 text-one-dark-yellow"
          >
            {props.description}
          </p>
          <h1
            class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {props.title}
          </h1>
          <p class="mt-5 lg:mt-6 text-xl leading-8 text-white">
            {props.content}
          </p>
          <ul
            role="list"
            class="mt-5 space-y-5 lg:mt-8 lg:space-y-8 mb-10 text-white"
          >
            {#if props.status}
              <li class="flex gap-x-1">
                <span class="poppin"
                  ><strong
                    class="font-medium text-one-dark-yellow tracking-wider"
                    >Status:</strong
                  >
                  {@html props.status}</span
                >
              </li>
            {/if}
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
                ><strong class="font-medium text-one-dark-yellow tracking-wider"
                  >Technologies:</strong
                >
                {props.technology}</span
              >
            </li>
            <li>
              <p class="font-medium text-one-dark-yellow tracking-wider">
                <a
                  href={props.github}
                  class="inline-flex gap-x-1 justify-center items-center text-one-dark-yellow dark:text-one-dark-blue hover:underline"
                >
                  <svg
                    class="h-5 w-5 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Github with Demo video
                  <svg
                    class="w-4 h-4 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </p>
            </li>
            <li>
              {#if props.liveSite}
                <p class="font-medium text-one-dark-yellow tracking-wider z-50">
                  <a
                    href={props.liveSite}
                    class="inline-flex gap-x-1 justify-center items-center text-one-dark-yellow dark:text-one-dark-blue hover:underline"
                  >
                    Link to site
                    <svg
                      class="w-4 h-4 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </p>
              {/if}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class={imagePosition}>
      <img
        class=" w-full max-w-full h-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
        src={props.image}
        alt="project img"
      />
    </div>
  </div>
</div>
