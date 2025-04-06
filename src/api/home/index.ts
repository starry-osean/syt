//统一管理首页模块接口
import request from "../../utils/request";
import type { HospitalResponData ,HospitalLevelAndRegionResponseData,HospitalInfo} from "./type";
//通过枚举管理首页模块的接口地址
enum API{
    //获取已有医院数据接口地址
    HOSPITAL_URL='hosp/hospital/',
    //获取医院等级与地区接口
    HOSPITALEVELANDREGION_URL='/cmn/dict/finByDictCode/',
    //根据关键字获取医院名字数据
    HOSPITALONFO_URL='/hosp/hospital/findByHosname/{hosname}'
}
//获取医院数据
export   const reqHospital=(page:number,limit:number,hostype='',districtCode=' ')=>
    request.get<any,HospitalResponData>(API.HOSPITAL_URL+`${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
//获取医院等级或地区数据
export const reqHospitalLevelAndRegion=(dictCode:string)=>
    request.get<any,HospitalLevelAndRegionResponseData>(API.HOSPITALEVELANDREGION_URL+dictCode)
export const reqHospitalInfo=(hosname:string)=>request.get<any.HospitalInfo>(API.HOSPITALONFO_URL+hosname)