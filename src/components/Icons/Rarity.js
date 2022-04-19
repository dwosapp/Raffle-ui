import * as React from "react"

const Rarity = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 40} height={props.height || 40} {...props} viewBox="0 0 100 100">
    <path fill="#00aee5" d="M27.861 27.027L19.267 44.038 49.884 77.287 82.918 44.811 73.253 26.882z"></path><path fill="#1f212b" d="M49.847,78.725L18.061,44.206l9.184-18.178l46.604-0.148l10.305,19.118L49.847,78.725z M20.472,43.87L49.92,75.85l31.762-31.225l-9.023-16.741l-44.181,0.141L20.472,43.87z"></path><path fill="#2ec5f4" d="M50.372,27.778c-3.61,5.429-12.038,16.348-12.038,16.348s-8.861-14.705-9.927-16.244L50.372,27.778z"></path><path fill="#2e70b8" d="M72.062,27.79c-3.61,5.429-9.825,15.867-9.825,15.867S52.575,29.42,51.51,27.882L72.062,27.79z"></path><path fill="#3588c9" d="M50,76.849c0.21-0.194,12.059-31.967,12.059-31.967l-23.725-0.344L50,76.849z"></path><path fill="#42a7de" d="M50.372 27.963L38.853 43.882 61.416 43.882z"></path><path fill="#1f212b" d="M82.559 44.915L82.559 44.915l-4.209-.012c-.276-.001-.5-.226-.499-.501.001-.276.225-.499.5-.499h.001l4.208.012c.276.001.5.226.499.501C83.058 44.692 82.835 44.915 82.559 44.915zM76.728 44.884L76.728 44.884l-1.001-.002c-.276-.001-.5-.225-.499-.501.001-.275.225-.499.5-.499h.001l1 .002c.276.001.5.225.499.501C77.227 44.66 77.004 44.884 76.728 44.884zM72.061 44.817L72.061 44.817l-12.971-.005c-13.998-.005-33.71-.012-39.825-.022-.276-.001-.5-.19-.499-.425.001-.233.225-.423.5-.423h.001c6.115.011 25.826.017 39.823.022l12.971.005c.276 0 .5.19.5.424C72.561 44.628 72.338 44.817 72.061 44.817z"></path><path fill="#1f212b" d="M49.884,77.73c-0.013,0-0.025,0-0.039-0.002c-0.032-0.002-0.063-0.008-0.094-0.016l-0.001-0.001l0,0c-0.07-0.02-0.135-0.054-0.189-0.1c-0.039-0.033-0.073-0.072-0.101-0.116c-0.019-0.03-0.034-0.062-0.047-0.097c-3.331-8.896-11.431-32.557-11.512-32.794c-0.09-0.262,0.05-0.546,0.311-0.635c0.261-0.09,0.546,0.05,0.635,0.311c0.078,0.228,7.472,21.824,11.031,31.495c0.006-0.002,0.012-0.003,0.018-0.004c1.527-4.078,3.612-9.573,5.697-15.067c2.312-6.093,4.625-12.186,6.176-16.346c0.097-0.26,0.386-0.39,0.644-0.294c0.259,0.097,0.391,0.385,0.294,0.644c-1.553,4.161-3.865,10.256-6.178,16.351c-2.31,6.087-4.619,12.173-6.171,16.332c-0.002,0.005-0.003,0.009-0.005,0.013c0,0.001,0,0.001,0,0.001c-0.039,0.104-0.108,0.188-0.196,0.244c0,0,0,0.001-0.001,0.001l0,0c-0.029,0.02-0.062,0.035-0.095,0.048l0,0c0,0,0,0-0.001,0C50.005,77.719,49.945,77.73,49.884,77.73z"></path><path fill="#1f212b" d="M62.237 45.033c-.164 0-.317-.08-.411-.215-1.126-1.626-2.319-3.39-3.513-5.153-1.19-1.761-2.382-3.521-3.506-5.144l-4.215-6.084c-1.846 2.571-3.782 5.229-5.719 7.887-2.068 2.84-4.137 5.679-6.094 8.409-.096.135-.258.223-.418.209-.166-.004-.318-.09-.408-.229-.831-1.287-3.071-5.058-5.238-8.704l-1.576-2.651c-.142-.237-.063-.544.174-.686.234-.141.543-.065.686.174l1.576 2.652c1.878 3.161 3.812 6.415 4.825 8.049 1.829-2.547 3.747-5.18 5.665-7.812 2.08-2.854 4.16-5.71 6.128-8.456.094-.131.245-.209.406-.209.001 0 .003 0 .004 0 .162.001.314.081.407.215l4.619 6.666c1.126 1.626 2.319 3.39 3.513 5.153 1.043 1.543 2.087 3.086 3.086 4.535 1.658-2.526 3.285-5.197 4.863-7.786 1.711-2.809 3.481-5.714 5.292-8.437.152-.23.463-.291.693-.139.229.152.292.463.139.693-1.8 2.706-3.563 5.602-5.271 8.402-1.711 2.809-3.481 5.714-5.292 8.437-.092.138-.245.221-.411.223C62.24 45.033 62.239 45.033 62.237 45.033zM30.178 31.269c-.17 0-.336-.087-.43-.244l-.15-.253.008-.005c-.003-.004-.006-.007-.008-.011l-.007.004c-.009-.015-.017-.03-.023-.046-.039-.057-.073-.113-.103-.163-.143-.237-.065-.544.172-.686.234-.144.542-.065.686.172l.128.213-.009.006c.003.005.007.01.01.015l.009-.005c.01.018.019.035.026.054.044.064.084.131.121.193.142.237.063.544-.174.686C30.353 31.246 30.265 31.269 30.178 31.269zM29.121 29.52c-.168 0-.332-.085-.426-.238l-1.26-2.051c-.145-.235-.071-.543.164-.688.236-.146.544-.071.688.164l1.26 2.051c.145.235.071.543-.164.688C29.301 29.496 29.211 29.52 29.121 29.52z"></path>
  </svg>
)

export default Rarity