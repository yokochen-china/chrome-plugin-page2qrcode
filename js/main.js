chrome.tabs.getSelected( null , function ( tab ){
    makeQrcode(dom,tab.url)
})  

const dom=document.getElementById('yokochen-js-canvas')

function makeQrcode(dom,url){
    QRCode.toCanvas(dom,url,{ 
        toSJISFunc: QRCode.toSJIS,
        width:150,
        height:150,
        margin:1
    },
    function (error) {
        if (error) console.error(error)
    })
}




