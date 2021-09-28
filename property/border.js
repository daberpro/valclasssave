
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
            @media screen and (min-width: 900px){
                .${propertiesBorders[i]} { 
                    ${valuesBorders[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
