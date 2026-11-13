// novena-data.js
// Datos y textos de la Novena de Navidad
//
// CITAS BÍBLICAS: numeración católica, formato "Libro capítulo,versículos"
// (la misma de la Biblia Latinoamericana y la Biblia de Jerusalén).
//
// LECTURAS: son paráfrasis en lenguaje sencillo, redactadas para esta novena
// a partir del sentido del texto bíblico. NO son citas literales de ninguna
// edición. Para el texto exacto, consultar la Biblia Latinoamericana o la
// Biblia de Jerusalén.

const FUENTE_BIBLICA = "Paráfrasis en lenguaje sencillo (texto exacto: Biblia Latinoamericana o Biblia de Jerusalén)";

const NOVENA_DATA = {
  fuenteBiblica: FUENTE_BIBLICA,

  oracionInicial: {
    titulo: "Oración inicial",
    instrucciones: "Se recomienda cantar un villancico antes de comenzar esta oración.",
    texto: `Padre bueno y lleno de misericordia: amaste tanto al mundo que nos diste a tu único Hijo, Jesucristo, para que todo el que crea en Él no se pierda, sino que tenga vida eterna. Al comenzar esta Novena de Navidad, abrimos las puertas de nuestra casa y de nuestro corazón para recibir tu luz.

Envía tu Espíritu Santo sobre nosotros, para que tu Palabra nos cambie por dentro. Ayúdanos a preparar en nuestro interior un pesebre donde tu Hijo pueda nacer. Te pedimos por la paz del mundo, por la unión de nuestras familias y por el consuelo de quienes sufren. Que tu amor venza toda división y nos mantenga unidos en la paz.

Te lo pedimos en el nombre de Jesús, nuestro Salvador. Amén.`,
    referencias: ["Juan 3,16"]
  },

  oracionFinal: {
    titulo: "Oración final al Niño Jesús",
    instrucciones: "Se recomienda cantar un villancico para concluir el día de la novena.",
    texto: `Señor Jesús, Palabra eterna del Padre, que te hiciste hombre y viniste a vivir entre nosotros, lleno de amor y de verdad: te adoramos en tu infancia y te damos gracias por tu humildad. Siendo Dios, quisiste hacerte uno de nosotros y nacer pobre en un pesebre.

Te pedimos, Niño Jesús, que vivas en nosotros. Cambia nuestro corazón de piedra por un corazón capaz de amar como Tú nos amas. Bendice nuestro hogar, danos salud de alma y cuerpo, y haz que seamos testigos alegres de tu Evangelio. Que la alegría de tu venida se quede siempre con nosotros.

Tú que vives y reinas por los siglos de los siglos. Amén.`,
    referencias: ["Juan 1,14", "Filipenses 2,6-7", "Ezequiel 36,26"]
  },

  gozos: {
    titulo: "Gozos al Emmanuel",
    instrucciones: "Respondemos a cada estrofa con el estribillo.",
    estribillo: "¡Ven, oh Señor, nuestro Salvador, ven a encender tu luz de amor!",
    estrofas: [
      {
        texto: "Oh Palabra eterna, del Padre esplendor,\nque te hiciste carne como nosotros,\nlíbranos de la noche del error.",
        referencia: "Basado en Juan 1,14"
      },
      {
        texto: "Oh Sabiduría que todo lo guías,\nven a enseñarnos la senda de paz;\nsé Tú el lucero que alumbra los días.",
        referencia: "Basado en Isaías 11,2"
      },
      {
        texto: "Emmanuel prometido, Rey de las naciones,\nesperanza del alma y del corazón,\nven a reinar en nuestros hogares.",
        referencia: "Basado en Isaías 7,14"
      },
      {
        texto: "Estrella del alba, lucero sin fin,\nque anuncias la gracia y la salvación,\nven a traernos tu luz celestial.",
        referencia: "Basado en 2 Pedro 1,19"
      },
      {
        texto: "Jesús de Belén, en pesebre acostado,\nven a nacer en nuestro interior;\nque tu humildad nos deje transformados.",
        referencia: "Basado en Lucas 2,7"
      }
    ]
  },

  dias: [
    {
      dia: 1,
      titulo: "La promesa del Salvador",
      imagenVitral: "images/vitral/dia1.png",
      imagenOrtodoxo: "images/ortodoxo/dia1.png",
      lectura: {
        referencia: "Isaías 9,1-6",
        notaReferencia: "En algunas Biblias aparece como Isaías 9,2-7.",
        fuente: FUENTE_BIBLICA,
        esParafrasis: true,
        texto: `El pueblo que caminaba en la oscuridad ha visto una luz muy grande; sobre los que vivían en una tierra de sombras ha brillado la luz. Tú, Señor, has hecho crecer a tu pueblo y le has dado una inmensa alegría: se alegran delante de ti como en tiempo de cosecha, como cuando se reparte lo ganado en la batalla. Porque has roto el yugo que los aplastaba, la carga que llevaban sobre los hombros y el látigo del opresor, como en la victoria sobre Madián. Las botas de los soldados, que hacían retumbar la tierra, y los mantos manchados de sangre serán quemados en el fuego.

Porque nos ha nacido un niño, se nos ha dado un hijo. Sobre sus hombros llevará el gobierno, y su nombre será: Consejero maravilloso, Dios fuerte, Padre para siempre, Príncipe de la paz. Su poder crecerá y la paz no tendrá fin. Se sentará en el trono de David y gobernará su reino, y lo sostendrá con el derecho y la justicia desde ahora y para siempre. El amor ardiente del Señor del universo hará todo esto.`
      },
      reflexion: `Isaías habló en un tiempo muy duro para su pueblo: había guerra, miedo y destierro. En medio de esa oscuridad, Dios no les dio una idea bonita, sino una promesa concreta: va a nacer un niño, y ese niño traerá la paz (Isaías 9,5).

Dios pudo salvarnos de muchas maneras, pero eligió entrar en nuestra historia. Preparó un pueblo, una familia y un camino, y contó con personas de carne y hueso. La salvación es un regalo que viene totalmente de Él, pero es un regalo que nos busca, nos cambia por dentro y nos invita a responder. En este primer día pidámosle al Señor un corazón dispuesto, para ser pequeñas luces en medio de las sombras de nuestro mundo.`,
      peticion: "Señor, enciende en nuestros corazones la llama de la esperanza y ayúdanos a construir la paz en nuestras familias."
    },
    {
      dia: 2,
      titulo: "La Anunciación: el sí de María",
      imagenVitral: "images/vitral/dia2.png",
      imagenOrtodoxo: "images/ortodoxo/dia2.png",
      lectura: {
        referencia: "Lucas 1,26-38",
        fuente: FUENTE_BIBLICA,
        esParafrasis: true,
        texto: `Seis meses después, Dios envió al ángel Gabriel a un pueblo de Galilea llamado Nazaret. Lo mandó a una joven virgen que estaba comprometida para casarse con José, un hombre descendiente del rey David. La joven se llamaba María. El ángel entró donde ella estaba y le dijo: «¡Alégrate, llena de gracia! El Señor está contigo». María se inquietó mucho al oír estas palabras y se preguntaba qué significaba ese saludo.

El ángel le dijo: «No tengas miedo, María, porque has encontrado el favor de Dios. Vas a quedar embarazada y darás a luz un hijo, y le pondrás por nombre Jesús. Él será grande y lo llamarán Hijo del Altísimo. El Señor Dios le dará el trono de David, su antepasado; reinará para siempre sobre el pueblo de Jacob, y su reino no tendrá fin».

María le preguntó al ángel: «¿Cómo será esto, si yo soy virgen?». El ángel le respondió: «El Espíritu Santo vendrá sobre ti y el poder del Altísimo te cubrirá con su sombra. Por eso, el niño santo que va a nacer será llamado Hijo de Dios. Mira, tu parienta Isabel, a pesar de ser anciana, también espera un hijo; la que decían que no podía tener hijos ya está en su sexto mes. Porque para Dios no hay nada imposible».

Entonces María dijo: «Aquí está la servidora del Señor. Hágase en mí según tu palabra». Y el ángel se fue.`
      },
      reflexion: `La Anunciación es uno de los momentos más importantes de toda la Biblia. Aquí Dios, por así decirlo, pide permiso para hacerse hombre, y espera la respuesta de una joven de Nazaret.

El ángel no llama a María por su nombre, sino con un título: «llena de gracia». En griego, la palabra es Kecharitomene, y está en un tiempo verbal que indica algo que ya ocurrió y que permanece: María no recibe la gracia en ese momento, sino que ya había sido llenada de ella, y lo sigue estando. La Iglesia ve en este saludo uno de los fundamentos de la Inmaculada Concepción: Dios, por los méritos de Cristo, preparó a María desde el primer instante de su vida para ser la madre de su Hijo, libre de todo pecado.

María responde: «Hágase en mí según tu palabra» (Lucas 1,38). Este sí, que la tradición llama Fiat, no es resignación ni pasividad. Es un acto libre de fe y de amor, y de él depende que el Hijo de Dios tome nuestra carne. Por eso los primeros cristianos, como San Ireneo de Lyon, llamaron a María la nueva Eva: lo que Eva había atado con su desobediencia, María lo desató con su fe.

María es la primera discípula y el modelo perfecto de la fe. En ella vemos que la gracia de Dios no anula nuestra libertad, sino que la lleva a su plenitud. Cuando nosotros también le decimos sí a Dios, Jesús puede nacer en nuestra vida y llegar a los demás a través de nosotros.`,
      peticion: "Señor, que a ejemplo de María sepamos escuchar tu voz y responder a tus llamados con un sí generoso y alegre."
    },
    {
      dia: 3,
      titulo: "La Visitación",
      imagenVitral: "images/vitral/dia3.png",
      imagenOrtodoxo: "images/ortodoxo/dia3.png",
      lectura: {
        referencia: "Lucas 1,39-45",
        fuente: FUENTE_BIBLICA,
        esParafrasis: true,
        texto: `Por aquellos días, María se puso en camino y fue de prisa a una ciudad de la región montañosa de Judá. Entró en la casa de Zacarías y saludó a Isabel. En cuanto Isabel oyó el saludo de María, el niño saltó dentro de su vientre, e Isabel quedó llena del Espíritu Santo. Entonces exclamó con voz fuerte: «¡Bendita tú entre todas las mujeres, y bendito el fruto de tu vientre! ¿Quién soy yo para que venga a visitarme la madre de mi Señor? Apenas escuché tu saludo, el niño saltó de alegría en mi vientre. ¡Feliz tú, que has creído que se cumplirá todo lo que el Señor te ha dicho!».`
      },
      reflexion: `Apenas recibe el anuncio del ángel, María no se queda pensando en sí misma: sale de prisa a servir a su parienta Isabel. Basta su saludo para que el niño salte de alegría en el vientre de Isabel y ella quede llena del Espíritu Santo. Es el Espíritu quien le hace reconocer a quién tiene delante.

San Lucas cuenta esta escena con detalles que recuerdan una historia del Antiguo Testamento: el traslado del Arca de la Alianza, el cofre sagrado que señalaba la presencia de Dios en medio de su pueblo. El rey David se preguntó cómo era posible que el Arca del Señor viniera a él, bailó de alegría delante de ella, y el Arca se quedó tres meses en una casa (2 Samuel 6,9-15). Isabel se hace la misma pregunta ante María, Juan salta de gozo en su vientre, y María se queda con ella unos tres meses (Lucas 1,56). Por eso la Iglesia llama a María Arca de la Nueva Alianza: ella no lleva las tablas de la Ley, sino al mismo Dios hecho hombre.

Isabel la llama «la madre de mi Señor» (Lucas 1,43). En la Biblia, «Señor» es el nombre que se usa para Dios mismo. Por eso el Concilio de Éfeso, en el año 431, proclamó a María Theotokos, Madre de Dios. Este título no habla solo de ella, sino sobre todo de quién es Jesús: verdadero Dios desde el primer instante.

María responde con el Magníficat, y en él anuncia que todas las generaciones la llamarán dichosa (Lucas 1,48). Cuando honramos a María, no añadimos algo ajeno a la Biblia: cumplimos lo que la misma Escritura anunció. Y ella nos muestra el sentido de ese honor, porque proclama la grandeza del Señor y se alegra en Dios, su Salvador (Lucas 1,46-47). Como la luna, que no tiene luz propia sino que refleja la del sol, María siempre nos lleva a su Hijo.`,
      peticion: "Señor, danos un corazón servicial y atento a las necesidades de los demás, para llevar tu presencia y tu alegría a quienes nos rodean."
    },
    {
      dia: 4,
      titulo: "San José, hombre justo",
      imagenVitral: "images/vitral/dia4.png",
      imagenOrtodoxo: "images/ortodoxo/dia4.png",
      lectura: {
        referencia: "Mateo 1,18-25",
        fuente: FUENTE_BIBLICA,
        esParafrasis: true,
        texto: `Así fue el nacimiento de Jesucristo. María, su madre, estaba comprometida con José, y antes de que comenzaran a vivir juntos, se supo que esperaba un hijo por obra del Espíritu Santo. José, su esposo, que era un hombre justo y no quería ponerla en vergüenza delante de todos, pensó en separarse de ella en secreto.

Mientras pensaba en esto, un ángel del Señor se le apareció en sueños y le dijo: «José, descendiente de David, no tengas miedo de recibir a María como tu esposa, porque el niño que espera viene del Espíritu Santo. Ella dará a luz un hijo, y tú le pondrás por nombre Jesús, porque él salvará a su pueblo de sus pecados».

Todo esto sucedió para que se cumpliera lo que el Señor había dicho por medio del profeta: «La virgen quedará embarazada y dará a luz un hijo, y lo llamarán Emmanuel», que quiere decir «Dios con nosotros».

Cuando José despertó, hizo lo que el ángel del Señor le había mandado y recibió a María como su esposa. María dio a luz a su hijo sin haber tenido relaciones con José, y él le puso por nombre Jesús.`
      },
      reflexion: `De San José, los Evangelios no recogen ni una sola palabra, y sin embargo su vida dice mucho. Mateo lo llama «hombre justo» (Mateo 1,19). En la Biblia, ser justo no es solo cumplir reglas: es tener un corazón recto, que busca de verdad lo que Dios quiere.

Ante algo que no lograba entender, José decidió actuar con bondad: no quería exponer a María a la vergüenza pública. Cuando Dios le muestra su plan en sueños, José no discute ni pide pruebas. Simplemente hace lo que el ángel le ha mandado. Recibe a María en su casa, le pone a Jesús su nombre, le da un lugar en la familia de David y se dedica a cuidarlos.

José nos recuerda que la fe no se demuestra solo con palabras bonitas, sino con la fidelidad de cada día: el trabajo honrado, la paciencia y el cuidado amoroso de las personas que Dios pone en nuestras manos.`,
      peticion: "Señor, te pedimos por los padres de familia y por todos los que cuidan de otros, para que actúen siempre con justicia, ternura y fidelidad."
    },
    {
      dia: 5,
      titulo: "El camino a Belén",
      imagenVitral: "images/vitral/dia5.png",
      imagenOrtodoxo: "images/ortodoxo/dia5.png",
      lectura: {
        referencia: "Lucas 2,1-5",
        fuente: FUENTE_BIBLICA,
        esParafrasis: true,
        texto: `Por aquellos días, el emperador Augusto ordenó que se hiciera un censo de todos los habitantes del imperio. Este primer censo se hizo cuando Quirino gobernaba la provincia de Siria. Todos iban a inscribirse, cada uno a su pueblo de origen. José, que era descendiente de la familia de David, salió de Nazaret, en Galilea, y subió a Judea, a Belén, el pueblo de David, para inscribirse junto con María, su esposa, que estaba embarazada.`
      },
      reflexion: `A veces nos cuesta ver a Dios en lo que pasa en la política o en la vida de la sociedad. Sin embargo, este pasaje nos muestra que Dios puede servirse incluso de la orden de un emperador que no lo conocía. El profeta Miqueas había anunciado que el Mesías nacería en Belén (Miqueas 5,1), y es justamente un censo lo que lleva a José y a María hasta allí.

Dios no actúa por encima de nuestra historia, sino dentro de ella: se vale de cosas sencillas, de personas y de situaciones ordinarias para hacernos llegar su amor. María y José cumplen lo que se les pide y emprenden un viaje largo y cansado, cuando ella está a punto de dar a luz. No reclaman privilegios. Caminan con paciencia, confiando en que Dios va con ellos aunque el camino sea incómodo.

Su ejemplo nos invita a descubrir a Dios también en las dificultades, en las obligaciones de cada día y en lo que no podemos controlar.`,
      peticion: "Señor, ayúdanos a confiar en tu cuidado amoroso y a reconocer tu mano en lo que vivimos cada día, en nuestra familia y en nuestra sociedad."
    },
    {
      dia: 6,
      titulo: "No había lugar en la posada",
      imagenVitral: "images/vitral/dia6.png",
      imagenOrtodoxo: "images/ortodoxo/dia6.png",
      lectura: {
        referencia: "Lucas 2,6-7",
        fuente: FUENTE_BIBLICA,
        esParafrasis: true,
        texto: `Durante su estancia en Belén, se cumplió el tiempo del embarazo y María tuvo a su hijo primogénito; lo envolvió en pañales y lo acostó en un pesebre, porque no había lugar para ellos en la posada.`
      },
      reflexion: `El que creó el universo llega al mundo y no encuentra un lugar digno donde nacer. La frase «no había lugar para ellos en la posada» (Lucas 2,7) sigue sonando hoy como una pregunta para cada uno de nosotros. Jesús nace en la sencillez, en las afueras, lejos del ruido y de las seguridades del mundo.

Más tarde, Jesús mismo nos dirá que todo lo que hacemos por el más pequeño de nuestros hermanos, lo hacemos por Él (Mateo 25,40). Cristo sigue buscando posada en el pobre, en el migrante, en el enfermo y en quien está solo. Cuando les cerramos la puerta a ellos, se la cerramos a Él.

Aprovechemos esta novena para revisar nuestro corazón: ¿está tan lleno de ocupaciones, de orgullo o de cosas que ya no queda espacio para Jesús? ¿O tenemos un lugar preparado para recibirlo en su Palabra y en los demás?`,
      peticion: "Señor, danos un corazón acogedor y generoso, para recibirte a Ti abriendo nuestras puertas a quienes sufren soledad o necesidad."
    },
    {
      dia: 7,
      titulo: "El anuncio a los pastores",
      imagenVitral: "images/vitral/dia7.png",
      imagenOrtodoxo: "images/ortodoxo/dia7.png",
      lectura: {
        referencia: "Lucas 2,8-14",
        fuente: FUENTE_BIBLICA,
        esParafrasis: true,
        texto: `En la misma región había unos pastores que pasaban la noche en el campo, cuidando por turnos su rebaño. De pronto se les apareció un ángel del Señor, y la gloria del Señor brilló a su alrededor. Ellos sintieron mucho miedo, pero el ángel les dijo: «No tengan miedo. Les anuncio una noticia muy buena, que llenará de alegría a todo el pueblo: hoy les ha nacido en el pueblo de David un Salvador, que es el Mesías, el Señor. Esta será la señal para que lo reconozcan: encontrarán a un niño envuelto en pañales y acostado en un pesebre».

En ese momento apareció junto al ángel una gran multitud de ángeles del cielo, que alababan a Dios diciendo: «¡Gloria a Dios en el cielo, y en la tierra paz a los hombres que él ama!».`
      },
      reflexion: `La gran noticia del nacimiento de Jesús no llega primero a los sabios ni a los poderosos, sino a unos pastores humildes que cuidaban sus rebaños de noche. A Dios le gusta mostrarse a los sencillos.

Los ángeles cantan gloria a Dios en el cielo y anuncian paz en la tierra para los hombres que Él ama (Lucas 2,14). Es el mismo canto con el que comienza el Gloria de la Misa. Las traducciones católicas lo dicen de distintas maneras: los hombres en quienes Dios se complace, o la hora de su gracia. Pero todas apuntan a lo mismo, porque el texto original habla de la bondad de Dios hacia nosotros: la paz que se anuncia no depende de que primero seamos buenos, sino de que Dios nos ama primero.

Esa paz no es solo que se acaben las peleas o tener un rato de tranquilidad. Es el shalom de la Biblia: estar reconciliados con Dios, con nosotros mismos, con los demás y con toda la creación. Es un regalo gratuito, pero hay que recibirlo: abrir el corazón y dejar que el amor de Dios cambie nuestra manera de vivir. Contemplemos hoy el pesebre y dejemos que nos llene esa alegría profunda que nadie nos puede quitar.`,
      peticion: "Señor, derrama tu paz sobre los pueblos que viven en guerra y devuelve la armonía y el amor a cada uno de nuestros hogares."
    },
    {
      dia: 8,
      titulo: "Los pastores adoran al Niño",
      imagenVitral: "images/vitral/dia8.png",
      imagenOrtodoxo: "images/ortodoxo/dia8.png",
      lectura: {
        referencia: "Lucas 2,15-20",
        fuente: FUENTE_BIBLICA,
        esParafrasis: true,
        texto: `Cuando los ángeles regresaron al cielo, los pastores comentaron entre ellos: «Vamos a Belén a ver lo que ha pasado, eso que el Señor nos ha anunciado». Se apresuraron a ir, y allí estaban María y José, con el niño acostado en el pesebre. Cuando lo vieron, compartieron con todos el mensaje que habían recibido sobre el niño, y quienes los escuchaban quedaban asombrados.

Y María conservaba todo esto y lo meditaba en su corazón.

Después, los pastores se fueron alabando a Dios y dándole gloria por todo lo que vieron y oyeron: todo había sucedido tal como se les anunció.`
      },
      reflexion: `Los pastores no se quedan con la duda: van de prisa a Belén y encuentran todo tal como se lo habían anunciado. Al ver al Niño, cuentan a todos lo que han oído. Son los primeros en anunciar la Buena Noticia.

El Evangelio nos regala también un detalle precioso sobre la Virgen: María conservaba todo esto y lo meditaba en su corazón (Lucas 2,19). Ella no olvida lo que Dios ha hecho; lo guarda, lo piensa y lo comparte. Así vive la Tradición de la Iglesia: no como un conjunto de costumbres repetidas, sino como la memoria viva de la fe, que se medita y se transmite de generación en generación con la ayuda del Espíritu Santo.

María nos enseña a hacer silencio, a leer la Palabra con calma y a descubrir lo que Dios nos quiere decir en lo que vivimos cada día, para que su Palabra eche raíces en nuestro corazón.`,
      peticion: "Señor, enséñanos a hacer silencio para meditar tu Palabra y a descubrir tus maravillas en las cosas sencillas de cada día."
    },
    {
      dia: 9,
      titulo: "La Palabra se hizo carne",
      imagenVitral: "images/vitral/dia9.png",
      imagenOrtodoxo: "images/ortodoxo/dia9.png",
      lectura: {
        referencia: "Juan 1,1-14",
        fuente: FUENTE_BIBLICA,
        esParafrasis: true,
        texto: `En el principio ya existía la Palabra. La Palabra estaba junto a Dios, y la Palabra era Dios. Desde el principio estaba junto a Dios. Por medio de ella Dios hizo todas las cosas; nada de lo que existe fue hecho sin ella. En ella estaba la vida, y la vida era la luz de los seres humanos. Esta luz brilla en la oscuridad, y la oscuridad no ha podido apagarla.

Dios envió a un hombre llamado Juan. Vino como testigo, para hablar de la luz, para que todos creyeran gracias a él. Juan no era la luz, sino que vino a dar testimonio de la luz.

La luz verdadera, la que ilumina a toda persona, venía a este mundo. La Palabra estaba en el mundo, y aunque el mundo fue hecho por medio de ella, el mundo no la reconoció. Vino a los suyos, y los suyos no la recibieron. Pero a todos los que la recibieron, a los que creen en su nombre, les dio el poder de llegar a ser hijos de Dios. Estos no nacieron por la sangre, ni por deseo humano, ni por voluntad de un hombre, sino que nacieron de Dios.

Y la Palabra se hizo carne y puso su morada entre nosotros. Hemos visto su gloria, la gloria que recibe del Padre como Hijo único, lleno de gracia y de verdad.`
      },
      reflexion: `En este último día, el comienzo del Evangelio de Juan nos lleva al centro del misterio de la Navidad. El niño del pesebre no es solo un gran profeta o un buen maestro: es la Palabra eterna de Dios, el Hijo, que existía desde siempre junto al Padre y por quien todo fue hecho. Y esa Palabra se hizo carne y puso su morada entre nosotros (Juan 1,14). Así como Dios habitaba en la tienda del desierto, donde se guardaba el Arca de la Alianza, ahora habita entre nosotros en Jesús, a quien María llevó en su seno.

Dios no se conformó con hablarnos desde lejos: se hizo uno de nosotros. San Atanasio, uno de los grandes Padres de la Iglesia, lo explicaba así: el Hijo de Dios se hizo hombre para que nosotros pudiéramos participar de la vida de Dios (Sobre la Encarnación, 54). Es lo que enseña también la Escritura cuando dice que estamos llamados a participar de la naturaleza divina (2 Pedro 1,4).

La salvación, entonces, no es solo un perdón que viene de fuera: es una vida nueva que Dios pone dentro de nosotros. A todos los que reciben a Jesús y creen en Él, Dios les da la capacidad de ser sus hijos (Juan 1,12). Celebrar la Navidad es celebrar que nuestra humanidad ha sido levantada y llena de dignidad, y que podemos vivir como hijos de Dios, con una fe que se convierte en amor concreto.`,
      peticion: "Gracias, Jesús, por hacerte uno de nosotros. Reina en nuestros corazones y ayúdanos a vivir siempre como verdaderos hijos del Padre."
    }
  ]
};
