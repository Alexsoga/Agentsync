export interface Order {
    orderid:string;
    uid:string;
    propertytype:string;
    squarefeet:string;
    address?:Address[];
    orders?:Products[];
    orderby:string,
    ordersprice?: Productsprice[];
    photographyaddons?:PhotographyAddons[];
    videoaddons?:VideoAddons[];
    photographyaddonsprice?:PhotographyAddonsprice[];
    videoaddonsprice?: VideoAddonsprice[];
    meetingtype:string;
    accesscode?:string;
    visitingdate:Date;
    visitingtime?:Date;
    comments?:string;
    ordereddate?:Date;
    status?:string;
    payment?:boolean;
    email?:any;
    orderdate:string;
    visit:string;
    orderprice:any;
    addons?:any;
    // phone:any;
    Photographyaddons?: any;
    Photographyaddonsprice?: any;
    Videoaddons?: any;
    VideoaddonsPrice?: any;
}
export interface Address{
    street:string;
    city:string;
    zip:string;
    unit?:string;
}
export interface Products{
    photography?:boolean;
    video?:boolean;
    tour360?:boolean;
    website?:boolean;
    floorplansBW?:boolean;
    floorplansC?:boolean;
    floorplanCF?:boolean;
    dsf50?:boolean;
    dsf100?:boolean;
    brouchre825?:boolean;
    brouchre850?:boolean;
    brouchre425?:boolean;
    brouchre450?: boolean;
}
export interface Productsprice {
    photography?: any;
    video?: any;
    tour360?: any;
    website?: any;
    floorplansBW?: any;
    floorplansC?: any;
    floorplanCF?: any;
    dsf50?: any;
    dsf100?: any;
    brouchre825?: any;
    brouchre850?: any;
    brouchre425?: any;
    brouchre450?: any;
}
export interface PhotographyAddons{
    rushfee?:boolean;
    twlightshot?:boolean;
    communityshot?:boolean;
}
export interface VideoAddons {
    rushfee?: boolean;
    twlightshot?: boolean;
    communityshot?: boolean;
}
export interface PhotographyAddonsprice {
    rushfee?: any;
    twlightshot?: any;
    communityshot?: any;
}
export interface VideoAddonsprice {
    rushfee?: any;
    twlightshot?: any;
    communityshot?: any;
}