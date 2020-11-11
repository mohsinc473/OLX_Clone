
const Initial_State = {
    users:[
        {
            name: "Mohsin",
            email: "mohsinsheikh473@gmail.com"
        }
    ],
    currentUser : [

    ],
    cards:[
        {
            price: "9,524,100",
            title: "Tesla Cybertruck Dual Motor AWD",
            imageURL : "https://www.tesla.com/xNVh4yUEc3B9/02_Desktop.jpg",
            
        },
        {
            price: "94,605",
            title: "Sisyphus MINI VENEER",
            imageURL : "https://cnet1.cbsistatic.com/img/p-0JK9-392pB72yYqEAOOyuNn_c=/980x551/2019/03/23/e63175f6-3bf2-4b46-be55-27ae51ce5ba5/007-architectural-digest-ad-design-show-2019.jpg",
        },
        {
            price: "174,900",
            title: "Iphone 12 Pro Max",
            imageURL : "https://cdn.mos.cms.futurecdn.net/jFLU2eHM8d54KLdpT5Au2S.jpg",
        },
        {
            price: "29,5000",
            title: "Macbook Pro 2020",
            imageURL : "https://www.dpreview.com/files/p/articles/3210487912/MacBook_Pro_13-inch_4.jpeg",
        },
        {
            price: "55,650",
            title: "Sony WH-1000XM4 Headphones",
            imageURL : "https://www.sony-mea.com/image/10517a29b497c2f31fb2cc1d1839f93f?fmt=png-alpha&wid=720",
        },
        {
            price: "10,890 - One Night",
            title: "Room For Rent, Islamabad Hotel",
            imageURL : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/183576552.webp?k=55dd24feb500e0624258c888f84d68154ab26ed2d8caec36684336ac7a760483&o=",
        },
        {
            price: "82,000",
            title: "Electric Bike",
            imageURL : "https://sc01.alicdn.com/kf/Ha29ec75145324f97ae91b46c218c63853.jpg",
        },
        {
            price: "13,167",
            title: "AIR JORDAN 1 MID",
            imageURL : "https://www.allikestore.com/media/catalog/product/cache/1/image/830x830/9df78eab33525d08d6e5fb8d27136e95/6/4/640734-173-1_37465.jpg?__cf_chl_jschl_tk__=c7c8ee1676e4b9195f0bcc480643a6dc0fd0a9d3-1605015026-0-AZ1Sp_pAx9IcrMJ_63Zkjid9Wq4hSizbweF5uKfURnH_oiB7z2S6b7mkl7BmxT0qFsMgTeGgQH9k5xnmUMTT1umJgX-ZKTBJ6kf5WAq1ViB2694hyPZHNQJETH_0pag7oPjX51VLi_lpBfeQp728i7apVs1DcuoBGx4r8U5yoPlklvnBzjaadu0dajIZObGQf4L_6pXfaYQV0TRKs1PTKEsxilb806rBTC0JgEoEKT2A606wjFHOyhmk_ZhiGjn3tq766msde65Mpzl4akgarZ9ZRrCZs7borXk8cDtbbkw7SrhmYWoAvtUj66sfJZscarAOlUeCCMTrvnfQq7T2iQ20g6nUeVKRA10_mU8Qq-k06Bc5b3fYgwx2GbaoA-uoPn7_X_zN8qcCtzStDJyDDx4fn2Ab-d-oRQFELxLrVMSs0LLdgUouLQG9tUPoBvzOQ1mXTcLR1u4G0EpIa_sPyBU",
        },
    ]
}


export default (state=Initial_State, action)=>{
    // console.log("Action==>",action)
    switch(action.type){
        case "Auth":
            return ({
                ...state,
                // users : [...state.users, action.data]
                currentUser : [action.data]
            })
    }
    return state;

}   