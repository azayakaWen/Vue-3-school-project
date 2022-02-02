
<style lang="scss">
  $text-color: white;
  $button-color: black;

  body {
    background-image: url(/assets/leaf.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    color: $text-color;
  }

  h1 {
    text-align: center;
    font-size: 60px;
    padding-top: 0;
  }

  #contact {
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
  }

  #links {
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    list-style-type: none;
    padding-left: 110px;
  }

  .link {
    color: $text-color;
    font-size: 30px;
    font-weight: bold;
  }

  #button {
    text-align: center;
    padding-bottom: 10px;
  }

  input[type=button]{
    background-color: $button-color;
    color: $text-color;
    font-size: 20px;
    border-radius: 10px;
  }
</style>

<template>
  <div id="contact">
    <RouterLink to="/contact" class="link">Contact</RouterLink>

    <img src="/assets/facebook.png" alt="Facebook">
    <img src="/assets/instagram.png" alt="Instagram">
  </div>

  <h1>I'M BORED!</h1>

  <nav>
    <ul id="links">
      <li>
        <RouterLink to="/" class="link">Tell me what to do?!</RouterLink>
      </li>
      <li>
        <RouterLink to="/jokes" class="link">Chuck Norris, make me laugh!</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView></RouterView>
  </main>
</template>
