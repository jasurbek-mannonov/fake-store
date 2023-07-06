<template>
  <a-button type="primary" @click="back()">Back</a-button>
  <div class="container" v-if="product.title && product.description">
    <img class="product-image" :src="product.image" alt=""/>
    <h1>{{ product.title }}</h1>
    <h3>{{ product.description }}</h3>
    <h3>Price: $ {{ product.price }}</h3>
  </div>
  <img v-else src="@/assets/images/loading.gif" alt="loading gif animation">
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    id: "",
    product: {},
    loading: false
  }),
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    async getProductById() {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${this.id}`
          );
          this.loading = true
        this.product = data;
      } catch (e) {
        alert("Can't fetch product details.");
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProductById();
  },
};
</script>

<style scoped>
  .product-image{
    max-width: 400px;
  }
  h1{
    margin-top: 20px;
    font-weight: 800;
    font-size: 24px;
  }
</style>

