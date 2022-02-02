<style lang="scss">
  $error-text: greenyellow;

  h2 {
    padding-top: 40px;
    font-size: 40px;
    text-decoration: underline;
  }

  input[type= text] {
    border-radius: 10px;
  }

  textarea {
    border-radius: 10px;
  }

  #name {
    padding: 10px 0 10px 0;
    text-align: center;
  }

  #mail {
    padding-bottom: 10px;
    text-align: center;
  }

  #message {
    text-align: center;
  }

  #error {
    font-size: 15px;
    margin: 0%;
    color: $error-text
  }
</style>

<script>
  export default {
    data() {
      return {
        mailName: '',
        contactMail: ''
      }
    },
    methods: {
      clickSend() {
        alert('Your message has been sent!')
      }
    },
    props: ['heading']
  }
</script>

<template>

  <h2>
    {{heading}}
  </h2>
  <div id="name">
    <label for="lableName">** Name</label>
    <br/>
    <input name="lableName" type="text" v-model="mailName" example-name="John Doe">
  </div>

  <div id="mail">
    <label for="lableMail">** Email address</label>
    <br/>
    <input name="lableMail" type="text" v-model="contactMail">
  </div>

  <div id="message">
    <textarea name="biography" cols="30" rows="10" placeholder="Message..."></textarea>
  </div>

  <div id="button">
    <p id="error" v-if="!mailName.length || !contactMail.length === true">** Fill in mandatory information</p>
    <input :disabled="!mailName.length || !contactMail.length" @click="clickSend" type="button" value="Send">
  </div>
</template>
