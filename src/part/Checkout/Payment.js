import React from "react";
import Fade from "react-reveal/Fade";
import { InputText, InputFile } from "components/Form";

import LogoBri from "assets/image/Logo_Bri.png";
import LogoBni from "assets/image/Logo_Bni.png";

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
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={LogoBri} alt="bank rakyat indonesia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Rakyat Indonesia</dd>
                    <dd>7842 1782 8273 7172</dd>
                    <dd>Wahyu Nur Fadillah</dd>
                  </dl>
                </div>
              </div>
              <div className="row">
                <div className="col-3 text-right">
                  <img src={LogoBni} alt="bank negara Indonesia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Negara Indonesia</dd>
                    <dd>1234 8723 9748 7293</dd>
                    <dd>Wahyu Nur Fadillah</dd>
                  </dl>
                </div>
              </div>
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
              <label htmlFor="bankName"> Asal Bank </label>
              <InputText
                accept="image/*"
                id="bankName"
                name="bankName"
                value={data.bankName}
                onChange={onChange}
              />
              <label htmlFor="bankHolder"> Nama Pengirim </label>
              <InputText
                accept="image/*"
                id="bankHolder"
                name="bankHolder"
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
