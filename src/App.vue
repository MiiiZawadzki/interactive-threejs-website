<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-neutral-900">

    <header class="w-full py-4 px-6">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-thin text-gray-400">SuperCar</h1>
        <nav>
          <ul class="flex gap-10 text-gray-300">
            <li><a href="" class="hover:text-gray-200">Cars</a></li>
            <li><a href="" class="hover:text-gray-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <section class="w-screen flex-1 bg-gradient-to-r from-black via-gray-900 to-fuchsia-900 flex justify-center items-center">
      <div class="flex justify-start flex-col items-start w-full ms-24 mb-24">
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
    </section>
  </div>
</template>