import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Lahiru",
    lastName: "Sanjeewa",
    email: "rathne1997@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.4}
          />
        </header>
      </div>

      <RightSideBar
        user={loggedIn}
        transation={[]}
        banks={[{ currentBalance: 134.56 }, { currentBalance: 534.56 }]}
      />
    </section>
  );
};

export default Home;
