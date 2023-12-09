document.getElementById('generateBtn').addEventListener('click', function() {
    fetchActivity('http://www.boredapi.com/api/activity/');
    showParameterSelection();
  });
  
  document.getElementById('participantsBtn').addEventListener('click', function() {
    showParticipants();
  });
  
  document.getElementById('priceBtn').addEventListener('click', function() {
    showPrice();
  });
  
  document.getElementById('returnBtn').addEventListener('click', function() {
    showParameterSelection();
  });
  
  document.getElementById('activityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const participants = document.getElementById('participants').value;
    const price = document.getElementById('price').value;
    const convertedPrice = (price / 10).toFixed(1); // Convert 0-10 range to 0.0-1.0 range
    
    const apiUrl = participants !== '' ? `http://www.boredapi.com/api/activity?participants=${participants}` : `http://www.boredapi.com/api/activity?price=${convertedPrice}`;
    
    fetchActivity(apiUrl);
  });
  
  function showParticipants() {
    document.getElementById('participantsLabel').style.display = 'block';
    document.getElementById('participants').style.display = 'block';
    document.getElementById('priceLabel').style.display = 'none';
    document.getElementById('price').style.display = 'none';
    document.getElementById('activityForm').style.display = 'block';
    document.getElementById('returnBtn').style.display = 'block';
    document.getElementById('generateBtn').style.display = 'none';
  }
  
  function showPrice() {
    document.getElementById('priceLabel').style.display = 'block';
    document.getElementById('price').style.display = 'block';
    document.getElementById('participantsLabel').style.display = 'none';
    document.getElementById('participants').style.display = 'none';
    document.getElementById('activityForm').style.display = 'block';
    document.getElementById('returnBtn').style.display = 'block';
    document.getElementById('generateBtn').style.display = 'none';
  }
  
  function showParameterSelection() {
    document.getElementById('buttonSection').style.display = 'block';
    document.getElementById('parameterSelection').style.display = 'block';
    document.getElementById('activityForm').style.display = 'none';
    document.getElementById('returnBtn').style.display = 'none';
    document.getElementById('generateBtn').style.display = 'block';
  }
  
  function fetchActivity(apiUrl) {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        document.getElementById('activity').textContent = data.activity;
      })
      .catch(error => {
        console.error('Error fetching activity:', error);
      });
  }
  