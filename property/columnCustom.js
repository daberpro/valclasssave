let propertiesColumnCustom=["v-col","v-col-2","v-col-3","v-col-4"],valueColumnCustom=["column-count: 1; \n     padding: 10px;","column-count: 2;\n     padding: 10px;","column-count: 3; \n     padding: 10px;","column-count: 4; \n     padding: 10px;"];for(var i=0;i<=propertiesColumnCustom.length;i++)if(document.querySelector(`.${propertiesColumnCustom[i]}`)&&!document.querySelector("style").innerText.includes(propertiesColumnCustom[i])){let e=` \n                .${propertiesColumnCustom[i]} { \n                    ${valueColumnCustom[i]}\n                }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}