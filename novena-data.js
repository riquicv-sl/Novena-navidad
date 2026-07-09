// novena-data.js
// Datos y textos de la Novena de Navidad Ecuménica

const NOVENA_DATA = {
  oracionInicial: {
    titulo: "Oración de Apertura (Inicial)",
    instrucciones: "Se recomienda cantar un villancico antes de comenzar esta oración.",
    texto: `Amado Dios, Padre de misericordia, que tanto amaste al mundo que nos diste a tu Hijo único, Jesucristo, para que todo el que crea en Él no se pierda, sino que tenga vida eterna. Al comenzar esta Novena de Navidad, abrimos las puertas de nuestro hogar y de nuestro corazón para recibir tu luz. 

Envía tu Santo Espíritu sobre nosotros, para que esta lectura de tu Palabra nos transforme. Concédenos la gracia de preparar un pesebre espiritual en nuestro interior, donde tu Hijo pueda nacer de nuevo. Te pedimos por la paz del mundo, por la unión de nuestras familias y por el consuelo de los que sufren. Que tu amor disipe toda división y nos una en el vínculo de la paz. 

Te lo pedimos en el nombre de Jesús, nuestro Salvador. Amén.`
  },
  
  oracionFinal: {
    titulo: "Oración de Despedida (Niño Jesús)",
    texto: `Señor Jesús, Verbo eterno que te hiciste carne y habitaste entre nosotros lleno de gracia y de verdad. Te adoramos en el misterio de tu santa infancia y te damos gracias por tu infinita humildad. Tú, siendo Dios, te despojaste de tu gloria para asumir nuestra condición humana, naciendo en la pobreza de un pesebre.

Te rogamos, dulce Salvador, que habites en nosotros por tu gracia. Transforma nuestros corazones de piedra en corazones de carne, capaces de amar como Tú nos amas. Bendice nuestro hogar, concédenos la salud del alma y del cuerpo, y haznos testigos alegres de tu Evangelio. Que la alegría de tu venida permanezca siempre con nosotros.

Tú que vives y reinas por los siglos de los siglos. Amén.`,
    instrucciones: "Se recomienda cantar un villancico para concluir el día de la novena."
  },

  gozos: {
    titulo: "Gozos Mesiánicos del Emmanuel",
    instrucciones: "Respondemos a cada estrofa con el estribillo.",
    estribillo: "¡Ven, oh Señor, nuestro Salvador, ven a encender tu luz de amor!",
    estrofas: [
      {
        texto: "Oh Verbo eterno, del Padre esplendor,\nque te revistes de nuestra carne,\nlíbranos de la noche del error.",
        referencia: "Basado en Juan 1:14"
      },
      {
        texto: "Oh Sabiduría que todo lo guías,\nven a enseñarnos la senda de paz;\nsé Tú el lucero que alumbra los días.",
        referencia: "Basado en Isaías 11:2"
      },
      {
        texto: "Prometido Emmanuel, Rey de las naciones,\nanhelo del alma y del corazón,\nven a reinar en nuestros hogares.",
        referencia: "Basado en Isaías 7:14"
      },
      {
        texto: "Estrella del alba, lucero sin fin,\nque anuncias la gracia y la salvación,\nven a traernos tu luz celestial.",
        referencia: "Basado en 2 Pedro 1:19"
      },
      {
        texto: "Jesús de Belén, en pesebre acostado,\nven a nacer en nuestro interior;\npor tu humildad seamos transformados.",
        referencia: "Basado en Lucas 2:7"
      }
    ]
  },

  dias: [
    {
      dia: 1,
      titulo: "La Promesa del Salvador",
      imagenVitral: "images/vitral/dia1.png",
      imagenOrtodoxo: "images/ortodoxo/dia1.png",
      lectura: {
        referencia: "Isaías 9:2-7",
        texto: `El pueblo que andaba en tinieblas vio gran luz; los que moraban en tierra de sombra de muerte, luz resplandeció sobre ellos. Multiplicaste la gente, y aumentaste la alegría. Se alegrarán delante de ti como se alegran en la siega, como se gozan cuando reparten despojos... Porque un niño nos es nacido, hijo nos es dado, y el principado sobre su hombro; y se llamará su nombre Admirable, Consejero, Dios Fuerte, Padre Eterno, Príncipe de Paz. Lo dilatado de su imperio y la paz no tendrán límite, sobre el trono de David y sobre su reino, disponiéndolo y confirmándolo en juicio y en justicia desde ahora y para siempre.`
      },
      reflexion: `La promesa del Mesías atraviesa toda la historia de la salvación. En momentos de profunda oscuridad y exilio, Dios infunde esperanza a través del profeta Isaías. No nos promete una idea abstracta, sino una intervención real y concreta: "un niño nos es nacido". 

Aquí contemplamos una verdad fundamental de nuestra fe: Dios no actúa en el vacío ni nos salva de manera aislada o mágica. Él elige entrar en el tiempo humano, preparándose un pueblo, una genealogía y un camino histórico. Esto nos muestra el gran principio de la cooperación: Dios, en su infinita gracia, valora y eleva la participación humana. Al preparar la venida de su Hijo, Dios une el cielo y la tierra. La salvación es enteramente un don de su gracia soberana, pero una gracia que busca, transforma y capacita al ser humano para responderle y colaborar activamente en su plan de amor. Que en este primer día le pidamos al Señor la docilidad para ser canales de su luz en medio de las tinieblas de nuestro mundo.`,
      peticion: "Te pedimos, Señor, que enciendas en nuestros corazones la llama de la esperanza y nos concedas la gracia de ser constructores de paz en nuestras familias."
    },
    {
      dia: 2,
      titulo: "La Anunciación y el Sí de María",
      imagenVitral: "images/vitral/dia2.png",
      imagenOrtodoxo: "images/ortodoxo/dia2.png",
      lectura: {
        referencia: "Lucas 1:26-38",
        texto: `Al sexto mes el ángel Gabriel fue enviado por Dios a una ciudad de Galilea, llamada Nazaret, a una virgen desposada con un varón que se llamaba José, de la casa de David; y el nombre de la virgen era María. Y entrando el ángel en donde ella estaba, dijo: ¡Salve, muy favorecida! El Señor es contigo; bendita tú entre las mujeres... El ángel le dijo: María, no temas, porque has hallado gracia delante de Dios. Y ahora, concebirás en tu vientre, y darás a luz un hijo, y llamarás su nombre JESÚS... Entonces María dijo: He aquí la sierva del Señor; hágase en mí según tu palabra. Y el ángel se fue de su presencia.`
      },
      reflexion: `El pasaje de la Anunciación es uno de los momentos cumbres de la Escritura. El saludo del ángel en el griego original utiliza la palabra *Kecharitomene*, traducida tradicionalmente como "llena de gracia", indicando que Dios ya había realizado una obra transformadora y preparatoria en ella antes de este encuentro. 

La respuesta de María a este designio divino es un sí absoluto: "Hágase en mí según tu palabra". Este *Fiat* no es una simple sumisión pasiva, sino un acto libre de fe, confianza y obediencia amorosa. Ella no dice simplemente "está bien", sino que abraza activamente el plan de Dios, convirtiéndose en la primera discípula y en el modelo perfecto de la fe cristiana. En María vemos de manera bellísima cómo la gracia divina no anula la libertad del ser humano, sino que la libera y la capacita para dar un fruto santo. Su obediencia alivia la desobediencia original, recordándonos que cuando nos abrimos por completo a la gracia, el Salvador puede tomar carne en nuestras vidas y manifestarse al mundo.`,
      peticion: "Te pedimos, Señor, que a ejemplo de María sepamos escuchar tu voz con atención y responder a tus llamados con un 'sí' generoso y alegre."
    },
    {
      dia: 3,
      titulo: "La Visitación",
      imagenVitral: "images/vitral/dia3.png",
      imagenOrtodoxo: "images/ortodoxo/dia3.png",
      lectura: {
        referencia: "Lucas 1:39-45",
        texto: `En aquellos días, levantándose María, fue de prisa a la montaña, a una ciudad de Judá; y entró en casa de Zacarías, y saludó a Isabel. Y aconteció que cuando oyó Isabel el saludo de María, el bebé saltó en su vientre; e Isabel fue llena del Espíritu Santo, y exclamó a gran voz, y dijo: Bendita tú entre las mujeres, y bendito el fruto de tu vientre. ¿Por qué se me concede esto a mí, que la madre de mi Señor venga a mí? Porque tan pronto como llegó la voz de tu saludo a mis oídos, el bebé saltó de alegría en mi vientre. Y bienaventurada la que creyó, porque se cumplirá lo que le fue dicho de parte del Señor.`
      },
      reflexion: `Al enterarse de que su parienta Isabel está encinta en su vejez, María no se queda contemplando su propio misterio, sino que se pone en camino con prontitud para servir. Al entrar a la casa, la simple voz de su saludo desborda el Espíritu Santo sobre Isabel y hace saltar de gozo al precursor en su vientre.

Isabel pronuncia unas palabras de honda trascendencia teológica: "¿Por qué se me concede esto a mí, que la madre de mi Señor venga a mí?". Al llamar a María "madre de mi Señor" (en el contexto bíblico, *Kyrios* o Señor se refiere al mismo Dios), la Escritura sienta las bases de lo que la Iglesia primitiva definiría como *Theotokos* (Madre de Dios). María actúa aquí como el primer Sagrario viviente, transportando la presencia física y real de Jesús. Lejos de retener los elogios para sí, María responde cantando el *Magnificat*, donde proclama: "Mi alma engrandece al Señor, y mi espíritu se regocija en Dios mi Salvador". De este modo, nos enseña la verdadera naturaleza de la devoción mariana: María es como la luna, no tiene luz propia, sino que refleja y nos conduce siempre a la luz infinita de su Hijo, nuestro Dios y Salvador.`,
      peticion: "Te pedimos, Señor, un corazón servicial y atento a las necesidades de los demás, llevando siempre tu presencia y tu alegría a quienes nos rodean."
    },
    {
      dia: 4,
      titulo: "San José, Varón Justo",
      imagenVitral: "images/vitral/dia4.png",
      imagenOrtodoxo: "images/ortodoxo/dia4.png",
      lectura: {
        referencia: "Mateo 1:18-25",
        texto: `El nacimiento de Jesucristo fue así: Estando desposada María su madre con José, antes que se juntasen, se halló que había concebido del Espíritu Santo. José su marido, como era justo, y no quería infamarla, quiso dejarla secretamente. Y pensando él en esto, he aquí un ángel del Señor le apareció en sueños y le dijo: José, hijo de David, no temas recibir a María tu mujer, porque lo que en ella es engendrado, del Espíritu Santo es... Y despertando José del sueño, hizo como el ángel del Señor le había mandado, y recibió a su mujer.`
      },
      reflexion: `La figura de San José brilla por su silencio obsecuente y su profunda rectitud. La Escritura lo define como un hombre "justo". En la doctrina cristiana, la justicia no es simplemente cumplir con las leyes externas de manera fría, sino poseer una santidad interior, una rectitud de corazón alineada perfectamente con la voluntad divina. 

Frente a un misterio que lo superaba, José decide actuar con extrema caridad, buscando proteger a María en lugar de exponerla. Cuando Dios le revela su plan a través del ángel en sueños, José no duda, no pide explicaciones ni dice una sola palabra registrada en los Evangelios. Simplemente "hizo como el ángel del Señor le había mandado". Su silencio es un testimonio de fe activa. José asume el rol de padre legal de Jesús, dándole el linaje de David y protegiendo a la Sagrada Familia. Nos recuerda que la fe no solo se expresa con palabras o declaraciones solemnes, sino con la fidelidad cotidiana, el trabajo honesto y la custodia amorosa de aquellos que Dios pone a nuestro cuidado.`,
      peticion: "Te pedimos, Señor, por los padres de familia y por todos aquellos que tienen responsabilidades de cuidado, para que actúen siempre con justicia, ternura y fidelidad."
    },
    {
      dia: 5,
      titulo: "El Camino a Belén",
      imagenVitral: "images/vitral/dia5.png",
      imagenOrtodoxo: "images/ortodoxo/dia5.png",
      lectura: {
        referencia: "Lucas 2:1-5",
        texto: `Aconteció en aquellos días, que se promulgó un edicto de parte de Augusto César, que todo el mundo fuese empadronado... E iban todos para ser empadronados, cada uno a su ciudad. Y José subió de Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David, que se llama Belén, por cuanto era de la casa y familia de David; para ser empadronado con María su mujer, desposada con él, la cual estaba encinta.`
      },
      reflexion: `A veces nos cuesta ver la mano de Dios en los acontecimientos cotidianos de la política y la sociedad. Sin embargo, este pasaje nos muestra cómo Dios utiliza las estructuras humanas ordinarias —en este caso, un censo decretado por un emperador pagano— para cumplir sus promesas eternas. La profecía decía que el Mesías nacería en Belén (Miqueas 5:2), y el viaje se propicia precisamente a través de este censo.

Este suceso nos habla del "principio sacramental": la verdad de que Dios se sirve de lo material, de lo histórico y de las mediaciones humanas para comunicar su gracia y realizar su salvación. María y José obedecen a las autoridades civiles legítimas y emprenden un viaje largo y fatigoso estando ella a punto de dar a luz. No protestan ni exigen privilegios divinos; caminan con paciencia y fe, confiando en que Dios guía sus pasos incluso a través de las incomodidades del camino. Nos enseña a descubrir la presencia y el propósito de Dios en las dificultades, las obligaciones diarias y en los acontecimientos que escapan a nuestro control.`,
      peticion: "Te pedimos, Señor, la gracia de confiar en tu providencia amorosa y de reconocer tu guía en medio de los eventos diarios de nuestra vida y de la sociedad."
    },
    {
      dia: 6,
      titulo: "No hay lugar en la posada",
      imagenVitral: "images/vitral/dia6.png",
      imagenOrtodoxo: "images/ortodoxo/dia6.png",
      lectura: {
        referencia: "Lucas 2:6-7",
        texto: `Y aconteció que estando ellos allí, se cumplieron los días de su alumbramiento. Y dio a luz a su hijo primogénito, y lo envolvió en pañales, y lo acostó en un pesebre, porque no había lugar para ellos en la posada.`
      },
      reflexion: `El Creador del universo entra en su propia creación y no encuentra un lugar digno donde recostar su cabeza. La frase "no había lugar para ellos en la posada" resuena como una advertencia a lo largo de los siglos. Nos muestra que el misterio de la Encarnación ocurre en la periferia, en la sencillez y el desapego, lejos del ruido y de las seguridades del mundo.

Esta carencia de espacio físico nos interpela directamente sobre nuestra vida espiritual y comunitaria. En la teología católica, la fe se vive en la "comunión de los santos", en un cuerpo místico donde Cristo se identifica con el más pequeño y necesitado: "Lo que hicisteis con uno de estos mis hermanos más pequeños, conmigo lo hicisteis" (Mateo 25:40). Si cerramos las puertas al necesitado, al migrante o al enfermo, se las estamos cerrando al mismo Cristo. Que esta novena sea una oportunidad para examinar si nuestro corazón está lleno de ocupaciones, orgullo y bienes materiales, o si verdaderamente tenemos un lugar reservado para acoger a Jesús en su Palabra y en el prójimo.`,
      peticion: "Te pedimos, Señor, que nos des un corazón hospitalario y caritativo, para que sepamos acogerte a Ti abriendo nuestras puertas a quienes sufren soledad o necesidad."
    },
    {
      dia: 7,
      titulo: "El Nacimiento de Jesús",
      imagenVitral: "images/vitral/dia7.png",
      imagenOrtodoxo: "images/ortodoxo/dia7.png",
      lectura: {
        referencia: "Lucas 2:8-14",
        texto: `Había pastores en la misma región, que velaban y guardaban las vigilias de la noche sobre su rebaño. Y he aquí, se presentó ante ellos un ángel del Señor, y la gloria del Señor los rodeó de claridad; y tuvieron gran temor. Pero el ángel le dijo: No temáis; porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo: que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor... Y repentinamente apareció con el ángel una multitud de las huestes celestiales, que alababan a Dios, y decían: ¡Gloria a Dios en las alturas, y en la tierra paz, buena voluntad para con los hombres!`
      },
      reflexion: `La gran noticia del nacimiento de Cristo no se revela primero a los sabios o a los reyes de la tierra, sino a pastores humildes que velaban de noche. Dios se complace en revelar los misterios del Reino a los sencillos. El coro celestial prorrumpe en un himno que la Iglesia canta con júbilo: "Gloria a Dios en las alturas, y en la tierra paz a los hombres de buena voluntad". 

Esta paz no es una simple tregua de conflictos armados ni una tranquilidad superficial; es el *Shalom* bíblico, la reconciliación total del ser humano con Dios, consigo mismo y con la creación, hecha posible gracias a la Encarnación. Dios nos ofrece su gracia y su paz como un don gratuito, pero que requiere una acogida activa: un corazón dispuesto y de "buena voluntad". La paz de Dios entra en el alma cuando cooperamos con su Espíritu y permitimos que su amor transforme nuestra conducta. Contemplemos hoy el pesebre y dejémonos inundar por esa alegría profunda que el mundo no puede dar ni puede quitar.`,
      peticion: "Te pedimos, Señor, que derrames tu paz sobre todas las naciones en conflicto y restaures la concordia y el amor en cada uno de nuestros hogares."
    },
    {
      dia: 8,
      titulo: "La Adoración de los Pastores",
      imagenVitral: "images/vitral/dia8.png",
      imagenOrtodoxo: "images/ortodoxo/dia8.png",
      lectura: {
        referencia: "Lucas 2:15-20",
        texto: `Sucedió que cuando los ángeles se fueron de ellos al cielo, los pastores se dijeron unos a otros: Pasemos, pues, hasta Belén, y veamos esto que ha sucedido, y que el Señor nos ha manifestado. Vinieron, pues, apresuradamente, y hallaron a María y a José, y al niño acostado en el pesebre. Y al verlo, dieron a conocer lo que se les había dicho acerca del niño... Pero María guardaba todas estas cosas, meditándolas en su corazón. Y volvieron los pastores glorificando y alabando a Dios por todas las cosas que habían oído y visto, como se les había dicho.`
      },
      reflexion: `Los pastores no dudan: van apresuradamente a Belén y encuentran exactamente lo que Dios les había revelado. Al ver al Niño, se convierten en los primeros evangelizadores, transmitiendo el mensaje celestial. 

El pasaje destaca una actitud maravillosa de la Virgen María: "guardaba todas estas cosas, meditándolas en su corazón". Este versículo refleja la esencia de la Tradición en la Iglesia. La Tradición no son meras costumbres humanas repetitivas, sino la memoria viva de la Iglesia que conserva, medita y transmite de generación en generación los misterios de la salvación inspirados por el Espíritu Santo. María es la memoria fiel de la Iglesia primitiva. Al contemplar los hechos de la vida de su Hijo, nos enseña el valor de la vida contemplativa, de la lectura meditada de la Escritura y del discernimiento de la voluntad de Dios en los acontecimientos diarios, permitiendo que la Palabra eche raíces profundas en nuestra alma.`,
      peticion: "Te pedimos, Señor, la gracia de saber hacer silencio interior para meditar en tu Palabra y saber descubrir tus maravillas en las cosas sencillas de cada día."
    },
    {
      dia: 9,
      titulo: "El Verbo se hizo carne",
      imagenVitral: "images/vitral/dia9.png",
      imagenOrtodoxo: "images/ortodoxo/dia9.png",
      lectura: {
        referencia: "Juan 1:1-14",
        texto: `En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios. Este era en el principio con Dios. Todas las cosas por él fueron hechas, y sin él nada de lo que ha sido hecho, fue hecho... Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.`
      },
      reflexion: `En este último día, el prólogo del Evangelio de Juan nos eleva al misterio eterno y teológico de la Navidad. El niño acostado en el pesebre no es simplemente un profeta insigne o un maestro moral; es el "Verbo hecho carne", la segunda persona de la Santísima Trinidad, el Dios creador eterno hecho hombre. 

Este misterio nos revela el inmenso amor de Dios, quien no se limitó a hablarnos desde lejos o enviarnos mensajes, sino que se hizo uno de nosotros para divinizarnos. Como enseñaban los antiguos Padres de la Iglesia: "Dios se hizo hombre para que el hombre se hiciera hijo de Dios por participación" (2 Pedro 1:4). La salvación no es solo un perdón externo o legal, sino una transformación real que infunde en nosotros la vida misma de Dios. Al celebrar la Navidad, celebramos que nuestra naturaleza humana ha sido elevada y dignificada. Cristo habita entre nosotros y nos ofrece el poder de ser hechos hijos de Dios mediante la fe activa en su Nombre y la caridad que brota de su gracia.`,
      peticion: "Te damos gracias, amado Salvador, por el regalo de tu Encarnación. Te pedimos que reines en nuestros corazones y que nos permitas vivir siempre como verdaderos hijos del Padre."
    }
  ]
};
