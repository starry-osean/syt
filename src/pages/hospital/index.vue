<template>
    <div class="hospital">
        <!--左侧导航栏-->
        <div class="menu">
                <div class="top">
                    <el-icon><HomeFilled /></el-icon>
                    <span>/医院信息</span>
                </div>
                <el-menu
                    :default-active="$route.path"
                    class="el-menu-vertical-demo">
                        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
                            <el-icon><icon-menu /></el-icon>
                            <span>预约挂号</span>
                        </el-menu-item>
                        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
                        <el-icon><document /></el-icon>
                        <span>医院详情</span>
                        </el-menu-item>
                        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
                        <el-icon><setting /></el-icon>
                        <span>预约通知</span>
                        </el-menu-item>
                        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
                        <el-icon><InfoFilled/></el-icon>
                        <span>停诊信息</span>
                        </el-menu-item>
                        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
                        <el-icon><Search /></el-icon>
                        <span>查询/取消</span>
                        </el-menu-item>
                </el-menu>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script lang="ts" setup name="hospital">
//左侧图标
import {
  Document,
  Menu as IconMenu,
  InfoFilled,
  Search,
  Setting,HomeFilled
} from '@element-plus/icons-vue'
import { useRouter,useRoute } from 'vue-router';
//获取路由器
let $router=useRouter()
let $route=useRoute()
const changeActive=(path:string)=>{
    $router.push({path})
}
</script>
<style scoped lang="scss">
    .hospital{
        display: flex;
        .menu{
           flex: 2;
           display: flex;
           flex-direction: column;
           align-items: center;
           
           .top{
            color: #7f7f7f;
           }
        }
        .content{
            flex: 8;
        }
    }
</style>