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
        categorias:['Tortilla','Huevos']
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
        categorias:['Verduras'],
        imagen:'5.jpeg',
    },
    {
        nombre:'Pechugas a la plancha',
        categorias:['Carne'],
    },
    {
        nombre:'Patatas a la riojana',
        categorias:['Verduras','Patatas'],
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
    },
    {
        nombre:'Alubias Blancas de Bote',
        categorias:['Legumbres'],
        comensales:4,
        ingredientes:['1 patata','1 pimiento rojo','1 pimiento verde','1 tomate','1 zanahoria','1 cebolla','2 ajos','1 cucharada de pimentón dulce','1 cucharadita de pimienta negra'],
        preparacion:['Pochas la cebolla','Una vez pochada añades los pimientos y los ajos bien picaditos','Cuando veamos que los pimientos y la cebolla están bien integrados añadimos el tomate también picadito y sofreimos un poco mas',
        'A continuación añadimos la zanahoria a rodajas, la patata a gajos pequeños, cubrimos con agua, ponemos la sal, pimienta y el pimenton dulce',
        'Cuando ya estén la patata y la zanahoria blandas y el agua haya reducido un poco añadimos las alubias bien lavadas, movemos con vuidado que no se rompan y listo'],

    },
    {
        nombre:'Burritos de carne picada',
        categorias:['Carne'],
        imagen:'6.jpeg',
        ingredientes:['carne picada','pimiento rojo','pimiento verde','cebolla','tomate frito','maiz','tortillas de trigo','sal','Tabasco','Salsa Barbacoa','Ketchp','queso rallado'],
        preparacion:['Pochamos la cebolla y los pimientos','Cuando estén pochados añadimos la carne picada y la sal','Cuando la carne esté hecha añadimos el maiz y el tomate frito'],
    },
    {
        nombre:'Vainas con carne',
        categorias:['Verduras','Carne'],
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
    }


];