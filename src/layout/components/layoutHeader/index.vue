<template>
  <div class="header">
    <div class="logo">
      <img src="./logo.png" alt="logo" class="logoImg" />
      <span class="logoName">Vue-Admin</span>
    </div>
    <div class="header_right">
      <div class="header_right_left">
        <sideCollapse class="sc" />
        <breadCrumb class="bc" />
      </div>
      <div class="header_right_right">
        <badge class="rItem bd" />
        <userDropdown class="rItem ud" />
      </div>
    </div>
  </div>
</template>

<script>
import sideCollapse from './components/sideCollapse'
import breadCrumb from './components/breadCrumb'
import userDropdown from './components/userDropdown'
import badge from './components/badge'

export default {
  name: 'layoutHeader',
  components: {
    sideCollapse,
    breadCrumb,
    userDropdown,
    badge
  }
}
</script>
<style lang="less" scoped>
@import '~@/layout/variables.less';
.header {
  display: flex;
  z-index: 999;
  font-size: 0; //去除元素字符边距
  .logo {
    height: 100%;
    width: @sideBarWidth;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    line-height: @headerHeight;
    color: #ffffff;
    background: @logoBgColor;
    box-sizing: border-box;
    border-bottom: 1px solid @logoBorderColor;
    transition: width 0.3s;
    overflow: hidden;
    cursor: pointer;
    .logoImg {
      margin-right: 8px;
      height: 28px;
      vertical-align: middle;
    }
    .logoName {
      font-size: 15px;
      font-weight: bold;
      vertical-align: middle;
    }
  }
  .header_right {
    flex: 1;
    height: 100%;
    background: #ffffff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
    overflow: hidden;
    .header_right_left {
      height: 100%;
      float: left;
      margin-left: 20px;
      line-height: @headerHeight;
      overflow: hidden;
      .sc {
        vertical-align: middle;
        margin-right: 20px;
      }
      .bc {
        display: inline-block;
        vertical-align: middle;
      }
    }
    .header_right_right {
      overflow: hidden;
      height: 100%;
      float: right;
      margin-right: 20px;
      line-height: @headerHeight;
      .rItem {
        display: inline-block;
        margin-right: 10px;
        padding: 0 10px;
        &:hover {
          background-color: #f6f8f8;
        }
        &:last-child {
          margin-right: 0;
        }
      }
      .bd {
        // vertical-align: middle;
        line-height: @headerHeight;
      }
      .ud {
        vertical-align: middle;
      }
    }
  }
}
</style>
