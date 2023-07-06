<template>
  <h1>All Products</h1>
  <div v-if="products.length > 0" class="container">
    <a-card
      hoverable
      class="product-card"
      v-for="product in products"
      :key="product.id"
    >
      <template #cover>
        <a-image
          :preview="{ visible: false }"
          class="product-image"
          :src="product.image"
          @click="product.visible = true"
        />
      </template>
      <a-card-meta :title="product.title">
        <template #description>
          $ {{ product.price }}
          <a-button
            type="primary"
            @click="$router.push(`/details/${product.id}`)"
          >
            Details
          </a-button>
        </template>
      </a-card-meta>
    </a-card>
  </div>

  <img class="loading" v-else src="@/assets/images/loading.gif" alt="loading gif animation">

  <div style="display: none" v-for="product in products" :key="product.id">
    <a-image-preview-group
      :preview="{
        visible: product.visible,
        onVisibleChange: (vis) => (product.visible = vis),
      }"
    >
      <a-image :src="product.image" />
    </a-image-preview-group>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  data: () => ({
    products: [],
  }),
  setup() {
    return {
      visible: ref(false),
    };
  },
  methods: {
    async getProducts() {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        this.products = data.map((product) => ({ ...product, visible: false }));
      } catch (e) {
        alert("Can't fetch productions!");
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
}
.product-card {
  display: inline-block;
  gap: 10px;
  max-width: 200px;
  min-height: 100px;
  margin: 10px;
}
.product-image {
  max-width: 200px;
  min-height: 120px;
}
.loading{
  margin-left: 20%;
}
</style>
