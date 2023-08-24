
//Elemento pokemon
const pokemon = function(data){
    const id = data.id;
    const name = data.name;
    const height = data.height;
    const weight = data.weight;
    const front_image = data.sprites.front_default
    const primary_type = data.types[0].type.name;
    const secondary_type = data.types[0].type.name || null;
    return Object.assign({},name,front_image);
}
