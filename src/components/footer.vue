<template>
  <footer>
    <div class="bg-gradient-to-br from-orange-300 to-orange-400">
      <div class="max-w-7xl mx-auto text-gray-500 p-6">
        <div class="flex flex-col xl:flex-row py-10 pin-b pin-x text-base">
          <div class="mb-8 w-full xl:max-w-sm xl:mb-0 pr-4">
            <div class="text-gray-200">Home Website</div>
            <a class="my-4 inline-block text-primary-500 hover:text-primary-600"
              >More Infos about me in my Git!</a
            >
            <div
              class="text-primary-500 flex items-center sm:justify-start space-x-2"
            >
              <a
                href="https://github.com/CarstenStiel"
                target="_blank"
                class="flex items-center"
              >
                <img alt="Git logo" class="" src="../assets/github.svg" />
              </a>
            </div>
          </div>
          <div class="flex-1 flex flex-col sm:flex-row justify-between">
            <div class="w-full lg:w-1/4 mb-8 xl:mb-0 xl:px-4">
              <div
                class="font-semibold text-gray-100 mb-4 uppercase font-red-hat-display"
              >
                Platform
              </div>
              <nav>
                <ul>
                  <li class="py-1">
                    <a href="/" class="hover:text-white transition">Home</a>
                  </li>
                  <li class="py-1">
                    <a href="/shared-inbox" class="hover:text-white transition"
                      >Shared Inbox</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
            <div class="w-full lg:w-1/4 mb-8 xl:mb-0 xl:px-4">
              <div
                class="font-semibold text-gray-100 mb-4 uppercase font-red-hat-display"
              >
                Company
              </div>
              <nav>
                <ul>
                  <li class="py-1">
                    <a
                      title="About Us"
                      href="/about"
                      class="hover:text-white transition"
                      >About Us</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
            <div class="w-full lg:w-1/4 mb-8 xl:mb-0 xl:px-4">
              <div
                class="font-semibold text-gray-100 mb-4 uppercase font-red-hat-display"
              >
                Other
              </div>
              <nav>
                <ul>
                  <li class="py-1">
                    <a
                      title="About Us"
                      href="/about"
                      class="hover:text-white transition"
                      >About Us</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
