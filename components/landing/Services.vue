<script lang="ts" setup>
const serviceCards = [
  {
    image: "/assets/illustrations/publish.svg",
    name: "Publish Your Ads",
    descriptionLines: [
      "We make sure that you Get reached by millions of people",
      "Our platform is designed to help you attract more customers by targeting your prospects",
    ],
  },
  {
    image: "/assets/illustrations/ads_management.svg",
    name: "Ads Management",
    descriptionLines: [
      "Create new ads with the help of our image editor",
      "Upload existing ads as images, gifs or video files",
      "Set your daily budget for a specific group of ads",
      "Choose your audience by specifying the category of the ad, minimum age of the viewer, geolocation of your campaign and more...",
    ],
  },
  {
    image: "/assets/illustrations/teamwork.svg",
    name: "Team Management",
    descriptionLines: [
      "Add more members to your team to manage and monitor ads easily",
      "Assign different ad groups to different members and make the work more efficient",
    ],
  },
  {
    image: "/assets/illustrations/review.svg",
    name: "Ads Review And Feedback",
    descriptionLines: [
      "Your ads are reviewed by us before they’re published",
      "We make sure your ads satisfy the viewers",
      "We make sure your ads match a minimum accepted quality",
      "We make sure your ads deliver the message",
    ],
  },
];
</script>

<template>
  <section
    id="services"
    style="min-height: calc(100vh - 4rem)"
    class="relative pt-16 pb-20"
  >
    <div class="flex justify-center items-center">
      <div
        class="relative min-w-full sm:min-w-0 sm:w-4/6 h-5/6 py-10 px-5 sm:mt-24 dark:bg-dark-default flex flex-col justify-start self-center rounded-lg shadow-sm"
      >
        <span class="text-4xl text-secondary self-center">Our Services</span>
        <div class="h-6"></div>
        <div class="">
          <UCarousel
            v-slot="{ item }"
            dots
            loop
            :autoplay="{ delay: 2000 }"
            :ui="{
              item: 'sm:basis-1/2',
            }"
            :items="serviceCards"
          >
            <div
              class="dark:bg-dark-light w-full p-4 rounded-lg shadow-md flex flex-col h-[30rem]"
            >
              <img
                class="w-40 h-40 self-center"
                :src="item.image"
                alt="service image"
              />
              <div class="h-2" />
              <span class="text-md text-secondary self-center">
                {{ item.name }}
              </span>
              <div class="text-md self-center flex flex-col gap-3 sm:m-4 my-4">
                <div
                  v-for="(line, index) in item.descriptionLines"
                  :key="index"
                  class="flex gap-2 leading-tight items-center"
                >
                  <div class="rounded-full bg-primary p-1 h-3 w-3" />
                  <div class="">
                    {{ line }}
                  </div>
                </div>
              </div>
            </div>
          </UCarousel>
        </div>
      </div>
    </div>
  </section>
</template>
