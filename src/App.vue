<script setup>
import { onMounted } from 'vue';
import { useThreeJS } from '@/composables/useThreeJS';
const { init } = useThreeJS();

onMounted(async () => {
  await init();
})
</script>

<template>
  <div class="flex-col items-center justify-center " style="height: 100vh; width: 100vw;">

    <header class="w-full py-4 px-6 bg-neutral-900" style="height: 8vh;">
      <div class="container mx-auto h-full flex justify-between items-center">
        <h1 class="text-2xl font-thin text-gray-400">SuperCar</h1>
        <nav>
          <ul class="flex gap-10 text-gray-300">
            <li><a href="" class="hover:text-gray-200">Cars</a></li>
            <li><a href="" class="hover:text-gray-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 bg-black" style="height: 92vh;">
      <div class="bg-gradient-to-r from-neutral-900 to-black flex justify-center items-center">
        <div class="flex flex-col justify-start items-start p-7">
          <h1 class="text-7xl font-thin font-extrabold text-gray-500 ">SuperCar</h1>
          <h2 class="text-2xl font-bold text-gray-300 mt-1 mb-4">The Future Ready Cars</h2>
  
          <p class="text-lg text-fuchsia-200">
            100% Electric; 100% Future;
          </p>
          <p class="text-lg font-thin text-fuchsia-100 mb-8">
            Browse our exclusive collection of high-performance cars and drive your dream today!
          </p>
          
          <button class="text-white hover:text-fuchsia-300">
            &rarr; Check more
          </button>
        </div>
      </div>
      <div id="threejs-container"></div>
    </section>
  </div>
</template>