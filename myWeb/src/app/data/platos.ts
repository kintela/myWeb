import { IPlato } from "./IPlatos";

export const PLATOS:IPlato[]=[
    {
        nombre:'Langostinos al horno',
        categorias:['Pescado'],
        imagen:'1.jpg',
        comensales:4,
        ingredientes:['24 langostinos','1 limón','40 ml de whisky','sal', '2 dientes de ajo','1/2 guindilla','aceite de oliva virgen extra','perejil'],
        preparacion:['Para hacer esta original versión de la salsa de ajo y perejil, pela y pica los dientes de ajo en daditos, y ponlos en un bol. Pica también la guindilla y un manojo de perejil (necesitamos una cucharada de perejil) y agrégalos. Vierte el whisky y 60 ml de aceite, y mezcla bien',
        'Pela los langostinos dejándoles la cabeza y la punta de la cola, sin pelar. Colócalos en una bandeja de horno, sazona y aderézalos con la mezcla de aceite, whisky, ajo, guindilla y perejil.',
        'Hornea los langostinos (con el horno precalentado) a 220ºC durante 4-5 minutos'],
        presentacion:['Sirve 6 langostinos en cada plato y riégalos con el líquido de la bandeja del horno.','Lava el limón, córtalo en 4 y coloca un trozo en cada plato. Decóralos con unas hojas de perejil fresco'],
        enlaceVideo:'https://www.hogarmania.com/cocina/recetas/pescados-mariscos/langostinos-horno-perejil-karlos-arguinano.html?utm_source=TwitterKarlos&utm_medium=social&utm_campaign=langostinos-horno-perejil-karlos-arguinano'
    },
    {
        nombre:'Tortilla de Patatas',
        categorias:['Tortilla','Huevos'],
        imagen:'16.jpg',
    },
    {
        nombre:'Garbanzos con chorizo y Zanquarrón',
        ingredientes:['Garbanzos','Chorizo','Zanquarrón'],
        categorias:['Legumbres'],
    },
    {
        nombre:'Merluza al Horno',
        categorias:['Pescado'],
        ingredientes:['1 cola de merluza grandecita','500 gr de cebolla','2 patatas cocidas','75 gr de aceite de oliva virgen extra','5 gr de pimentón',
        '50 gr de aceite de oliva (refrito): aceite donde has dorado unos ajos','20 gr de vinagre de sidra','1 cayena','16 gr de ajo laminado','perejil picado',
        'una pizca de sal'],
        preparacion:['Precalentar el horno a 180º','Se corta la cebolla en juliana y se frie en una sartén con los 75 gr de aceite de oliva durante unos 30 o 40 minutos hasta que esté muy pochada',
        'Se agrega el pimentón de la vera en la sartén, se mueve bien el conjunto y cuando esté ligado se extiende sobre una placa del horno','Se colocan encima las patatas cocidas cortadas en rodajas de medio centrímetro de grosor y se corona el conjunto con la cola de merluza, abierta en libro y perfectamente desespinada, con la piel hacia abajo en contacto con las patatas',
        'Se mete la placa en el horno y se cocina entorno a 8 minutos'],
        presentacion:['Se ponen los 50 gr de aceite de oliva refrito en una sartén junto al ajo y la cayena','Cuando los ajos empiecen a bailar y tomen color se vierte el conjunto sobre la merluza y las patatas que previamente habremos sacado del horno',
        'Se echa el vinagre sobre la misma sartén, se deja que de un hervor y se vierte de nuevo sobre la merluza','Se escurre todo el jugo de la bandeja de hornear sobre la sartén y se lleva a ebullición.',
        'Se vierte de nuevo sobre la merluza y se repite este paso 3 veces en total','Se espolvorea con perejil y se sirve inmediatamente'],
    },
    {
        nombre:'Brócoli con gulas',
        categorias:['Verdura'],
        imagen:'5.jpeg',
    },
    {
        nombre:'Pechugas a la plancha',
        categorias:['Carne'],
    },
    {
        nombre:'Patatas a la riojana',
        categorias:['Verdura','Patatas'],
        imagen:'2.jpg',
        comensales:4,
        ingredientes:['3 chorizos','1 pimiento verde','1 cabeza de ajos','aceite de oliva','2 hojas de laurel','perejil (para decorar)','6 patatas','1 cebolla','2 pimientos choriceros','agua','sal','1 guindilla'],
        preparacion:['Pica la cebolla y el pimiento verde y ponlos en una olla rápida con un chorrito de aceite.','Añade la cabeza de ajos, las hojas de laurel y la guindilla (sin pepitas). Incorpora los chorizos cortados en rodajas y las patatas peladas y cascadas. Cubre con agua y sazona. Cierra la olla y cocina al 1 durante 5 minutos a partir de que empiece a salir el vapor.',
        'Si no utilizas una olla rápida, cocina hasta que las patatas estén guisadas (30-40 minutos aproximadamente).','Retira las semillas a los pimientos choriceros y ponlos a remojo en un cazo con agua templada. Cuando se ablanden, deja templar, retira la carne con un cuchillo y pícala.',
        'Destapa la olla, saca la cabeza de ajos y la guindilla y desgrasa con un cucharón. Añade los pimientos choriceros, remueve y cocina durante dos minutos más (para que se mezclen los sabores).',
        'Pon a punto de sal.'],
        presentacion:['Sirve las patatas a la riojana en un plato hondo y decora con una hojita de perejil.'],
        enlaceVideo:'https://www.hogarmania.com/cocina/recetas/ensaladas-verduras/patatas-riojana-3737.html'
    },
    {
        nombre:'Ensalada de pasta',
        categorias:['Ensalada','Pasta'],
        imagen:'7.jpeg',
    },
    {
        nombre:'Sandwich de Jamon York y Queso',
        categorias:['Sandwich'],
        imagen:'11.jpg'
    },
    {
        nombre:'Alubias Blancas de Bote',
        categorias:['Legumbres'],
        imagen:'10.jpg',
        comensales:4,
        ingredientes:['1 patata','1 pimiento rojo','1 pimiento verde','1 tomate','1 zanahoria','1 cebolla','2 ajos','1 cucharada de pimentón dulce','1 cucharadita de pimienta negra'],
        preparacion:['Pochas la cebolla en una cazuela','Una vez pochada añades los pimientos y los ajos bien picaditos','Cuando veamos que los pimientos y la cebolla están bien integrados añadimos el tomate también picadito y sofreimos un poco mas',
        'A continuación añadimos la zanahoria a rodajas, la patata a gajos pequeños, cubrimos con agua, ponemos la sal, pimienta y el pimenton dulce',
        'Cuando ya estén la patata y la zanahoria blandas y el agua haya reducido un poco añadimos las alubias bien lavadas, movemos con vuidado que no se rompan y listo'],

    },
    {
        nombre:'Burritos de carne picada',
        categorias:['Carne'],
        imagen:'6.jpeg',
        ingredientes:['carne picada','pimiento rojo','pimiento verde','cebolla','tomate frito','maiz','tortillas de trigo','sal','Tabasco','Salsa Barbacoa','Ketchp','queso rallado'],
        preparacion:['Pochamos la cebolla y los pimientos','Cuando estén pochados añadimos la carne picada y la sal','Cuando la carne esté hecha añadimos el maiz y el tomate frito'],
        presentacion:['Puedes acompañar con unos nachos y guacamole'],
    },
    {
        nombre:'Vainas con carne',
        categorias:['Verdura','Carne'],
        imagen:'8.jpeg',
        ingredientes:['vainas','carne de ternera','cebolla','pimiento verde','sal',],
    },
    {
        nombre:'Lentejas con arroz',
        categorias:['Legumbres'],
        ingredientes:['Medio vaso de lentejas por cada ración','un puñado de arroz','media cebolla','2 o 3 zanahorias','2 o 3 puerros','1 pimiento verde',
        '2 o 3 patatas','2 tomates','chorizo de cocido','costilla de cerdo','sal','aceite de oliva'],
        preparacion:['Pones a hervir los tomates para pelarlos y trocearlos antes de echarlos a la olla','Echas las lentejas y el arroz en la olla con un vaso de agua por cada ración',
        'Troceas finita la cebolla y la echas tb en la olla','Troceas las zanahorias peladas y a la olla','Troceas las patatas y los puerros y a la olla',
        'Echas el pimiento verde troceado solo en 2 para darle sabor, luego lo quitas','Echas los tomates troceados','Echas el chorizo y la costilla',
        'Si echas costilla mas de 15 minutos de olla','Echas un chorro de aceite y sal','Pones la olla 15 minutos'],
    },
    {
        nombre:'Anchoas albardadas',
        categorias:['Pescado'],
        ingredientes:['anchoas','harina','huevo','aceite de oliva','cogollos de lechuga'],
        preparacion:['Se limpian las anchoas quitándoles la cabeza y las tripas','Se pasan por harina y huevo','Se fríen en aceite de oliva'],
        presentacion:['Se sirven con cogollos de lechuga'],
        imagen:'4.jpg'        
    },
    {
        nombre:'Robadallo al horno',
        categorias:['Pescado'],
        ingredientes:['1 rodaballo','3 patatas','1 pimiento verde italiano','2 chalotas','2 tomates rama','2 dientes de ajo','Perejil','100 ml de vino blanco para el majado',
        '150 ml de vino blanco para las patatas','Sal','Aceite de oliva virgen extra'],        
        enlaceVideo:'https://www.youtube.com/watch?v=myTmIYDStWs'
    },
    {
        nombre:'Alubias',
        categorias:['Legumbres'],
    },
    {
        nombre:'Lubina al horno',
        categorias:['Pescado'],
    },
    {
        nombre:'Tarta Lotus',
        categorias:['Postre'],
    },
    {
        nombre:'Cordero al horno',
        categorias:['Carne'],
    },
    {
        nombre:'Hamburgesas veganas',
        categorias:['Verdura'],
    },
    {
        nombre:'Fajitas de pollo',
        categorias:['Carne'],
    },
    {
        nombre:'Berenjena rellena al horno',
        categorias:['Verdura'],
    },
    {
        nombre:'Coliflor gratinada',
        categorias:['Verdura'],
    },
    {
        nombre:'Pasta fresca con salsa de naranja',
        categorias:['Pasta'],
    },
    {
        nombre:'Pulpo a feira',
        categorias:['Pescado'],
    },
    {
        nombre:'Pasta con verduras',
        categorias:['Pasta','Verdura'],
    },
    {
        nombre:'Pasta con carne picada',
        categorias:['Pasta','Carne'],
        ingredientes:['pasta a poder ser La Molisana Mezzi Rigatini Nº 32 integral','carne picada','cebolla','zanahoria','pimiento verde','tomate frito','sal'],
        preparacion:['Picas finoa la cebolla, la zanahoria y el pimiento','Pochamos todo añadiendo sal','Cuando esté todo pochado añadimos la carne picada a la que previamente hemos echado tambien sal','Cuando la carne esté hecha desengrasas y añades tomate frito',
                        'Al final añades la pasta cocida y mezclas todo bien'],
        presentacion:['Puedes añadir queso rallado por encima'],
    },
    {
        nombre:'Guisantes con jamón',
        categorias:['Verdura'],
    },
    {
        nombre:'Alcachofas con jamón',
        categorias:['Verdura'],
    },
    {
        nombre:'Albóndigas en salsa',
        categorias:['Carne'],
        imagen:'14.jpg',
        ingredientes:['carne picada','3 huevos','pan rallado','2 zanahorias','sal','pimienta','2 cebollas','harina','tomate frito','2 rebanadas de pan bimbo','leche','1 pmiento verdea'],
        preparacion:['Pones la carne picada en un bol','Untamos en un poco de leche las 2 rebanadas de pan bimbo','picas fina 1 cebolla y la pochas','Echas esta cebolla pochada encima de la carne picada',
        'Echas las rebanadas de pan bimbo empapadas en leche en el bol','Echas 3 huevos en el bol y mezclas todo con sal','Para la salsa picas la otra cebolla, las zanahorias y el pimiento verde no hace falta que sea muy fino porque luego se bate todo',
        'Lo pochas todo y cuando esté pochado lo bates echando todo en un recipiente de batir y echando dentro también tomate frito','Haces las bolas enharinandolas y las fríes','Cuando estén fritas las echas en una cazuela y echas la salsa por encima mas un poco de agua para que cubra y las tienes a fuego lento hasta que reduzca'],
    },
    {
        nombre:'Sopa de fideoas',
        categorias:['Sopa'],
    },
    {
        nombre:'Puré de calabaza',
        categorias:['Verdura'],
    },
    {
        nombre:'Fruta',
        categorias:['Postre'],
        imagen:'9.jpeg'
    },
    {
        nombre:'Bacalao al Horno',
        categorias:['Pescado'],
        imagen:'12.jpg',
        ingredientes:['bacalao','patatas','cebolla','pimiento verde','pimiento rojo','aceite de oliva','sal'],
        preparacion:['Precalientas el horno a 220 grados','Echas un poco de aceite en la bandeja para que no se pege nada','Cortas las patatas finas, les echas sal y las metes en el horno 15 minutos','Cortas la cebolla en juliana y los pimientos, echas sal y los pones después otros 15 minutos en el horno',
        'Pones el bacalao en un hueco entre todo lo demás, echas sal y lo metes 15 minutos mas a 200 grados'],
    },
    {
        nombre:'Tarta de limón',
        categorias:['Postre'],
        imagen:'17.jpg',
        ingredientes:['200 g de galletas','100 g de mantequilla fundida','2 huevos pequeños','50 g de mantequilla','ralladura de 1/2 limón','4 g de hojas de gelatina','100 g de azúcar','60 ml de zumo de limón',
        '250 ml de nata (35% materia grasa)'],
        enlaceVideo:'https://www.hogarmania.com/cocina/recetas/postres/tarta-fria-limon.html#google_vignette'
    },
    {
        nombre:'Sopa de Pollo',
        categorias:['Sopa'],
        ingredientes:['1 carcasa de pollo','1 trozo cebolla','1 puerro','sal','fideos','1 huevo cocido', '1 zanahoria'],
        imagen:'13.jpeg',
        preparacion : ['Pones la carcasa de pollo en una olla con agua junto con la cebolla, el puerro y las zanahorias','Dejas hervir y echas sal', 'Quitas todo','Añades los fideos y dejas cocer el tiempo que te diga la bolsa delo que eches'],
        presentacion:['Puedes añadir un huevo cocido picado por encima','Puedes batir la zanahoria y el puerro que has sacado y echarlo encima'],
    },
    {
        nombre:'Entrecot a la plancha',
        categorias:['Carne'],
    },
    {
        nombre:'Ensalada Mix',
        categorias:['Ensalada'],
        ingredientes:['lechuga','maiz','atún','aceitunas','huevo cocido','aceite de oliva','sal', 'vinagre', 'manzana','mozzarella o burrata','Pimiento picado'], 
    },
    {
        nombre:'Hamburguesas de Calabaza',
        categorias:['Verdura'],
        imagen:'15.jpeg',
        comensales:4,
        enlaceVideo:'https://www.hogarmania.com/cocina/recetas/ensaladas-verduras/hamburguesas-calabaza.html',
        ingredientes:['1/2 kg de calabaza','155 gr de copos de avena','150 ml salsa de tomate','aceite','vinagre','cebolla frita deshidratada','1 zanahoria','100 gr de queso mozzarella','sal','1/2 cucharadita de comino en polvo','1 cucharada de ajo en polvo'],
        preparacion:['Calienta una cazuela con abundante agua. Pela la calabaza, trocéala y añádela a la cazuela. Sazona, tapa y cuécela durante 12-15 minutos','Retira, escúrrela, pásala a un bol y aplástala con un tenedor hasta dejarla reducida a un puré.',
            'Pela la zanahoria, rállala y resérvala','Pon el puré de calabaza, los copos de avena y la zanahoria rallada en un bol grande. Agrega una cucharada de perejil picado, la cebolla, el comino y el ajo. Sazona y mezcla bien',
            'Corta el queso en daditos','Para montar las hamburguesas, pon un trozo de papel de horno (10 x 10 cm) sobre la tabla, coloca encima un aro de emplatar de 7 cm y rellénalo (a la mitad) con una parte de la mezcla, agrega unos daditos de queso y cúbrelos con otra parte de la mezcla de calabaza. Presiona un poco la masa, pasa la hamburguesa a una fuente y retira el aro. Repite el proceso y monta otras 7 hamburguesas.',
            'Calienta un par de cucharadas de aceite en una plancha, añade las hamburguesas (sin retirarles el papel) y cocínalas durante 3 minutos por cada lado.'],
        presentacion:['Sirve en cada plato un par de hamburguesas y un poco de salsa de tomate','Adereza la rúcula con aceite, vinagre y sal y acompaña las hamburguesas con una porción de ensalada',
        'Adorna los platos con unas hojas de perejil'],

    },
    {
        nombre:'Galletas de Plátanoo con chocolate',
        categorias:['Postre'],
        imagen:'18.jpg',
        enlaceVideo:'https://www.cocinatis.com/receta/galletas-de-avena-y-platano-sin-azucar-una-receta-saludable-y-facil-con-solo-3-ingredientes.html ',
    },


];