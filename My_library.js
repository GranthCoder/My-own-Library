function Bounce_Off(objectA,objectB){
    if (objectA.x - objectB.x < objectB.width/2 + objectA.width/2
      && objectB.x - objectA.x < objectB.width/2 + objectA.width/2) {
  
        objectA.velocityX = objectA.velocityX * (-1);
        objectB.velocityX = objectB.velocityX * (-1);
    }
  
    if (objectA.y - objectB.y < objectB.height/2 + objectA.height/2
      && objectB.y - objectA.y < objectB.height/2 + objectA.height/2){
  
        objectA.velocityY = objectA.velocityY * (-1);
        objectB.velocityY = objectB.velocityY * (-1);
    }
  
  }
  function is_touch(objectA,objectB){
  
    if (objectA.x - objectB.x < objectB.width/2 + objectA.width/2
      && objectB.x - objectA.x < objectB.width/2 + objectA.width/2
      &&objectA.y - objectB.y < objectB.height/2 + objectA.height/2
      && objectB.y - objectA.y < objectB.height/2 + objectA.height/2){
  
      return true;
  
    }else{
      return false;
    }
}