let propertiesLetterSpacing=["v-let-spacing-normal","v-let-spacing-1","v-let-spacing-2","v-let-spacing-3","v-let-spacing-4"],valuesLetterSpacing=["letter-spacing: normal","letter-spacing: 10px","letter-spacing: 15px","letter-spacing: 20px","letter-spacing: 25px"];for(var i=0;i<=propertiesLetterSpacing.length;i++)if(document.querySelector(`.${propertiesLetterSpacing[i]}`)&&!document.querySelector("style").innerText.includes(propertiesLetterSpacing[i])){let e=` \n            .${propertiesLetterSpacing[i]} { \n                ${valuesLetterSpacing[i]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}