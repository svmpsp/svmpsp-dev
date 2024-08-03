<template>
  <div>
    <div class="main-contents">
      <h1>Sivam Pasupathipillai, Ph.D.</h1>
      <hr />
      <h2>a personal website</h2>
      <AppGallery />
    </div>
  </div>
</template>

<style>
/* https://colorhunt.co/palette/def9c49cdba650b498468585 */
:root {
  --app-card-bg-color: #468585;
  --app-card-border-color: #50B498;
  --app-card-color: #DEF9C4;
  --app-card-font-size: 1rem;
  --app-card-hover-border-color: #9CDBA6;
  --app-card-shadow-color: grey;
  --general-box-padding: 1.5rem;
  --main-contents-bg-color: #DEF9C4;
  --subtitle-color: #50B498;
  --title-color: #468585;
}

body {
  margin: 0;
  padding: 0;
}

.main-contents {
  background-color: var(--main-contents-bg-color);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  width: 700px;
}

.main-contents h1,
.main-contents h2 {
  margin: 0;
}
.main-contents h1 {
  color: var(--title-color);
  padding: var(--general-box-padding);
  padding-bottom: 0;
}

.main-contents h2 {
  color: var(--subtitle-color);
  padding-right: var(--general-box-padding);
  text-align: right;
}
</style>