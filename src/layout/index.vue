<template>
  <div class="layout">
    <layoutHeader class="header" />
    <div class="content">
      <layoutSideBar
        class="sideBar"
        :class="{ sideBarClose: sideBar_opened }"
      />
      <layoutPageMain class="pageMain" />
    </div>
  </div>
</template>

<script>
import layoutPageMain from './components/layoutPageMain'
import layoutHeader from './components/layoutHeader'
import layoutSideBar from './components/layoutSideBar'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  computed: {
    ...mapGetters(['sideBar_opened'])
  },
  components: {
    layoutPageMain,
    layoutHeader,
    layoutSideBar
  }
}
</script>
<style lang="less" scoped>
@import '~@/layout/variables.less';

.layout {
  width: 100%;
  height: 100%;
  .header {
    height: @headerHeight;
  }
  .content {
    display: flex;
    width: 100%;
    height: calc(100% - @headerHeight);
  }
  .sideBar {
    height: 100%;
    width: @sideBarWidth;
    transition: width 0.3s;
    &.sideBarClose {
      width: @hideSideBarWidth;
    }
  }
  .pageMain {
    flex: 1;
    height: 100%;
    width: calc(100% - @sideBarWidth);
    transition: width 0.3s;
    &.sideBarClose {
      width: calc(100% - @hideSideBarWidth);
    }
  }
}
</style>
