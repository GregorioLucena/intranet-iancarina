import React from "react";

const FormLogin = () => {
  return (
    <div className="caja">
      <style>
        {`
        .caja{
          position: absolute;
          top: 26%;
          left: 85%;
          transform: translate(-50%, -50%);
          width: 400px;
          // height: 400px;
          padding: 40px;
          background: rgba(0,0,0,.4);
          box-sizing: border-box;
          box-shadow: 15px 15px 25px rgba(0,0,0,.6);
          border-radius: 20px;
        }
        .caja h2{
          margin: 0 0 30px;
          padding: 0;
          color: #fff;
          text-align: center;
        }
        .caja .inputcaja{
          position: relative;
        }
        
        .caja .inputcaja input {
          width: 100%:
          padding: 10px 0;
          font-size: 16px;
          letter-spacing: 1px;
          color: #fff;
          margin-bottom: 30px;
          border: none;
          border-bottom: 1px solid #fff;
          outline: none;
          background: transparent;
        }
        
        .caja .inputcaja label{
          position: absolute;
          top: 0;
          left: 0;
          padding: 5px 0;
          font-size: 16px;
          color: #fff;
          pointer-events: none;
          transition: .5s
        }
        .caja .inputcaja input:focus ~ label, .caja .inputcaja input:valid ~ label {
          top: -18px;
          left: 0;
          color: #03a9f4;
          font-size: 12px;
        }
        .caja input[type="submit"] {
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          background: rgba(0,0,0,.6);
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 10px;
        }
        `}
      </style>
      <h2>login</h2>
      <form action="">
        <div className="inputcaja">
          <input type="text" name="" required />
          <label for="">user</label>
        </div>
        <div className="inputcaja">
          <input type="password" name="" required />
          <label for="">Password</label>
        </div>
        <input type="submit" value="ingresar" />
      </form>
    </div>
  );
};

export default FormLogin;
