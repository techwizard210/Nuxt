<template>
  <div class="flex flex-wrap z-10">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-no-wrap pt-3 pb-4 flex-row overflow-hidden">
        <li class="-mb-px last:mr-0 flex-auto text-center w-tab h-10 flex-none">
          <a class="text-xs font-bold uppercase px-5 py-3 block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-user bg-white': openTab !== 1, 'text-white bg-tab': openTab === 1}">
            Profile
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center flex-none">
          <a class="text-xs font-bold uppercase px-5 py-3 block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-user bg-white': openTab !== 2, 'text-white bg-tab': openTab === 2}">
            Settings
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center flex-none">
          <a class="text-xs font-bold uppercase px-5 py-3 block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-user bg-white': openTab !== 3, 'text-white bg-tab': openTab === 3}">
            Options
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="[{'hidden': openTab !== 1, 'block': openTab === 1}, 'h-80']">
              <p>
                Collaboratively administrate empowered markets via
                plug-and-play networks. Dynamically procrastinate B2C users
                after installed base benefits.
                <br />
                <br />
                Dramatically visualize customer directed convergence
                without revolutionary ROI.
              </p>
            </div>
            <div v-bind:class="[{'hidden': openTab !== 2, 'block': openTab === 2}, 'h-80']">
              <p>
                Completely synergize resource taxing relationships via
                premier niche markets. Professionally cultivate one-to-one
                customer service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </div>
            <div v-bind:class="[{'hidden': openTab !== 3, 'block': openTab === 3}, 'h-80']">
              <p>
                Efficiently unleash cross-media information without
                cross-media value. Quickly maximize timely deliverables for
                real-time schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions
                without functional solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>