import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function PurchaseOrder({ item }) {
  const [showData, setShowData] = useState(false);
  
  function onClick() {
    setShowData(wasShowed => !wasShowed);
  }

  return (
    <ul key={item.PurchaseOrderId}>
      <li>
        <div className="title text-[18px]">
          <strong className="cursor-pointer" onClick={onClick}>
            {item.PurchaseOrderTypeAbbreviation} - {item.PurchaseOrderNo}
          </strong>
        </div>
        {showData && (
          <div id="data" className="my-2 data">
            Address - {item.PurchaseOrderAddress} <br />
            Contact Person - {item.PurchaseOrderContactPerson} <br />
            Status - {item.PurchaseOrderStatus}
            <table>
              <thead>
                <tr>
                  <th>Product SKU</th>
                  <th>Quantity Ordered</th>
                  <th>Unit Price</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {item.PurchaseOrderDetails.map((order_details) => (
                  <tr key={order_details.PurchaseOrderRowDetailID}>
                    <td>{order_details.PurchaseOrderRowProductSKU}</td>
                    <td>{order_details.PurchaseOrderRowQuantity}</td>
                    <td>
                      {order_details.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}
                    </td>
                    <td>{order_details.PurchaseOrderRowTotalAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </li>
    </ul>
  );
}

PurchaseOrder.propTypes = {
  item: PropTypes.shape({
    PurchaseOrderId: PropTypes.number.isRequired,
    PurchaseOrderTypeAbbreviation: PropTypes.string.isRequired,
    PurchaseOrderNo: PropTypes.string.isRequired,
    PurchaseOrderAddress: PropTypes.string.isRequired,
    PurchaseOrderContactPerson: PropTypes.string.isRequired,
    PurchaseOrderStatus: PropTypes.string.isRequired,
    PurchaseOrderDetails: PropTypes.arrayOf(PropTypes.shape({
    PurchaseOrderRowDetailID: PropTypes.number.isRequired,
    PurchaseOrderRowProductSKU: PropTypes.string.isRequired,
    PurchaseOrderRowQuantity: PropTypes.number.isRequired,
    PurchaseOrderRowUnitPriceWithoutTaxOrDiscount: PropTypes.number.isRequired,
    PurchaseOrderRowTotalAmount: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

function PurchaseOrders() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("src/purchase_orders.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJSON) {
        console.log(myJSON);
        setData(myJSON.mvPurchaseOrders);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="flex flex-col m-2">
      {data &&
        data.length > 0 &&
        data.map((item) => <PurchaseOrder key={item.PurchaseOrderId} item={item} />)}
    </section>
  );
}

export default PurchaseOrders;