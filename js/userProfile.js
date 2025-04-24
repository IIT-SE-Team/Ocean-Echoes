document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const file = document.getElementById('profile-pic').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('display-profile-pic').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
    
    document.getElementById('display-name').textContent = 
        `${document.getElementById('first-name').value} ${document.getElementById('last-name').value}`;
    
    document.getElementById('display-role').textContent = document.getElementById('role').value;
    document.getElementById('display-bio').textContent = document.getElementById('bio').value;
    document.getElementById('display-interests').textContent = document.getElementById('interests').value;
    
    const selectedVolunteering = document.querySelectorAll('input[name="volunteering"]:checked');
    const volunteeringList = document.getElementById('display-volunteering');
    volunteeringList.innerHTML = '';
    selectedVolunteering.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.value;
        volunteeringList.appendChild(li);
    });
    
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('profile-container').classList.remove('hidden');
});

document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('profile-container').classList.add('hidden');
    document.getElementById('form-container').classList.remove('hidden');
});