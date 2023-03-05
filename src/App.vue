<template>
  123
  <router-link to="/" v-slot="{ href, navigate, isActive }">
  <li :class="{ 'active': isActive }">
    <a :href="href" @click="navigate">
      <span>Home</span>
    </a>
  </li>
</router-link>
<router-link to="/new" v-slot="{ href, navigate, isActive }">
  <li :class="{ 'active': isActive }">
    <a :href="href" @click="navigate">
      <span>new</span>
    </a>
  </li>
</router-link>
<router-link to="/design" v-slot="{ href, navigate, isActive }">
  <li :class="{ 'active': isActive }">
    <a :href="href" @click="navigate">
      <span>design</span>
    </a>
  </li>
</router-link>

  <router-view />
</template>