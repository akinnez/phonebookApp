interface IMail{
    homeEmail: string,
    workEmail: string,
    otherEmail: string,
}
interface IPhone{
    mobileNumber: any,
    homeNumber: any,
    workNumber: any,
    otherNumber: any,
}
interface IMessenger{
    whatsapp: any,
    facebook: string,
    instagram: string,
    linkedin: string,
    twitter: string,
    ticktok: string,
    otherMedia: string,
}

export interface Icontact extends IPhone,IMessenger,IMail{
    id: string,
    saveTo:string,
    firstName: string,
    lastName?: string |any,
    middleName?: string|any,
}