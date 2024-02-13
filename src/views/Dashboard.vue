<script>
import axios from 'axios';
import IconCard from '../assets/Group_2.png';

export default {
  data() {
    return {
      showModal: false,
      usersList: [],
      selectedUserById: null
    };
  },
  components: {
    IconCard,
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/users');
        this.usersList = response.data.users;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    async clickShowModal(userId) {
      try {
        this.selectedUserId = userId;
        this.selectedUser = this.usersList.find(user => user.id === userId);
        this.showModal = true;
        console.log('User ID:', userId);
      } catch (error) {
        console.error('Error selecting user:', error);
      }
    },

    clickHideModal() {
      this.showModal = false;
    },
  }
}
</script>

<template>
  <div>
    <div class="flex justify-between">
      <div class="block w-1/3 ml-2 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div class="flex justify-between p-2">
          <div class="font-medium leading-tight text-gray-900 text-neutral-800 ">Padding</div>
          <div>
            <img src="./../assets/Group_2.png" alt="">
          </div>
        </div>
        <div class="p-6 flex justify-start">
          <h3 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            2.480,30
          </h3>
        </div>
        <div class="block bg-gray-200 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 rounded-bl-lg rounded-br-lg">
          <div class="flex">
            <div class="justify-start">
              <div><img src="./../assets/Group_4.png" alt=""></div>
            </div>
            <div class="justify-end text-sm text-gray-500">View More</div>
          </div>
        </div>
      </div>
      <div class="block w-1/3 ml-2 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div class="flex justify-between p-2">
          <div class="font-medium leading-tight text-gray-900 text-neutral-800 ">Paid</div>
          <div>
            <img src="./../assets/Group_2.png" alt="">
          </div>
        </div>
        <div class="p-6 flex justify-start">
          <h3 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-100">
            84.310
          </h3>
        </div>
        <div class="block bg-gray-200 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 rounded-bl-lg rounded-br-lg">
          <div class="flex">
            <div class="justify-start">
              <div><img src="./../assets/Group_7.png" alt=""></div>
            </div>
            <div class="justify-end text-sm text-gray-500">View More</div>
          </div>
        </div>
      </div>
      <div class="block w-1/3 ml-2 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div class="flex justify-between p-2">
          <div class="font-medium leading-tight text-gray-900 text-neutral-800 ">Rejected</div>
          <div>
            <img src="./../assets/Group_2.png" alt="">
          </div>
        </div>
        <div class="p-6 flex justify-start">
          <h3 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            12.155
          </h3>
        </div>
        <div class="block bg-gray-200 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 rounded-bl-lg rounded-br-lg">
          <div class="flex">
            <div class="justify-start">
              <div><img src="./../assets/Group_4.png" alt=""></div>
            </div>
            <div class="justify-end text-sm text-gray-500">View More</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div class="relative overflow-x-auto shadow sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption
            class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            User List
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                User
              </th>
              <th scope="col" class="px-6 py-3">
                Date Of Birth
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Job
              </th>
              <th scope="col" class="px-6 py-3">
                Country
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in usersList" :key="user.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ user.id }}</td>
              <td class="px-6 py-4">
                <img class="w-10 h-10 rounded-full" :src="user.profile_picture" alt="Profile Picture">
              </td>
              <td class="px-6 py-4">{{ user.date_of_birth }}</td>
              <td class="px-6 py-4">{{ user.email }}</td>
              <td class="px-6 py-4">{{ user.job }}</td>
              <td class="px-6 py-4">{{ user.country }}</td>
              <td class="px-6 py-4 text-right">
                <button
                  class="shadow dark:bg-gray-800 dark:border-gray-700bg-white text-black font-medium px-3 py-1 rounded-md mr-2 hover:bg-gray-200">Select</button>
                <button @click="clickShowModal(user.id)"
                  class="shadow dark:bg-gray-800 dark:border-gray-700bg-white text-black font-medium px-3 py-1 rounded-md hover:bg-gray-200">View
                  Detail</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Main modal -->
    <transition name="fade">
      <div v-show="showModal" class="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60">
        <div @click.self="clickHideModal" tabindex="-1" aria-hidden="true"
          class="relative p-4 w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700" style="backdrop-filter: blur(10px);">
            <div class="p-4 md:p-5 space-y-4">
              <div class="flex justify-end">
                <button @click="clickHideModal" type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <div v-if="selectedUser">
                <div class="flex justify-start">
                  <div class="mr-4">
                    <p><img class="w-20 h-20 rounded-full" :src="selectedUser.profile_picture" alt="Profile Picture"></p>
                  </div>
                  <div class="space-y-2 ml-4">
                    <p class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ selectedUser.first_name
                    }} {{ selectedUser.last_name }}</p>
                    <p>{{ selectedUser.email }}</p>
                    <p>{{ selectedUser.phone }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>