import React from 'react';

const Summary = ({sleepingArrangements, type, user, selfCheckin, superhost}) => {

  return (
    <div>
      <div>
        <h4>
          {type}
        </h4>
        <div>
          <span>X guests</span>
          <span>type of furniture</span>
          <span>X beds</span>
          <span>X bath</span>
        </div>

        <div>
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

        </div>
      </div>
    </div>
  );
};

export default Summary;