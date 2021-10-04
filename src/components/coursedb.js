// use local storage 
const addToDb = id => {
    const exists = getDb();
    let person_add = {};
    if (!exists) {
      person_add[id] = 1;
    }
    else {
      person_add = JSON.parse(exists);
      if (person_add[id]) {
        const newCount = person_add[id] + 1;
        person_add[id] = newCount;
      }
      else {
        person_add[id] = 1;
      }
    }
    updateDb(person_add);
  }
  
  const getDb = () => localStorage.getItem('person_add');
  
  const updateDb = cart => {
    localStorage.setItem('person_add', JSON.stringify(cart));
  }
  
  const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {
  
    }
    else {
      const person_add = JSON.parse(exists);
      delete person_add[id];
      updateDb(person_add);
    }
  }
  
  const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheCart = () => {
    localStorage.removeItem('person_add');
  }
  
  export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }