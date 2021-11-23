const {callExternalApi} = require('../helper/externalAPICallHelper')
var arr = [
    {
      code: 'NCC',
      title: 'New campaign',
      featured: true,
      priority: 1,
      campaignType: 'DPC',
      shortDesc: null,
      imageSrc: 'https://testimages.donatekart.com/campaign/SwasthyaSwaraj_Cover.jpg',
      created: '2021-09-13T09:58:37Z',
      endDate: '2021-10-28T00:00:00Z',
      totalAmount: 75,
      procuredAmount: 3079850,
      totalProcured: 301,
      backersCount: 114,
      categoryId: 5,
      location: 'Arunachal Pradesh',
      ngoCode: 'Prayaas',
      ngoName: 'Prayaas',
      daysLeft: 0,
      percentage: 41
    },
    {
      code: 'Test-No-Tip-Option',
      title: 'Test No Tip Option',
      featured: false,
      priority: 0,
      campaignType: 'DPC',
      shortDesc: 'Test No Tip Option',
      imageSrc: null,
      created: '2021-11-18T09:22:25Z',
      endDate: '2023-01-09T00:00:00Z',
      totalAmount: 38,
      procuredAmount: 1140,
      totalProcured: 3,
      backersCount: 3,
      categoryId: 1,
      location: 'PAN INDIA',
      ngoCode: 'Prayaas',
      ngoName: 'Prayaas',
      daysLeft: 413,
      percentage: 0
    },
    {
      code: 'NCC234',
      title: 'Testing nextjs',
      featured: false,
      priority: 0,
      campaignType: 'DPC',
      shortDesc: null,
      imageSrc: 'https://testimages.donatekart.com/campaign/ADI_CoverPic.jpg',
      created: '2021-10-22T07:12:10Z',
      endDate: '2025-02-05T00:00:00Z',
      totalAmount: 10,
      procuredAmount: 20000,
      totalProcured: 2,
      backersCount: 2,
      categoryId: 1,
      location: 'Amaravati',
      ngoCode: 'TejoGuna1123',
      ngoName: 'Tejo Guna(Campaigner) ',
      daysLeft: 1171,
      percentage: 2
    }
]
let getAllCampaigns = async() => {
    let data = Object.assign([],await callExternalApi('https://testapi.donatekart.com/api/campaign'))
    let res = data.sort((a,b)=> b.totalAmount-a.totalAmount).map(item => {
        return {
            title:item.title,
            totalAmount:item.totalAmount,
            backersCount:item.backersCount,
            endDate:item.endDate
        }
    })
    return res 
}

let getActiveCampaigns = async() => {
    let data = Object.assign([],await callExternalApi('https://testapi.donatekart.com/api/campaign'))
    let res = data.filter(item => (new Date(item.endDate)>=new Date()))
    .filter(item => (new Date(item.created)>= (new Date()-30)) && (new Date(item.created)>=new Date()))
    .map(item => {
        return {
            title:item.title,
            totalAmount:item.totalAmount,
            backersCount:item.backersCount,
            endDate:item.endDate,
            diff: (new Date(item.created)>= (new Date()-30)) && (new Date(item.created)<=new Date())
        }
    })
    console.log(res)
    return res
}
 
let getClosedCampaigns = async() =>  {
    let data = Object.assign([],await callExternalApi('https://testapi.donatekart.com/api/campaign'))
    let res = data.filter(item => new Date(item.endDate) <= new Date() || item.procuredAmount >= item.totalAmount )
    return res
}

module.exports = {
    getAllCampaigns,
    getActiveCampaigns,
    getClosedCampaigns
}