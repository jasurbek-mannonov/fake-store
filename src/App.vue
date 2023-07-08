<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>
            <router-link to="/">All Products</router-link>
          </span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>
            <router-link to="/electronics">Electronics</router-link>
          </span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <skin-outlined />
              <span>Clothes</span>
            </span>
          </template>
          <a-menu-item key="3">
            <skin-outlined />
            <router-link to="/menclothing"> Men Clothing</router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <skin-outlined />
            <router-link to="/womenclothing"> Women Clothing</router-link>
          </a-menu-item>
        </a-sub-menu>

        <!-- <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu> -->
        <!-- <a-menu-item key="9">
          <file-outlined />
          <span>...</span>
        </a-menu-item>
        <a-menu-item key="10">
          <file-outlined />
          <span>...</span>
        </a-menu-item> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '100vh' }">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { PieChartOutlined, DesktopOutlined, SkinOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    SkinOutlined,
    TeamOutlined,
    FileOutlined,
  },
  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1'])
    };
  },
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>