<template>
  <i
    class="sideCollapse"
    :class="{
      'el-icon-s-unfold': this.sideBar_opened,
      'el-icon-s-fold': !sideBar_opened
    }"
    @click="toggleOpen()"
  ></i>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['sideBar_opened'])
  },
  methods: {
    toggleOpen() {
      console.log('sideCollapse click')
      // this.$store.commit('layout/SET_SIDEBAR_OPENED', !this.sideBar_opened)
    }
  }
}
</script>
<style lang="less" scoped>
.sideCollapse {
  font-size: 18px;
  color: #363f44;
  cursor: pointer;
}
</style>
