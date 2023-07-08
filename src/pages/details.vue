<template>
  <a-button type="primary" @click="back()">Back</a-button>
  <div class="container" v-if="product.title && product.description">
    <a-row type="flex">
      <a-col :flex="2" class="product-details-image">
        <a-image-preview-group>
          <a-image :width="200" :src="product.image" />
        </a-image-preview-group>
      </a-col>

      <a-col :flex="4" class="product-details">
        <h1>{{ product.title }}</h1>
        <h3>{{ product.description }}</h3>
        <h2>Price: $ {{ product.price * count }}</h2>
        <a-divider orientation="left"></a-divider>
        <a-row justify="space-between">
          <a-col :span="4">
            <a-button type="primary" size="large">
             <shopping-cart-outlined />
              Buy now
            </a-button>
          </a-col>
          <a-col :span="4">
            <div class="counter">
              <button @click="amount(-1)">-</button>
              <span> {{ count }} </span>
              <button @click="amount(1)">+</button>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="sum">
              <!-- Overall: $ {{ product.price * count }} -->
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
  <img v-else src="@/assets/images/loading.gif" alt="loading gif animation" />
</template>

<script>
import { ShoppingCartOutlined } from '@ant-design/icons-vue';
import axios from "axios";

export default {
  data: () => ({
    count: 1,
    product: {},
    loading: false,
  }),
  components: {
    ShoppingCartOutlined
  },
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  methods: {
    amount(val){
      if (val == -1 && this.count == 1) return false
      this.count += val
    },
    back() {
      this.$router.push("/");
    },
    async getProductById() {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${this.id}`
        );
        this.loading = true;
        this.product = data;
      } catch (e) {
        alert("Can't fetch product details.");
      }
    },
  },
  mounted() {
    this.getProductById();
  },
};
</script>

<style>
.product-image {
  max-width: 200px;
}
h1 {
  margin-top: 20px;
  font-weight: 800;
  font-size: 24px;
}
.product-details{
  max-width: fit-content;
}
.counter{
  border: 1px solid #cfcfcf;
  padding: 7px;
  border-radius: 10px;
  font-size: 20px;
  max-width: 90px;
  text-align: center;
}
.counter button{
  border: 0;
  background: transparent;
  cursor: pointer;
  margin: 0px 5px;
}
.sum{
  font-weight: 500;
  font-size: 20px;
}
.product-details-image{
  max-width: 30%;
}
</style>
