document.addEventListener('DOMContentLoaded', function() {
    const membersContainer = document.getElementById('members-container');

    // Load member data from JSON file
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
        // Filter members with gold or higher membership level
        const goldMembers = data.members.filter(member => member.membership_level === 'Gold' || member.membership_level === 'NP');
        displayMembers(goldMembers);
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
        `;
        memberElement.innerHTML = memberInfo;
        membersContainer.appendChild(memberElement);
      });
    }
});

  