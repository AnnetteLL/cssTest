<template>
  <div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      @select="clickPush"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="(menuItem, menuIndex) in menuList">
        <el-menu-item index="1" :key="menuIndex" v-if="menuItem.url">
          <span slot="title">{{menuItem.name}}</span>
        </el-menu-item>
        <el-submenu index="2" :key="menuIndex" v-else>
          <template slot="title">
            <span>{{menuItem.name}}</span>
          </template>
            <el-menu-item index="2-1" v-for="(item, index) in menuItem.children" :key="index">{{item.name}}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          index: '1',
          name: '主页',
          url: '/home',
        },
        {
          index: '2',
          name: 'CSS',
          children: [
            {
              index: '2-1',
              name: '简单的视差滚动',
              url: '/CssTest1',
            }
          ]
        }
      ]
    }
  },
  computed: {
    defaultActive() {
      var active = '';
      this.menuList.map((item) => {
        if(item.url == this.$route.path) {
          active = item.index
        } else {
          if(item.children){
            item.children.map((Item) => {
              if(Item.url == this.$route.path){
                active = Item.index
              }
            })
          }
        }
      })
      return active
    }
  },
  methods: {
    clickPush(key, keyPath){
      console.log(this.$route.path);
      var link = '';
      if(keyPath[1]){
        link = this.menuList[keyPath[0]-1].children[key.indexOf('-')-1].url;
      } else {
        link = this.menuList[key-1].url;
      }
      this.$router.push(link)
    },
  }
}
</script>

<style scoped>
  .el-menu {
    height: 100vh;
  }
</style>