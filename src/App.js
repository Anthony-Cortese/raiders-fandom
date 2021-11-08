import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);
  const [isShown7, setIsShown7] = useState(false);

  var seconds1 = new Date("9/07/1997");
  var seconds2 = new Date();
  var seconds = Math.floor(seconds2 - seconds1) / 1000;
  console.log(seconds + " a Raiders fan");

  var date1 = new Date("9/07/1997");
  var date2 = new Date();
  var difference = date2.getTime() - date1.getTime();

  var days = Math.ceil(difference / (1000 * 3600 * 24));

  useEffect(() => {
    const interval = setInterval(() => setTime(seconds), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => setDate(days) + 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  var year1 = "1997";

  var yearDiff = Date.now() - year1;
  var yearDate = new Date(yearDiff); // miliseconds from epoch
  var totalYears = Math.abs(yearDate.getUTCFullYear() - 1997);

  return (
    <section id="app">
      <section id="moments">
        <div className="tuck-rule">
          <div
            className="years-title"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            2000
          </div>
          {isShown && (
            <div
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className="show-page"
            >
              <p>Gannon Hurt</p>
              <p>
                Oakland ended their first postseason run in six years with a
                16-3 loss largely because quarterback Rich Gannon never
                recovered from a hit by Baltimore defensive tackle Tony
                Siragusa.
              </p>
            </div>
          )}
        </div>

        <div className="super-bowl">
          <div
            className="years-title"
            onMouseEnter={() => setIsShown1(true)}
            onMouseLeave={() => setIsShown1(false)}
          >
            2001
          </div>
          {isShown1 && (
            <div
              onMouseEnter={() => setIsShown1(true)}
              onMouseLeave={() => setIsShown1(false)}
              className="show-page"
            >
              <p>Tuck Rule</p>
              <p>
                The iconic moment against the Patriots where Tom Brady went back
                for a pass and fumbled only to have the call reversed and the
                Raiders lose the game.
              </p>
            </div>
          )}
        </div>

        <div className="super-bowl1">
          <div
            className="years-title"
            onMouseEnter={() => setIsShown2(true)}
            onMouseLeave={() => setIsShown2(false)}
          >
            2002
          </div>
          {isShown2 && (
            <div
              onMouseEnter={() => setIsShown2(true)}
              onMouseLeave={() => setIsShown2(false)}
              className="show-page"
            >
              <p>Super Bowl XXXVII Loss</p>
              <p>
                After trading away their head coach Jon Gruden the Raiders
                continued their success all the way to the Super Bowl only to
                face their former coach Jon Gruden and the Bucs. They lost
                48-21.
              </p>
            </div>
          )}
        </div>

        {/* <div className="dog-shit">
          <h4>2003-2015</h4>
          <p>Utter Disappointment</p>
          <p>
            The Raiders put together countless HORRENDOUS seasons after their
            Superbowl run, had a total of 9 different coaches, putting together
            measley rosters which accumulated to a 63 - 125 record during this
            time
          </p>
        </div> */}
      </section>
      <section id="moments-middle">
        <div className="dog-shit1">
          <div
            className="years-title"
            onMouseEnter={() => setIsShown3(true)}
            onMouseLeave={() => setIsShown3(false)}
          >
            2003-2015
          </div>
          {isShown3 && (
            <div
              onMouseEnter={() => setIsShown3(true)}
              onMouseLeave={() => setIsShown3(false)}
              className="show-page"
            >
              <p>Utter Disappointment</p>
              <p>
                The Raiders put together countless HORRENDOUS seasons after
                their Superbowl run, had a total of 9 different coaches, putting
                together measley rosters which accumulated to a 63 - 125 record
                during this time
              </p>
            </div>
          )}
        </div>
        <div className="raider-facts">
          <h1 className="my-facts">I have been a Raiders fan for </h1>
          <p className="my-facts">
            <p className="total-seconds">{seconds} seconds</p>{" "}
          </p>
          <p className="my-facts">
            <p className="total-days">{days} days</p>{" "}
          </p>
          <p className="my-facts">
            <p className="total-years">{totalYears} years</p>
          </p>
        </div>
        <div className="dog-shit1">
          <div
            className="years-title"
            onMouseEnter={() => setIsShown4(true)}
            onMouseLeave={() => setIsShown4(false)}
          >
            2016
          </div>
          {isShown4 && (
            <div
              onMouseEnter={() => setIsShown4(true)}
              onMouseLeave={() => setIsShown4(false)}
              className="show-page"
            >
              <p>Derek Carr Break's Leg</p>
              <p>
                The 2016 Raiders were back looking like a legit contender. Derek
                Carr was a serious MVP candidate. The Raiders were winning and
                poised for their first playoff berth in over decade. That’s when
                all hope went crashing down as Trent Cole sacked Carr. The
                Raiders quarterback was carried off the field and he’s yet to
                return to that same level of play.
              </p>
            </div>
          )}
        </div>
      </section>
      <section id="moments-bottom">
        <div className="tuck-rule">
          <div
            className="years-title"
            onMouseEnter={() => setIsShown5(true)}
            onMouseLeave={() => setIsShown5(false)}
            // className="black"
          >
            2018
          </div>
          {isShown5 && (
            <div
              onMouseEnter={() => setIsShown5(true)}
              onMouseLeave={() => setIsShown5(false)}
              className="show-page"
            >
              <p className="black">Jon Gruden Comes Back</p>
              <p className="black">
                The Raiders after another poor 2017 season, the Raiders talked
                Jon Gruden into leaving the announcing booth and to become their
                next head coach. He signed a 10 year, 100 million dollar
                contract and it felt like the tide was going to turn!
              </p>
            </div>
          )}
        </div>
        {/* <div className="super-bowl">
          <h4 className="black">2018</h4>
          <p className="black">Trading Khalil Mack and Amari Cooper</p>
          <p className="black">
            It’s not often two Pro Bowlers on the right side of 30 years old are
            traded for draft picks, midseason and within two months of each
            other. That’s exactly what happened when the Raiders sent Khalil
            Mack to the Chicago Bears amid his holdout and then sent a
            disengaged Amari Cooper to the Cowboys in 2018. Both of those teams
            made the playoffs while Oakland was firing their general manager at
            the end of Jon Gruden’s first season back as head coach.
          </p>
        </div> */}

        <div className="super-bowl1">
          <div
            className="years-title"
            onMouseEnter={() => setIsShown6(true)}
            onMouseLeave={() => setIsShown6(false)}
          >
            2020
          </div>
          {isShown6 && (
            <div
              onMouseEnter={() => setIsShown6(true)}
              onMouseLeave={() => setIsShown6(false)}
              className="show-page"
            >
              <p>Viva Las Vegas</p>
              <p>
                The Raiders officially relocated to Las Vegas leaving their
                former home of Oakland. They kicked of the season in a brand new
                2 billion dollar stadium that looks exactly like the Death Star.
                This has to be their moment!
              </p>
            </div>
          )}
        </div>
        <div className="dog-shit">
          <div
            className="years-title"
            onMouseEnter={() => setIsShown7(true)}
            onMouseLeave={() => setIsShown7(false)}
          >
            2021
          </div>
          {isShown7 && (
            <div
              onMouseEnter={() => setIsShown7(true)}
              onMouseLeave={() => setIsShown7(false)}
              className="show-page"
            >
              <p className="black">Gruden Depature and ...</p>
              <p className="black">
                After week 3 of the 2021 season some emails had surface that Jon
                Gruden had been using homophobic slurs, as well as making
                mysogynistic comments. He resigned 3 days later. THEN a week
                later our star WR Henry Ruggs was in a DUI car accident killing
                the driver and her dog. He is facing jail time and was cut by
                the team. HOW WILL THEY RECOVER FROM THIS? WILL THEY EVER?
              </p>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

export default App;
