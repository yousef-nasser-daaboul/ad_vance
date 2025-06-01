<script lang="ts" setup></script>

<template>
  <section
    id="home"
    class="relative overflow-x-clip p-5 pt-10 md:p-16 pb-20"
    style="min-height: calc(100vh - 4rem)"
  >
    <div class="mt-10 text-center">
      <h1
        class="text-3xl md:text-6xl text-secondary font-bold animated-single-color-text"
      >
        GROW AND SCALE YOUR BUSINESS WITH
      </h1>
      <h1 class="text-4xl md:text-7xl font-extrabold text-primary my-10">
        Ad-Vance
      </h1>
      <h2 class="md:text-3xl font-semibold my-10">
        THE FIRST AND ONLY DIGITAL ADVERTISING PLATFORM IN SYRIA
      </h2>
      <UButton
        size="xl"
        trailing-icon="i-solar:map-arrow-right-bold-duotone"
        :ui="{
          trailingIcon: 'md:text-2xl px-7',
          base: 'hover:bg-gradient-to-br bg-gradient-to-tl from-primary to-secondary md:text-xl font-bold',
        }"
      >
        Explore The Method Of Advertising
      </UButton>
      <p class="text-sm md:text-md mt-3">
        Are you a developer?
        <NuxtLink class="text-secondary underline" href="for-developers">
          THIS IS FOR YOU!
        </NuxtLink>
      </p>
    </div>
    <img
      class="absolute scale-75 md:-bottom-1/3 -bottom-1/5 -right-1/3"
      src="/assets/illustrations/background.svg"
    />
  </section>
</template>

<style scoped>
@keyframes singleColorSweep {
  0% {
    background-position: 100% 0; /* Start with the color completely to the left (off-screen) */
  }
  100% {
    background-position: -100% 0; /* End with the color completely to the right (off-screen) */
  }
}

.animated-single-color-text {
  /* Adjust the 'blue' to your desired color */
  /* Adjust 'transparent' if your background isn't truly transparent,
     otherwise, match it to your text's container background color. */
  background-image: linear-gradient(
    to right,
    transparent 0%,
    transparent 10%,
    /* Adjust this percentage to control the "sharpness" of the color edge */
      #6d2d87 50%,
    /* Your desired color at the center of the moving block */ transparent 60%,
    /* Adjust this percentage */ transparent 50%
  );
  background-size: 200% auto; /* Make the background wider than the text */
  color: rgba(255, 157, 1, 0.489); /* Make the actual text color transparent */
  -webkit-background-clip: text;
  background-clip: text;
  animation: singleColorSweep 5s linear infinite; /* Apply the animation */
}
.text-placeholder {
  color: #333; /* A fallback/placeholder color if needed, or your default text color */
}
</style>
