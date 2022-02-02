<script>
  export default {
    created() {
      this.fetchJoke()
    },

    data() {
      return {
        jokes: null
      }
    },

    methods: {
      fetchJoke() {
        fetch('https://api.icndb.com/jokes/random/')
          .then((response) => response.json())
          .then((result) => {
          this.jokes = result
        })
      }
    }
  }
</script>

<style>
  p {
    text-align: center;
    font-size: 35px;
    margin-bottom: 0px;
  }

  h2 {
    text-align: center;
  }
</style>

<template>
  <p :key="joke.id"  v-for="joke in jokes">{{joke.joke}}</p>

  <h2>BORING!</h2>

  <div id="button">
    <input @click="fetchJoke" type="button" value="Come up with something new!!">
  </div>
</template>
