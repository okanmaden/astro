<!-- src/components/Form.vue -->
<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col">
    <Input
      v-model="email"
      placeholder="Email"
      :onInput="updateEmail"
    />
    <Input
      v-model="password"
      placeholder="Password"
      :onInput="updatePassword"
    />
    <Button text="Login" @click="handleSubmit" />
  </form>
</template>

<script setup>
import { ref } from 'vue';
import Input from './Input.svelte';
import Button from './Button.jsx';

const email = ref('');
const password = ref('');

const updateEmail = (value) => {
  email.value = value;
};

const updatePassword = (value) => {
  password.value = value;
};

const handleSubmit = () => {
  console.log('Login:', { email: email.value, password: password.value });
  // Giriş işlemi burada yapılabilir
};
</script>
