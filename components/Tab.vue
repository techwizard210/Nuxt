<template>
  <div class="flex flex-wrap z-10">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-8 flex-row">
        <li class="-mb-px last:mr-0 flex-auto text-center w-tab h-10">
          <a class="text-sm font-sans tracking-wider font-bold uppercase px-5 py-3 block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-user bg-white': openTab !== 1, 'text-white bg-tab': openTab === 1}">
            Arbeitnehmer
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center">
          <a class="text-sm font-sans tracking-wider font-bold uppercase px-5 py-3 block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-user bg-white': openTab !== 2, 'text-white bg-tab': openTab === 2}">
            Arbeitgeber
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center">
          <a class="text-sm font-sans tracking-wider font-bold uppercase px-5 py-3 block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-user bg-white': openTab !== 3, 'text-white bg-tab': openTab === 3}">
            Arbeitgeber
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <p class="mx-auto w-content_h text-2xl font-sans text-content_h text-center">
          Drei einfache Schritte zu deinem neuen Job
        </p>
        <div class="flex-auto">
          <div class="tab-content tab-space">            
            <div v-bind:class="[{'hidden': openTab !== 1, 'block': openTab === 1},'flex flex-col']">
              <Item1 />
              <Item2 />
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
import Item1 from './Item1.vue'
import Item2 from './Item2.vue'
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
  },
  components: {
    Item1,
    Item2,
  }
}
</script>