import React, { useState } from "react";
import "../Incomedetails/Incomedetails.css";

function Incomedetails() {
  const [employmentIncomes, setEmploymentIncomes] = useState([""]);
  const [investmentIncomes, setInvestmentIncomes] = useState([""]);
  const [businessIncomes, setBusinessIncomes] = useState([""]);
  const [otherIncomes, setOtherIncomes] = useState([""]);

  const handleAddIncome = (incomeType) => {
    switch (incomeType) {
      case "employment":
        setEmploymentIncomes([...employmentIncomes, ""]);
        break;
      case "investment":
        setInvestmentIncomes([...investmentIncomes, ""]);
        break;
      case "business":
        setBusinessIncomes([...businessIncomes, ""]);
        break;
      case "other":
        setOtherIncomes([...otherIncomes, ""]);
        break;
      default:
        break;
    }
  };

  const handleIncomeChange = (incomeType, index, value) => {
    switch (incomeType) {
      case "employment":
        const newEmploymentIncomes = [...employmentIncomes];
        newEmploymentIncomes[index] = value;
        setEmploymentIncomes(newEmploymentIncomes);
        break;
      case "investment":
        const newInvestmentIncomes = [...investmentIncomes];
        newInvestmentIncomes[index] = value;
        setInvestmentIncomes(newInvestmentIncomes);
        break;
      case "business":
        const newBusinessIncomes = [...businessIncomes];
        newBusinessIncomes[index] = value;
        setBusinessIncomes(newBusinessIncomes);
        break;
      case "other":
        const newOtherIncomes = [...otherIncomes];
        newOtherIncomes[index] = value;
        setOtherIncomes(newOtherIncomes);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <form
        style={{
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#D3E9FE",
          width: "65VW",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        }}
      >
        <h2
          style={{
            marginBottom: "1%",
            marginLeft: "35%",
            color: "#0085FF",
            fontWeight: "bold",
          }}
        >
          Income Details
        </h2>
        <label className="lables" htmlFor="exampleInputPassword1">
          Type of income
        </label>
        <br></br>
        <br></br>

        {/* Employment Income */}
        {employmentIncomes.map((income, index) => (
          <div className="form-group contact" key={`employment${index}`}>
            <label className="lables" htmlFor={`mobileno${index}`}>
              Employment Income {index + 1}
            </label>
            <div className="custom_input" style={{ display: "flex" }}>
              <input
                className="details-input form-control"
                type="text"
                id={`mobileno${index}`}
                placeholder=""
                value={income}
                onChange={(e) =>
                  handleIncomeChange("employment", index, e.target.value)
                }
              />
              {index === employmentIncomes.length - 1 && (
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "10px", height: "35px" }}
                  onClick={() => handleAddIncome("employment")}
                >
                  +
                </button>
              )}
            </div>
          </div>
        ))}

        <br></br>

        {/* Investment Income */}
        {investmentIncomes.map((income, index) => (
          <div className="form-group contact" key={`investment${index}`}>
            <label className="lables" htmlFor={`investmentno${index}`}>
              Investment Income {index + 1}
            </label>
            <div className="custom_input" style={{ display: "flex" }}>
              <input
                className="details-input form-control"
                type="text"
                id={`investmentno${index}`}
                placeholder=""
                value={income}
                onChange={(e) =>
                  handleIncomeChange("investment", index, e.target.value)
                }
              />
              {index === investmentIncomes.length - 1 && (
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "10px", height: "35px" }}
                  onClick={() => handleAddIncome("investment")}
                >
                  +
                </button>
              )}
            </div>
          </div>
        ))}

        <br></br>
        {/* Business Income */}
        {businessIncomes.map((income, index) => (
          <div className="form-group contact" key={`business${index}`}>
            <label className="lables" htmlFor={`businessno${index}`}>
              Business Income {index + 1}
            </label>
            <div className="custom_input" style={{ display: "flex" }}>
              <input
                className="details-input form-control"
                type="text"
                id={`businessno${index}`}
                placeholder=""
                value={income}
                onChange={(e) =>
                  handleIncomeChange("business", index, e.target.value)
                }
              />
              {index === businessIncomes.length - 1 && (
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "10px", height: "35px" }}
                  onClick={() => handleAddIncome("business")}
                >
                  +
                </button>
              )}
            </div>
          </div>
        ))}
        <br></br>
        {/* Other Income */}
        {otherIncomes.map((income, index) => (
          <div className="form-group contact" key={`other${index}`}>
            <label className="lables" htmlFor={`otherno${index}`}>
              Other Income {index + 1}
            </label>
            <div className="custom_input" style={{ display: "flex" }}>
              <input
                className="details-input form-control"
                type="text"
                id={`otherno${index}`}
                placeholder=""
                value={income}
                onChange={(e) =>
                  handleIncomeChange("other", index, e.target.value)
                }
              />
              {index === otherIncomes.length - 1 && (
                <button 
                className="btn btn-primary"
                style={{marginLeft:"10px",height:"35px"}}
                onClick={() => handleAddIncome("other")}>
                  +
                </button>
              )}
            </div>
          </div>
        ))}

        <br></br>

        <button
          className="btn btn-primary"
          style={{ marginTop: "3%", marginLeft: "70%" }}
          type="submit"
        >
          Update
        </button>
        <br></br>
        <br></br>
      </form>
    </div>
  );
}

export default Incomedetails;
