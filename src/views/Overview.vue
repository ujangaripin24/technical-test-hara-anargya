<template>
  <div class="relative overflow-y-auto">
    <div class="flex justify-start mb-4">
      <button @click="sortByAZ" class="mr-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
        Sort A-Z
      </button>
      <button @click="sortByZA" class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
        Sort Z-A
      </button>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Province Name
          </th>
          <th scope="col" class="px-6 py-3">
            List City Name
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="provinsi in provinceData" :key="provinsi.id">
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 justify-start">
            <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
              {{ provinsi.name }}
            </td>
            <td class="px-2 py-4">
              <transition name="scale">
                <div v-if="provinsi.showFilter">
                  <div class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    v-for="kota in getKotaByProvinsi(provinsi.id)" :key="kota.id">
                    {{ kota.name }}
                  </div>
                  <div>
                    <button @click="clickDetail(provinsi)" type="button"
                      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Hide Detail
                    </button>
                  </div>
                </div>
                <div v-else>
                  <button @click="clickDetail(provinsi)" type="button"
                    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Show Detail
                  </button>
                </div>
              </transition>
            </td>
          </tr>
        </template>
      </tbody>

    </table>
  </div>
</template>

<script>
import provinceData from "./../assets/js/province.js";
import cityData from "./../assets/js/city.js";

export default {
  data() {
    return {
      provinceData: provinceData.map(provinsi => ({ ...provinsi, showFilter: false })),
      cityData: cityData
    };
  },
  methods: {
    getKotaByProvinsi(provinsiId) {
      return this.cityData.filter(city => city.provinsi_id === provinsiId);
    },
    clickDetail(provinsi) {
      provinsi.showFilter = !provinsi.showFilter;
    },
    sortByAZ() {
      this.provinceData.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sortByZA() {
      this.provinceData.sort((a, b) => (a.name < b.name ? 1 : -1));
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>