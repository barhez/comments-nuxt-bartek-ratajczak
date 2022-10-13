<template>
  <nav
    class="top-0  z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex  lg:w-auto lg:static lg:block justify-end lg:hidden"
      >
        <button
          class="rounded cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent bg-transparent block outline-none focus:outline-none"
          type="button"
          @click="setNavbarOpen"
        >
          <font-awesome-icon icon="fas fa-bars" />
        </button>
      </div>
      <div
        id="example-navbar-warning"
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center"
              href="#"
            >
              <i
                class="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
              />
              Opis projektu
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center"
              href="#"
            >
              <i
                class="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
              />
              Cele
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center"
              href="#"
            >
              <i
                class="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
              />
              Aktualności
              <div class="ml-2 hidden rounded-full bg-sky-500 px-1.5 py-0.5 text-xs text-white sm:block">46</div>
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center"
              href="/"
            >
              <i
                class="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
              />
              Komentarze
            </a>
          </li>
        </ul>
        <button
          class="gob-cta text-sm text-white active:bg-emerald-600 px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 "
          type="button"
        >
          Wspieram projekt
        </button>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data () {
    return {
      navbarOpen: false
    }
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen
    }
  }
}
</script>
