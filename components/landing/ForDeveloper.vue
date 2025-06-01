<script lang="ts" setup></script>

<template>
  <section id="developers" class="min-h-screen pt-16 pb-20">
    <div class="flex justify-center">
      <div
        class="relative min-w-full sm:min-w-0 sm:w-4/6 h-5/6 py-10 px-5 sm:mt-24 dark:bg-dark-default flex flex-col justify-start self-center rounded-lg shadow-sm"
      >
        <span class="text-4xl text-secondary text-center">
          Are You a Developer?
        </span>
        <span class="mt-5 sm:w-1/2 text-md self-center text-center"
          >Get paid as an AdHost on our platform by embedding our ads within
          your apps and/or websites. You get to choose the way you prefer</span
        >
        <div class="h-6"></div>
        <div class="grid sm:grid-cols-2 gap-6 self-center">
          <div
            class="p-4 rounded-lg shadow-md flex flex-col dark:bg-dark-light"
          >
            <img
              class="w-40 h-40 self-center"
              src="/assets/illustrations/package.svg"
            />
            <div class="h-2"></div>
            <span class="text-md text-secondary self-center"
              >Pre-Built Package</span
            >
            <span class="text-md self-center"
              >Download our pre-built package into your app and let it do the
              heavy lifting for you!</span
            >
          </div>
          <div
            class="p-4 rounded-lg shadow-md flex flex-col dark:bg-dark-light"
          >
            <img
              class="w-40 h-40 self-center"
              src="/assets/illustrations/api.svg"
            />
            <div class="h-2"></div>
            <span class="text-md text-secondary self-center">API URL</span>
            <span class="text-md self-center"
              >Use our api to make requests and receive ads. You’ll have to do
              the rest of the work yourself.</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
