function confirmComplete(name, id){
  if (name === "" && id === ""){
    return "A name must be provided.\nAn id must be provided";
  }
  else if (name === ""){
    return "A name must be provided.";
  }
  else if (id === ""){
    return "An ID must be provided.";
  }
};

function checkForDuplicate(currentId, currentName, arr){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]["id"] === currentId && arr[i]["name"] === currentName){
      var alert = currentName+" is already in the system.";
      return alert;
    }
    else if (arr[i]["id"] === currentId){
      var alert = "'"+currentId+"'"+" is taken, please choose another ID.";
      return alert;
    }
    else
      return false;
  };
};


module.exports = {
  confirmComplete: confirmComplete,
  checkForDuplicate: checkForDuplicate
}