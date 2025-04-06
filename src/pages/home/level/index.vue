<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级</div>
            <ul class="hospital">
                <li class="active">全部:</li>
                <li>三级甲等</li>
                <li>三级乙等</li>
                <li>二级甲等</li>
                <li>二级乙等</li>
                <li v-for="level in levelArr" :class="{active:activeFlag==level.value}" :key="level.value" @click="changeLevel(level.value)">{{ level.name }}</li>
            </ul>
         </div>
    </div>
</template>
<script setup  lang="ts" >
import {reqHospitalLevelAndRegion}from"../../../api/home/index"
import { onMounted, ref } from "vue";
import type {HospitalLevelAndRegionResponseData,HospitalLevelAndRegionArr} from "../../../api/home/type"
let levelArr=ref<HospitalLevelAndRegionArr>([])
//控制等级高亮效果
let activeFlag=ref<string>('')
onMounted(()=>{
    getLevel()
})
//获取医院等级数据
const getLevel=async()=>{
    let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion(
     "HosType")
      console.log(result);
        //存储医院等级数据
       if (result.code==200){
            levelArr.value=result.data
            console.log(levelArr.value)   
        }
}
const changeLevel=(level:string)=>{
    //高亮响应式数据
    activeFlag.value=level
    $emit('getLevel',level)
}
let $emit=defineEmits(['getLevel'])

</script>
<script lang="ts">
    export default {
        name: 'Level',
    };
</script>
<style scoped>
    .level{
        color: #7f7f7f;
        h1{
            margin-bottom: 10px;
            width: 36px;
            
        }
        .content{
            display: flex;
           .left{
            margin-right: 10px;
           }
           .left{
            margin-right: 10px;
           }
           .hospital{
            display: flex;
             li{
                margin-right: 10px;
                &.active{
                        color: aqua;
                    }
            }
            li:hover{
                color: aqua;
                cursor: pointer;
            }
           }
        }
    }
</style>