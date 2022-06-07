const carParkMock = [
  {
    id: Math.random().toString(36).substr(2, 9),
    serviceId: 'l6n1r84fo',
    brand: 'Ford',
    status: '',
    step: 0,
    history: [],
    details: ['Коробка передач', 'Двигатель'],
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    serviceId: '636rovlrl',
    brand: 'DODGE',
    status: '',
    step: 0,
    history: [],
    details: ['Коробка передач', 'Воздушный фильтр'],
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    serviceId: 'l6n1r84fo',
    brand: 'Hyundai',
    status: '',
    step: 0,
    history: [],
    details: ['Двигатель', 'Воздушный фильтр'],
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    serviceId: 'l6n1r84fo',
    brand: 'Kia',
    status: '',
    step: 0,
    history: [],
    details: ['Карданный вал', 'Компрессор', 'Коробка передач', 'Моторное масло', 'Воздушный фильтр'],
  },
];

export default carParkMock;
