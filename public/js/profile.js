const createItem = async (event) => {

  const name = document.querySelector('#item-title').value.trim();
  const desc = document.querySelector('#item-desc').value.trim();
  const quality = document.querySelector('#item-qual').value.trim();


  if (name && desc) {
    const response = await fetch(`/api/items`, {
      method: 'POST',
      body: JSON.stringify({ name, desc, quality }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/profile');
      alert('Item uploaded sucessfully')
    } else {
      alert('Failed to create item');
    }
  }else{
    alert('Please enter a title and description');
  } 
};

const delItem = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete item');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', createItem);