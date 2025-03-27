import React, { useState } from 'react';

function RoleButton({ role, onRoleChosen }) {
  const [chosenRole, setChosenRole] = useState(false);

  function choose() {
    setChosenRole(true);
    onRoleChosen(role); // Pass the role data to the onRoleChosen function
  }

  return (
    <button onClick={choose} className={`RoleButton ${chosenRole ? 'chosen' : ''}`}>
      {role.name} {/* Display the role name */}
    </button>
  );
}

export default RoleButton;