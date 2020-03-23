<template>
  <div class="sideItem" v-if="!item.hidden">
    <template v-if="hasOnlyChild(item.children)">
      <page-link :to="childItemPath">
        <el-menu-item :index="childItemPath">
          <i :class="childItem.meta.icon || ''"></i>
          <span slot="title">{{ childItem.meta.title }}</span>
        </el-menu-item>
      </page-link>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <i :class="item.meta.icon || ''"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <template v-for="child in item.children">
        <page-link :to="resolvePath(child.path)" :key="child.path">
          <el-menu-item :index="resolvePath(child.path)">
            <i :class="child.meta.icon || ''"></i>
            <span slot="title">{{ child.meta.title }}</span>
          </el-menu-item>
        </page-link>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import PageLink from './Link'
import { isAbsolutePath } from '@/utils/validate'
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      childItem: null,
      childItemPath: ''
    }
  },
  methods: {
    hasOnlyChild(children = [], item) {
      let newChildren = children.filter(obj => {
        return !obj.hidden
      })
      console.log(newChildren)
      if (newChildren.length === 1) {
        this.childItem = newChildren[0]
        this.childItemPath = this.resolvePath(newChildren[0].path)
        return true
      }
      return false
    },
    resolvePath(router) {
      if (isAbsolutePath(router)) {
        return router
      }
      if (isAbsolutePath(this.basePath)) {
        return this.basePath
      }
      let path = `${this.basePath == '/' ? '' : this.basePath}/${router}`
      console.log(path)
      return path
    }
  },
  components: {
    PageLink
  }
}
</script>
