let services = [
    { id: 1, name: 'Service 1', description: 'Description 1', price: 10.99 },
    { id: 2, name: 'Service 2', description: 'Description 2', price: 20.99 },
    { id: 3, name: 'Service 3', description: 'Description 3', price: 30.99 },
  ];
  
  const serviceListElement = document.getElementById('service-list');
  const addServiceFormElement = document.getElementById('add-service-form');
  
  // Display the service list
  services.forEach((service) => {
    const listItemElement = document.createElement('li');
    listItemElement.textContent = `${service.name} - ${service.description} - $${service.price}`;
    serviceListElement.appendChild(listItemElement);
  });
  
  // Add event listener to the add service form
  addServiceFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');
    const newService = {
      id: services.length + 1,
      name: nameInput.value,
      description: descriptionInput.value,
      price: parseFloat(priceInput.value),
    };
    services.push(newService);
    const newListItemElement = document.createElement('li');
    newListItemElement.textContent = `${newService.name} - ${newService.description} - $${newService.price}`;
    serviceListElement.appendChild(newListItemElement);
    nameInput.value = '';
    descriptionInput.value = '';
    priceInput.value = '';
  });
  
  // Add event listener to each list item to allow updating and deleting
  serviceListElement.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      const serviceId = event.target.parentNode.id;
      const serviceIndex = services.findIndex((service) => service.id === parseInt(serviceId));
      if (event.target.textContent === 'Update') {
        // Update service logic here
      } else if (event.target.textContent === 'Delete') {
        services.splice(serviceIndex, 1);
        event.target.parentNode.remove();
      }
    }
  });