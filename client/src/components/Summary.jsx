import React from 'react';
import SleepSummary from './SleepSummary.jsx';


const Summary = ({sleepingArrangements, type, user, selfCheckin, superhost}) => {
  return (
    <div>
      {sleepingArrangements && <SleepSummary
        sleepingArrangements = {sleepingArrangements}
        type = {type}
      />}

      {/* <div>
        {superhost &&
          <div>
            <h4>
              {user} is a Superhost
            </h4>
            <div>
              Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
            </div>
          </div>
        }
      </div>
      <div>
      </div> */}
    </div>
  );
};

export default Summary;