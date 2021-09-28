let propertiesMargins = [
    'v-m-auto',
    'v-m-0',
    'v-m-1',
    'v-m-2',
    'v-m-3',
    'v-m-4',
    'v-mt-auto',
    'v-mt-0',
    'v-mt-1',
    'v-mt-2',
    'v-mt-3',
    'v-mt-4',
    'v-ml-auto',
    'v-ml-0',
    'v-ml-1',
    'v-ml-2',
    'v-ml-3',
    'v-ml-4',
    'v-mr-auto',
    'v-mr-0',
    'v-mr-1',
    'v-mr-2',
    'v-mr-3',
    'v-mr-4',
    'v-mb-auto',
    'v-mb-0',
    'v-mb-1',
    'v-mb-2',
    'v-mb-3',
    'v-mb-4',
]
let valuesMargins = [
    'margin: auto;',
    'margin: 0px;',
    'margin: 10px;',
    'margin: 20px;',
    'margin: 30px;',
    'margin: 40px;',
    'margin-top: auto;',
    'margin-top: 0px;',
    'margin-top: 10px;',
    'margin-top: 20px;',
    'margin-top: 30px;',
    'margin-top: 40px;',
    'margin-left: auto;',
    'margin-left: 0px;',
    'margin-left: 10px;',
    'margin-left: 20px;',
    'margin-left: 30px;',
    'margin-left: 40px;',
    'margin-right: auto;',
    'margin-right: 0px;',
    'margin-right: 10px;',
    'margin-right: 20px;',
    'margin-right: 30px;',
    'margin-right: 40px;',
    'margin-bottom: auto;',
    'margin-bottom: 0px;',
    'margin-bottom: 10px;',
    'margin-bottom: 20px;',
    'margin-bottom: 30px;',
    'margin-bottom: 40px;',
];
for (var i = 0; i <= propertiesMargins.length; i++) {
    if (document.querySelector(`.${propertiesMargins[i]}`) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {
        let styles = ` 
        @media screen and (min-width: 900px){
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}