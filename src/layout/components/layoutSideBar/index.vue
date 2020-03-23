<template>
  <div class="sideBar">
    <el-menu
      :default-active="activeMenu"
      background-color="#3a3f51"
      text-color="#b5b6bd"
      active-text-color="rgb(79, 148, 212)"
      mode="vertical"
      :collapse-transition="false"
      :collapse="sideBar_opened"
    >
      <sidebar-item
        v-for="item in routes"
        :key="item.path"
        :item="item"
        :basePath="item.path"
      ></sidebar-item>
    </el-menu>
  </div>
</template>
<script>
import SidebarItem from './SideBarItem'
import { mapGetters } from 'vuex'
export default {
  name: 'layoutSideBar',
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters(['routes', 'sideBar_opened']),
    activeMenu() {
      return this.$route.path
    }
  },
  created() {
    console.log(this.routes)
  }
}
</script>
<style lang="less" scoped>
@import '~@/layout/variables.less';
.sideBar {
  background: @sideBarBgColor;
  .el-menu {
    border-right: 0;
  }
}
</style>
