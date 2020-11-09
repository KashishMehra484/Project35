class Game{
constructor(){    
}
    
gameCount(){
var countRef = database.ref('gameCount');
countRef.on("value",function(data){
gameCount = data.val()    
})
}
    
gmaeCount(count){
database.ref('/').update({
gameCount : count    
})
}
    
updateName(name){
var gameIndex = 'game' + gameCount;
database.ref(gameIndex).set({
Name : name    
})    
}
}