<script lang="ts" setup></script>

<template>
  <section
    id="features"
    style="min-height: calc(100vh - 4rem)"
    class="pt-16 pb-20 flex justify-center items-center mt-14"
  >
    <div
      class="relative dark:bg-dark-default h-5/6 p-4 sm:mx-5 px-10 dark:bg-dark-dark-light flex flex-col justify-start self-center rounded-lg shadow-sm"
    >
      <span class="text-3xl text-secondary self-center">Why Us?</span>
      <span class="text-md text-center mt-5">
        Simple, Reliable, Secure And Cost Effiecient
      </span>
      <div class="h-6" />
      <div class="flex sm:flex-row flex-col gap-5 gap-x-6 self-center">
        <div
          class="dark:bg-dark-light w-full sm:w-56 h-80 p-4 rounded-lg shadow-md flex flex-col"
        >
          <img
            class="w-40 h-40 self-center"
            src="/assets/illustrations/audience.svg"
          />
          <div class="h-2" />
          <span class="text-md text-secondary self-center">
            Reach More Audience
          </span>
          <span class="text-md self-center">
            Publish your ads to popular apps and websites in the region.</span
          >
        </div>
        <div
          class="dark:bg-dark-light w-full sm:w-56 h-80 p-4 rounded-lg shadow-md flex flex-col"
        >
          <img
            class="w-40 h-40 self-center"
            src="/assets/illustrations/design.svg"
          />
          <div class="h-2"></div>
          <span class="text-md text-secondary self-center">
            Design It Your Way
          </span>
          <span class="text-md self-center"
            >Make your ads look more attractive with our image editor.</span
          >
        </div>
        <div
          class="dark:bg-dark-light w-full sm:w-56 h-80 p-4 rounded-lg shadow-md flex flex-col"
        >
          <img
            class="w-40 h-40 self-center"
            src="/assets/illustrations/stats.svg"
          />
          <div class="h-2"></div>
          <span class="text-md text-secondary self-center">
            Full Statistics
          </span>
          <span class="text-md self-center">
            Monitor your ads through the entire process, and receive full stats
            on how things are going
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
