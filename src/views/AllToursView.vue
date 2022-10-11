<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <tours-item
          v-for="tour in tours"
          :key="tour.id"
          :tour="tour"
          @onClicked="tourValue"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ToursItem from "@/components/ToursItem.vue";
export default {
  components: { ToursItem },
  computed: {
    tours() {
      return this.$store.getters["getTours"];
    },
  },
  methods: {
    tourValue(name) {
      this.$router.push({ name: "tour", params: { emit: name } });
    },
  },
};
</script>