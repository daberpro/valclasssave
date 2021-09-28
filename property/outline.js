let propertiesOutlines = [
    'v-o-style-dotted',
    'v-o-style-dashed',
    'v-o-style-double',
    'v-o-style-groove',
    'v-o-style-solid',
    'v-o-style-ridge',
    'v-o-style-hidden',
    'v-o-1',
    'v-o-2',
    'v-o-3',
    'v-o-4',
    'v-o-top-1',
    'v-o-top-2',
    'v-o-top-3',
    'v-o-top-4',
    'v-o-left-1',
    'v-o-left-2',
    'v-o-left-3',
    'v-o-left-4',
    'v-o-right-1',
    'v-o-right-2',
    'v-o-right-3',
    'v-o-right-4',
    'v-o-bottom-1',
    'v-o-bottom-2',
    'v-o-bottom-3',
    'v-o-bottom-4',
    'v-o-dark',
    'v-o-light',
    'v-o-danger',
    'v-o-info',
    'v-o-primary',
    'v-o-smooth',
    'v-o-transparent',
    'v-o-secondary',
    'v-o-warning',
    'v-o-green'
]
let valuesOutlines = [
    'outline-style: dotted;',
    'outline-style: dashed;',
    'outline-style: double',
    'outline-style: groove;',
    'outline-style: solid',
    'outline-style: ridge;',
    'outline-style: hidden;',
    'outline: 1px;',
    'outline: 2px;',
    'outline: 3px;',
    'outline: 4px;',
    'outline-top: 1px;',
    'outline-top: 2px;',
    'outline-top: 3px;',
    'outline-top: 4px;',
    'outline-left: 1px;',
    'outline-left: 2px;',
    'outline-left: 3px;',
    'outline-left: 4px;',
    'outline-right: 1px;',
    'outline-right: 2px;',
    'outline-right: 3px;',
    'outline-right: 4px;',
    'outline-bottom: 1px;',
    'outline-bottom: 2px;',
    'outline-bottom: 3px;',
    'outline-bottom: 4px;',
    'outline-color: rgb(70, 70, 70);',
    'outline-color: rgb(238, 238, 238);',
    'outline-color: rgb(255, 76, 44);',
    'outline-color: rgb(2, 168, 245);',
    'outline-color: rgb(42, 131, 248);',
    'outline-color: rgb(255, 242, 242);',
    'outline-color: transparent;',
    'outline-color: rgb(141, 141, 141);',
    'outline-color: rgb(253, 207, 0);',
    'outline-color: rgb(11, 245, 101);'
]
for (var i = 0; i <= propertiesOutlines.length; i++) {
    if (document.querySelector(`.${propertiesOutlines[i]}`) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {
        let styles = ` 
        @media screen and (min-width: 900px){
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}