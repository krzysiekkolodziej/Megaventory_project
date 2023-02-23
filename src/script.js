// import './index.css'

// const path = "src/purchase_orders.json"
// fetch(path)
//     .then(function(response){
//        return response.json();
//     })
//     .then(function(data){
//         appendData(data.mvPurchaseOrders);
//     })
//     .catch(function(err){
//         console.log(err);
//     });

// function appendData(data){
//     var x = '<ul>'
//     for(var i = 0; i < data.length; i++){
//         x += `
//         <a data-popover-target="popover" className=bg-neutral-700">
//             <li>${data[i].PurchaseOrderTypeAbbreviation} - ${data[i].PurchaseOrderNo}</li>
//         </a>
//         <div data-popover id="popover" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
//             <div className="px-3 py-2">
//                 <p>XDDD</p>
//             </div>
//         </div>
//         `
//     }
//     x += '</ul>'
//     document.getElementById("myData").innerHTML = x;
// }
