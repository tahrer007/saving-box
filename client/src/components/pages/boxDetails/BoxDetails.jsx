import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectedCurrentMode } from "features/theme/themeSlice";
import useTheme from "hooks/useUserInfo";
import SharedBoxDetails from "components/boxDetails/sharedBoxDetails/SharedBoxDetails";
import { useLocation } from "react-router-dom";
import { changeDateFormate } from "utils/dateAndTimeFormate";
import "./boxDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import InnerButton from "components/boxDetails/innerButtons/InnerButton";
import Header from "components/header/Header";
const SavingBox = () => {
  const location = useLocation();
  const { box } = location.state;
  const historyArrLength = box.depositsHistory.length;
  const firstDeposit = box.depositsHistory[historyArrLength - 1]?.deposit;
  const theme = useTheme();

  useEffect(() => {
    console.log(box);
  }, [box]);

  if (!box) return;

  const getSharedBoxDetails = ({ boxKey, isAllowedToReveal }) =>
    console.log(boxKey, isAllowedToReveal);

  return (
    <section className={`innerContainer boxdetailsSection`}>
      <header>
        
        <Header text ={box.boxName}/>
        <div className="otherDetails">
          <div className="dates">
            created at : {changeDateFormate(box.createdAt)}
          </div>

          <div className="reward">
            <FontAwesomeIcon icon={faStar} />
            deposits counter : <span>{historyArrLength}</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={box.type ? faUsers : faUser} />
          </div>
        </div>
      </header>
      <main>
        {!box.type ? (
          <div className="lastUpdate">
            {firstDeposit
              ? `Last update at : ${firstDeposit}`
              : "you haven't saved yet"}
            {/*//TODO : change the time formte 
        // {*/}
          </div>
        ) : (
          <SharedBoxDetails
            newBox={false}
            getSharedBoxDetails={getSharedBoxDetails}
            boxDetails={box}
          />
        )}
      </main>
      <footer>
        <InnerButton box={box} />
      </footer>
    </section>
  );
};

export default SavingBox;
