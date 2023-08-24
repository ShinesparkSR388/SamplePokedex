//Elemento pokemon
const pokemon = function(data){
    const id = data.id;
    const name = data.name;
    const height = data.height;
    const weight = data.weight;
    const front_image = data.sprites.front_default;
    const primary_type = data.types[0].type.name;
    let secondary_type = null;
    try{
        secondary_type = data.types[1].type.name;
    }catch(err){

    }
    return Object.assign({id, name, height, weight, front_image, primary_type, secondary_type});
}
/**
 * 
 * Aqui se define la estructura de la pokedex
 */
const pokedex = function(){
    const max_id_count = 150;
    const id_increment = 20;
    let id_count = 0;
    let poke_list = [];
    const draw_poke_list = function(new_list){
        const container = document.querySelector('[cat-alog]');
        this.id_count = this.id_count + this.id_increment;
        new_list.forEach(item => {
            let tags = ` <div class="tag-type col-12 type-` + item.primary_type +`">` + item.primary_type +`</div>
            <div class="tag-type col-12 type-` + item.secondary_type +`">` + item.secondary_type +`</div>`;
            if(item.secondary_type == null){
                tags = ` <div class="tag-type col-12 type-` + item.primary_type +`">` + item.primary_type +`</div>`;
            }
            let height_ = 150;
            if(item.height > 12){
                height_ = 150 - (150 * ((item.height-18) / item.height));
            }
            const card = { 
                innerHTML:`
                <div class="bg-poke">
                    <div class="d-flex flex-row justify-content-around align-items-start">
                        <h4 class="fw-bold mb-3">` + item.name + `</h4>
                        <i class="bi bi-heart" style="font-size: 2.5vh;"></i></div>
                        <div class="row">
                            <div class="col-5 ps-3">
                                <div class="w-100 h-75 d-flex flex-column justify-content-center align-items-start">
                                `+ tags +`
                                </div>
                            </div>
                        <div class="col-7 d-flex justify-content-center align-items-center">
                            <img src="` + item.front_image +`" class="image-poke-list" alt="" style="height:`+ height_ +`%">
                        </div>
                    </div>
                </div>
                `
            };
            const fs = document.createElement('div');
            fs.className = "col-2 bg-target-" + item.primary_type + " bg-target rounded-4 p-3 pb-1 pt-2 pe-0 m-3";
            fs.innerHTML = card.innerHTML;
            fs.setAttribute('cards', ' ');
            container.appendChild(fs);
        });
        /**
        * A partir de este punto se empezaran a insertar
        *  la nueva cantidad de id_increment a la vista
        * 
        */
        return
    }
    const get_poke_list = function(amount, new_list){
        /**
         * Funcion recursiva para crear una lista de pokemon
         * hasta cumplir con la cantidad de incremento
         */
        if(amount == id_count+id_increment+1){
            id_count = id_count + id_increment;
            draw_poke_list(new_list);
            return
        }
        fetch("https://pokeapi.co/api/v2/pokemon/"+ amount +"/").then(Response => Response.json()).then(function(data){  
            new_list.push(new pokemon(data));
            get_poke_list(amount+1, new_list);
            return
        }).catch(function(err){ console.log(err)});

    }
    const dibujar_pokedex = function(){
        if(max_id_count > id_count){
            console.log(id_count);
            get_poke_list(id_count+1, []);
            return true;
        }else{
            return false;
        }
    }

    return Object.assign({dibujar_pokedex});
}

let pok = new pokedex();
setTimeout(() => {pok.dibujar_pokedex();},500);


