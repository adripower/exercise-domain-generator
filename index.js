let pronombre =["el","la","eso"];
let adj =["grande","pequeño","alto"];
let noum =[".com",".es",".net"];

for (let i = 0; i < pronombre.length; i++) {
  
    for (let a = 0; a < adj.length; a++) {
  
    for (let b = 0; b < noum.length; b++) {
    
        
        console.log(pronombre[i] + adj[a] + noum[b]);
    }
}

}
