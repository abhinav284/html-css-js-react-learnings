
import React, { useState } from 'react';
function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div>
      <h1>Task 7: Conditional Rendering</h1>

      {isLoggedIn ? (
        <button onClick={handleLogoutClick}>Logout</button>
      ) : (
        <button onClick={handleLoginClick}>Login</button>
      )}

      <p>User is {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
    </div>
  );
}

export default LoginControl;
