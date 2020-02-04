<template>
  <div>
    <input placeholder="username" v-model="username">
    <br>
    <input placeholder="password" v-model="password">
    <br>
    <button v-on:click="login">login</button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    getMessage() {
      const path = 'http://localhost:5000/mobile/ping';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    login() {
      const payload = {
        username: this.username,
        password: this.password,
      };
      const path = 'http://localhost:5000/mobile/login';
      axios.post(path, payload)
        .then((res) => {
          this.msg = res.data;
        });
    },
    register() {
      const payload = {
        username: 'test',
        password: '1',
      };
      const path = 'http://localhost:5000/mobile/register';
      axios.post(path, payload)
        .then((res) => {
          this.msg = res.data;
        });
    },
  },
};
</script>
