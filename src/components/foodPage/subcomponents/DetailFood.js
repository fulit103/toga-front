import React from 'react';
import Collapsible from 'react-collapsible';
import './DetailFood.scss';

const DetailFood = () => {
  return (
    <div className='detail-food-container'>
      <Collapsible trigger="Ingredientes">
        <li>300 g de harina</li>
        <li>160 g de agua</li>
        <li>5 g de levadura de panadería instantánea</li>
        <li>20 g de aceite de oliva virgen extra</li>
        <li>1 cucharadita de sal</li>
        <li>200 g de salsa de tomate</li>
        <li>100 g de mozzarella</li>
        <li>100 g de jamón de yors</li>
      </Collapsible>
      <Collapsible trigger="Instrucciones">
        <p>
        En un bol ponemos todos los ingredientes de la masa: harina, agua, levadura, aceite y sal y mezclamos bien con una cuchara. Una masa de pizza es como un pan sencillo. Se puede hacer con cualquier tipo de harina y la cantidad de agua será aproximadamente de la mitad de la de harina. Si usamos una harina con más cantidad de gluten (harina de fuerza) entonces necesitaremos algo más de agua y si utilizamos una harina normal (como la de hoy) con la mitad de agua (por harina) y un poco más será suficiente.
        Acto seguido pasaremos a amasar. Si tenemos una amasadora estupendo porque no tendremos que hacer gran cosa. Si no tenemos lo unico que haremos será estirar la masa y recoger con la palma de la mano hasta conseguir una masa que no se pega a las manos ni a la mesa, es una masa fina y elástica. Entre 5 y 10 minutos serán más que suficientes. No hará falta enharinar la mesa.
        A continuación dejaremos fermentar la masa tapada. El objetivo es que doble de volumen. ¿Y eso cuando lo hace? La respuesta es sencilla, si hace frio tardará más que si hace calor. O al contrario, si hace calor tardará menos. Las mejores masas cuanto más tarden mejor porque la masa se desarrolla de otra forma, pero con nuestra pizza sin complicaciones nos dará igual. Nosotros la dejamos y cuando suba al doble seguiremos por el siguiente paso.
        </p>
      </Collapsible>
      <Collapsible trigger="Información nutricional">
        <li>Carbohidratos 32gr</li>
        <li>Grasas 11gr</li>
        <li>Proteínas 14gr</li>
      </Collapsible>
    </div>
  )
}

export default DetailFood;