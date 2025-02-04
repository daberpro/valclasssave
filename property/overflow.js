let propertiesOverflows = [
    'v-overflow-hidden',
    'v-overflow-scroll',
    'v-overflow-auto',
    'v-overflow-visible',
    'v-overflowX-hidden',
    'v-overflowX-scroll',
    'v-overflowX-auto',
    'v-overflowX-visible',
    'v-overflowY-hidden',
    'v-overflowY-scroll',
    'v-overflowY-auto',
    'v-overflowY-visible',
    'v-overflow-break-word',
    'v-overflow-normal',
    'v-overflow-moz-unscrollable',
]
let valuesOverflows = [
    'overflow: hidden;',
    'overflow: scroll;',
    'overflow: auto;',
    'overflow: visible;',
    'overflow-x: hidden;',
    'overflow-x: scroll;',
    'overflow-x: auto;',
    'overflow-x: visible;',
    'overflow-y: hidden;',
    'overflow-y: scroll;',
    'overflow-y: auto;',
    'overflow-y: visible;',
    'overflow-wrap: break-word;',
    'overflow-wrap: normal;',
    'overflow: moz-hidden-unscrollable;',
]
for (var i = 0; i <= propertiesOverflows.length; i++) {
    if (document.querySelector(`.${propertiesOverflows[i]}`) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesOverflows2 = [
    'mb_v-overflow-hidden',
    'mb_v-overflow-scroll',
    'mb_v-overflow-auto',
    'mb_v-overflow-visible',
    'mb_v-overflowX-hidden',
    'mb_v-overflowX-scroll',
    'mb_v-overflowX-auto',
    'mb_v-overflowX-visible',
    'mb_v-overflowY-hidden',
    'mb_v-overflowY-scroll',
    'mb_v-overflowY-auto',
    'mb_v-overflowY-visible',
    'mb_v-overflow-break-word',
    'mb_v-overflow-normal',
    'mb_v-overflow-moz-unscrollable',
]
let valuesOverflows2 = [
    'overflow: hidden;',
    'overflow: scroll;',
    'overflow: auto;',
    'overflow: visible;',
    'overflow-x: hidden;',
    'overflow-x: scroll;',
    'overflow-x: auto;',
    'overflow-x: visible;',
    'overflow-y: hidden;',
    'overflow-y: scroll;',
    'overflow-y: auto;',
    'overflow-y: visible;',
    'overflow-wrap: break-word;',
    'overflow-wrap: normal;',
    'overflow: moz-hidden-unscrollable;',
]
for (var i = 0; i <= propertiesOverflows2.length; i++) {
    if (document.querySelector(`.${propertiesOverflows2[i]}`) && !document.querySelector('style').innerText.includes(propertiesOverflows2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesOverflows2[i]} { 
                ${valuesOverflows2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesOverflows3 = [
    'tb_v-overflow-hidden',
    'tb_v-overflow-scroll',
    'tb_v-overflow-auto',
    'tb_v-overflow-visible',
    'tb_v-overflowX-hidden',
    'tb_v-overflowX-scroll',
    'tb_v-overflowX-auto',
    'tb_v-overflowX-visible',
    'tb_v-overflowY-hidden',
    'tb_v-overflowY-scroll',
    'tb_v-overflowY-auto',
    'tb_v-overflowY-visible',
    'tb_v-overflow-break-word',
    'tb_v-overflow-normal',
    'tb_v-overflow-moz-unscrollable',
]
let valuesOverflows3 = [
    'overflow: hidden;',
    'overflow: scroll;',
    'overflow: auto;',
    'overflow: visible;',
    'overflow-x: hidden;',
    'overflow-x: scroll;',
    'overflow-x: auto;',
    'overflow-x: visible;',
    'overflow-y: hidden;',
    'overflow-y: scroll;',
    'overflow-y: auto;',
    'overflow-y: visible;',
    'overflow-wrap: break-word;',
    'overflow-wrap: normal;',
    'overflow: moz-hidden-unscrollable;',
]
for (var i = 0; i <= propertiesOverflows3.length; i++) {
    if (document.querySelector(`.${propertiesOverflows3[i]}`) && !document.querySelector('style').innerText.includes(propertiesOverflows3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesOverflows3[i]} { 
                ${valuesOverflows3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesOverflows4 = [
    'pc_v-overflow-hidden',
    'pc_v-overflow-scroll',
    'pc_v-overflow-auto',
    'pc_v-overflow-visible',
    'pc_v-overflowX-hidden',
    'pc_v-overflowX-scroll',
    'pc_v-overflowX-auto',
    'pc_v-overflowX-visible',
    'pc_v-overflowY-hidden',
    'pc_v-overflowY-scroll',
    'pc_v-overflowY-auto',
    'pc_v-overflowY-visible',
    'pc_v-overflow-break-word',
    'pc_v-overflow-normal',
    'pc_v-overflow-moz-unscrollable',
]
let valuesOverflows4 = [
    'overflow: hidden;',
    'overflow: scroll;',
    'overflow: auto;',
    'overflow: visible;',
    'overflow-x: hidden;',
    'overflow-x: scroll;',
    'overflow-x: auto;',
    'overflow-x: visible;',
    'overflow-y: hidden;',
    'overflow-y: scroll;',
    'overflow-y: auto;',
    'overflow-y: visible;',
    'overflow-wrap: break-word;',
    'overflow-wrap: normal;',
    'overflow: moz-hidden-unscrollable;',
]
for (var i = 0; i <= propertiesOverflows4.length; i++) {
    if (document.querySelector(`.${propertiesOverflows4[i]}`) && !document.querySelector('style').innerText.includes(propertiesOverflows4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesOverflows4[i]} { 
                ${valuesOverflows4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}