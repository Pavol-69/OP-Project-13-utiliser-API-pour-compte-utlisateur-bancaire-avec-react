import "../../style/generalCSS.scss";
import "../../style/pages/UserPage.scss";
import "../../style/components/userpage/Account.scss";

function Account({ account }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{account.title}</h3>
        <p className="account-amount">{account.amount}</p>
        <p className="account-amount-description">{account.description}</p>
      </div>

      <button className="transaction-button">View transactions</button>
    </section>
  );
}

export default Account;
