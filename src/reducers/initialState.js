const initialState = {
  "home_filter": {
    "kind": -1,
    "text_search": ""  
  },
  'foods': [
    {
      'id': 1,
      'price': '10.000',
      'title': 'Chicharrones al ajillo',
      'description': 'Descripcion del pastel de pollo',
      'img': '',
      'ingredientes': [
        { 
          'id': 1,
          'nombre': 'ingrediente 1',
          'valor': 2000
        },
        { 
          'id': 2,
          'nombre': 'ingrediente 2',
          'valor': 3000
        },
      ]
    },
    {
      'id': 2,
      'price': '15.000',
      'title': 'Bandeja paisa',
      'description': 'Descripcion del pastel de pollo',
      'img': '',
      'ingredientes': [
        { 
          'id': 4,
          'nombre': 'ingrediente 3',
          'valor': 2000
        },
        { 
          'id': 3,
          'nombre': 'ingrediente 4',
          'valor': 3000
        },
      ]
    },
    {
      'id': 3,
      'price': '12.000',
      'title': 'Carne molida',
      'description': 'Descripcion del pastel de pollo',
      'img': '',
      'ingredientes': [
        { 
          'id': 5,
          'nombre': 'ingrediente 5',
          'valor': 2000
        },
        { 
          'id': 6,
          'nombre': 'ingrediente 6',
          'valor': 3000
        },
      ]
    },
    {
      'id': 4,
      'price': '16.000',
      'title': 'Pastel de pollo',
      'description': 'Descripcion del pastel de pollo',
      'img': '',
      'ingredientes': [
        { 
          'id': 7,
          'nombre': 'ingrediente 7',
          'valor': 2000
        },
        { 
          'id': 7,
          'nombre': 'ingrediente 8',
          'valor': 3000
        },
        { 
          'id': 9,
          'nombre': 'ingrediente 9',
          'valor': 7000
        },
      ]
    },
  ],
  'kinds': [
    {
      '_id': 1,
      'name': 'chocolates',
      'img': '',
    },
    {
      '_id': 2,
      'name': 'empanadas',
      'img': '',
    },
    {
      '_id': 3,
      'name': 'arepas',
      'img': '',
    },
  ],
};

export default ()=>{
  try {
    const serializedData = localStorage.getItem("food_selected")
    if (serializedData !== null){
      const data = JSON.parse(serializedData);
      return {
        ...initialState,
        food_selected: data
      }; 
    }
  } catch (error) {}

  return initialState;
};