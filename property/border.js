let propertiesBorders = [
    'v-border-dotted',
    'v-border-dashed',
    'v-border-double',
    'v-border-groove',
    'v-border-solid',
    'v-border-ridge',
    'v-border-hidden',
    'v-radius-sm',
    'v-radius-md',
    'v-radius-lg',
    'v-radius-xl',
    'v-radius-full',
    'v-border-1',
    'v-border-2',
    'v-border-3',
    'v-border-4',
    'v-border-t-1',
    'v-border-t-2',
    'v-border-t-3',
    'v-border-t-4',
    'v-border-l-1',
    'v-border-l-2',
    'v-border-l-3',
    'v-border-l-4',
    'v-border-r-1',
    'v-border-r-2',
    'v-border-r-3',
    'v-border-r-4',
    'v-border-b-1',
    'v-border-b-2',
    'v-border-b-3',
    'v-border-b-4',
    'v-border-dark',
    'v-border-light',
    'v-border-danger',
    'v-border-info',
    'v-border-primary',
    'v-border-smooth',
    'v-border-transparent',
    'v-border-secondary',
    'v-border-warning',
    'v-border-green',
    'v-border-collapse',
    'v-border-separate',
]
let valuesBorders = [
    'border-style: dotted;',
    'border-style: dashed;',
    'border-style: double',
    'border-style: groove;',
    'border-style: solid',
    'border-style: ridge;',
    'border-style: hidden;',
    'border-radius: 5px;',
    'border-radius: 10px;',
    'border-radius: 15px;',
    'border-radius: 20px;',
    'border-radius: 99999px;',
    'border: 1px solid black;',
    'border: 2px solid black;',
    'border: 3px solid black;',
    'border: 4px solid black;',
    'border-top: 1px solid black;',
    'border-top: 2px solid black;',
    'border-top: 3px solid black;',
    'border-top: 4px solid black;',
    'border-left: 1px solid black;',
    'border-left: 2px solid black;',
    'border-left: 3px solid black;',
    'border-left: 4px solid black;',
    'border-right: 1px solid black;',
    'border-right: 2px solid black;',
    'border-right: 3px solid black;',
    'border-right: 4px solid black;',
    'border-bottom: 1px solid black;',
    'border-bottom: 2px solid black;',
    'border-bottom: 3px solid black;',
    'border-bottom: 4px solid black;',
    'border-color: rgb(70, 70, 70);',
    'border-color: rgb(238, 238, 238);',
    'border-color: rgb(255, 76, 44);',
    'border-color: rgb(2, 168, 245);',
    'border-color: rgb(42, 131, 248);',
    'border-color: rgb(255, 242, 242);',
    'border-color: transparent;',
    'border-color: rgb(141, 141, 141);',
    'border-color: rgb(253, 207, 0);',
    'border-color: rgb(14, 253, 201);',
    'border-collapse: collapse;',
    'border-collapse: separate'
]
for (var i = 0; i <= propertiesBorders.length; i++) {
    if (document.querySelector(`.${propertiesBorders[i]}`) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesBorders[i]} { 
                    ${valuesBorders[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


let propertiesBorders2 = [
    'mb_v-border-dotted',
    'mb_v-border-dashed',
    'mb_v-border-double',
    'mb_v-border-groove',
    'mb_v-border-solid',
    'mb_v-border-ridge',
    'mb_v-border-hidden',
    'mb_v-radius-sm',
    'mb_v-radius-md',
    'mb_v-radius-lg',
    'mb_v-radius-xl',
    'mb_v-radius-full',
    'mb_v-border-1',
    'mb_v-border-2',
    'mb_v-border-3',
    'mb_v-border-4',
    'mb_v-border-t-1',
    'mb_v-border-t-2',
    'mb_v-border-t-3',
    'mb_v-border-t-4',
    'mb_v-border-l-1',
    'mb_v-border-l-2',
    'mb_v-border-l-3',
    'mb_v-border-l-4',
    'mb_v-border-r-1',
    'mb_v-border-r-2',
    'mb_v-border-r-3',
    'mb_v-border-r-4',
    'mb_v-border-b-1',
    'mb_v-border-b-2',
    'mb_v-border-b-3',
    'mb_v-border-b-4',
    'mb_v-border-dark',
    'mb_v-border-light',
    'mb_v-border-danger',
    'mb_v-border-info',
    'mb_v-border-primary',
    'mb_v-border-smooth',
    'mb_v-border-transparent',
    'mb_v-border-secondary',
    'mb_v-border-warning',
    'mb_v-border-green',
    'mb_v-border-collapse',
    'mb_v-border-separate',
]
let valuesBorders2 = [
    'border-style: dotted;',
    'border-style: dashed;',
    'border-style: double',
    'border-style: groove;',
    'border-style: solid',
    'border-style: ridge;',
    'border-style: hidden;',
    'border-radius: 5px;',
    'border-radius: 10px;',
    'border-radius: 15px;',
    'border-radius: 20px;',
    'border-radius: 99999px;',
    'border: 1px solid black;',
    'border: 2px solid black;',
    'border: 3px solid black;',
    'border: 4px solid black;',
    'border-top: 1px solid black;',
    'border-top: 2px solid black;',
    'border-top: 3px solid black;',
    'border-top: 4px solid black;',
    'border-left: 1px solid black;',
    'border-left: 2px solid black;',
    'border-left: 3px solid black;',
    'border-left: 4px solid black;',
    'border-right: 1px solid black;',
    'border-right: 2px solid black;',
    'border-right: 3px solid black;',
    'border-right: 4px solid black;',
    'border-bottom: 1px solid black;',
    'border-bottom: 2px solid black;',
    'border-bottom: 3px solid black;',
    'border-bottom: 4px solid black;',
    'border-color: rgb(70, 70, 70);',
    'border-color: rgb(238, 238, 238);',
    'border-color: rgb(255, 76, 44);',
    'border-color: rgb(2, 168, 245);',
    'border-color: rgb(42, 131, 248);',
    'border-color: rgb(255, 242, 242);',
    'border-color: transparent;',
    'border-color: rgb(141, 141, 141);',
    'border-color: rgb(253, 207, 0);',
    'border-color: rgb(14, 253, 201);',
    'border-collapse: collapse;',
    'border-collapse: separate'
]
for (var i = 0; i <= propertiesBorders2.length; i++) {
    if (document.querySelector(`.${propertiesBorders2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBorders2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBorders2[i]} { 
                    ${valuesBorders2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


let propertiesBorders3 = [
    'tb_v-border-dotted',
    'tb_v-border-dashed',
    'tb_v-border-double',
    'tb_v-border-groove',
    'tb_v-border-solid',
    'tb_v-border-ridge',
    'tb_v-border-hidden',
    'tb_v-radius-sm',
    'tb_v-radius-md',
    'tb_v-radius-lg',
    'tb_v-radius-xl',
    'tb_v-radius-full',
    'tb_v-border-1',
    'tb_v-border-2',
    'tb_v-border-3',
    'tb_v-border-4',
    'tb_v-border-t-1',
    'tb_v-border-t-2',
    'tb_v-border-t-3',
    'tb_v-border-t-4',
    'tb_v-border-l-1',
    'tb_v-border-l-2',
    'tb_v-border-l-3',
    'tb_v-border-l-4',
    'tb_v-border-r-1',
    'tb_v-border-r-2',
    'tb_v-border-r-3',
    'tb_v-border-r-4',
    'tb_v-border-b-1',
    'tb_v-border-b-2',
    'tb_v-border-b-3',
    'tb_v-border-b-4',
    'tb_v-border-dark',
    'tb_v-border-light',
    'tb_v-border-danger',
    'tb_v-border-info',
    'tb_v-border-primary',
    'tb_v-border-smooth',
    'tb_v-border-transparent',
    'tb_v-border-secondary',
    'tb_v-border-warning',
    'tb_v-border-green',
    'tb_v-border-collapse',
    'tb_v-border-separate',
]
let valuesBorders3 = [
    'border-style: dotted;',
    'border-style: dashed;',
    'border-style: double',
    'border-style: groove;',
    'border-style: solid',
    'border-style: ridge;',
    'border-style: hidden;',
    'border-radius: 5px;',
    'border-radius: 10px;',
    'border-radius: 15px;',
    'border-radius: 20px;',
    'border-radius: 99999px;',
    'border: 1px solid black;',
    'border: 2px solid black;',
    'border: 3px solid black;',
    'border: 4px solid black;',
    'border-top: 1px solid black;',
    'border-top: 2px solid black;',
    'border-top: 3px solid black;',
    'border-top: 4px solid black;',
    'border-left: 1px solid black;',
    'border-left: 2px solid black;',
    'border-left: 3px solid black;',
    'border-left: 4px solid black;',
    'border-right: 1px solid black;',
    'border-right: 2px solid black;',
    'border-right: 3px solid black;',
    'border-right: 4px solid black;',
    'border-bottom: 1px solid black;',
    'border-bottom: 2px solid black;',
    'border-bottom: 3px solid black;',
    'border-bottom: 4px solid black;',
    'border-color: rgb(70, 70, 70);',
    'border-color: rgb(238, 238, 238);',
    'border-color: rgb(255, 76, 44);',
    'border-color: rgb(2, 168, 245);',
    'border-color: rgb(42, 131, 248);',
    'border-color: rgb(255, 242, 242);',
    'border-color: transparent;',
    'border-color: rgb(141, 141, 141);',
    'border-color: rgb(253, 207, 0);',
    'border-color: rgb(14, 253, 201);',
    'border-collapse: collapse;',
    'border-collapse: separate'
]
for (var i = 0; i <= propertiesBorders3.length; i++) {
    if (document.querySelector(`.${propertiesBorders3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBorders3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesBorders3[i]} { 
                    ${valuesBorders3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


let propertiesBorders4 = [
    'pc_v-border-dotted',
    'pc_v-border-dashed',
    'pc_v-border-double',
    'pc_v-border-groove',
    'pc_v-border-solid',
    'pc_v-border-ridge',
    'pc_v-border-hidden',
    'pc_v-radius-sm',
    'pc_v-radius-md',
    'pc_v-radius-lg',
    'pc_v-radius-xl',
    'pc_v-radius-full',
    'pc_v-border-1',
    'pc_v-border-2',
    'pc_v-border-3',
    'pc_v-border-4',
    'pc_v-border-t-1',
    'pc_v-border-t-2',
    'pc_v-border-t-3',
    'pc_v-border-t-4',
    'pc_v-border-l-1',
    'pc_v-border-l-2',
    'pc_v-border-l-3',
    'pc_v-border-l-4',
    'pc_v-border-r-1',
    'pc_v-border-r-2',
    'pc_v-border-r-3',
    'pc_v-border-r-4',
    'pc_v-border-b-1',
    'pc_v-border-b-2',
    'pc_v-border-b-3',
    'pc_v-border-b-4',
    'pc_v-border-dark',
    'pc_v-border-light',
    'pc_v-border-danger',
    'pc_v-border-info',
    'pc_v-border-primary',
    'pc_v-border-smooth',
    'pc_v-border-transparent',
    'pc_v-border-secondary',
    'pc_v-border-warning',
    'pc_v-border-green',
    'pc_v-border-collapse',
    'pc_v-border-separate',
]
let valuesBorders4 = [
    'border-style: dotted;',
    'border-style: dashed;',
    'border-style: double',
    'border-style: groove;',
    'border-style: solid',
    'border-style: ridge;',
    'border-style: hidden;',
    'border-radius: 5px;',
    'border-radius: 10px;',
    'border-radius: 15px;',
    'border-radius: 20px;',
    'border-radius: 99999px;',
    'border: 1px solid black;',
    'border: 2px solid black;',
    'border: 3px solid black;',
    'border: 4px solid black;',
    'border-top: 1px solid black;',
    'border-top: 2px solid black;',
    'border-top: 3px solid black;',
    'border-top: 4px solid black;',
    'border-left: 1px solid black;',
    'border-left: 2px solid black;',
    'border-left: 3px solid black;',
    'border-left: 4px solid black;',
    'border-right: 1px solid black;',
    'border-right: 2px solid black;',
    'border-right: 3px solid black;',
    'border-right: 4px solid black;',
    'border-bottom: 1px solid black;',
    'border-bottom: 2px solid black;',
    'border-bottom: 3px solid black;',
    'border-bottom: 4px solid black;',
    'border-color: rgb(70, 70, 70);',
    'border-color: rgb(238, 238, 238);',
    'border-color: rgb(255, 76, 44);',
    'border-color: rgb(2, 168, 245);',
    'border-color: rgb(42, 131, 248);',
    'border-color: rgb(255, 242, 242);',
    'border-color: transparent;',
    'border-color: rgb(141, 141, 141);',
    'border-color: rgb(253, 207, 0);',
    'border-color: rgb(14, 253, 201);',
    'border-collapse: collapse;',
    'border-collapse: separate'
]
for (var i = 0; i <= propertiesBorders4.length; i++) {
    if (document.querySelector(`.${propertiesBorders4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBorders4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesBorders4[i]} { 
                    ${valuesBorders4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
