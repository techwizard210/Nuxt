<template>
  <div class="flex flex-wrap">
    <div class="w-full relative">
      <ul
        :class="[
          'flex',
          'flex-row',
          'flex-nowrap',
          'mb-0',
          'list-none',
          'pt-3',
          'pb-4',
          'transition-all',
          'duration-500',
          'ease-in-out',
          'absolute',
          'top-5',
          leftPosition ? leftPosition : '',
        ]"
      >
        <li class="-mb-px last:mr-0 flex-auto text-center w-tab">
          <a
            class="
              text-xs
              font-bold
              px-5
              py-3
              block
              leading-normal
              rounded-r-none rounded-l-br
              border-1
              font-sans
            "
            v-on:click="toggleTabs(1)"
            v-bind:class="{
              'text-user bg-white border-tablink_border': openTab !== 1,
              'text-white bg-tab border-transparent': openTab === 1,
            }"
          >
            Arbeitnehmer
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center w-tab">
          <a
            class="
              text-xs
              font-bold
              px-5
              py-3
              block
              leading-normal
              border-1
              font-sans
            "
            v-on:click="toggleTabs(2)"
            v-bind:class="{
              'text-user bg-white border-tablink_border': openTab !== 2,
              'text-white bg-tab border-transparent': openTab === 2,
            }"
          >
            Arbeitgeber
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center w-tab">
          <a
            class="
              text-xs
              font-bold              
              px-5
              py-3
              block
              leading-normal
              rounded-l-none rounded-r-br
              border-1
              font-sans
            "
            v-on:click="toggleTabs(3)"
            v-bind:class="{
              'text-user bg-white border-tablink_border': openTab !== 3,
              'text-white bg-tab border-transparent': openTab === 3,
            }"
          >
            Arbeitgeber
          </a>
        </li>
      </ul>
    </div>
    <div
      class="
        relative
        flex flex-col
        min-w-0
        break-words
        bg-white
        w-full
        mt-20
        pb-60
      "
    >
      <div class="w-content_h mx-auto fonts-sans mt-30x text-center text-content_h text-2xl">
        Drei einfache Schritte zu deinem neuen Job
      </div>
      <div class="flex-auto">
        <div class="tab-content tab-space">
          <div
            v-bind:class="[
              { hidden: openTab !== 1, block: openTab === 1 },
              'flex flex-col',
            ]"
          >
            <Item1 />
          </div>
          <div
            v-bind:class="[
              { hidden: openTab !== 2, block: openTab === 2 },
              'flex flex-col',
            ]"
          >
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas.
              <br />
              <br />
              Dynamically innovate resource-leveling customer service for state
              of the art customer service.
            </p>
          </div>
          <div
            v-bind:class="[
              { hidden: openTab !== 3, block: openTab === 3 },
              'flex flex-col',
            ]"
          >
            <p>
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              <br />
              <br />
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item1 from './Item1.vue'
import Item2 from './Item2.vue'
export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1,
      leftPosition: "left-5",
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
      if (tabNumber == 1) {
        this.leftPosition = "left-5";
      } else if (tabNumber == 2) {
        this.leftPosition = "-left-16";
      } else {
        this.leftPosition = "-left-32";
      }
    },
  },
  components: {
    Item1,
    Item2,
  }
};
</script>