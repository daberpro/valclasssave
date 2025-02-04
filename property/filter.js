
let propertiesFilter = [
    'v-blur-0',
    'v-blur-1',
    'v-blur-2',
    'v-blur-3',
    'v-blur-4',
    'v-blur-full',
    'v-gryscale-0',
    'v-gryscale-1',
    'v-gryscale-2',
    'v-gryscale-3',
    'v-gryscale-4',
    'v-gryscale-full',
    'v-saturate-0',
    'v-saturate-1',
    'v-saturate-2',
    'v-saturate-3',
    'v-saturate-4',
    'v-saturate-full',
    'v-brightness-0',
    'v-brightness-1',
    'v-brightness-2',
    'v-brightness-3',
    'v-brightness-4',
    'v-brightness-full',
    'v-contrast-0',
    'v-contrast-1',
    'v-contrast-2',
    'v-contrast-3',
    'v-contrast-4',
    'v-contrast-full'
]
let valuesFilter = [
    'filter: blur(0px);',
    'filter: blur(2px);',
    'filter: blur(4px);',
    'filter: blur(6px);',
    'filter: blur(8px);',
    'filter: blur(10px);',
    'filter: gryscale(0%);',
    'filter: gryscale(20%);',
    'filter: gryscale(40%);',
    'filter: gryscale(60%);',
    'filter: gryscale(80%);',
    'filter: gryscale(100%);',
    'filter: saturate(0%);',
    'filter: saturate(20%);',
    'filter: saturate(40%);',
    'filter: saturate(60%);',
    'filter: saturate(80%);',
    'filter: saturate(100%);',
    'filter: brightness(0%);',
    'filter: brightness(20%);',
    'filter: brightness(40%);',
    'filter: brightness(60%);',
    'filter: brightness(80%);',
    'filter: brightness(100%);',
    'filter: contrast(0%);',
    'filter: contrast(20%);',
    'filter: contrast(40%);',
    'filter: contrast(60%);',
    'filter: contrast(80%);',
    'filter: contrast(100%);',
]
for (var i = 0; i <= propertiesFilter.length; i++) {
    if (document.querySelector(`.${propertiesFilter[i]}`) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesFilter[i]} { 
                    ${valuesFilter[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesFilter2 = [
    'mb_v-blur-0',
    'mb_v-blur-1',
    'mb_v-blur-2',
    'mb_v-blur-3',
    'mb_v-blur-4',
    'mb_v-blur-full',
    'mb_v-gryscale-0',
    'mb_v-gryscale-1',
    'mb_v-gryscale-2',
    'mb_v-gryscale-3',
    'mb_v-gryscale-4',
    'mb_v-gryscale-full',
    'mb_v-saturate-0',
    'mb_v-saturate-1',
    'mb_v-saturate-2',
    'mb_v-saturate-3',
    'mb_v-saturate-4',
    'mb_v-saturate-full',
    'mb_v-brightness-0',
    'mb_v-brightness-1',
    'mb_v-brightness-2',
    'mb_v-brightness-3',
    'mb_v-brightness-4',
    'mb_v-brightness-full',
    'mb_v-contrast-0',
    'mb_v-contrast-1',
    'mb_v-contrast-2',
    'mb_v-contrast-3',
    'mb_v-contrast-4',
    'mb_v-contrast-full'
]
let valuesFilter2 = [
    'filter: blur(0px);',
    'filter: blur(2px);',
    'filter: blur(4px);',
    'filter: blur(6px);',
    'filter: blur(8px);',
    'filter: blur(10px);',
    'filter: gryscale(0%);',
    'filter: gryscale(20%);',
    'filter: gryscale(40%);',
    'filter: gryscale(60%);',
    'filter: gryscale(80%);',
    'filter: gryscale(100%);',
    'filter: saturate(0%);',
    'filter: saturate(20%);',
    'filter: saturate(40%);',
    'filter: saturate(60%);',
    'filter: saturate(80%);',
    'filter: saturate(100%);',
    'filter: brightness(0%);',
    'filter: brightness(20%);',
    'filter: brightness(40%);',
    'filter: brightness(60%);',
    'filter: brightness(80%);',
    'filter: brightness(100%);',
    'filter: contrast(0%);',
    'filter: contrast(20%);',
    'filter: contrast(40%);',
    'filter: contrast(60%);',
    'filter: contrast(80%);',
    'filter: contrast(100%);',
]
for (var i = 0; i <= propertiesFilter2.length; i++) {
    if (document.querySelector(`.${propertiesFilter2[i]}`) && !document.querySelector('style').innerText.includes(propertiesFilter2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesFilter2[i]} { 
                    ${valuesFilter2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesFilter3 = [
    'tb_v-blur-0',
    'tb_v-blur-1',
    'tb_v-blur-2',
    'tb_v-blur-3',
    'tb_v-blur-4',
    'tb_v-blur-full',
    'tb_v-gryscale-0',
    'tb_v-gryscale-1',
    'tb_v-gryscale-2',
    'tb_v-gryscale-3',
    'tb_v-gryscale-4',
    'tb_v-gryscale-full',
    'tb_v-saturate-0',
    'tb_v-saturate-1',
    'tb_v-saturate-2',
    'tb_v-saturate-3',
    'tb_v-saturate-4',
    'tb_v-saturate-full',
    'tb_v-brightness-0',
    'tb_v-brightness-1',
    'tb_v-brightness-2',
    'tb_v-brightness-3',
    'tb_v-brightness-4',
    'tb_v-brightness-full',
    'tb_v-contrast-0',
    'tb_v-contrast-1',
    'tb_v-contrast-2',
    'tb_v-contrast-3',
    'tb_v-contrast-4',
    'tb_v-contrast-full'
]
let valuesFilter3 = [
    'filter: blur(0px);',
    'filter: blur(2px);',
    'filter: blur(4px);',
    'filter: blur(6px);',
    'filter: blur(8px);',
    'filter: blur(10px);',
    'filter: gryscale(0%);',
    'filter: gryscale(20%);',
    'filter: gryscale(40%);',
    'filter: gryscale(60%);',
    'filter: gryscale(80%);',
    'filter: gryscale(100%);',
    'filter: saturate(0%);',
    'filter: saturate(20%);',
    'filter: saturate(40%);',
    'filter: saturate(60%);',
    'filter: saturate(80%);',
    'filter: saturate(100%);',
    'filter: brightness(0%);',
    'filter: brightness(20%);',
    'filter: brightness(40%);',
    'filter: brightness(60%);',
    'filter: brightness(80%);',
    'filter: brightness(100%);',
    'filter: contrast(0%);',
    'filter: contrast(20%);',
    'filter: contrast(40%);',
    'filter: contrast(60%);',
    'filter: contrast(80%);',
    'filter: contrast(100%);',
]
for (var i = 0; i <= propertiesFilter3.length; i++) {
    if (document.querySelector(`.${propertiesFilter3[i]}`) && !document.querySelector('style').innerText.includes(propertiesFilter3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesFilter3[i]} { 
                    ${valuesFilter3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesFilter4 = [
    'pc_v-blur-0',
    'pc_v-blur-1',
    'pc_v-blur-2',
    'pc_v-blur-3',
    'pc_v-blur-4',
    'pc_v-blur-full',
    'pc_v-gryscale-0',
    'pc_v-gryscale-1',
    'pc_v-gryscale-2',
    'pc_v-gryscale-3',
    'pc_v-gryscale-4',
    'pc_v-gryscale-full',
    'pc_v-saturate-0',
    'pc_v-saturate-1',
    'pc_v-saturate-2',
    'pc_v-saturate-3',
    'pc_v-saturate-4',
    'pc_v-saturate-full',
    'pc_v-brightness-0',
    'pc_v-brightness-1',
    'pc_v-brightness-2',
    'pc_v-brightness-3',
    'pc_v-brightness-4',
    'pc_v-brightness-full',
    'pc_v-contrast-0',
    'pc_v-contrast-1',
    'pc_v-contrast-2',
    'pc_v-contrast-3',
    'pc_v-contrast-4',
    'pc_v-contrast-full'
]
let valuesFilter4 = [
    'filter: blur(0px);',
    'filter: blur(2px);',
    'filter: blur(4px);',
    'filter: blur(6px);',
    'filter: blur(8px);',
    'filter: blur(10px);',
    'filter: gryscale(0%);',
    'filter: gryscale(20%);',
    'filter: gryscale(40%);',
    'filter: gryscale(60%);',
    'filter: gryscale(80%);',
    'filter: gryscale(100%);',
    'filter: saturate(0%);',
    'filter: saturate(20%);',
    'filter: saturate(40%);',
    'filter: saturate(60%);',
    'filter: saturate(80%);',
    'filter: saturate(100%);',
    'filter: brightness(0%);',
    'filter: brightness(20%);',
    'filter: brightness(40%);',
    'filter: brightness(60%);',
    'filter: brightness(80%);',
    'filter: brightness(100%);',
    'filter: contrast(0%);',
    'filter: contrast(20%);',
    'filter: contrast(40%);',
    'filter: contrast(60%);',
    'filter: contrast(80%);',
    'filter: contrast(100%);',
]
for (var i = 0; i <= propertiesFilter4.length; i++) {
    if (document.querySelector(`.${propertiesFilter4[i]}`) && !document.querySelector('style').innerText.includes(propertiesFilter4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesFilter4[i]} { 
                    ${valuesFilter4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}