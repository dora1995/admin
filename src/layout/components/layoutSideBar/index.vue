<template>
  <div class="sideBar">
    <el-menu
      :default-active="activeMenu"
      background-color="#3a3f51"
      text-color="#b5b6bd"
      active-text-color="rgb(79, 148, 212)"
      :collapse="sideBar_opened"
      :collapse-transition="false"
      :unique-opened="true"
      @select="menuSelect"
    >
      <SidebarItem v-for="item in calcRoutes" :key="item.name" :item="item" />
    </el-menu>
  </div>
</template>
<script>
import { isAbsolutePath } from '@/utils/validate'
import SidebarItem from './sideBarItem'
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
    },
    calcRoutes() {
      // 去除掉第一层hidden:true的路由
      let arr = []
      if (this.routes) {
        arr = this.routes.filter(item => {
          return !item.hidden
        })
      }
      return arr
    }
  },
  methods: {
    menuSelect(index) {
      let isAbsolute = isAbsolutePath(index)
      if (isAbsolute) {
        window.open(index, '_blank')
        return true
      } else {
        this.$router.push(index)
        return true
      }
    }
  },
  created() {
    console.log('layoutSideBar created')
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
