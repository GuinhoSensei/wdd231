document.addEventListener('DOMContentLoaded', function() {
    const membersContainer = document.getElementById('members-container');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');
  
    // Load member data from JSON file
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
        displayMembers(data.members);
      })
      .catch(error => console.error('Error fetching member data:', error));
  
    // Function to display members
    function displayMembers(members) {
      membersContainer.innerHTML = '';
  
      members.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('member');
  
        const memberInfo = `
          <img src="images/${member.image}" alt="${member.name}">
          <h2>${member.name}</h2>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.name}.com</a></p>
          <p><strong>Membership Level:</strong> ${member.membership_level}</p>
        `;
  
        memberElement.innerHTML = memberInfo;
        membersContainer.appendChild(memberElement);
      });
    }
  
    // Event listeners for toggling views
    gridViewButton.addEventListener('click', function() {
      membersContainer.classList.remove('list-view');
      membersContainer.classList.add('grid-view');
    });
  
    listViewButton.addEventListener('click', function() {
      membersContainer.classList.remove('grid-view');
      membersContainer.classList.add('list-view');
    });
  });
  