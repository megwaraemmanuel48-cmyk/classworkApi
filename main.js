 document.getElementById('loadUsersBtn').addEventListener('click', () => {
      fetch('http://localhost:3000/api/students')
        .then(response => response.json())
        .then(students => {
          const container = document.getElementById('userContainer');
          container.innerHTML = ''; 

          students.forEach(student => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
              <h3>${student.name}</h3>
              <p><strong>Email:</strong> ${student.deparment}</p>
              <p><strong>City:</strong> ${student.level}</p>
            `;
            container.appendChild(userCard);
          });
        })
        .catch(error => {
          console.error('Error fetching students:', error);
        });
    });