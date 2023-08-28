//Elemento pokemon
const pokemon = function(data){
    const id = data.id;
    const name = data.name;
    const height = data.height;
    const weight = data.weight;
    const front_image = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    const back_image = data.sprites.back_default;
    const front_gif = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    const back_gif= data.sprites.versions["generation-v"]["black-white"].animated.back_default;
    const primary_type = data.types[0].type.name;
    let secondary_type = null;
    const order = data.order;
    const exp_base = data.base_experience;

    const items = data.held_items[0];
    try{
        secondary_type = data.types[1].type.name;
    }catch(err){

    }
    //stats
    const stats = data.stats;
    //habilities
    const hab_1 = data.abilities[0].ability.name; 
    let hab_2 = null;
    try{
        hab_2 = data.abilities[1].ability.name;
    }catch(err){}

    //moves
    let moves = [] ;
    data.moves.forEach(item => {
        moves.push(item.move.name);
    });
    return Object.assign({id, name, height, weight, front_image, primary_type, secondary_type, front_gif, back_gif, items, order, exp_base, stats, hab_1, hab_2, moves});
}
/**
 * Modelo adicional para manejar la estructura de los movimientos por pokemon.
 */
const move = function(obj){
    const name = obj.name;
    const type = obj.type.name;
    const pp = obj.pp;
    const dm_class = obj.damage_class.name;
    const acuracy = obj.acuracy;
    const power = obj.power;
    let description = "---";
    try{
        description = obj.effect_entries[0].short_effect;
    }catch(err){

    }
    return Object.assign({name, type, pp, dm_class, acuracy, power, description});
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
    let last_type = "--";
    let last_tag_type = "grass";
    /**
     * Utilidades para modal de vista de pokedex
     */
    const modal_pokedex = function(div_item, poke_item){
        const modal_ = document.querySelectorAll('[btn-close]');
        /**
         * funcion para despliege de pokedex
         */
        div_item.addEventListener('click',function(){
            //EFECTOS DE LA POKEDEX
            const modal = document.querySelector('[sumary]');
            const img_ = document.querySelector('[img-sumary-type]');
            const cover_l = document.querySelector('[cover-l]');
            const cover_r = document.querySelector('[cover-r]');
            const screen_1 = document.querySelector('[screen]');
            const screen_2 = document.querySelector('[screen2]');
            
            modal.classList.remove('sumary-hide');
            modal.classList.add('sumary-show');
            setTimeout(()=>{
                img_.classList.remove('img-hide');
                img_.classList.add('img-show');

            },800);
            setTimeout(()=>{
                cover_l.classList.remove('l-cover-close');
                cover_l.classList.add('l-cover-open');
                cover_r.classList.remove('r-cover-close');
                cover_r.classList.add('r-cover-open');
                screen_1.classList.remove('bg-desk-hide');
                screen_2.classList.remove('bg-desk-hide');
                screen_1.classList.add('bg-desk-show');
                screen_2.classList.add('bg-desk-show');


            },300);
            /**
             * A partir de aqui se deberan cargar los datos a la pokedex en el DOM
             
            */
            //PRIMERA TARGETA!!!

            const img_sumary = document.querySelector('[img-sumary-type]');
            const sumary_1 = document.querySelector('[sumary-1]');
            const sumary_2 = document.querySelector('[sumary-2]');
            const name_dex = document.querySelector('[name-dex]');
            const img_dex = document.querySelector('[img-dex]');
            const item_dex = document.querySelector('[item-dex]');
            const about_dex = document.querySelector('[about-dex]');
            const no_dex = document.querySelector('[no-dex]');
            const name2_dex = document.querySelector('[name2-dex]');
            const type_dex = document.querySelector('[type-dex]');
            const ot_dex = document.querySelector('[type2-dex]');
            const id_dex = document.querySelector('[id-dex]');
            const exp = document.querySelector('[xp]');
            const next_dex = document.querySelector('[next-dex]');
            const btn_next2 = document.querySelector('[btn-sumary2]');
            btn_next2.addEventListener('click', function(){
                sumary_1.setAttribute("hidden", "");
                sumary_2.removeAttribute("hidden");
            })
            const btn_next = document.querySelector('[btn-sumary]');
            btn_next.addEventListener('click', function(){
                sumary_2.setAttribute("hidden", "");
                sumary_1.removeAttribute("hidden");
            })
            img_sumary.classList.remove(last_type);
            last_type = "bg-target-" + poke_item.primary_type + "";
            img_sumary.classList.add(last_type);
            sumary_2.setAttribute("hidden", "");
            sumary_1.removeAttribute("hidden");
            name_dex.textContent = poke_item.name;
            img_dex.setAttribute("src", poke_item.front_gif);
            item_dex.textContent = poke_item.items;
            no_dex.textContent = poke_item.order;
            name2_dex.textContent = poke_item.name;
            type_dex.textContent = poke_item.primary_type;
            type_dex.setAttribute("class", "tag-type m-0 p-0 h-5 w-5 line-height-0 text-light type-" + poke_item.primary_type + " bg-target-" + poke_item.primary_type + "");
            ot_dex.textContent = poke_item.secondary_type;
            if(ot_dex.textContent == ""){
                ot_dex.textContent = "----";
            }
            ot_dex.setAttribute("class", "tag-type m-0 p-0 h-5 w-5 line-height-0 text-light type-" + poke_item.secondary_type + " bg-target-" + poke_item.secondary_type + "");
            id_dex.textContent = poke_item.weight + ".00 kg";
            exp.textContent = poke_list.exp_base + "";
            console.log
            next_dex.textContent = "???";
            /**
             * SEGUNDA TARGETA
             */
            const name_dex2 = document.querySelector('[name-dex2]');
            const img_dex2 = document.querySelector('[img-dex2]');
            const item_dex2 = document.querySelector('[item-dex2]');
            name_dex2.textContent = poke_item.name;
            img_dex2.setAttribute("src", poke_item.front_gif);
            item_dex2.textContent = poke_item.items;
            /**Stats */
            const hp = document.querySelector('[hp]');
            const atk = document.querySelector('[atk]');
            const def = document.querySelector('[def]');
            const esp_atk = document.querySelector('[esp-atk]');
            const esp_def = document.querySelector('[esp-def]');
            const spd = document.querySelector('[spd]');

            hp.textContent = poke_item.stats[0].base_stat + "/" + poke_item.stats[0].base_stat;
            atk.textContent = poke_item.stats[1].base_stat;
            def.textContent = poke_item.stats[2].base_stat;
            esp_atk.textContent = poke_item.stats[3].base_stat;
            esp_def.textContent = poke_item.stats[4].base_stat;
            spd.textContent = poke_item.stats[5].base_stat;
            /**Habilities
             */
            const hab = document.querySelector('[habiliti-name]');
            const hab_l = document.querySelector('[habiliti-l]');
            const hab_r = document.querySelector('[habiliti-r]');
            const hab_description = document.querySelector('[habiliti-description]');
            hab.textContent = poke_item.hab_1;
            async function fetchHab(hab__) {
                const response = await fetch('https://pokeapi.co/api/v2/ability/' + hab__ + '/');
                
                const data = await response.json();
                if(data.effect_entries[0].language.name == "en"){
                    hab_description.textContent = data.effect_entries[0].short_effect;
                }else{
                    hab_description.textContent = data.effect_entries[1].short_effect;
                }
            }
            fetchHab(poke_item.hab_1);

            hab_l.addEventListener('click',function(){
                    hab.textContent = poke_item.hab_1;
                    fetchHab(poke_item.hab_1);
            });

            hab_r.addEventListener('click',function(){

                if(poke_item.hab_2 != null){
                    hab.textContent = poke_item.hab_2;
                    fetchHab(poke_item.hab_2);
                }
            });   
            
            /**
             * All move list
             * aqui usamos la instancia de movimientos junto a una funcion recursiva para
             * crear todos los movimientos junto con sus eventos.
             */
            async function set_moves(moves_, cont_){
                if(moves_.length >= cont_){
                    const response = await fetch('https://pokeapi.co/api/v2/move/' + moves_[cont_-1] + '/');
                    const data = await response.json();
                    const move_ = new move(data);
                    cont_ = cont_ + 1;

                    const cont_moves = document.querySelector('[cont-moves]');
                    const tagg = document.createElement('spam');
                    const new_move = document.createElement('div');
                    const name__ = document.createElement('div');
                    const pp = document.createElement('div');
                    const div_1 = document.createElement('div');
                    div_1.setAttribute('class', ' line-height-0 d-flex flex-row justifi-content-center align-items-center m-0 p-0')
                    const div_2 = document.createElement('div');
                    div_2.setAttribute('class', ' line-height-0 d-flex justifi-content-end align-items-center  m-0 p-0')
                    pp.setAttribute('class','line-height-0 ms-5 ps-5');
                    pp.textContent = 'PP' + move_.pp;
                    tagg.setAttribute("class", "tag-type m-0 p-0 h-75 w-7 line-height-0 text-light type-" + move_.type + " bg-target-" + move_.type + "");
                    tagg.textContent = move_.type;
                    name__.textContent = move_.name;
                    name__.setAttribute('class', 'pe-4 ps-4');
                    new_move.setAttribute('class', 'move');

                    div_1.appendChild(tagg);
                    div_1.appendChild(name__);
                    div_2.appendChild(pp);
                    new_move.appendChild(div_1)
                    new_move.appendChild(div_2)
                    cont_moves.appendChild(new_move);

                    set_moves(moves_, cont_);
                }else{
                }
            }
            const cont_moves = document.querySelector('[cont-moves]');
            cont_moves.innerHTML = '';
            set_moves(poke_item.moves, 1);

        });
        /**
         * funcion para ocultar pokedex
         */
        modal_.forEach(item => {
                
            item.addEventListener('click', function(){
                const modal = document.querySelector('[sumary]');
                const img_ = document.querySelector('[img-sumary-type]');
                const cover_l = document.querySelector('[cover-l]');
                const cover_r = document.querySelector('[cover-r]');
                const screen_1 = document.querySelector('[screen]');
                const screen_2 = document.querySelector('[screen2]');
                
                img_.classList.remove('img-show');
                img_.classList.add('img-hide');
                setTimeout(()=>{
                    cover_l.classList.add('l-cover-close');
                    cover_l.classList.remove('l-cover-open');
                    cover_r.classList.add('r-cover-close');
                    cover_r.classList.remove('r-cover-open');

                    screen_1.classList.remove('bg-desk-show');
                    screen_2.classList.remove('bg-desk-show');
                    screen_1.classList.add('bg-desk-hide');
                    screen_2.classList.add('bg-desk-hide');

                },300);
                setTimeout(()=>{
                modal.classList.remove('sumary-show');
                modal.classList.add('sumary-hide');
                },600);
            })
        });
        return div_item;
    }

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
            let fs = document.createElement('div');
            fs.className = "col-2 bg-target-" + item.primary_type + " rounded-4 m-3 bg-target ";
            fs.innerHTML = card.innerHTML;
            fs.setAttribute('cards', ' ');
            fs = modal_pokedex(fs, item);
            
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


