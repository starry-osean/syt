export interface ResponseData{
    code:number,
    message:string,
    ok:boolean
}
//代表已有的医院数据ts类型
export interface Hospital{
    "id":string,
    "createTime":string,
    "updateTime":string,
    "isDeleted":number,
    "param":{
        "hostypeSting":string,
        fullAddress:string,
    },
    "hoscode":string,
    "hosname":string,
    "hostype":string,
    "provinceCode":string,
    "cityCode":string,
    "districtCode":string,
    "address":string,
    "logoData":string,
    "intro":string,
    "route":string,
    "status":string,
    "bookingRule":{
        "cycle":number,
        "release":string,
        "stopTime":string,
        "quitDay":number,
        "quitTime":string,
        "rule":string[]
    }
}
//存储全部已有医院数组类型
export type Content=Hospital[]
//获取已有医院接口返回数据ts类型
export interface HospitalResponData extends ResponseData{
    data:{
        content:Content,
        "pageable":{
            "sort":{
                "sorted":boolean,
                "unsorted":boolean,
                "empty":boolean
            },
            "pageNumber":number,
            "pageSize":number,
            "offset":number,
            "paged":boolean,
            "unpaged":boolean
        },
        "totalPages":number,
        "totalElements":number,
        "last":boolean,
        "first":boolean,
        "sort":{
            "sorted":boolean,
            "unsorted":boolean,
            "empty":boolean
        },
        "numberOfElements":number,
        "size":number,
        "number":number,
        "empty":boolean

    }
}
//代表医院等级或地区数据ts类型
export interface  reqHospitalLevelAndRegion{
    "id":number,
    "createTime":string,
    "updateTime":string,
    "isDeleted":number,
    "param":{},
    "parentId":number,
    "name":string,
    "value":string,
    "dictCode":string,
    "hasChildren":boolean

}
export type HospitalLevelAndRegionArr=reqHospitalLevelAndRegion[]
export interface HospitalLevelAndRegionResponseData extends ResponseData{
    data:HospitalLevelAndRegionArr
}
export interface HospitalInfo extends ResponseData{
    data:Content
}