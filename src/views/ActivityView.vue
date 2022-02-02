<script>
  export default {
    created() {
      this.fetchActivity()
    },

    data() {
      return {
        activity: null
      }
    },

    methods: {
      fetchActivity() {
        fetch('https://www.boredapi.com/api/activity/')
          .then((response) => response.json())
          .then((result) => {
            this.activity = result
          })
      }
    }
  }
</script>

<style>
  p {
    text-align: center;
    font-size: 50px;
    margin: 70px 0 100px 0;
  }

  h2 {
    text-align: center;
  }
</style>

<template>
  <p>{{ activity.activity }}!</p>

  <h2>BORING!!</h2>

  <div id="button">
    <input
      type="button"
      @click="fetchActivity"
      value="Come up with something new!!"
    />
  </div>
</template>
