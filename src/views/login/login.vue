<template>
  <div>
    <tInput :value="account" @onInput="changeAccount"></tInput>
    <tInput :value="password" @onInput="changePassword"></tInput>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    changeAccount(obj) {
      this.account = obj.value;
    },
    changePassword(obj) {
      this.password = obj.value;
    }
  }
};
</script>

<style></style>
