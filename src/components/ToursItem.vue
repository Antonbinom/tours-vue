<template>
  <div class="item-wrapper d-flex flex-column mb-4" @click="onEmit(tour.emit)">
    <img
      :src="require(`@/assets/img/${tour.img}`)"
      class="mb-3"
      :alt="tour.name"
    />

    <h3 class="">{{ tour.name }}.</h3>
    <div class="description">
      {{ tour.description | cutText }}
      <br />
      <span>Читать далее ...</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tour: {
      type: Object,
      require: true,
    },
  },
  methods: {
    onEmit(name) {
      this.$emit("onClicked", name);
    },
  },
  filters: {
    cutText(text) {
      return text.substr(0, 400);
    },
  },
};
</script>