<template>
  <el-menu-item :index="basePath" v-if="cLength == 0">
    <i :class="item.meta.icon || ''"></i>
    <span slot="title">{{ item.meta.title }}</span>
  </el-menu-item>
  <el-menu-item
    :index="resolvePath(basePath, children[0].path)"
    v-else-if="cLength == 1"
  >
    <i :class="children[0].meta.icon || ''"></i>
    <span slot="title">{{ children[0].meta.title }}</span>
  </el-menu-item>
  <el-submenu :index="basePath" v-else>
    <template slot="title">
      <i :class="item.meta.icon || ''"></i>
      <span>{{ item.meta.title }}</span>
    </template>
    <el-menu-item
      :index="resolvePath(basePath, c.path)"
      v-for="c in children"
      :key="c.name"
    >
      <template slot="title">
        <i :class="c.meta.icon || ''"></i>
        <span>{{ c.meta.title }}</span>
      </template>
    </el-menu-item>
  </el-submenu>
</template>
<script>
// 一般业务有两级导航栏就够用了
// 根据router/index文件中路由的定义，如果有布局页面的，必定包含children属性（至少一个）
// 所以根据children的数组长度判断是否渲染多个子导航栏
// - 数量为0时，生成对应路由导航
// - 数量为1时，仅生成一级导航栏
// - 数量大于1时，生成一级导航栏以及多个二级导航栏
import { isAbsolutePath } from '@/utils/urlValidate'
export default {
  name: 'SidebarItem2',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      children: [],
      onlyOne: false,
      basePath: ''
    }
  },
  methods: {
    resolvePath(base, path) {
      if (isAbsolutePath(path)) {
        return path
      }
      if (isAbsolutePath(base)) {
        return base
      }
      let cpath = `${base}/${path}`
      console.log(cpath)
      return cpath
    }
  },
  created() {
    this.cLength = this.item.children ? this.item.children.length : 0
    this.children = this.item.children
    this.basePath = this.item.path == '/' ? '' : this.item.path
  }
}
</script>
<style lang="less" scoped>
.sideItem {
  background: #000;
}
</style>
