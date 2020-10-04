import React from "react";
import Fade from "react-reveal/Fade";
import { InputText, InputFile } from "components/Form";

export default function Payment({ data, itemDetails, checkout, onChange }) {
  const tax = 10;
  const subTotal = itemDetails.price * checkout.duration;
  const grandTotal = (subTotal * 10) / 100 + subTotal;
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembenyaran</p>
              <p>Tax: {tax}%</p>
              <p>Sub Total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              {itemDetails.bank.map((bank) => {
                return (
                  <div className="row mt-4">
                    <div className="col-3 text-right d-flex align-items-center">
                      <img
                        src={`${process.env.REACT_APP_HOST}/${bank.image}`}
                        alt="bank rakyat indonesia"
                        width="60"
                      />
                    </div>
                    <div className="col">
                      <dl>
                        <dd>{bank.nameBank}</dd>
                        <dd>{bank.nomorRekening}</dd>
                        <dd>{bank.name}</dd>
                      </dl>
                    </div>
                  </div>
                );
              })}
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment"> Upload Bukti Pembayaran </label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={onChange}
              />
              <label htmlFor="bankFrom"> Asal Bank </label>
              <InputText
                accept="image/*"
                id="bankFrom"
                name="bankFrom"
                value={data.bankName}
                onChange={onChange}
              />
              <label htmlFor="accountHolder"> Nama Pengirim </label>
              <InputText
                accept="image/*"
                id="accountHolder"
                name="accountHolder"
                value={data.bankHolder}
                onChange={onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
