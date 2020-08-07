<template>
  <div id="app">
      <h1>Clicker APP</h1>
      <button class="btn btn-primary" type="submit" @click="submit">
        CLICK ME
      </button>
      <p>Total clicks: {{ counter }}</p>
    </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      counter: 0,
      clickData: {
        clicked_at: "",
        ip_address: "",
        user_agent: "",
      },
    };
  },
  methods: {
    getCurrentDate() {
      return this.clickData.clicked_at = new Date().toLocaleString();
    },

    getIpAddress() {
      this.$http.get("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => (this.clickData.ip_address = data.ip));
    },

    getUserAgent() {
      return this.clickData.user_agent = navigator.userAgent;
    },

    submit() {
      const apiURL = "http://localhost:3000/clicker";
      this.counter++;
      this.getCurrentDate();
      this.getIpAddress();
      this.getUserAgent();

      this.$http.post(apiURL, this.clickData).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
}

button {
  cursor: pointer;
}
</style>
