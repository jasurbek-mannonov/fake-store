<template>
    <h1>Women's Clothing</h1>
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

  <img
    class="loading"
    v-else
    src="@/assets/images/loading.gif"
    alt="loading gif animation"
  />

  <div style="display: none" v-for="product in products" :key="product.id">
    <a-image-preview-group
    class="preview-image"
      :preview="{
        visible: product.visible,
        onVisibleChange: (vis) => (product.visible = vis),
      }"
    >
      <a-image :src="product.image"/>
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
        const { data } = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
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

<style>

</style>